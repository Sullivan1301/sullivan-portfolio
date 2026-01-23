"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    type: "star" | "cube" | "circle";
    rotation: number;
    rotationSpeed: number;
    color: "red" | "teal";
    pulsePhase: number;
    attracted: boolean;
}

const RED = { r: 230, g: 57, b: 70 };
const TEAL = { r: 20, g: 100, b: 120 };

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000, clicking: false });
    const { scrollY } = useScroll();
    const scrollProgress = useTransform(scrollY, [0, 3000], [0, 1]);

    const handleClick = useCallback((e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const burstCount = 8;
        const types: Particle["type"][] = ["star", "cube", "circle"];
        const colors: Particle["color"][] = ["red", "teal"];

        for (let i = 0; i < burstCount; i++) {
            const angle = (Math.PI * 2 * i) / burstCount;
            particlesRef.current.push({
                x: e.clientX,
                y: e.clientY + window.scrollY,
                size: Math.random() * 6 + 4,
                speedX: Math.cos(angle) * (2 + Math.random() * 2),
                speedY: Math.sin(angle) * (2 + Math.random() * 2),
                opacity: 1,
                type: types[Math.floor(Math.random() * types.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulsePhase: Math.random() * Math.PI * 2,
                attracted: false,
            });
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 5;
        };

        resizeCanvas();
        window.addEventListener("click", resizeCanvas);
        // window.addEventListener("click", handleClick);

        const particleCount = 100;
        particlesRef.current = [];

        for (let i = 0; i < particleCount; i++) {
            const types: Particle["type"][] = ["star", "cube", "circle"];
            const colors: Particle["color"][] = ["red", "teal"];
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.6 + 0.2,
                type: types[Math.floor(Math.random() * types.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulsePhase: Math.random() * Math.PI * 2,
                attracted: false,
            });
        }

        const getColor = (color: "red" | "teal", opacity: number) => {
            const c = color === "red" ? RED : TEAL;
            return `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity})`;
        };

        const drawStar = (x: number, y: number, size: number, rotation: number, opacity: number, color: "red" | "teal") => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                const px = Math.cos(angle) * size;
                const py = Math.sin(angle) * size;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fillStyle = getColor(color, opacity);
            ctx.shadowColor = getColor(color, 0.8);
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.restore();
        };

        const drawCube = (x: number, y: number, size: number, rotation: number, opacity: number, color: "red" | "teal") => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            ctx.fillStyle = getColor(color, opacity * 0.3);
            ctx.strokeStyle = getColor(color, opacity);
            ctx.lineWidth = 1.5;
            ctx.shadowColor = getColor(color, 0.6);
            ctx.shadowBlur = 12;

            ctx.beginPath();
            ctx.rect(-size / 2, -size / 2, size, size);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-size / 2, -size / 2);
            ctx.lineTo(-size / 4, -size);
            ctx.lineTo(size * 0.75, -size);
            ctx.lineTo(size / 2, -size / 2);
            ctx.closePath();
            ctx.fillStyle = getColor(color, opacity * 0.5);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(size / 2, -size / 2);
            ctx.lineTo(size * 0.75, -size);
            ctx.lineTo(size * 0.75, 0);
            ctx.lineTo(size / 2, size / 2);
            ctx.closePath();
            ctx.fillStyle = getColor(color, opacity * 0.4);
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        };

        const drawCircle = (x: number, y: number, size: number, opacity: number, color: "red" | "teal") => {
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fillStyle = getColor(color, opacity);
            ctx.shadowColor = getColor(color, 0.8);
            ctx.shadowBlur = 20;
            ctx.fill();
        };

        let animationId: number;
        let scrollOffset = 0;
        let time = 0;

        const unsubscribe = scrollProgress.on("change", (v) => {
            scrollOffset = v * 500;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.02;

            const toRemove: number[] = [];

            particlesRef.current.forEach((particle, index) => {
                particle.speedX *= 0.995;
                particle.speedY *= 0.995;

                particle.x += particle.speedX;
                particle.y += particle.speedY + scrollOffset * 0.001;
                particle.rotation += particle.rotationSpeed;

                const pulse = Math.sin(time + particle.pulsePhase) * 0.3 + 1;

                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                const dx = mouseRef.current.x - particle.x;
                const dy = (mouseRef.current.y + window.scrollY) - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    if (mouseRef.current.clicking) {
                        particle.x += dx * force * 0.05;
                        particle.y += dy * force * 0.05;
                        particle.attracted = true;
                    } else {
                        particle.x -= dx * force * 0.03;
                        particle.y -= dy * force * 0.03;
                        particle.attracted = false;
                    }
                    particle.opacity = Math.min(1, particle.opacity + 0.02);
                    particle.rotationSpeed = (Math.random() - 0.5) * 0.08;
                } else {
                    particle.opacity = Math.max(0.2, particle.opacity - 0.005);
                    particle.attracted = false;
                }

                if (particle.opacity < 0.01) {
                    toRemove.push(index);
                    return;
                }

                const currentSize = particle.size * pulse;
                const currentOpacity = particle.opacity * (particle.attracted ? 1.5 : 1);

                switch (particle.type) {
                    case "star":
                        drawStar(particle.x, particle.y, currentSize, particle.rotation, currentOpacity, particle.color);
                        break;
                    case "cube":
                        drawCube(particle.x, particle.y, currentSize * 2, particle.rotation, currentOpacity, particle.color);
                        break;
                    case "circle":
                        drawCircle(particle.x, particle.y, currentSize, currentOpacity, particle.color);
                        break;
                }

                if (dist < 300 && index < particlesRef.current.length - 1) {
                    for (let j = index + 1; j < Math.min(index + 5, particlesRef.current.length); j++) {
                        const other = particlesRef.current[j];
                        const dx2 = other.x - particle.x;
                        const dy2 = other.y - particle.y;
                        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                        if (dist2 < 100) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.strokeStyle = particle.color === other.color
                                ? getColor(particle.color, 0.1 * (1 - dist2 / 100))
                                : `rgba(125, 78, 95, ${0.1 * (1 - dist2 / 100)})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                }
            });

            toRemove.reverse().forEach(i => {
                if (particlesRef.current.length > 80) {
                    particlesRef.current.splice(i, 1);
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseDown = () => {
            mouseRef.current.clicking = true;
        };

        const handleMouseUp = () => {
            mouseRef.current.clicking = false;
        };

        // window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        animate();

        return () => {
           // window.removeEventListener("resize", resizeCanvas);
            // window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationId);
            unsubscribe();
        };
    }, [scrollProgress, handleClick]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[1]"
                style={{ opacity: 0.6 }}
            />
            <FloatingElements />
        </>
    );
}

function FloatingElements() {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            <motion.div
                className="absolute top-[20%] left-[10%] w-8 h-8"
                style={{ y: y1, rotate: rotate1 }}
                whileHover={{ scale: 1.5 }}
            >
                <div className="w-full h-full border-2 border-[#146478]/40 rotate-45" />
            </motion.div>

            <motion.div
                className="absolute top-[40%] right-[15%] w-6 h-6"
                style={{ y: y2, rotate: rotate2 }}
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                        d="M12 2L14.5 9H22L16 14L18.5 21L12 16.5L5.5 21L8 14L2 9H9.5L12 2Z"
                        fill="rgba(230, 57, 70, 0.5)"
                        stroke="rgba(230, 57, 70, 0.8)"
                        strokeWidth="1"
                    />
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-[60%] left-[20%] w-4 h-4"
                style={{ y: y3 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="w-full h-full rounded-full bg-[#146478]/60" style={{ boxShadow: "0 0 20px rgba(20, 100, 120, 0.5)" }} />
            </motion.div>

            <motion.div
                className="absolute top-[30%] right-[25%] w-10 h-10"
                style={{ y: y1, rotate: rotate1 }}
            >
                <div className="w-full h-full border border-highlight/30 rounded-lg transform rotate-12" />
            </motion.div>

            <motion.div
                className="absolute top-[70%] right-[10%] w-5 h-5"
                style={{ y: y2, rotate: rotate2 }}
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                        d="M12 2L14.5 9H22L16 14L18.5 21L12 16.5L5.5 21L8 14L2 9H9.5L12 2Z"
                        fill="rgba(20, 100, 120, 0.5)"
                        stroke="rgba(20, 100, 120, 0.8)"
                        strokeWidth="1"
                    />
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-[50%] left-[5%] w-6 h-6"
                style={{ y: y3 }}
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-full h-full border-2 border-highlight/50" />
            </motion.div>

            <motion.div
                className="absolute top-[80%] left-[30%] w-3 h-3"
                style={{ y: y1 }}
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <div className="w-full h-full rounded-full bg-[#146478]/70" />
            </motion.div>

            <motion.div
                className="absolute top-[15%] right-[30%] w-4 h-4"
                style={{ y: y2, rotate: rotate1 }}
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                        d="M12 2L14.5 9H22L16 14L18.5 21L12 16.5L5.5 21L8 14L2 9H9.5L12 2Z"
                        fill="rgba(230, 57, 70, 0.6)"
                        stroke="rgba(230, 57, 70, 0.9)"
                        strokeWidth="1"
                    />
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-[25%] left-[40%] w-5 h-5"
                style={{ y: y3, rotate: rotate2 }}
            >
                <div className="w-full h-full border-2 border-[#146478]/50 rounded-full" />
            </motion.div>

            <motion.div
                className="absolute top-[55%] right-[35%] w-6 h-6"
                style={{ y: y1 }}
                animate={{ rotate: [0, -180, -360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-full h-full border border-[#146478]/40" />
            </motion.div>

            <motion.div
                className="absolute top-[85%] right-[20%] w-4 h-4"
                style={{ y: y2 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                <div className="w-full h-full rounded-full bg-highlight/50 glow-red" />
            </motion.div>

            <motion.div
                className="absolute top-[45%] left-[35%] w-3 h-3"
                style={{ y: y3 }}
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <div className="w-full h-full rounded-full bg-[#146478]/60" style={{ boxShadow: "0 0 15px rgba(20, 100, 120, 0.6)" }} />
            </motion.div>
        </div>
    );
}

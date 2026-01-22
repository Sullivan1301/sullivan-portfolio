"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function FloatingCube({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [-20, 20, -20],
            }}
            transition={{
                rotateX: { duration: 20, repeat: Infinity, ease: "linear", delay },
                rotateY: { duration: 15, repeat: Infinity, ease: "linear", delay },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
            <div
                className="w-16 h-16 relative"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute inset-0 bg-highlight/20 border border-highlight/30 backdrop-blur-sm" style={{ transform: "translateZ(32px)" }} />
                <div className="absolute inset-0 bg-highlight/10 border border-highlight/20 backdrop-blur-sm" style={{ transform: "translateZ(-32px)" }} />
                <div className="absolute inset-0 bg-highlight/15 border border-highlight/25 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(32px)" }} />
                <div className="absolute inset-0 bg-highlight/15 border border-highlight/25 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(32px)" }} />
                <div className="absolute inset-0 bg-highlight/10 border border-highlight/20 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(32px)" }} />
                <div className="absolute inset-0 bg-highlight/10 border border-highlight/20 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(32px)" }} />
            </div>
        </motion.div>
    );
}

function Tilt3DCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    if (!mounted) return <div className="max-w-4xl mx-auto text-center">{children}</div>;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="max-w-4xl mx-auto text-center"
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise" style={{ perspective: "1500px", position: "relative", zIndex: 1 }}>
            <div className="absolute inset-0 gradient-bg -z-10" />

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <FloatingCube className="top-24 right-24 hidden lg:block" delay={0} />
            <FloatingCube className="bottom-32 left-20 hidden lg:block" delay={2} />
            <FloatingCube className="top-1/3 left-32 hidden xl:block" delay={4} />

            <motion.div
                className="absolute top-20 right-40 w-2 h-2 bg-highlight rounded-full glow-red"
                animate={{ y: [-10, 10, -10], rotateZ: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-40 left-16 w-3 h-3 bg-highlight/80 rounded-full glow-red"
                animate={{ y: [-15, 15, -15], rotateZ: [0, -180, -360] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="container-custom relative z-10 pt-20"
                style={{ position: "relative", zIndex: 10 }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Tilt3DCard>
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full text-sm font-medium text-muted-foreground"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        <Sparkles size={16} className="text-highlight" />
                        <span>Disponible pour de nouvelles opportunités</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        style={{ transform: "translateZ(80px)" }}
                    >
                        <span className="block">Joro Sullivan</span>
                        <motion.span
                            className="block gradient-text"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                backgroundSize: "200% 200%",
                            }}
                        >
                            Rakotoniaina
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        Jeune diplômé en informatique • Fondateur de <span className="text-highlight">Tech Bloom Agency</span>
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        J&apos;accompagne les marques et projets dans leur croissance en ligne à travers des stratégies orientées résultats, une communication claire et des solutions digitales modernes.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        style={{ transform: "translateZ(60px)" }}
                    >
                        <Magnetic>
                            <motion.a
                                href="#contact"
                                className="px-8 py-4 bg-highlight text-highlight-foreground rounded-full font-medium text-base transition-all glow-red block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact Me
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.a
                                href="#projects"
                                className="px-8 py-4 glass-card rounded-full font-medium text-base transition-all border border-foreground/10 block"
                                whileHover={{ scale: 1.05, borderColor: "rgba(230, 57, 70, 0.5)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Projects
                            </motion.a>
                        </Magnetic>
                    </motion.div>
                </Tilt3DCard>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.5 },
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                >
                    <a href="#about" className="text-muted-foreground hover:text-highlight transition-colors">
                        <ArrowDown size={24} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
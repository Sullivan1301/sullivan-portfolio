"use client";

import { Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

function FloatingCube({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{
                rotateX: [0, 180],
                rotateY: [0, 180],
                y: [-10, 10, -10],
            }}
            transition={{
                rotateX: { duration: 12, repeat: Infinity, ease: "linear", delay },
                rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
            <div className="w-12 h-12 relative" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-highlight/15 border border-highlight/20 backdrop-blur-sm" style={{ transform: "translateZ(24px)" }} />
                <div className="absolute inset-0 bg-highlight/10 border border-highlight/15 backdrop-blur-sm" style={{ transform: "translateZ(-24px)" }} />
                <div className="absolute inset-0 bg-highlight/12 border border-highlight/18 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-highlight/12 border border-highlight/18 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-highlight/08 border border-highlight/12 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-highlight/08 border border-highlight/12 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(24px)" }} />
            </div>
        </motion.div>
    );
}

function Tilt3DCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const throttleRef = useRef<number>();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

    useEffect(() => setMounted(true), []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (throttleRef.current) return;

        throttleRef.current = requestAnimationFrame(() => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            x.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
            y.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
            throttleRef.current = undefined;
        });
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
            className="w-full max-w-4xl mx-auto text-center relative z-50 pointer-events-auto will-change-transform"
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden noise" style={{ zIndex: 10 }}>
            {/* Background Layer - Purement décoratif, aucune interaction */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                <div className="absolute inset-0 gradient-bg" />

                {/* Background blobs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating cubes */}
                <FloatingCube className="top-24 right-24 hidden lg:block" delay={0} />
                <FloatingCube className="bottom-32 left-20 hidden lg:block" delay={2} />
                <FloatingCube className="top-1/3 left-32 hidden xl:block" delay={4} />

                {/* Sparkles dots */}
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
            </div>

            {/* Hero content - Zone d'interaction limitée au centre sous la Navbar */}
            <motion.div 
                className="container-custom relative z-50 pt-28 pb-12 md:pt-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Tilt3DCard>
                    <div className="bg-background/95 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden group">
                        {/* Glass Overlay (effet brillant sur les bords) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0" />
                        
                        {/* Background glow internal (effet de profondeur interne) */}
                        <div className="absolute top-5 -right-16 w-40 h-40 bg-highlight/15 rounded-full blur-2xl group-hover:bg-highlight/25 transition-colors duration-700 pointer-events-none" />
                        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent/15 rounded-full blur-2xl group-hover:bg-accent/25 transition-colors duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Photo de profil */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative w-32 h-32 sm:w-32 sm:h-32">
                                    <div className="absolute inset-0 rounded-full bg-highlight/20 animate-pulse blur-xl"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-highlight/40 shadow-xl bg-muted">
                                        <Image
                                            src="/sullivan.jpeg"
                                            alt="Portrait professionnel de Sullivan Joro Rakotoniaina, développeur web Next.js et entrepreneur digital basé à Madagascar"
                                            fill
                                            className="object-cover w-full h-full"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-highlight/10 border border-highlight/20 rounded-full text-sm font-semibold text-highlight">
                                <Sparkles size={16} />
                                <span>Disponible pour de nouvelles opportunités</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 text-foreground">
                                <span className="block opacity-90">Joro Sullivan</span>
                                <motion.span
                                    className="block gradient-text"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    Rakotoniaina
                                </motion.span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium max-w-lg mx-auto leading-tight">
                                Parcours axé sur la mise en œuvre digitale et la gestion de petites équipes techniques
                            </p>
                            
                            <p className="text-sm sm:text-base text-muted-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
                                Avec une expérience pratique en JavaScript/TypeScript et Next.js, je propose d&apos;accélérer vos livraisons en assurant un développement front-end soigné, des déploiements fiables et une intégration continue adaptée à votre roadmap.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Magnetic>
                                    <motion.a 
                                        href="#contact" 
                                        className="px-10 py-5 bg-highlight text-highlight-foreground rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)] hover:shadow-highlight/40 block"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Contact Me
                                    </motion.a>
                                </Magnetic>
                                <Magnetic>
                                    <motion.a 
                                        href="#projects" 
                                        className="px-10 py-5 bg-foreground/5 backdrop-blur-md rounded-full font-bold text-lg transition-all border border-foreground/10 block hover:bg-foreground/10"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View Projects
                                    </motion.a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </Tilt3DCard>
            </motion.div>
        </section>
    );
}

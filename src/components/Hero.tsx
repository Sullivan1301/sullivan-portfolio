"use client";

import { Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import GlassCard from "@/components/GlassCard";

/* ------------------------------------------------------------------ */
/*  FloatingCube – decorative 3-D element with violet-gold palette    */
/* ------------------------------------------------------------------ */
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
                <div className="absolute inset-0 bg-primary-violet/20 border border-primary-violet-light/30 backdrop-blur-sm" style={{ transform: "translateZ(24px)" }} />
                <div className="absolute inset-0 bg-primary-violet/10 border border-primary-violet-light/20 backdrop-blur-sm" style={{ transform: "translateZ(-24px)" }} />
                <div className="absolute inset-0 bg-accent-gold/15 border border-accent-gold/25 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-accent-gold/10 border border-accent-gold/20 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-primary-violet/10 border border-primary-violet-light/15 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(24px)" }} />
                <div className="absolute inset-0 bg-primary-violet/10 border border-primary-violet-light/15 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(24px)" }} />
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  Tilt3DCard – perspective tilt following cursor                    */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
export default function Hero() {
    return (
        <section
            className="relative isolate min-h-screen flex items-center justify-center overflow-hidden noise"
            style={{ zIndex: 10 }}
        >
            {/* -------- Background layer (purely decorative) -------- */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                {/* Deep violet base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-surface to-primary-violet-dark/40" />

                {/* Animated violet glow blob */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-primary-violet/25 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Animated gold glow blob */}
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-gold/15 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Tertiary violet haze */}
                <motion.div
                    className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary-violet-dark/30 rounded-full blur-[80px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Floating cubes */}
                <FloatingCube className="top-24 right-24 hidden lg:block" delay={0} />
                <FloatingCube className="bottom-32 left-20 hidden lg:block" delay={2} />
                <FloatingCube className="top-1/3 left-32 hidden xl:block" delay={4} />

                {/* Sparkle dots */}
                <motion.div
                    className="absolute top-20 right-40 w-2 h-2 bg-accent-gold rounded-full glow-gold"
                    animate={{ y: [-10, 10, -10], rotateZ: [0, 180, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 left-16 w-3 h-3 bg-primary-violet-light/80 rounded-full glow-violet"
                    animate={{ y: [-15, 15, -15], rotateZ: [0, -180, -360] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/3 right-20 w-2 h-2 bg-accent-gold-light rounded-full glow-gold"
                    animate={{ y: [-8, 12, -8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            {/* -------- Hero content -------- */}
            <motion.div
                className="container-custom relative z-50 pt-28 pb-12 md:pt-40"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <Tilt3DCard>
                    <GlassCard className="group border border-primary-violet-light/20 shadow-[0_40px_100px_-20px_rgba(124,58,237,0.5)]">
                        {/* Glass overlay – glossy edge */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-violet-light/5 via-transparent to-accent-gold/5 pointer-events-none z-0" />

                        {/* Internal glow – violet top-right */}
                        <div className="absolute top-5 -right-16 w-48 h-48 bg-primary-violet/20 rounded-full blur-3xl group-hover:bg-primary-violet/35 transition-colors duration-700 pointer-events-none" />
                        {/* Internal glow – gold bottom-left */}
                        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent-gold/15 rounded-full blur-3xl group-hover:bg-accent-gold/30 transition-colors duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Profile photo */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                                    {/* Pulsing ring */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-violet/40 to-accent-gold/40 animate-pulse blur-xl" />
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-violet-light/50 shadow-[0_0_30px_rgba(124,58,237,0.4)] bg-muted">
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

                            {/* Availability badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-primary-violet/15 border border-primary-violet-light/30 rounded-full text-sm font-semibold text-primary-violet-light"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Sparkles size={16} className="text-accent-gold" />
                                <span>Disponible pour de nouvelles opportunités</span>
                            </motion.div>

                            {/* Name */}
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

                            {/* Tagline */}
                            <p className="text-lg sm:text-xl text-primary-violet-light/80 mb-4 font-medium max-w-lg mx-auto leading-tight">
                                Parcours axé sur la mise en œuvre digitale et la gestion de petites équipes techniques
                            </p>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-primary-violet-light/60 max-w-xl mx-auto mb-10 leading-relaxed">
                                Avec une expérience pratique en JavaScript/TypeScript et Next.js, je propose d&apos;accélérer vos livraisons en assurant un développement front-end soigné, des déploiements fiables et une intégration continue adaptée à votre roadmap.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Magnetic>
                                    <motion.a
                                        href="#contact"
                                        className="group/btn relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden block"
                                        whileHover={{ scale: 1.07, y: -3 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {/* Gradient background */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary-violet via-primary-violet-dark to-primary-violet transition-transform duration-300 group-hover/btn:scale-105" />
                                        {/* Gold shimmer on hover */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                        {/* Shadow */}
                                        <span className="absolute inset-0 shadow-[0_12px_40px_-10px_rgba(124,58,237,0.7)] group-hover/btn:shadow-[0_16px_50px_-10px_rgba(124,58,237,0.9)] transition-shadow duration-300" />
                                        <span className="relative z-10 text-primary-violet-light font-semibold">Contact Me</span>
                                    </motion.a>
                                </Magnetic>
                                <Magnetic>
                                    <motion.a
                                        href="#projects"
                                        className="group/btn relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden block border border-primary-violet-light/30 backdrop-blur-md"
                                        whileHover={{ scale: 1.07, y: -3 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <span className="absolute inset-0 bg-primary-violet/5 group-hover/btn:bg-primary-violet/15 transition-colors duration-300" />
                                        <span className="absolute inset-0 border border-accent-gold/0 group-hover/btn:border-accent-gold/30 transition-colors duration-500 rounded-full" />
                                        <span className="relative z-10 text-foreground font-semibold">View Projects</span>
                                    </motion.a>
                                </Magnetic>
                            </div>
                        </div>
                    </GlassCard>
                </Tilt3DCard>
            </motion.div>
        </section>
    );
}

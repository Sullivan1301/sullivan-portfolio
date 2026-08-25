"use client";

import { ArrowDown, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

function FloatingCube({ className, delay = 0 }: { className?: string; delay?: number }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            aria-hidden="true"
            className={`absolute pointer-events-none ${className}`}
            animate={reduceMotion ? undefined : { rotate: [0, 180, 360], y: [-8, 8, -8] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay }}
        >
            <div className="h-12 w-12 rotate-12 border border-primary-violet-light/25 bg-primary-violet/10 backdrop-blur-sm" />
        </motion.div>
    );
}

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="noise relative isolate flex min-h-[calc(100svh-1rem)] items-center overflow-hidden pt-24">
            <div className="pointer-events-none absolute inset-0 -z-10 select-none" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-surface to-primary-violet-dark/40" />
                <motion.div
                    className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary-violet/25 blur-[120px]"
                    animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <FloatingCube className="right-24 top-28 hidden lg:block" />
                <FloatingCube className="bottom-28 left-20 hidden lg:block" delay={2} />
            </div>

            <div className="container-custom relative z-10 py-16 md:py-24">
                <GlassCard className="mx-auto max-w-5xl border-primary-violet-light/20">
                    <div className="pointer-events-none absolute -right-16 top-5 h-48 w-48 rounded-full bg-primary-violet/20 blur-3xl" />
                    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                        <p className="mb-6 inline-flex rounded-full border border-primary-violet-light/30 bg-primary-violet/15 px-4 py-2 text-sm font-semibold text-[#f8f9fa]">
                            Basé à Antananarivo · Disponible en CDI, freelance ou à distance
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#f8f9fa] sm:text-5xl md:text-6xl lg:text-7xl">
                            Community Manager <span className="text-accent-gold">&amp;</span> Content Creator
                        </h1>
                        <p className="mt-7 max-w-3xl text-base font-medium leading-relaxed text-primary-violet-light/80 sm:text-lg md:text-xl">
                            J’aide les marques à développer leur visibilité grâce à des contenus engageants, une stratégie éditoriale claire et un suivi régulier des performances.
                        </p>
                        <p className="mt-5 text-sm font-semibold tracking-wide text-primary-violet-light sm:text-base">
                            Social Media · Reels · Storytelling · Canva · CapCut · Meta Business Suite
                        </p>
                        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-highlight px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_32px_rgba(230,57,70,0.28)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark">
                                Voir mes réalisations Social Media <ArrowDown size={18} aria-hidden="true" />
                            </a>
                            <a href="/CV_Joro%20Sullivan_RAKOTONIAINA.pdf" download className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f8f9fa]/40 bg-[#f8f9fa]/10 px-7 py-3.5 text-base font-semibold text-[#f8f9fa] transition-colors hover:border-accent-gold hover:bg-[#f8f9fa]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark">
                                <Download size={18} aria-hidden="true" /> Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function FloatingCube({ className, delay = 0 }: { className?: string; delay?: number }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            aria-hidden="true"
            className={`absolute pointer-events-none ${className}`}
            animate={reduceMotion ? undefined : { rotate: [0, 180, 360], y: [-8, 8, -8] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay }}
        >
            <div className="h-12 w-12 rotate-12 border border-primary-violet/20 bg-primary-violet/5 backdrop-blur-sm" />
        </motion.div>
    );
}

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="noise relative isolate flex min-h-[calc(100svh-1rem)] items-center overflow-hidden pt-24">
            {/* Fond : celui du site (clair en theme clair, sombre en theme sombre) + halos doux */}
            <div className="pointer-events-none absolute inset-0 -z-10 select-none" aria-hidden="true">
                <motion.div
                    className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary-violet/15 blur-[120px]"
                    animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -right-20 bottom-10 h-[22rem] w-[22rem] rounded-full bg-highlight/10 blur-[120px]" />
                <FloatingCube className="right-24 top-28 hidden lg:block" />
                <FloatingCube className="bottom-28 left-20 hidden lg:block" delay={2} />
            </div>

            <div className="container-custom relative z-10 py-16 md:py-24">
                <div className="glass-card relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-8 md:p-12">
                    <div className="pointer-events-none absolute -right-16 top-5 h-48 w-48 rounded-full bg-primary-violet/15 blur-3xl" />
                    <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
                        {/* Texte : a gauche sur desktop */}
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <p className="mb-6 inline-flex rounded-full border border-highlight/20 bg-highlight/10 px-4 py-2 text-sm font-semibold text-foreground">
                                Accompagnateur Digital · Antananarivo
                            </p>
                            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3rem] lg:text-[3.5rem]">
                                Comprendre, éclairer, guider, construire.
                            </h1>
                            <p className="mt-7 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                                J’aide les personnes et les petites structures à avancer dans le digital avec les moyens, les connaissances et le réseau qu’elles ont déjà.
                            </p>
                            <p className="mt-5 text-sm font-semibold tracking-wide text-highlight sm:text-base">
                                Stratégie digitale - Social media - IA - Projets web - Apprentissage continu
                            </p>
                            <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
                                <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-highlight px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_32px_rgba(230,57,70,0.28)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                                    Voir ce que je construis <ArrowDown size={18} aria-hidden="true" />
                                </a>
                                <a href="/CV_Joro%20Sullivan_RAKOTONIAINA.pdf" download className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground/[0.03] px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-highlight hover:bg-highlight/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                                    <Download size={18} aria-hidden="true" /> Télécharger mon CV
                                </a>
                            </div>
                        </div>

                        {/* Photo : a droite sur desktop, au-dessus sur mobile */}
                        <motion.div
                            className="order-first mx-auto w-full max-w-[17rem] md:order-last md:max-w-none"
                            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="relative overflow-hidden rounded-[2rem] border border-highlight/15 shadow-[0_24px_60px_-30px_rgba(26,26,46,0.45)]">
                                <Image
                                    src="/sullivan.jpeg"
                                    alt="Portrait de Joro Sullivan Rakotoniaina, accompagnateur digital"
                                    width={896}
                                    height={1193}
                                    priority
                                    sizes="(max-width: 767px) 17rem, (max-width: 1023px) 40vw, 420px"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

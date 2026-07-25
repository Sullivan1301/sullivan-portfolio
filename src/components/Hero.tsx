"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import Magnetic from "@/components/ui/Magnetic";
import { trackGoogleEvent } from "@/lib/analytics";

const growthOutcomes = [
    "Des sites web pensés pour convertir",
    "Des réseaux sociaux qui génèrent des prospects",
    "Des stratégies digitales pilotées par les résultats",
];

function FloatingCube({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            aria-hidden="true"
            className={`absolute pointer-events-none ${className}`}
            animate={{ rotate: [0, 180, 360], y: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay }}
        >
            <div className="h-12 w-12 rotate-12 border border-primary-violet-light/25 bg-primary-violet/10 backdrop-blur-sm" />
        </motion.div>
    );
}

export default function Hero() {
    const bookingMessage = encodeURIComponent(
        "Bonjour Sullivan, j’aimerais réserver un appel pour discuter de la croissance digitale de mon entreprise."
    );

    return (
        <section className="noise relative isolate flex min-h-screen items-center overflow-hidden pt-24">
            <div className="pointer-events-none absolute inset-0 -z-10 select-none" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-surface to-primary-violet-dark/40" />
                <motion.div
                    className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary-violet/25 blur-[120px]"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-gold/15 blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <FloatingCube className="right-24 top-28 hidden lg:block" />
                <FloatingCube className="bottom-28 left-20 hidden lg:block" delay={2} />
            </div>

            <motion.div
                className="container-custom relative z-10 py-16 md:py-24"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <GlassCard className="mx-auto max-w-5xl border-primary-violet-light/20">
                    <div className="pointer-events-none absolute -right-16 top-5 h-48 w-48 rounded-full bg-primary-violet/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-gold/15 blur-3xl" />

                    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                        <motion.div
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-violet-light/30 bg-primary-violet/15 px-4 py-2 text-sm font-semibold text-primary-violet-light"
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25, duration: 0.4 }}
                        >
                            <Sparkles size={16} className="text-accent-gold" aria-hidden="true" />
                            <span>Digital Growth Partner pour PME · Madagascar</span>
                        </motion.div>

                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#f8f9fa] sm:text-5xl md:text-6xl lg:text-7xl">
                            J’aide les PME à transformer leur présence digitale en clients.
                        </h1>

                        <p className="mt-7 max-w-3xl text-base font-medium leading-relaxed text-primary-violet-light/80 sm:text-lg md:text-xl">
                            Développement web <span aria-hidden="true">·</span> Social Media <span aria-hidden="true">·</span> IA <span aria-hidden="true">·</span> Contenu stratégique
                        </p>

                        <ul className="mt-9 grid w-full max-w-3xl gap-4 text-left sm:grid-cols-3">
                            {growthOutcomes.map((outcome) => (
                                <li
                                    key={outcome}
                                    className="flex items-start gap-3 rounded-2xl border border-primary-violet-light/15 bg-background-dark/30 p-4 text-sm font-medium leading-snug text-[#f8f9fa] sm:text-base"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                                        <Check size={15} strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <Magnetic>
                                <motion.a
                                    href={`https://wa.me/261341060802?text=${bookingMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block min-h-11 overflow-hidden rounded-full px-9 py-4 text-base font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark sm:text-lg"
                                    aria-label="Réserver un appel avec Sullivan sur WhatsApp"
                                    onClick={() =>
                                        trackGoogleEvent("generate_lead", {
                                            location: "hero",
                                            method: "whatsapp",
                                        })
                                    }
                                    whileHover={{ scale: 1.04, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-highlight via-red-500 to-highlight" />
                                    <span className="relative z-10">Réserver un appel</span>
                                </motion.a>
                            </Magnetic>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
}

"use client";

import { Award, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const visionPoints = [
    {
        icon: Lightbulb,
        title: "Innovation utile",
        description: "Choisir les idées et les outils qui créent une vraie valeur pour votre activité.",
    },
    {
        icon: Rocket,
        title: "Résultats mesurables",
        description: "Définir des objectifs clairs, suivre les bons indicateurs et améliorer chaque action.",
    },
    {
        icon: Users,
        title: "Collaboration directe",
        description: "Avancer avec transparence, écoute et décisions partagées à chaque étape.",
    },
    {
        icon: Award,
        title: "Excellence d’exécution",
        description: "Soigner la stratégie, les contenus et l’expérience jusque dans les détails.",
    },
];

export default function Vision() {
    return (
        <section id="vision" className="section-padding relative bg-muted/30" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="mx-auto mb-14 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-highlight">
                        Ma philosophie
                    </span>
                    <TextReveal className="mt-4">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            Je crois qu’une entreprise ne devrait pas investir dans le digital pour être présente en ligne. Elle devrait y investir pour faire grandir son activité.
                        </h2>
                    </TextReveal>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        Chaque site, contenu ou campagne doit répondre à un objectif business précis : attirer, convaincre, convertir ou fidéliser.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {visionPoints.map((point, index) => (
                        <Magnetic key={point.title} strength={0.08}>
                            <motion.article
                                className="glass-card group h-full rounded-2xl p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-highlight/20 bg-highlight/10 text-highlight transition-colors group-hover:bg-highlight/20">
                                    <point.icon size={22} aria-hidden="true" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-highlight">
                                    {point.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {point.description}
                                </p>
                            </motion.article>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

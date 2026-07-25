"use client";

import { Handshake, Layers3, Target } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const cards = [
    {
        icon: Target,
        title: "Une vision business",
        description: "Nous partons de votre objectif de croissance avant de choisir les canaux, les contenus ou les technologies.",
    },
    {
        icon: Layers3,
        title: "Une exécution structurée",
        description: "Tech Bloom Agency porte la production et la livraison des projets avec les compétences adaptées à chaque mission.",
    },
    {
        icon: Handshake,
        title: "Un partenaire impliqué",
        description: "Vous échangez directement avec moi pour garder une stratégie claire, des décisions rapides et un suivi transparent.",
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-highlight">
                        Le modèle
                    </span>
                    <TextReveal className="mt-4">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            Un partenaire pour la stratégie. Une structure pour l’exécution.
                        </h2>
                    </TextReveal>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Je reste votre interlocuteur pour comprendre vos enjeux, définir la stratégie et piloter les résultats. Tech Bloom Agency mobilise ensuite la structure nécessaire pour produire et livrer le projet.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <Magnetic key={card.title} strength={0.1}>
                            <motion.article
                                className="glass-card group h-full rounded-2xl p-8"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/10 text-highlight transition-colors group-hover:bg-highlight/20">
                                    <card.icon size={24} aria-hidden="true" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-highlight">
                                    {card.title}
                                </h3>
                                <p className="leading-relaxed text-muted-foreground">
                                    {card.description}
                                </p>
                            </motion.article>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

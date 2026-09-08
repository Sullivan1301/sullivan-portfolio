"use client";

import { Handshake, Layers3, Target } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const cards = [
    {
        icon: Target,
        title: "Clarifier avant de produire",
        description: "Avant un site, une campagne ou un contenu, je cherche a comprendre ce qui bloque, ce qui existe deja et ce qui compte vraiment.",
    },
    {
        icon: Layers3,
        title: "Construire par etapes",
        description: "Je prefere une premiere version utile, testable et ameliorable a une grande promesse difficile a tenir.",
    },
    {
        icon: Handshake,
        title: "Avancer avec les autres",
        description: "Je peux piloter, chercher, connecter des competences et collaborer avec une equipe selon les besoins du projet.",
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
                        Ma posture
                    </span>
                    <TextReveal className="mt-4">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            Je ne viens pas avec toutes les reponses. Je viens pour chercher, comprendre et construire avec toi.
                        </h2>
                    </TextReveal>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Mon avantage n’est pas de jouer à l’expert qui sait tout. Il est dans ma capacité à observer, poser les bonnes questions, tester des pistes et transformer le flou en prochaines actions claires.
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

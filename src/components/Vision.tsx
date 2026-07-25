"use client";

import { Lightbulb, Rocket, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const visionPoints = [
    {
        icon: Lightbulb,
        title: "Création utile",
        description: "Produire des contenus qui servent réellement la marque, son audience et ses objectifs.",
    },
    {
        icon: Rocket,
        title: "Impact mesurable",
        description: "Mesurer la portée, l'engagement et la croissance pour ajuster les actions en continu.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Travailler avec des équipes, des marques et des entrepreneurs avec une communication claire.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Viser l'excellence dans la stratégie, l'exécution et la cohérence de marque.",
    },
];

export default function Vision() {
    return (
        <section className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
            <span className="text-sm font-medium text-highlight uppercase tracking-wider">
              Vision
            </span>
                        <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                            <h2>Mes objectifs</h2>
                        </TextReveal>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Ma vision est de construire une présence digitale claire, cohérente et performante pour les marques que j&apos;accompagne.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            À travers mes collaborations, mes projets freelance et Tech Bloom Agency, je m&apos;engage à accompagner les marques dans leur croissance en ligne avec des solutions adaptées.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {visionPoints.map((point, index) => (
                            <Magnetic key={index} strength={0.1}>
                                <motion.div
                                    className="glass-card rounded-2xl p-6 group cursor-default"
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-4 group-hover:bg-highlight/20 transition-colors"
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                    >
                                        <point.icon className="text-highlight" size={22} />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-highlight transition-colors">{point.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {point.description}
                                    </p>
                                </motion.div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { Lightbulb, Rocket, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const visionPoints = [
    {
        icon: Lightbulb,
        title: "Innovation continue",
        description: "Rester à la pointe des tendances technologiques et marketing pour offrir les meilleures solutions.",
    },
    {
        icon: Rocket,
        title: "Impact mesurable",
        description: "Chaque projet doit générer des résultats concrets et quantifiables pour les clients.",
    },
    {
        icon: Users,
        title: "Collaboration globale",
        description: "Travailler avec des équipes internationales pour créer des solutions à portée mondiale.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Viser l'excellence dans chaque aspect du travail, du code à la communication.",
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
                            Ma vision est de devenir un acteur clé dans la transformation digitale des entreprises, en combinant expertise technique, créativité stratégique et orientation résultats.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            À travers Tech Bloom Agency et mes collaborations, je m&apos;engage à accompagner les marques dans leur croissance en ligne avec des solutions innovantes et sur mesure.
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

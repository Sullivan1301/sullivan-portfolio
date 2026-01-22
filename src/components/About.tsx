"use client";

import { User, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const cards = [
    {
        icon: User,
        title: "Profil",
        description: "Jeune diplômé en informatique avec une solide expérience dans la gestion de projets digitaux. Polyvalent, autonome et orienté résultats.",
    },
    {
        icon: Target,
        title: "Approche",
        description: "Je combine expertise technique et vision stratégique pour délivrer des solutions digitales performantes et adaptées aux objectifs de chaque client.",
    },
    {
        icon: Globe,
        title: "Disponibilité",
        description: "Ouvert aux opportunités en télétravail ou présentiel. Prêt à collaborer avec des équipes nationales et internationales sur des projets ambitieux.",
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">
            À propos
          </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Qui je suis</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Titulaire d&apos;une licence en informatique et fondateur de Tech Bloom Agency, je suis un professionnel du digital passionné par la création de valeur pour les marques et entreprises.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Magnetic key={index} strength={0.1}>
                            <motion.div
                                className="glass-card rounded-2xl p-8 group h-full"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -8 }}
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6 group-hover:bg-highlight/20 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <card.icon className="text-highlight" size={24} />
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-highlight transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const educations = [
    {
        icon: GraduationCap,
        degree: "Licence en Informatique",
        school: "Haute École d'Informatique",
        location: "Antananarivo",
        period: "octobre 2022 - juin 2026",
        description: "Formation en informatique couvrant la programmation, les bases de données, les systèmes d'information, l'architecture logicielle et les technologies web."
    }
];

export default function Education() {
    return (
        <section id="education" className="section-padding relative bg-muted/30" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
                        Formation
                    </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Parcours académique</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Une formation en informatique complétée par une expérience terrain en communication digitale et en gestion de projet.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <motion.div
                            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-highlight via-highlight/50 to-transparent hidden md:block"
                            initial={{ scaleY: 0, originY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />

                        <div className="space-y-8">
                            {educations.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex gap-6 md:gap-10"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <Magnetic strength={0.2}>
                                        <motion.div
                                            className="relative z-10 flex-shrink-0"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-highlight/10 flex items-center justify-center glass-card border-2 border-highlight/20">
                                                <edu.icon className="text-highlight" size={24} />
                                            </div>
                                        </motion.div>
                                    </Magnetic>

                                    <motion.div
                                        className="glass-card rounded-2xl p-6 md:p-8 flex-1 group"
                                        whileHover={{ scale: 1.01, y: -3 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-semibold group-hover:text-highlight transition-colors">{edu.degree}</h3>
                                            <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                                        </div>
                                        <p className="text-highlight font-medium mb-2">{edu.school}</p>
                                        <p className="text-muted-foreground text-sm mb-4">{edu.location}</p>
                                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

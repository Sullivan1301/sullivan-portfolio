"use client";

import { Trophy, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const activities = [
    {
        icon: Trophy,
        title: "Ambassadeur & Département Communication et Partenariat",
        organization: "ONG Kariera Madagascar",
        period: "février 2026",
        description: "Représentation de l'organisation et gestion de la communication, développement de partenariats stratégiques."
    },
    {
        icon: Users,
        title: "Responsable Logistique",
        organization: "Bureau des Étudiants - HEI",
        period: "2024–2026",
        description: "Organisation et coordination des événements étudiants, gestion des ressources logistiques et planification des activités."
    },
    {
        icon: Heart,
        title: "Vice-Président",
        organization: "Bureau des Étudiants - HEI",
        period: "2023–2024",
        description: "Support à la présidence, coordination des équipes, participation à la prise de décisions stratégiques pour les étudiants."
    }
];

export default function Activities() {
    return (
        <section id="activities" className="section-padding relative bg-muted/30" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
                        Activités
                    </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Activités & Engagements</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Des engagements variés qui ont contribué à façonner mes valeurs et renforcer mes compétences humaines.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="glass-card rounded-2xl p-6 md:p-8"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ scale: 1.01, y: -3 }}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <Magnetic strength={0.2}>
                                        <motion.div
                                            className="relative z-10 flex-shrink-0"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-highlight/10 flex items-center justify-center glass-card border-2 border-highlight/20">
                                                <activity.icon className="text-highlight" size={24} />
                                            </div>
                                        </motion.div>
                                    </Magnetic>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-semibold">{activity.title}</h3>
                                            <span className="text-sm text-muted-foreground font-medium">{activity.period}</span>
                                        </div>
                                        <p className="text-highlight font-medium mb-2">{activity.organization}</p>
                                        <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { Rocket, ShoppingBag, Smartphone, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const experiences = [
    {
        icon: Rocket,
        title: "Fondateur & Manager",
        company: "Tech Bloom Agency",
        period: "Nov 2025 - Aujourd'hui",
        description: "Direction stratégique et opérationnelle de l'agence. Développement de solutions digitales pour des clients variés. Gestion d'équipe et coordination des projets.",
        highlights: ["Leadership", "Stratégie digitale", "Gestion de projet"],
    },
    {
        icon: ShoppingBag,
        title: "Responsable Marketing Digital",
        company: "RunRobe",
        period: "Mai 2025 - Aujourd'hui",
        description: "Élaboration et mise en œuvre de la stratégie marketing digitale. Gestion des campagnes publicitaires et optimisation des conversions.",
        highlights: ["Marketing digital", "E-commerce", "Croissance"],
    },
    {
        icon: Smartphone,
        title: "Community Manager",
        company: "Girl's Touch Erica",
        period: "Fév 2025 - Aujourd'hui",
        description: "Gestion complète des réseaux sociaux. Création de contenu engageant et développement de la communauté en ligne.",
        highlights: ["Social Media", "Création de contenu", "Engagement"],
    },
    {
        icon: Monitor,
        title: "IT Support",
        company: "Haute École d'Informatique",
        period: "2023",
        description: "Support technique et maintenance des systèmes informatiques. Assistance aux utilisateurs et résolution de problèmes.",
        highlights: ["Support technique", "Maintenance IT", "Formation"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
    <div className="container-custom">
    <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
        Parcours
        </span>
        <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
        <h2>Expérience professionnelle</h2>
    </TextReveal>
    <p className="text-lg text-muted-foreground leading-relaxed">
        Un parcours riche en projets variés, démontrant polyvalence et capacité d&apos;adaptation.
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
        {experiences.map((exp, index) => (
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
    <exp.icon className="text-highlight" size={24} />
    </div>
    </motion.div>
    </Magnetic>

    <motion.div
    className="glass-card rounded-2xl p-6 md:p-8 flex-1 group"
    whileHover={{ scale: 1.01, y: -3 }}
    transition={{ type: "spring", stiffness: 400 }}
>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
    <h3 className="text-xl font-semibold group-hover:text-highlight transition-colors">{exp.title}</h3>
        <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
        </div>
        <p className="text-highlight font-medium mb-3">{exp.company}</p>
        <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
        {exp.highlights.map((highlight, hIndex) => (
                <motion.span
                    key={hIndex}
            className="px-3 py-1 text-xs font-medium bg-highlight/10 text-highlight rounded-full border border-highlight/20"
            whileHover={{ scale: 1.05 }}
>
    {highlight}
    </motion.span>
))}
    </div>
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

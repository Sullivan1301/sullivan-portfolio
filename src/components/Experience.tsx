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
        period: "novembre 2025 - aujourd'hui",
        description: "Création et gestion d'une agence digitale spécialisée en développement web, branding & identité visuelle, marketing digital et community management. Accompagnement des PME, TPE et entrepreneurs locaux et internationaux dans leur digitalisation.",
        highlights: ["Leadership", "Stratégie digitale", "Gestion de projet"],
    },
    {
        icon: Monitor,
        title: "Tech Lead Freelance",
        company: "Freelance",
        period: "février 2025 - août 2025",
        description: "Gestion d'une équipe de développeurs freelance pour la réalisation de projets web et mobile. Collaboration avec les clients pour comprendre leurs besoins et proposer des solutions adaptées. Mise en place de bonnes pratiques de développement et de suivi de projet.",
        highlights: ["Leadership technique", "Gestion d'équipe", "Développement web"],
    },
    {
        icon: ShoppingBag,
        title: "Responsable Marketing Digital",
        company: "RunRobe",
        period: "mai 2025 - aujourd'hui",
        description: "Élaboration et mise en œuvre de la stratégie digitale de la boutique afin de promouvoir les produits (robes et chaussures), attirer et fidéliser la clientèle en utilisant les réseaux sociaux, la publicité en ligne, le contenu visuel et les outils numériques adaptés.",
        highlights: ["Marketing digital", "E-commerce", "Stratégie de contenu"],
    },
    {
        icon: Smartphone,
        title: "Community Manager - Coordinateur d'activités Informatiques",
        company: "Girl's Touch Erica",
        period: "février 2025 - novembre 2026",
        description: "Gestion de la communication digitale et coordination des activités digitales liées à la page. Conception et réalisation de supports visuels (photos, montages et vidéos) pour renforcer la visibilité et l'image de la marque. Collaboration avec l'équipe pour planifier, publier et optimiser les contenus en ligne.",
        highlights: ["Social Media", "Création de contenu", "Community Management"],
    },
    {
        icon: Monitor,
        title: "IT Support",
        company: "Haute École d'Informatique",
        period: "février 2023 - août 2023",
        description: "Assistance technique aux enseignants et aux étudiants sur l'utilisation des matériels. Surveillance des équipements pour garantir leur bon fonctionnement. Intervention dans l'installation et la configuration des systèmes et des matériels selon les besoins pédagogiques.",
        highlights: ["Support technique", "Maintenance IT", "Configuration système"],
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

"use client";

import { Rocket, Smartphone, Monitor, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const experiences = [
    {
        icon: Sparkles,
        title: "Assistant Marketing et Community Manager",
        company: "Passion Prestige Madagascar",
        period: "depuis mai 2026",
        description: "Gestion de la présence digitale de marques des secteurs du luxe, de la beauté, du bien-être et de la parfumerie. Élaboration des stratégies éditoriales, création de publications, carrousels, vidéos et Reels, rédaction des captions, planification des calendriers et suivi des performances.",
        highlights: ["Marketing", "Community Management", "Création de contenu", "Analyse des performances"],
    },
    {
        icon: Rocket,
        title: "Responsable Marketing Digital",
        company: "RunRobe",
        period: "depuis mai 2025",
        description: "Élaboration et mise en œuvre de la stratégie digitale de la boutique pour promouvoir les robes et les chaussures, attirer et fidéliser la clientèle grâce aux réseaux sociaux, à la publicité en ligne et au contenu visuel.",
        highlights: ["Marketing digital", "Réseaux sociaux", "Publicité en ligne", "Contenu visuel"],
    },
    {
        icon: Monitor,
        title: "Tech Lead Freelance",
        company: "Freelance",
        period: "février 2025 - août 2025",
        description: "Gestion d’une équipe de développeurs pour la réalisation de projets web et mobile. Collaboration avec les clients pour comprendre leurs besoins, proposer des solutions adaptées et structurer le suivi de projet.",
        highlights: ["Leadership technique", "Gestion d’équipe", "Développement web", "Projets mobiles"],
    },
    {
        icon: Smartphone,
        title: "Community Manager - Coordinateur d'activités Informatiques",
        company: "Girl's Touch Erica",
        period: "février 2025 - novembre 2025",
        description: "Gestion de la communication digitale et coordination des activités de la page. Conception de photos, montages et vidéos, puis planification, publication et optimisation des contenus avec l’équipe pour renforcer la visibilité de la marque.",
        highlights: ["Social Media", "Création visuelle", "Vidéos", "Community Management"],
    },
    {
        icon: Monitor,
        title: "IT Support",
        company: "Haute École d'Informatique",
        period: "février 2023 - août 2023",
        description: "Assistance technique aux enseignants et aux étudiants, surveillance des équipements et intervention sur l’installation et la configuration des systèmes et du matériel informatique.",
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

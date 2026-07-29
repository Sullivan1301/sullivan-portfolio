"use client";

import { Building2, CalendarDays, ExternalLink, FolderKanban, KanbanSquare } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const projects = [
    {
        icon: FolderKanban,
        title: "Portail Sullivan",
        description: "Plateforme de diagnostic, d’onboarding et de pilotage social media qui centralise le suivi des clients, les fichiers et les automatisations métier.",
        technologies: ["Next.js", "TypeScript", "Supabase", "n8n"],
        link: "https://github.com/Sullivan1301/portail-sullivan",
    },
    {
        icon: KanbanSquare,
        title: "TBA Studio CM",
        description: "Plateforme éditoriale multi-clients pour piloter les marques, les contenus et leur validation dans un Kanban enrichi par l’IA.",
        technologies: ["Next.js", "Supabase", "Kanban", "IA générative"],
        link: "https://github.com/Sullivan1301/tba-studio-cm",
    },
    {
        icon: CalendarDays,
        title: "Family Calendar",
        description: "Application collaborative de gestion du calendrier familial : événements, disponibilités, notifications et rôles des membres.",
        technologies: ["Next.js", "TypeScript", "better-auth", "Tailwind CSS"],
        link: "https://github.com/Sullivan1301/family-calendar-ui",
    },
    {
        icon: Building2,
        title: "Tech Bloom Agency",
        description: "Site officiel d’une agence digitale présentant ses services, son portfolio, son blog et ses informations de contact.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        link: "https://github.com/Sullivan1301/tech-bloom-agency",
    },
    {
        icon: null,
        title: "RunRobe",
        description: "Page Facebook officielle de RunRobe à Tamatave.",
        technologies: ["Facebook"],
        image: "/RunRobe.jpeg",
        link: "https://web.facebook.com/runrobe.tamatave"
    },
    {
        icon: null,
        title: "L'homme imparfait",
        description: "Page Facebook officielle de L'homme imparfait.",
        technologies: ["Facebook"],
        image: "/L'homme imparfait.jpeg",
        link: "https://web.facebook.com/profile.php?id=61567011397577"
    },
    {
        icon: null,
        title: "Girl's touch Erica",
        description: "Page Facebook officielle de Girl's touch Erica.",
        technologies: ["Facebook"],
        image: "/Girl's touc Erica.jpeg",
        link: "https://web.facebook.com/profile.php?id=100086552594108"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
                        Projets
                    </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Des réalisations au service d’objectifs concrets</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Une sélection de projets web et social media conçus pour renforcer la visibilité, la crédibilité et la croissance des marques accompagnées.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Magnetic key={index} strength={0.1}>
                            <motion.div
                                className="glass-card rounded-2xl p-6 group h-full"
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
                                {project.icon ? (
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6 group-hover:bg-highlight/20 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <project.icon className="text-highlight" size={24} />
                                    </motion.div>
                                ) : project.image ? (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block mb-6"
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt={`${project.title} - Portfolio professionnel de Sullivan Joro à Madagascar`}
                                            className="w-12 h-12 rounded-xl object-cover bg-highlight/10 border border-highlight/20"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        />
                                    </a>
                                ) : null}
                                {project.link ? (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xl font-semibold mb-3 group-hover:text-highlight transition-colors flex items-center gap-2 group-hover:gap-3"
                                    >
                                        {project.title}
                                        <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ) : (
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-highlight transition-colors">
                                        {project.title}
                                    </h3>
                                )}
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium bg-highlight/10 text-highlight rounded-full border border-highlight/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

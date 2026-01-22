"use client";

import { ExternalLink, Globe, Palette, Facebook, Code } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const projects = [
    {
        icon: Globe,
        title: "Site Vitrine Tech Bloom Agency",
        description: "Conception et développement du site web officiel de l'agence. Design moderne, responsive et optimisé SEO.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        category: "Développement Web",
    },
    {
        icon: Palette,
        title: "Branding RunRobe",
        description: "Création de l'identité visuelle complète : logo, charte graphique, templates réseaux sociaux et supports marketing.",
        technologies: ["Branding", "Design", "Marketing"],
        category: "Branding",
    },
    {
        icon: Facebook,
        title: "Gestion Réseaux Sociaux",
        description: "Stratégie de contenu et gestion quotidienne des pages Facebook pour plusieurs clients. Croissance organique et engagement.",
        technologies: ["Community Management", "Content Strategy", "Analytics"],
        category: "Digital Marketing",
    },
    {
        icon: Code,
        title: "Projets Universitaires",
        description: "Développement d'applications et systèmes dans le cadre académique : gestion de données, interfaces utilisateur, APIs.",
        technologies: ["Java", "JavaScript", "SQL", "Git"],
        category: "Développement",
    },
];

function Project3DCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 400, damping: 25 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 400, damping: 25 });
    const z = useSpring(useTransform(x, [-0.5, 0, 0.5], [0, 30, 0]), { stiffness: 400, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = project.icon;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                z,
                transformStyle: "preserve-3d",
            }}
            className="group glass-card rounded-2xl p-8 relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-highlight/10 via-transparent to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-highlight/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />

            <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                <div className="flex items-start justify-between mb-6">
                    <motion.div
                        className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                        style={{ transform: "translateZ(50px)" }}
                        whileHover={{ scale: 1.15, rotateY: 180 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Icon className="text-highlight" size={28} />
                    </motion.div>
                    <motion.span
                        className="text-xs font-medium text-muted-foreground px-3 py-1 bg-background/50 rounded-full border border-border/30"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        {project.category}
                    </motion.span>
                </div>

                <h3
                    className="text-xl font-semibold mb-3 group-hover:text-highlight transition-colors"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {project.title}
                </h3>
                <p
                    className="text-muted-foreground leading-relaxed mb-6"
                    style={{ transform: "translateZ(25px)" }}
                >
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(35px)" }}>
                    {project.technologies.map((tech, techIndex) => (
                        <motion.span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-background/50 rounded-full border border-border/50 hover:border-highlight/50 hover:text-highlight transition-colors"
                            initial={{ opacity: 0, rotateY: -90 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + techIndex * 0.08 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <motion.button
                    className="inline-flex items-center gap-2 text-sm font-medium text-highlight"
                    style={{ transform: "translateZ(45px)" }}
                    whileHover={{ x: 8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    En savoir plus
                    <ExternalLink size={14} />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative bg-muted/30" style={{ perspective: "1500px", position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">
            Portfolio
          </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Projets réalisés</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Une sélection de projets qui illustrent mon expertise en développement web, marketing digital et branding.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <Project3DCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

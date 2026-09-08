"use client";

import { Brain, Code, PenTool, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const skillCategories = [
    {
        icon: TrendingUp,
        title: "Faire exister une idee",
        skills: ["Positionnement", "Reseaux sociaux", "Calendrier editorial", "Analyse simple"],
    },
    {
        icon: PenTool,
        title: "Rendre le message clair",
        skills: ["Storytelling", "Copywriting", "Creation visuelle", "Formats courts"],
    },
    {
        icon: Code,
        title: "Construire un support utile",
        skills: ["Sites vitrines", "Landing pages", "Parcours utilisateur", "Suivi des resultats"],
    },
    {
        icon: Brain,
        title: "Explorer avec l'IA",
        skills: ["Recherche", "Ideation", "Automatisation", "Prototypage"],
    },
];

function Tilt3DSkillCard({ children, index }: { children: React.ReactNode; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 400, damping: 25 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 400, damping: 25 });

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

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass-card rounded-2xl p-8 group cursor-pointer"
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative bg-muted/30" style={{ perspective: "1200px", position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
                        Leviers
                    </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Des outils différents, une même question : qu’est-ce qui aide vraiment à avancer ?</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Je peux travailler le contenu, le web, l’IA ou la stratégie. Mais le point de départ reste toujours le même : comprendre ce qui est utile maintenant, avec les moyens disponibles.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <Magnetic key={category.title} strength={0.05}>
                            <Tilt3DSkillCard index={index}>
                                <motion.div
                                    className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-6 border border-highlight/20"
                                    style={{ transform: "translateZ(40px)" }}
                                    whileHover={{ scale: 1.1, rotateY: 180 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <category.icon className="text-highlight" size={28} />
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-6 group-hover:text-highlight transition-colors" style={{ transform: "translateZ(30px)" }}>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium bg-background/50 rounded-full border border-border/50 hover:border-highlight hover:text-highlight transition-colors cursor-default"
                                            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </Tilt3DSkillCard>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

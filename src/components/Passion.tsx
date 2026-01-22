"use client";

import { Music, BookOpen, Plane, Coffee, Gamepad2, Camera } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const passions = [
    {
        icon: BookOpen,
        title: "Apprentissage continu",
        description: "Toujours à la recherche de nouvelles connaissances en tech, marketing et business.",
    },
    {
        icon: Music,
        title: "Musique",
        description: "La musique m'accompagne au quotidien et stimule ma créativité.",
    },
    {
        icon: Plane,
        title: "Voyages",
        description: "Découvrir de nouvelles cultures et perspectives pour enrichir ma vision.",
    },
    {
        icon: Coffee,
        title: "Café & Networking",
        description: "Les meilleures idées naissent souvent autour d'un bon café.",
    },
    {
        icon: Gamepad2,
        title: "Gaming",
        description: "Les jeux vidéo sont une source d'inspiration pour le design et l'UX.",
    },
    {
        icon: Camera,
        title: "Photographie",
        description: "Capturer des moments et développer un œil pour l'esthétique visuelle.",
    },
];

export default function Passion() {
    return (
        <section className="section-padding relative bg-muted/30" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">
            Passions
          </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Au-delà du travail</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ce qui me passionne et me permet de rester créatif et inspiré.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {passions.map((passion, index) => (
                        <Magnetic key={index} strength={0.15}>
                            <motion.div
                                className="glass-card rounded-2xl p-6 group cursor-default"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-4 group-hover:bg-highlight/20 transition-colors"
                                    whileHover={{ rotate: -10, scale: 1.1 }}
                                >
                                    <passion.icon className="text-highlight" size={22} />
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-highlight transition-colors">{passion.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {passion.description}
                                </p>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

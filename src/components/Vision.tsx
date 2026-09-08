"use client";

import { Compass, Hammer, Lightbulb, RefreshCw, Sprout, Users } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

const visionPoints = [
    {
        icon: Sprout,
        title: "Construire avec ce qu'on a",
        description: "On part des moyens disponibles, du contexte et des priorites reelles avant de parler d'outils.",
    },
    {
        icon: Compass,
        title: "Trouver une direction",
        description: "Quand tout semble flou, l'objectif est de remettre de l'ordre pour voir la prochaine etape.",
    },
    {
        icon: Lightbulb,
        title: "Comprendre avant d'agir",
        description: "Je cherche d'abord le vrai probleme, pas la solution la plus brillante a presenter.",
    },
    {
        icon: RefreshCw,
        title: "Tester, apprendre, recommencer",
        description: "Un projet avance mieux avec des essais concrets, des retours honnetes et des ajustements rapides.",
    },
    {
        icon: Hammer,
        title: "Adapter a la realite",
        description: "Une bonne solution doit tenir compte du budget, du temps, des competences et du terrain.",
    },
    {
        icon: Users,
        title: "Construire avec les autres",
        description: "Je ne pretends pas tout savoir. Je sais chercher, connecter les idees et avancer avec les bonnes personnes.",
    },
];

export default function Vision() {
    return (
        <section id="vision" className="section-padding relative bg-muted/30" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="mx-auto mb-14 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-highlight">
                        Le noyau
                    </span>
                    <TextReveal className="mt-4">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            Tu n’as pas besoin d’avoir beaucoup pour commencer à construire beaucoup.
                        </h2>
                    </TextReveal>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        Mon approche est simple : comprendre ta realite, utiliser ce que tu as deja, explorer ce que tu ne connais pas encore, puis construire une premiere version utile.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {visionPoints.map((point, index) => (
                        <Magnetic key={point.title} strength={0.08}>
                            <motion.article
                                className="glass-card group h-full rounded-2xl p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-highlight/20 bg-highlight/10 text-highlight transition-colors group-hover:bg-highlight/20">
                                    <point.icon size={22} aria-hidden="true" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-highlight">
                                    {point.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {point.description}
                                </p>
                            </motion.article>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}

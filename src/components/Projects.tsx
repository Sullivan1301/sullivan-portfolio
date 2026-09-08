"use client";

import { Building2, CalendarDays, ExternalLink, FolderKanban, KanbanSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const projects = [
    { title: "RunRobe", description: "Faire vivre la presence digitale d'une boutique de mode avec des contenus simples, reguliers et adaptes a son public reel.", technologies: ["Facebook", "Reels", "Calendrier editorial"], image: "/RunRobe.jpeg", link: "https://web.facebook.com/runrobe.tamatave" },
    { title: "Passion Prestige Madagascar", description: "Coordonner plusieurs univers de marque et transformer des idees de contenu en publications utiles, planifiees et suivies.", technologies: ["Social Media", "Canva", "Meta Business Suite"], link: "#case-studies" },
    { title: "Girl's Touch Erica", description: "Structurer une communication digitale autour de contenus visuels, de videos courtes et d'un rythme de publication plus clair.", technologies: ["Community Management", "Videos", "Creation visuelle"], image: "/Girl's touc Erica.jpeg", link: "https://web.facebook.com/profile.php?id=100086552594108" },
    { title: "L'Homme imparfait", description: "Accompagner une presence de marque en travaillant la coherence, le ton et la regularite des contenus Facebook.", technologies: ["Facebook", "Storytelling", "Community Management"], image: "/L'homme imparfait.jpeg", link: "https://web.facebook.com/profile.php?id=61567011397577" },
    { icon: KanbanSquare, title: "TBA Studio CM", description: "Imaginer une plateforme pour mieux piloter les contenus, les marques, les validations et l'aide de l'IA dans le travail social media.", technologies: ["Next.js", "Supabase", "Kanban", "IA generative"], link: "https://github.com/Sullivan1301/tba-studio-cm" },
    { icon: FolderKanban, title: "Portail Sullivan", description: "Construire un espace de diagnostic et de suivi pour clarifier les besoins clients, centraliser les fichiers et rendre l'accompagnement plus lisible.", technologies: ["Next.js", "TypeScript", "Supabase", "n8n"], link: "https://github.com/Sullivan1301/portail-sullivan" },
    { icon: Building2, title: "Tech Bloom Agency", description: "Donner une forme professionnelle a une structure digitale capable de porter des projets web, contenu et strategie.", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"], link: "https://github.com/Sullivan1301/tech-bloom-agency" },
    { icon: CalendarDays, title: "Family Calendar", description: "Explorer un besoin quotidien avec une application collaborative pour organiser les evenements, disponibilites et roles d'une famille.", technologies: ["Next.js", "TypeScript", "better-auth", "Tailwind CSS"], link: "https://github.com/Sullivan1301/family-calendar-ui" },
];

export default function Projects() {
    const reduceMotion = useReducedMotion();
    return (
        <section id="projects" className="section-padding relative" style={{ zIndex: 5 }}>
            <div className="container-custom">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-highlight">Projets</span>
                    <TextReveal className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"><h2>Des choses que je construis, teste et ameliore</h2></TextReveal>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Social media, outils internes, sites web, idées en cours : chaque projet raconte une façon d’apprendre, d’adapter et de faire avancer quelque chose de concret.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article key={project.title} className="glass-card group flex h-full flex-col rounded-2xl p-6" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.3) }} whileHover={reduceMotion ? undefined : { y: -5 }}>
                            {project.image ? <img src={project.image} alt={`Identite visuelle de ${project.title}`} className="mb-6 h-14 w-14 rounded-xl border border-highlight/20 bg-highlight/10 object-cover" /> : project.icon ? <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-highlight/10 text-highlight"><project.icon size={26} aria-hidden="true" /></div> : null}
                            <h3 className="text-xl font-semibold transition-colors group-hover:text-highlight">{project.title}</h3>
                            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-highlight/20 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">{tech}</span>)}</div>
                            <a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-6 inline-flex items-center gap-2 font-semibold text-highlight hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight">Voir le projet <ExternalLink size={16} aria-hidden="true" /></a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { Building2, CalendarDays, ExternalLink, FolderKanban, KanbanSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const projects = [
    { title: "RunRobe", description: "Boutique de mode : stratégie éditoriale, contenus promotionnels et animation Facebook pour valoriser robes et chaussures.", technologies: ["Facebook", "Reels", "Calendrier éditorial"], image: "/RunRobe.jpeg", link: "https://web.facebook.com/runrobe.tamatave" },
    { title: "Passion Prestige Madagascar", description: "Gestion de contenu pour des marques luxe, beauté, bien-être et parfumerie : publications, carrousels, vidéos et captions.", technologies: ["Social Media", "Canva", "Meta Business Suite"], link: "#case-studies" },
    { title: "Girl’s Touch Erica", description: "Communication digitale, production de photos et vidéos, planification et optimisation des contenus avec l’équipe.", technologies: ["Community Management", "Vidéos", "Création visuelle"], image: "/Girl's touc Erica.jpeg", link: "https://web.facebook.com/profile.php?id=100086552594108" },
    { title: "L’Homme imparfait", description: "Création et animation de contenus pour renforcer une présence de marque cohérente sur Facebook.", technologies: ["Facebook", "Storytelling", "Community Management"], image: "/L'homme imparfait.jpeg", link: "https://web.facebook.com/profile.php?id=61567011397577" },
    { icon: KanbanSquare, title: "TBA Studio CM", description: "Plateforme éditoriale multi-clients pour piloter les marques, les contenus et leur validation dans un Kanban enrichi par l’IA.", technologies: ["Next.js", "Supabase", "Kanban", "IA générative"], link: "https://github.com/Sullivan1301/tba-studio-cm" },
    { icon: FolderKanban, title: "Portail Sullivan", description: "Plateforme de diagnostic, d’onboarding et de pilotage social media centralisant le suivi des clients et les fichiers.", technologies: ["Next.js", "TypeScript", "Supabase", "n8n"], link: "https://github.com/Sullivan1301/portail-sullivan" },
    { icon: Building2, title: "Tech Bloom Agency", description: "Site officiel d’une agence digitale présentant ses services, son portfolio, son blog et ses informations de contact.", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"], link: "https://github.com/Sullivan1301/tech-bloom-agency" },
    { icon: CalendarDays, title: "Family Calendar", description: "Application collaborative de gestion du calendrier familial : événements, disponibilités, notifications et rôles des membres.", technologies: ["Next.js", "TypeScript", "better-auth", "Tailwind CSS"], link: "https://github.com/Sullivan1301/family-calendar-ui" },
];

export default function Projects() {
    const reduceMotion = useReducedMotion();
    return (
        <section id="projects" className="section-padding relative" style={{ zIndex: 5 }}>
            <div className="container-custom">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-highlight">Réalisations Social Media</span>
                    <TextReveal className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"><h2>Des contenus pensés pour faire vivre les marques</h2></TextReveal>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Les missions social media en premier, suivies des projets de production et de développement qui soutiennent mon processus.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article key={project.title} className="glass-card group flex h-full flex-col rounded-2xl p-6" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.3) }} whileHover={reduceMotion ? undefined : { y: -5 }}>
                            {project.image ? <img src={project.image} alt={`Identité visuelle de ${project.title}`} className="mb-6 h-14 w-14 rounded-xl border border-highlight/20 bg-highlight/10 object-cover" /> : project.icon ? <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-highlight/10 text-highlight"><project.icon size={26} aria-hidden="true" /></div> : null}
                            <h3 className="text-xl font-semibold transition-colors group-hover:text-highlight">{project.title}</h3>
                            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-highlight/20 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">{tech}</span>)}</div>
                            <a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-6 inline-flex items-center gap-2 font-semibold text-highlight hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight">Voir la réalisation <ExternalLink size={16} aria-hidden="true" /></a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
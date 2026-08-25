import { BarChart3, CalendarDays, MessageCircle, PenTool, Search, Share2 } from "lucide-react";

const process = [
    { icon: Search, title: "Audit", text: "Marque, audience et concurrents." },
    { icon: PenTool, title: "Ligne éditoriale", text: "Piliers de contenu et ton de voix." },
    { icon: CalendarDays, title: "Calendrier", text: "Formats, rythme et validations." },
    { icon: Share2, title: "Production", text: "Création, publication et modération." },
    { icon: BarChart3, title: "Analyse", text: "Suivi des performances et optimisation." },
    { icon: MessageCircle, title: "Échange", text: "Retours clairs avec l’équipe ou le client." },
];

export default function SocialMediaProof() {
    return <>
        <section id="case-studies" className="section-padding relative bg-muted/30" style={{ zIndex: 5 }}>
            <div className="container-custom"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div><span className="text-sm font-medium uppercase tracking-wider text-highlight">Étude de cas</span><h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">RunRobe — développer la visibilité d’une boutique de mode</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Mission opérationnelle menée depuis mai 2025, centrée sur la présence Facebook de la boutique.</p><a href="https://web.facebook.com/runrobe.tamatave" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-highlight hover:text-foreground">Voir la page RunRobe ↗</a></div>
                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Contexte</dt><dd className="mt-2 text-muted-foreground">Boutique de robes et chaussures à Tamatave.</dd></div>
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Rôle</dt><dd className="mt-2 text-muted-foreground">Responsable Marketing Digital.</dd></div>
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Objectif</dt><dd className="mt-2 text-muted-foreground">Accroître la visibilité des produits et encourager les demandes en message privé.</dd></div>
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Actions</dt><dd className="mt-2 text-muted-foreground">Calendrier éditorial, contenus promotionnels, captions commerciales et animation Facebook.</dd></div>
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Formats</dt><dd className="mt-2 text-muted-foreground">Publications visuelles, carrousels, Reels et contenus saisonniers.</dd></div>
                    <div className="glass-card rounded-2xl p-5"><dt className="text-sm font-semibold text-highlight">Outils</dt><dd className="mt-2 text-muted-foreground">Canva, CapCut, Facebook et Meta Business Suite.</dd></div>
                </dl>
            </div><p className="mt-8 rounded-xl border border-accent-gold/30 bg-accent-gold/10 p-4 text-sm leading-relaxed text-foreground">Les résultats chiffrés seront ajoutés après consolidation des indicateurs vérifiables de la page : aucun KPI n’a été inventé.</p></div>
        </section>
        <section className="section-padding relative" style={{ zIndex: 5 }}><div className="container-custom"><div className="mx-auto max-w-3xl text-center"><span className="text-sm font-medium uppercase tracking-wider text-highlight">Méthode de travail</span><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Un processus social media clair, du brief à l’optimisation</h2></div><ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{process.map((step, index) => <li key={step.title} className="glass-card flex gap-4 rounded-2xl p-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-highlight/10 text-highlight"><step.icon size={21} aria-hidden="true" /></div><div><span className="text-xs font-bold text-highlight">0{index + 1}</span><h3 className="font-semibold">{step.title}</h3><p className="mt-1 text-sm text-muted-foreground">{step.text}</p></div></li>)}</ol></div></section>
    </>;
}
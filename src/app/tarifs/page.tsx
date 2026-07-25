import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs & Services",
  description:
    "Tarifs transparents pour développement web, social media management et community management à Madagascar. Freelance indépendant, sans intermédiaire.",
  openGraph: {
    title: "Tarifs & Services | Sullivan Joro",
    description:
      "Développement web dès 350 000 Ar, Social Media Management dès 500 000 Ar/mois. Prix TTC, devis sous 24h.",
  },
};

const developmentServices = [
  {
    name: "Site Vitrine",
    price: "600 000 Ar / 120€",
    starting: "à partir de",
    description:
      "Site professionnel multi-pages pour présenter votre entreprise, vos services et votre équipe. Idéal pour les PME et professions libérales.",
    features: [
      "Design sur mesure responsive (mobile, tablette, desktop)",
      "Jusqu'à 5 pages (accueil, à propos, services, portfolio, contact)",
      "Optimisation SEO on-page (balises meta, structure sémantique, sitemap)",
      "Formulaire de contact fonctionnel",
      "Animations et transitions fluides",
      "Hébergement et nom de domaine inclus 1 an",
      "Formation à la mise à jour du contenu",
      "Support technique 3 mois",
    ],
    extras: [
      { name: "Page supplémentaire", price: "100 000 Ar" },
      { name: "Blog intégré", price: "150 000 Ar" },
      { name: "Multilingue (FR/EN)", price: "200 000 Ar" },
    ],
  },
  {
    name: "Landing Page",
    price: "400 000 Ar / 80€",
    starting: "à partir de",
    description:
      "Page unique optimisée pour la conversion. Parfait pour lancer un produit, une offre spéciale ou une campagne publicitaire.",
    features: [
      "Design orienté conversion (AIDA framework)",
      "Animations interactives et micro-interactions",
      "Optimisation SEO et temps de chargement",
      "Intégration outils analytics (GA4, Meta Pixel)",
      "Formulaire de capture lead",
      "Livraison sous 7 jours ouvrés",
      "2 révisions incluses",
    ],
    extras: [
      { name: "A/B testing setup", price: "100 000 Ar" },
      { name: "Intégration CRM", price: "150 000 Ar" },
      { name: "Vidéo intégrée", price: "80 000 Ar" },
    ],
  },
  {
    name: "Portfolio",
    price: "350 000 Ar / 70€",
    starting: "à partir de",
    description:
      "Portfolio élégant et performant pour créatifs, photographes, designers et développeurs. Mettez en valeur votre travail.",
    features: [
      "Galerie projets interactive avec filtres",
      "Design personnalisé reflétant votre identité",
      "Responsive mobile-first",
      "Optimisation performances (Core Web Vitals)",
      "Déploiement sur Vercel/Netlify inclus",
      "Animations et transitions soignées",
      "1 révision incluse",
    ],
    extras: [
      { name: "Section blog/articles", price: "120 000 Ar" },
      { name: "Mode sombre/clair", price: "50 000 Ar" },
      { name: "CMS headless (contenu éditable)", price: "200 000 Ar" },
    ],
  },
];

const smmPacks = [
  {
    name: "Pack Starter",
    price: "500 000 Ar/mois / 100€/mois",
    description:
      "Présence sociale essentielle pour les entreprises qui démarrent sur les réseaux sociaux.",
    features: [
      "Gestion de 2 réseaux sociaux (Facebook, Instagram au choix)",
      "8 publications par mois (2/semaine)",
      "Calendrier éditorial mensuel",
      "Création de visuels (templates fournis)",
      "Rapport de performance mensuel",
      "Réponses aux commentaires (heures ouvrées)",
    ],
  },
  {
    name: "Pack Standard",
    price: "1 000 000 Ar/mois / 200€/mois",
    popular: true,
    description:
      "Croissance accélérée avec du contenu premium et une gestion de communauté active. Le choix le plus demandé.",
    features: [
      "Gestion de 3 réseaux sociaux",
      "16 publications par mois (4/semaine)",
      "Stories quotidiennes et 4 Reels/mois",
      "Community management actif (réponses < 4h)",
      "Rapport bi-mensuel avec recommandations",
      "Stratégie de contenu trimestrielle",
      "Veille concurrentielle",
      "Hashtag strategy optimisée",
    ],
  },
  {
    name: "Pack Premium",
    price: "2 000 000 Ar/mois / 400€/mois",
    description:
      "Solution complète pour les marques ambitieuses qui veulent dominer leur marché local.",
    features: [
      "Gestion de 5 réseaux sociaux",
      "30 publications par mois (quotidien)",
      "Vidéos professionnelles et motion design",
      "Community management 7j/7",
      "Rapport hebdomadaire détaillé",
      "Gestion de campagnes publicitaires (Meta Ads)",
      "Direction artistique dédiée",
      "Influenceur management",
      "Crise management et bad buzz",
    ],
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Tarifs & Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous travaillez directement avec moi pour la stratégie et le suivi —
            Tech Bloom Agency porte l&apos;exécution, avec un périmètre et des prix transparents.
          </p>
        </div>

        {/* Development Services */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            🌐 Développement Web
          </h2>
          <div className="space-y-8">
            {developmentServices.map((service) => (
              <div
                key={service.name}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="md:flex md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right shrink-0">
                    <span className="text-xs text-muted-foreground block">
                      {service.starting}
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      {service.price}
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      TTC
                    </span>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Inclus
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <Check
                            size={14}
                            className="text-highlight mt-1 shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.extras && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Options
                      </h4>
                      <ul className="space-y-2">
                        {service.extras.map((e) => (
                          <li
                            key={e.name}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-foreground/80">
                              {e.name}
                            </span>
                            <span className="text-muted-foreground font-medium ml-2">
                              +{e.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <a
                    href={`https://wa.me/261341060802?text=${encodeURIComponent(
                      `Bonjour Sullivan, je suis intéressé(e) par votre offre "${service.name}". Pouvez-vous m'envoyer un devis détaillé ?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-violet/10 text-foreground border border-primary-violet-light/20 font-semibold text-sm hover:bg-primary-violet/20 hover:border-primary-violet-light/40 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Demander un devis
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SMM Packs */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            📱 Social Media Management
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {smmPacks.map((pack) => (
              <div
                key={pack.name}
                className={`relative glass-card rounded-2xl p-6 flex flex-col ${
                  pack.popular
                    ? "ring-2 ring-highlight shadow-[0_0_40px_-10px_rgba(230,57,70,0.4)]"
                    : ""
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-highlight text-white text-xs font-bold shadow-lg">
                      <Sparkles size={12} />
                      Le plus populaire
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {pack.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {pack.description}
                </p>
                <div className="mb-6">
                  <span className="text-xl font-bold text-foreground">
                    {pack.price}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    TTC
                  </span>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {pack.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check
                        size={14}
                        className="text-highlight mt-1 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/261341060802?text=${encodeURIComponent(
                    `Bonjour Sullivan, je suis intéressé(e) par le "${pack.name}" SMM. Pouvez-vous m'en dire plus ?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pack.popular
                      ? "bg-highlight text-white hover:bg-highlight/90 shadow-[0_8px_30px_-8px_rgba(230,57,70,0.5)]"
                      : "bg-primary-violet/10 text-foreground border border-primary-violet-light/20 hover:bg-primary-violet/20"
                  }`}
                >
                  <MessageCircle size={16} />
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Additional services */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            ✍️ Services complémentaires
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Community Management
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gestion de communauté sur mesure : animation, modération, engagement.
                Inclus dans les packs SMM ou disponible séparément pour les marques
                qui ont besoin d&apos;un accompagnement dédié.
              </p>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm font-medium text-foreground">
                Sur devis
              </span>
            </div>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Content Writing & Copywriting
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Rédaction web, articles de blog optimisés SEO, fiches produit,
                newsletters et contenus pour réseaux sociaux. Tarification selon le
                volume et la complexité.
              </p>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm font-medium text-foreground">
                Sur devis
              </span>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Prise de contact",
                desc: "Échange sur WhatsApp pour comprendre votre besoin.",
              },
              {
                step: "2",
                title: "Devis détaillé",
                desc: "Proposition chiffrée sous 24h avec planning.",
              },
              {
                step: "3",
                title: "Réalisation",
                desc: "Développement avec points d'avancement réguliers.",
              },
              {
                step: "4",
                title: "Livraison",
                desc: "Mise en ligne, formation et support post-livraison.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-highlight/10 border-2 border-highlight/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-highlight font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <div className="text-center glass-card rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contactez-moi sur WhatsApp pour discuter de votre projet.
            Réponse garantie sous 24h.
          </p>
          <a
            href="https://wa.me/261341060802?text=Bonjour Sullivan, j'ai un projet dont j'aimerais discuter avec vous."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-highlight text-white font-bold text-lg hover:bg-highlight/90 shadow-[0_8px_30px_-8px_rgba(230,57,70,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(230,57,70,0.7)] transition-all duration-300"
          >
            <MessageCircle size={20} />
            Me contacter sur WhatsApp
          </a>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Tous les prix sont TTC. Paiement par MVola, Orange Money ou virement bancaire.
        </p>
      </div>
    </main>
  );
}

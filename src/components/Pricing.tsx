"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

type Currency = "Ar" | "€";

interface ServiceItem {
  name: string;
  priceAr: string;
  priceEur: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServiceCategory {
  title: string;
  icon: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "Développement Web",
    icon: "🌐",
    items: [
      {
        name: "Site Vitrine",
        priceAr: "600 000",
        priceEur: "120",
        description: "Vitrine professionnelle multi-pages pour votre entreprise",
        features: [
          "Design sur mesure responsive",
          "Jusqu'à 5 pages",
          "Optimisation SEO",
          "Formulaire de contact",
          "Hébergement 1 an inclus",
        ],
      },
      {
        name: "Landing Page",
        priceAr: "400 000",
        priceEur: "80",
        description: "Page unique haute conversion pour vos campagnes",
        features: [
          "Design orienté conversion",
          "Animations interactives",
          "Optimisation SEO",
          "Intégration analytics",
          "Livraison sous 7 jours",
        ],
      },
      {
        name: "Portfolio",
        priceAr: "350 000",
        priceEur: "70",
        description: "Portfolio élégant pour créatifs et professionnels",
        features: [
          "Galerie projets interactive",
          "Design personnalisé",
          "Responsive mobile-first",
          "Optimisation performances",
          "Déploiement inclus",
        ],
      },
    ],
  },
  {
    title: "Social Media Management",
    icon: "📱",
    items: [
      {
        name: "Pack Starter",
        priceAr: "500 000",
        priceEur: "100",
        description: "Présence sociale essentielle pour démarrer",
        features: [
          "2 réseaux sociaux gérés",
          "8 publications / mois",
          "Calendrier éditorial",
          "Rapport mensuel",
        ],
      },
      {
        name: "Pack Standard",
        priceAr: "1 000 000",
        priceEur: "200",
        description: "Croissance accélérée avec contenu premium",
        features: [
          "3 réseaux sociaux gérés",
          "16 publications / mois",
          "Stories & Reels inclus",
          "Community management",
          "Rapport bi-mensuel",
          "Stratégie de contenu",
        ],
        popular: true,
      },
      {
        name: "Pack Premium",
        priceAr: "2 000 000",
        priceEur: "400",
        description: "Solution complète pour marques ambitieuses",
        features: [
          "5 réseaux sociaux gérés",
          "30 publications / mois",
          "Vidéos & motion design",
          "Community management 7j/7",
          "Rapport hebdomadaire",
          "Campagnes publicitaires",
          "Direction artistique dédiée",
        ],
      },
    ],
  },
];

const additionalServices = [
  {
    title: "Community Management",
    description: "Gestion de communauté sur mesure, inclus dans les packs SMM ou disponible séparément.",
    cta: "Sur devis",
  },
  {
    title: "Content Writing & Copywriting",
    description: "Rédaction web, articles de blog, fiches produit et contenus optimisés SEO.",
    cta: "Sur devis",
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("Ar");

  return (
    <section
      id="pricing"
      className="section-padding relative"
      style={{ position: "relative", zIndex: 5 }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">
            Tarifs & Services
          </span>
          <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <h2>Des prix clairs, sans surprise</h2>
          </TextReveal>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Vous gardez un interlocuteur unique pour la stratégie et le suivi. Tech Bloom Agency
            assure l&apos;exécution et la livraison avec une tarification transparente.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/50">
            <button
              onClick={() => setCurrency("Ar")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                currency === "Ar"
                  ? "bg-highlight text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ariary (Ar)
            </button>
            <button
              onClick={() => setCurrency("€")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                currency === "€"
                  ? "bg-highlight text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Euro (€)
            </button>
          </div>
        </motion.div>

        {/* Service categories */}
        {services.map((category, catIdx) => (
          <div key={category.title} className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-foreground mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <span className="mr-3">{category.icon}</span>
              {category.title}
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  className={`relative glass-card rounded-2xl p-6 md:p-8 flex flex-col ${
                    item.popular
                      ? "ring-2 ring-highlight shadow-[0_0_40px_-10px_rgba(230,57,70,0.4)]"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  {/* Popular badge */}
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-highlight text-white text-xs font-bold shadow-lg">
                        <Sparkles size={12} />
                        Le plus populaire
                      </span>
                    </div>
                  )}

                  {/* Card header */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-foreground">
                        {currency === "Ar" ? item.priceAr : item.priceEur}
                      </span>
                      <span className="text-muted-foreground font-medium">
                        {currency === "Ar" ? "Ar" : "€"}
                        {category.title === "Social Media Management" ? "/mois" : ""}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground/70 mt-1 block">
                      {currency === "Ar"
                        ? `(~${item.priceEur}€)`
                        : `(~${item.priceAr} Ar)`}{" "}
                      TTC
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <Check
                          size={16}
                          className="text-highlight mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Magnetic strength={0.15}>
                    <a
                      href={`https://wa.me/261341060802?text=${encodeURIComponent(
                        `Bonjour Sullivan, je suis intéressé(e) par votre offre "${item.name}" à ${
                          currency === "Ar"
                            ? `${item.priceAr} Ar`
                            : `${item.priceEur}€`
                        }. Pouvez-vous m'en dire plus ?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        item.popular
                          ? "bg-highlight text-white hover:bg-highlight/90 shadow-[0_8px_30px_-8px_rgba(230,57,70,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(230,57,70,0.6)]"
                          : "bg-primary-violet/10 text-foreground border border-primary-violet-light/20 hover:bg-primary-violet/20 hover:border-primary-violet-light/40"
                      }`}
                    >
                      <MessageCircle size={16} />
                      Demander un devis
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional services */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {additionalServices.map((svc) => (
            <div
              key={svc.title}
              className="glass-card rounded-2xl p-6 md:p-8 flex items-center justify-between gap-6"
            >
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {svc.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {svc.description}
                </p>
              </div>
              <a
                href={`https://wa.me/261341060802?text=${encodeURIComponent(
                  `Bonjour Sullivan, je souhaite un devis pour ${svc.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-violet/10 text-foreground border border-primary-violet-light/20 font-semibold text-sm hover:bg-primary-violet/20 hover:border-primary-violet-light/40 transition-all duration-300"
              >
                {svc.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Tous les prix sont TTC. Devis détaillé sous 24h.
        </motion.p>
      </div>
    </section>
  );
}

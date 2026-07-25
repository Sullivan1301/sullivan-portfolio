import type { FaqItem } from "@/data/faqs";
import { seoLastModified, siteUrl } from "@/lib/site";

function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const personId = `${siteUrl}/#person`;
const organizationId = "https://techbloom.agency/#organization";
const websiteId = `${siteUrl}/#website`;

const socialProfiles = [
  "https://github.com/Sullivan1301",
  "https://www.linkedin.com/in/sullivan-rakotoniaina/",
  "https://www.instagram.com/la_vie_de_sullivan/",
  "https://web.facebook.com/sullivan.jororakotoniaina",
  "https://youtube.com/@sullivanjoro",
  "https://tiktok.com/@sullivanjoro",
];

export function PersonJsonLd() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: "Joro Sullivan Rakotoniaina",
        givenName: "Sullivan",
        familyName: "Rakotoniaina",
        alternateName: ["Sullivan Joro", "Sullivan Rakotoniaina"],
        jobTitle: "Digital Growth Partner",
        description:
          "Sullivan Joro aide les PME à attirer, convertir et fidéliser leurs clients grâce au web, aux réseaux sociaux, au contenu stratégique et à l’intelligence artificielle.",
        url: siteUrl,
        image: `${siteUrl}/sullivan-icon.png`,
        email: "mailto:jorosullivan13@gmail.com",
        telephone: "+261341060802",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lot II H 12Ter Ankadidramamy",
          addressLocality: "Antananarivo",
          addressRegion: "Analamanga",
          addressCountry: "MG",
        },
        worksFor: {
          "@id": organizationId,
        },
        knowsLanguage: [
          { "@type": "Language", name: "Français" },
          { "@type": "Language", name: "Anglais" },
          { "@type": "Language", name: "Malgache" },
        ],
        knowsAbout: [
          "Développement web",
          "Stratégie digitale",
          "Marketing digital",
          "Community management",
          "Création de contenu",
          "Copywriting",
          "Storytelling",
          "Intelligence artificielle",
          "Analyse des performances",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Haute École d’Informatique",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antananarivo",
            addressCountry: "MG",
          },
        },
        sameAs: socialProfiles,
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationId,
        name: "Tech Bloom Agency",
        alternateName: "Tech Bloom",
        description:
          "Tech Bloom Agency produit et livre les projets de développement web, marketing digital, contenu et community management pilotés par Sullivan Joro.",
        url: "https://techbloom.agency",
        foundingDate: "2025-11",
        founder: {
          "@id": personId,
        },
        email: "mailto:jorosullivan13@gmail.com",
        telephone: "+261341060802",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antananarivo",
          addressRegion: "Analamanga",
          addressCountry: "MG",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+261341060802",
          contactType: "customer service",
          availableLanguage: ["Français", "Anglais", "Malgache"],
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websiteId,
        name: "Sullivan Joro",
        alternateName: "Sullivan Joro — Digital Growth Partner",
        url: siteUrl,
        description:
          "Accompagnement de croissance digitale pour les PME à Madagascar et à distance.",
        dateModified: seoLastModified,
        inLanguage: "fr-FR",
        publisher: {
          "@id": personId,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": siteUrl,
          dateModified: seoLastModified,
          inLanguage: "fr-FR",
        },
      }}
    />
  );
}

export function FAQPageJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteUrl}/faq/#faq`,
        url: `${siteUrl}/faq`,
        name: "Questions fréquentes sur la croissance digitale des PME",
        dateModified: seoLastModified,
        inLanguage: "fr-FR",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          "@id": `${siteUrl}/faq/#faq-${item.id}`,
          name: item.question,
          datePublished: item.datePublished,
          dateModified: item.dateModified,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Sullivan Joro — Digital Growth Partner",
        description:
          "Accompagnement de croissance digitale pour PME depuis Antananarivo, avec exécution des projets par Tech Bloom Agency.",
        url: siteUrl,
        image: `${siteUrl}/sullivan-icon.png`,
        email: "mailto:jorosullivan13@gmail.com",
        telephone: "+261341060802",
        founder: {
          "@id": personId,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lot II H 12Ter Ankadidramamy",
          addressLocality: "Antananarivo",
          addressRegion: "Analamanga",
          addressCountry: "MG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -18.8792,
          longitude: 47.5079,
        },
        areaServed: {
          "@type": "Country",
          name: "Madagascar",
        },
        serviceType: [
          "Développement web",
          "Stratégie digitale",
          "Social Media Management",
          "Création de contenu",
          "Intelligence artificielle",
        ],
        sameAs: socialProfiles,
      }}
    />
  );
}

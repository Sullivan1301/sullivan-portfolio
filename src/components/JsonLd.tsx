// JSON-LD Structured Data for SEO
// These schemas help search engines understand the content better

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joro Sullivan Rakotoniaina",
    "givenName": "Sullivan",
    "familyName": "Rakotoniaina",
    "alternateName": ["Sullivan Joro", "Sullivan Rakotoniaina"],
    "jobTitle": "Digital Growth Partner",
    "description": "Partenaire de croissance digitale basé à Antananarivo. Sullivan Joro aide les PME à attirer, convertir et fidéliser leurs clients grâce au développement web, aux réseaux sociaux, au contenu stratégique et à l’intelligence artificielle.",
    "url": "https://sullivan-portfolio.vercel.app",
    "image": "https://sullivan-portfolio.vercel.app/sullivan.jpeg",
    "email": "jorosullivan13@gmail.com",
    "telephone": "+261341060802",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "streetAddress": "Lot II H 12Ter Ankadidramamy",
      "addressCountry": "MG"
    },
    "knowsLanguage": [
      { "@type": "Language", "name": "Français" },
      { "@type": "Language", "name": "Anglais" },
      { "@type": "Language", "name": "Malgache" },
      { "@type": "Language", "name": "Espagnol" }
    ],
    "knowsAbout": [
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Git/GitHub",
      "Meta Business Suite",
      "Canva",
      "CapCut",
      "Trello",
      "Notion",
      "Intelligence Artificielle",
      "Création de contenu",
      "Storytelling",
      "Marketing Digital",
      "Community Management",
      "Stratégie Digitale"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Haute École d'Informatique",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antananarivo",
        "addressCountry": "MG"
      }
    },
    "sameAs": [
      "https://github.com/Sullivan1301",
      "https://www.linkedin.com/in/sullivan-rakotoniaina/",
      "https://www.instagram.com/la_vie_de_sullivan/",
      "https://web.facebook.com/sullivan.jororakotoniaina",
      "https://youtube.com/@sullivanjoro",
      "https://tiktok.com/@sullivanjoro"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tech Bloom Agency",
    "alternateName": "Tech Bloom",
    "description": "Structure d’exécution fondée par Sullivan Joro pour produire et livrer les projets de développement web, marketing digital, contenu et community management destinés aux PME.",
    "url": "https://techbloom.agency",
    "logo": "https://sullivan-portfolio.vercel.app/sullivan.jpeg",
    "foundingDate": "2025-11",
    "founder": {
      "@type": "Person",
      "name": "Joro Sullivan Rakotoniaina"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressCountry": "MG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+261341060802",
      "contactType": "customer service",
      "availableLanguage": ["Français", "Anglais", "Malgache"]
    },
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Portfolio Sullivan Joro",
    "alternateName": "Sullivan Rakotoniaina Portfolio",
    "url": "https://sullivan-portfolio.vercel.app",
    "description": "La marque personnelle de Sullivan Joro, Digital Growth Partner pour les PME à Madagascar et à distance.",
    "publisher": {
      "@type": "Person",
      "name": "Joro Sullivan Rakotoniaina",
      "sameAs": [
        "https://github.com/Sullivan1301",
        "https://www.linkedin.com/in/sullivan-rakotoniaina/",
        "https://www.instagram.com/la_vie_de_sullivan/",
        "https://web.facebook.com/sullivan.jororakotoniaina"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sullivan-portfolio.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sullivan-portfolio.vercel.app"
    },
    "inLanguage": "fr-FR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbListJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://sullivan-portfolio.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "À propos",
        "item": "https://sullivan-portfolio.vercel.app/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Compétences",
        "item": "https://sullivan-portfolio.vercel.app/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projets",
        "item": "https://sullivan-portfolio.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://sullivan-portfolio.vercel.app/#contact"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment Sullivan Joro aide-t-il les PME ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sullivan Joro accompagne les PME dans leur croissance en combinant développement web, réseaux sociaux, contenu stratégique, copywriting et intelligence artificielle selon leurs objectifs business."
        }
      },
      {
        "@type": "Question",
        "name": "Où est basé Sullivan Joro ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sullivan Joro est basé à Antananarivo, au lot II H 12Ter Ankadidramamy, et travaille en télétravail ou en présentiel selon les besoins."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le rôle de Tech Bloom Agency ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La marque personnelle de Sullivan Joro attire l’audience, crée la confiance et cadre la stratégie. Tech Bloom Agency est la structure qui exécute les prestations et assure la livraison des projets."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sullivan-portfolio.vercel.app/#business",
    "name": "Sullivan Joro — Digital Growth Partner",
    "description": "Accompagnement de croissance digitale pour PME depuis Antananarivo, avec exécution des projets par Tech Bloom Agency.",
    "url": "https://sullivan-portfolio.vercel.app",
    "telephone": "+261341060802",
    "email": "jorosullivan13@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressRegion": "Analamanga",
      "streetAddress": "Lot II H 12Ter Ankadidramamy",
      "addressCountry": "MG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-18.8792",
      "longitude": "47.5079"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "image": "https://sullivan-portfolio.vercel.app/sullivan.jpeg",
    "sameAs": [
      "https://github.com/Sullivan1301",
      "https://www.linkedin.com/in/sullivan-rakotoniaina/",
      "https://www.instagram.com/la_vie_de_sullivan/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

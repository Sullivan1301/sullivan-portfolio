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
    "jobTitle": "Accompagnateur Digital et Freelance Malagasy",
    "description": "Accompagnateur digital et freelance malagasy à Antananarivo, Madagascar. Spécialisé en développement web, community management, social media management, stratégie éditoriale, storytelling et création de contenu.",
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
    "description": "Agence digitale spécialisée en développement web, branding & identité visuelle, marketing digital et community management. Accompagnement des PME, TPE et entrepreneurs.",
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
    "description": "Portfolio de Sullivan Joro - Accompagnateur digital et freelance malagasy à Madagascar.",
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
        "name": "Qui est Sullivan Joro ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sullivan Joro Rakotoniaina est un accompagnateur digital et freelance malagasy basé à Antananarivo, Madagascar. Il est spécialisé dans le développement web, le community management, le social media management, la stratégie éditoriale et la création de contenu."
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
        "name": "Quelles compétences maîtrise Sullivan Joro ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sullivan Joro maîtrise le développement web, le community management, le social media management, la stratégie éditoriale, le storytelling, la création de contenu et l'analyse de performances ainsi que Meta Business Suite, Canva, CapCut, Trello et Notion."
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
    "name": "Sullivan Joro - Accompagnateur Digital",
    "description": "Accompagnateur digital et freelance malagasy basé à Antananarivo, Madagascar.",
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

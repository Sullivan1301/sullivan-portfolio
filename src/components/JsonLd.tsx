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
    "jobTitle": "Développeur Web & Entrepreneur Digital",
    "description": "Développeur web Next.js, entrepreneur digital et community manager à Madagascar. Fondateur de Tech Bloom Agency, spécialisé en création de sites web, stratégie digitale et transformation numérique.",
    "url": "https://sullivan-portfolio.vercel.app",
    "image": "https://sullivan-portfolio.vercel.app/sullivan.jpeg",
    "email": "sullivanjoro3@gmail.com",
    "telephone": "+261341060802",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressCountry": "MG"
    },
    "knowsLanguage": [
      { "@type": "Language", "name": "Français" },
      { "@type": "Language", "name": "Anglais" },
      { "@type": "Language", "name": "Malgache" }
    ],
    "knowsAbout": [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Développement Web",
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
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Tech Bloom Agency",
        "sameAs": "https://techbloom.agency"
      }
    ],
    "sameAs": [
      "https://github.com/Sullivan1301",
      "https://www.linkedin.com/in/sullivan-rakotoniaina/",
      "https://www.instagram.com/la_vie_de_sullivan/",
      "https://web.facebook.com/sullivan.jororakotoniaina"
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
    "description": "Portfolio de Sullivan Joro - Développeur web Next.js, entrepreneur digital et community manager à Madagascar.",
    "publisher": {
      "@type": "Person",
      "name": "Joro Sullivan Rakotoniaina"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sullivan-portfolio.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sullivan-portfolio.vercel.app/#business",
    "name": "Sullivan Joro - Développeur Web",
    "description": "Développeur web freelance et entrepreneur digital basé à Antananarivo, Madagascar. Services de création de sites web, stratégie digitale et accompagnement numérique.",
    "url": "https://sullivan-portfolio.vercel.app",
    "telephone": "+261341060802",
    "email": "sullivanjoro3@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antananarivo",
      "addressRegion": "Analamanga",
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
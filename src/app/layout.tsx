import type { Metadata, Viewport } from "next";
import { Bitter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import {
  PersonJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
  BreadcrumbListJsonLd,
  LocalBusinessJsonLd,
} from "@/components/JsonLd";
import SmoothScroll from "@/components/ui/SmoothScroll";

// Optimized font loading with next/font - zero CLS
const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sullivan-portfolio.vercel.app"),
  title: {
    default: "Joro Sullivan Rakotoniaina | Accompagnateur Digital et Freelance Malagasy",
    template: "%s | Sullivan Joro"
  },
  description: "Portfolio de Sullivan Joro - Accompagnateur digital et freelance malagasy basé à Antananarivo, Madagascar. Spécialisé en développement web, community management, social media management, stratégie éditoriale et création de contenu, avec Tech Bloom Agency comme levier B2B.",
  keywords: [
    "accompagnateur digital",
    "freelance malagasy",
    "développement web",
    "community manager",
    "social media manager",
    "freelance",
    "Madagascar",
    "Antananarivo",
    "Toamasina",
    "stratégie digitale",
    "création de contenu",
    "storytelling",
    "analyse des performances",
    "marketing digital",
    "Tech Bloom Agency",
    "Meta Business Suite",
    "Canva",
    "CapCut",
    "Trello",
    "Notion"
  ],
  authors: [{ name: "Joro Sullivan Rakotoniaina", url: "https://sullivan-portfolio.vercel.app" }],
  creator: "Sullivan Joro",
  publisher: "Sullivan Joro",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sullivan-portfolio.vercel.app",
    siteName: "Portfolio Sullivan Joro",
    title: "Joro Sullivan Rakotoniaina | Accompagnateur Digital et Freelance Malagasy",
    description: "Accompagnateur digital et freelance malagasy à Madagascar. Développement web, community management, social media management et création de contenu.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Sullivan Joro - Accompagnateur Digital et Freelance Malagasy à Madagascar",
      type: "image/png",
    }],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@sullivan_joro",
    creator: "@sullivan_joro",
    title: "Joro Sullivan Rakotoniaina | Accompagnateur Digital et Freelance Malagasy",
    description: "Accompagnateur digital et freelance malagasy à Madagascar. Découvrez mon parcours et mes compétences.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (à configurer avec les outils)
  verification: {
    google: "google-site-verification-code", // À remplacer après inscription Google Search Console
  },

  // Alternates
  alternates: {
    canonical: "https://sullivan-portfolio.vercel.app",
  },

  // Category
  category: "technology",

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#e63946" },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${bitter.variable} ${firaCode.variable}`}>
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* GEO tags for search engines */}
        <meta name="geo.position" content="-18.8792;47.5079" />
        <meta name="geo.placename" content="Antananarivo, Madagascar" />
        <meta name="geo.region" content="MG" />

        {/* Bing Webmaster Tools verification */}
        <meta name="msvalidate.01" content="bing-verification-code" />

        {/* DuckDuckGo optimization */}
        <meta name="duckduckgo-site-verification" content="duckduckgo-verification-code" />

        {/* Schema.org for AI assistants */}
        <meta name="generator" content="Next.js 15" />
        <meta name="application-name" content="Portfolio Sullivan Joro" />
        <meta name="apple-mobile-web-app-title" content="Sullivan Joro" />

        {/* JSON-LD Structured Data */}
        <PersonJsonLd />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <BreadcrumbListJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className={`${bitter.className} antialiased`}>
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        {process.env.NODE_ENV === 'production' && (
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="044d08b0-bb2e-4cce-8df0-9942a10a7310"
          />
        )}
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <Analytics />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Bitter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  PersonJsonLd,
  WebSiteJsonLd,
} from "@/components/JsonLd";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { siteUrl } from "@/lib/site";

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

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

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
  metadataBase: new URL(siteUrl),
  applicationName: "Sullivan Joro",
  title: {
    default: "Sullivan Joro | Digital Growth Partner pour PME",
    template: "%s | Sullivan Joro",
  },
  description:
    "Sullivan Joro aide les PME à développer leur activité grâce au web, aux réseaux sociaux, au contenu stratégique et à l’IA, avec Tech Bloom Agency.",
  keywords: [
    "digital growth partner",
    "croissance digitale PME",
    "accompagnement digital Madagascar",
    "développement web",
    "community manager",
    "social media manager",
    "génération de prospects",
    "Madagascar",
    "Antananarivo",
    "Toamasina",
    "stratégie digitale",
    "création de contenu",
    "storytelling",
    "analyse des performances",
    "marketing digital",
    "Tech Bloom Agency",
  ],
  authors: [{ name: "Joro Sullivan Rakotoniaina", url: siteUrl }],
  creator: "Sullivan Joro",
  publisher: "Sullivan Joro",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Sullivan Joro",
    title: "Sullivan Joro | Digital Growth Partner pour PME",
    description:
      "Développement web, réseaux sociaux, contenu stratégique et IA au service de la croissance de votre entreprise.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sullivan_joro",
    creator: "@sullivan_joro",
    title: "Sullivan Joro | Digital Growth Partner pour PME",
    description:
      "Transformez votre présence digitale en levier de croissance avec une stratégie orientée résultats.",
  },
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
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification
      ? { other: { "msvalidate.01": bingSiteVerification } }
      : {}),
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "business",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
        {/* GEO tags for search engines */}
        <meta name="geo.position" content="-18.8792;47.5079" />
        <meta name="geo.placename" content="Antananarivo, Madagascar" />
        <meta name="geo.region" content="MG" />

        {/* Schema.org for AI assistants */}
        <meta name="generator" content="Next.js 15" />
        <meta name="application-name" content="Sullivan Joro" />
        <meta name="apple-mobile-web-app-title" content="Sullivan Joro" />

        {/* JSON-LD Structured Data */}
        <PersonJsonLd />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
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
        {googleAnalyticsId ? (
          <GoogleAnalyticsConsent gaId={googleAnalyticsId} />
        ) : null}
      </body>
    </html>
  );
}

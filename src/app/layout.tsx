import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL("https://sullivan-portfolio.vercel.app"),
    title: {
        default: "Joro Sullivan Rakotoniaina | Développeur & Entrepreneur Digital",
        template: "%s | Sullivan Joro"
    },
    description: "Portfolio de Sullivan Joro - Développeur web Next.js, entrepreneur digital et community manager à Madagascar. Création de sites web, stratégie digitale et photographie mobile.",
    keywords: "développeur web, entrepreneur digital, community manager, Next.js, Madagascar, Toamasina, portfolio, Tech Bloom Agency",
    authors: [{ name: "Joro Sullivan Rakotoniaina" }],
    creator: "Sullivan Joro",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://sullivan-portfolio.vercel.app",
        title: "Joro Sullivan Rakotoniaina | Portfolio",
        description: "Développeur web & entrepreneur digital à Madagascar. Découvrez mes projets et compétences.",
        siteName: "Sullivan Portfolio",
        images: [{
            url: "/og-image.png", // À créer plus tard
            width: 1200,
            height: 630,
            alt: "Sullivan Joro - Portfolio"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Joro Sullivan Rakotoniaina | Portfolio",
        description: "Développeur web & entrepreneur digital à Madagascar",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    }
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="antialiased">
        <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="044d08b0-bb2e-4cce-8df0-9942a10a7310"
        />
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
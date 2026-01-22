import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Joro Sullivan Rakotoniaina | Digital Strategist & Web Developer",
    description: "Jeune diplômé en informatique, fondateur de Tech Bloom Agency, spécialisé en stratégie digitale, community management, marketing digital et développement web.",
    keywords: ["Digital Strategist", "Web Developer", "React", "Next.js", "Marketing Digital", "Community Management", "Madagascar"],
    authors: [{ name: "Joro Sullivan Rakotoniaina" }],
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
        title: "Joro Sullivan Rakotoniaina | Digital Strategist & Web Developer",
        description: "J'accompagne les marques et projets dans leur croissance en ligne à travers des stratégies orientées résultats.",
        type: "website",
        locale: "fr_FR",
        url: "https://jorosullivan.com",
        siteName: "Joro Sullivan Rakotoniaina Portfolio",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
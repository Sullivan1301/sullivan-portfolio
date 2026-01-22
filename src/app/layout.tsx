import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Joro Sullivan Rakotoniaina | Digital Strategist & Web Developer",
    description: "Jeune diplômé en informatique, fondateur de Tech Bloom Agency, spécialisé en stratégie digitale, community management, marketing digital et développement web.",
    keywords: ["Digital Strategist", "Web Developer", "React", "Next.js", "Marketing Digital", "Community Management", "Madagascar"],
    authors: [{ name: "Joro Sullivan Rakotoniaina" }],
    openGraph: {
        title: "Joro Sullivan Rakotoniaina | Digital Strategist & Web Developer",
        description: "J'accompagne les marques et projets dans leur croissance en ligne à travers des stratégies orientées résultats.",
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Joro Sullivan Rakotoniaina | Digital Strategist & Web Developer",
        description: "J'accompagne les marques et projets dans leur croissance en ligne à travers des stratégies orientées résultats.",
    },
    robots: {
        index: true,
        follow: true,
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
            </SmoothScroll>
        </ThemeProvider>
        </body>
        </html>
    );
}
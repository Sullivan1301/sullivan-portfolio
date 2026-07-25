import { Linkedin, Instagram, Mail, MessageCircle, Heart, Github, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnalyticsPreferencesButton from "@/components/AnalyticsPreferencesButton";

/* Social icon config for DRY rendering */
const socials = [
  {
    href: "mailto:jorosullivan13@gmail.com",
    icon: Mail,
    label: "Contacter par email (jorosullivan13@gmail.com)",
    title: "Email: jorosullivan13@gmail.com",
  },
  {
    href: "https://github.com/Sullivan1301/",
    icon: Github,
    label: "Voir le profil GitHub de Sullivan Joro",
    title: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/sullivan-rakotoniaina/",
    icon: Linkedin,
    label: "Voir le profil LinkedIn de Sullivan Joro",
    title: "LinkedIn",
    external: true,
  },
  {
    href: "https://www.instagram.com/la_vie_de_sullivan/",
    icon: Instagram,
    label: "Suivre sur Instagram",
    title: "Instagram",
    external: true,
  },
  {
    href: "https://web.facebook.com/sullivan.jororakotoniaina",
    icon: Facebook,
    label: "Voir le profil Facebook de Sullivan Joro",
    title: "Facebook",
    external: true,
  },
  {
    href: "https://wa.me/261341060802",
    icon: MessageCircle,
    label: "Contacter via WhatsApp",
    title: "WhatsApp",
    external: true,
  },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const googleAnalyticsEnabled = Boolean(
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    );

    return (
        <footer
            className="relative rounded-xl border-t border-primary-violet-light/10 bg-background-dark/95 p-12 shadow-[0_-10px_60px_-15px_rgba(124,58,237,0.2)] backdrop-blur-3xl transition-shadow duration-500 hover:shadow-[0_-10px_80px_-15px_rgba(124,58,237,0.3)]"
            style={{ position: "relative", zIndex: 5 }}
        >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />

            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-primary-violet-light/40 shadow-[0_0_12px_rgba(124,58,237,0.25)] transition-[border-color,box-shadow] duration-300 group-hover:border-accent-gold/60 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]">
                                <Image
                                    src="/sullivan-icon.png"
                                    alt="Photo de profil Sullivan Joro"
                                    width={44}
                                    height={44}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <span className="font-bold text-foreground group-hover:text-accent-gold transition-colors duration-300">
                                    Sullivan
                                </span>
                                <span className="sr-only">Joro Rakotoniaina — Digital Growth Partner à Madagascar</span>
                            </div>
                        </Link>
                        <p className="text-sm text-primary-violet-light/60 mt-2 font-medium">
                            Digital Growth Partner · Projets exécutés avec Tech Bloom Agency
                        </p>
                    </div>

                    {/* Social icons */}
                    <nav className="flex items-center gap-3 flex-wrap justify-center" aria-label="Liens vers les réseaux sociaux">
                        {socials.map(({ href, icon: Icon, label, title, external }) => (
                            <a
                                key={title}
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                className="group/icon flex h-11 w-11 items-center justify-center rounded-xl border border-primary-violet-light/15 bg-primary-violet/10 text-primary-violet-light transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-accent-gold/40 hover:bg-accent-gold/15 hover:text-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                                aria-label={label}
                                title={title}
                            >
                                <Icon
                                    size={18}
                                    className="transition-transform duration-200 group-hover/icon:scale-110"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Divider */}
                <div className="mt-10 border-t border-primary-violet-light/10 pt-8 text-center">
                    <nav
                        className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1"
                        aria-label="Informations complémentaires"
                    >
                        <Link
                            href="/faq"
                            className="inline-flex min-h-11 items-center rounded-md px-1 text-sm text-primary-violet-light/60 transition-colors hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                        >
                            Questions fréquentes
                        </Link>
                        <Link
                            href="/confidentialite"
                            className="inline-flex min-h-11 items-center rounded-md px-1 text-sm text-primary-violet-light/60 transition-colors hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                        >
                            Confidentialité
                        </Link>
                        {googleAnalyticsEnabled ? (
                            <AnalyticsPreferencesButton />
                        ) : null}
                    </nav>
                    <p className="text-sm text-primary-violet-light/50 flex items-center justify-center gap-1.5">
                        © {currentYear} Joro Sullivan Rakotoniaina. Fait avec
                        <Heart size={13} className="text-accent-gold fill-accent-gold" aria-hidden="true" />
                        à Madagascar
                    </p>
                </div>
            </div>
        </footer>
    );
}

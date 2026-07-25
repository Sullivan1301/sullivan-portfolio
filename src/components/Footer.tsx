import { Linkedin, Instagram, Mail, MessageCircle, Heart, Github, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

    return (
        <footer
            className="relative bg-background-dark/95 backdrop-blur-3xl border-t border-primary-violet-light/10 p-12 rounded-xl shadow-[0_-10px_60px_-15px_rgba(124,58,237,0.2)] transition-all duration-500 hover:shadow-[0_-10px_80px_-15px_rgba(124,58,237,0.3)]"
            style={{ position: "relative", zIndex: 5 }}
        >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />

            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary-violet-light/40 shadow-[0_0_12px_rgba(124,58,237,0.25)] group-hover:border-accent-gold/60 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)] transition-all duration-300">
                                <Image
                                    src="/sullivan.jpeg"
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
                                <span className="sr-only">Joro Rakotoniaina - Accompagnateur Digital et Freelance Malagasy</span>
                            </div>
                        </Link>
                        <p className="text-sm text-primary-violet-light/60 mt-2 font-medium">
                            Stratégie Digitale & Développement Web
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
                                className="group/icon w-11 h-11 rounded-xl bg-primary-violet/10 border border-primary-violet-light/15 flex items-center justify-center text-primary-violet-light hover:bg-accent-gold/15 hover:text-accent-gold hover:border-accent-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300"
                                aria-label={label}
                                title={title}
                            >
                                <Icon size={18} className="group-hover/icon:scale-110 transition-transform duration-200" />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Divider */}
                <div className="mt-10 pt-8 border-t border-primary-violet-light/10 text-center">
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

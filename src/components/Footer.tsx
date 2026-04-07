import { Linkedin, Instagram, Mail, MessageCircle, Heart, Github, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-highlight">
                                <Image
                                    src="/sullivan.jpeg"
                                    alt="Photo de profil Sullivan Joro"
                                    width={40}
                                    height={40}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="font-bold text-foreground">Sullivan</span>
                            <span className="sr-only">Joro Rakotoniaina - Développeur Web</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2">
                            Stratégie Digital & Développement Web
                        </p>
                    </div>

                    <nav className="flex items-center gap-4 flex-wrap justify-center" aria-label="Liens vers les réseaux sociaux">
                        <a
                            href="mailto:sullivanjoro3@gmail.com"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Contacter par email (sullivanjoro3@gmail.com)"
                            title="Email: sullivanjoro3@gmail.com"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://github.com/Sullivan1301/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Voir le profil GitHub de Sullivan Joro"
                            title="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sullivan-rakotoniaina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Voir le profil LinkedIn de Sullivan Joro"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/la_vie_de_sullivan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Suivre sur Instagram"
                            title="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://web.facebook.com/sullivan.jororakotoniaina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Voir le profil Facebook de Sullivan Joro"
                            title="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="https://wa.me/+261341060802"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Contacter via WhatsApp"
                            title="WhatsApp"
                        >
                            <MessageCircle size={18} />
                        </a>
                    </nav>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        © {currentYear} Joro Sullivan Rakotoniaina. Fait avec
                        <Heart size={14} className="text-red-500" />
                        à Madagascar
                    </p>
                </div>
            </div>
        </footer>
    );
}

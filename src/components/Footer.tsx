import { Linkedin, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-semibold gradient-text">
                            JSR
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            Digital Strategist & Web Developer
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:jorosullivan13@gmail.com"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-highlight/10 hover:text-highlight transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                    </div>
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

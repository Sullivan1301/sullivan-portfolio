"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Instagram, CheckCircle, MessageCircle, Github, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";
import { trackGoogleEvent } from "@/lib/analytics";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Discussion avec ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\nEmail: ${formData.email}`);
        const mailtoLink = `mailto:jorosullivan13@gmail.com?subject=${subject}&body=${body}`;
        trackGoogleEvent("generate_lead", { location: "contact_form", method: "email" });
        window.location.href = mailtoLink;
        setIsSubmitted(true);
        if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = window.setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="section-padding relative" style={{ position: "relative", zIndex: 5 }}>
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-sm font-medium text-highlight uppercase tracking-wider">
                        Parlons-en
                    </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Tu as une idée, un problème ou juste besoin d’y voir plus clair ?</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Explique-moi où tu en es. On peut commencer simplement : comprendre la situation, regarder les options et voir ce qui mérite d’être construit.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                        <motion.div className="glass-card rounded-2xl p-8 mb-6" whileHover={{ scale: 1.01 }}>
                            <h3 className="text-xl font-semibold mb-6">Contact direct</h3>
                            <div className="space-y-6">
                                <Magnetic strength={0.1}>
                                    <motion.div className="flex items-center gap-4 cursor-default" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                        <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20">
                                            <Mail className="text-highlight" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a href="mailto:jorosullivan13@gmail.com" className="font-medium hover:text-highlight transition-colors" title="Envoyer un email a Sullivan">
                                                jorosullivan13@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>
                                </Magnetic>

                                <Magnetic strength={0.1}>
                                    <motion.div className="flex items-center gap-4 cursor-default" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                        <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20">
                                            <MapPin className="text-highlight" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Base</p>
                                            <p className="font-medium">Madagascar, avec projets a distance</p>
                                        </div>
                                    </motion.div>
                                </Magnetic>
                            </div>
                        </motion.div>

                        <motion.div className="glass-card rounded-2xl p-8" whileHover={{ scale: 1.01 }}>
                            <h3 className="text-xl font-semibold mb-6">Langues</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between gap-4"><span>Francais</span><span className="font-medium">Courant</span></div>
                                <div className="flex justify-between gap-4"><span>Anglais</span><span className="font-medium">Intermediaire</span></div>
                                <div className="flex justify-between gap-4"><span>Malgache</span><span className="font-medium">Langue maternelle</span></div>
                            </div>
                        </motion.div>

                        <motion.div className="glass-card rounded-2xl p-8" whileHover={{ scale: 1.01 }}>
                            <h3 className="text-xl font-semibold mb-6">Me retrouver ailleurs</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { href: "https://github.com/Sullivan1301/", label: "Voir le profil GitHub de Sullivan Joro", icon: Github },
                                    { href: "https://www.linkedin.com/in/sullivan-rakotoniaina/", label: "Voir le profil LinkedIn de Sullivan Joro", icon: Linkedin },
                                    { href: "https://www.instagram.com/la_vie_de_sullivan/", label: "Suivre Sullivan Joro sur Instagram", icon: Instagram },
                                    { href: "https://web.facebook.com/sullivan.jororakotoniaina", label: "Voir le profil Facebook de Sullivan Joro", icon: Facebook },
                                    { href: "https://wa.me/261341060802", label: "Contacter Sullivan Joro sur WhatsApp", icon: MessageCircle },
                                ].map(({ href, label, icon: Icon }) => (
                                    <Magnetic key={label} strength={0.2}>
                                        <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-xl border border-highlight/20 bg-highlight/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight" whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                                            <Icon className="text-highlight" size={20} aria-hidden="true" />
                                        </motion.a>
                                    </Magnetic>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="glass-card rounded-2xl p-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                        <h3 className="text-xl font-semibold mb-6">Laisse-moi un message</h3>
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div key="success" className="flex flex-col items-center justify-center py-12 text-center" aria-live="polite" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                                    <CheckCircle className="text-green-500 mb-4" size={48} aria-hidden="true" />
                                    <p className="text-lg font-medium">Ton application email est ouverte</p>
                                    <p className="text-muted-foreground">Il ne reste plus qu’à envoyer le message.</p>
                                </motion.div>
                            ) : (
                                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                                        <motion.input type="text" id="name" name="name" autoComplete="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 transition-[border-color,box-shadow,transform] focus:border-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight" placeholder="Ton nom" whileFocus={{ scale: 1.01 }} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <motion.input type="email" id="email" name="email" autoComplete="email" spellCheck={false} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 transition-[border-color,box-shadow,transform] focus:border-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight" placeholder="toi@email.com" whileFocus={{ scale: 1.01 }} />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                        <motion.textarea id="message" name="message" autoComplete="off" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 transition-[border-color,box-shadow,transform] focus:border-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight" placeholder="Dis-moi ou tu en es, ce que tu veux construire, ou ce qui est encore flou." whileFocus={{ scale: 1.01 }} />
                                    </div>
                                    <Magnetic strength={0.1}>
                                        <motion.button type="submit" className="glow-red flex w-full items-center justify-center gap-2 rounded-xl bg-highlight px-6 py-4 font-medium text-highlight-foreground transition-[transform,box-shadow,background-color] focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Send size={18} aria-hidden="true" /> Envoyer
                                        </motion.button>
                                    </Magnetic>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

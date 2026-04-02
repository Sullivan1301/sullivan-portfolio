"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Instagram, CheckCircle, MessageCircle, Github, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:sullivanjoro3@gmail.com?subject=Contact de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AEmail: ${formData.email}`;
        window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: mailtoLink } }, "*");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
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
            Contact
          </span>
                    <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        <h2>Travaillons ensemble</h2>
                    </TextReveal>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Intéressé par une collaboration ou un recrutement ? N&apos;hésitez pas à me contacter.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="glass-card rounded-2xl p-8 mb-6"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>

                            <div className="space-y-6">
                                <Magnetic strength={0.1}>
                                    <motion.div
                                        className="flex items-center gap-4 cursor-default"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20">
                                            <Mail className="text-highlight" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a href="mailto:sullivanjoro3@gmail.com" className="font-medium hover:text-highlight transition-colors">
                                                sullivanjoro3@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>
                                </Magnetic>

                                <Magnetic strength={0.1}>
                                    <motion.div
                                        className="flex items-center gap-4 cursor-default"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20">
                                            <MapPin className="text-highlight" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Disponibilité</p>
                                            <p className="font-medium">Télétravail ou Hybride</p>
                                        </div>
                                    </motion.div>
                                </Magnetic>
                            </div>
                        </motion.div>

                        <motion.div
                            className="glass-card rounded-2xl p-8"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-xl font-semibold mb-6">Langues</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Français</span>
                                    <span className="font-medium">Courant (parlé & écrit)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Anglais</span>
                                    <span className="font-medium">Niveau intermédiaire</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Malgache</span>
                                    <span className="font-medium">Langue maternelle</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="glass-card rounded-2xl p-8"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-xl font-semibold mb-6">Réseaux sociaux</h3>
                            <div className="flex flex-wrap gap-4">
                                <Magnetic strength={0.2}>
                                    <motion.a
                                        href="https://github.com/Sullivan1301/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="text-highlight" size={20} />
                                    </motion.a>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <motion.a
                                        href="https://www.linkedin.com/in/sullivan-rakotoniaina/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                                        whileHover={{ scale: 1.15, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="text-highlight" size={20} />
                                    </motion.a>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <motion.a
                                        href="https://www.instagram.com/la_vie_de_sullivan/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Instagram className="text-highlight" size={20} />
                                    </motion.a>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <motion.a
                                        href="https://web.facebook.com/sullivan.jororakotoniaina"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                                        whileHover={{ scale: 1.15, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Facebook className="text-highlight" size={20} />
                                    </motion.a>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <motion.a
                                        href="https://wa.me/+261341060802"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MessageCircle className="text-highlight" size={20} />
                                    </motion.a>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="glass-card rounded-2xl p-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className="text-xl font-semibold mb-6">Envoyer un message</h3>

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    >
                                        <CheckCircle className="text-green-500 mb-4" size={48} />
                                    </motion.div>
                                    <p className="text-lg font-medium">Message envoyé !</p>
                                    <p className="text-muted-foreground">Merci pour votre message.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Nom
                                        </label>
                                        <motion.input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                                            placeholder="Votre nom"
                                            whileFocus={{ scale: 1.01 }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <motion.input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                                            placeholder="votre@email.com"
                                            whileFocus={{ scale: 1.01 }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <motion.textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
                                            placeholder="Votre message..."
                                            whileFocus={{ scale: 1.01 }}
                                        />
                                    </div>

                                    <Magnetic strength={0.1}>
                                        <motion.button
                                            type="submit"
                                            className="w-full px-6 py-4 bg-highlight text-highlight-foreground rounded-xl font-medium transition-all glow-red flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Send size={18} />
                                            Envoyer
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

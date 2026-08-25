"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/#vision", label: "Vision" },
  { href: "/#skills", label: "Solutions" },
  { href: "/#projects", label: "Réalisations" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/#contact", label: "Parlons-en" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const section = document.querySelector(href.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-background-dark/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(124,58,237,0.15)] border-b border-primary-violet-light/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Subtle top gradient bar – violet to gold accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-violet via-accent-gold to-primary-violet opacity-80" />

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Avatar */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-violet-light/50 shadow-[0_0_12px_rgba(124,58,237,0.3)] group-hover:border-accent-gold/60 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.3)] transition-all duration-300">
            <Image
              src="/sullivan.jpeg"
              alt="Portrait de Sullivan Joro, Community Manager et Content Creator"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-[#f8f9fa] group-hover:text-accent-gold transition-colors duration-300">
            Sullivan
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#f8f9fa]">
          {navItems.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="relative py-1 text-primary-violet-light/80 hover:text-accent-gold focus:text-accent-gold focus:outline-none transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary-violet after:to-accent-gold after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
            >
              {label}
            </Link>
          ))}

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-primary-violet-light/20 text-primary-violet-light hover:text-accent-gold hover:border-accent-gold/40 hover:shadow-[0_0_12px_rgba(212,175,55,0.25)] focus:outline-none focus:ring-2 focus:ring-accent-gold/40 transition-all duration-300"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="text-primary-violet-light hover:text-accent-gold focus:outline-none transition-colors duration-300"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </motion.button>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#f8f9fa] hover:text-accent-gold focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background-dark/95 backdrop-blur-xl border-t border-primary-violet-light/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-6 gap-5 font-medium text-foreground">
              {navItems.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={(e) => { scrollToSection(e, href); setIsMenuOpen(false); }}
                  className="text-primary-violet-light/80 hover:text-accent-gold focus:text-accent-gold focus:outline-none transition-colors duration-300 border-b border-primary-violet-light/5 pb-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

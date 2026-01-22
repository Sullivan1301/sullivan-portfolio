"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Avatar */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-highlight">
            <Image
              src="/sullivan.jpeg"
              alt="Sullivan Joro"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-foreground">Sullivan</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-foreground">
          <Link href="/" className="hover:text-highlight transition">Accueil</Link>
          <Link href="/#about" onClick={(e) => scrollToSection(e, "/#about")} className="hover:text-highlight transition">À propos</Link>
          <Link href="/#skills" onClick={(e) => scrollToSection(e, "/#skills")} className="hover:text-highlight transition">Compétences</Link>
          <Link href="/#projects" onClick={(e) => scrollToSection(e, "/#projects")} className="hover:text-highlight transition">Projets</Link>
          <Link href="/#contact" onClick={(e) => scrollToSection(e, "/#contact")} className="hover:text-highlight transition">Contact</Link>
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="hover:text-highlight transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-foreground hover:text-highlight transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-4 font-medium text-foreground">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="/#about" onClick={(e) => scrollToSection(e, "/#about")}>À propos</Link>
            <Link href="/#skills" onClick={(e) => scrollToSection(e, "/#skills")}>Compétences</Link>
            <Link href="/#projects" onClick={(e) => scrollToSection(e, "/#projects")}>Projets</Link>
            <Link href="/#contact" onClick={(e) => scrollToSection(e, "/#contact")}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

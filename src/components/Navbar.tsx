"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAEE]/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Avatar */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#B8001F]">
            <Image
              src="/sullivan.jpeg"
              alt="Sullivan Joro"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-[#0D2A40]">Sullivan</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#0D2A40]">
          <Link href="/" className="hover:text-[#B8001F] transition">Accueil</Link>
          <Link href="/#about" className="hover:text-[#B8001F] transition">À propos</Link>
          <Link href="/#skills" className="hover:text-[#B8001F] transition">Compétences</Link>
          <Link href="/portfolio" className="hover:text-[#B8001F] transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#B8001F] transition">Contact</Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#0D2A40]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FCFAEE]/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-4 font-medium text-[#0D2A40]">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="/#about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link href="/#skills" onClick={() => setIsMenuOpen(false)}>Compétences</Link>
            <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

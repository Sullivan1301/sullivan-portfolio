"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import Passion from "@/components/Passion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
      <main className="relative">
        <Navbar />
        <Hero />
        <Footer />
      </main>
  );
}

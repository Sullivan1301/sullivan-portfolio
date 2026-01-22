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
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
    return (
        <main className="relative">
            <ScrollProgress />
            <ParticlesBackground />
            <Navbar />

            <Hero />

            <SectionReveal>
                <About />
            </SectionReveal>

            <SectionReveal>
                <Skills />
            </SectionReveal>

            <SectionReveal>
                <Experience />
            </SectionReveal>

            <SectionReveal>
                <Projects />
            </SectionReveal>

            <SectionReveal>
                <Vision />
            </SectionReveal>

            <SectionReveal>
                <Passion />
            </SectionReveal>

            <SectionReveal>
                <Contact />
            </SectionReveal>

            <Footer />
        </main>
    );
}
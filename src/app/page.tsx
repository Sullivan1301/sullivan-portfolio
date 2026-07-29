import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Vision from "@/components/Vision";
import Passion from "@/components/Passion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { SectionReveal } from "@/components/ui/SectionReveal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <ParticlesBackground />
            <Navbar />

            <main className="relative" id="main-content" tabIndex={-1}>
                <Hero />

                <SectionReveal>
                    <Vision />
                </SectionReveal>

                <SectionReveal>
                    <Skills />
                </SectionReveal>

                <SectionReveal>
                    <Projects />
                </SectionReveal>

                <SectionReveal>
                    <Testimonials />
                </SectionReveal>

                <SectionReveal>
                    <About />
                </SectionReveal>

                <SectionReveal>
                    <Experience />
                </SectionReveal>

                <SectionReveal>
                    <Education />
                </SectionReveal>

                <SectionReveal>
                    <Activities />
                </SectionReveal>

                <SectionReveal>
                    <Passion />
                </SectionReveal>

                <SectionReveal>
                    <Contact />
                </SectionReveal>
            </main>

            <Footer />
        </>
    );
}

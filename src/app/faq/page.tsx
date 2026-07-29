import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FAQPageJsonLd } from "@/components/JsonLd";
import { faqItems } from "@/data/faqs";
import { seoLastModified, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions fréquentes sur la croissance digitale des PME",
  description:
    "Réponses aux questions des PME sur les sites web, les réseaux sociaux, l’IA et l’accompagnement proposé par Sullivan Joro.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "FAQ — Croissance digitale des PME | Sullivan Joro",
    description:
      "Tout comprendre sur l’accompagnement digital, Tech Bloom Agency, les méthodes et le suivi des résultats.",
    url: `${siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24 pt-32">
        <FAQPageJsonLd items={faqItems} />

        <div className="container-custom">
          <Link
            href="/"
            className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-highlight"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Retour à l’accueil
          </Link>

          <header className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-wider text-highlight">
              Questions fréquentes
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Développer une PME grâce au digital
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sullivan Joro accompagne les PME avec une stratégie digitale
              orientée croissance. Tech Bloom Agency porte l’exécution et la
              livraison des projets.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Dernière mise à jour :{" "}
              <time dateTime={seoLastModified}>29 juillet 2026</time>
            </p>
          </header>

          <section
            className="mt-16 grid gap-6 lg:grid-cols-2"
            aria-label="Réponses aux questions fréquentes"
          >
            {faqItems.map((item) => (
              <article
                key={item.id}
                id={`faq-${item.id}`}
                className="glass-card scroll-mt-28 rounded-2xl p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold leading-snug">
                  {item.question}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

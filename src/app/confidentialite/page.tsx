import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnalyticsPreferencesButton from "@/components/AnalyticsPreferencesButton";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité et mesure d’audience",
  description:
    "Informations sur les données de contact et la mesure d’audience du site de Sullivan Joro.",
  alternates: {
    canonical: `${siteUrl}/confidentialite`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConfidentialitePage() {
  const googleAnalyticsEnabled = Boolean(
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  );

  return (
    <main className="min-h-screen px-4 py-20 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-highlight"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Retour à l’accueil
        </Link>

        <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-5xl">
          Confidentialité et mesure d’audience
        </h1>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Données de contact
            </h2>
            <p className="mt-3">
              Les informations saisies dans le formulaire servent uniquement à
              préparer votre message dans votre application email. Le site ne
              stocke pas ces informations dans une base de données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Google Analytics
            </h2>
            <p className="mt-3">
              Google Analytics mesure les consultations et les actions de
              conversion uniquement lorsqu’il est configuré et après votre
              accord. Vous pouvez refuser ou modifier ce choix à tout moment
              depuis les préférences ci-dessous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Modifier votre choix
            </h2>
            <p className="mt-3">
              L’ouverture des préférences permet d’accepter ou de refuser la
              mesure d’audience. Un refus désactive le chargement de Google
              Analytics et supprime les cookies Analytics accessibles au site.
            </p>
            {googleAnalyticsEnabled ? (
              <div className="mt-4">
                <AnalyticsPreferencesButton />
              </div>
            ) : null}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Données techniques
            </h2>
            <p className="mt-3">
              Vercel Analytics et le système de surveillance des erreurs peuvent
              traiter des informations techniques sur la consultation, le
              navigateur et les erreurs afin de maintenir la fiabilité du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Pour toute question liée à vos données, écrivez à{" "}
              <a
                href="mailto:jorosullivan13@gmail.com"
                className="font-medium text-highlight underline decoration-1 underline-offset-4"
              >
                jorosullivan13@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

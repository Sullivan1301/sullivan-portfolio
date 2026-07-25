"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  analyticsConsentKey,
  openAnalyticsPreferencesEvent,
} from "@/lib/analytics";

type ConsentChoice = "granted" | "denied" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function clearGoogleAnalyticsCookies() {
  const analyticsCookie = /^_(ga|gid|gat)/;

  document.cookie.split(";").forEach((cookie) => {
    const cookieName = cookie.split("=")[0]?.trim();
    if (cookieName && analyticsCookie.test(cookieName)) {
      document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

export default function GoogleAnalyticsConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const savedValue = window.localStorage.getItem(analyticsConsentKey);
    const savedConsent: ConsentChoice =
      savedValue === "granted" || savedValue === "denied" ? savedValue : null;

    setConsent(savedConsent);
    setIsPreferencesOpen(savedConsent === null);
    setIsReady(true);

    const handleOpenPreferences = () => setIsPreferencesOpen(true);
    window.addEventListener(
      openAnalyticsPreferencesEvent,
      handleOpenPreferences
    );

    return () => {
      window.removeEventListener(
        openAnalyticsPreferencesEvent,
        handleOpenPreferences
      );
    };
  }, []);

  const handleConsent = (choice: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(analyticsConsentKey, choice);
    setConsent(choice);
    setIsPreferencesOpen(false);

    if (choice === "granted") {
      window.gtag?.("consent", "update", {
        ad_personalization: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        analytics_storage: "granted",
      });
    } else {
      window.gtag?.("consent", "update", {
        ad_personalization: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        analytics_storage: "denied",
      });
      clearGoogleAnalyticsCookies();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <>
      {consent === "granted" ? <GoogleAnalytics gaId={gaId} /> : null}

      {isPreferencesOpen ? (
        <aside
          aria-label="Préférences de mesure d’audience"
          className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-2xl rounded-2xl border border-primary-violet-light/20 bg-background-dark-surface p-5 text-[#f8f9fa] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-lg font-semibold">Mesure d’audience</h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-violet-light/80">
                Google Analytics nous aide à comprendre les pages consultées et
                les demandes de contact. Le suivi reste désactivé sans votre
                accord.{" "}
                <Link
                  href="/confidentialite"
                  className="font-medium text-accent-gold underline decoration-1 underline-offset-4"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => handleConsent("denied")}
                className="min-h-11 rounded-full border border-primary-violet-light/30 px-5 py-2 text-sm font-semibold transition-colors hover:border-accent-gold hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => handleConsent("granted")}
                className="min-h-11 rounded-full bg-highlight px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-highlight/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              >
                Accepter
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}

"use client";

import { openAnalyticsPreferencesEvent } from "@/lib/analytics";

export default function AnalyticsPreferencesButton() {
  const handleOpenPreferences = () => {
    window.dispatchEvent(new Event(openAnalyticsPreferencesEvent));
  };

  return (
    <button
      type="button"
      onClick={handleOpenPreferences}
      className="min-h-11 rounded-md px-1 text-sm text-primary-violet-light/60 transition-colors hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
    >
      Préférences Analytics
    </button>
  );
}

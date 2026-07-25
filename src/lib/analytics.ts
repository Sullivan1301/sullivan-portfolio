import { sendGAEvent } from "@next/third-parties/google";

export const analyticsConsentKey = "sullivan-analytics-consent-v1";
export const openAnalyticsPreferencesEvent =
  "sullivan:open-analytics-preferences";

export function trackGoogleEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {}
) {
  if (
    typeof window === "undefined" ||
    window.localStorage.getItem(analyticsConsentKey) !== "granted"
  ) {
    return;
  }

  sendGAEvent("event", eventName, parameters);
}

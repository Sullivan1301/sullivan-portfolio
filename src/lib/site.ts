const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sullivan.techbloom.dev";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
export const seoLastModified = "2026-11-18";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sullivan-portfolio.vercel.app";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
export const seoLastModified = "2026-07-25";

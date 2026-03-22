import type { MetadataRoute } from "next";
import { getSeoPublicOrigin } from "@/lib/site-origin";

/**
 * Crawlers: allow public pages; block implementation and server-only routes.
 * Sitemap URL uses `getSeoPublicOrigin()` so production lists https://www.expatcopilot.com/sitemap.xml
 * when `NEXT_PUBLIC_SITE_URL` is unset (see `lib/site-origin.ts`).
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSeoPublicOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/_vercel/",
        // Conventions for non-public environments (harmless if unused)
        "/dev/",
        "/test/",
        "/preview/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

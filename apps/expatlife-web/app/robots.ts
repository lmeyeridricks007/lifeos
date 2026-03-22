import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();

/**
 * Crawlers: allow public pages; block implementation and server-only routes.
 * Sitemap URL uses `getSiteOrigin()` so production uses `NEXT_PUBLIC_SITE_URL` (see `lib/site-origin.ts`).
 */
export default function robots(): MetadataRoute.Robots {
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

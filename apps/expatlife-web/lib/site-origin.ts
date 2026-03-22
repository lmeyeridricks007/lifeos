/**
 * Canonical origin for production SEO when `NEXT_PUBLIC_SITE_URL` is not set (e.g. Vercel env oversight).
 * Sitemap and robots use `getSeoPublicOrigin()` so crawlers always see https://www.expatcopilot.com/…
 * on the main deployment.
 */
export const PRODUCTION_CANONICAL_ORIGIN = "https://www.expatcopilot.com";

/**
 * Single source for absolute URLs in canonicals, metadataBase, JSON-LD, sitemaps, and OG URLs.
 *
 * - Production: set `NEXT_PUBLIC_SITE_URL` (e.g. https://www.expatcopilot.com).
 * - Vercel: if unset, `VERCEL_URL` is used so preview/prod builds resolve correctly.
 * - Local dev: falls back to http://localhost:3000 (never a fake production host).
 */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const withScheme = raw.startsWith("http") ? raw : `https://${raw}`;
    try {
      return new URL(withScheme).origin;
    } catch {
      /* fall through */
    }
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").split("/")[0];
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

/**
 * Origin for `/sitemap.xml` entry URLs and `robots.txt` `Sitemap:` line.
 *
 * - Prefer `NEXT_PUBLIC_SITE_URL` when set (any environment).
 * - On Vercel **production** only, if unset, use {@link PRODUCTION_CANONICAL_ORIGIN} so the XML sitemap
 *   is not filled with `*.vercel.app` URLs.
 * - Otherwise same as {@link getSiteOrigin} (previews → deployment host, local → localhost).
 */
export function getSeoPublicOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const withScheme = raw.startsWith("http") ? raw : `https://${raw}`;
    try {
      return new URL(withScheme).origin;
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_CANONICAL_ORIGIN;
  }
  return getSiteOrigin();
}

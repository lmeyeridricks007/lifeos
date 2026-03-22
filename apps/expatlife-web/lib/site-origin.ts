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

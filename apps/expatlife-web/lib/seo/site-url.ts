/**
 * Single source of truth for public site URL shape (TECH-P1-SLASH-CANONICAL-SITEMAP).
 *
 * Convention: **no trailing slash** except the site root `/`.
 * Rationale: Vercel/Next with `trailingSlash: false` (default) serves non-slash paths as
 * HTTP 200 and 308s slash variants → non-slash. Canonicals, sitemap locs, and internal
 * hrefs must match the 200 URL.
 */

export const SITE_URL_TRAILING_SLASH = false as const;

/**
 * Normalize a path or path-with-query for registry lookups, sitemap membership, and hrefs.
 * - Ensures a leading `/`
 * - Lowercases the pathname
 * - Strips trailing `/` except for `/`
 * - Drops `?query` / `#hash` for the returned path (callers that need query should append after)
 */
export function normalizeSitePath(href: string): string {
  let p = href.trim();
  if (!p) return "/";
  if (!p.startsWith("/")) p = `/${p}`;
  const pathOnly = p.split(/[?#]/)[0] ?? p;
  if (pathOnly === "/") return "/";
  const stripped = pathOnly.replace(/\/+$/, "");
  return (stripped || "/").toLowerCase();
}

/** Path form for `<Link href>`, nav, and relative canonicals (same as {@link normalizeSitePath}). */
export function toSiteHref(href: string): string {
  return normalizeSitePath(href);
}

/**
 * Absolute crawler-facing URL on the public origin (no trailing slash except origin root).
 * `origin` should be a scheme+host with no path (e.g. `https://www.expatcopilot.com`).
 */
export function toAbsoluteCanonicalUrl(origin: string, href: string): string {
  const base = origin.replace(/\/+$/, "");
  const path = normalizeSitePath(href);
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}

/** True when a pathname uses the canonical slash convention. */
export function isCanonicalPathShape(pathname: string): boolean {
  const p = pathname.split(/[?#]/)[0] || "/";
  if (p === "/") return true;
  return !p.endsWith("/");
}

/**
 * Normalize Metadata-like canonical / Open Graph / Twitter URL fields to the site convention.
 * Safe for plain JSON-serializable metadata objects.
 */
export function canonicalizeMetadataUrls<T extends Record<string, unknown>>(meta: T, origin: string): T {
  const out = { ...meta } as Record<string, unknown>;

  const toAbs = (value: string): string => {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      try {
        return toAbsoluteCanonicalUrl(origin, new URL(value).pathname);
      } catch {
        return value;
      }
    }
    if (value.startsWith("/")) return toAbsoluteCanonicalUrl(origin, value);
    return value;
  };

  const alternates = out.alternates;
  if (alternates && typeof alternates === "object") {
    const a = { ...(alternates as Record<string, unknown>) };
    if (typeof a.canonical === "string") a.canonical = toAbs(a.canonical);
    out.alternates = a;
  }

  const og = out.openGraph;
  if (og && typeof og === "object") {
    const o = { ...(og as Record<string, unknown>) };
    if (typeof o.url === "string") o.url = toAbs(o.url);
    out.openGraph = o;
  }

  return out as T;
}

/**
 * Canonical origin for production SEO.
 * Crawlers must never see `*.vercel.app` in `<link rel="canonical">`, Open Graph `url`, JSON-LD `@id`, or sitemap `<loc>`.
 */
export const PRODUCTION_CANONICAL_ORIGIN = "https://www.expatcopilot.com";

const DEPLOYMENT_PREVIEW_HOST = /\.(vercel\.app|vercel\.sh)$/i;

/** True when the hostname is a Vercel preview/production deployment host, localhost, or loopback — not the public marketing domain. */
export function isDeploymentPreviewHost(hostnameOrOrigin: string): boolean {
  const raw = hostnameOrOrigin.trim();
  if (!raw) return true;
  try {
    const host = new URL(raw.startsWith("http") ? raw : `https://${raw}`).hostname;
    if (host === "localhost" || host === "127.0.0.1") return true;
    return DEPLOYMENT_PREVIEW_HOST.test(host);
  } catch {
    return DEPLOYMENT_PREVIEW_HOST.test(raw.split("/")[0].split(":")[0]);
  }
}

function parseOriginFromEnvValue(raw: string): string | null {
  const withScheme = raw.startsWith("http") ? raw : `https://${raw}`;
  try {
    return new URL(withScheme).origin;
  } catch {
    return null;
  }
}

/** `NEXT_PUBLIC_SITE_URL` when it is an explicit public domain (never `*.vercel.app`). */
function configuredPublicOrigin(): string | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;
  const origin = parseOriginFromEnvValue(raw);
  if (!origin || isDeploymentPreviewHost(origin)) return null;
  return origin;
}

/**
 * Origin for canonical tags, `metadataBase`, Open Graph URLs, JSON-LD, and `/sitemap.xml`.
 *
 * Always `https://www.expatcopilot.com` unless `NEXT_PUBLIC_SITE_URL` is set to a non-preview public domain.
 * Misconfigured `NEXT_PUBLIC_SITE_URL=https://…vercel.app` is ignored (falls back to production canonical).
 */
export function getSeoPublicOrigin(): string {
  return configuredPublicOrigin() ?? PRODUCTION_CANONICAL_ORIGIN;
}

/**
 * Indexable metadata origin — same as {@link getSeoPublicOrigin}.
 * Use this (not deployment hosts) anywhere Google or social crawlers read absolute URLs.
 */
export function getSiteOrigin(): string {
  return getSeoPublicOrigin();
}

/**
 * Runtime deployment host for preview QA share links only — never for `<link rel="canonical">` or sitemap.
 */
export function getDeploymentOrigin(): string {
  const configured = configuredPublicOrigin();
  if (configured) return configured;
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_CANONICAL_ORIGIN;
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").split("/")[0];
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

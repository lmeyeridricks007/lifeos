const CLEARBIT_PREFIX = "https://logo.clearbit.com/";
const APISTEMIC_PREFIX = "https://logos-api.apistemic.com/domain:";

/**
 * Favicon URL suitable for next/image. Prefer over logo.clearbit.com (discontinued / often DNS-blocked)
 * and over client-only rewrites to third-party logo APIs.
 */
export function googleFaviconUrl(domainOrHostname: string): string {
  const d = domainOrHostname.trim().replace(/\/$/, "");
  if (!d) return "";
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128`;
}

/** Rewrite legacy remote logo hosts to Google favicons; leave relative / local paths unchanged. */
export function normalizeExternalProviderLogoSrc(src: string): string {
  if (!src.startsWith("http")) return src;
  if (src.startsWith(CLEARBIT_PREFIX)) {
    return googleFaviconUrl(src.slice(CLEARBIT_PREFIX.length));
  }
  if (src.startsWith(APISTEMIC_PREFIX)) {
    return googleFaviconUrl(src.slice(APISTEMIC_PREFIX.length));
  }
  return src;
}

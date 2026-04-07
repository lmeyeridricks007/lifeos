/**
 * Cloudinary delivery URL helpers for next/image + lighter payloads.
 * Insert transform tokens after `/upload/` when missing (f_auto, q_auto, optional width cap).
 */

const CLOUDINARY_HOST = /(^|\.)res\.cloudinary\.com$/i;

export function isCloudinaryDeliverUrl(url: string): boolean {
  try {
    const u = new URL(url, "https://example.com");
    if (u.protocol !== "https:") return false;
    return CLOUDINARY_HOST.test(u.hostname) && u.pathname.includes("/upload/");
  } catch {
    return false;
  }
}

/** True when URL already includes Cloudinary transform tokens we care about. */
function hasAutoFormatQuality(url: string): boolean {
  return /[/,]f_auto[,/]/.test(url) || /[/?]f_auto/.test(url);
}

/**
 * Adds `f_auto,q_auto` and optional `w_` immediately after `/upload/` for standard delivery URLs.
 * Skips when `f_auto` is already present. Safe for `/upload/v123/...` paths.
 */
export function optimizeCloudinarySrc(url: string, opts?: { maxWidth?: number }): string {
  if (!isCloudinaryDeliverUrl(url) || hasAutoFormatQuality(url)) return url;
  const maxW = opts?.maxWidth;
  const parts = ["f_auto", "q_auto"];
  if (maxW && maxW > 0) parts.push(`w_${Math.min(maxW, 4096)}`);
  const token = parts.join(",");
  return url.replace("/upload/", `/upload/${token}/`);
}

/** Apply Cloudinary transforms when applicable; otherwise return `url` unchanged. */
export function optimizeRemoteImageSrc(url: string, opts?: { maxWidth?: number }): string {
  if (!url.startsWith("http")) return url;
  return optimizeCloudinarySrc(url, opts);
}

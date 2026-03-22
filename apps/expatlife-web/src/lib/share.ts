/**
 * Share utilities: build share URLs, copy link, native share.
 * Used by ContentActionBar and ShareButtons for editorial pages.
 * Reusable across all content templates.
 */

export type ShareTarget = "x" | "facebook" | "linkedin" | "whatsapp" | "instagram";

/**
 * Facebook / LinkedIn need an absolute https URL in their `u` / `url` params.
 * Also: never rely on `navigator.share` for a specific network icon — it opens OS share → Facebook
 * `share_channel` without `?u=`, so the composer has no link preview.
 */
export function toAbsoluteShareUrl(url: string): string {
  const t = url.trim();
  if (!t) return t;
  if (/^https?:\/\//i.test(t)) return t;
  if (typeof window === "undefined") return t;
  return new URL(t.startsWith("/") ? t : `/${t}`, window.location.origin).href;
}

/**
 * When the page was built with `getSiteOrigin()` (e.g. :3000) but the tab is on another localhost
 * port (e.g. :3001), social networks and copy-link should use the tab origin so `u=` matches the
 * page the user is actually viewing.
 */
function alignLocalhostOriginWithCurrentTab(absoluteUrl: string): string {
  if (typeof window === "undefined") return absoluteUrl;
  try {
    const p = new URL(absoluteUrl);
    const local = p.hostname === "localhost" || p.hostname === "127.0.0.1";
    if (!local) return absoluteUrl;
    if (p.origin === window.location.origin) return absoluteUrl;
    return `${window.location.origin}${p.pathname}${p.search}${p.hash}`;
  } catch {
    return absoluteUrl;
  }
}

/** Absolute URL for share dialogs, copy, and OG-related flows in the browser (localhost-safe). */
export function resolveShareUrlForSocial(url: string): string {
  return alignLocalhostOriginWithCurrentTab(toAbsoluteShareUrl(url));
}

const SHARE_URLS: Record<
  Exclude<ShareTarget, "instagram">,
  (url: string, title: string) => string
> = {
  x: (url, title) =>
    `https://twitter.com/intent/tweet?${new URLSearchParams({
      text: title,
      url,
    }).toString()}`,
  facebook: (url) =>
    `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({
      u: url,
    }).toString()}`,
  linkedin: (url, title) =>
    `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({
      url,
      summary: title,
    }).toString()}`,
  whatsapp: (url, title) =>
    `https://wa.me/?${new URLSearchParams({
      text: `${title} ${url}`,
    }).toString()}`,
};

export function getShareUrl(
  target: ShareTarget,
  url: string,
  title: string
): string {
  if (target === "instagram") return resolveShareUrlForSocial(url); // copy-link only
  const absolute = resolveShareUrlForSocial(url);
  return SHARE_URLS[target](absolute, title);
}

/**
 * Opens the network share URL in a new browser tab (not a sized popup). Facebook’s small-popup
 * flow often lands on `share_channel` without `u=`; a normal tab keeps `sharer.php?u=…` reliable.
 */
export function openShare(
  target: ShareTarget,
  url: string,
  title: string
): void {
  if (target === "instagram") return; // No web share; handled via copy-link in UI
  const shareUrl = getShareUrl(target, url, title);
  if (typeof window !== "undefined") {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }
}

/** Share to Instagram: copies link (Instagram has no web share URL). */
export async function shareToInstagram(url: string): Promise<boolean> {
  return copyLinkToClipboard(resolveShareUrlForSocial(url));
}

export async function copyLinkToClipboard(url: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}

/** Native Web Share API when available (e.g. mobile). */
export function canUseNativeShare(): boolean {
  return typeof navigator !== "undefined" && Boolean(navigator.share);
}

export async function nativeShare(
  url: string,
  title: string,
  text?: string
): Promise<boolean> {
  if (!canUseNativeShare()) return false;
  try {
    await navigator.share({
      title,
      text: text ?? title,
      url: resolveShareUrlForSocial(url),
    });
    return true;
  } catch (e) {
    if ((e as Error).name === "AbortError") return false;
    return false;
  }
}

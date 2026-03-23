/**
 * Default outbound referral UTMs for partner / official links (visible to destination sites).
 * Override with NEXT_PUBLIC_REFERRAL_UTM_SOURCE / NEXT_PUBLIC_REFERRAL_UTM_MEDIUM.
 */

export type PartnerReferralUtmContext = {
  /** Maps to `utm_campaign=reloc-{slug}` when set; otherwise `reloc-partner`. */
  partnerSlug?: string;
  /** Maps to `utm_content` (page path hint); omit to skip. */
  utmContent?: string;
};

function defaultUtmSource(): string {
  return (
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_REFERRAL_UTM_SOURCE?.trim()) ||
    "expatcopilot"
  );
}

function defaultUtmMedium(): string {
  return (
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_REFERRAL_UTM_MEDIUM?.trim()) ||
    "referral"
  );
}

function defaultCampaign(partnerSlug?: string): string {
  if (partnerSlug) {
    const safe = partnerSlug.replace(/[^a-z0-9-]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 64);
    return safe ? `reloc-${safe}` : "reloc-partner";
  }
  return "reloc-partner";
}

/** Path like `/netherlands/foo` → `netherlands_foo` for utm_content. */
export function utmContentFromPath(pathname: string): string {
  const path = pathname.split("?")[0] || "/";
  if (path === "/" || path === "") return "home";
  return path.replace(/^\//, "").replace(/\//g, "_").slice(0, 120);
}

/**
 * Merges referral UTMs into an absolute http(s) URL. Only sets each `utm_*` key if absent (empty counts as absent).
 */
export function withPartnerReferralUtms(urlString: string, ctx: PartnerReferralUtmContext = {}): string {
  let u: URL;
  try {
    u = new URL(urlString);
  } catch {
    return urlString;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return urlString;

  const params = u.searchParams;
  const setIfMissing = (key: string, value: string) => {
    const cur = params.get(key);
    if (cur == null || cur === "") params.set(key, value);
  };

  setIfMissing("utm_source", defaultUtmSource());
  setIfMissing("utm_medium", defaultUtmMedium());
  setIfMissing("utm_campaign", defaultCampaign(ctx.partnerSlug));

  const content = ctx.utmContent?.trim();
  if (content) setIfMissing("utm_content", content);

  u.search = params.toString();
  return u.toString();
}

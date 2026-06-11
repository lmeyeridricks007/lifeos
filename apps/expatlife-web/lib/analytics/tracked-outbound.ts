import type { OutboundLinkType } from "@/lib/analytics/track";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { utmContentFromPath, withPartnerReferralUtms } from "@/lib/analytics/referral-utm";

export function partnerSlugFromProviderUrl(url: string, fallback?: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "").split(".")[0];
    if (host) return host;
  } catch {
    // ignore invalid URLs
  }
  return fallback ?? "partner";
}

export function partnerSlugForAffiliateProvider(provider: AffiliateProvider): string {
  if (!provider.id.startsWith("registry-")) return provider.id;
  return partnerSlugFromProviderUrl(provider.cta.href, provider.id);
}

export function buildTrackedOutboundLink(
  url: string,
  options: {
    pagePath: string;
    partnerSlug?: string;
    linkType?: OutboundLinkType;
    linkText?: string;
    isAffiliate?: boolean;
  }
) {
  const partnerSlug = options.partnerSlug ?? partnerSlugFromProviderUrl(url);
  const href = withPartnerReferralUtms(url, {
    partnerSlug,
    utmContent: utmContentFromPath(options.pagePath),
  });

  return {
    href,
    partnerSlug,
    linkType: options.linkType ?? ("provider" as const),
    linkText: options.linkText,
    rel: options.isAffiliate === false ? "noopener noreferrer" : "sponsored noopener noreferrer",
  };
}

export function trackedOutboundAnchorProps(link: ReturnType<typeof buildTrackedOutboundLink>) {
  return {
    href: link.href,
    rel: link.rel,
    "data-outbound-link-type": link.linkType,
    "data-outbound-partner-slug": link.partnerSlug,
    ...(link.linkText ? { "data-outbound-link-text": link.linkText } : {}),
  };
}

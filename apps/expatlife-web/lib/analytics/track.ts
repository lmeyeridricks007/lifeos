import { pageview as gaPageview, trackEvent } from "@/lib/analytics/ga";
import { capturePosthog, capturePosthogPageview } from "@/lib/analytics/posthog";
import { canSendAnalyticsEvents, canSendGaDataLayerOrGtag } from "@/lib/analytics/consent";
import { shouldInitPosthog } from "@/lib/analytics/config";

export type OutboundLinkType = "provider" | "official_source" | "external_resource";

export type ServiceClickParams = {
  service_name: string;
  service_slug: string;
  source_page?: string;
  section_name?: string;
  card_type?: string;
};

export type OutboundLinkParams = {
  destination_url: string;
  link_text?: string;
  page_context?: string;
  link_type: OutboundLinkType;
};

export type CtaClickParams = {
  cta_name: string;
  page_context?: string;
  destination_href?: string;
};

/** Route change + initial client page (see `AnalyticsRouteTracker`). */
export function trackPageView(pathWithSearch: string): void {
  if (!canSendAnalyticsEvents()) return;
  if (canSendGaDataLayerOrGtag()) {
    gaPageview(pathWithSearch);
  }
  if (shouldInitPosthog()) {
    const url = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
    capturePosthogPageview({
      $current_url: url,
      path: pathWithSearch,
    });
  }
}

export function trackServiceClick(params: ServiceClickParams): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = {
    service_name: params.service_name,
    service_slug: params.service_slug,
    source_page: params.source_page,
    section_name: params.section_name,
    card_type: params.card_type,
  };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("service_click", payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog("service_click", payload);
  }
}

export function trackOutboundLink(params: OutboundLinkParams): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = {
    destination_url: params.destination_url,
    link_text: params.link_text ?? "",
    page_context: params.page_context,
    link_type: params.link_type,
  };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("outbound_link_click", payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog("outbound_link_click", payload);
  }
}

export function trackCtaClick(params: CtaClickParams): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = {
    cta_name: params.cta_name,
    page_context: params.page_context,
    destination_href: params.destination_href,
  };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("cta_click", payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog("cta_click", payload);
  }
}

export function trackCityClick(params: {
  city_name: string;
  city_slug: string;
  page_context?: string;
}): void {
  if (!canSendAnalyticsEvents()) return;
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("city_click", params);
  }
  if (shouldInitPosthog()) {
    capturePosthog("city_click", params);
  }
}

export function trackSearchUsed(params: { query: string; source: "header" | "page" | "mobile_overlay" }): void {
  if (!canSendAnalyticsEvents()) return;
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("search_used", params);
  }
  if (shouldInitPosthog()) {
    capturePosthog("search_used", params);
  }
}

export function trackContactSubmit(params: { ok: boolean }): void {
  if (!canSendAnalyticsEvents()) return;
  if (canSendGaDataLayerOrGtag()) {
    trackEvent("contact_submit", params);
  }
  if (shouldInitPosthog()) {
    capturePosthog("contact_submit", params);
  }
}

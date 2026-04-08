import { trackEvent } from "@/lib/analytics/ga";
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
  /** Provider / partner registry slug when the click is attributable to a known entity. */
  partner_slug?: string;
};

export type CtaClickParams = {
  cta_name: string;
  page_context?: string;
  destination_href?: string;
};

/** PostHog client navigation page view (GA page views use default gtag behaviour). */
export function trackPageView(pathWithSearch: string): void {
  if (!canSendAnalyticsEvents()) return;
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
    ...(params.partner_slug ? { partner_slug: params.partner_slug } : {}),
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

/** Consent-gated GA + PostHog; event names are stable product analytics contracts. */
export type PayslipDecoderAnalyticsEvent =
  | "payslip_decoder_opened"
  | "payslip_decoder_paste_submitted"
  | "payslip_decoder_pdf_uploaded"
  | "payslip_decoder_extraction_good"
  | "payslip_decoder_extraction_partial"
  | "payslip_decoder_extraction_poor"
  | "payslip_decoder_result_viewed";

export function trackPayslipDecoder(event: PayslipDecoderAnalyticsEvent, params?: Record<string, unknown>): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = params ?? {};
  if (canSendGaDataLayerOrGtag()) {
    trackEvent(event, payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog(event, payload);
  }
}

/** Consent-gated GA + PostHog; stable names for product analytics. */
export type CostOfLivingCalculatorAnalyticsEvent =
  | "calculator_started"
  | "calculator_completed"
  | "city_changed"
  | "housing_mode_changed"
  | "childcare_toggled"
  | "comparison_enabled"
  | "summary_downloaded"
  | "recommended_service_clicked"
  | "related_tool_clicked";

export function trackCostOfLivingCalculator(
  event: CostOfLivingCalculatorAnalyticsEvent,
  params?: Record<string, unknown>
): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = { tool: "cost_of_living_calculator", ...(params ?? {}) };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent(event, payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog(event, payload);
  }
}

export type RentAffordabilityCalculatorAnalyticsEvent =
  | "calculator_started"
  | "calculator_completed"
  | "mode_changed"
  | "summary_downloaded"
  | "recommended_service_clicked"
  | "related_tool_clicked";

export function trackRentAffordabilityCalculator(
  event: RentAffordabilityCalculatorAnalyticsEvent,
  params?: Record<string, unknown>
): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = { tool: "rent_affordability_calculator", ...(params ?? {}) };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent(event, payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog(event, payload);
  }
}

/** Consent-gated GA + PostHog; stable names for product analytics. */
export type ContractScannerAnalyticsEvent =
  | "contract_scanner_opened"
  | "contract_scanner_paste_submitted"
  | "contract_scanner_pdf_uploaded"
  | "contract_scanner_manual_checklist_used"
  | "contract_scanner_result_viewed"
  | "contract_scanner_export_downloaded"
  | "contract_scanner_related_tool_clicked"
  | "contract_scanner_service_clicked";

export function trackContractScanner(event: ContractScannerAnalyticsEvent, params?: Record<string, unknown>): void {
  if (!canSendAnalyticsEvents()) return;
  const payload = { tool: "employment_contract_risk_scanner", ...(params ?? {}) };
  if (canSendGaDataLayerOrGtag()) {
    trackEvent(event, payload);
  }
  if (shouldInitPosthog()) {
    capturePosthog(event, payload);
  }
}

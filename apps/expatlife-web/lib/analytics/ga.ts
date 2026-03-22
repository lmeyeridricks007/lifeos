import {
  GA_MEASUREMENT_ID,
  shouldLoadDirectGa4,
  shouldLoadGtmScript,
  shouldUseGtm,
} from "@/lib/analytics/config";
import { canSendGaDataLayerOrGtag } from "@/lib/analytics/consent";
import { analyticsDebugLog } from "@/lib/analytics/debug-log";

/** Dedupe SPA page_view across React Strict Mode double-mount (module scope). */
let lastPageViewKey: string | null = null;

function ensureDataLayer(): Record<string, unknown>[] {
  if (typeof window === "undefined") return [];
  window.dataLayer = window.dataLayer ?? [];
  return window.dataLayer as Record<string, unknown>[];
}

/**
 * Send SPA / hard-navigation page_view to GA4 (direct) or GTM dataLayer.
 * Call after the gtag stub exists (direct GA) or after the GTM snippet initializes `dataLayer`.
 */
export function pageview(pathWithSearch: string): void {
  if (!canSendGaDataLayerOrGtag()) return;

  const path = pathWithSearch.startsWith("/") ? pathWithSearch : `/${pathWithSearch}`;
  if (lastPageViewKey === path) return;

  const pageLocation =
    typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  analyticsDebugLog("page_view", { page_path: path, page_location: pageLocation });

  if (shouldUseGtm() || shouldLoadGtmScript()) {
    lastPageViewKey = path;
    ensureDataLayer().push({
      event: "page_view",
      page_path: path,
      page_location: pageLocation,
      page_title: pageTitle,
    });
    return;
  }

  if (shouldLoadDirectGa4()) {
    if (typeof window.gtag !== "function" || !GA_MEASUREMENT_ID) {
      return;
    }
    lastPageViewKey = path;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
      page_location: pageLocation,
      page_title: pageTitle,
    });
  }
}

/** GA4 recommended event or custom event. */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!canSendGaDataLayerOrGtag()) return;

  analyticsDebugLog("event", name, params);

  if (shouldUseGtm() || shouldLoadGtmScript()) {
    ensureDataLayer().push({
      event: name,
      ...(params ?? {}),
    });
    return;
  }

  if (shouldLoadDirectGa4() && typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }
}

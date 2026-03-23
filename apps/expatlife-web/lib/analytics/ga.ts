import { canSendGaDataLayerOrGtag } from "@/lib/analytics/consent";
import { analyticsDebugLog } from "@/lib/analytics/debug-log";

/** GA4 recommended or custom event (gtag loaded from root layout). */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!canSendGaDataLayerOrGtag()) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  analyticsDebugLog("event", name, params);
  window.gtag("event", name, params ?? {});
}

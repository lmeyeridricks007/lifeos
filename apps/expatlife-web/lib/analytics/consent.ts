/**
 * Bridges cookie consent to analytics. The GA tag is always present in HTML; programmatic `gtag`
 * calls from `trackEvent` only run when the user has opted into analytics cookies.
 */
import { canLoadAnalytics as consentCanLoadAnalytics } from "@/src/lib/cookies/consent";
import { isAnalyticsRuntimeEnabled, shouldInitPosthog } from "@/lib/analytics/config";

/** Re-export for consumers that only need the consent record check. */
export function canLoadAnalytics(): boolean {
  return consentCanLoadAnalytics();
}

/** User has opted into analytics cookies and the deployment allows firing events. */
export function canSendAnalyticsEvents(): boolean {
  if (typeof window === "undefined") return false;
  if (!consentCanLoadAnalytics()) return false;
  if (!isAnalyticsRuntimeEnabled()) return false;
  return true;
}

export function canSendGaDataLayerOrGtag(): boolean {
  return canSendAnalyticsEvents();
}

export function canSendPosthog(): boolean {
  if (!consentCanLoadAnalytics()) return false;
  if (!isAnalyticsRuntimeEnabled()) return false;
  return shouldInitPosthog();
}

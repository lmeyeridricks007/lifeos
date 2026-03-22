/**
 * Bridges cookie consent to analytics. Scripts are also gated by `ConditionalScript` in the shell;
 * these helpers ensure programmatic events never fire without analytics consent.
 */
import { canLoadAnalytics as consentCanLoadAnalytics } from "@/src/lib/cookies/consent";
import {
  isAnalyticsRuntimeEnabled,
  shouldInitPosthog,
  shouldLoadDirectGa4,
  shouldLoadGtmScript,
} from "@/lib/analytics/config";

/** Re-export for consumers that only need the consent record check. */
export function canLoadAnalytics(): boolean {
  return consentCanLoadAnalytics();
}

/** User has opted into analytics cookies and the deployment allows firing events. */
export function canSendAnalyticsEvents(): boolean {
  if (typeof window === "undefined") return false;
  if (!consentCanLoadAnalytics()) return false;
  if (!isAnalyticsRuntimeEnabled()) return false;
  const hasGaSurface = shouldLoadDirectGa4() || shouldLoadGtmScript();
  const hasPosthog = shouldInitPosthog();
  return hasGaSurface || hasPosthog;
}

export function canSendGaDataLayerOrGtag(): boolean {
  if (!canSendAnalyticsEvents()) return false;
  return shouldLoadDirectGa4() || shouldLoadGtmScript();
}

export function canSendPosthog(): boolean {
  if (!consentCanLoadAnalytics()) return false;
  if (!isAnalyticsRuntimeEnabled()) return false;
  return shouldInitPosthog();
}

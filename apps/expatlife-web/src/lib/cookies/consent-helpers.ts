/**
 * Consent checks for gated scripts. Reads localStorage via `getConsent` (same source as the banner).
 */
import {
  canLoadAnalytics,
  canLoadMarketing,
  canLoadPreferencesCookies,
  getConsent,
} from "./consent";

export function hasAnalyticsConsent(): boolean {
  return canLoadAnalytics();
}

export function hasMarketingConsent(): boolean {
  return canLoadMarketing();
}

export function hasPreferencesConsent(): boolean {
  return canLoadPreferencesCookies();
}

/** User completed the consent flow at least once (choice stored). */
export function hasValidStoredConsent(): boolean {
  return getConsent() !== null;
}

/**
 * GDPR cookie consent types.
 * Single source of truth for categories and consent state shape.
 */

export type CookieCategory = "necessary" | "analytics" | "preferences" | "marketing";

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
  consentVersion: number;
  consentTimestamp: number;
};

/** Category ids for preferences UI and script gating */
export const COOKIE_CATEGORY_IDS = [
  "necessary",
  "analytics",
  "preferences",
  "marketing",
] as const;

export type CookieCategoryId = (typeof COOKIE_CATEGORY_IDS)[number];

/**
 * Analytics env configuration. Never hardcode measurement IDs in source.
 *
 * GA4: set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXX).
 * GTM: set NEXT_PUBLIC_GTM_ID and NEXT_PUBLIC_USE_GTM=true (disables direct gtag GA4 snippet).
 * PostHog: set NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_ENABLE_POSTHOG=true.
 *
 * Production loads GA/GTM when IDs are set. In development, set NEXT_PUBLIC_ENABLE_ANALYTICS=true
 * to load scripts and fire events (still requires cookie consent when using the local banner).
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
export const USE_GTM = process.env.NEXT_PUBLIC_USE_GTM === "true";
export const ENABLE_ANALYTICS_OVERRIDE = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
export const ANALYTICS_DEBUG =
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true" ||
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_ANALYTICS_DEBUG !== "false");

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim() ?? "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "https://eu.i.posthog.com";
export const ENABLE_POSTHOG = process.env.NEXT_PUBLIC_ENABLE_POSTHOG === "true";

export function shouldUseGtm(): boolean {
  return USE_GTM && Boolean(GTM_ID);
}

export function hasGaMeasurementId(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

/** True when analytics scripts are allowed to load (prod by default, or explicit dev override). */
export function isAnalyticsRuntimeEnabled(): boolean {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "production" || ENABLE_ANALYTICS_OVERRIDE;
  }
  return process.env.NODE_ENV === "production" || ENABLE_ANALYTICS_OVERRIDE;
}

/** Whether to inject GA gtag.js + config, or rely on GTM container only. */
export function shouldLoadDirectGa4(): boolean {
  return hasGaMeasurementId() && !shouldUseGtm();
}

export function shouldLoadGtmScript(): boolean {
  return shouldUseGtm();
}

export function shouldInitPosthog(): boolean {
  return ENABLE_POSTHOG && Boolean(POSTHOG_KEY);
}

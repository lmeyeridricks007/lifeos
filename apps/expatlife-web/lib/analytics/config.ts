/**
 * Analytics env configuration.
 *
 * PostHog: set NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_ENABLE_POSTHOG=true.
 *
 * Production fires optional programmatic GA events (trackEvent) when the user has consented to
 * analytics cookies. GA4 gtag is embedded in `app/layout.tsx`.
 *
 * In development, set NEXT_PUBLIC_ENABLE_ANALYTICS=true to allow those events (still requires consent).
 */

export const ENABLE_ANALYTICS_OVERRIDE = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
export const ANALYTICS_DEBUG =
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true" ||
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_ANALYTICS_DEBUG !== "false");

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim() ?? "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "https://eu.i.posthog.com";
export const ENABLE_POSTHOG = process.env.NEXT_PUBLIC_ENABLE_POSTHOG === "true";

/** True when analytics scripts/events are allowed (prod by default, or explicit dev override). */
export function isAnalyticsRuntimeEnabled(): boolean {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "production" || ENABLE_ANALYTICS_OVERRIDE;
  }
  return process.env.NODE_ENV === "production" || ENABLE_ANALYTICS_OVERRIDE;
}

export function shouldInitPosthog(): boolean {
  return ENABLE_POSTHOG && Boolean(POSTHOG_KEY);
}

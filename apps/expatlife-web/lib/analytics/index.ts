/**
 * Public analytics API for app code. Prefer `track*` helpers; use `pageview` / `trackEvent` for ad-hoc GA/GTM pushes.
 */
export { pageview, trackEvent } from "@/lib/analytics/ga";
export {
  trackPageView,
  trackServiceClick,
  trackOutboundLink,
  trackCtaClick,
  trackCityClick,
  trackSearchUsed,
  trackContactSubmit,
} from "@/lib/analytics/track";
export type { OutboundLinkType, ServiceClickParams, OutboundLinkParams, CtaClickParams } from "@/lib/analytics/track";
export { utmContentFromPath, withPartnerReferralUtms } from "@/lib/analytics/referral-utm";
export type { PartnerReferralUtmContext } from "@/lib/analytics/referral-utm";
export {
  canLoadAnalytics,
  canSendAnalyticsEvents,
  canSendGaDataLayerOrGtag,
  canSendPosthog,
} from "@/lib/analytics/consent";

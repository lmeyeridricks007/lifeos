/**
 * Public analytics API for app code. Prefer `track*` helpers; use `trackEvent` for ad-hoc GA events.
 */
export { trackEvent } from "@/lib/analytics/ga";
export {
  trackPageView,
  trackServiceClick,
  trackOutboundLink,
  trackCtaClick,
  trackCityClick,
  trackSearchUsed,
  trackContactSubmit,
  trackPayslipDecoder,
  trackCostOfLivingCalculator,
  trackRentAffordabilityCalculator,
  trackChildcareEstimator,
  trackUtilitiesServicesComparison,
  trackContractScanner,
} from "@/lib/analytics/track";
export type {
  PayslipDecoderAnalyticsEvent,
  CostOfLivingCalculatorAnalyticsEvent,
  RentAffordabilityCalculatorAnalyticsEvent,
  ChildcareEstimatorAnalyticsEvent,
  UtilitiesServicesComparisonAnalyticsEvent,
  ContractScannerAnalyticsEvent,
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

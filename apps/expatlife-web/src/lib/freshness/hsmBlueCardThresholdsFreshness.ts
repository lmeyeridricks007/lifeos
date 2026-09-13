/**
 * HSM / EU Blue Card salary-floor freshness — shared with thresholds module.
 * lastVerified must match an actual IND required-amounts check.
 */

export const HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED = "2026-09-07" as const;
export const HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED_LABEL = "7 September 2026" as const;
/** IND publishes these salary criteria for the calendar year; confirm on IND if mid-year updates appear. */
export const HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_FROM = "2026-01-01" as const;
export const HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_TO = "2026-12-31" as const;
export const HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_LABEL =
  "1 January 2026–31 December 2026" as const;

export const HSM_BLUE_CARD_GUIDE_LAST_UPDATED =
  `Last reviewed: ${HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED_LABEL} · Effective: ${HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_LABEL}` as const;

/**
 * Dutch basic health insurance planning figures for 2026 — shared statutory-style spine.
 * Prefer importing these constants instead of hardcoding €385 / premium bands in page copy.
 *
 * Verify annually on Government.nl / Rijksoverheid before updating.
 * Insurer marketing pages are not the primary authority for legal rules.
 */

export const HEALTH_INSURANCE_FIGURES_YEAR = "2026" as const;

export const HEALTH_INSURANCE_EIGEN_RISICO_EUR = 385 as const;
export const HEALTH_INSURANCE_EIGEN_RISICO_DISPLAY = "€385" as const;
export const HEALTH_INSURANCE_EIGEN_RISICO_PERIOD_LABEL = "Calendar year 2026" as const;
export const HEALTH_INSURANCE_EIGEN_RISICO_VOLUNTARY_MAX_TOTAL_EUR = 885 as const;

/** Orientation band only — not a quote. Aligns with Official figures / Independer market overview. */
export const HEALTH_INSURANCE_BASIC_PREMIUM_BAND_DISPLAY = "~€142–€159/month" as const;
export const HEALTH_INSURANCE_BASIC_PREMIUM_AVG_ORIENTATION = "around €159/month" as const;
export const HEALTH_INSURANCE_BASIC_PREMIUM_LOW_ORIENTATION = "around €142.40/month" as const;

export const HEALTH_INSURANCE_FIGURES_LAST_VERIFIED = "2026-08-30" as const;
export const HEALTH_INSURANCE_FIGURES_LAST_VERIFIED_LABEL = "30 August 2026" as const;

export const HEALTH_INSURANCE_OFFICIAL_SOURCES = [
  {
    label: "Government.nl — Health insurance",
    href: "https://www.government.nl/topics/health-insurance",
  },
  {
    label: "Rijksoverheid — Zorgverzekering",
    href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
  },
] as const;

export const HEALTH_INSURANCE_GUIDE_HREF = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_HREF =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;
export const HEALTHCARE_ALLOWANCE_GUIDE_HREF =
  "/netherlands/taxes/healthcare-allowance-netherlands/" as const;
export const HEALTHCARE_HUB_HREF = "/netherlands/health/" as const;
export const HEALTHCARE_BASICS_HREF = "/netherlands/living/healthcare-basics/" as const;

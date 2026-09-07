/**
 * Planning figures for HSM (kennismigrant) and EU Blue Card salary floors — verify on IND before you sign.
 * Re-verified 7 Sep 2026 against IND required-amounts (HSM page last update still 18 Aug 2026); unchanged vs 6 Sep.
 */
export const HSM_SALARY_FIGURE_YEAR = "2026" as const;

export const HSM_SALARY_THRESHOLDS_EUR = {
  thirtyPlus: 5942,
  under30: 4357,
  reduced: 3122,
} as const;

/** EU Blue Card floors from the same IND required-amounts table (2026). */
export const EU_BLUE_CARD_THRESHOLDS_EUR = {
  standard: 5942,
  reduced: 4754,
} as const;

export const IND_REQUIRED_AMOUNTS_URL = "https://ind.nl/en/required-amounts-income-requirements";
export const IND_HSM_PERMIT_URL = "https://ind.nl/en/residence-permits/work/highly-skilled-migrant";

/** Soft “near floor” band for holiday-pay / component ambiguity (€). */
export const HSM_SALARY_NEAR_THRESHOLD_EUR = 150;

export function formatEurMonthly(amount: number): string {
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

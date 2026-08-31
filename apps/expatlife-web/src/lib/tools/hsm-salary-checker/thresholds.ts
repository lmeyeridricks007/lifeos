/** Planning figures for HSM (kennismigrant) salary floors — verify on IND before you sign. */
export const HSM_SALARY_FIGURE_YEAR = "2026" as const;

export const HSM_SALARY_THRESHOLDS_EUR = {
  thirtyPlus: 5942,
  under30: 4357,
  reduced: 3122,
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

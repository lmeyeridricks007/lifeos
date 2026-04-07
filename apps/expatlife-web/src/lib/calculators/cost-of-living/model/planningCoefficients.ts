/**
 * Typed planning coefficients for the NL expat cost-of-living model.
 * Figures are directional — not quotes, not tax advice. Tune periodically.
 */

import type { ColInput, ColLifestyle, ColMovingFrom } from "../types";

/** Lifestyle multipliers already applied elsewhere; these are additive planning slices. */

export const MONTHLY_PERSONAL_LIFESTYLE_EUR = {
  /** Gym, hobbies, casual coffee — per adult, before lifestyle discretionary mult on top. */
  perAdultBase: 38,
  perAdultLifestyleBoost: { basic: 0, balanced: 22, comfortable: 48 } satisfies Record<ColLifestyle, number>,
  perChild: { basic: 10, balanced: 16, comfortable: 24 } satisfies Record<ColLifestyle, number>,
} as const;

/** WA + inboedel + small risk products — one planning line. */
export const MONTHLY_ADDITIONAL_INSURANCES_EUR = {
  householdFloor: 42,
  perAdult: 16,
  perChild: 9,
} as const;

/** Clothing & household replenishment — monthly reserve. */
export const MONTHLY_CLOTHING_BUFFER_EUR = {
  perAdult: 28,
  perChild: 18,
  lifestyleMult: { basic: 0.85, balanced: 1, comfortable: 1.22 } satisfies Record<ColLifestyle, number>,
} as const;

/** Expanded municipality / local recurring slice (taxes, waste, water-style charges, admin amortized). */
export const MONTHLY_MUNICIPALITY_EXPANDED_EUR = {
  perAdult: 52,
  perChild: 24,
  centerPremium: 12,
  familyHousingPremium: 18,
} as const;

export const SETUP_HOME_ESSENTIALS_EUR = {
  /** Bedding, kitchen basics, cleaning starter — separate from furniture. */
  withFurnitureToggle: { base: 260, perPerson: 72 },
  withoutFurnitureToggle: { base: 140, perPerson: 42 },
} as const;

/** Short-stay + long-term rent overlap (fraction of monthly rent). */
export const SETUP_HOUSING_OVERLAP_RENT_FRACTION: Record<ColMovingFrom, number> = {
  eu_nearby: 0.1,
  uk: 0.36,
  us_canada: 0.52,
  far: 0.62,
};

export const SETUP_BIKE_PURCHASE_EUR = {
  base: 540,
  perAdult: 95,
} as const;

export const SETUP_OV_CHIP_SETUP_EUR = {
  base: 92,
  perAdult: 28,
} as const;

/** Bump vs previous single “local transport setup” line for realism. */
export const SETUP_AGENCY_FEE_FRACTION_LONG = 0.092;
export const SETUP_AGENCY_FEE_FRACTION_SHORT = 0.058;

export const SETUP_CONTINGENCY_FRACTION = 0.14;
export const SETUP_CONTINGENCY_MIN_EUR = 480;

export const SETUP_ADMIN_WITH_VISA = { base: 780, perAdult: 110 } as const;
export const SETUP_ADMIN_LIGHT = { base: 280, perAdult: 42 } as const;

/** Salary bands: essential = thin margin over recurring; balanced/comfortable add headroom. */
export const SALARY_TARGET_COEFFICIENTS = {
  essential: { monthlyMult: 1.09, fixedAddEur: 165 },
  balanced: { monthlyMult: 1.26, fixedAddEur: 340 },
  comfortable: { monthlyMult: 1.44, fixedAddEur: 520 },
} as const;

/**
 * Very rough gross annual from balanced net monthly — not payroll math.
 * Uses a single planning wedge; user must use the salary calculator for real gross.
 */
export const DIRECTIONAL_NET_TO_GROSS_ANNUAL_WEDGE = 0.56;

export function shouldIncludeHousingOverlap(input: ColInput): boolean {
  if (input.housingMode === "already_arranged" || input.housingMode === "short_stay_serviced") return false;
  return SETUP_HOUSING_OVERLAP_RENT_FRACTION[input.movingFrom] > 0;
}

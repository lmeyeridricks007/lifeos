/**
 * Global planning rules (lifestyle, transport, setup, salary targets).
 * City-specific rent and indexed costs live in `cityCostSeed.ts`; comms + subscription misc in `recurringMiscSeed.ts`.
 *
 * **Editorial stance:** figures are cautious planning anchors for expat relocation conversations — not
 * government statistics, not listing data, and not personalized quotes. Review periodically (e.g. yearly)
 * when markets or tax/insurance norms shift materially.
 */

import type { ColDiningLevel, ColLifestyle, ColMovingFrom, ColTravelStyle, ColTransportMode } from "../types";

export const COL_PLANNING_USD_PER_EUR = 1.09;

export const NEIGHBORHOOD_RENT_MULT: Record<string, number> = {
  center: 1.14,
  outside: 1,
  commuter: 0.88,
};

/**
 * Lifestyle tier: nudges model rent appetite, **furniture starter pack** (€, one-time when user enables
 * furniture setup), and grocery/dining/leisure scaling. Mid furniture ≈ IKEA-level mix + essentials —
 * not designer fit-outs.
 */
export const LIFESTYLE_ASSUMPTIONS: Record<
  ColLifestyle,
  { rentMult: number; furnitureBase: number; discretionaryMult: number }
> = {
  basic: { rentMult: 0.94, furnitureBase: 950, discretionaryMult: 0.78 },
  balanced: { rentMult: 1, furnitureBase: 2100, discretionaryMult: 1 },
  comfortable: { rentMult: 1.08, furnitureBase: 4200, discretionaryMult: 1.32 },
};

export const DINING_MULT: Record<ColDiningLevel, number> = {
  low: 0.72,
  medium: 1,
  high: 1.45,
};

export const TRAVEL_STYLE_MULT: Record<ColTravelStyle, number> = {
  local: 0.85,
  weekends: 1.12,
  frequent: 1.55,
};

/** Transport profile overlays (€/mo planning) — applied on top of city transport baseline in calculator. */
export const TRANSPORT_PROFILE_EUR: Record<
  ColTransportMode,
  { ovCore: number; bike: number; carCore: number; nsSupplementFactor: number }
> = {
  bike_pt: { ovCore: 72, bike: 18, carCore: 0, nsSupplementFactor: 0.35 },
  pt_only: { ovCore: 92, bike: 0, carCore: 0, nsSupplementFactor: 1 },
  car: { ovCore: 0, bike: 0, carCore: 268, nsSupplementFactor: 0 },
  hybrid: { ovCore: 52, bike: 10, carCore: 118, nsSupplementFactor: 0.55 },
};

export const RULING_NET_TARGET_MULT: Record<string, number> = {
  no: 1,
  maybe: 0.93,
  yes: 0.88,
};

export const RULING_NOTE =
  "If the 30% ruling applies to your payroll, you may need a lower gross (or keep more net) than these bands suggest — confirm eligibility with the employer and use the 30% ruling calculator; these targets are not tax advice.";

export const MOVING_TRAVEL_BASE: Record<ColMovingFrom, { base: number; perPerson: number }> = {
  eu_nearby: { base: 380, perPerson: 120 },
  uk: { base: 820, perPerson: 190 },
  us_canada: { base: 2100, perPerson: 320 },
  far: { base: 3000, perPerson: 480 },
};

/** @deprecated — childcare per child now from city seed; factor only. */
export const CHILDCARE_PART_TIME_FACTOR = 0.52;

export const MUNICIPALITY_PER_ADULT = 32;

export const PET_MONTHLY = 52;

export const INTERNATIONAL_SCHOOL_PLACEHOLDER_PER_CHILD = 380;

/**
 * One-time setup / move-in (used with monthly rent from model or manual input).
 * - **Deposit:** `depositMonthsLongLease` × rent (typical NL planning range 1–2 months; we use 2 for long leases).
 * - **First month rent:** same nominal rent when “deposit + first month” is enabled (cash-flow timing, not double-count with recurring).
 * - **Agency / contract fees:** indicative % of one month’s rent when applicable (varies by market and landlord).
 * - **Contingency:** % of subtotal before contingency, floored at `contingencyMinEur`, then × city `setupFrictionMult`.
 * - **Admin:** heavy vs light paths (visa-heavy move vs domestic EU).
 */
export const SETUP_PLANNING = {
  depositMonthsLongLease: 2,
  depositMonthsShortStay: 1,
  agencyFeeFractionLong: 0.075,
  agencyFeeFractionShort: 0.045,
  contingencyFraction: 0.1,
  contingencyMinEur: 380,
  adminWithVisaBaseEur: 620,
  adminWithVisaPerAdultEur: 95,
  adminLightBaseEur: 240,
  adminLightPerAdultEur: 35,
  localTransportSetupBaseEur: 165,
  localTransportSetupPerAdultEur: 20,
} as const;

/** Salary net target bands: (monthlyRecurring * mult) + add, then ruling multiplier. */
export const SALARY_TARGET_RULES = {
  essential: { monthlyMult: 1.07, fixedAddEur: 120 },
  balanced: { monthlyMult: 1.2, fixedAddEur: 260 },
  comfortable: { monthlyMult: 1.36, fixedAddEur: 420 },
} as const;

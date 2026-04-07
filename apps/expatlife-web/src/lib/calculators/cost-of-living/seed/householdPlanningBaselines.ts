import type { ColInput } from "../types";

/**
 * Editorial “balanced expat” defaults by household shape — for documentation, QA, and copy alignment.
 * The live calculator default (`DEFAULT_COL_INPUT`) matches the **single** baseline plus standard
 * setup toggles (EU move, furniture, deposit, visa/admin budget on).
 *
 * These objects are intentionally partial; they describe housing + household + lifestyle posture only.
 * Do not treat them as statistical averages — they are cautious planning anchors.
 */

const BALANCED_BEHAVIOUR: Pick<
  ColInput,
  "lifestyle" | "diningLevel" | "travelStyle" | "transportMode" | "neighborhood"
> = {
  lifestyle: "balanced",
  diningLevel: "medium",
  travelStyle: "local",
  transportMode: "bike_pt",
  neighborhood: "outside",
};

/** Single working expat: 1-bed, balanced lifestyle, bike + OV, outside-center rent band. */
export const HOUSEHOLD_PLANNING_BASELINE_SINGLE = {
  ...BALANCED_BEHAVIOUR,
  householdPreset: "single",
  adultsCount: 1,
  childrenCount: 0,
  housingMode: "apartment_1bed",
} as const satisfies Pick<
  ColInput,
  | "householdPreset"
  | "adultsCount"
  | "childrenCount"
  | "housingMode"
  | "lifestyle"
  | "diningLevel"
  | "travelStyle"
  | "transportMode"
  | "neighborhood"
>;

/** Couple without children: 2-bed, same balanced behavioural defaults. */
export const HOUSEHOLD_PLANNING_BASELINE_COUPLE = {
  ...BALANCED_BEHAVIOUR,
  householdPreset: "couple",
  adultsCount: 2,
  childrenCount: 0,
  housingMode: "apartment_2bed",
} as const satisfies Pick<
  ColInput,
  | "householdPreset"
  | "adultsCount"
  | "childrenCount"
  | "housingMode"
  | "lifestyle"
  | "diningLevel"
  | "travelStyle"
  | "transportMode"
  | "neighborhood"
>;

/**
 * Two adults + two children: 3-bed family mode, public/local schooling assumption, childcare off by default
 * (user can enable childcare in the tool — see city childcare seed for indicative full-time placeholder).
 */
export const HOUSEHOLD_PLANNING_BASELINE_FAMILY_TWO_ADULTS_TWO_CHILDREN = {
  ...BALANCED_BEHAVIOUR,
  householdPreset: "family2",
  adultsCount: 2,
  childrenCount: 2,
  housingMode: "apartment_3bed_family",
} as const satisfies Pick<
  ColInput,
  | "householdPreset"
  | "adultsCount"
  | "childrenCount"
  | "housingMode"
  | "lifestyle"
  | "diningLevel"
  | "travelStyle"
  | "transportMode"
  | "neighborhood"
>;

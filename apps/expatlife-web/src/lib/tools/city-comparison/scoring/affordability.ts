import type { CityComparisonInput, LifestyleTier } from "../types";
import type { AffordabilityBand, NormalizedCityProfile } from "./types";

/**
 * Map tri-stated lifestyle tier to extra “buffer demand” (higher = stricter bands).
 * comfortable households need more slack in the model.
 */
function lifestyleBufferDemand(tier: LifestyleTier): number {
  switch (tier) {
    case "minimal":
      return 0;
    case "comfortable":
      return 0.035;
    case "balanced":
    default:
      return 0.018;
  }
}

/**
 * Children tighten affordability bands (daycare, space).
 */
function householdPressure(input: CityComparisonInput): number {
  let children = input.childrenCount;
  if (input.householdType === "single" || input.householdType === "couple") children = 0;
  if (input.householdType === "family1") children = Math.max(children, 1);
  if (input.householdType === "family2") children = Math.max(children, 2);
  return Math.min(4, children) * 0.012;
}

/**
 * Affordability score 0–100 from cash flow vs modelled outflow, rent share, editorial rent pressure, household.
 * Formula: margin ratio r = netRemaining/totalOutflow; score rises with r, falls with rent share and rentLevel.
 */
export function computeAffordabilityScore(
  netRemaining: number,
  totalOutflow: number,
  rentEur: number,
  profile: NormalizedCityProfile,
  input: CityComparisonInput
): number {
  if (totalOutflow <= 0) return netRemaining < 0 ? 12 : 38;
  const r = netRemaining / totalOutflow;
  const rentShare = rentEur > 0 ? rentEur / totalOutflow : 0;
  const buf = lifestyleBufferDemand(input.lifestyleTier) + householdPressure(input);

  // Base from margin (cap sensitivity so extremes don't explode)
  let s = 18 + 155 * Math.min(0.42, Math.max(0, r - buf));

  // Editorial rent market pressure (1–10) — not euro amounts from another source
  s -= (profile.rentLevel - 5.5) * 2.1;
  s -= (profile.livingCostLevel - 5.5) * 1.2;

  if (rentShare > 0.52) s -= 10;
  else if (rentShare > 0.42) s -= 5;

  if (netRemaining < 0) s -= 28;
  else if (r < 0.04) s -= 14;

  /** High net with wide margin: affordability stops differentiating — compress toward upper mid. */
  if (input.monthlyNetSalary >= 6200 && r >= 0.28) {
    s = Math.min(94, s);
    s = Math.max(s, 78);
  }

  return Math.max(5, Math.min(98, Math.round(s)));
}

/**
 * Band from margin, rent share, and buffer demand (plain-language).
 */
export function affordabilityBand(
  netRemaining: number,
  totalOutflow: number,
  rentEur: number,
  input: CityComparisonInput
): AffordabilityBand {
  if (totalOutflow <= 0) return netRemaining < 0 ? "strained" : "stretch";
  const r = netRemaining / totalOutflow;
  const rentShare = rentEur / totalOutflow;
  const buf = lifestyleBufferDemand(input.lifestyleTier) + householdPressure(input);
  const effective = r - buf;

  if (netRemaining < 0 || effective < -0.02) return "strained";
  if (effective < 0.06 || (effective < 0.1 && rentShare > 0.48)) return "stretch";
  if (effective < 0.16 || rentShare > 0.55) return "workable";
  return "comfortable";
}

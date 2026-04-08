import type { UsServiceCategoryId, UsTriState } from "./types";

export type InclusionContext = {
  utilitiesIncludedInRent: UsTriState;
  landlordBuildingIncludesServices: UsTriState;
};

/**
 * Numeric multipliers when rent / landlord likely covers part of utilities.
 * Deterministic; does not read contracts — “broad planning” by design.
 */
export function utilitiesInclusionMultiplier(categoryId: UsServiceCategoryId, ctx: InclusionContext): number {
  const { utilitiesIncludedInRent: u, landlordBuildingIncludesServices: l } = ctx;
  const strong = u === "yes" || l === "yes";
  const weak = u === "unsure" || l === "unsure";

  if (categoryId === "energy" || categoryId === "water") {
    if (strong) return 0;
    if (weak) return 0.55;
    return 1;
  }
  if (categoryId === "internet") {
    if (u === "yes") return 0.35;
    if (u === "unsure" || l === "unsure") return 0.75;
    if (l === "yes") return 0.55;
    return 1;
  }
  return 1;
}

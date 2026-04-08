import type { CityComparisonInput, ResultConfidenceLevel } from "../types";

/**
 * Confidence from score spread, city count, and input completeness.
 * High income + bunched affordability lowers confidence one step (affordability less discriminating).
 */
export function computeResultConfidence(args: {
  rankingOverallScores: number[];
  input: CityComparisonInput;
  affordabilitySpread: number;
}): { level: ResultConfidenceLevel; summary: string } {
  const { rankingOverallScores, input, affordabilitySpread } = args;
  const n = rankingOverallScores.length;
  const netOk = input.monthlyNetSalary > 0;
  const citiesOk = n >= 2;

  if (!citiesOk || !netOk) {
    return {
      level: "low",
      summary: "Add net salary and at least two cities for a more decisive ranking.",
    };
  }

  const spread = rankingOverallScores[0]! - (rankingOverallScores[1] ?? rankingOverallScores[0]!);
  let level: ResultConfidenceLevel = "medium";
  if (spread >= 10) level = "high";
  else if (spread < 4) level = "low";

  if (input.monthlyNetSalary >= 6000 && affordabilitySpread < 14) {
    if (level === "high") level = "medium";
    else if (level === "medium") level = "low";
  }

  const summary =
    level === "high"
      ? "Clear gap at the top on your current settings — still check real rent, commute, and your contract before you decide."
      : level === "medium"
        ? "There’s a plausible favourite, but small changes (sliders, office, commute tolerance) can reshuffle the list."
      : "Very close call — use the order as a starting point, not the final word on “best city.”";

  return { level, summary };
}

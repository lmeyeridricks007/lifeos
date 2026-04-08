import type { CityComparisonInput } from "../types";
import type { CityDimensionScores100 } from "./types";
import { buildDimensionWeights, pickScenarioMode, weightedOverall, weightsForScenarioLens } from "./weights";

export type CityDimsMap = Record<string, CityDimensionScores100>;

/**
 * Compare current weights vs hypothetical lenses; emit when ranking top-1 differs (deterministic).
 * Uses display names when the alternate leader is known.
 */
export function buildWhatWouldChangeInsights(
  input: CityComparisonInput,
  orderedCityIds: string[],
  dimsByCity: CityDimsMap,
  displayNames: Record<string, string>
): string[] {
  const out: string[] = [];
  if (orderedCityIds.length < 2) return out;

  const name = (id: string) => displayNames[id] ?? id;

  const currentW = buildDimensionWeights(input);
  const rankTop = (w: typeof currentW): string => {
    let best = orderedCityIds[0]!;
    let bestScore = -1;
    for (const id of orderedCityIds) {
      const d = dimsByCity[id];
      if (!d) continue;
      const sc = weightedOverall(d, w);
      if (sc > bestScore) {
        bestScore = sc;
        best = id;
      }
    }
    return best;
  };

  const topCurrent = rankTop(currentW);
  const topCurrentLabel = name(topCurrent);

  const topBudget = rankTop(weightsForScenarioLens("budget"));
  if (topBudget !== topCurrent && input.budgetSensitivity !== "high") {
    out.push(
      `If you weighted budget more heavily (cost-first lens), ${name(topBudget)} could rank ahead of ${topCurrentLabel} in this same city set — open the cost-first scenario to confirm.`
    );
  }

  const topCommute = rankTop(weightsForScenarioLens("commute"));
  if (topCommute !== topCurrent && input.workMode !== "remote") {
    out.push(
      `If commute dominated (commute-first lens), ${name(topCommute)} could overtake ${topCurrentLabel} — especially with your current office hub.`
    );
  }

  const topFamily = rankTop(weightsForScenarioLens("family"));
  if (topFamily !== topCurrent && input.familySchoolImportance !== "high") {
    out.push(
      `If family / schools mattered more (family-first lens), ${name(topFamily)} could move ahead of ${topCurrentLabel} versus nightlife-heavy leaders.`
    );
  }

  const topLife = rankTop(weightsForScenarioLens("lifestyle"));
  if (topLife !== topCurrent && input.nightlifePref !== "high") {
    out.push(
      `If nightlife / energy mattered more (lifestyle-first lens), ${name(topLife)} could edge past ${topCurrentLabel} in this selection.`
    );
  }

  const topRemote = rankTop(weightsForScenarioLens("remote"));
  if (topRemote !== topCurrent && input.workMode !== "remote") {
    out.push(
      `Fully remote work (remote lens) down-weights commute — ${name(topRemote)} can jump ahead of ${topCurrentLabel} when rent anchors differ.`
    );
  }

  if (input.budgetSensitivity === "high" && orderedCityIds.includes("amsterdam")) {
    out.push(
      "With budget high on your list, Amsterdam often drops unless your take-home clearly beats typical costs there — look at money left over, not only the headline score."
    );
  }

  if (pickScenarioMode(input) === "balanced" && out.length < 2) {
    out.push(
      "Tightening “max comfortable commute” usually reshuffles commuter belts versus core cities — it is one of the fastest ways to change the table."
    );
  }

  return Array.from(new Set(out)).slice(0, 7);
}

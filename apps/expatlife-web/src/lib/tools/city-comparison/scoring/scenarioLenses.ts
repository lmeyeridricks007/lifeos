import type { CityComparisonInput, ScenarioCompareRow } from "../types";
import type { CityDimensionScores100 } from "./types";
import { buildDimensionWeights, pickScenarioMode, weightedOverall, weightsForScenarioLens } from "./weights";

export type DimsByCityId = Record<string, CityDimensionScores100>;

function topCityForWeights(ids: string[], dims: DimsByCityId, w: Record<keyof CityDimensionScores100, number>): string {
  let best = ids[0] ?? "—";
  let bestSc = -1;
  for (const id of ids) {
    const d = dims[id];
    if (!d) continue;
    const sc = weightedOverall(d, w);
    if (sc > bestSc) {
      bestSc = sc;
      best = id;
    }
  }
  return best;
}

function displayNameLookup(
  ids: string[],
  names: Record<string, string>
): (id: string) => string {
  return (id) => names[id] ?? id;
}

/**
 * Deterministic scenario rows: current lens + budget/family/commute/lifestyle + remote variant.
 */
export function buildScenarioLensRows(
  input: CityComparisonInput,
  dims: DimsByCityId,
  displayNames: Record<string, string>
): ScenarioCompareRow[] {
  const ids = Object.keys(dims);
  const name = displayNameLookup(ids, displayNames);
  const currentWeights = buildDimensionWeights(input);
  const mode = pickScenarioMode(input);

  const currentTop = topCityForWeights(ids, dims, currentWeights);

  const rows: ScenarioCompareRow[] = [
    {
      id: "current",
      label: "Your current setup",
      topCity: name(currentTop),
      note: `Weighted by your sliders and ${mode.replace(/_/g, " ")} lens.`,
    },
    {
      id: "budget_first",
      label: "Budget-first variant",
      topCity: name(topCityForWeights(ids, dims, weightsForScenarioLens("budget"))),
      note: "Affordability dimensions dominate; commute and career are down-weighted.",
    },
    {
      id: "family_first",
      label: "Family-first variant",
      topCity: name(topCityForWeights(ids, dims, weightsForScenarioLens("family"))),
      note: "Family fit and schools proxy drive the ranking.",
    },
    {
      id: "commute_first",
      label: "Commute-first variant",
      topCity: name(topCityForWeights(ids, dims, weightsForScenarioLens("commute"))),
      note: "Commute practicality to your office hub dominates (unchanged if you are remote).",
    },
    {
      id: "lifestyle_first",
      label: "Lifestyle-first variant",
      topCity: name(topCityForWeights(ids, dims, weightsForScenarioLens("lifestyle"))),
      note: "Nightlife / calm alignment and expat ease weigh more.",
    },
    {
      id: "remote_variant",
      label: "Remote-work variant",
      topCity: name(topCityForWeights(ids, dims, weightsForScenarioLens("remote"))),
      note: "Synthetic lens: commute nearly flat; lifestyle and affordability matter more.",
    },
  ];

  return rows;
}

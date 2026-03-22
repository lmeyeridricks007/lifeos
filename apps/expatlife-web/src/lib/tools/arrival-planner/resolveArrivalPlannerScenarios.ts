export type ScenarioItem = {
  id: string;
  type: "generic" | "country";
  originCountry?: string;
  title: string;
  inputs: Record<string, string>;
  summary: string;
  firstWeekHighlights: string[];
  firstMonthHighlights: string[];
};

/**
 * Prefer country-aware scenarios when originCountry is set; otherwise return generic ones.
 * Merges so that matching country scenarios appear first, then generic.
 */
export function resolveArrivalPlannerScenarios(
  scenarios: ScenarioItem[],
  originCountry: string
): ScenarioItem[] {
  const origin = (originCountry || "").trim().toLowerCase().replace(/\s+/g, "-");
  const countryScenarios = origin
    ? scenarios.filter((s) => s.type === "country" && s.originCountry === origin)
    : [];
  const genericScenarios = scenarios.filter((s) => s.type === "generic");
  return [...countryScenarios, ...genericScenarios];
}

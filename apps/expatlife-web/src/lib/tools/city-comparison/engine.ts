import type { CityComparisonId, CityComparisonInput, CityComparisonResult } from "./types";
import { ALL_COMPARISON_CITY_IDS, DEFAULT_CITY_COMPARISON_INPUT } from "./types";
import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import { computeCityComparisonScoring } from "./scoring/computeRanking";

const OFFICE_CITY_OPTIONS: ColCity[] = [
  "amsterdam",
  "rotterdam",
  "utrecht",
  "the-hague",
  "eindhoven",
  "haarlem",
  "delft",
  "leiden",
  "groningen",
];

const HOUSEHOLD: CityComparisonInput["householdType"][] = ["single", "couple", "family1", "family2", "custom"];
const WORK: CityComparisonInput["workMode"][] = ["office", "hybrid", "remote"];
const TIER: CityComparisonInput["lifestyleTier"][] = ["minimal", "balanced", "comfortable"];
const TRI: CityComparisonInput["internationalPref"][] = ["low", "medium", "high"];
const MAXC: CityComparisonInput["maxCommute"][] = ["under20", "under30", "under45", "under60"];
const CMODE: CityComparisonInput["commuteModePref"][] = ["train_pt", "bike", "car", "mixed"];
const SCEN: import("./types").ScenarioRankingMode[] = [
  "balanced",
  "cost_first",
  "lifestyle_first",
  "family_first",
  "commute_first",
];

export function sanitizeCityComparisonInput(
  partial: Partial<CityComparisonInput> | null | undefined
): CityComparisonInput {
  const base = DEFAULT_CITY_COMPARISON_INPUT;
  const p = partial ?? {};
  const allowed = new Set<string>(ALL_COMPARISON_CITY_IDS.filter((c) => c !== "other"));
  const rawCities = Array.isArray(p.selectedCities) ? p.selectedCities : base.selectedCities;
  const selectedCities = rawCities.filter((c): c is CityComparisonId => allowed.has(String(c)));
  const cities = selectedCities.length >= 2 && selectedCities.length <= 4 ? selectedCities : base.selectedCities;

  const scenarioToggles = { ...base.scenarioToggles };
  if (typeof p.scenarioToggles === "object" && p.scenarioToggles) {
    for (const k of SCEN) {
      if (typeof p.scenarioToggles[k] === "boolean") scenarioToggles[k] = p.scenarioToggles[k]!;
    }
  }
  const activeModes = SCEN.filter((k) => scenarioToggles[k]);
  if (activeModes.length === 0) scenarioToggles.balanced = true;
  else if (activeModes.length > 1) {
    const keep = activeModes[0]!;
    for (const k of SCEN) scenarioToggles[k] = k === keep;
  }

  const officeRaw = (p.officeCity ?? base.officeCity) as ColCity;
  const officeCity = OFFICE_CITY_OPTIONS.includes(officeRaw) ? officeRaw : base.officeCity;

  const householdType = HOUSEHOLD.includes(p.householdType as CityComparisonInput["householdType"])
    ? (p.householdType as CityComparisonInput["householdType"])
    : base.householdType;
  const workMode = WORK.includes(p.workMode as CityComparisonInput["workMode"])
    ? (p.workMode as CityComparisonInput["workMode"])
    : base.workMode;
  const lifestyleTier = TIER.includes(p.lifestyleTier as CityComparisonInput["lifestyleTier"])
    ? (p.lifestyleTier as CityComparisonInput["lifestyleTier"])
    : base.lifestyleTier;
  const pickTri = (v: unknown, fallback: CityComparisonInput["internationalPref"]) =>
    TRI.includes(v as CityComparisonInput["internationalPref"]) ? (v as CityComparisonInput["internationalPref"]) : fallback;

  return {
    ...base,
    ...p,
    selectedCities: cities,
    officeCity,
    householdType,
    workMode,
    lifestyleTier,
    internationalPref: pickTri(p.internationalPref, base.internationalPref),
    familySchoolImportance: pickTri(p.familySchoolImportance, base.familySchoolImportance),
    nightlifePref: pickTri(p.nightlifePref, base.nightlifePref),
    natureCalmPref: pickTri(p.natureCalmPref, base.natureCalmPref),
    careerPriority: pickTri(p.careerPriority, base.careerPriority),
    budgetSensitivity: pickTri(p.budgetSensitivity, base.budgetSensitivity),
    maxCommute: MAXC.includes(p.maxCommute as CityComparisonInput["maxCommute"])
      ? (p.maxCommute as CityComparisonInput["maxCommute"])
      : base.maxCommute,
    commuteModePref: CMODE.includes(p.commuteModePref as CityComparisonInput["commuteModePref"])
      ? (p.commuteModePref as CityComparisonInput["commuteModePref"])
      : base.commuteModePref,
    useColModelForSpend: typeof p.useColModelForSpend === "boolean" ? p.useColModelForSpend : base.useColModelForSpend,
    includeFamilyChildcareEffects:
      typeof p.includeFamilyChildcareEffects === "boolean"
        ? p.includeFamilyChildcareEffects
        : base.includeFamilyChildcareEffects,
    planningWith30PercentRuling:
      typeof p.planningWith30PercentRuling === "boolean"
        ? p.planningWith30PercentRuling
        : base.planningWith30PercentRuling,
    adultsCount: Math.min(4, Math.max(1, Math.round(Number(p.adultsCount ?? base.adultsCount)))),
    childrenCount: Math.min(6, Math.max(0, Math.round(Number(p.childrenCount ?? base.childrenCount)))),
    monthlyNetSalary: Math.min(200_000, Math.max(0, Number(p.monthlyNetSalary ?? base.monthlyNetSalary))),
    monthlyGrossSalary: (() => {
      const raw = p.monthlyGrossSalary as unknown;
      if (raw == null || (typeof raw === "string" && raw.trim() === "")) return null;
      const n = Number(raw);
      if (!Number.isFinite(n)) return null;
      return Math.min(300_000, Math.max(0, n));
    })(),
    targetRentBudget: (() => {
      const raw = p.targetRentBudget as unknown;
      if (raw == null || (typeof raw === "string" && raw.trim() === "")) return null;
      const n = Number(raw);
      if (!Number.isFinite(n)) return null;
      return Math.min(25_000, Math.max(0, n));
    })(),
    scenarioToggles,
  };
}

export function computeCityComparison(input: CityComparisonInput): CityComparisonResult {
  return computeCityComparisonScoring(input);
}

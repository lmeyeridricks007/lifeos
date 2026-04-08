import { computeCostOfLiving } from "@/src/lib/calculators/cost-of-living/calculator";
import { roundEur } from "@/src/lib/calculators/cost-of-living/formulas";
import { getRentMidForHousingMode } from "@/src/lib/calculators/cost-of-living/seed/cityCostSeed";
import {
  LIFESTYLE_ASSUMPTIONS,
  NEIGHBORHOOD_RENT_MULT,
} from "@/src/lib/calculators/cost-of-living/assumptions";
import type {
  ColChildcareIntensity,
  ColHousingMode,
  ColInput,
  ColLifestyle,
  ColTransportMode,
} from "@/src/lib/calculators/cost-of-living/types";
import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import type { CityComparisonId, CityComparisonInput } from "./types";
import { getCityComparisonProfile } from "./cityProfiles";
import type { CityCostBreakdown } from "./types";

const ESSENTIAL_SPEND_LINE_IDS = new Set([
  "rent",
  "utilities",
  "groceries",
  "health",
  "transport",
  "municipality",
  "mobile",
  "subscriptions",
  "extra-insurance",
  "clothing-buffer",
  "childcare",
  "schooling",
  "pet",
]);

function modelRentMid(input: ColInput): number {
  const base = getRentMidForHousingMode(input.city, input.housingMode);
  const ls = LIFESTYLE_ASSUMPTIONS[input.lifestyle];
  const nm = NEIGHBORHOOD_RENT_MULT[input.neighborhood] ?? 1;
  return roundEur(base * nm * ls.rentMult);
}

function mapHousehold(input: CityComparisonInput): Pick<
  ColInput,
  "householdPreset" | "adultsCount" | "childrenCount" | "housingMode"
> {
  switch (input.householdType) {
    case "single":
      return { householdPreset: "single", adultsCount: 1, childrenCount: 0, housingMode: "apartment_1bed" };
    case "couple":
      return { householdPreset: "couple", adultsCount: 2, childrenCount: 0, housingMode: "apartment_1bed" };
    case "family1":
      return { householdPreset: "family1", adultsCount: 2, childrenCount: 1, housingMode: "apartment_2bed" };
    case "family2":
      return { householdPreset: "family2", adultsCount: 2, childrenCount: 2, housingMode: "apartment_3bed_family" };
    case "custom":
    default: {
      const adults = Math.min(4, Math.max(1, input.adultsCount));
      const children = Math.min(6, Math.max(0, input.childrenCount));
      let housingMode: ColHousingMode = "apartment_1bed";
      if (children >= 2) housingMode = "apartment_3bed_family";
      else if (children === 1) housingMode = "apartment_2bed";
      else if (adults >= 2) housingMode = "apartment_1bed";
      return {
        householdPreset: "custom",
        adultsCount: adults,
        childrenCount: children,
        housingMode,
      };
    }
  }
}

function mapLifestyle(tier: CityComparisonInput["lifestyleTier"]): ColLifestyle {
  switch (tier) {
    case "minimal":
      return "basic";
    case "comfortable":
      return "comfortable";
    case "balanced":
    default:
      return "balanced";
  }
}

function mapTransport(pref: CityComparisonInput["commuteModePref"]): ColTransportMode {
  switch (pref) {
    case "train_pt":
      return "pt_only";
    case "bike":
      return "bike_pt";
    case "car":
      return "car";
    case "mixed":
    default:
      return "hybrid";
  }
}

function childcareFor(input: CityComparisonInput): { needed: boolean; intensity: ColChildcareIntensity } {
  if (!input.includeFamilyChildcareEffects || input.childrenCount < 1) {
    return { needed: false, intensity: "none" };
  }
  if (input.familySchoolImportance === "high") return { needed: true, intensity: "full_time" };
  return { needed: true, intensity: "part_time" };
}

export function buildColInputForComparisonCity(
  toolInput: CityComparisonInput,
  cityId: CityComparisonId
): ColInput {
  const profile = getCityComparisonProfile(cityId);
  const hh = mapHousehold(toolInput);
  const lifestyle = mapLifestyle(toolInput.lifestyleTier);
  const transportMode = mapTransport(toolInput.commuteModePref);
  const childcare = childcareFor(toolInput);

  const homeCol = profile.colProxy;
  const officeCol = toolInput.officeCity;
  const needsCommuteSupplement =
    toolInput.workMode !== "remote" && homeCol !== officeCol && homeCol !== "other" && officeCol !== "other";

  const rulingAssumption = toolInput.planningWith30PercentRuling ? "yes" : "no";

  let diningLevel: ColInput["diningLevel"] = "medium";
  let travelStyle: ColInput["travelStyle"] = "weekends";
  if (!toolInput.useColModelForSpend) {
    diningLevel = "low";
    travelStyle = "local";
  } else if (toolInput.lifestyleTier === "minimal") {
    diningLevel = "low";
    travelStyle = "local";
  } else if (toolInput.lifestyleTier === "comfortable") {
    diningLevel = "high";
    travelStyle = "frequent";
  }

  const base: ColInput = {
    city: homeCol,
    neighborhood: "outside",
    householdPreset: hh.householdPreset,
    adultsCount: hh.adultsCount,
    childrenCount: hh.childrenCount,
    housingMode: hh.housingMode,
    rentInputMode: "model",
    manualRentEur: null,
    lifestyle,
    diningLevel,
    travelStyle,
    transportMode,
    includeParking: toolInput.commuteModePref === "car" || toolInput.commuteModePref === "mixed",
    includeNsCommuteSupplement: needsCommuteSupplement,
    childcareNeeded: childcare.needed,
    childcareIntensity: childcare.intensity,
    schooling: toolInput.internationalPref === "high" ? "international_placeholder" : "public_local",
    pet: false,
    movingFrom: "eu_nearby",
    employerRelocationSupport: "none",
    includeFurnitureSetup: false,
    includeDepositAndFirstMonth: false,
    includeVisaAdminBudget: false,
    showSalaryTargets: true,
    rulingAssumption,
    currency: "eur",
    showSalaryComparison: true,
    comparisonNetMonthly: toolInput.monthlyNetSalary > 0 ? toolInput.monthlyNetSalary : null,
    compareScenariosEnabled: false,
  };

  if (toolInput.targetRentBudget != null && toolInput.targetRentBudget > 0) {
    return {
      ...base,
      rentInputMode: "manual",
      manualRentEur: roundEur(toolInput.targetRentBudget),
    };
  }

  if (profile.rentPlanningMult !== 1) {
    const mid = roundEur(modelRentMid(base) * profile.rentPlanningMult);
    return {
      ...base,
      rentInputMode: "manual",
      manualRentEur: mid,
    };
  }

  return base;
}

export function extractCostBreakdown(
  colInput: ColInput,
  useFullModel: boolean
): { breakdown: CityCostBreakdown; colResult: ReturnType<typeof computeCostOfLiving> } {
  const colResult = computeCostOfLiving(colInput);
  const items = colResult.monthly.items;
  const pick = (id: string) => items.find((i) => i.id === id)?.amountEur ?? 0;

  const rentEur = pick("rent");
  const transportEur = pick("transport");
  const healthEur = pick("health");
  const familyChildcareEur = pick("childcare") + pick("schooling");
  const lifestyleLeisureEur = pick("dining") + pick("personal-lifestyle");

  const essentialsNoRent =
    pick("utilities") +
    pick("groceries") +
    pick("mobile") +
    pick("subscriptions") +
    pick("municipality") +
    pick("extra-insurance") +
    pick("clothing-buffer") +
    pick("pet");

  if (useFullModel) {
    const livingLessRentEur = essentialsNoRent + lifestyleLeisureEur;
    return {
      colResult,
      breakdown: {
        rentEur,
        livingLessRentEur,
        transportEur,
        healthEur,
        lifestyleLeisureEur,
        familyChildcareEur,
        totalMonthlyOutflowEur: colResult.monthly.totalEur,
      },
    };
  }

  const essentialTotal = items
    .filter((i) => ESSENTIAL_SPEND_LINE_IDS.has(i.id))
    .reduce((s, i) => s + i.amountEur, 0);

  const livingLessRentEur = roundEur(
    essentialTotal - rentEur - transportEur - healthEur - familyChildcareEur
  );

  return {
    colResult,
    breakdown: {
      rentEur,
      livingLessRentEur,
      transportEur,
      healthEur,
      lifestyleLeisureEur: 0,
      familyChildcareEur,
      totalMonthlyOutflowEur: roundEur(essentialTotal),
    },
  };
}

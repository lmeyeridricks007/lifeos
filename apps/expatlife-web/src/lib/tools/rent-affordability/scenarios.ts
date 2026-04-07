import type { RentAffordabilityComparisonRow, RentAffordabilityScenarioInput } from "@/src/types/tools/rent-affordability";
import {
  affordableBandsToMaxRentBand,
  evaluateRentAffordabilityCore,
} from "./calculateRentAffordability";
import { resolveHouseholdCounts } from "./config";

function smallerHousingMode(m: RentAffordabilityScenarioInput["housingMode"]): RentAffordabilityScenarioInput["housingMode"] {
  switch (m) {
    case "family_home_3br":
      return "apartment_2br";
    case "apartment_2br":
      return "apartment_1br";
    case "apartment_1br":
      return "studio";
    case "studio":
      return "room_shared";
    default:
      return "room_shared";
  }
}

function rowFromCore(
  id: string,
  label: string,
  whyItMatters: string,
  core: NonNullable<ReturnType<typeof evaluateRentAffordabilityCore>>
): RentAffordabilityComparisonRow {
  const maxRent = affordableBandsToMaxRentBand(core.affordabilityBands);
  return {
    id,
    label,
    whyItMatters,
    monthlyTotalEur: core.monthlyLiving.totalIncludingHousingEur,
    setupTotalEur: core.setup.totalEur,
    recommendedRentEur: maxRent.recommendedEur,
    balancedGrossSalaryMonthlyEur: core.salaryTargetsGrossMonthly.balanced,
  };
}

/**
 * Deterministic comparison rows: commuter belt, smaller home, optional childcare / ruling variants.
 */
export function generateComparisonScenarios(base: RentAffordabilityScenarioInput): RentAffordabilityComparisonRow[] {
  const rows: RentAffordabilityComparisonRow[] = [];
  const current = evaluateRentAffordabilityCore(base);
  if (current) rows.push(rowFromCore("current", "Your inputs (current)", "Baseline reference.", current));

  const hotCore = ["amsterdam", "utrecht", "haarlem", "amstelveen"] as const;
  const cheaperCity = (hotCore as readonly string[]).includes(base.city) ? "rotterdam" : base.city;
  const commuter: RentAffordabilityScenarioInput = {
    ...base,
    city: cheaperCity as RentAffordabilityScenarioInput["city"],
    neighborhoodBand: "commuter_belt",
  };
  const b = evaluateRentAffordabilityCore(commuter);
  if (b) {
    rows.push(
      rowFromCore(
        "cheaper_area",
        "Commuter band + cooler city anchor (when you started in a hot core market)",
        "Shows how location choice can change rent pressure and salary needs.",
        b
      )
    );
  }

  const smaller: RentAffordabilityScenarioInput = {
    ...base,
    housingMode: smallerHousingMode(base.housingMode),
    neighborhoodBand: base.neighborhoodBand === "city_center_premium" ? "standard" : base.neighborhoodBand,
  };
  const c = evaluateRentAffordabilityCore(smaller);
  if (c && rows.length) {
    rows.push(
      rowFromCore(
        "smaller_housing",
        "Smaller housing / less premium band (same household & lifestyle)",
        "Tests whether reducing housing size unlocks a healthier rent-to-income profile.",
        c
      )
    );
  }

  const { children } = resolveHouseholdCounts(base.householdType, base.adultsCount, base.childrenCount);

  if (children > 0 && (base.includeChildcarePlaceholder || base.fixedChildcare > 0)) {
    const noCc: RentAffordabilityScenarioInput = {
      ...base,
      includeChildcarePlaceholder: false,
      fixedChildcare: 0,
    };
    const d = evaluateRentAffordabilityCore(noCc);
    if (d) {
      rows.push(
        rowFromCore(
          "no_childcare",
          "Without childcare line (same household otherwise)",
          "Isolates childcare impact on recurring affordability and salary targets.",
          d
        )
      );
    }
  }

  if (base.rulingAssumption !== "no") {
    const noRule: RentAffordabilityScenarioInput = { ...base, rulingAssumption: "no" };
    const e = evaluateRentAffordabilityCore(noRule);
    if (e) {
      rows.push(
        rowFromCore(
          "no_30pct_planning",
          "No 30% ruling planning uplift (same gross/net inputs otherwise)",
          "Stress-tests outcomes if the 30% ruling is not applied in payroll.",
          e
        )
      );
    }
  }
  if (!current) return rows;
  const baseline = rows.find((r) => r.id === "current") ?? rows[0];
  const withMeaningfulDelta = rows.filter((row) => {
    if (row.id === "current") return true;
    const monthlyDelta = Math.abs(row.monthlyTotalEur - baseline.monthlyTotalEur);
    const setupDelta = Math.abs(row.setupTotalEur - baseline.setupTotalEur);
    const rentDelta = Math.abs(row.recommendedRentEur - baseline.recommendedRentEur);
    return monthlyDelta >= 60 || setupDelta >= 250 || rentDelta >= 75;
  });
  return withMeaningfulDelta;
}

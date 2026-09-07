import { CITY_COST_SEED } from "@/src/lib/calculators/cost-of-living/seed/cityCostSeed";
import { csvDownloadResponse, jsonDownloadResponse, toCsv } from "@/src/lib/authority/downloadHelpers";

/** Editorial planning seed version — not CBS. */
export const CITY_COST_SEED_AS_OF = "2026-04" as const;
export const CITY_COST_SEED_PATH = "/netherlands/money/tools/cost-of-living-calculator" as const;

export function buildCityCostSeedDataset() {
  const cities = Object.entries(CITY_COST_SEED).map(([id, row]) => ({
    id,
    displayName: row.displayName,
    rent: row.rent,
    utilitiesMonthlyMidTwoPerson: row.utilitiesMonthlyMidTwoPerson,
    groceriesPerAdultMid: row.groceriesPerAdultMid,
    groceriesPerChildMid: row.groceriesPerChildMid,
    healthInsuranceAdultMid: row.healthInsuranceAdultMid,
    healthInsuranceChildMid: row.healthInsuranceChildMid,
    transportUrbanBaselineMid: row.transportUrbanBaselineMid,
    childcareFullTimeMidPerChild: row.childcareFullTimeMidPerChild,
    leisureBaselinePerAdultMid: row.leisureBaselinePerAdultMid,
    parkingPressureEur: row.parkingPressureEur,
    setupFrictionMult: row.setupFrictionMult,
    groceryIndexVsNational: row.groceryIndexVsNational,
  }));

  return {
    meta: {
      id: "expatcopilot-city-cost-seed",
      title: "ExpatCopilot Netherlands city cost planning seed",
      path: CITY_COST_SEED_PATH,
      asOf: CITY_COST_SEED_AS_OF,
      licenseNote:
        "Editorial planning estimates owned by ExpatCopilot for relocation budgeting. Not CBS, NVM, or insurer quotes. Redistribution permitted with attribution to ExpatCopilot and this as-of date.",
      methodology:
        "City midpoints and bands used by the Cost of Living Calculator. Rotterdam groceryIndexVsNational = 1 is the relative anchor. Revisit annually.",
    },
    cities,
  };
}

export function cityCostSeedJsonResponse(): Response {
  return jsonDownloadResponse(buildCityCostSeedDataset(), `expatcopilot-city-cost-seed-${CITY_COST_SEED_AS_OF}.json`);
}

export function cityCostSeedCsvResponse(): Response {
  const rows = Object.entries(CITY_COST_SEED).map(([id, row]) => [
    id,
    row.displayName,
    row.rent.roomShared.mid,
    row.rent.oneBed.mid,
    row.rent.twoBed.mid,
    row.rent.threeBed.mid,
    row.rent.shortStayMonthly.mid,
    row.utilitiesMonthlyMidTwoPerson,
    row.groceriesPerAdultMid,
    row.groceriesPerChildMid,
    row.healthInsuranceAdultMid,
    row.transportUrbanBaselineMid,
    row.childcareFullTimeMidPerChild,
    row.leisureBaselinePerAdultMid,
    row.parkingPressureEur,
    row.setupFrictionMult,
    row.groceryIndexVsNational,
  ]);
  const csv = toCsv(
    [
      "city_id",
      "display_name",
      "rent_room_shared_mid",
      "rent_1bed_mid",
      "rent_2bed_mid",
      "rent_3bed_mid",
      "rent_short_stay_mid",
      "utilities_mid_2p",
      "groceries_adult_mid",
      "groceries_child_mid",
      "health_adult_mid",
      "transport_urban_mid",
      "childcare_ft_mid",
      "leisure_adult_mid",
      "parking_pressure",
      "setup_friction_mult",
      "grocery_index_vs_national",
    ],
    rows
  );
  return csvDownloadResponse(csv, `expatcopilot-city-cost-seed-${CITY_COST_SEED_AS_OF}.csv`);
}

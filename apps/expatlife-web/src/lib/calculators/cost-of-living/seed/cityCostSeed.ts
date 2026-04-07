import type { ColCity, ColHousingMode } from "../types";
import type { CityCostSeedRow } from "./types";

/**
 * Netherlands city cost seed — **planning estimates only**.
 *
 * - **Purpose:** give expats and editors defensible midpoints and ranges for relocation budgeting — not quotes,
 *   not CBS/NVM data feeds, and not personalized to a listing.
 * - **Cadence:** revisit at least annually (rent narrative, energy, insurance premiums, childcare fees) and after
 *   major market shocks; adjust mids conservatively rather than chasing peak hype.
 * - **Rotterdam** is the informal index anchor (`groceryIndexVsNational = 1`) for relative scaling in formulas.
 * - **Mobile / subscriptions** lines are global — see `recurringMiscSeed.ts`.
 * - **Setup** (deposit months, agency %, admin, contingency) — see `globalPlanningConfig.ts` `SETUP_PLANNING` +
 *   lifestyle furniture in `LIFESTYLE_ASSUMPTIONS`.
 */

export const CITY_COST_SEED: Record<ColCity, CityCostSeedRow> = {
  // Capital region: highest rent pressure; utilities and childcare placeholders reflect competitive market stories.
  amsterdam: {
    displayName: "Amsterdam",
    rent: {
      roomShared: { low: 620, mid: 850, high: 1100 },
      oneBed: { low: 1400, mid: 1680, high: 2050 },
      twoBed: { low: 1850, mid: 2250, high: 2750 },
      threeBed: { low: 2300, mid: 2850, high: 3450 },
      shortStayMonthly: { low: 1900, mid: 2450, high: 3050 },
    },
    utilitiesMonthlyMidTwoPerson: 168,
    groceriesPerAdultMid: 300,
    groceriesPerChildMid: 115,
    healthInsuranceAdultMid: 138,
    healthInsuranceChildMid: 24,
    transportUrbanBaselineMid: 102,
    childcareFullTimeMidPerChild: 1000,
    leisureBaselinePerAdultMid: 210,
    parkingPressureEur: 135,
    setupFrictionMult: 1.08,
    groceryIndexVsNational: 1.14,
  },

  // Major port city: common reference; slightly lower rent than Randstad core; good "typical urban NL" anchor.
  rotterdam: {
    displayName: "Rotterdam",
    rent: {
      roomShared: { low: 480, mid: 650, high: 850 },
      oneBed: { low: 1050, mid: 1260, high: 1580 },
      twoBed: { low: 1380, mid: 1680, high: 2100 },
      threeBed: { low: 1750, mid: 2150, high: 2650 },
      shortStayMonthly: { low: 1450, mid: 1880, high: 2380 },
    },
    utilitiesMonthlyMidTwoPerson: 152,
    groceriesPerAdultMid: 268,
    groceriesPerChildMid: 105,
    healthInsuranceAdultMid: 132,
    healthInsuranceChildMid: 22,
    transportUrbanBaselineMid: 96,
    childcareFullTimeMidPerChild: 920,
    leisureBaselinePerAdultMid: 188,
    parkingPressureEur: 95,
    setupFrictionMult: 1,
    groceryIndexVsNational: 1,
  },

  // Government / international city: rent between Rotterdam and Amsterdam in most scenarios.
  "the-hague": {
    displayName: "The Hague",
    rent: {
      roomShared: { low: 520, mid: 700, high: 900 },
      oneBed: { low: 1120, mid: 1320, high: 1650 },
      twoBed: { low: 1480, mid: 1780, high: 2250 },
      threeBed: { low: 1880, mid: 2320, high: 2880 },
      shortStayMonthly: { low: 1550, mid: 1980, high: 2520 },
    },
    utilitiesMonthlyMidTwoPerson: 158,
    groceriesPerAdultMid: 275,
    groceriesPerChildMid: 108,
    healthInsuranceAdultMid: 133,
    healthInsuranceChildMid: 22,
    transportUrbanBaselineMid: 98,
    childcareFullTimeMidPerChild: 960,
    leisureBaselinePerAdultMid: 195,
    parkingPressureEur: 105,
    setupFrictionMult: 1.03,
    groceryIndexVsNational: 1.03,
  },

  // Strong student/professional demand; rent comparable to Amsterdam outer bands in many years.
  utrecht: {
    displayName: "Utrecht",
    rent: {
      roomShared: { low: 580, mid: 780, high: 1000 },
      oneBed: { low: 1280, mid: 1480, high: 1850 },
      twoBed: { low: 1680, mid: 2020, high: 2520 },
      threeBed: { low: 2100, mid: 2580, high: 3180 },
      shortStayMonthly: { low: 1750, mid: 2220, high: 2780 },
    },
    utilitiesMonthlyMidTwoPerson: 162,
    groceriesPerAdultMid: 288,
    groceriesPerChildMid: 112,
    healthInsuranceAdultMid: 135,
    healthInsuranceChildMid: 23,
    transportUrbanBaselineMid: 100,
    childcareFullTimeMidPerChild: 980,
    leisureBaselinePerAdultMid: 205,
    parkingPressureEur: 110,
    setupFrictionMult: 1.06,
    groceryIndexVsNational: 1.09,
  },

  // Brainport: lower rent than Randstad Big Four; tech salary stories sometimes offset cost of living.
  eindhoven: {
    displayName: "Eindhoven",
    rent: {
      roomShared: { low: 450, mid: 600, high: 780 },
      oneBed: { low: 980, mid: 1180, high: 1480 },
      twoBed: { low: 1280, mid: 1550, high: 1950 },
      threeBed: { low: 1620, mid: 1980, high: 2480 },
      shortStayMonthly: { low: 1320, mid: 1680, high: 2120 },
    },
    utilitiesMonthlyMidTwoPerson: 148,
    groceriesPerAdultMid: 262,
    groceriesPerChildMid: 102,
    healthInsuranceAdultMid: 131,
    healthInsuranceChildMid: 21,
    transportUrbanBaselineMid: 92,
    childcareFullTimeMidPerChild: 880,
    leisureBaselinePerAdultMid: 182,
    parkingPressureEur: 75,
    setupFrictionMult: 0.98,
    groceryIndexVsNational: 0.97,
  },

  // Commuter / satellite to Amsterdam: rent discount vs Amsterdam but not “cheap” in absolute terms.
  haarlem: {
    displayName: "Haarlem",
    rent: {
      roomShared: { low: 550, mid: 740, high: 960 },
      oneBed: { low: 1220, mid: 1450, high: 1800 },
      twoBed: { low: 1620, mid: 1950, high: 2420 },
      threeBed: { low: 2050, mid: 2520, high: 3080 },
      shortStayMonthly: { low: 1680, mid: 2150, high: 2680 },
    },
    utilitiesMonthlyMidTwoPerson: 160,
    groceriesPerAdultMid: 282,
    groceriesPerChildMid: 110,
    healthInsuranceAdultMid: 134,
    healthInsuranceChildMid: 22,
    transportUrbanBaselineMid: 99,
    childcareFullTimeMidPerChild: 970,
    leisureBaselinePerAdultMid: 200,
    parkingPressureEur: 120,
    setupFrictionMult: 1.05,
    groceryIndexVsNational: 1.08,
  },

  // University town between The Hague and Rotterdam: elevated vs national average, moderate vs Amsterdam.
  delft: {
    displayName: "Delft",
    rent: {
      roomShared: { low: 500, mid: 680, high: 880 },
      oneBed: { low: 1080, mid: 1280, high: 1600 },
      twoBed: { low: 1420, mid: 1720, high: 2150 },
      threeBed: { low: 1800, mid: 2220, high: 2750 },
      shortStayMonthly: { low: 1500, mid: 1920, high: 2400 },
    },
    utilitiesMonthlyMidTwoPerson: 155,
    groceriesPerAdultMid: 272,
    groceriesPerChildMid: 106,
    healthInsuranceAdultMid: 132,
    healthInsuranceChildMid: 22,
    transportUrbanBaselineMid: 97,
    childcareFullTimeMidPerChild: 940,
    leisureBaselinePerAdultMid: 190,
    parkingPressureEur: 88,
    setupFrictionMult: 1.02,
    groceryIndexVsNational: 1.02,
  },

  // Northern student city: among lower rent mids in this table; still use bands not single listings.
  groningen: {
    displayName: "Groningen",
    rent: {
      roomShared: { low: 380, mid: 520, high: 680 },
      oneBed: { low: 880, mid: 1050, high: 1320 },
      twoBed: { low: 1150, mid: 1380, high: 1720 },
      threeBed: { low: 1450, mid: 1780, high: 2220 },
      shortStayMonthly: { low: 1180, mid: 1520, high: 1920 },
    },
    utilitiesMonthlyMidTwoPerson: 142,
    groceriesPerAdultMid: 252,
    groceriesPerChildMid: 98,
    healthInsuranceAdultMid: 130,
    healthInsuranceChildMid: 20,
    transportUrbanBaselineMid: 88,
    childcareFullTimeMidPerChild: 820,
    leisureBaselinePerAdultMid: 175,
    parkingPressureEur: 65,
    setupFrictionMult: 0.95,
    groceryIndexVsNational: 0.94,
  },

  // Randstad university / commuter: between The Hague and Amsterdam on many lines.
  leiden: {
    displayName: "Leiden",
    rent: {
      roomShared: { low: 520, mid: 700, high: 900 },
      oneBed: { low: 1140, mid: 1350, high: 1680 },
      twoBed: { low: 1500, mid: 1820, high: 2250 },
      threeBed: { low: 1900, mid: 2350, high: 2880 },
      shortStayMonthly: { low: 1580, mid: 2020, high: 2520 },
    },
    utilitiesMonthlyMidTwoPerson: 156,
    groceriesPerAdultMid: 276,
    groceriesPerChildMid: 107,
    healthInsuranceAdultMid: 133,
    healthInsuranceChildMid: 22,
    transportUrbanBaselineMid: 96,
    childcareFullTimeMidPerChild: 950,
    leisureBaselinePerAdultMid: 192,
    parkingPressureEur: 90,
    setupFrictionMult: 1.02,
    groceryIndexVsNational: 1.04,
  },

  // Catch-all for smaller cities / provinces: intentionally below Randstad highs; wide real spread in practice.
  other: {
    displayName: "Other Netherlands",
    rent: {
      roomShared: { low: 420, mid: 580, high: 750 },
      oneBed: { low: 920, mid: 1120, high: 1400 },
      twoBed: { low: 1220, mid: 1480, high: 1850 },
      threeBed: { low: 1550, mid: 1900, high: 2320 },
      shortStayMonthly: { low: 1280, mid: 1650, high: 2050 },
    },
    utilitiesMonthlyMidTwoPerson: 150,
    groceriesPerAdultMid: 258,
    groceriesPerChildMid: 100,
    healthInsuranceAdultMid: 131,
    healthInsuranceChildMid: 21,
    transportUrbanBaselineMid: 93,
    childcareFullTimeMidPerChild: 900,
    leisureBaselinePerAdultMid: 185,
    parkingPressureEur: 70,
    setupFrictionMult: 1,
    groceryIndexVsNational: 0.96,
  },
};

export function getCityCostSeed(city: ColCity): CityCostSeedRow {
  return CITY_COST_SEED[city];
}

/** Mid rent for housing mode — used by calculator (deterministic path). */
export function getRentMidForHousingMode(city: ColCity, housingMode: ColHousingMode): number {
  const r = CITY_COST_SEED[city].rent;
  switch (housingMode) {
    case "room_shared":
      return r.roomShared.mid;
    case "apartment_1bed":
      return r.oneBed.mid;
    case "apartment_2bed":
      return r.twoBed.mid;
    case "apartment_3bed_family":
      return r.threeBed.mid;
    case "short_stay_serviced":
      return r.shortStayMonthly.mid;
    case "already_arranged":
      return Math.round(r.oneBed.mid * 0.96);
    default:
      return r.oneBed.mid;
  }
}

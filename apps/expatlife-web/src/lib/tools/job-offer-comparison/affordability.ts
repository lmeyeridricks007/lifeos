import { CITY_COST_SEED } from "@/src/lib/calculators/cost-of-living/seed/cityCostSeed";
import { BASE_GROCERIES_SINGLE_MONTHLY, BASE_UTILITIES_MONTHLY, COMMUTE_MODE_MONTHLY_ANCHOR } from "./assumptions";
import { affordabilityCityForOffer } from "./cityMap";
import type { AffordabilitySummary, JobOfferInput, NetPayEstimate } from "./types";

export function buildAffordabilitySummary(o: JobOfferInput, net: NetPayEstimate): AffordabilitySummary {
  const colCity = affordabilityCityForOffer(o);
  const seed = CITY_COST_SEED[colCity];

  let rent = seed.rent.oneBed.mid;
  if (!o.useCityRentAssumptions && o.targetRentBudgetMonthly != null && o.targetRentBudgetMonthly > 0) {
    rent = o.targetRentBudgetMonthly;
  }

  const groceryScaled = Math.round(BASE_GROCERIES_SINGLE_MONTHLY * seed.groceryIndexVsNational);
  const cityCostPressureMonthly = BASE_UTILITIES_MONTHLY + groceryScaled + seed.transportUrbanBaselineMid * 0.35;

  const days = Math.max(0, Math.min(5, o.commuteDaysPerWeek));
  const commuteMonthly = Math.round((COMMUTE_MODE_MONTHLY_ANCHOR[o.commuteMode] * days) / 5);

  const corePressure = rent + cityCostPressureMonthly + commuteMonthly;
  const remaining = net.estimatedNetMonthly - corePressure;

  return {
    colCity,
    rentPressureMonthly: rent,
    cityCostPressureMonthly: cityCostPressureMonthly + commuteMonthly,
    estimatedNetRemainingMonthly: remaining,
    note: o.useCityRentAssumptions
      ? `Rent uses ${seed.displayName} 1-bed mid planning anchor; commute scaled to ${days} office days.`
      : "Rent uses your target budget; commute and city lines still use planning anchors.",
  };
}

export function commuteBurdenScore(o: JobOfferInput): { burden: number; workModeFit: number } {
  const days = Math.max(0, Math.min(5, o.commuteDaysPerWeek));
  const modeCost = COMMUTE_MODE_MONTHLY_ANCHOR[o.commuteMode];
  const burdenRaw = (days / 5) * (modeCost / 320) * 100 + (o.workMode === "office" ? 18 : o.workMode === "hybrid" ? 8 : 0);
  const burden = Math.max(0, Math.min(100, Math.round(burdenRaw)));

  const workModeFit =
    o.workMode === "remote" ? 92 : o.workMode === "hybrid" ? 78 : 55;

  return { burden, workModeFit };
}

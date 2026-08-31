import { describe, expect, it } from "vitest";
import { calculateRepatriationCost } from "./engine";
import { DEFAULT_REPATRIATION_COST_INPUT } from "./types";

describe("calculateRepatriationCost", () => {
  it("returns a positive total for a typical Europe exit", () => {
    const result = calculateRepatriationCost({
      ...DEFAULT_REPATRIATION_COST_INPUT,
      householdSize: "1",
      destinationRegion: "europe",
      shippingVolume: "few_boxes",
      flightsNeeded: "one_way_household",
      leaseBreakRisk: "none",
      tempHousingWeeks: "1_to_2",
      pets: "no",
    });
    expect(result.total.typical).toBeGreaterThan(0);
    expect(result.breakdown.length).toBeGreaterThan(3);
    expect(result.headline.toLowerCase()).not.toMatch(/guaranteed/);
  });

  it("increases for full container long-haul", () => {
    const lean = calculateRepatriationCost({
      ...DEFAULT_REPATRIATION_COST_INPUT,
      shippingVolume: "suitcases",
      flightsNeeded: "none_already",
      tempHousingWeeks: "0",
      leaseBreakRisk: "none",
      pets: "no",
    });
    const heavy = calculateRepatriationCost({
      ...DEFAULT_REPATRIATION_COST_INPUT,
      destinationRegion: "north_america",
      shippingVolume: "full_container",
      flightsNeeded: "one_way_household",
      tempHousingWeeks: "longer",
      leaseBreakRisk: "early_fee_possible",
      pets: "yes",
      householdSize: "3_plus",
    });
    expect(heavy.total.typical).toBeGreaterThan(lean.total.typical);
    expect(heavy.band).toBe("heavy_exit");
  });

  it("flags needs_more_detail when destination and shipping unsure", () => {
    const result = calculateRepatriationCost({
      ...DEFAULT_REPATRIATION_COST_INPUT,
      destinationRegion: "unsure",
      shippingVolume: "unsure",
    });
    expect(result.escalate).toBe(true);
    expect(result.band).toBe("needs_more_detail");
  });
});

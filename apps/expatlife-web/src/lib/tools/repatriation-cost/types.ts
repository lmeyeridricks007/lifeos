export type HouseholdSize = "1" | "2" | "3_plus";

export type DestinationRegion =
  | "europe"
  | "uk_or_nearby"
  | "north_america"
  | "asia_pacific"
  | "other"
  | "unsure";

export type ShippingVolume = "suitcases" | "few_boxes" | "room_partial" | "full_container" | "unsure";

export type FlightsNeeded = "none_already" | "one_way_household" | "unsure";

export type LeaseBreakRisk = "none" | "deposit_at_risk" | "early_fee_possible" | "unsure";

export type TempHousingWeeks = "0" | "1_to_2" | "3_to_4" | "longer" | "unsure";

export type PetsOption = "no" | "yes" | "unsure";

export type CostRange = { min: number; typical: number; max: number };

export type CostBreakdownItem = {
  id: string;
  label: string;
  range: CostRange;
  note: string;
};

export type RepatriationCostBand = "lean_exit" | "typical_exit" | "heavy_exit" | "needs_more_detail";

export type RepatriationCostInput = {
  householdSize: HouseholdSize;
  destinationRegion: DestinationRegion;
  shippingVolume: ShippingVolume;
  flightsNeeded: FlightsNeeded;
  leaseBreakRisk: LeaseBreakRisk;
  tempHousingWeeks: TempHousingWeeks;
  pets: PetsOption;
};

export type RepatriationCostResult = {
  band: RepatriationCostBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  total: CostRange;
  breakdown: CostBreakdownItem[];
  cashTimingNotes: string[];
  nextSteps: { id: string; label: string; href?: string; external?: boolean }[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_REPATRIATION_COST_INPUT: RepatriationCostInput = {
  householdSize: "1",
  destinationRegion: "europe",
  shippingVolume: "few_boxes",
  flightsNeeded: "one_way_household",
  leaseBreakRisk: "none",
  tempHousingWeeks: "1_to_2",
  pets: "no",
};

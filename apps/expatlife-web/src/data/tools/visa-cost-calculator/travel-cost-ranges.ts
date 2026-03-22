/**
 * Travel and move-related cost ranges (flights, luggage, temporary housing).
 * Planning estimates; actual costs depend on origin, dates, and choices.
 */

export type TravelCostBand = {
  distanceBand: string;
  /** Per person one-way indicative */
  flightLowEur: number;
  flightHighEur: number;
  note?: string;
};

export const TRAVEL_DISTANCE_FLIGHT_RANGES: TravelCostBand[] = [
  { distanceBand: "nearby-europe", flightLowEur: 80, flightHighEur: 250, note: "Short-haul; book in advance." },
  { distanceBand: "medium-haul", flightLowEur: 200, flightHighEur: 550, note: "e.g. UK, Eastern Europe, North Africa." },
  { distanceBand: "long-haul", flightLowEur: 400, flightHighEur: 1200, note: "e.g. US, India, South Africa, Asia." },
];

/** Extra luggage / shipping (one-off). */
export const LUGGAGE_SHIPPING_RANGE = { low: 80, high: 400 };
export const SHIPPING_FEW_BOXES_RANGE = { low: 200, high: 800 };
export const SHIPPING_LARGE_RANGE = { low: 1500, high: 5000 };

/** Temporary housing per week (Dutch cities). */
export const TEMP_HOUSING_PER_WEEK_RANGE = { low: 400, high: 1200 };

export function getTempHousingRange(weeks: number): { low: number; high: number } {
  if (weeks <= 0) return { low: 0, high: 0 };
  const cap = Math.min(weeks, 8);
  return {
    low: TEMP_HOUSING_PER_WEEK_RANGE.low * cap,
    high: TEMP_HOUSING_PER_WEEK_RANGE.high * cap,
  };
}

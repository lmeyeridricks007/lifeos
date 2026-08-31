import { DEFAULT_REPATRIATION_COST_INPUT, type RepatriationCostInput } from "./types";

const STORAGE_KEY = "expatlife-repatriation-cost-inputs-v1";

const HOUSEHOLD = new Set(["1", "2", "3_plus"]);
const REGION = new Set(["europe", "uk_or_nearby", "north_america", "asia_pacific", "other", "unsure"]);
const SHIPPING = new Set(["suitcases", "few_boxes", "room_partial", "full_container", "unsure"]);
const FLIGHTS = new Set(["none_already", "one_way_household", "unsure"]);
const LEASE = new Set(["none", "deposit_at_risk", "early_fee_possible", "unsure"]);
const TEMP = new Set(["0", "1_to_2", "3_to_4", "longer", "unsure"]);
const PETS = new Set(["no", "yes", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizeRepatriationCostInput(partial: Partial<RepatriationCostInput>): RepatriationCostInput {
  const base = { ...DEFAULT_REPATRIATION_COST_INPUT, ...partial };
  return {
    householdSize: pick(base.householdSize, HOUSEHOLD, DEFAULT_REPATRIATION_COST_INPUT.householdSize),
    destinationRegion: pick(base.destinationRegion, REGION, DEFAULT_REPATRIATION_COST_INPUT.destinationRegion),
    shippingVolume: pick(base.shippingVolume, SHIPPING, DEFAULT_REPATRIATION_COST_INPUT.shippingVolume),
    flightsNeeded: pick(base.flightsNeeded, FLIGHTS, DEFAULT_REPATRIATION_COST_INPUT.flightsNeeded),
    leaseBreakRisk: pick(base.leaseBreakRisk, LEASE, DEFAULT_REPATRIATION_COST_INPUT.leaseBreakRisk),
    tempHousingWeeks: pick(base.tempHousingWeeks, TEMP, DEFAULT_REPATRIATION_COST_INPUT.tempHousingWeeks),
    pets: pick(base.pets, PETS, DEFAULT_REPATRIATION_COST_INPUT.pets),
  };
}

export function repatriationCostToSearchParams(input: RepatriationCostInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("hh", input.householdSize);
  sp.set("region", input.destinationRegion);
  sp.set("ship", input.shippingVolume);
  sp.set("flights", input.flightsNeeded);
  sp.set("lease", input.leaseBreakRisk);
  sp.set("temp", input.tempHousingWeeks);
  sp.set("pets", input.pets);
  return sp;
}

export function hasRepatriationCostUrlParams(sp: URLSearchParams): boolean {
  return ["hh", "region", "ship", "flights", "lease", "temp", "pets"].some((k) => sp.has(k));
}

export function parseRepatriationCostSearchParams(sp: URLSearchParams): Partial<RepatriationCostInput> {
  return sanitizeRepatriationCostInput({
    householdSize: pick(sp.get("hh"), HOUSEHOLD, DEFAULT_REPATRIATION_COST_INPUT.householdSize),
    destinationRegion: pick(sp.get("region"), REGION, DEFAULT_REPATRIATION_COST_INPUT.destinationRegion),
    shippingVolume: pick(sp.get("ship"), SHIPPING, DEFAULT_REPATRIATION_COST_INPUT.shippingVolume),
    flightsNeeded: pick(sp.get("flights"), FLIGHTS, DEFAULT_REPATRIATION_COST_INPUT.flightsNeeded),
    leaseBreakRisk: pick(sp.get("lease"), LEASE, DEFAULT_REPATRIATION_COST_INPUT.leaseBreakRisk),
    tempHousingWeeks: pick(sp.get("temp"), TEMP, DEFAULT_REPATRIATION_COST_INPUT.tempHousingWeeks),
    pets: pick(sp.get("pets"), PETS, DEFAULT_REPATRIATION_COST_INPUT.pets),
  });
}

export function saveRepatriationCostToStorage(input: RepatriationCostInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadRepatriationCostFromStorage(): Partial<RepatriationCostInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeRepatriationCostInput(JSON.parse(raw) as Partial<RepatriationCostInput>);
  } catch {
    return null;
  }
}

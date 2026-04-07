import type { ColCity } from "./types";
import { CITY_COST_SEED } from "./seed/cityCostSeed";

export type CityProfile = {
  /** Legacy anchor: 1-bedroom mid from city seed (outside center baseline in bands). */
  rent1bedOutsideEur: number;
  groceryIndex: number;
  parkingPremiumEur: number;
};

function rowToProfile(city: ColCity): CityProfile {
  const s = CITY_COST_SEED[city];
  return {
    rent1bedOutsideEur: s.rent.oneBed.mid,
    groceryIndex: s.groceryIndexVsNational,
    parkingPremiumEur: s.parkingPressureEur,
  };
}

/** Snapshot derived from `CITY_COST_SEED` for consumers that need a static map. */
export const CITY_PROFILES = Object.fromEntries(
  (Object.keys(CITY_COST_SEED) as ColCity[]).map((c) => [c, rowToProfile(c)])
) as Record<ColCity, CityProfile>;

/** Derived from editorial city seed — keeps older call sites stable. */
export function getCityProfile(city: ColCity): CityProfile {
  return CITY_PROFILES[city];
}

import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import type { RaCity } from "@/src/types/tools/rent-affordability";

/** Map planner cities to COL seed keys (rent + cost indices). */
export function raCityToColCity(city: RaCity): ColCity {
  switch (city) {
    case "breda":
      return "rotterdam";
    case "amstelveen":
      return "haarlem";
    default:
      return city as ColCity;
  }
}

/** Extra rent multiplier vs the mapped COL city (listing stories, not data feeds). */
export function raCityRentAdjustment(city: RaCity): number {
  switch (city) {
    case "breda":
      return 0.93;
    case "amstelveen":
      return 1.05;
    default:
      return 1;
  }
}

import type { ArrivalPlannerCountry, RegionGroup, DistanceCategory } from "./types";

export type OriginMetaResult = {
  country: ArrivalPlannerCountry | null;
  regionGroup: RegionGroup;
  distanceCategory: DistanceCategory;
};

/**
 * Derive region group and distance category from origin country.
 * If country is not in the list, returns non-eu and far as safe defaults.
 */
export function getOriginMeta(
  originCountry: string,
  countries: ArrivalPlannerCountry[]
): OriginMetaResult {
  const slug = (originCountry || "").trim().toLowerCase().replace(/\s+/g, "-");
  const country = countries.find((c) => c.slug === slug) ?? null;

  const regionGroup: RegionGroup = country?.regionGroup ?? "non-eu";
  const distanceCategory: DistanceCategory = country?.distanceCategory ?? "far";

  return { country, regionGroup, distanceCategory };
}

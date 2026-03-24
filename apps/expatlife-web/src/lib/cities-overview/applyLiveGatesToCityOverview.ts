import type {
  CityComparisonRow,
  MajorCityCard,
  SecondaryCityCard,
} from "@/src/lib/cities-overview/types";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

/** Align “Cities already covered” cards with `isRouteLive` (publish / publishDate), same as sitemap + nav. */
export function applyLiveGatesToMajorCityCards(cards: MajorCityCard[]): MajorCityCard[] {
  return cards.map((card) => ({
    ...card,
    comingSoon: Boolean(card.comingSoon) || !isRouteLive(card.detailHref),
  }));
}

/** Comparison table city-guide buttons: hide href when the hub is not yet public. */
export function applyLiveGatesToCityComparisonRows(rows: CityComparisonRow[]): CityComparisonRow[] {
  return rows.map((row) => ({
    ...row,
    comingSoon: Boolean(row.comingSoon) || !isRouteLive(row.detailHref),
  }));
}

export function applyLiveGatesToSecondaryCityCards(cities: SecondaryCityCard[]): SecondaryCityCard[] {
  return cities.map((city) => {
    if (city.comingSoon) return city;
    if (!city.detailHref) return city;
    if (isRouteLive(city.detailHref)) return city;
    return { ...city, comingSoon: true, detailHref: undefined };
  });
}

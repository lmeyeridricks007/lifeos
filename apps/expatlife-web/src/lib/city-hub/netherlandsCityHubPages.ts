/**
 * All Netherlands city hub datasets under `/netherlands/{slug}/`.
 * Single list for sitemap, route visibility, and search indexing.
 */

import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { amsterdamCityPage } from "@/src/data/cities/amsterdam";
import { rotterdamCityPage } from "@/src/data/cities/rotterdam";
import { utrechtCityPage } from "@/src/data/cities/utrecht";
import { theHagueCityPage } from "@/src/data/cities/the-hague";
import { eindhovenCityPage } from "@/src/data/cities/eindhoven";
import { haarlemCityPage } from "@/src/data/cities/haarlem";
import { groningenCityPage } from "@/src/data/cities/groningen";
import { delftCityPage } from "@/src/data/cities/delft";
import { leidenCityPage } from "@/src/data/cities/leiden";
import { maastrichtCityPage } from "@/src/data/cities/maastricht";
import { bredaCityPage } from "@/src/data/cities/breda";
import { tilburgCityPage } from "@/src/data/cities/tilburg";
import { arnhemCityPage } from "@/src/data/cities/arnhem";
import { nijmegenCityPage } from "@/src/data/cities/nijmegen";
import { amstelveenCityPage } from "@/src/data/cities/amstelveen";

/** Order matches historical / UX priority; keep in sync when adding a city hub. */
export const NETHERLANDS_CITY_HUB_PAGES: readonly CityHubPageData[] = [
  amsterdamCityPage,
  rotterdamCityPage,
  utrechtCityPage,
  theHagueCityPage,
  eindhovenCityPage,
  haarlemCityPage,
  groningenCityPage,
  delftCityPage,
  leidenCityPage,
  maastrichtCityPage,
  bredaCityPage,
  tilburgCityPage,
  arnhemCityPage,
  nijmegenCityPage,
  amstelveenCityPage,
];

const byNormalizedPath = new Map<string, CityHubPageData>(
  NETHERLANDS_CITY_HUB_PAGES.map((c) => [normalizeSitePath(c.path), c])
);

export function findNetherlandsCityHubByNormalizedPath(
  normalizedPath: string
): CityHubPageData | undefined {
  return byNormalizedPath.get(normalizeSitePath(normalizedPath));
}

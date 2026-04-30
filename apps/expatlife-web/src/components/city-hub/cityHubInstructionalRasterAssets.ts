import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";
import { NETHERLANDS_CITY_HUB_PAGES } from "@/src/lib/city-hub/netherlandsCityHubPages";

const DIR = "/images/guides/city-hub-instructional-raster";

/** One WebP per live city hub (`nl-city-hub-{slug}.webp`). */
const bySlug: Record<string, InstructionalRaster> = Object.fromEntries(
  NETHERLANDS_CITY_HUB_PAGES.map((c) => [
    c.slug,
    {
      src: `${DIR}/nl-city-hub-${c.slug}.webp`,
      alt: `Editorial infographic overview for expats in ${c.name}: housing, commuting, and first municipal steps — illustrative; confirm on official municipality sources.`,
    } satisfies InstructionalRaster,
  ])
);

export function getCityHubInstructionalRaster(slug: string): InstructionalRaster | undefined {
  return bySlug[slug];
}

import Image from "next/image";
import { citiesFunnelHeroFigureClassName } from "@/src/components/cities/shared/citiesFunnelPageUi";

/** Raster hero (generated, unique to this guide) — `public/images/heroes/…`. */
export const FAMILIES_CITIES_HERO_SRC = "/images/heroes/netherlands-best-cities-families-hero.webp" as const;

const FAMILIES_CITIES_HERO_ALT =
  "Golden-hour photograph of a calm Dutch residential street with brick houses, bicycles, and a family walking — evoking family-friendly cities in the Netherlands.";

/**
 * Photo-real hero for the Best Dutch Cities for Families guide — distinct from SVG motifs on other city pillar pages.
 */
export function BestCitiesForFamiliesHeroGraphic({ className }: { className?: string }) {
  return (
    <figure className={citiesFunnelHeroFigureClassName(className)}>
      <Image
        src={FAMILIES_CITIES_HERO_SRC}
        alt={FAMILIES_CITIES_HERO_ALT}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
        className="object-cover object-center"
      />
    </figure>
  );
}

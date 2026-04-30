import Image from "next/image";
import { citiesFunnelHeroFigureClassName } from "@/src/components/cities/shared/citiesFunnelPageUi";

/** Raster hero (generated, unique to this guide) — `public/images/heroes/netherlands-cheapest-cities-expats-hero.webp`. */
const CHEAPEST_CITIES_HERO_SRC = "/images/heroes/netherlands-cheapest-cities-expats-hero.webp" as const;

const CHEAPEST_CITIES_HERO_ALT =
  "Golden-hour photograph of a quiet Dutch residential street with brick row houses and bicycles, evoking liveable cities outside the busiest Amsterdam-area pressure.";

/**
 * Photo-real hero for the Cheapest Cities guide — distinct from SVG motifs elsewhere.
 */
export function CheapestCitiesForExpatsHeroGraphic({ className }: { className?: string }) {
  return (
    <figure className={citiesFunnelHeroFigureClassName(className)}>
      <Image
        src={CHEAPEST_CITIES_HERO_SRC}
        alt={CHEAPEST_CITIES_HERO_ALT}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
        className="object-cover object-center"
      />
    </figure>
  );
}

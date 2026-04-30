import Image from "next/image";
import { citiesFunnelHeroFigureClassName } from "@/src/components/cities/shared/citiesFunnelPageUi";

/** Raster hero (generated, unique to this guide) — `public/images/heroes/…`. */
export const INTERNATIONAL_PROFESSIONALS_CITIES_HERO_SRC =
  "/images/heroes/netherlands-best-cities-international-professionals-hero.webp" as const;

const INTERNATIONAL_PROFESSIONALS_CITIES_HERO_ALT =
  "Golden-hour photograph of a contemporary Dutch city skyline with office buildings, cyclists, and a train — evoking career-led city choice for international professionals in the Netherlands.";

/**
 * Photo-real hero for the Best Dutch Cities for International Professionals guide — distinct from other city pillar heroes.
 */
export function BestCitiesForInternationalProfessionalsHeroGraphic({ className }: { className?: string }) {
  return (
    <figure className={citiesFunnelHeroFigureClassName(className)}>
      <Image
        src={INTERNATIONAL_PROFESSIONALS_CITIES_HERO_SRC}
        alt={INTERNATIONAL_PROFESSIONALS_CITIES_HERO_ALT}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
        className="object-cover object-center"
      />
    </figure>
  );
}

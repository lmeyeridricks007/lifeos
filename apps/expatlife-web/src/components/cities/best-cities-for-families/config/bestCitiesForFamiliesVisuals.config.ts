import type { CitiesGuidePhotoTile } from "../../shared/citiesGuideVisuals.types";

export const bestCitiesForFamiliesPanorama = {
  src: "/images/heroes/netherlands-best-cities-families-hero.webp" as const,
  alt: "Dutch family neighbourhoods, parks, and city streets — choosing where to live with children in the Netherlands.",
};

/** Main shortlist cities often picked for family balance (tier 1). */
export const bestCitiesForFamiliesMainPickStrip: CitiesGuidePhotoTile[] = [
  {
    name: "Utrecht",
    href: "/netherlands/utrecht/",
    src: "/images/heroes/utrecht-expat-relocation-hero-planning-scene.png",
    alt: "Utrecht city centre and Dom tower area",
  },
  {
    name: "Haarlem",
    href: "/netherlands/haarlem/",
    src: "/images/heroes/haarlem-grote-markt-expat-hero.png",
    alt: "Haarlem Grote Markt and historic streets",
  },
  {
    name: "Leiden",
    href: "/netherlands/leiden/",
    src: "/images/heroes/leiden-expat-city-hero.png",
    alt: "Leiden canals and university town",
  },
  {
    name: "Delft",
    href: "/netherlands/delft/",
    src: "/images/heroes/delft-expat-city-hero.png",
    alt: "Delft historic centre and canals",
  },
  {
    name: "Amstelveen",
    href: "/netherlands/amstelveen/",
    src: "/images/heroes/amstelveen-expat-city-hero.png",
    alt: "Amstelveen green suburban streets near Amsterdam",
  },
];

/** Backups and larger hubs families often compare (tier 2 + context). */
export const bestCitiesForFamiliesMoreOptionsStrip: CitiesGuidePhotoTile[] = [
  {
    name: "Breda",
    href: "/netherlands/breda/",
    src: "/images/heroes/breda-expat-city-hero.png",
    alt: "Breda city centre in Brabant",
  },
  {
    name: "Eindhoven",
    href: "/netherlands/eindhoven/",
    src: "/images/heroes/eindhoven-city-hub-hero.png",
    alt: "Eindhoven Brainport tech and city atmosphere",
  },
  {
    name: "Groningen",
    href: "/netherlands/groningen/",
    src: "/images/heroes/groningen-expat-city-hero.png",
    alt: "Groningen northern city centre",
  },
  {
    name: "Arnhem",
    href: "/netherlands/arnhem/",
    src: "/images/heroes/arnhem-expat-city-hero.png",
    alt: "Arnhem Gelderland city and green surroundings",
  },
  {
    name: "Rotterdam",
    href: "/netherlands/rotterdam/",
    src: "/images/heroes/rotterdam-expat-relocation-hero.png",
    alt: "Rotterdam skyline and modern waterfront",
  },
  {
    name: "Amsterdam",
    href: "/netherlands/amsterdam/",
    src: "/images/heroes/amsterdam-expat-relocation-planning-hero.png",
    alt: "Amsterdam canals — compare family trade-offs honestly",
  },
];

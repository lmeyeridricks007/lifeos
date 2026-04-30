import type { CitiesGuidePhotoTile } from "../../shared/citiesGuideVisuals.types";

/** Wide hero for the affordability guide (paths under /public). */
export const cheapestCitiesForExpatsPanorama = {
  src: "/images/heroes/netherlands-cheapest-cities-expats-hero.webp" as const,
  alt: "Dutch city skylines and canals — planning affordable places to live as an expat in the Netherlands.",
};

/** Cities commonly shortlisted for gentler rent than core western hubs. */
export const cheapestCitiesForExpatsAffordableStrip: CitiesGuidePhotoTile[] = [
  {
    name: "Groningen",
    href: "/netherlands/groningen/",
    src: "/images/heroes/groningen-expat-city-hero.png",
    alt: "Groningen northern city centre",
  },
  {
    name: "Tilburg",
    href: "/netherlands/tilburg/",
    src: "/images/heroes/tilburg-expat-city-hero.png",
    alt: "Tilburg Brabant city centre",
  },
  {
    name: "Breda",
    href: "/netherlands/breda/",
    src: "/images/heroes/breda-expat-city-hero.png",
    alt: "Breda historic southern city",
  },
  {
    name: "Arnhem",
    href: "/netherlands/arnhem/",
    src: "/images/heroes/arnhem-expat-city-hero.png",
    alt: "Arnhem Gelderland city and green surroundings",
  },
  {
    name: "Maastricht",
    href: "/netherlands/maastricht/",
    src: "/images/heroes/maastricht-expat-city-hero.png",
    alt: "Maastricht historic centre on the Meuse",
  },
  {
    name: "Eindhoven",
    href: "/netherlands/eindhoven/",
    src: "/images/heroes/eindhoven-city-hub-hero.png",
    alt: "Eindhoven Brainport tech and city atmosphere",
  },
];

/** Contrast strip: pricier hubs and well-connected alternatives when modelling totals. */
export const cheapestCitiesForExpatsCompareStrip: CitiesGuidePhotoTile[] = [
  {
    name: "Amsterdam",
    href: "/netherlands/amsterdam/",
    src: "/images/heroes/amsterdam-expat-relocation-planning-hero.png",
    alt: "Amsterdam canals — reference for rent and commute trade-offs",
  },
  {
    name: "Haarlem",
    href: "/netherlands/haarlem/",
    src: "/images/heroes/haarlem-grote-markt-expat-hero.png",
    alt: "Haarlem Grote Markt near Amsterdam corridor",
  },
  {
    name: "Leiden",
    href: "/netherlands/leiden/",
    src: "/images/heroes/leiden-expat-city-hero.png",
    alt: "Leiden canals and university town",
  },
  {
    name: "Nijmegen",
    href: "/netherlands/nijmegen/",
    src: "/images/heroes/nijmegen-expat-city-hero.png",
    alt: "Nijmegen city on the Waal",
  },
  {
    name: "Delft",
    href: "/netherlands/delft/",
    src: "/images/heroes/delft-expat-city-hero.png",
    alt: "Delft historic centre",
  },
  {
    name: "Amstelveen",
    href: "/netherlands/amstelveen/",
    src: "/images/heroes/amstelveen-expat-city-hero.png",
    alt: "Amstelveen green suburban streets near Amsterdam",
  },
];

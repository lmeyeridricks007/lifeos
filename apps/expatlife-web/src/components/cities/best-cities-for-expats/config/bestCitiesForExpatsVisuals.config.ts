/** Hero photography + city strips for the Best Cities for Expats guide (paths under /public). */

import type { CitiesGuidePhotoTile } from "../../shared/citiesGuideVisuals.types";

export type BestCitiesVisualTile = CitiesGuidePhotoTile;

export const bestCitiesForExpatsPanorama = {
  src: "/images/heroes/netherlands-cities-hero.png" as const,
  alt: "Aerial-style view of Dutch cities and urban skylines — context for choosing where to live.",
};

export const bestCitiesForExpatsCoreHubStrip: BestCitiesVisualTile[] = [
  {
    name: "Amsterdam",
    href: "/netherlands/amsterdam/",
    src: "/images/heroes/amsterdam-expat-relocation-planning-hero.png",
    alt: "Amsterdam canals and historic centre — expat relocation context",
  },
  {
    name: "Utrecht",
    href: "/netherlands/utrecht/",
    src: "/images/heroes/utrecht-expat-relocation-hero-planning-scene.png",
    alt: "Utrecht city centre and Dom tower area",
  },
  {
    name: "Rotterdam",
    href: "/netherlands/rotterdam/",
    src: "/images/heroes/rotterdam-expat-relocation-hero.png",
    alt: "Rotterdam skyline and modern waterfront",
  },
  {
    name: "The Hague",
    href: "/netherlands/the-hague/",
    src: "/images/heroes/the-hague-expat-relocation-hero-planning-scene.png",
    alt: "The Hague cityscape and institutions quarter",
  },
  {
    name: "Eindhoven",
    href: "/netherlands/eindhoven/",
    src: "/images/heroes/eindhoven-city-hub-hero.png",
    alt: "Eindhoven Brainport tech and city atmosphere",
  },
];

export const bestCitiesForExpatsMoreOptionsStrip: BestCitiesVisualTile[] = [
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
    alt: "Leiden canals and university town atmosphere",
  },
  {
    name: "Delft",
    href: "/netherlands/delft/",
    src: "/images/heroes/delft-expat-city-hero.png",
    alt: "Delft historic centre and canals",
  },
  {
    name: "Groningen",
    href: "/netherlands/groningen/",
    src: "/images/heroes/groningen-expat-city-hero.png",
    alt: "Groningen northern city centre",
  },
  {
    name: "Breda",
    href: "/netherlands/breda/",
    src: "/images/heroes/breda-expat-city-hero.png",
    alt: "Breda city centre in Brabant",
  },
  {
    name: "Amstelveen",
    href: "/netherlands/amstelveen/",
    src: "/images/heroes/amstelveen-expat-city-hero.png",
    alt: "Amstelveen green suburban streets near Amsterdam",
  },
];

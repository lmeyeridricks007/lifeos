import type { CitiesBestForExpatsProfileCardConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

/** Decision cards — family lens (personality, best-for, watch-outs, next links). */
export const citiesFamiliesProfileCards: CitiesBestForExpatsProfileCardConfig[] = [
  {
    id: "fam-utrecht",
    name: "Utrecht",
    guide: { href: "/netherlands/utrecht/", label: "Utrecht city guide" },
    accent: "violet",
    heroImage: {
      src: "/images/heroes/utrecht-expat-relocation-hero-planning-scene.png",
      alt: "Utrecht city centre and Dom tower — family relocation context",
    },
    tags: ["Central NL", "Schools"],
    intro:
      "Strong trains and bikes, family services close together, and a lively centre. Housing still moves fast, so plan radius and budget early.",
    bestFor: "Two working parents, school-age kids, and families who want energy without the tightest Amsterdam squeeze.",
    tradeoffs: ["Rent stays a big lever — widen your search area before you lock onto one postcode."],
    nextLinks: [
      { href: R.childcare, label: "Childcare cost estimator" },
      { href: R.cityComparison, label: "City comparison tool" },
    ],
  },
  {
    id: "fam-haarlem",
    name: "Haarlem",
    guide: { href: "/netherlands/haarlem/", label: "Haarlem city guide" },
    accent: "rose",
    heroImage: {
      src: "/images/heroes/haarlem-grote-markt-expat-hero.png",
      alt: "Haarlem Grote Markt — historic town near Amsterdam",
    },
    tags: ["Coast", "Amsterdam orbit"],
    intro:
      "Small-city feel with dunes and coast nearby. Many families choose it for calmer weekends while still reaching Amsterdam or Schiphol.",
    bestFor: "Outdoor time, hybrid work near Amsterdam, and walkable streets.",
    tradeoffs: ["Prices are not “cheap suburb” by default — compare total monthly cost."],
    nextLinks: [
      { href: R.rentAffordability, label: "Rent affordability calculator" },
      { href: R.costOfLiving, label: "Cost of living calculator" },
    ],
  },
  {
    id: "fam-leiden",
    name: "Leiden",
    guide: { href: "/netherlands/leiden/", label: "Leiden city guide" },
    accent: "sky",
    heroImage: {
      src: "/images/heroes/leiden-expat-city-hero.png",
      alt: "Leiden canals and university town",
    },
    tags: ["University town", "Compact"],
    intro: "Compact university city with a short hop west. Strong cycling and a clear town centre.",
    bestFor: "Research-led households and parents who like a small core and easy day trips.",
    tradeoffs: ["Students and locals share some streets — check school routes on a normal weekday."],
    nextLinks: [
      { href: R.cityComparison, label: "Compare Leiden vs finalists" },
      { href: R.childcare, label: "Childcare estimator" },
    ],
  },
  {
    id: "fam-delft",
    name: "Delft",
    guide: { href: "/netherlands/delft/", label: "Delft city guide" },
    accent: "cyan",
    heroImage: {
      src: "/images/heroes/delft-expat-city-hero.png",
      alt: "Delft historic canals",
    },
    tags: ["The Hague / Rotterdam", "Tech"],
    intro: "Quiet canal town between The Hague and Rotterdam. Often picked by tech and academic families.",
    bestFor: "Younger kids, calm evenings, and parents who can travel for specialist days.",
    tradeoffs: ["Fewer listings than big cities — “move 10 minutes out” is not always an option."],
    nextLinks: [
      { href: R.costOfLiving, label: "Cost of living calculator" },
      { href: "/netherlands/the-hague/", label: "The Hague guide (context)" },
    ],
  },
  {
    id: "fam-amstelveen",
    name: "Amstelveen",
    guide: { href: "/netherlands/amstelveen/", label: "Amstelveen city guide" },
    accent: "emerald",
    heroImage: {
      src: "/images/heroes/amstelveen-expat-city-hero.png",
      alt: "Amstelveen green streets near Amsterdam",
    },
    tags: ["International", "Green"],
    intro: "Leafy suburb with an international school corridor and a clear path into Amsterdam.",
    bestFor: "School-first families and two parents working toward Amsterdam.",
    tradeoffs: ["Budget matters — compare rent plus travel with inner Amsterdam honestly."],
    nextLinks: [
      { href: R.childcare, label: "Childcare cost estimator" },
      { href: "/netherlands/amsterdam/", label: "Amsterdam guide (commute context)" },
    ],
  },
  {
    id: "fam-breda",
    name: "Breda",
    guide: { href: "/netherlands/breda/", label: "Breda city guide" },
    accent: "amber",
    heroImage: {
      src: "/images/heroes/breda-expat-city-hero.png",
      alt: "Breda historic city centre",
    },
    tags: ["Brabant", "Space"],
    intro: "Southern city with softer rent than the busiest western cores for many homes, plus links toward Rotterdam.",
    bestFor: "Families who want space and a slower pace without going fully rural.",
    tradeoffs: ["Check both partners’ job markets — not every field is thick locally."],
    nextLinks: [
      { href: R.rentAffordability, label: "Rent calculator" },
      { href: R.cityComparison, label: "City comparison tool" },
    ],
  },
  {
    id: "fam-eindhoven",
    name: "Eindhoven",
    guide: { href: "/netherlands/eindhoven/", label: "Eindhoven city guide" },
    accent: "amber",
    heroImage: {
      src: "/images/heroes/eindhoven-city-hub-hero.png",
      alt: "Eindhoven Brainport city",
    },
    tags: ["Tech", "Brainport"],
    intro: "Compact tech region with strong local employers and family suburbs close to work.",
    bestFor: "Engineering-led households who want fewer long trips west.",
    tradeoffs: ["Nice family homes still sell quickly — start search and schools early."],
    nextLinks: [
      { href: R.costOfLiving, label: "Cost of living calculator" },
      { href: R.cityComparison, label: "Compare Eindhoven vs finalists" },
    ],
  },
  {
    id: "fam-groningen",
    name: "Groningen",
    guide: { href: "/netherlands/groningen/", label: "Groningen city guide" },
    accent: "teal",
    heroImage: {
      src: "/images/heroes/groningen-expat-city-hero.png",
      alt: "Groningen northern city",
    },
    tags: ["North", "Bike-first"],
    intro: "Northern city with a tight core, good services for its size, and often gentler rent than the busiest west.",
    bestFor: "Remote-heavy parents and families who like a lively small city.",
    tradeoffs: ["If the office is often in the west, model train time and tickets for real months."],
    nextLinks: [
      { href: R.cityComparison, label: "City comparison tool" },
      { href: R.childcare, label: "Childcare estimator" },
    ],
  },
  {
    id: "fam-arnhem",
    name: "Arnhem",
    guide: { href: "/netherlands/arnhem/", label: "Arnhem city guide" },
    accent: "indigo",
    heroImage: {
      src: "/images/heroes/arnhem-expat-city-hero.png",
      alt: "Arnhem and green Gelderland",
    },
    tags: ["Green", "Rail"],
    intro: "Green Gelderland city with rail toward Utrecht and Amsterdam. Popular when space and evenings matter.",
    bestFor: "Outdoor families and hybrid workers anchored in the Arnhem–Nijmegen area.",
    tradeoffs: ["Peak trains toward Amsterdam fill up — test your real commute week."],
    nextLinks: [
      { href: R.cityComparison, label: "Compare Arnhem vs finalists" },
      { href: R.movingChecklist, label: "Moving checklist" },
    ],
  },
];

import type { CitiesBestForExpatsStartCardConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export const citiesFamiliesStartCards: CitiesBestForExpatsStartCardConfig[] = [
  {
    id: "housing-space",
    iconKey: "affordability",
    title: "Housing & space",
    intro:
      "Space and daily rhythm beat postcode prestige — decide what “enough room” means before you fall in love with a listing.",
    keyPoints: [
      "City vs edge — cores skew small; suburbs often mean more m² and a garden.",
      "Outside time — a nearby park or usable balcony matters more than glossy photos.",
      "Address for BSN — you need a registered home; plan any in-between stay.",
    ],
    cta: { href: R.rentAffordability, label: "Check rent affordability" },
  },
  {
    id: "childcare-schools",
    iconKey: "family",
    title: "Childcare & schools",
    intro:
      "Lists and handovers belong in week one — same priority as rent, not something you fix after you move.",
    keyPoints: [
      "Daycare — join waitlists in more than one area from the start.",
      "School track — international vs Dutch changes cost, language, and travel.",
      "Sick days and pickups — who covers when school ends before the office?",
    ],
    cta: { href: R.childcare, label: "Estimate childcare cost" },
  },
  {
    id: "commute-routine",
    iconKey: "work",
    title: "Travel & routine",
    intro:
      "Judge a finalist on a normal school week — rain, crowding, and tired evenings — not a single sunny viewing trip.",
    keyPoints: [
      "Bike and train — wet clothes, strollers, and peak trains are the real test.",
      "Two offices — different hubs shrink the map of “easy” cities fast.",
      "Hybrid — still expect fixed in-office days; don’t plan on the best Tuesday only.",
    ],
    cta: { href: R.cityComparison, label: "Compare cities" },
  },
  {
    id: "everyday-life",
    iconKey: "lifestyle",
    title: "Everyday life",
    intro:
      "Groceries, GP, and errands decide whether Tuesday feels manageable — not skyline shots.",
    keyPoints: [
      "Play space — playgrounds and parks for weekends and short winter days.",
      "GP access — kids and fever nights; check how new patients are taken on.",
      "Errands — bikeable daily life vs car for every milk run.",
    ],
    cta: { href: R.costOfLiving, label: "Model monthly life cost" },
  },
];

import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
} from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

/** Cross-pillar related guide link blocks (RelatedGuidesSection). */
export const citiesBestForExpatsRelatedGuideBlocks: CitiesBestForExpatsRelatedGuideBlocksConfig = [
  {
    title: "Cities pillar",
    links: [
      { label: "Cities hub (all guides + table)", href: R.citiesHub },
      { label: "Best Dutch cities for families", href: "/netherlands/cities/best-cities-for-families/" },
      { label: "Cheapest cities for expats (paired guide)", href: "/netherlands/cities/cheapest-cities-for-expats/" },
      { label: "City comparison tool", href: R.cityComparison },
      { label: "Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Utrecht", href: "/netherlands/utrecht/" },
      { label: "Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "The Hague", href: "/netherlands/the-hague/" },
      { label: "Eindhoven", href: "/netherlands/eindhoven/" },
    ],
  },
  {
    title: "Money & housing",
    links: [
      { label: "Cost of living calculator", href: R.costOfLiving },
      { label: "Rent affordability calculator", href: R.rentAffordability },
      { label: "Utilities & services comparison", href: R.utilities },
      { label: "Housing hub", href: R.housingHub },
      { label: "Money tools hub", href: R.moneyToolsHub },
    ],
  },
  {
    title: "Move & documents",
    links: [
      { label: "Moving to the Netherlands", href: R.movingToNl },
      { label: "Move & immigration tools", href: R.moveTools },
      { label: "Document readiness checker", href: R.documentReadiness },
      { label: "Visas & residency orientation", href: R.visasResidency },
    ],
  },
  {
    title: "Living & setup",
    links: [
      { label: "Netherlands Survival Guide", href: R.livingSurvival },
      { label: "After arriving", href: R.afterArriving },
      { label: "Health insurance (guide)", href: R.healthInsuranceGuide },
      { label: "Open a bank account", href: R.openBankGuide },
      { label: "Services directory", href: R.services },
    ],
  },
];

/** “Continue exploring” next-step cards. */
export const citiesBestForExpatsContinueCards: CitiesBestForExpatsContinueCardConfig[] = [
  {
    id: "hub",
    title: "Browse all city guides",
    description: "Open the cities hub for the full table, cards, and links to every live municipality guide.",
    link: { href: R.citiesHub },
    ctaLabel: "Go to cities hub",
  },
  {
    id: "compare",
    title: "Run the comparison tool",
    description:
      "Keep 2–4 cities in the same model so you are not comparing Amsterdam in your head with Utrecht on a spreadsheet.",
    link: { href: R.cityComparison },
    ctaLabel: "Open tool",
  },
  {
    id: "affordability-lens",
    title: "Paired guide: Cheapest cities for expats",
    description:
      "When rent and monthly pressure lead, switch to the budget lens — same calculators, affordability-first framing.",
    link: { href: "/netherlands/cities/cheapest-cities-for-expats/" },
    ctaLabel: "Cheapest cities guide",
  },
  {
    id: "services",
    title: "Find relocation and housing help",
    description: "When you want assisted search or bundled setup, compare vetted categories on the services hub.",
    link: { href: R.services },
    ctaLabel: "Browse services",
  },
  {
    id: "cost",
    title: "Lock the money picture",
    description: "Stack rent, cost of living, utilities, and (if relevant) childcare on the same assumptions.",
    link: { href: R.costOfLiving },
    ctaLabel: "Cost of living calculator",
  },
];

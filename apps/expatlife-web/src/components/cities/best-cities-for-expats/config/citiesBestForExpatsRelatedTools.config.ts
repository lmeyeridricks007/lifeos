import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
} from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

/** Helpful tools strip (grouped tool cards + hub links). */
export const citiesBestForExpatsHelpfulTools: CitiesBestForExpatsHelpfulToolsShellConfig = {
  id: "helpful-tools",
  eyebrow: "Tools & journey",
  title: "Helpful tools and related guides",
  subtitle:
    "**City choice** sits in the same arc as **move, money, housing, living**. Calculators **pressure-test** a shortlist; **hubs + guides** add depth (even when a city page is still light).",
  sections: [
    {
      eyebrow: "Compare & budget",
      description: "Quantify trade-offs before you emotionally commit to a postcode.",
      items: [
        {
          title: "City comparison tool",
          description:
            "Rank finalists on modelled costs, commute pain, family fit, and lifestyle — planning only, not live listings.",
          link: { href: R.cityComparison },
        },
        {
          title: "Cost of living calculator",
          description: "Monthly bands by city and household — pairs with rent and utilities thinking.",
          link: { href: R.costOfLiving },
        },
        {
          title: "Rent affordability calculator",
          description: "Max rent from income, landlord gross-income checks, and move-in cash needs.",
          link: { href: R.rentAffordability },
        },
        {
          title: "Utilities & services comparison",
          description: "Household services lines that shift by city size, housing type, and provider choices.",
          link: { href: R.utilities },
        },
      ],
    },
    {
      eyebrow: "Family & benefits",
      description: "When kids or allowances change what “affordable” means.",
      items: [
        {
          title: "Childcare cost estimator",
          description: "Rough net childcare pressure alongside rent — useful for family shortlists.",
          link: { href: R.childcare },
        },
        {
          title: "Healthcare allowance estimator",
          description: "Model toeslag sensitivity as rent and income move between city options.",
          link: { href: R.healthcareAllowance },
        },
      ],
    },
    {
      eyebrow: "Move planning",
      description: "Keep arrival tasks aligned with the municipality you choose.",
      items: [
        {
          title: "Moving checklist",
          description: "Before, arrival, and first 90 days — same admin spine for any Dutch city.",
          link: { href: R.movingChecklist },
        },
        {
          title: "Document readiness checker",
          description: "See which documents matter for your route before you book city viewings or moves.",
          link: { href: R.documentReadiness },
        },
        {
          title: "Cities hub",
          description: "Jump back to every live city guide when you are ready for local detail.",
          link: { href: R.citiesHub },
        },
      ],
    },
    {
      eyebrow: "Guides (Move · Housing · Living · Money)",
      description: "These hubs mirror how ExpatCopilot is organised — use them right after you have 2–4 realistic cities.",
      items: [
        {
          title: "Moving to the Netherlands",
          description: "Main Move pillar: stages, scenarios, timelines, and links into visas and tools.",
          link: { href: R.movingToNl },
        },
        {
          title: "Visas & residency orientation",
          description: "Route doorway before you assume a single permit story — pairs with employer location.",
          link: { href: R.visasResidency },
        },
        {
          title: "Working in the Netherlands",
          description: "When the move is job-led: offers, contracts, salary, permits, and first-month pressure.",
          link: { href: R.workingNl },
        },
        {
          title: "Housing in the Netherlands",
          description: "National renting context, contracts, and how address choice interacts with registration.",
          link: { href: R.housingHub },
        },
        {
          title: "Housing tools hub",
          description: "Rent affordability and other housing calculators in one place.",
          link: { href: R.housingToolsHub },
        },
        {
          title: "Money tools hub",
          description: "Cost of living, salary net, healthcare allowance — same assumptions across cities.",
          link: { href: R.moneyToolsHub },
        },
        {
          title: "Netherlands Survival Guide",
          description: "Daily rhythm after admin is moving: transport, groceries, apps, and practical habits.",
          link: { href: R.livingSurvival },
        },
        {
          title: "After arriving in the Netherlands",
          description: "BSN, insurance, banking, and registration sequence — applies in every municipality.",
          link: { href: R.afterArriving },
        },
        {
          title: "Municipality registration",
          description: "How BRP registration works nationally before you read city-specific desk details.",
          link: { href: R.municipalityRegistration },
        },
      ],
    },
  ],
};

/** Cross-pillar related guide link blocks (RelatedGuidesSection). */
export const citiesBestForExpatsRelatedGuideBlocks: CitiesBestForExpatsRelatedGuideBlocksConfig = [
  {
    title: "Cities pillar",
    links: [
      { label: "Cities hub (all guides + table)", href: R.citiesHub },
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

/** Explore grid cards (MovePillarExploreGrid). */
export const citiesBestForExpatsExploreCards: CitiesBestForExpatsExploreCardsConfig = [
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Return to the full index, comparison table, and every live municipality guide.",
    meta: "Cities",
  },
  {
    href: R.movingToNl,
    title: "Moving to the Netherlands",
    description: "The main Move pillar — stages, scenarios, and how city choice sits inside the wider relocation arc.",
    meta: "Move",
  },
  {
    href: R.housingHub,
    title: "Housing in the Netherlands",
    description: "National renting context before you pick streets — contracts, registration, and search realism.",
    meta: "Housing",
  },
  {
    href: R.moneyToolsHub,
    title: "Money tools",
    description: "Cost of living, salary net, and allowance tools to align numbers across finalist cities.",
    meta: "Money",
  },
  {
    href: R.livingSurvival,
    title: "Netherlands Survival Guide",
    description: "Daily life rhythm once the address is clearer — transport, shops, apps, and habits.",
    meta: "Living",
  },
  {
    href: R.toolsHub,
    title: "Tools hub",
    description: "All calculators and planners in one place — useful when you are juggling multiple decisions.",
    meta: "Tools",
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

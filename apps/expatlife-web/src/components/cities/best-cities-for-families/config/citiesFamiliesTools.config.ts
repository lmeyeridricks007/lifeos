import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
} from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export const citiesFamiliesHelpfulTools: CitiesBestForExpatsHelpfulToolsShellConfig = {
  id: "helpful-tools",
  eyebrow: "Tools & journey",
  title: "Tools and guides that matter for families",
  subtitle:
    "Why these tools: families leak money and time on childcare + commute + housing type — not headline rent alone. Run the same assumptions on each finalist city before you fall in love with a listing.",
  sections: [
    {
      eyebrow: "Compare & budget",
      description: "Hold 2–4 cities in one model — then argue about neighbourhoods, not guesses.",
      items: [
        {
          title: "City comparison tool",
          description: "Why: family sliders + commute pain expose “pretty city” traps before you sign a lease.",
          link: { href: R.cityComparison },
        },
        {
          title: "Rent affordability calculator",
          description: "Why: anchors max rent from income + obligations — pairs with childcare lines below.",
          link: { href: R.rentAffordability },
        },
        {
          title: "Cost of living calculator",
          description: "Why: monthly bands by household — keep groceries, transport, and energy honest across cities.",
          link: { href: R.costOfLiving },
        },
        {
          title: "Utilities & services comparison",
          description: "Why: bigger houses and older stock shift energy and broadband — totals follow housing type.",
          link: { href: R.utilities },
        },
      ],
    },
    {
      eyebrow: "Family & benefits",
      description: "Childcare and allowances often dominate the first years more than rent alone.",
      items: [
        {
          title: "Childcare cost estimator",
          description: "Why: waitlists and hourly days change which neighbourhoods are even viable for two careers.",
          link: { href: R.childcare },
        },
        {
          title: "Healthcare allowance estimator",
          description: "Why: rent and income moves between cities shift toeslag — model before you fixate on “cheaper rent”.",
          link: { href: R.healthcareAllowance },
        },
      ],
    },
    {
      eyebrow: "Move & setup",
      items: [
        {
          title: "Moving checklist",
          description: "Before / arrival / 90 days — same spine whichever municipality you pick.",
          link: { href: R.movingChecklist },
        },
        {
          title: "Cities hub",
          description: "Every live municipality guide when you are ready for street-level detail.",
          link: { href: R.citiesHub },
        },
        {
          title: "Housing in the Netherlands",
          description: "National renting context — contracts, registration, and search realism.",
          link: { href: R.housingHub },
        },
        {
          title: "Moving to the Netherlands",
          description: "How city choice sits inside visas, timelines, and arrival tasks.",
          link: { href: R.movingToNl },
        },
      ],
    },
  ],
};

export const citiesFamiliesContinueCards: CitiesBestForExpatsContinueCardConfig[] = [
  {
    id: "compare",
    title: "Run the city comparison tool",
    description: "Hold family finalists in one model: commute, childcare pressure, rent, and lifestyle.",
    link: { href: R.cityComparison },
    ctaLabel: "Open tool",
  },
  {
    id: "best-expats",
    title: "Best cities for expats (wider lens)",
    description: "Overall-fit guide when family is only one of several drivers — work, pace, international feel.",
    link: { href: "/netherlands/cities/best-cities-for-expats/" },
    ctaLabel: "Open guide",
  },
  {
    id: "cheapest",
    title: "Cheapest cities for expats (budget lens)",
    description: "When monthly pressure leads — relative rent, commute totals, and honest value.",
    link: { href: "/netherlands/cities/cheapest-cities-for-expats/" },
    ctaLabel: "Open guide",
  },
  {
    id: "childcare",
    title: "Estimate childcare next to rent",
    description: "Rough childcare bands so shortlists stay honest for two-parent calendars.",
    link: { href: R.childcare },
    ctaLabel: "Childcare tool",
  },
];

export const citiesFamiliesRelatedGuideBlocks: CitiesBestForExpatsRelatedGuideBlocksConfig = [
  {
    title: "Cities pillar",
    links: [
      { label: "Cities hub", href: R.citiesHub },
      { label: "Best cities for expats", href: "/netherlands/cities/best-cities-for-expats/" },
      { label: "Cheapest cities for expats", href: "/netherlands/cities/cheapest-cities-for-expats/" },
      { label: "City comparison tool", href: R.cityComparison },
    ],
  },
  {
    title: "Family & money",
    links: [
      { label: "Childcare cost estimator", href: R.childcare },
      { label: "Cost of living calculator", href: R.costOfLiving },
      { label: "Rent affordability calculator", href: R.rentAffordability },
      { label: "Healthcare allowance estimator", href: R.healthcareAllowance },
    ],
  },
  {
    title: "Housing & services",
    links: [
      { label: "Housing hub", href: R.housingHub },
      { label: "Housing tools hub", href: R.housingToolsHub },
      { label: "Utilities & services comparison", href: R.utilities },
      { label: "Housing platforms directory", href: "/netherlands/services/housing-platforms/" },
    ],
  },
];

export const citiesFamiliesExploreCards: CitiesBestForExpatsExploreCardsConfig = [
  { href: R.citiesHub, title: "Cities hub", description: "Index, comparison table, and every live municipality guide.", meta: "Cities" },
  { href: "/netherlands/cities/best-cities-for-expats/", title: "Best cities for expats", description: "Wider expat shortlist lens — work, lifestyle, international feel.", meta: "Cities" },
  { href: R.housingHub, title: "Housing in the Netherlands", description: "Renting context before you pick streets.", meta: "Housing" },
  { href: R.moneyToolsHub, title: "Money tools", description: "COL, salary net, allowances — same assumptions across cities.", meta: "Money" },
  { href: R.movingToNl, title: "Moving to the Netherlands", description: "Visas, timelines, and how address choice interacts with admin.", meta: "Move" },
  { href: R.toolsHub, title: "Tools hub", description: "All calculators in one place while you juggle finalists.", meta: "Tools" },
];

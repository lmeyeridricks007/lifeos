import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
} from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

/** Tools shell + cross-pillar navigation blobs for the cheapest-cities guide. */
export const citiesCheapestHelpfulTools: CitiesBestForExpatsHelpfulToolsShellConfig = {
  id: "helpful-tools",
  eyebrow: "Tools & journey",
  title: "Tools and related guides",
  subtitle:
    "Validate affordability with the same calculators across finalists — then open city guides for neighbourhood and desk-level detail.",
  sections: [
    {
      eyebrow: "Compare & budget",
      description: "Quantify monthly pressure before you chase listings.",
      items: [
        { title: "Cost of living calculator", description: "Monthly bands by city and household — planning ranges, not quotes.", link: { href: R.costOfLiving } },
        { title: "Rent affordability calculator", description: "Affordable rent bracket from income and obligations — landlord rules are separate.", link: { href: R.rentAffordability } },
        { title: "City comparison tool", description: "Hold 2–4 cities in one model: costs, commute pain, family, lifestyle.", link: { href: R.cityComparison } },
        { title: "Utilities & services comparison", description: "Energy, broadband, and household lines that shift by housing type.", link: { href: R.utilities } },
      ],
    },
    {
      eyebrow: "Family & benefits",
      description: "When kids or allowances change what “affordable” means.",
      items: [
        { title: "Childcare cost estimator", description: "Rough childcare pressure next to rent for family shortlists.", link: { href: R.childcare } },
        { title: "Healthcare allowance estimator", description: "Model toeslag sensitivity as rent and income move.", link: { href: R.healthcareAllowance } },
      ],
    },
    {
      eyebrow: "Guides (Cities · Housing · Move · Money)",
      items: [
        { title: "Best cities for expats", description: "The wider decision guide — not only affordability.", link: { href: "/netherlands/cities/best-cities-for-expats/" } },
        { title: "Cities hub", description: "All live municipality guides and the comparison table.", link: { href: R.citiesHub } },
        { title: "Housing in the Netherlands", description: "National renting context before you pick streets.", link: { href: R.housingHub } },
        { title: "Moving to the Netherlands", description: "How city choice sits inside visas, timelines, and arrival tasks.", link: { href: R.movingToNl } },
        { title: "Money tools hub", description: "Salary, allowances, and budgeting tools in one place.", link: { href: R.moneyToolsHub } },
        { title: "After arriving", description: "BSN, insurance, banking — applies in every municipality.", link: { href: R.afterArriving } },
      ],
    },
  ],
};

export const citiesCheapestContinueCards: CitiesBestForExpatsContinueCardConfig[] = [
  {
    id: "compare-tool",
    title: "Run the city comparison tool",
    description: "Keep finalists in one model so rent, commute, and lifestyle trade-offs stay honest.",
    link: { href: R.cityComparison },
    ctaLabel: "Open tool",
  },
  {
    id: "best-cities",
    title: "Paired guide: Best cities for expats",
    description: "The overall-fit lens — work, family, lifestyle — before you let rent be the only story.",
    link: { href: "/netherlands/cities/best-cities-for-expats/" },
    ctaLabel: "Best cities guide",
  },
  {
    id: "hub",
    title: "Browse all city guides",
    description: "Open the cities hub for the comparison table and every live municipality guide.",
    link: { href: R.citiesHub },
    ctaLabel: "Cities hub",
  },
  {
    id: "rent-calc",
    title: "Size rent on the same income sheet",
    description: "Pair headline rent with landlord norms and move-in cash before you fall in love with a listing.",
    link: { href: R.rentAffordability },
    ctaLabel: "Rent calculator",
  },
];

export const citiesCheapestRelatedGuideBlocks: CitiesBestForExpatsRelatedGuideBlocksConfig = [
  {
    title: "Affordability & cities",
    links: [
      { label: "Best cities for expats (full guide)", href: "/netherlands/cities/best-cities-for-expats/" },
      { label: "Best Dutch cities for families", href: "/netherlands/cities/best-cities-for-families/" },
      { label: "Cities hub", href: R.citiesHub },
      { label: "City comparison tool", href: R.cityComparison },
      { label: "Cost of living calculator", href: R.costOfLiving },
      { label: "Rent affordability calculator", href: R.rentAffordability },
    ],
  },
  {
    title: "Housing & services",
    links: [
      { label: "Housing hub", href: R.housingHub },
      { label: "Housing tools hub", href: R.housingToolsHub },
      { label: "Utilities & services comparison", href: R.utilities },
      { label: "Housing platforms directory", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies directory", href: "/netherlands/services/rental-agencies/" },
    ],
  },
  {
    title: "Move & setup",
    links: [
      { label: "Moving to the Netherlands", href: R.movingToNl },
      { label: "Moving checklist", href: R.movingChecklist },
      { label: "Municipality registration", href: R.municipalityRegistration },
      { label: "Document readiness checker", href: R.documentReadiness },
    ],
  },
];

export const citiesCheapestExploreCards: CitiesBestForExpatsExploreCardsConfig = [
  { href: R.citiesHub, title: "Cities hub", description: "Return to the index, comparison table, and every live municipality guide.", meta: "Cities" },
  { href: "/netherlands/cities/best-cities-for-expats/", title: "Best cities for expats", description: "The wider shortlist guide when affordability is only one lens.", meta: "Cities" },
  { href: R.housingHub, title: "Housing in the Netherlands", description: "National renting context — contracts, registration, search realism.", meta: "Housing" },
  { href: R.moneyToolsHub, title: "Money tools", description: "Cost of living, salary net, and allowance tools on shared assumptions.", meta: "Money" },
  { href: R.movingToNl, title: "Moving to the Netherlands", description: "Visas, timelines, and how address choice interacts with admin.", meta: "Move" },
  { href: R.toolsHub, title: "Tools hub", description: "All calculators in one place while you juggle city and budget decisions.", meta: "Tools" },
];

import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
} from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

const PROFESSIONALS_PATH = "/netherlands/cities/best-cities-for-international-professionals/" as const;

export const citiesIntlProfHelpfulTools: CitiesBestForExpatsHelpfulToolsShellConfig = {
  id: "helpful-tools",
  eyebrow: "Tools & journey",
  title: "Tools and guides that matter for career-led city choice",
  subtitle:
    "Why these tools: professionals leak money when they optimise gross salary but ignore net pay, rent, commute, and ruling eligibility. Run the same assumptions on every finalist city.",
  sections: [
    {
      eyebrow: "Salary & tax",
      description: "Align take-home before you argue about neighbourhoods.",
      items: [
        {
          title: "Dutch salary (net) calculator",
          description: "Why: translate offers into monthly spendable income — compare cities honestly.",
          link: { href: R.dutchSalaryNetCalculator },
        },
        {
          title: "30% ruling calculator",
          description: "Why: eligibility changes take-home — do not compare gross headlines blindly.",
          link: { href: R.thirtyPercentRulingCalculator },
        },
      ],
    },
    {
      eyebrow: "Compare & budget",
      description: "Hold 2–4 cities in one model — then argue about commute and rent, not vibes.",
      items: [
        {
          title: "City comparison tool",
          description: "Why: commute + cost + lifestyle sliders expose “pretty city” traps before you sign.",
          link: { href: R.cityComparison },
        },
        {
          title: "Cost of living calculator",
          description: "Why: monthly bands by household — keep groceries, transport, and energy consistent across cities.",
          link: { href: R.costOfLiving },
        },
        {
          title: "Rent affordability calculator",
          description: "Why: anchors max rent from income + obligations — pairs with net salary outputs.",
          link: { href: R.rentAffordability },
        },
        {
          title: "Utilities & services comparison",
          description: "Why: housing type shifts energy and broadband — totals follow the lease you can actually get.",
          link: { href: R.utilities },
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
          title: "Working in the Netherlands",
          description: "Contracts, culture, and realistic workplace rhythms after you choose a base.",
          link: { href: R.workingNl },
        },
        {
          title: "Moving to the Netherlands",
          description: "Visas, timelines, and how address choice interacts with arrival admin.",
          link: { href: R.movingToNl },
        },
      ],
    },
  ],
};

export const citiesIntlProfContinueCards: CitiesBestForExpatsContinueCardConfig[] = [
  {
    id: "compare",
    title: "Run the city comparison tool",
    description: "Hold career finalists in one model: commute, cost pressure, and lifestyle sliders.",
    link: { href: R.cityComparison },
    ctaLabel: "Open tool",
  },
  {
    id: "best-expats",
    title: "Best cities for expats (wider lens)",
    description: "Overall-fit guide when family or non-career factors weigh as much as salary.",
    link: { href: "/netherlands/cities/best-cities-for-expats/" },
    ctaLabel: "Open guide",
  },
  {
    id: "families",
    title: "Best Dutch cities for families",
    description: "When schools and childcare become co-equal constraints with your commute.",
    link: { href: "/netherlands/cities/best-cities-for-families/" },
    ctaLabel: "Open guide",
  },
  {
    id: "cheapest",
    title: "Cheapest cities for expats",
    description: "When monthly pressure leads — relative rent and commute totals on the same toolkit.",
    link: { href: "/netherlands/cities/cheapest-cities-for-expats/" },
    ctaLabel: "Open guide",
  },
];

export const citiesIntlProfRelatedGuideBlocks: CitiesBestForExpatsRelatedGuideBlocksConfig = [
  {
    title: "Cities pillar",
    links: [
      { label: "Cities hub", href: R.citiesHub },
      { label: "Best cities for expats", href: "/netherlands/cities/best-cities-for-expats/" },
      { label: "Best Dutch cities for families", href: "/netherlands/cities/best-cities-for-families/" },
      { label: "Cheapest cities for expats", href: "/netherlands/cities/cheapest-cities-for-expats/" },
      { label: "City comparison tool", href: R.cityComparison },
    ],
  },
  {
    title: "Career & money",
    links: [
      { label: "Dutch salary (net) calculator", href: R.dutchSalaryNetCalculator },
      { label: "30% ruling calculator", href: R.thirtyPercentRulingCalculator },
      { label: "Cost of living calculator", href: R.costOfLiving },
      { label: "Rent affordability calculator", href: R.rentAffordability },
    ],
  },
  {
    title: "Housing & services",
    links: [
      { label: "Housing hub", href: R.housingHub },
      { label: "Utilities & services comparison", href: R.utilities },
      { label: "Housing platforms directory", href: "/netherlands/services/housing-platforms/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
    ],
  },
];

export const citiesIntlProfExploreCards: CitiesBestForExpatsExploreCardsConfig = [
  { href: R.citiesHub, title: "Cities hub", description: "Index, comparison table, and every live municipality guide.", meta: "Cities" },
  { href: "/netherlands/cities/best-cities-for-expats/", title: "Best cities for expats", description: "Wider shortlist lens — lifestyle + work beyond career-only framing.", meta: "Cities" },
  { href: PROFESSIONALS_PATH, title: "International professionals (this lens)", description: "Career-first framing — job markets, net pay, commute, lifestyle trade-offs.", meta: "Cities" },
  { href: R.housingHub, title: "Housing in the Netherlands", description: "Renting context before you pick streets.", meta: "Housing" },
  { href: R.moneyToolsHub, title: "Money tools", description: "COL, salary net, allowances — same assumptions across cities.", meta: "Money" },
  { href: R.movingToNl, title: "Moving to the Netherlands", description: "Visas, timelines, and how address choice interacts with admin.", meta: "Move" },
  { href: R.toolsHub, title: "Tools hub", description: "All calculators in one place while you juggle finalists.", meta: "Tools" },
];

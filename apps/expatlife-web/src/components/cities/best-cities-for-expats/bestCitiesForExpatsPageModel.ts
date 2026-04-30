import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { CHOOSE_YOUR_CITY_LENS_SECTION_ID, CITIES_LENS_HERO_TOOL_STRIP } from "../shared/citiesDecisionFunnel";
import type { BestCitiesLevel } from "./config/citiesBestForExpats.types";
import {
  citiesBestForExpatsCityCards,
  citiesBestForExpatsContinueCards,
  citiesBestForExpatsFaq,
  citiesBestForExpatsMisunderstandings,
  citiesBestForExpatsProfileCards,
  citiesBestForExpatsReferences,
  citiesBestForExpatsRelatedGuideBlocks,
  citiesBestForExpatsRecommendedServices,
  citiesBestForExpatsScenarios,
  citiesBestForExpatsStartCards,
  citiesBestForExpatsTradeoffs,
  mapCityCardToViewModel,
  mapContinueCardToViewModel,
  mapProfileCardToViewModel,
  mapScenarioToViewModel,
  mapStartCardToViewModel,
} from "./config";

export const BEST_CITIES_FOR_EXPATS_PATH = "/netherlands/cities/best-cities-for-expats/" as const;

export type {
  BestCitiesComparisonCity,
  BestCitiesLevel,
  BestCitiesProfileCard,
  BestCitiesProfileCardAccent,
  BestCitiesScenario,
  BestCitiesStartHereCard,
  CitiesBestForExpatsStartIconKey as BestCitiesStartHereIconKey,
} from "./config/citiesBestForExpats.types";

export const bestCitiesForExpatsPageModel = {
  path: BEST_CITIES_FOR_EXPATS_PATH,
  publishDate: "2026-04-10",

  seo: {
    title: "Best Cities in the Netherlands for Expats | ExpatCopilot",
    description:
      "Shortlist Dutch cities for expat life: trade-offs, scenarios, and links to comparison tools and city guides — practical, not a generic ranking.",
    keywords: [
      "best cities netherlands expats",
      "best dutch cities for expats",
      "where should expats live in netherlands",
      "best city netherlands for families expats",
      "compare dutch cities expat guide",
    ],
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: `#${CHOOSE_YOUR_CITY_LENS_SECTION_ID}`, label: "Choose lens" },
    { href: "#start-here", label: "Start here" },
    { href: "#top-city-options", label: "Top city options" },
    { href: "#best-by-scenario", label: "Best by scenario" },
    { href: "#real-trade-offs", label: "Real trade-offs" },
    { href: "#recommended-services", label: "Recommended services" },
    { href: "#city-profiles", label: "City profiles" },
    { href: "#common-mistakes", label: "Common mistakes" },
    { href: "#what-next", label: "What to do next" },
    { href: "#related-guides-cross-pillar", label: "Related guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Cities",
    pageTitle: "Best Cities in the Netherlands for Expats",
    subtitle:
      "Build a realistic shortlist: match cities to your job, budget, family stage, and commute, then open the comparison tool and city guides — not a one-size-fits-all ranking.",
    contextChips: ["Shortlist", "Trade-offs", "Tools", "Guides"],
    bullets: [
      "Scan major options by scenario — work, affordability, family, lifestyle",
      "See rent, commute, international feel, and family fit at a glance",
      "Run calculators on 2–4 finalists, then deep-dive the city pages that matter",
    ],
    primaryCta: { label: "Start comparing cities", href: "#start-here" },
    secondaryCta: { label: "See the best city by scenario", href: "#best-by-scenario" },
    heroToolStrip: [...CITIES_LENS_HERO_TOOL_STRIP],
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Decision support for where to live — not a leaderboard or travel brochure.",
    cells: [
      {
        title: "What this page is for",
        body: "Shortlist Dutch cities using commute, rent, family fit, and lifestyle — before you chase listings.",
      },
      {
        title: "Best for",
        body: "Anyone choosing a base city: professionals, couples, families, students, and remote/hybrid workers.",
      },
      {
        title: "What it covers",
        body: "Trade-offs between major hubs and strong smaller cities, plus what to open next on ExpatCopilot.",
      },
      {
        title: "What it skips",
        body: "Live rents, legal advice, and tourist highlights. Use tools + city guides for numbers and local detail.",
      },
    ],
    note:
      "No single city wins for everyone. This page helps you narrow fairly and move on — calculators and municipality guides stay useful even while your address is still open.",
  },

  startHere: {
    id: "start-here",
    eyebrow: "Decision lens",
    title: "Start here: how to choose the right city",
    subtitle:
      "Pick one lens that matches your biggest pressure. Skim the others later — most mistakes come from optimising the wrong variable first.",
    cards: citiesBestForExpatsStartCards.map(mapStartCardToViewModel),
  },

  topCities: {
    id: "top-city-options",
    eyebrow: "Curated options",
    title: "Strong city options for expats",
    subtitle:
      "Frequent picks, not a ranking — open the guide for neighbourhoods, rent context, and setup when a city fits your situation.",
    cities: citiesBestForExpatsCityCards.map(mapCityCardToViewModel),
  },

  scenarios: {
    id: "best-by-scenario",
    eyebrow: "Match your situation",
    title: "Best cities by expat type / scenario",
    subtitle:
      "Hypotheses to test — office postcode and housing luck beat any “best city” label. Use picks as shortlist seeds, not a ranking.",
    items: citiesBestForExpatsScenarios.map(mapScenarioToViewModel),
  },

  tradeOffs: {
    id: "real-trade-offs",
    eyebrow: "Reality check",
    title: "Real trade-offs: cost, commute, lifestyle, and international feel",
    subtitle:
      "Bad picks usually come from one metric (rent, Instagram, or a single visit) instead of weekly life.",
    blocks: citiesBestForExpatsTradeoffs.map((b) => ({ id: b.id, title: b.title, body: b.body })),
  },

  profiles: {
    id: "city-profiles",
    eyebrow: "Shortlist",
    title: "Short city profiles / decision cards",
    subtitle:
      "Personality + watch-outs in one skim — pair with the comparison grid when you are down to a few names (guides vary in depth; links still help).",
    cards: citiesBestForExpatsProfileCards.map(mapProfileCardToViewModel),
  },

  mistakes: {
    id: "common-mistakes",
    eyebrow: "Avoid the traps",
    title: "What people often get wrong when choosing a city",
    rows: citiesBestForExpatsMisunderstandings.map((m) => ({ id: m.id, title: m.title, body: m.body })),
  },

  whatNext: {
    id: "what-next",
    eyebrow: "Practical sequence",
    title: "How to use this page and what to do next",
    subtitle:
      "Goal: a defensible shortlist + one next action — not a perfect city in one sitting.",
    steps: [
      { title: "Pick one priority lens first", body: "Work, budget, family, or lifestyle — read that Start-here card before the rest." },
      { title: "Hold 2–4 cities only", body: "More than four is noise; fewer than two skips real comparison." },
      { title: "Run rent + cost of living on the same sheet", body: "Same household, income band, commute — then argue aesthetics." },
      { title: "Open finalists’ guides (or national hubs)", body: "Neighbourhoods and desk detail live on city pages; national guides fill gaps if a page is thin." },
      { title: "Stress-test commute + school + budget weekly", body: "If it only works in ideal weeks, flag it before you sign." },
      { title: "Proceed with a default city bias", body: "You can move later — BSN, insurance, and address are easier with a clear working assumption." },
    ],
  },

  affiliatePlacementId: citiesBestForExpatsRecommendedServices.affiliatePlacementId,
  serviceCategoryLinks: [...citiesBestForExpatsRecommendedServices.serviceCategoryLinks],

  relatedGuidesCrossPillar: [...citiesBestForExpatsRelatedGuideBlocks],

  continueCards: citiesBestForExpatsContinueCards.map(mapContinueCardToViewModel),

  faq: [...citiesBestForExpatsFaq],

  references: citiesBestForExpatsReferences,
};

export function levelLabel(level: BestCitiesLevel): string {
  switch (level) {
    case "high":
      return "Higher";
    case "medium":
      return "Moderate";
    case "mixed":
      return "Mixed";
    case "lower":
      return "Lower";
    default:
      return level;
  }
}

/** Steps used on shortlist cards to compare cities on the same guide (editorial scale, not live data). */
export const SHORTLIST_LEVEL_STEPS = 4 as const;

export function shortlistLevelScore(level: BestCitiesLevel): number {
  switch (level) {
    case "high":
      return 4;
    case "medium":
      return 3;
    case "mixed":
      return 2;
    case "lower":
      return 1;
    default:
      return 2;
  }
}

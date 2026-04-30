import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { CHOOSE_YOUR_CITY_LENS_SECTION_ID, CITIES_LENS_HERO_TOOL_STRIP } from "../shared/citiesDecisionFunnel";
import { mapContinueCardToViewModel, mapScenarioToViewModel } from "../best-cities-for-expats/config";
import { citiesBestForExpatsReferences } from "../best-cities-for-expats/config/citiesBestForExpatsReferences.config";
import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";
import {
  citiesCheapestAffiliateBlocks,
  citiesCheapestCityCards,
  citiesCheapestContinueCards,
  citiesCheapestFaq,
  citiesCheapestMistakes,
  citiesCheapestRelatedGuideBlocks,
  citiesCheapestScenarios,
  citiesCheapestStartCards,
  citiesCheapestTradeoffs,
  citiesCheapestValueArchetypes,
  mapCheapestCityCardToShortlistVm,
  mapCheapestCityCardsToProfileViewModels,
} from "./config/cheapestCitiesForExpats.content.config";

export const CHEAPEST_CITIES_FOR_EXPATS_PATH = "/netherlands/cities/cheapest-cities-for-expats/" as const;

export type { CheapestShortlistCityVm } from "./config/citiesCheapest.mappers";

export const cheapestCitiesForExpatsPageModel = {
  path: CHEAPEST_CITIES_FOR_EXPATS_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Cheapest Cities in the Netherlands for Expats | ExpatCopilot",
    description:
      "Plain-language guide to affordable Dutch cities: what “cheaper” really means next to Amsterdam, the trade-offs (travel, jobs, pace), simple city snapshots, and calculators to check your own numbers — not a ranked list or live rent site.",
    keywords: [
      "cheapest cities netherlands expats",
      "affordable dutch cities",
      "cheapest places to live netherlands",
      "low cost cities netherlands expats",
      "affordable cities netherlands rent",
    ],
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: `#${CHOOSE_YOUR_CITY_LENS_SECTION_ID}`, label: "Choose lens" },
    { href: "#best-vs-cheapest", label: "Best vs Cheapest" },
    { href: "#what-cheap-means", label: "What “cheap” means" },
    { href: "#true-monthly-cost", label: "True monthly cost" },
    { href: "#cheapest-city-options", label: "City options" },
    { href: "#best-cheap-by-scenario", label: "By scenario" },
    { href: "#cost-vs-tradeoffs", label: "Cost vs trade-offs" },
    { href: "#value-vs-cheapest", label: "Value vs cheapest" },
    { href: "#city-profiles", label: "City profiles" },
    { href: "#common-mistakes", label: "Common mistakes" },
    { href: "#what-next", label: "How to choose" },
    { href: "#recommended-services", label: "Recommended services" },
    { href: "#related-guides-cross-pillar", label: "Related guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Cities",
    pageTitle: "Cheapest Cities in the Netherlands for Expats",
    subtitle:
      "Where rent is often easier on the wallet than in Amsterdam, what you usually give up (travel time, job choice, pace of life), and simple next steps to check your own numbers.",
    contextChips: ["Expat-friendly", "Not a ranking", "Use the tools", "Netherlands context"],
    trustPills: ["Not a ranking", "Based on how expats plan", "Not live rental prices"],
    bullets: [
      "Pick a few cities where rent looks kinder — then check travel to work and whether jobs exist for you.",
      "Learn what “cheaper” means here (usually next to Amsterdam or Utrecht, not “cheap like somewhere else in the world”).",
      "Use the same calculators on every city you like before you book lots of flat visits.",
    ],
    primaryCta: { label: "See city options", href: "#cheapest-city-options" },
    secondaryCta: { label: "Rent and travel: the trade-offs", href: "#cost-vs-tradeoffs" },
    heroToolStrip: [...CITIES_LENS_HERO_TOOL_STRIP],
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "A quick read — not a scoreboard and not a rent prediction tool.",
    cells: [
      {
        title: "What this page is for",
        body: "Help you narrow down Dutch cities that feel more affordable — using rent, travel to work, and day-to-day fit — then open our tools and city guides.",
      },
      {
        title: "Best for",
        body: "People who put budget first, families who need more space, and remote or hybrid workers who can live a bit farther from the office.",
      },
      {
        title: "What it covers",
        body: "Typical cost patterns, honest trade-offs, simple “if you are like this…” examples, and links to ExpatCopilot calculators and guides.",
      },
      {
        title: "What it skips",
        body: "Live rental ads, promises of a cheap flat, and legal advice — you still need the market, landlords, and professionals for that.",
      },
    ],
    note:
      "👉 Here “cheaper” usually means less painful rent than in the busiest part of the west — not “cheap everywhere in the world.” Not a ranking; it reflects how many expats plan, not official stats.",
  },

  pairedGuidesComparison: {
    id: "best-vs-cheapest",
    eyebrow: "Paired city guides",
    title: "Best vs Cheapest — how to use both",
    lead:
      "This guide = money focus. Best cities for expats = wider life fit. Use both on the same few cities so rent does not push you into a place that is wrong for work (or the other way around).",
    bestLens: {
      title: "Best cities for expats — overall fit",
      body:
        "Use when life picture leads: work field, schools, pace, and community — then check whether money and travel still work once rent is realistic.",
      href: "/netherlands/cities/best-cities-for-expats/",
      ctaLabel: "See Best Cities",
    },
    cheapestLens: {
      title: "Cheapest cities for expats — money focus",
      body:
        "You are on the money side: what “cheaper” means in the Netherlands, what cheaper cities often ask you to accept, and how to check the full monthly picture before you sign.",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      ctaLabel: "Stay on this guide",
    },
  },

  whatCheapMeans: {
    id: "what-cheap-means",
    eyebrow: "Definitions",
    title: "Start here: what “cheap” actually means in the Netherlands",
    subtitle:
      "The Netherlands is pricey overall. Here “cheaper” means a bit of breathing room, usually on rent, compared with the busiest western cities.",
    lead:
      "Rent is the first number people feel. Travel to work can eat the savings. Day-to-day happiness still decides if you stay — think about all three before you sign.",
    cards: citiesCheapestStartCards,
  },

  trueMonthlyCost: {
    id: "true-monthly-cost",
    eyebrow: "Plan with care",
    title: "What a month really costs",
    subtitle:
      "Rent on the ad is only one line — not the whole story. A good shortlist adds travel, bills, and how you want to live before you call a place “cheap.”",
    lead:
      "Cheaper rent only helps if travel, bills, and daily life still feel okay for you.",
    equationHint: "Rent + travel + bills + lifestyle ≈ what the month really feels like (for planning — not a quote).",
    example: { rentDiff: 300, commuteCost: 200, netImpact: 100 } as const,
    footnote:
      "Example only — your numbers depend on tickets, home type, and energy prices that year.",
    bullets: [
      "Bills follow what you rent and the year’s energy prices — compare once you know the home.",
      "A bad lifestyle fit often shows up as extra trips or exhaustion — picture one honest month.",
    ],
  },

  shortlist: {
    id: "cheapest-city-options",
    eyebrow: "Realistic shortlist",
    title: "City options to try in your numbers",
    subtitle:
      "Ideas to try, not promises — not a ranking. Each card: rough rent band, who it suits, trade-offs, then open the city guide or comparison tool.",
    scanHint: "Based on how many expats plan — check everything against your office, lease, and household.",
    cities: citiesCheapestCityCards.map(mapCheapestCityCardToShortlistVm),
  },

  scenarios: {
    id: "best-cheap-by-scenario",
    eyebrow: "Match your situation",
    title: "Best cheaper cities by scenario",
    subtitle:
      "Starting ideas — your office address, partner’s job, and what is on the market still matter more than any label. Use two or three cities per story as a start, then use the tools.",
    items: citiesCheapestScenarios.map(mapScenarioToViewModel),
  },

  costVsTradeoffs: {
    id: "cost-vs-tradeoffs",
    eyebrow: "Reality check",
    title: "Cost vs trade-offs",
    subtitle:
      "Cheaper places often win on headline rent — then you pay in travel time, fewer job choices, smaller international circles, or a quieter pace. This section says that plainly.",
    blocks: citiesCheapestTradeoffs.map((b) => ({ id: b.id, title: b.title, body: b.body })),
  },

  valueVsCheapest: {
    id: "value-vs-cheapest",
    eyebrow: "Very important",
    title: "Value vs cheapest",
    subtitle:
      "👉 The cheapest city is not always the best deal for you. Some pricier cities give back time, calmer travel, or a nicer day-to-day — add up totals, not slogans.",
    cards: citiesCheapestValueArchetypes,
  },

  profiles: {
    id: "city-profiles",
    eyebrow: "Shortlist",
    title: "Short city profiles (decision cards)",
    subtitle: "One quick read per city — use the comparison tool when you are down to a few finalists.",
    cards: mapCheapestCityCardsToProfileViewModels(citiesCheapestCityCards),
  },

  mistakes: {
    id: "common-mistakes",
    eyebrow: "Avoid the traps",
    title: "What people get wrong about “cheap cities”",
    rows: citiesCheapestMistakes.map((m) => ({ id: m.id, title: m.title, body: m.body })),
  },

  whatNext: {
    id: "what-next",
    eyebrow: "Next steps",
    title: "How to choose properly",
    subtitle: "A simple order of steps — aim for a few finalist cities and one pass through the calculators, not endless scrolling.",
    steps: [
      { title: "Pick 2–4 cities", body: "Mix one hopeful rent story with one careful travel-to-work option so the numbers can speak." },
      { title: "Run rent + cost of living together", body: "Same income, household, and bills — then add energy and extras once you know the home type." },
      { title: "Picture busy weeks", body: "Include rush hour, not only a quiet Tuesday. With kids, add school + daycare pickup days." },
      { title: "Check day-to-day fit honestly", body: "Language, friends, pace — cheap rent in the wrong place often means a second move." },
      { title: "Compare full monthly cost", body: "Rent + travel + time + fixed bills — use the same rules for every city." },
    ],
  },

  affiliatePlacementId: citiesCheapestAffiliateBlocks.placementId,
  serviceCategoryLinks: [...citiesCheapestAffiliateBlocks.categoryLinks],

  recommendedServices: {
    ...citiesCheapestAffiliateBlocks.sectionCopy,
    browseLabel: citiesCheapestAffiliateBlocks.browseLabel,
  },

  relatedGuidesCrossPillar: [...citiesCheapestRelatedGuideBlocks],

  continueCards: citiesCheapestContinueCards.map(mapContinueCardToViewModel),

  faq: [...citiesCheapestFaq],

  references: citiesBestForExpatsReferences,
};

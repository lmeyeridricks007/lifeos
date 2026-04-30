import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { CHOOSE_YOUR_CITY_LENS_SECTION_ID, CITIES_LENS_HERO_TOOL_STRIP } from "../shared/citiesDecisionFunnel";
import {
  mapContinueCardToViewModel,
  mapProfileCardToViewModel,
  mapScenarioToViewModel,
  mapStartCardToViewModel,
} from "../best-cities-for-expats/config";
import { citiesBestForExpatsReferences } from "../best-cities-for-expats/config/citiesBestForExpatsReferences.config";
import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";
import type { FamilyCostBreakdownModel } from "./FamilyCostBreakdown";
import {
  citiesFamiliesContinueCards,
  citiesFamiliesDayInLife,
  citiesFamiliesFaq,
  citiesFamiliesMistakes,
  citiesFamiliesProfileCards,
  citiesFamiliesRecommendedServices,
  citiesFamiliesRelatedGuideBlocks,
  citiesFamiliesScenarios,
  citiesFamiliesShortlistContext,
  citiesFamiliesShortlistTier1,
  citiesFamiliesShortlistTier2,
  citiesFamiliesStartCards,
  citiesFamiliesTradeoffs,
  type FamiliesCityTier,
  type FamiliesShortlistCityConfig,
} from "./config";

export const BEST_CITIES_FOR_FAMILIES_PATH = "/netherlands/cities/best-cities-for-families/" as const;

export type FamiliesShortlistCityVm = FamiliesShortlistCityConfig & { tierBadge: string };

function tierBadge(tier: FamiliesCityTier): string {
  switch (tier) {
    case "tier1":
      return "Main picks";
    case "tier2":
      return "Strong backups";
    case "context":
      return "Edge cases";
    default:
      return tier;
  }
}

export function mapFamiliesShortlistCity(c: FamiliesShortlistCityConfig): FamiliesShortlistCityVm {
  return { ...c, tierBadge: tierBadge(c.tier) };
}

export const bestCitiesForFamiliesPageModel = {
  path: BEST_CITIES_FOR_FAMILIES_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Best Dutch Cities for Families | ExpatCopilot",
    description:
      "Practical guide to choosing a Dutch city with kids: housing, childcare, schools, commute, cost, and everyday routines — shortlists, honest trade-offs, and tools to validate your finalists.",
    keywords: [
      "best cities netherlands families",
      "family friendly cities netherlands expats",
      "where to live netherlands with kids",
      "dutch cities for families",
      "netherlands family relocation cities",
    ],
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: `#${CHOOSE_YOUR_CITY_LENS_SECTION_ID}`, label: "Choose lens" },
    { href: "#start-here", label: "What matters" },
    { href: "#real-monthly-family-cost", label: "Real monthly cost" },
    { href: "#family-city-shortlist", label: "Best cities" },
    { href: "#family-scenarios", label: "By scenario" },
    { href: "#family-tradeoffs", label: "Family trade-offs" },
    { href: "#day-in-the-life", label: "Day-in-the-life" },
    { href: "#city-profiles", label: "Decision cards" },
    { href: "#common-mistakes", label: "Common mistakes" },
    { href: "#what-next", label: "How to choose" },
    { href: "#recommended-services", label: "Recommended services" },
    { href: "#related-guides-cross-pillar", label: "Related guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Cities",
    pageTitle: "Best Dutch Cities for Families",
    subtitle:
      "Pick a Dutch city with kids in mind: home, daycare, schools, and work travel. Use the same numbers for each place you compare.",
    contextChips: ["Shortlist", "Tools", "Trade-offs"],
    trustPills: ["Not a ranking", "Based on how expats plan"],
    bullets: [
      "Shortlist 2–4 cities from the stories here — this is not a league table.",
      "Look at daycare, rent, and travel as one week — not one photo on a listing site.",
      "Use the same inputs in guides and calculators before you plan many flat visits.",
    ],
    primaryCta: { label: "Compare cities", href: R.cityComparison },
    secondaryCta: { label: "Browse by scenario", href: "#family-scenarios" },
    heroToolStrip: [...CITIES_LENS_HERO_TOOL_STRIP],
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle:
      "Not a ranking — help choosing where to live with kids, based on how many expat families plan on ExpatCopilot.",
    cells: [
      {
        title: "What this page is for",
        body: "Choosing where to live with children in the Netherlands: real weekly life, daycare, schools, and travel — before you sign a lease.",
      },
      {
        title: "Best for",
        body: "Expat families, movers with little ones or school-age kids, and two-parent households where school runs and pickups matter.",
      },
      {
        title: "What it covers",
        body: "Home and space, daycare and schools, travel and daily rhythm, money, and everyday logistics — with shortlists and tools.",
      },
      {
        title: "What it skips",
        body: "School score tables, live rent listings, and promises — get those from town halls, providers, and professionals.",
      },
    ],
    note:
      "The best city for families is rarely the cheapest. It is the mix of space, travel, daycare, and day-to-day stress that fits your household.",
  },

  startHere: {
    id: "start-here",
    eyebrow: "Start here",
    title: "What actually matters for families",
    subtitle:
      "Four areas families often revisit too late — start where your household has the least slack.",
    cards: citiesFamiliesStartCards.map(mapStartCardToViewModel),
  },

  realMonthlyFamilyCost: {
    id: "real-monthly-family-cost",
    eyebrow: "Money in real life",
    title: "What a family month really costs",
    subtitle:
      "Rent is only part of the story. Childcare, food, travel, insurance, and bills belong in the same monthly picture — especially when two jobs and school runs decide which city works.",
    equationPreamble: "How one example month could add up:",
    spotlightCaption: "Rent, childcare, and travel — the three many people forget to add together",
    fullTableCaption: "Same example household with food, insurance, and household bills",
    lines: [
      { label: "Rent", amountEur: 1800, inSpotlightSubtotal: true },
      { label: "Childcare", amountEur: 1200, inSpotlightSubtotal: true },
      { label: "Groceries", amountEur: 650 },
      { label: "Transport", amountEur: 200, inSpotlightSubtotal: true },
      { label: "Insurance (e.g. health)", amountEur: 280 },
      { label: "Utilities & household", amountEur: 170 },
    ],
    disclaimer:
      "Example amounts for planning — not quotes. Hours in daycare, energy deals, and neighbourhood all move the lines. Use the same assumptions for every city you compare.",
    toolLinks: [
      { href: R.rentAffordability, label: "Rent affordability calculator" },
      { href: R.childcare, label: "Childcare cost estimator" },
      { href: R.costOfLiving, label: "Cost of living calculator" },
    ],
  } satisfies FamilyCostBreakdownModel,

  familyShortlist: {
    id: "family-city-shortlist",
    eyebrow: "Curated shortlist",
    title: "The best cities for families (working shortlist)",
    subtitle:
      "A working shortlist: main picks, strong backups when your situation fits, and a few popular places to check with open eyes — not a ranked list.",
    tierIntros: {
      tier1:
        "Main picks — when travel to work, schools, and daily rhythm need to line up without assuming inner Amsterdam is the only answer.",
      tier2:
        "Strong backups — check partner jobs, school track, and travel before you fall in love with a dot on the map.",
      context:
        "Popular but tricky places many families still choose — go in with eyes open on cost, space, and how much neighbourhoods differ.",
    },
    tier1: citiesFamiliesShortlistTier1.map(mapFamiliesShortlistCity),
    tier2: citiesFamiliesShortlistTier2.map(mapFamiliesShortlistCity),
    context: citiesFamiliesShortlistContext.map(mapFamiliesShortlistCity),
  },

  scenarios: {
    id: "family-scenarios",
    eyebrow: "Match your family",
    title: "Best cities by family scenario",
    subtitle:
      "Starting ideas only. Your office, schools, and what is actually for rent still beat any label. Use these as starters, then run the numbers.",
    items: citiesFamiliesScenarios.map(mapScenarioToViewModel),
  },

  tradeOffs: {
    id: "family-tradeoffs",
    eyebrow: "Reality check",
    title: "Family trade-offs (read this twice)",
    subtitle:
      "Most regret comes from optimising one variable — rent, Instagram, or a single school tour — instead of the weekly calendar.",
    blocks: citiesFamiliesTradeoffs.map((b) => ({ id: b.id, title: b.title, body: b.body })),
  },

  dayInLife: {
    id: "day-in-the-life",
    eyebrow: "Real life",
    title: "A day in the life: what the week really feels like",
    subtitle:
      "Morning, school, work, and evening in three plain examples. The right city should still feel workable in February, not only on a sunny weekend.",
    scenarios: citiesFamiliesDayInLife,
  },

  profiles: {
    id: "city-profiles",
    eyebrow: "Decision cards",
    title: "City profiles at a glance",
    subtitle: "One short read per city, then open the guide and run the tools on the same finalists.",
    cards: citiesFamiliesProfileCards.map(mapProfileCardToViewModel),
  },

  mistakes: {
    id: "common-mistakes",
    eyebrow: "Avoid the traps",
    title: "What families get wrong",
    rows: citiesFamiliesMistakes.map((m) => ({ id: m.id, title: m.title, body: m.body })),
  },

  whatNext: {
    id: "what-next",
    eyebrow: "How to choose",
    title: "How to choose (step-by-step)",
    subtitle: "Aim for 2–4 finalist cities and one pass through the calculators — not endless scrolling.",
    steps: [
      { title: "Pick 2–4 cities", body: "Mix one hopeful option with one careful travel story so the numbers can speak." },
      { title: "Name your top worry", body: "Space, school track, daycare triangle, or two commutes — pick the hardest problem first." },
      { title: "Add up rent + daycare", body: "Same income and household — daycare often decides which neighbourhoods are even possible." },
      { title: "Picture busy weeks", body: "Include rain, sick kids, and rush hour — if it only works in perfect weeks, note that." },
      { title: "Check full monthly cost", body: "Rent + daycare + energy + travel + insurance with the same rules for every city." },
      { title: "Choose on daily life", body: "If costs are close, evenings and parks break ties — cheap rent in the wrong rhythm still means a second move." },
    ],
  },

  affiliatePlacementId: citiesFamiliesRecommendedServices.affiliatePlacementId,
  serviceCategoryLinks: [...citiesFamiliesRecommendedServices.serviceCategoryLinks],

  recommendedServices: {
    eyebrow: "When you are ready for help",
    title: "Recommended services",
    subtitle:
      "Movers, home search, banks, required health insurance, and bills often happen at the same time once you have dates — compare what you get and the fees before you pay big deposits.",
    browseLabel: "Browse for family setup & moving: ",
  },

  relatedGuidesCrossPillar: [...citiesFamiliesRelatedGuideBlocks],

  continueCards: citiesFamiliesContinueCards.map(mapContinueCardToViewModel),

  faq: [...citiesFamiliesFaq],

  references: citiesBestForExpatsReferences,
};

import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { CHOOSE_YOUR_CITY_LENS_SECTION_ID } from "../shared/citiesDecisionFunnel";
import {
  mapContinueCardToViewModel,
  mapProfileCardToViewModel,
  mapScenarioToViewModel,
  mapStartCardToViewModel,
} from "../best-cities-for-expats/config";
import { citiesBestForExpatsReferences } from "../best-cities-for-expats/config/citiesBestForExpatsReferences.config";
import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";
import {
  citiesIntlProfContinueCards,
  citiesIntlProfDayInLife,
  citiesIntlProfProfileCards,
  citiesIntlProfRecommendedServices,
  citiesIntlProfRelatedGuideBlocks,
  citiesIntlProfStartCards,
  citiesIntlProfNetIncomeExamples,
  citiesProfessionalsCities,
  citiesProfessionalsFaq,
  citiesProfessionalsMistakes,
  citiesProfessionalsScenarios,
  citiesProfessionalsTradeoffs,
  type ProfessionalsCityConfig,
  type ProfessionalsCityTier,
} from "./config";

export const BEST_CITIES_FOR_INTL_PROFESSIONALS_PATH =
  "/netherlands/cities/best-cities-for-international-professionals/" as const;

/** View-model for shortlist city cards (config + derived tier label). */
export type ProfessionalsShortlistCityVm = ProfessionalsCityConfig & { tierBadge: string };

function tierBadge(tier: ProfessionalsCityTier): string {
  switch (tier) {
    case "tier1":
      return "Main picks";
    case "tier2":
      return "Also worth a look";
    default:
      return tier;
  }
}

export function mapProfessionalsShortlistCity(c: ProfessionalsCityConfig): ProfessionalsShortlistCityVm {
  return { ...c, tierBadge: tierBadge(c.tier) };
}

export const bestCitiesForInternationalProfessionalsPageModel = {
  path: BEST_CITIES_FOR_INTL_PROFESSIONALS_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Best Dutch Cities for International Professionals | ExpatCopilot",
    description:
      "Plain-language, work-first guide to choosing a Dutch city: where jobs cluster, pay after tax vs rent and travel, lifestyle trade-offs, simple shortlists by field, and calculators to check take-home pay across finalists.",
    keywords: [
      "best cities netherlands professionals",
      "best dutch cities expats jobs",
      "where to live netherlands career",
      "netherlands city choice career",
      "international professionals netherlands cities",
    ],
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: `#${CHOOSE_YOUR_CITY_LENS_SECTION_ID}`, label: "Choose lens" },
    { href: "#start-here", label: "Start here" },
    { href: "#real-income-not-salary", label: "Real income" },
    { href: "#intl-prof-city-shortlist", label: "Best cities" },
    { href: "#intl-prof-scenarios", label: "By career scenario" },
    { href: "#intl-prof-tradeoffs", label: "Work trade-offs" },
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
    pageTitle: "Best Dutch Cities for International Professionals",
    subtitle:
      "Pick a Dutch home for your job: where employers gather, what your pay after tax really covers, and how travel + rent shape the month.",
    /** One scannable line under chips — desktop shows in hero column; keeps title block uncluttered. */
    clarityLead: "Not a league table — a short list + calculators so you compare cities with the same assumptions.",
    contextChips: ["Work-first", "Tools", "Trade-offs"],
    trustPills: ["Not a ranking", "Based on how expats plan"],
    bullets: [
      "Your field and job options — not tourism “best city” lists.",
      "Take-home pay vs rent vs travel before you fall in love with a postcode.",
      "The same calculators on every city you like — the number on the offer letter is not the finish line.",
    ],
    /** Primary conversion actions (exact labels for UX + tracking). */
    conversionTools: [
      { label: "Calculate your net salary", href: R.dutchSalaryNetCalculator },
      { label: "Check rent affordability", href: R.rentAffordability },
      { label: "Compare cities", href: R.cityComparison },
    ],
    primaryCta: { label: "See cities by profession", href: "#intl-prof-scenarios" },
    secondaryCta: { label: "How to choose properly", href: "#what-next" },
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle:
      "Not a ranking — work-led city choice in the Netherlands, based on how many international hires plan on ExpatCopilot.",
    cells: [
      {
        title: "What this page is for",
        body: "Narrow down cities by job fit — openings, take-home vs rent, travel, lifestyle — before a lease.",
      },
      {
        title: "Best for",
        body: "Professionals, people relocating, and job changers who want honest trade-offs, not a generic list.",
      },
      {
        title: "What it covers",
        body: "Job options, pay vs living costs, office-from-home weeks, lifestyle, plus tools with the same inputs.",
      },
      {
        title: "What it skips",
        body: "Exact pay, promises, live rental ads — confirm with employers and recruiters.",
      },
    ],
    note:
      "The best city for your career is not always the highest salary. It is the mix of job options, cost, and daily life that fits how you really work and live.",
  },

  startHere: {
    id: "start-here",
    eyebrow: "Start here",
    title: "How professionals should choose a city",
    subtitle:
      "Four things people often only feel in month three — read the one that would hurt if you ignored it, then skim the rest.",
    cards: citiesIntlProfStartCards.map(mapStartCardToViewModel),
  },

  netIncomeReality: {
    id: "real-income-not-salary",
    eyebrow: "Salary is not the same as spending money",
    title: "Your real spending power is more than the salary line",
    subtitle:
      "Before tax is what offers show first — what is left in your account still has to cover tax, rent, travel, and everything else after payday.",
    intro:
      "In one line: salary − tax − rent − travel ≈ what you really live on — then add insurance, food, and savings. The same salary can feel easy or tight depending on postcode and travel, not vibes.",
    examples: citiesIntlProfNetIncomeExamples,
  },

  intlProfShortlist: {
    id: "intl-prof-city-shortlist",
    eyebrow: "Curated shortlist",
    title: "Best cities for international professionals (working shortlist)",
    subtitle:
      "Working shortlist — main picks with lots of employers in big sectors, also worth a look when your field and travel fit — not a ranked list.",
    tierIntros: {
      tier1:
        "Most job depth — finance, tech, big companies, international orgs, and logistics where interviews and clients are easier to reach — with honest rent and pace trade-offs.",
      tier2:
        "Strong backups when you want calm, space, or home office weeks — check partner job options and rush-hour direction before you commit emotionally.",
    },
    tier1: citiesProfessionalsCities.tier1.map(mapProfessionalsShortlistCity),
    tier2: citiesProfessionalsCities.tier2.map(mapProfessionalsShortlistCity),
  },

  scenarios: {
    id: "intl-prof-scenarios",
    eyebrow: "Match your career",
    title: "Best cities by career scenario",
    subtitle:
      "Starting ideas — office address, luck in your field, and honest office-from-home days still beat any label. Use picks as starters, then model take-home + rent + travel.",
    items: citiesProfessionalsScenarios.map(mapScenarioToViewModel),
  },

  tradeOffs: {
    id: "intl-prof-tradeoffs",
    eyebrow: "Reality check",
    title: "Work trade-offs (read this twice)",
    subtitle:
      "Most regret comes from chasing one number — salary before tax, photos, or one recruiter call — instead of the monthly calendar and what is left in your account.",
    blocks: citiesProfessionalsTradeoffs.map((b) => ({ id: b.id, title: b.title, body: b.body })),
  },

  dayInLife: {
    id: "day-in-the-life",
    eyebrow: "Real life",
    title: "A day in the life: work rhythms",
    subtitle:
      "Morning, work, travel, and evening in three plain examples. The right city should still feel workable in February, not only on a sunny weekend.",
    scenarios: citiesIntlProfDayInLife,
  },

  profiles: {
    id: "city-profiles",
    eyebrow: "Decision cards",
    title: "City profiles at a glance",
    subtitle: "One short read per city, then open the guide and run the tools on the same finalists.",
    cards: citiesIntlProfProfileCards.map(mapProfileCardToViewModel),
  },

  mistakes: {
    id: "common-mistakes",
    eyebrow: "Avoid the traps",
    title: "What professionals get wrong",
    rows: citiesProfessionalsMistakes.map((m) => ({ id: m.id, title: m.title, body: m.body })),
  },

  whatNext: {
    id: "what-next",
    eyebrow: "How to choose",
    title: "How to choose properly",
    subtitle: "Aim for 2–4 finalist cities and one pass through the calculators — not endless scrolling.",
    steps: [
      { title: "Pick 2–4 cities", body: "Mix one big-job hub with one calmer option so the numbers can speak honestly." },
      { title: "Name your top work worry", body: "How many employers in your field, where clients are, fixed office days, or partner’s job market — pick the hardest problem first." },
      { title: "Compare pay vs cost", body: "Take-home + rent + travel with the same assumptions — salary before tax means little if rent eats the gain." },
      { title: "Picture travel weeks", body: "Include delays, rush hour, and bad months — not only the ideal Tuesday." },
      { title: "Work out take-home pay", body: "Run Dutch salary net and 30% ruling (if it applies) before you fall in love with a lease." },
      { title: "Choose on life + work", body: "If costs are close, evenings, people you know, and rest break ties — cheap rent in the wrong rhythm still means a second move." },
    ],
  },

  affiliatePlacementId: citiesIntlProfRecommendedServices.affiliatePlacementId,
  serviceCategoryLinks: [...citiesIntlProfRecommendedServices.serviceCategoryLinks],

  recommendedServices: {
    eyebrow: "When you are ready for help",
    title: "Recommended services",
    subtitle:
      "Movers, home search, banks, required health insurance, and bills often happen at the same time once you have start dates — compare what you get and the fees before big deposits.",
    browseLabel: "Browse for career move & Dutch setup: ",
  },

  relatedGuidesCrossPillar: [...citiesIntlProfRelatedGuideBlocks],

  continueCards: citiesIntlProfContinueCards.map(mapContinueCardToViewModel),

  faq: [...citiesProfessionalsFaq],

  references: citiesBestForExpatsReferences,
};

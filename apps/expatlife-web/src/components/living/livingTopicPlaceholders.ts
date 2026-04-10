import { LIVING_SURVIVAL_GUIDE_PATH } from "@/src/components/living/livingPillarContent";

export type LivingTopicPlaceholderSpec = {
  /** Canonical path with trailing slash */
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  breadcrumbLabel: string;
  intro: string;
  bullets: string[];
  /** Shown as cards; include Survival Guide + tools/guides — all internal paths must be valid. */
  relatedLinks: Array<{ href: string; label: string; description: string }>;
};

const SG = LIVING_SURVIVAL_GUIDE_PATH;

/** Getting around ships as `GettingAroundView` at `/netherlands/living/getting-around/` — no placeholder spec. */
/** Essential apps ships as `EssentialAppsView` at `/netherlands/living/apps/` — no placeholder spec. */

export const LIVING_PLACEHOLDER_DAILY_LIFE: LivingTopicPlaceholderSpec = {
  path: "/netherlands/living/daily-life/",
  metaTitle: "Daily life in the Netherlands | Living",
  metaDescription:
    "Groceries, shop hours, building norms, and weekly rhythms for expats—full Living guide expanding soon.",
  h1: "Daily life in the Netherlands",
  breadcrumbLabel: "Daily life",
  intro:
    "Beyond visas and rent, daily life is a stack of small habits—shops, neighbours, noise, and weekends. We’re expanding this into a proper guide; here’s the outline.",
  bullets: [
    "Supermarkets, markets, Sunday hours, bags, and self-checkout norms",
    "Building rules, stairwells, waste access, and neighbourly expectations",
    "Quiet hours, parties, and how complaints usually flow",
    "Kids, pets, and shared spaces—practical defaults in Dutch housing",
    "How this ties back to utilities, mail, and gemeente rhythms once you’re registered",
  ],
  relatedLinks: [
    { href: SG, label: "Netherlands Survival Guide", description: "Bookmarkable hub for new arrivals." },
    { href: "/netherlands/culture/what-feels-normal-in-dutch-daily-life/", label: "What feels normal in Dutch daily life", description: "Culture pillar companion." },
    { href: "/netherlands/living/utilities/", label: "Utilities in the Netherlands", description: "Energy, water, and setup after move-in." },
    { href: "/netherlands/living/tools/utilities-services-comparison/", label: "Utilities & services comparison", description: "Planning tool for household lines." },
  ],
};

export const LIVING_PLACEHOLDER_LANGUAGE: LivingTopicPlaceholderSpec = {
  path: "/netherlands/living/language/",
  metaTitle: "Language & phrases for life in the Netherlands | Living",
  metaDescription:
    "High-yield Dutch for shops, bike paths, and neighbours—Living guide expanding soon; link to phrase starters and Survival Guide.",
  h1: "Language & phrases for life in the Netherlands",
  breadcrumbLabel: "Language & phrases",
  intro:
    "You can operate in English in many places; a thin layer of Dutch still smooths tills, neighbours, and official tone. This Living page will focus on practical phrases—full write-up in progress.",
  bullets: [
    "Ten phrases that buy goodwill in shops, cafés, and bike interactions",
    "What to expect in English vs Dutch at work, gemeente, and phone menus",
    "Reading official post: when machine translation is enough and when to ask for help",
    "Pronunciation shortcuts and the habits that make practice stick",
    "Links to structured learning when you’re ready to go beyond survival Dutch",
  ],
  relatedLinks: [
    { href: SG, label: "Netherlands Survival Guide", description: "Start here for day-to-day orientation." },
    {
      href: "/netherlands/living/culture-etiquette/",
      label: "Dutch Culture & Etiquette",
      description: "Social norms, directness, and everyday context for language use.",
    },
    { href: "/netherlands/culture/dutch-language-basics/", label: "Dutch language basics (Culture)", description: "Deeper phrase and pattern guide." },
    { href: "/netherlands/living/community-basics/", label: "Community basics (Living)", description: "Neighbours, noise, and building life." },
    { href: "/netherlands/moving-to-the-netherlands/", label: "Moving to the Netherlands", description: "Big-picture relocation context." },
  ],
};

export const LIVING_PLACEHOLDER_WEATHER: LivingTopicPlaceholderSpec = {
  path: "/netherlands/living/weather/",
  metaTitle: "Weather & seasons in the Netherlands | Living",
  metaDescription:
    "Rain, wind, and planning your week in the Netherlands—seasonal guide expanding soon; Survival Guide hub + practical links.",
  h1: "Weather & seasons in the Netherlands",
  breadcrumbLabel: "Weather & seasons",
  intro:
    "Dutch weather rewards layers and flexible plans—not drama. We’re expanding this page with season-by-season notes; until then, use the hub below and the official forecast source.",
  bullets: [
    "What “changeable” actually means for commuting and weekend plans",
    "Gear that earns its closet space (wind, drizzle, and the odd heat spike)",
    "Cycling and OV in bad weather—without pretending you’re training for a triathlon",
    "Holidays, school weeks, and light—how seasons shape social rhythm",
    "Where to check reliable forecasts and warnings (we’ll link official sources in the full guide)",
  ],
  relatedLinks: [
    { href: SG, label: "Netherlands Survival Guide", description: "Overview of daily-life topics." },
    { href: "/netherlands/living/getting-around/", label: "Getting around", description: "OV and bike context for commutes." },
    { href: "/netherlands/tools/city-comparison/", label: "City comparison tool", description: "Coastal vs inland climate-ish trade-offs." },
    { href: "/netherlands/first-30-days-netherlands/", label: "First 30 days", description: "Pack and plan for your first month." },
  ],
};

export const LIVING_PLACEHOLDER_PAYMENTS: LivingTopicPlaceholderSpec = {
  path: "/netherlands/living/payments/",
  metaTitle: "Payments & everyday money in the Netherlands | Living",
  metaDescription:
    "PIN, contactless, iDEAL, and how spending works day to day—Living guide expanding soon; Money tools and Survival Guide.",
  h1: "Payments & everyday money in the Netherlands",
  breadcrumbLabel: "Payments & money basics",
  intro:
    "Before tax deep dives, there’s how tills and apps actually behave—debit-first, contactless everywhere, and iDEAL-shaped habits. We’re building the full page; here’s the roadmap.",
  bullets: [
    "What shops expect at the terminal (and why “credit card culture” feels different)",
    "iDEAL, subscriptions, and rent—how payments connect once you have a Dutch account",
    "Cash, tipping, and split bills—low drama, clear defaults",
    "Safety and scams at a practical level (not fear-mongering)",
    "When to jump to Money guides for banking, insurance, and tax",
  ],
  relatedLinks: [
    { href: SG, label: "Netherlands Survival Guide", description: "Living pillar entry point." },
    { href: "/netherlands/money/tools/", label: "Money tools hub", description: "Calculators and budgeting helpers." },
    { href: "/netherlands/money/tools/cost-of-living-calculator/", label: "Cost of living calculator", description: "Stress-test monthly cash flow." },
    { href: "/netherlands/services/banks/", label: "Banks directory", description: "When you’re choosing an account." },
  ],
};

export const LIVING_PLACEHOLDER_EMERGENCIES: LivingTopicPlaceholderSpec = {
  path: "/netherlands/living/emergencies/",
  metaTitle: "Emergencies & safety in the Netherlands | Living",
  metaDescription:
    "112, huisarts, and practical safety awareness for expats—planning-only Living guide expanding soon.",
  h1: "Emergencies & safety in the Netherlands",
  breadcrumbLabel: "Emergencies & safety",
  intro:
    "Knowing who to call and how triage works prevents panic on a bad day. This will be an editorial, planning-oriented guide—not emergency instruction. Full content is on the way.",
  bullets: [
    "112 vs non-emergency lines—and when the huisarts is the right first step",
    "Pharmacies, evenings, and weekends—how access usually works",
    "Mental health and crisis resources at a high level (with official signposts in the full guide)",
    "Bike and street awareness without alarmism",
    "How health insurance and registration fit the picture (pointers to dedicated guides)",
  ],
  relatedLinks: [
    { href: SG, label: "Netherlands Survival Guide", description: "Return to the Living hub." },
    { href: "/netherlands/services/health-insurance/", label: "Health insurance directory", description: "Mandatory insurance context." },
    { href: "/netherlands/taxes/tools/healthcare-allowance-estimator/", label: "Healthcare allowance estimator", description: "Toeslag sense-check alongside premiums." },
    { href: "/netherlands/moving-to-the-netherlands/", label: "Moving to the Netherlands", description: "Registration and BSN flow." },
  ],
};

import type { CitiesBestForExpatsStartCardConfig } from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

/** Start-here lens cards (work, budget, family, lifestyle). */
export const citiesBestForExpatsStartCards: CitiesBestForExpatsStartCardConfig[] = [
  {
    id: "work-commute",
    iconKey: "work",
    title: "If work and commute matter most",
    tags: ["Career", "Commute", "Hybrid"],
    intro:
      "Start from where the job is (and how often you are in-office), then test door-to-door time — not a single smooth test trip.",
    quickLinksLabel: "City picks",
    quickLinks: [
      { label: "Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "The Hague", href: "/netherlands/the-hague/" },
      { label: "Utrecht", href: "/netherlands/utrecht/" },
      { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      { label: "Careers guide", href: R.bestCitiesForInternationalProfessionals },
    ],
    keyPoints: [
      "Employer clusters vary by sector — open a few city guides, then stress-test real commute weeks.",
      "Trains are strong; crowding and last mile still shape daily life.",
      "Hybrid work = pay in rent or in train hours — model both.",
      "Sort Schiphol / cross-border needs early — geography punishes late pivots.",
    ],
    cta: { href: R.cityComparison, label: "Open city comparison tool" },
  },
  {
    id: "affordability",
    iconKey: "affordability",
    title: "If affordability matters most",
    tags: ["Budget", "Rent", "Total cost"],
    intro:
      "Total monthly picture beats headline rent: commute, deposit, overlap, utilities, and (if relevant) childcare.",
    quickLinksLabel: "Places to try",
    quickLinks: [
      { label: "Cheapest cities", href: R.cheapestCitiesForExpats },
      { label: "Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      { label: "Groningen", href: "/netherlands/groningen/" },
      { label: "Breda", href: "/netherlands/breda/" },
      { label: "Leiden", href: "/netherlands/leiden/" },
    ],
    keyPoints: [
      "Full month counts: deposit, overlap, utilities, travel — not rent alone.",
      "Big-city rent can still beat a brutal daily commute for two careers.",
      "Smaller bases stretch rent — check you are not buying hours on the train.",
      "Use the same calculator inputs every time you switch city.",
    ],
    cta: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "family",
    iconKey: "family",
    title: "If family life matters most",
    tags: ["Schools", "Childcare", "Space"],
    intro:
      "Prioritise space, school/childcare access, and daily logistics — not only the city with the best reputation.",
    quickLinksLabel: "Family picks",
    quickLinks: [
      { label: "Families guide", href: R.bestCitiesForFamilies },
      { label: "Utrecht", href: "/netherlands/utrecht/" },
      { label: "The Hague", href: "/netherlands/the-hague/" },
      { label: "Haarlem", href: "/netherlands/haarlem/" },
      { label: "Amstelveen", href: "/netherlands/amstelveen/" },
      { label: "Delft", href: "/netherlands/delft/" },
    ],
    keyPoints: [
      "Schools and childcare have lists everywhere — start early if non-negotiable.",
      "Satellite towns often trade a longer trip for space and quieter streets.",
      "Parent stress: errands on foot vs calmer evenings — pick what you need most.",
      "Run the childcare estimator once you have 2–4 city names.",
    ],
    cta: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "lifestyle",
    iconKey: "lifestyle",
    title: "If lifestyle and atmosphere matter most",
    tags: ["Vibe", "Culture", "English"],
    intro:
      "Energy vs calm, English-default services, and evening culture vary — bikes are everywhere; vibe is not.",
    quickLinksLabel: "Different vibes",
    quickLinks: [
      { label: "Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "Maastricht", href: "/netherlands/maastricht/" },
      { label: "Groningen", href: "/netherlands/groningen/" },
      { label: "Leiden", href: "/netherlands/leiden/" },
      { label: "Cities hub", href: R.citiesHub },
    ],
    keyPoints: [
      "Big hubs feel easy week one; smaller cities can feel like home faster — both are valid.",
      "Housing needs differ by life stage — do not copy another household’s map.",
      "Winter needs a social plan — especially in quieter towns.",
      "Visit midweek, not only Saturday, before you commit.",
    ],
    cta: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
];

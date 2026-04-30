import type { BestCitiesLevel } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export type ProfessionalsCityTier = "tier1" | "tier2";

/**
 * Canonical city row for the international professionals shortlist.
 * `costLevel` / `lifestyle` drive the Cost / Life chips; `watchOut` is the “Watch” column.
 */
export type ProfessionalsCityConfig = {
  id: string;
  name: string;
  tier: ProfessionalsCityTier;
  tagline: string;
  bestFor: string;
  jobStrength: string;
  /** “Watch” column — rent, commute, or market caveats */
  watchOut: string;
  costLevel: BestCitiesLevel;
  lifestyle: BestCitiesLevel;
  tags: readonly string[];
  href: string;
  ctaLabel?: string;
};

const tier1 = [
  {
    id: "amsterdam",
    name: "Amsterdam",
    tier: "tier1",
    tagline:
      "Most career choice — deepest mix of employers, lots of English-friendly services, and short travel when your office is actually here.",
    bestFor: "Finance, tech, growing companies, consulting, and anyone who needs choices and international hiring depth.",
    jobStrength:
      "Broadest hiring across sectors, conferences, clients, and head offices for many multinationals.",
    watchOut:
      "Rent and competition are serious — headline salary can evaporate in housing + pace stress if you skip modelling.",
    costLevel: "high",
    lifestyle: "high",
    tags: ["Head offices", "English-friendly", "Lots of choice", "Premium rent"],
    href: "/netherlands/amsterdam/",
  },
  {
    id: "utrecht",
    name: "Utrecht",
    tier: "tier1",
    tagline:
      "National hub on a human scale — strong trains, credible scale-up scene, and a balanced weekly rhythm for many internationals.",
    bestFor:
      "Consulting, SaaS, near government work, and households that want energy without only inner Amsterdam chaos.",
    jobStrength:
      "Central rail + healthy private sector depth — many careers stay viable without defaulting to Amsterdam daily.",
    watchOut: "Housing competition is real — widen radius early and model crowded peak platforms honestly.",
    costLevel: "high",
    lifestyle: "high",
    tags: ["Rail hub", "Scale-ups", "National reach", "Housing pressure"],
    href: "/netherlands/utrecht/",
  },
  {
    id: "rotterdam",
    name: "Rotterdam",
    tier: "tier1",
    tagline:
      "Port + scale — logistics, maritime, creative industries, and more space per euro than Amsterdam in many pockets.",
    bestFor: "Big company head offices, scale-ups, and professionals who like urban grit with waterfront life.",
    jobStrength:
      "Diverse employer base — strong for operations, trade, energy transition adjacency, and creative sectors.",
    watchOut: "Neighbourhood variance is wide — commute stories and school feel need street-level validation.",
    costLevel: "medium",
    lifestyle: "mixed",
    tags: ["Port & trade", "Head offices", "Space/value", "Mixed pockets"],
    href: "/netherlands/rotterdam/",
  },
  {
    id: "eindhoven",
    name: "Eindhoven",
    tier: "tier1",
    tagline:
      "Tech and industry hub — compact region with solid local pay and fewer forced trips west when work is truly there.",
    bestFor: "Engineering, chips, deep tech, and households putting job fit first.",
    jobStrength: "Dense tech employer belt — strong internships-to-senior pipelines relative to city size.",
    watchOut:
      "Well-located housing still competes — it is not a secret discount market once you add quality filters.",
    costLevel: "medium",
    lifestyle: "high",
    tags: ["Tech region", "Deep tech", "Local jobs", "Housing quality"],
    href: "/netherlands/eindhoven/",
  },
  {
    id: "the-hague",
    name: "The Hague",
    tier: "tier1",
    tagline:
      "Institutions + diplomacy — NGO, legal, and policy work clustered here, with coastal pockets and international services.",
    bestFor:
      "International organisations, legal, policy, and households that value English-friendly professional circles.",
    jobStrength:
      "Unique cluster of IOs, embassies, and adjacent professional services — hard to replicate elsewhere in NL.",
    watchOut:
      "Commute geometry to partner offices can surprise — model Scheveningen vs inland weeks honestly.",
    costLevel: "high",
    lifestyle: "high",
    tags: ["IO & policy", "Legal", "Coastal", "Dual commute"],
    href: "/netherlands/the-hague/",
  },
] as const satisfies readonly ProfessionalsCityConfig[];

const tier2 = [
  {
    id: "haarlem",
    name: "Haarlem",
    tier: "tier2",
    tagline:
      "Reach to the big western cities + calmer historic core — many Amsterdam-orbit careers stay viable with gentler evenings.",
    bestFor: "Hybrid Amsterdam workers who want green, sea proximity, and a walkable town centre.",
    jobStrength: "Amsterdam/Schiphol commutes for focused office days — strong when hybrid is honest.",
    watchOut:
      "Premium housing — compare real travel + rent totals against living closer to the office.",
    costLevel: "high",
    lifestyle: "high",
    tags: ["Amsterdam orbit", "Hybrid", "Historic core", "Premium"],
    href: "/netherlands/haarlem/",
  },
  {
    id: "leiden",
    name: "Leiden",
    tier: "tier2",
    tagline:
      "University-town services with easy reach west — knowledge-sector rhythm without megacity sprawl.",
    bestFor:
      "Research, life sciences, knowledge work, and parents who like compact cores and cycling culture.",
    jobStrength: "Leiden–The Hague–Schiphol triangle works for many two-career patterns.",
    watchOut: "Student demand overlaps housing in pockets — scout neighbourhoods deliberately.",
    costLevel: "medium",
    lifestyle: "high",
    tags: ["Knowledge work", "Triangle travel", "Compact", "Students"],
    href: "/netherlands/leiden/",
  },
  {
    id: "delft",
    name: "Delft",
    tier: "tier2",
    tagline: "Near the tech university, calm between The Hague and Rotterdam — great when specialist days split across hubs.",
    bestFor:
      "Tech-adjacent, academic, and engineering households who accept nearby hubs for certain workdays.",
    jobStrength:
      "Engineering + research density relative to size — Rotterdam/The Hague are commutable for many roles.",
    watchOut: "Tighter housing stock — fewer releases than bigger cities when you need space.",
    costLevel: "medium",
    lifestyle: "high",
    tags: ["Near TU", "Engineering", "Multi-hub", "Tight stock"],
    href: "/netherlands/delft/",
  },
  {
    id: "amersfoort",
    name: "Amersfoort",
    tier: "tier2",
    tagline:
      "Fortress-town charm on the Utrecht–Amsterdam corridor — rising pick for rail-first professionals.",
    bestFor: "Hybrid workers who want calm core + strong intercity links and breathing room.",
    jobStrength:
      "Strong rail toward Amsterdam and Utrecht — viable when office days are bounded and predictable.",
    watchOut:
      "No dedicated ExpatCopilot city guide yet — model against finalists in the comparison tool.",
    costLevel: "medium",
    lifestyle: "high",
    tags: ["Rail-first", "Calm core", "Corridor", "Compare finalists"],
    href: R.cityComparison,
    ctaLabel: "Model Amersfoort vs finalists",
  },
  {
    id: "breda",
    name: "Breda",
    tier: "tier2",
    tagline:
      "Southern balance — gentler rent pressure for many, with Rotterdam / Antwerp reach depending on role.",
    bestFor:
      "Space-first professionals and cross-border angles (where permitted) who want quieter urban weekends.",
    jobStrength: "Regional hub quality of life — validate partner market and sector depth locally.",
    watchOut: "Fewer specialist contacts than the busiest western cities for some niches — honesty beats optimism.",
    costLevel: "medium",
    lifestyle: "medium",
    tags: ["Southern NL", "Space", "Regional depth", "Partner market"],
    href: "/netherlands/breda/",
  },
] as const satisfies readonly ProfessionalsCityConfig[];

/**
 * Tiered shortlist for the professionals pillar — single source for cards and future cross-links.
 */
export const citiesProfessionalsCities = {
  tier1,
  tier2,
} as const;

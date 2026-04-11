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
      "Start from **where the job is** (and how often you are in-office), then test **door-to-door** time — not a single smooth test trip.",
    keyPoints: [
      "**Clusters** — Amsterdam HQs & finance, Rotterdam port/logistics, The Hague institutions/NGOs, Eindhoven tech, Utrecht HQs & travel hub.",
      "**Rail is good; life is local** — peak crowding and last-mile time still matter.",
      "**Hybrid** = pay in rent **or** in train hours — model both.",
      "Match **Schiphol / cross-border** needs before you fall for a pretty map pin.",
    ],
    cta: { href: R.cityComparison, label: "Open city comparison tool" },
  },
  {
    id: "affordability",
    iconKey: "affordability",
    title: "If affordability matters most",
    tags: ["Budget", "Rent", "Total cost"],
    intro:
      "**Total monthly picture** beats headline rent: commute, deposit, overlap, utilities, and (if relevant) childcare.",
    keyPoints: [
      "Big cities **cost more** but can **save** dual-career or brutal-commute scenarios.",
      "Smaller cities **stretch rent** — check you are not buying a **daily** long commute.",
      "Always pair **rent calculator + cost of living** on the **same** household assumptions.",
      "**One income** vs **two** changes what “expensive” feels like — be honest which you are.",
    ],
    cta: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "family",
    iconKey: "family",
    title: "If family life matters most",
    tags: ["Schools", "Childcare", "Space"],
    intro:
      "Prioritise **space, school/childcare access,** and **daily logistics** — not only the city with the best reputation.",
    keyPoints: [
      "**Schools and childcare** have waiting lists everywhere — start early if non-negotiable.",
      "**Satellite cities** (Haarlem, Amstelveen, etc.) often trade **commute** for **space**.",
      "Decide what reduces **parent stress**: walkable errands vs quieter streets.",
      "Use the **childcare estimator** once you have 2–4 city names.",
    ],
    cta: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "lifestyle",
    iconKey: "lifestyle",
    title: "If lifestyle and atmosphere matter most",
    tags: ["Vibe", "Culture", "English"],
    intro:
      "**Energy vs calm**, **English-default services**, and **evening culture** vary — bikes are everywhere; vibe is not.",
    keyPoints: [
      "**Big international hubs** feel easier week one; **smaller cities** can feel “home” faster — both are valid.",
      "**Students** need different housing physics than **families** — do not copy someone else’s stage.",
      "**Winter and grey skies** hit harder without a social plan — especially in quieter towns.",
      "Visit **Tuesday**, not only Saturday, before you mentally commit.",
    ],
    cta: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
];

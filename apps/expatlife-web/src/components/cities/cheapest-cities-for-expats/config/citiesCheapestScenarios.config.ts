import type { CitiesBestForExpatsScenarioConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export const citiesCheapestScenarios: CitiesBestForExpatsScenarioConfig[] = [
  {
    id: "families",
    title: "Cheapest for families",
    intro: "Families often care about space for the money, schools nearby, and commutes you can repeat every week — not only the rent on the ad.",
    tags: ["Space", "Schools", "Commute"],
    picks: [
      { name: "Arnhem", href: "/netherlands/arnhem/", why: "Green access + Gelderland rhythm; often softer rent than Utrecht core." },
      { name: "Groningen", href: "/netherlands/groningen/", why: "Compact city + strong student/family services relative to size." },
      { name: "Eindhoven", href: "/netherlands/eindhoven/", why: "Strong local tech and industry jobs — less need for long trips west if your work is there." },
    ],
    tradeoffs: [
      "International school placement is not automatic anywhere — check realistic options per city.",
      "Partner job markets shrink outside major hubs — model two incomes before you celebrate rent.",
    ],
    toolHint: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "young-pros",
    title: "Cheapest for young professionals",
    intro: "Early-career budgets reward lower rent — but nightlife depth and English-default surfaces vary by city.",
    tags: ["Rent", "Social", "Career"],
    picks: [
      { name: "Groningen", href: "/netherlands/groningen/", why: "Lively student-city feel with often gentler rent than the biggest western cities." },
      { name: "Tilburg", href: "/netherlands/tilburg/", why: "Brabant city life with rent that is often easier than Amsterdam." },
      { name: "Maastricht", href: "/netherlands/maastricht/", why: "Distinct border-city feel; rent can be kinder than the busiest western cores." },
    ],
    tradeoffs: [
      "Some fields still hire mainly from Amsterdam, Rotterdam, or The Hague — be honest about where interviews usually happen.",
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "commute-access",
    title: "Cheapest with good commute access",
    intro: "Cheap + connected usually means you are trading time for euros — the question is whether your office days allow it.",
    tags: ["Rail", "Hybrid", "Totals"],
    picks: [
      { name: "Almere (compare)", href: R.cityComparison, why: "Modern stock + Amsterdam corridor — model peak tickets with rent." },
      { name: "Arnhem", href: "/netherlands/arnhem/", why: "Rail hub toward Utrecht/Amsterdam — still check peak crowding." },
      { name: "Breda", href: "/netherlands/breda/", why: "Southern links toward Rotterdam — shorter hops than cross-country." },
    ],
    tradeoffs: [
      "Easy travel to a head office in the busy west rarely stays “cheap” once train passes and lost hours sit next to rent on the same sheet.",
    ],
    toolHint: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "lifestyle",
    title: "Cheapest with strong lifestyle",
    intro: "Affordability is not only euros — café culture, nature, events still matter when you are building a life.",
    tags: ["Culture", "Pace", "Weekends"],
    picks: [
      { name: "Maastricht", href: "/netherlands/maastricht/", why: "Historic centre + euro-region weekend options." },
      { name: "Groningen", href: "/netherlands/groningen/", why: "Compact, bike-first northern city with strong student energy." },
      { name: "Breda", href: "/netherlands/breda/", why: "Southern charm with reach to bigger cities for occasional bursts." },
    ],
    tradeoffs: ["Lifestyle fit is subjective — visit midweek, not only on a sunny Saturday."],
  },
  {
    id: "remote",
    title: "Cheapest for remote workers",
    intro: "If office days are rare, you can place more weight on rent and local rhythm — still keep one realistic worst-case commute month.",
    tags: ["Hybrid", "Home office", "Travel"],
    picks: [
      { name: "Groningen", href: "/netherlands/groningen/", why: "Lower rent pressure with enough services for daily life." },
      { name: "Zwolle (compare)", href: R.cityComparison, why: "Central-eastern base — model against any occasional HQ city." },
      { name: "Enschede (compare)", href: R.cityComparison, why: "Twente-style costs when trips west are only occasional." },
    ],
    tradeoffs: [
      "Employers and tax residency questions still exist — remote ≠ borderless for permits and contracts.",
    ],
    toolHint: { href: R.cityComparison, label: "City comparison tool" },
  },
];

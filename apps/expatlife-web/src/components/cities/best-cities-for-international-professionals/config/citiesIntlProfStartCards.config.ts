import type { CitiesBestForExpatsStartCardConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export const citiesIntlProfStartCards: CitiesBestForExpatsStartCardConfig[] = [
  {
    id: "job-market-industry",
    iconKey: "work",
    title: "Jobs & your field",
    intro:
      "Where employers gather matters more than skyline photos — tech, finance, logistics, and international organisations sit in different parts of the country.",
    keyPoints: [
      "Match your field to where hiring, clients, and meetups really are — not where you wish they were.",
      "Two careers shrink the map fast — check both job markets before you sign a lease.",
      "Home office weeks still have fixed office days — do not plan only on remote-friendly headlines.",
    ],
    cta: { href: R.cityComparison, label: "Compare cities for your career" },
  },
  {
    id: "salary-vs-cost",
    iconKey: "affordability",
    title: "Pay vs cost in real life",
    intro:
      "Higher salaries before tax often sit next to tougher rent and competition — what is left each month and travel time decide quality of life.",
    keyPoints: [
      "Model take-home + rent + travel with the same assumptions for every city — not salary before tax alone.",
      "30% ruling (if it applies) changes take-home — run the calculator if it applies to you.",
      "Two earners should stress-test bad months (bonus timing, mortgage buffer).",
    ],
    cta: { href: R.costOfLiving, label: "Open cost of living calculator" },
  },
  {
    id: "commute-access",
    iconKey: "lifestyle",
    title: "Travel & access",
    intro:
      "Trains between cities are good — but rush-hour crowding, changes, and bike to the station still shape whether a city works five days a week.",
    keyPoints: [
      "Office-from-home patterns hide brutal Tuesdays — model weeks when both partners go to the office.",
      "International school or client pockets can become a second daily trip if they do not line up with home.",
      "Rain and delays are normal — if the route only works in sunshine, note that.",
    ],
    cta: { href: R.cityComparison, label: "Stress-test travel sliders" },
  },
  {
    id: "lifestyle-networking",
    iconKey: "family",
    title: "Life outside work",
    intro:
      "How many expats, English-friendly services, events, and evening buzz vary — some careers need random meetups; others need quiet evenings.",
    keyPoints: [
      "Big cities bring people and choice — often with pace and price as the trade-off.",
      "Smaller cities can be great for focus — if your field and your partner’s job still fit.",
      "Day-to-day fit shows up around month six — visit midweek, not only on a sunny weekend.",
    ],
    cta: { href: R.citiesHub, label: "Browse city guides" },
  },
];

import type { CitiesCheapestStartCard } from "./citiesCheapest.types";

/** “What cheap means” — NL context cards under #what-cheap-means. */
export const citiesCheapestStartCards: CitiesCheapestStartCard[] = [
  {
    id: "rent-main",
    title: "Rent is the main factor",
    body:
      "Housing usually moves first when a city feels “cheaper” vs Amsterdam / Utrecht — other lines matter, but rent is the headline.",
  },
  {
    id: "commute-cancels",
    title: "Commute can cancel savings",
    body:
      "Busy trains or long drives can eat the rent gap if your office stays in the busy west (for example Amsterdam area) — add up passes + time, not just dots on a map.",
  },
  {
    id: "lifestyle-still",
    title: "Lifestyle still matters",
    body:
      "Groceries and going out rarely fix a bad rent+commute story — fit, language, pace still decide whether you stay.",
  },
];

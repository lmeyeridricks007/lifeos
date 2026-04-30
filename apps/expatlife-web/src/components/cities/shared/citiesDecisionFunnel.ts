import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";

/** In-page anchor for the shared “Choose your city lens” block (all four funnel pages). */
export const CHOOSE_YOUR_CITY_LENS_SECTION_ID = "choose-your-city-lens" as const;

/** Four city decision guides — same funnel, different emphasis. */
export const CITIES_FUNNEL_PATHS = {
  bestOverall: "/netherlands/cities/best-cities-for-expats/" as const,
  cheapest: "/netherlands/cities/cheapest-cities-for-expats/" as const,
  families: "/netherlands/cities/best-cities-for-families/" as const,
  professionals: "/netherlands/cities/best-cities-for-international-professionals/" as const,
} as const;

export type CitiesFunnelPageKey = "best" | "cheapest" | "families" | "professionals";

/**
 * Shared tool strip for every funnel hero + the lens section footer.
 * Keep labels and order aligned with `CitiesChooseYourApproachSection`.
 */
export const CITIES_LENS_HERO_TOOL_STRIP: ReadonlyArray<{ href: string; label: string }> = [
  { href: R.cityComparison, label: "City comparison tool" },
  { href: R.dutchSalaryNetCalculator, label: "Dutch salary (net) calculator" },
  { href: R.thirtyPercentRulingCalculator, label: "30% ruling calculator" },
  { href: R.costOfLiving, label: "Cost of living calculator" },
  { href: R.rentAffordability, label: "Rent affordability calculator" },
  { href: R.utilities, label: "Utilities comparison" },
  { href: R.childcare, label: "Childcare cost estimator" },
] as const;

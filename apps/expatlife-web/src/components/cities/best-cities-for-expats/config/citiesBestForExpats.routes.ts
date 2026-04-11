/**
 * Canonical internal paths for Best Cities for Expats content blocks.
 * Import from here in config slices so hrefs stay consistent.
 */
export const citiesBestForExpatsRoutes = {
  cityComparison: "/netherlands/tools/city-comparison/",
  costOfLiving: "/netherlands/money/tools/cost-of-living-calculator/",
  rentAffordability: "/netherlands/housing/tools/rent-affordability-calculator/",
  utilities: "/netherlands/living/tools/utilities-services-comparison/",
  childcare: "/netherlands/family/tools/childcare-cost-estimator/",
  healthcareAllowance: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
  citiesHub: "/netherlands/cities/",
  movingChecklist: "/netherlands/moving/tools/moving-checklist/",
  afterArriving: "/netherlands/after-arriving-netherlands/",
  services: "/netherlands/services/",
  movingToNl: "/netherlands/moving-to-the-netherlands/",
  visasResidency: "/netherlands/moving/visas-residency/",
  workingNl: "/netherlands/moving/working-in-the-netherlands/",
  moveTools: "/netherlands/moving/tools/",
  housingHub: "/netherlands/housing/",
  housingToolsHub: "/netherlands/housing/tools/",
  moneyToolsHub: "/netherlands/money/tools/",
  toolsHub: "/netherlands/tools/",
  livingSurvival: "/netherlands/living/survival-guide/",
  municipalityRegistration: "/netherlands/municipality-registration-netherlands/",
  documentReadiness: "/netherlands/document-readiness-checker/",
  healthInsuranceGuide: "/netherlands/health-insurance-netherlands/",
  openBankGuide: "/netherlands/open-bank-account-netherlands/",
} as const;

export type CitiesBestForExpatsRouteKey = keyof typeof citiesBestForExpatsRoutes;

/** Route map for Netherlands Tax Guide — single place to update paths. */

export const TAX_GUIDE_FOR_EXPATS_PATH = "/netherlands/money/tax-guide-for-expats/" as const;

/** Money-pillar foundation explainer — general Dutch tax system (not expat-only). */
export const HOW_TAXES_WORK_IN_NL_PATH = "/netherlands/money/how-taxes-work-in-the-netherlands/" as const;

/** Money-pillar orientation — tax residency concepts (not a determination tool). */
export const TAX_RESIDENCY_NL_PATH = "/netherlands/money/tax-residency-netherlands/" as const;

/** Money-pillar orientation — Dutch annual tax return (not filing advice). */
export const TAX_RETURN_NL_PATH = "/netherlands/money/tax-return-netherlands/" as const;

/** Money → Taxes — editorial 30% facility guide (not the calculator). */
export const THIRTY_PERCENT_RULING_NL_PATH = "/netherlands/money/taxes/30-percent-ruling/" as const;

/** Money → Taxes — when to consider tax advisors (editorial, not advice). */
export const TAX_ADVISORS_EXPATS_PATH = "/netherlands/money/taxes/tax-advisors/" as const;

export const taxGuideRoutes = {
  canonical: TAX_GUIDE_FOR_EXPATS_PATH,
  taxGuideForExpats: TAX_GUIDE_FOR_EXPATS_PATH,
  howTaxesWorkInNl: HOW_TAXES_WORK_IN_NL_PATH,
  taxResidencyNl: TAX_RESIDENCY_NL_PATH,
  taxReturnNl: TAX_RETURN_NL_PATH,
  thirtyPercentRulingGuide: THIRTY_PERCENT_RULING_NL_PATH,
  taxAdvisorsExpats: TAX_ADVISORS_EXPATS_PATH,
  moneyTools: "/netherlands/money/tools/",
  taxesHub: "/netherlands/taxes/",
  taxesTools: "/netherlands/taxes/tools/",
  salaryNet: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
  ruling: "/netherlands/taxes/tools/30-ruling-calculator/",
  payslip: "/netherlands/work/tools/payslip-decoder/",
  healthcare: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
  doubleTax: "/netherlands/taxes/tools/double-tax-awareness-tool/",
  jobOffer: "/netherlands/work/tools/job-offer-comparison/",
  col: "/netherlands/money/tools/cost-of-living-calculator/",
  rent: "/netherlands/housing/tools/rent-affordability-calculator/",
  childcare: "/netherlands/family/tools/childcare-cost-estimator/",
  workingNl: "/netherlands/moving/working-in-the-netherlands/",
  employmentType: "/netherlands/work/tools/employment-type-scenario-tool/",
  expatTaxesGuide: "/netherlands/money/expat-taxes-netherlands/",
  citiesHub: "/netherlands/cities/",
  /** Taxes flagship hub — use until a dedicated advisors guide route ships. */
  taxAdvisorsGuide: "/netherlands/taxes/",
} as const;

export type TaxGuideRouteKey = keyof typeof taxGuideRoutes;

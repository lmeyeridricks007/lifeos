/** Route map for Money → Expat Taxes in the Netherlands — single place to update paths. */

import {
  HOW_TAXES_WORK_IN_NL_PATH,
  TAX_ADVISORS_EXPATS_PATH,
  THIRTY_PERCENT_RULING_NL_PATH,
  TAX_RESIDENCY_NL_PATH,
  TAX_RETURN_NL_PATH,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";

export const EXPAT_TAXES_NL_PATH = "/netherlands/money/expat-taxes-netherlands/" as const;

export const expatTaxesNlRoutes = {
  canonical: EXPAT_TAXES_NL_PATH,
  taxGuideBroad: "/netherlands/money/tax-guide-for-expats/",
  howTaxesWorkFoundation: HOW_TAXES_WORK_IN_NL_PATH,
  taxResidencyNl: TAX_RESIDENCY_NL_PATH,
  taxReturnNl: TAX_RETURN_NL_PATH,
  moneyTools: "/netherlands/money/tools/",
  taxesHub: "/netherlands/taxes/",
  taxesTools: "/netherlands/taxes/tools/",
  salaryNet: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
  ruling: "/netherlands/taxes/tools/30-ruling-calculator/",
  thirtyPercentRulingGuide: THIRTY_PERCENT_RULING_NL_PATH,
  taxAdvisorsExpats: TAX_ADVISORS_EXPATS_PATH,
  payslip: "/netherlands/work/tools/payslip-decoder/",
  healthcare: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
  doubleTax: "/netherlands/taxes/tools/double-tax-awareness-tool/",
  jobOffer: "/netherlands/work/tools/job-offer-comparison/",
  col: "/netherlands/money/tools/cost-of-living-calculator/",
  rent: "/netherlands/housing/tools/rent-affordability-calculator/",
  childcare: "/netherlands/family/tools/childcare-cost-estimator/",
  workingNl: "/netherlands/moving/working-in-the-netherlands/",
  employmentType: "/netherlands/work/tools/employment-type-scenario-tool/",
  citiesHub: "/netherlands/cities/",
  /** Taxes flagship hub (dedicated advisors URL not yet a standalone guide route). */
  taxAdvisorsGuide: "/netherlands/taxes/",
} as const;

export type ExpatTaxesNlRouteKey = keyof typeof expatTaxesNlRoutes;

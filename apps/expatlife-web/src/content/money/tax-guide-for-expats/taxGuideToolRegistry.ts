import { taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { MoneyTaxGuideToolKey } from "./taxGuideContent.types";

export type ResolvedTaxGuideTool = { href: string; label: string };

const DEFAULT_LABELS: Record<MoneyTaxGuideToolKey, string> = {
  salaryNet: "Estimate net salary",
  ruling: "Check 30% ruling",
  payslip: "Decode payslip",
  healthcare: "Estimate healthcare allowance",
  doubleTax: "Check double-tax awareness",
  jobOffer: "Compare job offers",
  col: "Cost of living calculator",
  rent: "Rent affordability calculator",
  childcare: "Estimate childcare costs",
  workingNl: "Working in the Netherlands",
  employmentType: "Employment type scenario tool",
  expatTaxesGuide: "Expat taxes in the Netherlands",
  taxGuideForExpats: "Netherlands tax guide for expats",
  howTaxesWorkInNl: "How taxes work in the Netherlands",
  taxResidencyNl: "Tax residency in the Netherlands",
  taxReturnNl: "Tax return in the Netherlands",
  thirtyPercentRulingGuide: "30% ruling in the Netherlands (guide)",
  taxAdvisorsExpats: "Tax advisors for expats (guide)",
  taxesHub: "Dutch taxes hub",
  taxesTools: "Taxes tools hub",
  moneyTools: "Money & tax tools hub",
  citiesHub: "Cities hub",
  taxAdvisorsGuide: "Netherlands taxes hub",
  bankComparison: "Bank comparison tool",
  bankingCostEstimator: "Banking cost estimator",
};

export function resolveTaxGuideTool(key: MoneyTaxGuideToolKey, labelOverride?: string): ResolvedTaxGuideTool {
  return {
    href: taxGuideRoutes[key],
    label: labelOverride ?? DEFAULT_LABELS[key],
  };
}

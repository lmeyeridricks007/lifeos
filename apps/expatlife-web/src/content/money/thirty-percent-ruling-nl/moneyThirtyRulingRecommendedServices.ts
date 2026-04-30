import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "../tax-residency-nl/config/moneyTaxResidencyServiceRegistry";
import type { MoneyTaxReturnServiceKey } from "../tax-return-nl/moneyTaxReturnTypes";

const moneyThirtyRulingRecommendedServiceKeys: readonly MoneyTaxReturnServiceKey[] = [
  "allServices",
  "banks",
  "healthInsurance",
  "relocationServices",
  "visaConsultants",
  "immigrationLawyers",
] as const;

export const thirtyPercentRulingNlServiceCategoryLinks = moneyThirtyRulingRecommendedServiceKeys.map(
  (key) => MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[key]
);

export const moneyThirtyRulingRecommendedServices = {
  id: "recommended-services" as const,
  affiliatePlacementId: "nl-money-thirty-percent-ruling-support-providers" as const,
  eyebrow: "Optional support" as const,
  title: "Tax support options" as const,
  subtitle:
    "Most readers resolve questions with HR, payroll, and Belastingdienst pages. Paid help fits when you want a second pair of eyes, a faster map across moving parts, or a written opinion for a non-standard year — useful, not mandatory.",
  paidHelpIntro:
    "A short, scoped call can pay off when you already gathered facts and still cannot reconcile offer letter, calculator, and payslip language.",
  whenHelpBullets: [
    "Eligibility still unclear after dates, contract, and recruitment facts are on the table",
    "Salary packages with bonuses, equity, pension, or several income streams in one year",
    "Partial-year start plus return or residency questions you do not want to misread",
    "Employer policy — what the company will document, support, or apply on the slip",
    "Cross-border income, assets, or prior rulings alongside current employment",
  ] as const,
} as const;

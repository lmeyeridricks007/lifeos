import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "../tax-residency-nl/config/moneyTaxResidencyServiceRegistry";
import type { MoneyTaxReturnServiceKey } from "./moneyTaxReturnTypes";

/** Ordered directory links for the affiliate browse row — keys only; URLs live in the residency registry. */
export const moneyTaxReturnRecommendedServiceKeys: readonly MoneyTaxReturnServiceKey[] = [
  "allServices",
  "banks",
  "healthInsurance",
  "relocationServices",
  "visaConsultants",
  "immigrationLawyers",
] as const;

export const taxReturnNlServiceCategoryLinks = moneyTaxReturnRecommendedServiceKeys.map((key) => MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[key]);

export const moneyTaxReturnRecommendedServices = {
  id: "recommended-services" as const,
  affiliatePlacementId: "nl-money-tax-return-nl-support-providers" as const,
  eyebrow: "Optional next step" as const,
  title: "Tax-return support" as const,
  subtitle:
    "Many people file themselves once documents are sorted. Paid help is useful when you want a second pair of eyes or less time on paperwork — not because filing is inherently “dangerous”.",
  paidHelpIntro:
    "Consider a scoped review (not necessarily full representation) when you want someone to sanity-check a busy year or translate official language faster.",
  whenHelpBullets: [
    "First Dutch return and you prefer a guided walkthrough",
    "Arrival or departure year with income in more than one country",
    "Foreign assets or income and official pages still feel hard to map to your papers",
    "Self-employment or mixed income next to employment",
    "Partner + allowances + return topics interacting in one year",
    "Tax residency still unclear after reading the residency guide",
  ] as const,
} as const;

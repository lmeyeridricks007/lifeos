import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "./moneyTaxResidencyServiceRegistry";

/** Ordered directory links for affiliate block — keys separate from tax tool keys. */
export const moneyTaxResidencyServiceCategoryLinks = [
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.allServices,
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.banks,
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.healthInsurance,
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.relocationServices,
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.visaConsultants,
  MONEY_TAX_RESIDENCY_SERVICE_REGISTRY.immigrationLawyers,
] as const;

export const moneyTaxResidencyRecommendedServices = {
  id: "recommended-services" as const,
  eyebrow: "Optional next step" as const,
  title: "Tax support options" as const,
  subtitle:
    "Tax advisers are optional — they can save time when your facts are cross-border or your filing story is easier to sanity-check with a second pair of eyes than to self-assemble from scratch.",
  whenHelpBullets: [
    "You want a scoped review before filing (arrival/departure year, two payrolls, or foreign assets)",
    "You have read official pages and still cannot map your facts to the return calmly",
    "You prefer to buy clarity instead of spending evenings reconciling threads and PDFs",
  ],
} as const;

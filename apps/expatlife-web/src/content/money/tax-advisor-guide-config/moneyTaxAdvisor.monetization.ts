import type { MoneyTaxReturnServiceKey } from "../tax-return-nl/moneyTaxReturnTypes";

/**
 * Monetization / provider-discovery config — keep separate from editorial copy.
 * Category links are built in `buildTaxAdvisorsNlPageModel` via `MONEY_TAX_RESIDENCY_SERVICE_REGISTRY`.
 */
export const moneyTaxAdvisorRecommendedProviders = {
  sectionId: "recommended-services" as const,
  affiliatePlacementId: "nl-money-tax-advisors-support-providers" as const,
  eyebrow: "Optional support" as const,
  title: "Compare tax support options" as const,
  subtitle:
    "Listings are for discovery — not endorsements, rankings, or outcome guarantees. Confirm scope, pricing, and who does the work with each provider.",
  paidHelpIntro:
    "Some people hire a firm after tools and official pages — for example when they want a scoped conversation, a pre-submit review, or help filing.",
  providerBlockLabel: "Third-party service listings" as const,
  providerBlockHint:
    "Below this line is separate from the editorial guide — same topic, different purpose. Treat links as starting points; fit depends on your facts.",
  whenHelpBullets: [
    "Cross-border income, assets, or work patterns where you want a human map of questions",
    "First Dutch return when boxes or foreign lines feel unfamiliar after reading the guides",
    "30% ruling letters or payslip lines you cannot reconcile with employer or official text",
    "Self-employment or mixed income where bookkeeping and the personal return need a clear split",
  ] as const,
  /** Registry keys → sidebar / browse links (not provider endorsements). */
  serviceCategoryRegistryKeys: [
    "allServices",
    "banks",
    "healthInsurance",
    "relocationServices",
    "visaConsultants",
    "immigrationLawyers",
  ] as const satisfies readonly MoneyTaxReturnServiceKey[],
} as const;

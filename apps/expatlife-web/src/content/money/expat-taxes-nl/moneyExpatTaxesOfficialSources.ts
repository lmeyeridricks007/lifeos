import type { MoneyTaxGuideOfficialSourceKey } from "../tax-guide-for-expats/taxGuideContent.types";

/**
 * Official sources panel for Expat Taxes NL — keys only; URLs resolve via `taxGuideOfficialSourceRegistry`.
 * Kept as a dedicated surface so this page can diverge grouping or copy from the broad tax guide without hunting prose.
 */
export const moneyExpatTaxesOfficialSources = {
  sectionId: "official-sources" as const,
  sectionTitle: "Official sources" as const,
  disclaimer:
    "For learning only — not personal tax advice. Numbers and rules change each tax year; check anything important on the Dutch tax office site or with a qualified tax adviser.",
  groups: [
    {
      id: "bd-income-return",
      title: "Dutch tax office — income tax & yearly form",
      keys: ["bd_income_tax_individuals", "bd_filing_return"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-payroll",
      title: "Tax taken from your pay",
      keys: ["bd_payroll_taxes"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-30",
      title: "30% ruling — official page",
      keys: ["bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-allowances",
      title: "Government benefits (toeslagen)",
      keys: ["toeslagen_portal"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "gov-international",
      title: "Two countries & cross-border topics",
      keys: ["bd_international_en", "gov_income_tax_allowances"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ] as const,
} as const;

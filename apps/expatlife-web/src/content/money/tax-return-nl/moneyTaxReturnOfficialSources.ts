import type { MoneyTaxGuideOfficialSourceKey } from "../tax-guide-for-expats/taxGuideContent.types";

/**
 * Official URL keys only — resolved URLs live in `taxGuideOfficialSourceRegistry`.
 * Year-specific filing rules stay out of this file; disclaimer reminds readers to confirm the year.
 */
export const moneyTaxReturnOfficialSources = {
  sectionId: "official-sources" as const,
  sectionTitle: "Official sources" as const,
  disclaimer:
    "Orientation only — not tax advice. Filing rules, letters, and deadlines are year-specific; confirm your situation on Belastingdienst, Toeslagen, or with a qualified adviser.",
  groups: [
    {
      id: "bd-return-filing",
      title: "Belastingdienst — income tax return & filing",
      keys: ["bd_filing_return", "bd_income_tax_individuals"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-payroll",
      title: "Payroll tax (loonheffing) — employer/withholding context",
      keys: ["bd_payroll_taxes"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-30-facility",
      title: "30% facility (official framing)",
      keys: ["bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "toeslagen",
      title: "Allowances (toeslagen)",
      keys: ["toeslagen_portal", "gov_income_tax_allowances"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-international",
      title: "International / cross-border topics",
      keys: ["bd_international_en", "bd_multiple_countries_double_taxation", "bd_immigration_emigration_tax_return"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-admin",
      title: "BSN & address (admin context)",
      keys: ["bd_bsn_citizen_service_number", "bd_inform_change_of_address"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ] as const,
} as const;

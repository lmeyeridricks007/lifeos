import type { MoneyTaxGuideOfficialSourceKey } from "../../tax-guide-for-expats/taxGuideContent.types";

/** Official-source groups — URLs resolve via `taxGuideOfficialSourceRegistry`. */
export const moneyTaxResidencyOfficialSources = {
  sectionId: "official-sources" as const,
  sectionTitle: "Official sources" as const,
  disclaimer:
    "Orientation only — not tax advice. Residency and filing rules are fact- and year-specific; confirm anything binding on Belastingdienst or with a qualified adviser.",
  groups: [
    {
      id: "bd-residency-return",
      title: "Belastingdienst — residency context, income tax & returns",
      keys: [
        "bd_income_tax_individuals",
        "bd_filing_return",
        "bd_immigration_emigration_tax_return",
      ] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-international-double-tax",
      title: "International topics, double taxation & treaties (awareness)",
      keys: [
        "bd_international_en",
        "bd_multiple_countries_double_taxation",
        "bd_when_tax_treaty_concluded",
        "gov_income_tax_allowances",
      ] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-payroll-box-context",
      title: "Payroll withholding & 30% facility (official framing)",
      keys: ["bd_payroll_taxes", "bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-allowances",
      title: "Allowances (toeslagen)",
      keys: ["toeslagen_portal"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-admin-context",
      title: "BSN & address updates (admin context — not a tax-residency verdict)",
      keys: ["bd_bsn_citizen_service_number", "bd_inform_change_of_address"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ] as const,
} as const;

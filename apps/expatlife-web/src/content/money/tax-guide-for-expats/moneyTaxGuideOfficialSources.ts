import type { MoneyTaxGuideOfficialSourceKey } from "./taxGuideContent.types";

export const moneyTaxGuideOfficialSources = {
  sectionId: "official-sources" as const,
  sectionTitle: "Official sources" as const,
  disclaimer:
    "Orientation only — not tax advice. Figures and rules vary by tax year; confirm anything binding on Belastingdienst or with a qualified adviser.",
  /** Ordered groups for the references panel; URLs resolved via registry. */
  groups: [
    {
      id: "bd-income-return",
      title: "Belastingdienst — income tax & returns",
      keys: ["bd_income_tax_individuals", "bd_filing_return"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-payroll",
      title: "Payroll tax / loonheffing",
      keys: ["bd_payroll_taxes"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-30",
      title: "30% ruling — official guidance",
      keys: ["bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-allowances",
      title: "Allowances (toeslagen)",
      keys: ["toeslagen_portal"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "gov-international",
      title: "International / cross-border orientation",
      keys: ["bd_international_en", "gov_income_tax_allowances"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ] as const,
} as const;

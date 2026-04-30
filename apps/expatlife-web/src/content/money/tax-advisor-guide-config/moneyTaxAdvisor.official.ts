import type { MoneyTaxGuideOfficialSourceKey } from "../tax-guide-for-expats/taxGuideContent.types";

/** Belastingdienst / government keys — resolved to URLs in `buildOfficialSourcesReferences`. */
export const moneyTaxAdvisorOfficialSources = {
  sectionId: "tax-advisors-official",
  sectionTitle: "Official sources — income tax, filing & cross-border",
  disclaimer:
    "Belastingdienst and government pages carry binding wording. This guide is editorial orientation — not tax advice and not a substitute for official instructions for your tax year.",
  groups: [
    {
      id: "bd-income",
      title: "Belastingdienst — income tax (individuals)",
      keys: ["bd_income_tax_individuals"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-filing",
      title: "Belastingdienst — filing the income tax return",
      keys: ["bd_filing_return"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-30",
      title: "Belastingdienst — 30% facility",
      keys: ["bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-international",
      title: "Belastingdienst — international / cross-border",
      keys: ["bd_international_en", "bd_multiple_countries_double_taxation", "bd_when_tax_treaty_concluded"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "allowances",
      title: "Allowances & household (toeslagen / orientation)",
      keys: ["toeslagen_portal", "gov_income_tax_allowances"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ],
} as const;

import type { MoneyTaxGuideOfficialSourceKey } from "../tax-guide-for-expats/taxGuideContent.types";

export const moneyThirtyRulingOfficialSources = {
  sectionId: "thirty-percent-ruling-official",
  sectionTitle: "Official sources — 30% facility & payroll",
  disclaimer:
    "Belastingdienst and government pages carry binding wording and updates. Use them to confirm facts for your tax year — this guide stays editorial.",
  groups: [
    {
      id: "bd-30-facility",
      title: "Belastingdienst — 30% facility (incoming employees)",
      keys: ["bd_30_percent_facility"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-payroll",
      title: "Belastingdienst — payroll taxes (employers)",
      keys: ["bd_payroll_taxes"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "bd-income",
      title: "Belastingdienst — income tax (individuals)",
      keys: ["bd_income_tax_individuals"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
    {
      id: "gov-income",
      title: "Government.nl — income tax & allowances (orientation)",
      keys: ["gov_income_tax_allowances"] as const satisfies readonly MoneyTaxGuideOfficialSourceKey[],
    },
  ],
} as const;

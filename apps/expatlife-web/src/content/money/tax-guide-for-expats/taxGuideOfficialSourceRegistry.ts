import type { MoneyTaxGuideOfficialSourceKey } from "./taxGuideContent.types";

export type OfficialSourceEntry = {
  key: MoneyTaxGuideOfficialSourceKey;
  label: string;
  href: string;
};

/** All outbound official URLs in one registry — update here when links change. */
export const MONEY_TAX_GUIDE_OFFICIAL_SOURCES: Record<MoneyTaxGuideOfficialSourceKey, OfficialSourceEntry> = {
  bd_income_tax_individuals: {
    key: "bd_income_tax_individuals",
    label: "Belastingdienst: income tax (individuals)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/income-tax/income-tax",
  },
  bd_filing_return: {
    key: "bd_filing_return",
    label: "Belastingdienst: filing your income tax return",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/income-tax/filing-your-income-tax-return/filing-your-income-tax-return",
  },
  bd_payroll_taxes: {
    key: "bd_payroll_taxes",
    label: "Belastingdienst: payroll tax (employers, overview)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll-taxes/payroll-taxes",
  },
  bd_30_percent_facility: {
    key: "bd_30_percent_facility",
    label: "Belastingdienst: 30% facility for incoming employees",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/income-tax/working/incoming_employees/facility_for_incoming_employees/facility_for_incoming_employees",
  },
  toeslagen_portal: {
    key: "toeslagen_portal",
    label: "Toeslagen: healthcare allowance and other allowances (DUO portal family)",
    href: "https://www.toeslagen.nl/",
  },
  bd_international_en: {
    key: "bd_international_en",
    label: "Belastingdienst: international topics (English hub)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals",
  },
  gov_income_tax_allowances: {
    key: "gov_income_tax_allowances",
    label: "Government.nl: income tax and benefits",
    href: "https://www.government.nl/topics/income-tax-and-allowances",
  },
  bd_multiple_countries_double_taxation: {
    key: "bd_multiple_countries_double_taxation",
    label: "Belastingdienst: income from multiple countries and double taxation (English)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/multiple-countries-double-taxation",
  },
  bd_when_tax_treaty_concluded: {
    key: "bd_when_tax_treaty_concluded",
    label: "Belastingdienst: when is a tax treaty concluded? (English)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/when-is-a-tax-treaty-concluded",
  },
  bd_immigration_emigration_tax_return: {
    key: "bd_immigration_emigration_tax_return",
    label: "Belastingdienst: tax return when partly living outside the Netherlands (English)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/partly-living-outside-the-netherlands-m-tax-return",
  },
  bd_bsn_citizen_service_number: {
    key: "bd_bsn_citizen_service_number",
    label: "Belastingdienst: how to apply for a citizen service number (BSN) (English)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/how-to-apply-for-a-citizen-service-number",
  },
  bd_inform_change_of_address: {
    key: "bd_inform_change_of_address",
    label: "Belastingdienst: inform us of a change of address (English)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/inform-change-of-address",
  },
};

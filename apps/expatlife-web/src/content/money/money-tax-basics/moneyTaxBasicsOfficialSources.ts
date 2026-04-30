import { moneyTaxGuideOfficialSources } from "../tax-guide-for-expats/moneyTaxGuideOfficialSources";
import type { MoneyTaxBasicsOfficialSourcesConfig } from "./moneyTaxBasics.types";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "./moneyTaxBasicsTaxYear";

const flatKeys = moneyTaxGuideOfficialSources.groups.flatMap((g) => [...g.keys]);

export const moneyTaxBasicsOfficialSources = {
  taxYearLabel: MONEY_TAX_BASICS_CONTENT_TAX_YEAR,
  sectionId: moneyTaxGuideOfficialSources.sectionId,
  sectionTitle: moneyTaxGuideOfficialSources.sectionTitle,
  intro: moneyTaxGuideOfficialSources.disclaimer,
  keyPoints: [] as const,
  cautionNote: "Confirm any binding detail on Belastingdienst for your tax year.",
  relatedToolKeys: [] as const,
  officialSourceKeys: flatKeys,
  groups: moneyTaxGuideOfficialSources.groups,
} as const satisfies MoneyTaxBasicsOfficialSourcesConfig;

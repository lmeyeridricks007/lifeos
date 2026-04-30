import type { MoneyTaxBasicsRecommendedServicesConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsRecommendedServices = {
  id: "recommended-services",
  eyebrow: "Optional next step",
  title: "Tax support options",
  intro:
    "Many people file on their own when the year is straightforward. Paid support is useful when you want a second pair of eyes on cross-border facts, self-employment, move-year timing, household complexity, or ruling questions — often a one-off review is enough.",
  keyPoints: [] as const,
  cautionNote: "Listing services is not an endorsement — compare providers like any other purchase.",
  relatedToolKeys: ["taxGuideForExpats", "taxesHub"] as const,
  officialSourceKeys: [] as const,
  whenHelpBullets: [
    "You want confidence before filing on cross-border income or assets",
    "Self-employment or mixed wage and business income",
    "Arrival or departure year with extra sections to sanity-check",
    "Partner or household facts that change multiple parts of the return",
    "30% ruling setup or documentation you cannot resolve with payroll alone",
  ],
} as const satisfies MoneyTaxBasicsRecommendedServicesConfig;

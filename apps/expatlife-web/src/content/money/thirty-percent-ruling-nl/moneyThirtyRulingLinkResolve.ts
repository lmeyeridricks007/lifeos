import { THIRTY_PERCENT_RULING_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import type { MoneyThirtyRulingExtraLinkKey, MoneyThirtyRulingRelatedToolKey, MoneyThirtyRulingResolvedLink } from "./moneyThirtyRulingContent.types";

const EXTRA: Record<
  MoneyThirtyRulingExtraLinkKey,
  {
    resolve: (canonical: string) => { href: string; label: string };
  }
> = {
  rulingToolInputs: {
    resolve: () => ({
      href: `${taxGuideRoutes.ruling}#tool-inputs`,
      label: "30% calculator (partial year / months)",
    }),
  },
  guideEligibility: {
    resolve: (canonical) => ({
      href: `${canonical}#eligibility`,
      label: "Salary threshold context (this guide)",
    }),
  },
  guideEmployeeEmployer: {
    resolve: (canonical) => ({
      href: `${canonical}#employee-employer`,
      label: "Maximum vs actual benefit (this guide)",
    }),
  },
  guideSalaryNetCaps: {
    resolve: (canonical) => ({
      href: `${canonical}#salary-net-caps`,
      label: "Annual vs monthly & caps (this guide)",
    }),
  },
  guideTaxYearChanges: {
    resolve: (canonical) => ({
      href: `${canonical}#tax-year-changes`,
      label: "Rule changes by tax year",
    }),
  },
  guideRecommendedServices: {
    resolve: (canonical) => ({
      href: `${canonical}#recommended-services`,
      label: "Tax & relocation help (this page)",
    }),
  },
};

const isExtra = (k: string): k is MoneyThirtyRulingExtraLinkKey => k in EXTRA;

/** Resolve editorial link keys to href/label — no numeric thresholds. */
export function resolveMoneyThirtyRulingLinks(
  keys: readonly MoneyThirtyRulingRelatedToolKey[],
  canonical: string = THIRTY_PERCENT_RULING_NL_PATH,
  labelOverrides?: readonly (string | undefined)[]
): MoneyThirtyRulingResolvedLink[] {
  return keys.map((key, i) => {
    const resolved = isExtra(key)
      ? EXTRA[key].resolve(canonical)
      : resolveTaxGuideTool(key as MoneyTaxGuideToolKey);
    const label = labelOverrides?.[i] ?? resolved.label;
    return { href: resolved.href, label };
  });
}

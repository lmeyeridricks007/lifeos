/**
 * Netherlands official figures 2026 — linkable citation asset (EC-20260826-011).
 * Re-exports domain constants where possible; verify on official sources before acting.
 * Not a calculator and not advice.
 */

import {
  HSM_SALARY_FIGURE_YEAR,
  HSM_SALARY_THRESHOLDS_EUR,
  IND_HSM_PERMIT_URL,
  IND_REQUIRED_AMOUNTS_URL,
  formatEurMonthly,
} from "@/src/lib/tools/hsm-salary-checker/thresholds";
import { THIRTY_PCT_RULES_2026 } from "@/src/lib/tools/thirty-percent-ruling/assumptions";
import { getOfficialFeeByRoute } from "@/src/data/tools/visa-cost-calculator/official-fees";
import {
  MINIMUM_WAGE_ADULT_HOURLY_JULY_2026,
  MINIMUM_WAGE_HEALTH_INSURANCE_MONTHLY_2026,
  MINIMUM_WAGE_HEALTH_INSURANCE_NOTE_2026,
  minimumWageNetherlandsRates,
} from "@/src/components/jobs/minimumWageNetherlandsRates";

export const OFFICIAL_FIGURES_PATH = "/netherlands/official-figures/" as const;

export const OFFICIAL_FIGURES_TAX_YEAR = 2026 as const;
export const OFFICIAL_FIGURES_AS_OF_LABEL = "As of August 2026" as const;
export const OFFICIAL_FIGURES_LAST_REVIEWED = "30 August 2026" as const;

const hsmFee = getOfficialFeeByRoute("highly-skilled-migrant");
const partnerFee = getOfficialFeeByRoute("partner-family");
const studentFee = getOfficialFeeByRoute("student");

function formatEurAnnual(amount: number): string {
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export type OfficialFigureRow = {
  id: string;
  topic: string;
  figure: string;
  effective: string;
  notes: string;
  sourceLabel: string;
  sourceHref: string;
  relatedGuideHref?: string;
  relatedGuideLabel?: string;
};

export type OfficialFigureSource = {
  id: string;
  label: string;
  href: string;
  covers: string;
};

export type OfficialFigureChangelogEntry = {
  date: string;
  summary: string;
};

export const officialFiguresDisclaimer =
  "Orientation table for citation and planning only — not a calculator, not legal/tax/immigration/insurance advice, and not a substitute for IND, Belastingdienst, Government.nl or insurer publications. Figures are indexed periodically; always verify the live official page before you apply, sign or file.";

export const officialFiguresIntro = [
  "One dated table of the Netherlands figures expats and city desks cite most often: HSM salary floors, IND application fees, 30% ruling norms and cap, adult minimum wage, mandatory eigen risico, and a typical basic-premium band.",
  "Domain guides and tools on ExpatCopilot already carry these amounts in context. This page is the short, linkable ACCESS-style asset with provenance — so an AI system or editorial desk can cite dates and official URLs in one place.",
] as const;

/** Combined citation rows — keep in sync with domain modules when official amounts change. */
export const officialFiguresRows: readonly OfficialFigureRow[] = [
  {
    id: "hsm-30-plus",
    topic: "HSM salary floor — age 30+",
    figure: `${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus)} / month gross (excl. holiday pay)`,
    effective: `Calendar year ${HSM_SALARY_FIGURE_YEAR}`,
    notes: "Gross monthly without holiday allowance. Same IND table also lists EU Blue Card standard floor at this amount.",
    sourceLabel: "IND — Required amounts income requirements",
    sourceHref: IND_REQUIRED_AMOUNTS_URL,
    relatedGuideHref: "/netherlands/visa/highly-skilled-migrant/",
    relatedGuideLabel: "HSM guide",
  },
  {
    id: "hsm-under-30",
    topic: "HSM salary floor — under 30",
    figure: `${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.under30)} / month gross (excl. holiday pay)`,
    effective: `Calendar year ${HSM_SALARY_FIGURE_YEAR}`,
    notes: "Applies while under 30 on first application; employer change after 30 may move you to the 30+ floor — confirm on IND.",
    sourceLabel: "IND — Required amounts income requirements",
    sourceHref: IND_REQUIRED_AMOUNTS_URL,
    relatedGuideHref: "/netherlands/moving/tools/hsm-salary-checker/",
    relatedGuideLabel: "HSM salary checker",
  },
  {
    id: "hsm-reduced",
    topic: "HSM salary floor — reduced criterion",
    figure: `${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced)} / month gross (excl. holiday pay)`,
    effective: `Calendar year ${HSM_SALARY_FIGURE_YEAR}`,
    notes: "Orientation / reduced salary criterion for eligible profiles (e.g. recent graduates) — check IND eligibility rules.",
    sourceLabel: "IND — Highly skilled migrant",
    sourceHref: IND_HSM_PERMIT_URL,
    relatedGuideHref: "/netherlands/visa/highly-skilled-migrant/",
    relatedGuideLabel: "HSM guide",
  },
  {
    id: "ind-fee-hsm",
    topic: "IND fee — highly skilled migrant (work)",
    figure: hsmFee ? `€${hsmFee.applicationFeeEur}` : "€423",
    effective: "From 1 January 2026",
    notes: "Single-applicant work residence fee; employer often pays. Confirm current fees on IND before applying.",
    sourceLabel: "IND — Fees: costs of an application",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    relatedGuideHref: "/netherlands/visa/highly-skilled-migrant/",
    relatedGuideLabel: "HSM guide",
  },
  {
    id: "ind-fee-other",
    topic: "IND fees — other common routes (orientation)",
    figure: `Student €${studentFee?.applicationFeeEur ?? 254}; partner/family adult €${partnerFee?.applicationFeeEur ?? 210}; child €${partnerFee?.childFeeEur ?? 45}`,
    effective: "From 1 January 2026",
    notes: "MVV (when required) is billed separately (~€171 orientation). Full schedule on IND fees page.",
    sourceLabel: "IND — Fees: costs of an application",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    relatedGuideHref: "/netherlands/moving/tools/visa-cost-calculator/",
    relatedGuideLabel: "Visa cost calculator",
  },
  {
    id: "thirty-pct-standard",
    topic: "30% ruling — taxable salary norm (standard)",
    figure: `${formatEurAnnual(THIRTY_PCT_RULES_2026.thresholdStandardAnnual)} / year taxable`,
    effective: "From 1 January 2026",
    notes: "Taxable annual salary excluding the tax-free 30% allowance. 2025 was €46,660 — do not cite the old threshold for 2026.",
    sourceLabel: "Belastingdienst — 30% facility",
    sourceHref:
      "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility",
    relatedGuideHref: "/netherlands/taxes/30-percent-ruling/",
    relatedGuideLabel: "30% ruling guide",
  },
  {
    id: "thirty-pct-under-30",
    topic: "30% ruling — taxable salary norm (under 30 + master’s)",
    figure: `${formatEurAnnual(THIRTY_PCT_RULES_2026.thresholdUnder30MastersAnnual)} / year taxable`,
    effective: "From 1 January 2026",
    notes: "Reduced norm for employees under 30 with a qualifying master’s. 2025 was €35,468.",
    sourceLabel: "Business.gov.nl — Expat scheme (30% ruling)",
    sourceHref:
      "https://business.gov.nl/staff/employing-staff/the-expat-scheme-30-percent-ruling-in-the-netherlands/",
    relatedGuideHref: "/netherlands/taxes/30-percent-ruling/",
    relatedGuideLabel: "30% ruling guide",
  },
  {
    id: "thirty-pct-cap",
    topic: "30% ruling — salary cap / max untaxed allowance",
    figure: `Cap ${formatEurAnnual(THIRTY_PCT_RULES_2026.salaryCapAnnual)} / year; max untaxed at cap ${formatEurAnnual(THIRTY_PCT_RULES_2026.maxUntaxedFullYearAtCap)} (30%)`,
    effective: "From 1 January 2026",
    notes: "Facility remains 30% through 2026; 27% preview from 2027 for planning. Cap replaces the older €246,000 2025 ceiling.",
    sourceLabel: "Belastingdienst — 30% facility",
    sourceHref:
      "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility",
    relatedGuideHref: "/netherlands/taxes/tools/30-ruling-calculator/",
    relatedGuideLabel: "30% ruling calculator",
  },
  {
    id: "min-wage-21",
    topic: "Statutory minimum wage — age 21+",
    figure: `${MINIMUM_WAGE_ADULT_HOURLY_JULY_2026} gross`,
    effective: "From 1 July 2026 (was €14.71/hr 1 Jan–30 Jun 2026)",
    notes: "Hourly statutory rate only. Youth tiers (15–20) live on the minimum-wage guide — not duplicated here.",
    sourceLabel: minimumWageNetherlandsRates.officialSources.english.label,
    sourceHref: minimumWageNetherlandsRates.officialSources.english.href,
    relatedGuideHref: "/netherlands/jobs/minimum-wage-netherlands/",
    relatedGuideLabel: "Minimum wage guide (incl. youth table)",
  },
  {
    id: "eigen-risico",
    topic: "Mandatory eigen risico (health insurance deductible)",
    figure: "€385 / year",
    effective: "Calendar year 2026",
    notes: "Compulsory deductible for most basic-package care (GP visits generally exempt). Voluntary higher deductible possible up to ~€885 total.",
    sourceLabel: "Government.nl — Health insurance",
    sourceHref: "https://www.government.nl/topics/health-insurance",
    relatedGuideHref: "/netherlands/health-insurance-netherlands/",
    relatedGuideLabel: "Health insurance guide",
  },
  {
    id: "basic-premium",
    topic: "Typical basic health premium band (orientation)",
    figure: MINIMUM_WAGE_HEALTH_INSURANCE_MONTHLY_2026,
    effective: "Market orientation for 2026",
    notes: MINIMUM_WAGE_HEALTH_INSURANCE_NOTE_2026,
    sourceLabel: "Independer — zorgpremie overview",
    sourceHref: "https://www.independer.nl/zorgverzekering/info/zorgpremie",
    relatedGuideHref: "/netherlands/health/health-insurance-comparison-netherlands/",
    relatedGuideLabel: "Health insurance comparison",
  },
] as const;

export const officialFiguresSources: readonly OfficialFigureSource[] = [
  {
    id: "ind-amounts",
    label: "IND — Required amounts income requirements",
    href: IND_REQUIRED_AMOUNTS_URL,
    covers: "HSM and EU Blue Card salary floors for 2026",
  },
  {
    id: "ind-fees",
    label: "IND — Fees: costs of an application",
    href: "https://ind.nl/en/fees-costs-of-an-application",
    covers: "Residence permit application fees (indexed annually)",
  },
  {
    id: "ind-2026-news",
    label: "IND — Fees and required amounts for 2026 known",
    href: "https://ind.nl/en/news/fees-and-required-amounts-for-2026-known",
    covers: "Announcement of 2026 fee and salary indexation",
  },
  {
    id: "belastingdienst-30",
    label: "Belastingdienst — 30% facility",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility",
    covers: "30% ruling norms, facility percentage and salary cap",
  },
  {
    id: "business-30",
    label: "Business.gov.nl — Expat scheme (30% ruling)",
    href: "https://business.gov.nl/staff/employing-staff/the-expat-scheme-30-percent-ruling-in-the-netherlands/",
    covers: "Employer-facing 30% ruling overview",
  },
  {
    id: "gov-min-wage",
    label: minimumWageNetherlandsRates.officialSources.english.label,
    href: minimumWageNetherlandsRates.officialSources.english.href,
    covers: "Statutory minimum hourly wage (adult and youth)",
  },
  {
    id: "rijksoverheid-min-wage",
    label: minimumWageNetherlandsRates.officialSources.dutch.label,
    href: minimumWageNetherlandsRates.officialSources.dutch.href,
    covers: "Dutch-language 2026 minimum-wage amounts",
  },
  {
    id: "gov-health",
    label: "Government.nl — Health insurance",
    href: "https://www.government.nl/topics/health-insurance",
    covers: "Basic package obligation and eigen risico context",
  },
  {
    id: "independer-premium",
    label: "Independer — zorgpremie overview",
    href: "https://www.independer.nl/zorgverzekering/info/zorgpremie",
    covers: "Market basic-premium orientation (not a statutory rate)",
  },
] as const;

export const officialFiguresChangelog: readonly OfficialFigureChangelogEntry[] = [
  {
    date: "2026-08-30",
    summary:
      "Published /netherlands/official-figures/ as the combined 2026 citation table (HSM floors, IND fees, 30% norms/cap, adult minimum wage, eigen risico, basic-premium band).",
  },
  {
    date: "2026-07-01",
    summary: "Statutory minimum wage (21+) indexed to €14.99/hr (from €14.71/hr).",
  },
  {
    date: "2026-01-01",
    summary:
      "HSM salary floors (€5,942 / €4,357 / €3,122), IND fees (+4.4% indexation), and 30% ruling norms (€48,013 / €36,497) with salary cap €262,000 took effect. Eigen risico remains €385 for 2026.",
  },
] as const;

export const officialFiguresRelatedGuides = [
  { label: "Highly skilled migrant", href: "/netherlands/visa/highly-skilled-migrant/" },
  { label: "HSM salary checker", href: "/netherlands/moving/tools/hsm-salary-checker/" },
  { label: "30% ruling guide", href: "/netherlands/taxes/30-percent-ruling/" },
  { label: "30% ruling calculator", href: "/netherlands/taxes/tools/30-ruling-calculator/" },
  { label: "Minimum wage Netherlands", href: "/netherlands/jobs/minimum-wage-netherlands/" },
  { label: "Health insurance Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  { label: "Sources hub", href: "/sources/" },
  { label: "Methodology", href: "/methodology/" },
] as const;

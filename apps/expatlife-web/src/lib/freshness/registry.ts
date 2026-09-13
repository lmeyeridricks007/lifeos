/**
 * Priority freshness inventory for high-sensitivity ExpatCopilot pages.
 * Dates here must match the live page model / statutory module — do not invent.
 */

import { IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL, IND_REQUIRED_AMOUNTS_LAST_VERIFIED } from "@/src/lib/statutory/indRequiredAmounts";
import {
  HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_LABEL,
  HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED,
} from "@/src/lib/freshness/hsmBlueCardThresholdsFreshness";
import { formatFreshnessDisplayDate } from "@/src/lib/freshness/format";
import type { ContentFreshnessMeta, FreshnessInventoryRow } from "@/src/lib/freshness/types";

/** Priority routes audited in the freshness system rollout. */
export const FRESHNESS_PRIORITY_PAGES = {
  euBlueCard: {
    url: "/netherlands/visa/eu-blue-card/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED,
    lastModified: HSM_BLUE_CARD_THRESHOLDS_LAST_VERIFIED,
    effectiveFrom: "2026-01-01",
    effectiveTo: "2026-12-31",
    effectivePeriodLabel: HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_LABEL,
    officialSources: [
      { label: "IND — European Blue Card", href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit" },
      { label: "IND — Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
      { label: "IND — Application fees", href: "https://ind.nl/en/fees-costs-of-an-application" },
    ],
    reviewNotes: "Salary floors aligned to thresholds.ts (re-verified 7 Sep 2026 vs IND).",
  },
  digid: {
    url: "/netherlands/practical-life/digid-netherlands/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-09-13",
    lastModified: "2026-09-13",
    officialSources: [
      { label: "DigiD", href: "https://www.digid.nl/" },
      { label: "Government.nl", href: "https://www.government.nl/" },
      { label: "Rijksoverheid", href: "https://www.rijksoverheid.nl/" },
    ],
    reviewNotes: "Process guide reviewed for ATF trust; publishDate was future-scheduled and is not used as dateModified.",
  },
  first90Days: {
    url: "/netherlands/first-90-days-netherlands/",
    sensitivity: "MEDIUM_SENSITIVITY",
    lastReviewed: "2026-09-13",
    lastModified: "2026-09-13",
    officialSources: [
      { label: "Government.nl — Coming to NL", href: "https://www.government.nl/" },
      { label: "IND", href: "https://ind.nl/en" },
    ],
    reviewNotes: "Arrival admin narrative reviewed; pairs with interactive planner tool.",
  },
  openBankAccount: {
    url: "/netherlands/open-bank-account-netherlands/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-08-12",
    lastModified: "2026-08-12",
    officialSources: [
      { label: "Netherlands Worldwide", href: "https://www.netherlandsworldwide.nl/" },
    ],
    reviewNotes: "Uses existing content publish/review date; ATF trust strip added.",
  },
  housing: {
    url: "/netherlands/housing/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-09-13",
    lastModified: "2026-09-13",
    effectivePeriodLabel: "Pararius Huurmonitor Q1 2026 (rent bands)",
    officialSources: [
      { label: "Pararius Huurmonitor (Q1 2026)", href: "https://www.pararius.com/news/dutch-rental-prices-outpace-house-prices" },
      { label: "Government.nl", href: "https://www.government.nl/" },
      { label: "Kadaster", href: "https://www.kadaster.nl/" },
    ],
    reviewNotes: "Hub rent bands cited to Q1 2026 Pararius; future publishDate not used as dateModified.",
  },
  partnerFamilyVisa: {
    url: "/netherlands/visa/partner-family-visa/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: IND_REQUIRED_AMOUNTS_LAST_VERIFIED,
    lastModified: IND_REQUIRED_AMOUNTS_LAST_VERIFIED,
    effectiveFrom: "2026-07-01",
    effectiveTo: "2026-12-31",
    effectivePeriodLabel: IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL,
    officialSources: [
      { label: "IND — Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
    ],
    reviewNotes: "Already on IND required-amounts spine (report 01).",
  },
  selfEmployedVisa: {
    url: "/netherlands/visa/self-employed-visa/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: IND_REQUIRED_AMOUNTS_LAST_VERIFIED,
    lastModified: IND_REQUIRED_AMOUNTS_LAST_VERIFIED,
    effectiveFrom: "2026-07-01",
    effectiveTo: "2026-12-31",
    effectivePeriodLabel: IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL,
    officialSources: [
      { label: "IND — Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
    ],
    reviewNotes: "Already on IND required-amounts spine (report 01).",
  },
  hsm: {
    url: "/netherlands/visa/highly-skilled-migrant/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-08-26",
    lastModified: "2026-08-26",
    effectiveFrom: "2026-01-01",
    effectiveTo: "2026-12-31",
    effectivePeriodLabel: HSM_BLUE_CARD_THRESHOLDS_EFFECTIVE_LABEL,
    officialSources: [
      { label: "IND — Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
      { label: "IND — Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
    ],
    reviewNotes: "ATF present; schema dateModified 2026-08-26. Thresholds also re-checked 7 Sep 2026 in thresholds.ts.",
  },
  thirtyPercentRuling: {
    url: "/netherlands/taxes/30-percent-ruling/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-08-26",
    lastModified: "2026-08-26",
    officialSources: [
      { label: "Belastingdienst", href: "https://www.belastingdienst.nl/" },
    ],
    reviewNotes: "Existing lastReviewed + heroOfficialSources in page model.",
  },
  healthInsuranceComparison: {
    url: "/netherlands/health/health-insurance-comparison-netherlands/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-08-30",
    lastModified: "2026-08-30",
    officialSources: [
      { label: "Government.nl — Health insurance", href: "https://www.government.nl/topics/health-insurance" },
      { label: "Rijksoverheid — Zorgverzekering", href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering" },
    ],
    reviewNotes: "Visible lastReviewed present; schema now uses 2026-08-30 (not future publishDate).",
  },
  officialFigures: {
    url: "/netherlands/official-figures/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-09-13",
    lastModified: "2026-09-13",
    effectiveFrom: "2026-07-01",
    effectiveTo: "2026-12-31",
    effectivePeriodLabel: IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL,
    officialSources: [
      { label: "IND — Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
    ],
    reviewNotes: "Statutory spine page; already ATF + schema aligned.",
  },
  inburgering: {
    url: "/netherlands/integration/inburgering/",
    sensitivity: "HIGH_SENSITIVITY",
    lastReviewed: "2026-08-30",
    lastModified: "2026-08-30",
    effectiveFrom: "2025-07-01",
    effectivePeriodLabel: "KNM revised end terms from 1 July 2025 (still current in 2026)",
    officialSources: [
      { label: "DUO / inburgeren.nl", href: "https://www.inburgeren.nl/" },
      { label: "IND", href: "https://ind.nl/en" },
    ],
    reviewNotes: "Removed stale '(2025)' title framing after validating KNM July-2025 change still applies; body dates kept.",
  },
} as const satisfies Record<string, ContentFreshnessMeta & { url: string }>;

export function buildFreshnessInventoryRows(): FreshnessInventoryRow[] {
  return Object.values(FRESHNESS_PRIORITY_PAGES).map((page) => ({
    url: page.url,
    sensitivity: page.sensitivity,
    lastReviewedVisible: formatFreshnessDisplayDate(page.lastReviewed),
    schemaDateModified: page.lastModified ?? page.lastReviewed,
    officialSources: page.officialSources.map((s) => s.label).join(" / "),
    effectivePeriod: page.effectivePeriodLabel ?? "",
    action: page.reviewNotes ?? "",
    status: "IMPLEMENTED",
  }));
}

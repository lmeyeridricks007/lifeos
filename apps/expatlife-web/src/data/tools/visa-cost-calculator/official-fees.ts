/**
 * Official IND application fees by route.
 * Source of truth: IND fees page. Confirm current values before applying.
 * @see https://ind.nl/en/fees-costs-of-an-application
 */

import type { VisaCostRouteId } from "./types";

export type OfficialFeeEntry = {
  routeId: VisaCostRouteId;
  /** Main application fee in EUR (single applicant) */
  applicationFeeEur: number;
  feeLabel: string;
  sourceHref: string;
  note?: string;
  /** Optional: child fee for partner/family route */
  childFeeEur?: number;
  /** Optional: MVV fee when applicable */
  mvvFeeEur?: number;
};

export const OFFICIAL_FEES: OfficialFeeEntry[] = [
  {
    routeId: "highly-skilled-migrant",
    applicationFeeEur: 423,
    feeLabel: "Residence permit (work)",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Employer typically pays; confirm with sponsor.",
  },
  {
    routeId: "eu-blue-card",
    applicationFeeEur: 423,
    feeLabel: "EU Blue Card",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Check IND for current fee.",
  },
  {
    routeId: "self-employed",
    applicationFeeEur: 423,
    feeLabel: "Self-employed residence permit",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "€423 official fee; confirm on IND fees page.",
  },
  {
    routeId: "daft",
    applicationFeeEur: 423,
    feeLabel: "Self-employed (DAFT)",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Same permit type as self-employed; €423. Investment requirement separate.",
  },
  {
    routeId: "student",
    applicationFeeEur: 254,
    feeLabel: "Study residence permit",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Institution often submits; €254 current figure.",
  },
  {
    routeId: "partner-family",
    applicationFeeEur: 210,
    childFeeEur: 45,
    mvvFeeEur: 171,
    feeLabel: "Partner / family residence",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Adult €210; child €45; MVV ~€171 when required.",
  },
  {
    routeId: "not-sure",
    applicationFeeEur: 0,
    feeLabel: "—",
    sourceHref: "https://ind.nl/en/fees-costs-of-an-application",
    note: "Select a route for a fee estimate.",
  },
];

export function getOfficialFeeByRoute(routeId: VisaCostRouteId): OfficialFeeEntry | undefined {
  return OFFICIAL_FEES.find((f) => f.routeId === routeId);
}

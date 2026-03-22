/**
 * Official IND decision periods by visa route.
 * Source: IND decision periods overview and route-specific pages.
 * https://ind.nl/en/after-your-application/decision-periods
 */

export type RouteId =
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "self-employed"
  | "daft"
  | "student"
  | "partner-family"
  | "not-sure";

export interface OfficialDecisionPeriodEntry {
  routeId: RouteId;
  label: string;
  /** Typical decision period in days (IND statutory or stated). */
  decisionPeriodDays: number;
  /** Optional extension in days (e.g. self-employed up to 6 months). */
  extensionNote?: string;
  sourceHref: string;
}

const IND_BASE = "https://ind.nl/en/after-your-application/decision-periods";

export const OFFICIAL_DECISION_PERIODS: OfficialDecisionPeriodEntry[] = [
  {
    routeId: "highly-skilled-migrant",
    label: "Highly Skilled Migrant",
    decisionPeriodDays: 90,
    sourceHref: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant",
  },
  {
    routeId: "eu-blue-card",
    label: "EU Blue Card",
    decisionPeriodDays: 90,
    sourceHref: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit",
  },
  {
    routeId: "self-employed",
    label: "Self-Employed",
    decisionPeriodDays: 90,
    extensionNote: "May be extended up to 6 months in some cases.",
    sourceHref: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person",
  },
  {
    routeId: "daft",
    label: "DAFT (Dutch-American Friendship Treaty)",
    decisionPeriodDays: 90,
    sourceHref: "https://ind.nl/en/residence-permits/work/dutch-american-friendship-treaty-daft",
  },
  {
    routeId: "student",
    label: "Student (university / HBO)",
    decisionPeriodDays: 60,
    sourceHref: "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education",
  },
  {
    routeId: "partner-family",
    label: "Partner / Family",
    decisionPeriodDays: 90,
    sourceHref: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner",
  },
  {
    routeId: "not-sure",
    label: "General (route not selected)",
    decisionPeriodDays: 90,
    sourceHref: IND_BASE,
  },
];

export function getOfficialDecisionPeriod(routeId: RouteId): OfficialDecisionPeriodEntry | undefined {
  return OFFICIAL_DECISION_PERIODS.find((e) => e.routeId === routeId);
}

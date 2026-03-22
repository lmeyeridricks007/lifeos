/**
 * Route-specific cost profiles: typical prep complexity and extra cost bands.
 * Used for comparison table and engine logic.
 */

import type { VisaCostRouteId } from "./types";

export type RouteCostProfile = {
  routeId: VisaCostRouteId;
  label: string;
  typicalOfficialFeeEur: number;
  typicalPrepComplexity: "low" | "medium" | "high";
  typicalTotalPlanningBand: string;
  bestFor: string;
  guidePath: string;
};

const BASE = "/netherlands";

export const ROUTE_COST_PROFILES: RouteCostProfile[] = [
  {
    routeId: "highly-skilled-migrant",
    label: "Highly Skilled Migrant",
    typicalOfficialFeeEur: 423,
    typicalPrepComplexity: "medium",
    typicalTotalPlanningBand: "€1,500 – €6,000+",
    bestFor: "Employed professionals with sponsor",
    guidePath: `${BASE}/visa/highly-skilled-migrant/`,
  },
  {
    routeId: "eu-blue-card",
    label: "EU Blue Card",
    typicalOfficialFeeEur: 423,
    typicalPrepComplexity: "medium",
    typicalTotalPlanningBand: "€1,500 – €6,000+",
    bestFor: "Highly qualified employees",
    guidePath: `${BASE}/visa/eu-blue-card/`,
  },
  {
    routeId: "self-employed",
    label: "Self-Employed",
    typicalOfficialFeeEur: 423,
    typicalPrepComplexity: "high",
    typicalTotalPlanningBand: "€2,500 – €10,000+",
    bestFor: "Entrepreneurs without DAFT",
    guidePath: `${BASE}/visa/self-employed-visa/`,
  },
  {
    routeId: "daft",
    label: "DAFT",
    typicalOfficialFeeEur: 423,
    typicalPrepComplexity: "high",
    typicalTotalPlanningBand: "€5,000 – €15,000+",
    bestFor: "US citizens, self-employed",
    guidePath: `${BASE}/visa/dutch-american-friendship-treaty/`,
  },
  {
    routeId: "student",
    label: "Student",
    typicalOfficialFeeEur: 254,
    typicalPrepComplexity: "medium",
    typicalTotalPlanningBand: "€1,200 – €5,000+",
    bestFor: "Admitted students",
    guidePath: `${BASE}/visa/student-visa/`,
  },
  {
    routeId: "partner-family",
    label: "Partner / Family",
    typicalOfficialFeeEur: 210,
    typicalPrepComplexity: "medium",
    typicalTotalPlanningBand: "€2,000 – €8,000+",
    bestFor: "Joining sponsor in NL",
    guidePath: `${BASE}/visa/partner-family-visa/`,
  },
  {
    routeId: "not-sure",
    label: "Not sure yet",
    typicalOfficialFeeEur: 0,
    typicalPrepComplexity: "medium",
    typicalTotalPlanningBand: "Varies by route",
    bestFor: "Use Visa Checker first",
    guidePath: `${BASE}/visa-checker/`,
  },
];

export function getRouteCostProfile(routeId: VisaCostRouteId): RouteCostProfile | undefined {
  return ROUTE_COST_PROFILES.find((p) => p.routeId === routeId);
}

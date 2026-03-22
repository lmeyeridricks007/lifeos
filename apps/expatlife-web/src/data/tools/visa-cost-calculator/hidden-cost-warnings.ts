/**
 * Hidden or easy-to-forget cost warnings by context.
 * Used in results to surface route- and situation-specific risks.
 */

import type { VisaCostRouteId } from "./types";

export type HiddenCostWarning = {
  id: string;
  text: string;
  routes?: VisaCostRouteId[];
  /** When true, show for family/partner household */
  forFamily?: boolean;
  /** When true, show when pets included */
  forPets?: boolean;
  /** When true, show for long-haul */
  forLongHaul?: boolean;
  /** When true, show for student route */
  forStudent?: boolean;
  /** When true, show for entrepreneur routes */
  forEntrepreneur?: boolean;
};

export const HIDDEN_COST_WARNINGS: HiddenCostWarning[] = [
  {
    id: "apostille-legalization",
    text: "Apostille or legalization can add both cost and time; plan early and confirm requirements for your country.",
    routes: undefined,
  },
  {
    id: "family-docs-flights",
    text: "Family and children can increase civil-document and flight costs.",
    forFamily: true,
  },
  {
    id: "temp-housing-cities",
    text: "Temporary housing may cost more than expected in large Dutch cities (Amsterdam, Utrecht, The Hague).",
    routes: undefined,
  },
  {
    id: "entrepreneur-admin",
    text: "Self-employed and entrepreneur routes often have extra business-admin and registration costs.",
    forEntrepreneur: true,
  },
  {
    id: "student-first-month",
    text: "Student movers may underestimate first-month setup and housing costs.",
    forStudent: true,
  },
  {
    id: "long-haul-flights",
    text: "Long-haul routes can raise flights and luggage costs sharply.",
    forLongHaul: true,
  },
  {
    id: "pet-travel",
    text: "Pet travel (crate, vet documents, airline fees) can add several hundred euros.",
    forPets: true,
  },
];

export function getRelevantWarnings(
  routeId: VisaCostRouteId,
  options: { family: boolean; pets: boolean; longHaul: boolean }
): HiddenCostWarning[] {
  const entrepreneurRoutes: VisaCostRouteId[] = ["daft", "self-employed"];
  const isEntrepreneur = entrepreneurRoutes.includes(routeId);
  const isStudent = routeId === "student";

  return HIDDEN_COST_WARNINGS.filter((w) => {
    if (w.routes && w.routes.length > 0 && !w.routes.includes(routeId)) return false;
    if (w.forFamily && !options.family) return false;
    if (w.forPets && !options.pets) return false;
    if (w.forLongHaul && !options.longHaul) return false;
    if (w.forStudent && !isStudent) return false;
    if (w.forEntrepreneur && !isEntrepreneur) return false;
    return true;
  });
}

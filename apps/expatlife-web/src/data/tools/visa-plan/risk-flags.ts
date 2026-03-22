/**
 * Risk and bottleneck flags for the visa application plan.
 * The plan engine selects flags based on user answers.
 */

import type { RiskFlag } from "@/src/lib/visa-plan/types";

export const RISK_FLAGS: RiskFlag[] = [
  {
    id: "move-soon-docs-low",
    label: "Short timeline, document readiness low",
    description: "You want to move soon but document readiness is low. Consider delaying your target date or prioritizing the most critical documents first.",
  },
  {
    id: "family-complexity",
    label: "Family move complexity",
    description: "Family move complexity may require earlier planning (school, partner documents, housing for more people).",
  },
  {
    id: "translation-apostille-lead-time",
    label: "Translation / apostille / legalization lead time",
    description: "Translation, apostille, or legalization may add several weeks. Start these processes as early as possible.",
  },
  {
    id: "temporary-housing-unresolved",
    label: "Temporary housing still unresolved",
    description: "Temporary housing is still unresolved. Registration and many admin steps require a Dutch address.",
  },
  {
    id: "route-or-docs-uncertain",
    label: "Route or documents uncertain",
    description: "You selected “not sure” for route or documents, which reduces confidence in the plan. Use the Visa Checker and Document Readiness Checker for clearer next steps.",
  },
  {
    id: "employer-school-sponsor-timing",
    label: "Route depends on employer, school, or sponsor timing",
    description: "Your route depends on employer, school, or sponsor timing. Align your plan with their submission schedule.",
  },
  {
    id: "long-haul-logistics",
    label: "Long-haul move logistics",
    description: "Long-haul move may need extra logistics planning (shipping, pets, family travel).",
  },
  {
    id: "fixed-date-urgent",
    label: "Fixed start date with little time",
    description: "You have a fixed start date with limited time. Focus on must-do items and confirm processing times with IND or your sponsor.",
  },
];

export type RiskFlagId = (typeof RISK_FLAGS)[number]["id"];

export function getRiskFlagsById(ids: string[]): RiskFlag[] {
  const byId = new Map(RISK_FLAGS.map((f) => [f.id, f]));
  return ids.map((id) => byId.get(id)).filter(Boolean) as RiskFlag[];
}

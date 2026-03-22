/**
 * Risk flags and delay factors for the visa timeline estimator.
 * Used to generate "What could slow you down" and urgency warnings.
 */

import type { VisaTimelineEstimatorAnswers } from "@/src/lib/visa-timeline-estimator/types";

export interface RiskFlagDef {
  id: string;
  label: string;
  description: string;
}

export const RISK_FLAG_DEFS: RiskFlagDef[] = [
  {
    id: "documents-not-started",
    label: "Documents not yet started",
    description: "You have barely started gathering documents. Document prep often adds 1–4 months; plan accordingly.",
  },
  {
    id: "family-partner-docs",
    label: "Partner/family route document complexity",
    description: "Family and partner routes often require more civil documents (birth, marriage, proof of relationship). Allow extra time for ordering and legalization.",
  },
  {
    id: "self-employed-complexity",
    label: "Self-employed route review",
    description: "The self-employed route may involve extra IND review and viability checks; the decision period can be extended in some cases.",
  },
  {
    id: "sponsor-timing",
    label: "Sponsor or employer timing",
    description: "Your timeline depends on when your employer, institution, or sponsor submits the application. Confirm their internal process.",
  },
  {
    id: "long-haul-logistics",
    label: "Long-haul move logistics",
    description: "Moving from farther away can add time for travel planning, shipping, and arrival admin.",
  },
  {
    id: "translation-apostille",
    label: "Translation or apostille",
    description: "Documents that need certified translation or apostille/legalization can add several weeks. Start early.",
  },
  {
    id: "target-aggressive",
    label: "Target move date may be tight",
    description: "Your target move window looks aggressive for your current stage. Consider building in buffer time or adjusting expectations.",
  },
  {
    id: "route-uncertain",
    label: "Visa route not yet chosen",
    description: "Without a chosen route, timelines are broad. Use the Visa Checker to narrow your option, then re-run this estimator.",
  },
];

export function selectRiskFlagIds(answers: VisaTimelineEstimatorAnswers): string[] {
  const ids: string[] = [];

  if (
    answers.documentReadinessLevel === "barely-started" ||
    answers.documentReadinessLevel === "not-sure"
  ) {
    ids.push("documents-not-started");
  }

  if (answers.primaryRoute === "partner-family") {
    ids.push("family-partner-docs");
  }

  if (answers.primaryRoute === "self-employed" || answers.primaryRoute === "daft") {
    ids.push("self-employed-complexity");
  }

  if (
    ["highly-skilled-migrant", "eu-blue-card", "student", "partner-family"].includes(
      answers.primaryRoute
    )
  ) {
    ids.push("sponsor-timing");
  }

  if (answers.travelDistanceBand === "long-haul") {
    ids.push("long-haul-logistics");
  }

  if (
    answers.documentBottleneck === "translations-apostille" ||
    answers.documentReadinessLevel === "barely-started"
  ) {
    ids.push("translation-apostille");
  }

  if (answers.targetMoveWindow === "within-1-month" && answers.currentStage !== "approved-planning-move") {
    ids.push("target-aggressive");
  }
  if (answers.targetMoveWindow === "1-3-months" && answers.currentStage === "just-exploring") {
    ids.push("target-aggressive");
  }

  if (answers.primaryRoute === "not-sure") {
    ids.push("route-uncertain");
  }

  return ids;
}

export function getRiskFlagsById(ids: string[]): RiskFlagDef[] {
  return ids
    .map((id) => RISK_FLAG_DEFS.find((f) => f.id === id))
    .filter((f): f is RiskFlagDef => Boolean(f));
}

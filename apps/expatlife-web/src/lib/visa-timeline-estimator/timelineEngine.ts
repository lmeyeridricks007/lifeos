/**
 * Visa Timeline Estimator engine.
 * Computes low/high day estimates, phase breakdown, bottlenecks, and next steps.
 * Planning guidance only — not legal advice.
 */

import type {
  VisaTimelineEstimatorAnswers,
  TimelineEstimateResult,
  VisaTimelineRoute,
} from "@/src/lib/visa-timeline-estimator/types";
import { getOfficialDecisionPeriod } from "@/src/data/tools/visa-timeline-estimator/official-decision-periods";
import type { RouteId } from "@/src/data/tools/visa-timeline-estimator/official-decision-periods";
import {
  DOC_PREP_DAYS,
  getRouteConfirmationDays,
} from "@/src/data/tools/visa-timeline-estimator/prep-time-ranges";
import {
  POST_APPROVAL_TO_ARRIVAL_DAYS,
} from "@/src/data/tools/visa-timeline-estimator/post-approval-ranges";
import {
  selectRiskFlagIds,
  getRiskFlagsById,
} from "@/src/data/tools/visa-timeline-estimator/risk-flags";
import { buildPhaseBreakdown } from "@/src/data/tools/visa-timeline-estimator/route-phase-templates";
import {
  getRecommendedGuidesForRoute,
  TIMELINE_ESTIMATOR_RECOMMENDED_TOOLS,
  NEXT_STEP_TOOLS,
} from "@/src/data/tools/visa-timeline-estimator/related-links";

function formatWeeks(days: number): string {
  if (days <= 0) return "—";
  if (days <= 14) return "1–2 weeks";
  if (days <= 30) return "2–4 weeks";
  if (days <= 60) return "1–2 months";
  if (days <= 90) return "2–3 months";
  return "3+ months";
}

function getPrepDays(answers: VisaTimelineEstimatorAnswers): { low: number; high: number } {
  const docPrep = DOC_PREP_DAYS[answers.documentReadinessLevel];
  const routeConf = getRouteConfirmationDays(answers.currentStage);

  // If already submitted or approved, prep is 0
  if (
    answers.currentStage === "already-submitted" ||
    answers.currentStage === "approved-planning-move"
  ) {
    return { low: 0, high: 0 };
  }

  const low = Math.max(routeConf.lowDays, docPrep.lowDays);
  const high = routeConf.highDays + docPrep.highDays;
  return { low, high };
}

function getPostApprovalDays(answers: VisaTimelineEstimatorAnswers): { low: number; high: number } {
  if (answers.currentStage !== "approved-planning-move") {
    return {
      low: POST_APPROVAL_TO_ARRIVAL_DAYS.lowDays,
      high: POST_APPROVAL_TO_ARRIVAL_DAYS.highDays,
    };
  }
  return { low: 7, high: 30 };
}

function assessTargetMoveRealistic(
  answers: VisaTimelineEstimatorAnswers,
  totalLow: number,
  totalHigh: number
): "realistic" | "tight" | "aggressive" | "unknown" {
  if (answers.targetMoveWindow === "not-sure") return "unknown";
  const targetDays = {
    "within-1-month": 30,
    "1-3-months": 90,
    "3-6-months": 180,
    "6-plus-months": 365,
  }[answers.targetMoveWindow];
  if (totalHigh <= targetDays) return "realistic";
  if (totalLow <= targetDays && totalHigh > targetDays) return "tight";
  return "aggressive";
}

function buildUrgencyWarnings(
  answers: VisaTimelineEstimatorAnswers,
  totalLow: number,
  totalHigh: number
): string[] {
  const warnings: string[] = [];
  const target = assessTargetMoveRealistic(answers, totalLow, totalHigh);
  if (target === "aggressive") {
    warnings.push("Your target move window appears aggressive for your current stage. Consider building in buffer time.");
  }
  if (target === "tight") {
    warnings.push("Your target date is achievable but tight; delays in documents or processing could push it back.");
  }
  if (answers.primaryRoute === "not-sure") {
    warnings.push("Using the Visa Checker to confirm your route will give you a more accurate timeline.");
  }
  return warnings;
}

function buildNextSteps(answers: VisaTimelineEstimatorAnswers): Array<{ label: string; href?: string }> {
  const steps: Array<{ label: string; href?: string }> = [];
  steps.push({ label: "Check my documents", href: "/netherlands/document-readiness-checker/" });
  steps.push({ label: "Build my visa plan", href: "/netherlands/visa-application-plan/" });
  steps.push({ label: "Estimate visa costs", href: "/netherlands/visa-cost-calculator/" });
  steps.push({ label: "View full visa guide", href: getRecommendedGuidesForRoute(answers.primaryRoute)[0]?.href });
  return steps;
}

export function runTimelineEngine(answers: VisaTimelineEstimatorAnswers): TimelineEstimateResult {
  const routeId = answers.primaryRoute as RouteId;
  const decisionEntry = getOfficialDecisionPeriod(routeId) ?? getOfficialDecisionPeriod("not-sure")!;
  const decisionDays = decisionEntry.decisionPeriodDays;

  const prep = getPrepDays(answers);
  const postApproval = getPostApprovalDays(answers);

  const totalLow = prep.low + decisionDays + postApproval.low;
  const totalHigh = prep.high + decisionDays + postApproval.high;

  let overallLabel: string;
  if (totalHigh <= 60) overallLabel = "Roughly 1–2 months";
  else if (totalHigh <= 120) overallLabel = "Roughly 2–4 months";
  else if (totalHigh <= 180) overallLabel = "Roughly 3–6 months";
  else overallLabel = "Roughly 4–8+ months";

  const prepWeeks = prep.high <= 0 ? "—" : formatWeeks(prep.low) + " – " + formatWeeks(prep.high);
  const postWeeks =
    postApproval.high <= 0 ? "—" : formatWeeks(postApproval.low) + " – " + formatWeeks(postApproval.high);

  const visaGuideHref =
    getRecommendedGuidesForRoute(answers.primaryRoute)[0]?.href ?? "/netherlands/visa-checker/";

  const phaseBreakdown = buildPhaseBreakdown({
    routeLabel: decisionEntry.label,
    prepWeeks,
    decisionDays,
    postApprovalWeeks: postWeeks,
    visaGuideHref,
  });

  const riskIds = selectRiskFlagIds(answers);
  const keyBottlenecks = getRiskFlagsById(riskIds);
  const urgencyWarnings = buildUrgencyWarnings(answers, totalLow, totalHigh);
  const personalizedNextSteps = buildNextSteps(answers);
  const recommendedGuides = getRecommendedGuidesForRoute(answers.primaryRoute);
  const recommendedTools = TIMELINE_ESTIMATOR_RECOMMENDED_TOOLS;
  const targetMoveRealistic = assessTargetMoveRealistic(answers, totalLow, totalHigh);

  return {
    lowEstimateDays: totalLow,
    highEstimateDays: totalHigh,
    officialDecisionPeriod: {
      label: decisionEntry.label,
      days: decisionDays,
      sourceHref: decisionEntry.sourceHref,
    },
    totalPrepEstimate: { lowDays: prep.low, highDays: prep.high },
    postApprovalEstimate: { lowDays: postApproval.low, highDays: postApproval.high },
    overallTimelineLabel: overallLabel,
    phaseBreakdown,
    keyBottlenecks,
    urgencyWarnings,
    personalizedNextSteps,
    recommendedGuides,
    recommendedTools,
    targetMoveRealistic,
  };
}

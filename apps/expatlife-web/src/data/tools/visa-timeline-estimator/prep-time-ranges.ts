/**
 * Document and route preparation time ranges (in days) by user readiness.
 * Used to estimate "time before submission" in the timeline engine.
 */

import type { DocumentReadinessLevel, CurrentStage } from "@/src/lib/visa-timeline-estimator/types";

export interface PrepTimeRange {
  lowDays: number;
  highDays: number;
  label: string;
}

/** Document prep time before application can be submitted (by readiness). */
export const DOC_PREP_DAYS: Record<DocumentReadinessLevel, PrepTimeRange> = {
  "most-ready": { lowDays: 7, highDays: 21, label: "1–3 weeks" },
  "some-ready": { lowDays: 21, highDays: 60, label: "3–8 weeks" },
  "barely-started": { lowDays: 45, highDays: 120, label: "1.5–4 months" },
  "not-sure": { lowDays: 30, highDays: 90, label: "1–3 months" },
};

/** Route confirmation / exploration time by current stage (days to "ready to apply"). */
export function getRouteConfirmationDays(stage: CurrentStage): PrepTimeRange {
  switch (stage) {
    case "just-exploring":
      return { lowDays: 14, highDays: 60, label: "2 weeks – 2 months" };
    case "chosen-route":
      return { lowDays: 0, highDays: 14, label: "0–2 weeks" };
    case "gathering-documents":
      return { lowDays: 0, highDays: 7, label: "0–1 week" };
    case "ready-to-apply":
    case "already-submitted":
    case "approved-planning-move":
      return { lowDays: 0, highDays: 0, label: "—" };
    default:
      return { lowDays: 7, highDays: 30, label: "1–4 weeks" };
  }
}

/**
 * Phase-by-phase timeline templates for the Visa Timeline Estimator.
 * Builds DO NOW, NEXT, WAIT PERIOD, AFTER APPROVAL, AFTER ARRIVAL.
 */

import type { TimelinePhaseItem } from "@/src/lib/visa-timeline-estimator/types";

const BASE = "/netherlands";

export function buildPhaseBreakdown(
  params: {
    routeLabel: string;
    prepWeeks: string;
    decisionDays: number;
    postApprovalWeeks: string;
    visaGuideHref: string;
  }
): TimelinePhaseItem[] {
  const { routeLabel, prepWeeks, decisionDays, postApprovalWeeks, visaGuideHref } = params;
  return [
    {
      id: "confirm-route",
      stepTitle: "Confirm your route and requirements",
      timingEstimate: "Ongoing",
      whyItMatters: "Ensures you are applying under the right scheme and know document and sponsor requirements.",
      group: "do-now",
      relatedGuideHref: visaGuideHref,
    },
    {
      id: "document-prep",
      stepTitle: "Document preparation",
      timingEstimate: prepWeeks,
      whyItMatters: "Missing or uncertified documents delay submission and can extend processing.",
      group: "next",
      relatedGuideHref: `${BASE}/document-readiness-checker/`,
    },
    {
      id: "submission-decision",
      stepTitle: "Submission and official IND decision period",
      timingEstimate: `Up to ${decisionDays} days`,
      whyItMatters: "The IND must decide within the statutory period; completeness of the file affects delays.",
      group: "wait-period",
      relatedGuideHref: "https://ind.nl/en/after-your-application/decision-periods",
    },
    {
      id: "post-approval-prep",
      stepTitle: "Post-approval: travel and move prep",
      timingEstimate: postApprovalWeeks,
      whyItMatters: "Housing, flights, and arrival admin need to be planned after you know your approval date.",
      group: "after-approval",
      relatedGuideHref: `${BASE}/moving/tools/moving-checklist/`,
    },
    {
      id: "arrival-week",
      stepTitle: "Arrival week and first steps",
      timingEstimate: "First 7–30 days",
      whyItMatters: "Registration, BSN, bank, and insurance setup typically happen in the first weeks.",
      group: "after-arrival",
      relatedGuideHref: `${BASE}/moving/tools/first-90-days/`,
    },
  ];
}

import type { First90DaysInputExtended } from "./types";
import type { NinetyDayRoadmapSummary } from "./types";

/**
 * Builds the 90-day roadmap summary (replaces readiness score).
 */
export function resolveNinetyDayPlan(
  input: First90DaysInputExtended
): NinetyDayRoadmapSummary {
  const from = input.from?.toLowerCase() || "";
  const isArrivingSoon = input.arrivalStage === "arriving-soon";
  const isAlreadyArrived = input.arrivalStage === "already-arrived";
  const isArrivedAWhileAgo = input.arrivalStage === "arrived-a-while-ago";
  const startingJobSoon = input.startingJobSoon === "yes";
  const household = input.household;
  const hasKids = household === "kids";

  let summary: string;
  let focusFirst: string;
  let stabilizeByMonth2: string;
  let buildByMonth3: string;

  if (isArrivingSoon && startingJobSoon && household === "solo") {
    summary =
      "Because you are arriving soon, starting work, and moving alone, your first 90 days should focus on registration, banking, health insurance, and then building stable work, transport, and payment routines.";
    focusFirst =
      "Registration, BSN, Dutch bank account, health insurance, and payroll setup.";
    stabilizeByMonth2 =
      "First salary and payroll confidence, transport routine, recurring payments, and monthly admin.";
    buildByMonth3 =
      "Lightweight renewal reminders, budget review, and closing any open admin loops.";
  } else if (isArrivingSoon && hasKids) {
    summary =
      "Because you are arriving soon with kids, your first 90 days should combine registration and banking with school or childcare timing, then stabilise family and household routines.";
    focusFirst =
      "Address registration, BSN, banking, health insurance, and school or childcare awareness.";
    stabilizeByMonth2 =
      "Family logistics, transport, recurring payments, and monthly admin.";
    buildByMonth3 =
      "Childcare and school follow-up, budget review, and a simple renewal system.";
  } else if (isAlreadyArrived) {
    summary =
      "Because you have already arrived, the next 90 days work best as a cleanup-and-stabilise phase: close unresolved admin, tighten payment and service routines, and build a monthly rhythm.";
    focusFirst =
      "Catch-up on registration or BSN-dependent steps, banking, insurance, and any missing essentials.";
    stabilizeByMonth2 =
      "Recurring payments, transport, utilities review, and monthly admin routine.";
    buildByMonth3 =
      "Close open admin loops, review budget, and set renewal reminders.";
  } else if (isArrivedAWhileAgo) {
    summary =
      "Because you arrived a while ago, this 90-day plan helps you close unresolved tasks, tighten your monthly systems, and move into a steady long-term rhythm.";
    focusFirst =
      "Identify and complete any remaining high-priority admin (registration, banking, insurance).";
    stabilizeByMonth2 =
      "Monthly admin routine, utility and subscription review, transport and housing stability.";
    buildByMonth3 =
      "Complete catch-up tasks, lock a stable operating routine, and set lightweight renewal reminders.";
  } else if (isArrivingSoon && startingJobSoon) {
    summary =
      "Because you are arriving soon and starting work, your first 90 days should prioritise registration, banking, health insurance, and payroll readiness, then build transport and payment routines.";
    focusFirst =
      "Registration, BSN, bank account, health insurance, and employer payroll setup.";
    stabilizeByMonth2 =
      "First salary review, transport routine, recurring payments, and monthly admin.";
    buildByMonth3 =
      "Budget and renewal review, and closing open admin loops.";
  } else {
    summary =
      "Your first 90 days are easiest when you sequence tasks by urgency, then move from setup into predictable routines.";
    focusFirst =
      "Registration, BSN if needed, banking, health insurance, and mobile or document organisation.";
    stabilizeByMonth2 =
      "Recurring payments, transport, utilities if needed, and a monthly admin slot.";
    buildByMonth3 =
      "Budget review, renewal reminders, and closing any open admin loops.";
  }

  return {
    summary,
    focusFirst,
    stabilizeByMonth2,
    buildByMonth3,
  };
}

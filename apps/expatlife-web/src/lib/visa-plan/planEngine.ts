/**
 * Visa Application Plan engine: builds a personalized plan from user answers.
 * Returns timeline phases, tasks, cost milestones, risk flags, and recommended links.
 * Planning guidance only — not legal advice.
 */

import type {
  VisaApplicationPlanAnswers,
  VisaPlanResult,
  PlanTask,
  PlanPhaseId,
} from "@/src/lib/visa-plan/types";
import {
  GENERIC_PHASE_TASKS,
  ROUTE_SPECIFIC_TASKS,
  getPhaseTitle,
  getHouseholdExtraTasks,
} from "@/src/data/tools/visa-plan/route-phase-tasks";
import { getRiskFlagsById } from "@/src/data/tools/visa-plan/risk-flags";
import { getCostMilestonesForRoute } from "@/src/data/tools/visa-plan/cost-milestones";
import {
  ROUTE_GUIDE_HREFS,
  RECOMMENDED_TOOLS,
  RECOMMENDED_GUIDES_BY_ROUTE,
  NEXT_BEST_ACTION_TOOLS,
} from "@/src/data/tools/visa-plan/related-links";

const BASE = "/netherlands";

const PHASE_ORDER: PlanPhaseId[] = [
  "confirm-route",
  "prepare-documents",
  "submit-application",
  "wait-pre-move",
  "travel-arrival",
  "first-30-90-days",
];

function selectRiskFlagIds(answers: VisaApplicationPlanAnswers): string[] {
  const ids: string[] = [];
  const moveSoon =
    answers.targetMoveWindow === "within-1-month" || answers.targetMoveWindow === "1-3-months";
  const docsLow =
    answers.documentReadinessLevel === "barely-started" || answers.documentReadinessLevel === "not-sure";
  if (moveSoon && docsLow) ids.push("move-soon-docs-low");
  if (
    answers.householdType === "partner-and-children" ||
    answers.householdType === "children-only"
  )
    ids.push("family-complexity");
  if (
    answers.missingDocumentAreas.includes("translations-apostille") ||
    answers.documentReadinessLevel === "barely-started"
  )
    ids.push("translation-apostille-lead-time");
  if (answers.practicalSetupNeeds.includes("temporary-housing")) ids.push("temporary-housing-unresolved");
  if (answers.primaryRoute === "not-sure" || answers.documentReadinessLevel === "not-sure")
    ids.push("route-or-docs-uncertain");
  if (
    ["highly-skilled-migrant", "eu-blue-card", "student", "partner-family"].includes(
      answers.primaryRoute
    )
  )
    ids.push("employer-school-sponsor-timing");
  if (answers.countryCode && ["india", "south-africa", "australia", "brazil"].includes(answers.countryCode))
    ids.push("long-haul-logistics");
  if (answers.hasFixedStartDate && (moveSoon || answers.targetMoveWindow === "3-6-months"))
    ids.push("fixed-date-urgent");
  return ids;
}

function buildTimelinePhases(answers: VisaApplicationPlanAnswers): VisaPlanResult["timelinePhases"] {
  const route = answers.primaryRoute;
  const stage = answers.applicationStage;
  const phases: VisaPlanResult["timelinePhases"] = [];

  const householdExtras = getHouseholdExtraTasks(answers.householdType, answers.includesPets);

  for (const phaseId of PHASE_ORDER) {
    const generic = GENERIC_PHASE_TASKS[phaseId] ?? [];
    const routeOverrides = ROUTE_SPECIFIC_TASKS[route]?.[phaseId] ?? [];
    const phaseHousehold = householdExtras.filter((t) => t.phase === phaseId);
    let tasks: PlanTask[] = [...generic];
    routeOverrides.forEach((t) => {
      const idx = tasks.findIndex((x) => x.id === t.id);
      if (idx >= 0) tasks[idx] = t;
      else tasks.push(t);
    });
    phaseHousehold.forEach((t) => {
      if (!tasks.some((x) => x.id === t.id)) tasks.push(t);
    });

    // If user already submitted or approved, collapse early phases and focus on later
    if (
      (stage === "already-submitted" || stage === "approved-planning-move") &&
      (phaseId === "confirm-route" || phaseId === "prepare-documents" || phaseId === "submit-application")
    ) {
      tasks = tasks.map((t) => ({ ...t, group: "later" as const }));
    }

    if (tasks.length > 0) {
      phases.push({
        id: phaseId,
        title: getPhaseTitle(phaseId),
        tasks,
      });
    }
  }
  return phases;
}

function flattenTasks(phases: VisaPlanResult["timelinePhases"]): {
  doNow: PlanTask[];
  next: PlanTask[];
  later: PlanTask[];
  afterApproval: PlanTask[];
  afterArrival: PlanTask[];
} {
  const doNow: PlanTask[] = [];
  const next: PlanTask[] = [];
  const later: PlanTask[] = [];
  const afterApproval: PlanTask[] = [];
  const afterArrival: PlanTask[] = [];
  for (const p of phases) {
    for (const t of p.tasks) {
      if (t.group === "do-now") doNow.push(t);
      else if (t.group === "next") next.push(t);
      else if (t.group === "later") later.push(t);
      else if (t.group === "after-approval") afterApproval.push(t);
      else if (t.group === "after-arrival") afterArrival.push(t);
    }
  }
  return { doNow, next, later, afterApproval, afterArrival };
}

function buildSummary(answers: VisaApplicationPlanAnswers): string[] {
  const routeLabel =
    answers.primaryRoute === "not-sure"
      ? "your chosen route"
      : answers.primaryRoute
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  const countryLabel = answers.countryCode
    ? answers.countryCode.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "your country";
  const stageLabel =
    answers.applicationStage === "just-exploring"
      ? "early exploration"
      : answers.applicationStage === "gathering-documents"
        ? "early preparation"
        : answers.applicationStage === "ready-to-apply"
          ? "ready to apply"
          : answers.applicationStage === "already-submitted"
            ? "application submitted"
            : answers.applicationStage === "approved-planning-move"
              ? "approved, planning move"
              : "chosen route";

  const lines: string[] = [];
  lines.push(
    `You appear to be in the ${stageLabel} stage for a ${routeLabel} move${answers.countryCode ? ` from ${countryLabel}` : ""}.`
  );
  if (answers.documentReadinessLevel === "barely-started" || answers.documentReadinessLevel === "not-sure") {
    lines.push("Your biggest priorities are route confirmation, document preparation, and early housing/admin planning before your intended move window.");
  } else {
    lines.push("Focus on the next steps below: confirm requirements, complete document checklist, and plan practical relocation (housing, registration, banking, insurance).");
  }
  return lines;
}

function getReadinessLevel(answers: VisaApplicationPlanAnswers): "high" | "medium" | "low" {
  if (
    answers.documentReadinessLevel === "most-ready" &&
    answers.applicationStage !== "just-exploring" &&
    answers.primaryRoute !== "not-sure"
  )
    return "high";
  if (
    answers.documentReadinessLevel === "barely-started" ||
    answers.documentReadinessLevel === "not-sure" ||
    answers.primaryRoute === "not-sure"
  )
    return "low";
  return "medium";
}

function getUrgencyLevel(answers: VisaApplicationPlanAnswers): "high" | "medium" | "low" {
  if (
    answers.targetMoveWindow === "within-1-month" ||
    (answers.targetMoveWindow === "1-3-months" && answers.hasFixedStartDate)
  )
    return "high";
  if (answers.targetMoveWindow === "1-3-months" || answers.targetMoveWindow === "3-6-months")
    return "medium";
  return "low";
}

export function runPlanEngine(answers: VisaApplicationPlanAnswers): VisaPlanResult {
  const timelinePhases = buildTimelinePhases(answers);
  const { doNow, next, later, afterApproval, afterArrival } = flattenTasks(timelinePhases);
  const priorityTasksNow = [...doNow];
  const nextTasks = [...next, ...afterApproval];
  const laterTasks = [...later, ...afterArrival];

  const recommendedGuides =
    RECOMMENDED_GUIDES_BY_ROUTE[answers.primaryRoute] ?? RECOMMENDED_GUIDES_BY_ROUTE["not-sure"];
  const recommendedTools = RECOMMENDED_TOOLS.map((t) => ({ label: t.label, href: t.href }));
  const routeGuideHref = ROUTE_GUIDE_HREFS[answers.primaryRoute] ?? ROUTE_GUIDE_HREFS["not-sure"];
  const recommendedServices = [
    { label: "Wise", useFor: "Moving money / international transfers", href: "https://wise.com" },
    { label: "bunq", useFor: "Dutch banking after arrival", href: "https://www.bunq.com" },
    { label: "HousingAnywhere", useFor: "Temporary housing", href: "https://www.housinganywhere.com" },
    { label: "Simyo", useFor: "Mobile setup", href: "https://www.simyo.nl" },
    { label: "Independer", useFor: "Insurance comparison", href: "https://www.independer.nl" },
    { label: "Everaert Immigration Lawyers", useFor: "Complex route or timing questions", href: "https://www.everaert.nl/" },
    { label: "ACCESS NL", useFor: "Expat support and information", href: "https://www.access-nl.org/" },
  ];

  const nextBestActions = [
    ...NEXT_BEST_ACTION_TOOLS.map((t) => ({ label: t.label, href: t.href })),
    { label: "View full visa guide", href: routeGuideHref },
  ];

  return {
    readinessLevel: getReadinessLevel(answers),
    urgencyLevel: getUrgencyLevel(answers),
    personalizedSummary: buildSummary(answers),
    timelinePhases,
    priorityTasksNow,
    nextTasks,
    laterTasks,
    costMilestones: getCostMilestonesForRoute(answers.primaryRoute),
    riskFlags: getRiskFlagsById(selectRiskFlagIds(answers)),
    recommendedGuides,
    recommendedTools,
    recommendedServices,
    nextBestActions,
  };
}

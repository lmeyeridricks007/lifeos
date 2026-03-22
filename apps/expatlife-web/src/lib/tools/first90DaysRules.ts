import type {
  First90DaysDatasets,
  First90DaysInput,
  First90DaysMilestone,
  TimelineGroup,
  UnknownItem,
} from "./loadFirst90DaysContent";

function matchesCondition(
  conditions: Record<string, string[] | undefined>,
  input: First90DaysInput
): boolean {
  for (const [key, allowed] of Object.entries(conditions)) {
    if (!allowed || allowed.length === 0) continue;
    const inputValue = (input as unknown as Record<string, string | undefined>)[key];
    if (!inputValue) continue;
    if (!allowed.includes(inputValue)) return false;
  }
  return true;
}

function scoreMilestone(item: First90DaysMilestone, input: First90DaysInput, group: TimelineGroup): number {
  let score = 100 - item.priority;

  if (input.arrivalStage !== "arriving-soon" && item.id.includes("catch-up")) score += 20;
  if (input.arrivalStage === "arrived-a-while-ago" && group === "month3") score += 10;
  if (input.startingJobSoon === "yes" && (item.id.includes("job") || item.id.includes("payroll"))) score += 20;
  if (input.household === "kids" && (item.id.includes("kids") || item.id.includes("school") || item.id.includes("family"))) score += 20;
  if (input.household === "partner" && item.id.includes("household")) score += 12;
  if (input.needsIntegrationAwareness === "yes" && item.id.includes("integration")) score += 14;
  if (input.needsIntegrationAwareness === "no" && item.id.includes("integration")) score -= 12;

  return score;
}

function buildGroup(input: First90DaysInput, datasets: First90DaysDatasets, group: TimelineGroup): First90DaysMilestone[] {
  const eligible = datasets.milestones[group].filter((item) => matchesCondition(item.conditions, input));
  return [...eligible]
    .sort((a, b) => {
      const scoreA = scoreMilestone(a, input, group);
      const scoreB = scoreMilestone(b, input, group);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return a.priority - b.priority;
    })
    .slice(0, 8);
}

export function build90DaySummary(input: First90DaysInput, _datasets: First90DaysDatasets): string {
  if (input.arrivalStage === "arriving-soon" && input.startingJobSoon === "yes") {
    return "If you are arriving soon and starting work quickly, the first 90 days often work best when you stabilize essentials first: registration, banking, insurance clarity, and then build routines you can sustain.";
  }
  if (input.arrivalStage === "already-arrived") {
    return "If you have already arrived and are catching up on admin, the next three months usually work best as a cleanup-and-stabilize phase rather than a brand-new move.";
  }
  if (input.arrivalStage === "arrived-a-while-ago") {
    return "If you arrived a while ago, this 90-day plan helps you close unresolved tasks, tighten your monthly systems, and move into a steady long-term rhythm.";
  }
  return "Your first 90 days are easiest when you sequence tasks by urgency, then move from setup into predictable routines.";
}

export function buildWeek1to2(input: First90DaysInput, datasets: First90DaysDatasets): First90DaysMilestone[] {
  return buildGroup(input, datasets, "week1to2");
}

export function buildWeek3to4(input: First90DaysInput, datasets: First90DaysDatasets): First90DaysMilestone[] {
  return buildGroup(input, datasets, "week3to4");
}

export function buildMonth2(input: First90DaysInput, datasets: First90DaysDatasets): First90DaysMilestone[] {
  return buildGroup(input, datasets, "month2");
}

export function buildMonth3(input: First90DaysInput, datasets: First90DaysDatasets): First90DaysMilestone[] {
  return buildGroup(input, datasets, "month3");
}

export function buildUnknowns(input: First90DaysInput, datasets: First90DaysDatasets): UnknownItem[] {
  return datasets.unknowns
    .filter((item) => matchesCondition(item.conditions, input))
    .sort((a, b) => a.label.localeCompare(b.label))
    .slice(0, 8);
}

export function buildReadiness(input: First90DaysInput, datasets: First90DaysDatasets): {
  score: number;
  label: string;
  explanation: string;
} {
  const { weights, bands } = datasets.readinessRules;

  let score = 0;
  if (input.arrivalStage) score += weights.arrivalStage;
  if (input.household) score += weights.household;
  if (input.startingJobSoon) score += weights.startingJobSoon;
  if (input.needsIntegrationAwareness) score += weights.needsIntegrationAwareness;
  if (input.from) score += weights.from;
  if (input.arrivalDate) score += weights.arrivalDate;

  // Light deterministic context modifier so readiness reflects planning complexity too.
  if (input.arrivalStage === "arriving-soon") score += 3;
  if (input.arrivalStage === "arrived-a-while-ago") score -= 4;
  if (input.household === "kids") score -= 5;
  if (input.startingJobSoon === "yes") score += 2;
  if (input.needsIntegrationAwareness === "yes") score += 1;

  score = Math.max(0, Math.min(100, score));

  const band = bands.find((b) => score >= b.min && score <= b.max) ?? bands[bands.length - 1];
  const explanation =
    score >= 70
      ? "You have enough information to run a clear first-90-days plan, with only a few items left to confirm."
      : score >= 40
        ? "You have a workable starting plan, but several unknowns may still affect your weekly priorities."
        : "You are still in early planning mode. Clarifying key unknowns will improve your first-month focus.";

  return { score, label: band.label, explanation };
}

export function build90DayRelatedLinks(
  input: First90DaysInput,
  _datasets: First90DaysDatasets
): Array<{ label: string; href: string }> {
  const withFrom = (href: string) => `${href}${href.includes("?") ? "&" : "?"}from=${encodeURIComponent(input.from)}`;
  const links = [
    { label: "First 30 days in the Netherlands", href: withFrom("/netherlands/first-30-days-netherlands/") },
    { label: "First 60 days in the Netherlands", href: withFrom("/netherlands/first-60-days-netherlands/") },
    { label: "Register address in the Netherlands", href: withFrom("/netherlands/register-address-netherlands/") },
    { label: "Moving to the Netherlands guide", href: withFrom("/netherlands/moving-to-the-netherlands/") },
    { label: "Moving to the Netherlands", href: withFrom("/netherlands/moving-to-the-netherlands/") },
  ];
  const originSlug = input.from?.trim().toLowerCase().replace(/\s+/g, "-");
  if (originSlug) {
    links.push({
      label: `Moving to the Netherlands from ${originSlug.replace(/-/g, " ")}`,
      href: `/netherlands/moving/moving-to-netherlands-from/${originSlug}/`,
    });
  }
  return links;
}

export function build90DayAffiliateContext(
  input: First90DaysInput,
  _results: {
    week1to2: First90DaysMilestone[];
    week3to4: First90DaysMilestone[];
    month2: First90DaysMilestone[];
    month3: First90DaysMilestone[];
    unknowns: UnknownItem[];
  }
): {
  categoryOrder: string[];
  emphasis: string;
} {
  if (input.household === "kids") {
    return { categoryOrder: ["housing", "insurance", "banking", "mobile"], emphasis: "family-settling" };
  }
  if (input.startingJobSoon === "yes" && input.household === "solo") {
    return { categoryOrder: ["banking", "mobile", "insurance", "housing"], emphasis: "solo-job-start" };
  }
  if (input.startingJobSoon === "yes") {
    return { categoryOrder: ["banking", "insurance", "mobile", "housing"], emphasis: "job-start-priority" };
  }
  return { categoryOrder: ["banking", "housing", "insurance", "mobile"], emphasis: "balanced-first-months" };
}

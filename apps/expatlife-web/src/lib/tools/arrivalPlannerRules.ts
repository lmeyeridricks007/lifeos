import type {
  ArrivalAppointment,
  ArrivalMilestone,
  ArrivalPlannerDatasets,
  ArrivalPlannerInput,
  ArrivalReminder,
} from "./loadArrivalPlannerContent";

function matchesCondition(
  conditions: Record<string, string[] | undefined>,
  input: ArrivalPlannerInput
): boolean {
  for (const [key, allowed] of Object.entries(conditions)) {
    if (!allowed || allowed.length === 0) continue;
    const value = (input as Record<string, string | undefined>)[key];
    if (!value) continue;
    if (!allowed.includes(value)) return false;
  }
  return true;
}

function dedupeById<T extends { id: string }>(items: T[]): T[] {
  const out: T[] = [];
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
  }
  return out;
}

function scoreMilestone(item: ArrivalMilestone, input: ArrivalPlannerInput, datasets: ArrivalPlannerDatasets): number {
  const statusWeights = datasets.rules.weights.addressStatus[input.addressStatus] ?? {};
  const bankingWeight = datasets.rules.weights.needBankingSoon[input.needBankingSoon] ?? 1;
  const householdWeight = datasets.rules.weights.household[input.household]?.familyBoost ?? 0;

  let score = 100 - item.priority;

  const highPriorityByStatus = new Set(datasets.rules.highPriorityByStatus[input.addressStatus] ?? []);
  if (highPriorityByStatus.has(item.id)) score += 30;

  if (datasets.rules.bankingPriorityIds.includes(item.id)) {
    score += bankingWeight * 6;
  }

  const householdPriority = new Set(datasets.rules.householdPriorityIds[input.household] ?? []);
  if (householdPriority.has(item.id)) {
    score += 8 + householdWeight * 4;
  }

  if (input.addressStatus === "no" && item.id.includes("housing")) {
    score += (statusWeights.housingStability ?? 1) * 6;
  }
  if (item.id.includes("registration") || item.id.includes("bsn")) {
    score += (statusWeights.registrationReady ?? 1) * 5;
  }
  if (item.id.includes("admin") || item.id.includes("document")) {
    score += (statusWeights.adminDependencies ?? 1) * 3;
  }

  return score;
}

function sortByScore<T extends { id: string; priority?: number }>(items: T[], scoreMap: Map<string, number>): T[] {
  return [...items].sort((a, b) => {
    const scoreA = scoreMap.get(a.id) ?? 0;
    const scoreB = scoreMap.get(b.id) ?? 0;
    if (scoreB !== scoreA) return scoreB - scoreA;
    return (a.priority ?? 999) - (b.priority ?? 999);
  });
}

function originDistanceCategory(from: string, datasets: ArrivalPlannerDatasets): "regional" | "far" | "other" {
  if (datasets.rules.distanceCategories.farDistanceOrigins.includes(from)) return "far";
  if (datasets.rules.distanceCategories.regionalOrigins.includes(from)) return "regional";
  return "other";
}

export function buildArrivalSummary(input: ArrivalPlannerInput, datasets: ArrivalPlannerDatasets): string {
  const parts: string[] = [];
  const fragments = datasets.rules.summaryFragments;

  if (input.addressStatus === "no") {
    parts.push(fragments.noAddress);
  } else {
    parts.push(fragments.hasAddress);
  }

  if (input.needBankingSoon === "yes") {
    parts.push(fragments.bankingSoon);
  }
  if (input.household === "kids") {
    parts.push(fragments.withKids);
  }

  const distanceCategory = originDistanceCategory(input.from, datasets);
  if (distanceCategory === "far") {
    parts.push(fragments.longDistanceMove);
  } else if (distanceCategory === "regional") {
    parts.push(fragments.regionalMove);
  }

  return parts.join(" ");
}

export function buildFirstWeekMilestones(
  input: ArrivalPlannerInput,
  datasets: ArrivalPlannerDatasets
): ArrivalMilestone[] {
  const eligible = datasets.milestones.firstWeek.filter((item) => matchesCondition(item.conditions, input));
  const scoreMap = new Map<string, number>();
  for (const item of eligible) scoreMap.set(item.id, scoreMilestone(item, input, datasets));

  let ordered = sortByScore(eligible, scoreMap);

  if (input.needBankingSoon === "yes") {
    ordered = [
      ...ordered.filter((item) => datasets.rules.bankingPriorityIds.includes(item.id)),
      ...ordered.filter((item) => !datasets.rules.bankingPriorityIds.includes(item.id)),
    ];
  }

  return dedupeById(ordered).slice(0, 8);
}

export function buildFirstMonthMilestones(
  input: ArrivalPlannerInput,
  datasets: ArrivalPlannerDatasets
): ArrivalMilestone[] {
  const eligible = datasets.milestones.firstMonth.filter((item) => matchesCondition(item.conditions, input));
  const scoreMap = new Map<string, number>();
  for (const item of eligible) scoreMap.set(item.id, scoreMilestone(item, input, datasets));

  const ordered = dedupeById(sortByScore(eligible, scoreMap));
  return ordered.slice(0, 10);
}

export function buildAppointmentsList(
  input: ArrivalPlannerInput,
  datasets: ArrivalPlannerDatasets
): ArrivalAppointment[] {
  const eligible = datasets.appointments.filter((item) => matchesCondition(item.conditions, input));
  const ranked = [...eligible].sort((a, b) => {
    const aBanking = datasets.rules.bankingPriorityIds.includes(a.id) ? 1 : 0;
    const bBanking = datasets.rules.bankingPriorityIds.includes(b.id) ? 1 : 0;
    if (input.needBankingSoon === "yes" && bBanking !== aBanking) return bBanking - aBanking;
    return a.label.localeCompare(b.label);
  });
  return dedupeById(ranked).slice(0, 6);
}

export function buildRemindersList(
  input: ArrivalPlannerInput,
  datasets: ArrivalPlannerDatasets
): ArrivalReminder[] {
  const eligible = datasets.reminders.filter((item) => matchesCondition(item.conditions, input));
  const importantOrder = [
    "keep-documents-handy",
    "save-reference-numbers",
    "track-confirmations",
    "note-address-dependencies",
    "note-bsn-dependencies",
  ];
  const orderIndex = new Map(importantOrder.map((id, index) => [id, index]));
  const ranked = [...eligible].sort((a, b) => {
    const ai = orderIndex.get(a.id) ?? 100;
    const bi = orderIndex.get(b.id) ?? 100;
    if (ai !== bi) return ai - bi;
    return a.label.localeCompare(b.label);
  });
  return dedupeById(ranked).slice(0, 8);
}

export function buildArrivalRelatedLinks(
  input: ArrivalPlannerInput,
  _datasets: ArrivalPlannerDatasets
): Array<{ label: string; href: string }> {
  const withFrom = (href: string) => `${href}${href.includes("?") ? "&" : "?"}from=${encodeURIComponent(input.from)}`;
  const links: Array<{ label: string; href: string }> = [
    { label: "Register address in the Netherlands", href: withFrom("/netherlands/register-address-netherlands/") },
    { label: "BSN registration", href: withFrom("/netherlands/bsn-registration/") },
    { label: "First 30 days in the Netherlands", href: withFrom("/netherlands/first-30-days-netherlands/") },
    { label: "Moving to the Netherlands guide", href: withFrom("/netherlands/moving-to-the-netherlands/") },
    { label: "Status changes in the Netherlands", href: withFrom("/netherlands/moving/status-changes/") },
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

export function buildArrivalAffiliateContext(
  input: ArrivalPlannerInput,
  _results: {
    firstWeek: ArrivalMilestone[];
    firstMonth: ArrivalMilestone[];
    appointments: ArrivalAppointment[];
    reminders: ArrivalReminder[];
  }
): {
  categoryOrder: string[];
  emphasis: string;
} {
  if (input.addressStatus === "no") {
    return {
      categoryOrder: ["housing", "banking", "insurance", "mobile"],
      emphasis: "temporary-housing-first",
    };
  }
  if (input.household === "kids") {
    return {
      categoryOrder: ["housing", "insurance", "banking", "mobile"],
      emphasis: "family-practical-setup",
    };
  }
  if (input.needBankingSoon === "yes" && input.household === "solo") {
    return {
      categoryOrder: ["banking", "mobile", "insurance", "housing"],
      emphasis: "solo-fast-setup",
    };
  }
  if (input.needBankingSoon === "yes") {
    return {
      categoryOrder: ["banking", "housing", "insurance", "mobile"],
      emphasis: "banking-first",
    };
  }
  return {
    categoryOrder: ["housing", "insurance", "mobile", "banking"],
    emphasis: "steady-settlement",
  };
}

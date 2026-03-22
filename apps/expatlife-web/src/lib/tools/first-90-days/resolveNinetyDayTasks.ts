import type { First90DaysInputExtended } from "./types";
import type { NinetyDayTask, NinetyDayPhase, TasksByPhase, TaskConditions } from "./types";
import { PHASE_LABELS } from "./types";
import { applyCountryTaskOverlays } from "./applyCountryTaskOverlays";
import { applyConditionTaskOverlays } from "./applyConditionTaskOverlays";
import type { CountryOverlaysMap } from "./applyCountryTaskOverlays";
import type { ConditionOverlaysMap } from "./applyConditionTaskOverlays";

function matchesConditions(
  conditions: TaskConditions | undefined,
  input: First90DaysInputExtended
): boolean {
  if (!conditions) return true;
  const record = input as Record<string, string | boolean | undefined>;
  for (const [key, allowed] of Object.entries(conditions)) {
    if (!allowed || allowed.length === 0) continue;
    const value = record[key];
    if (value === undefined) continue;
    const str = String(value);
    if (!allowed.includes(str)) return false;
  }
  return true;
}

function buildTaskByIdMap(
  genericTasks: NinetyDayTask[],
  countryTasks: NinetyDayTask[]
): Map<string, NinetyDayTask> {
  const map = new Map<string, NinetyDayTask>();
  for (const t of genericTasks) map.set(t.id, t);
  for (const t of countryTasks) map.set(t.id, t);
  return map;
}

const PHASE_ORDER: NinetyDayPhase[] = [
  "arrival-carry-over",
  "early-setup",
  "stabilizing-routines",
  "longer-term-setup",
];

/**
 * Resolves all tasks for the user's situation, grouped by phase.
 */
export function resolveNinetyDayTasks(
  input: First90DaysInputExtended,
  genericTasks: NinetyDayTask[],
  countryTasks: NinetyDayTask[],
  countryOverlays: CountryOverlaysMap | null,
  conditionOverlays: ConditionOverlaysMap | null
): TasksByPhase {
  const taskById = buildTaskByIdMap(genericTasks, countryTasks);
  const countryOverlayIds = applyCountryTaskOverlays(input.from, countryOverlays);
  const conditionOverlayIds = applyConditionTaskOverlays(input, conditionOverlays);
  const allOverlayIds = new Set([...countryOverlayIds, ...conditionOverlayIds]);

  const byPhase: TasksByPhase = {
    "arrival-carry-over": [],
    "early-setup": [],
    "stabilizing-routines": [],
    "longer-term-setup": [],
  };

  const seenIds = new Set<string>();

  for (const task of genericTasks) {
    if (!matchesConditions(task.conditions, input)) continue;
    if (seenIds.has(task.id)) continue;
    seenIds.add(task.id);
    const phase = task.phase as NinetyDayPhase;
    if (byPhase[phase]) byPhase[phase].push(task);
  }

  for (const id of Array.from(allOverlayIds)) {
    if (seenIds.has(id)) continue;
    const task = taskById.get(id);
    if (!task) continue;
    seenIds.add(id);
    const phase = task.phase as NinetyDayPhase;
    if (byPhase[phase]) byPhase[phase].push(task);
  }

  for (const phase of PHASE_ORDER) {
    byPhase[phase].sort((a, b) => {
      const prio = (p: string) => (p === "high" ? 0 : p === "medium" ? 1 : 2);
      return prio(a.priority) - prio(b.priority) || a.title.localeCompare(b.title);
    });
  }

  return byPhase;
}

export { PHASE_LABELS };

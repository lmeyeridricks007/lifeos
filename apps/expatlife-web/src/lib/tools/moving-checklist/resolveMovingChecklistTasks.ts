/**
 * Resolve full moving checklist task list from generic tasks, country overlays, and condition overlays.
 */

import type {
  MovingChecklistInputExtended,
  MovingChecklistTaskRaw,
  MovingChecklistTaskResolved,
  MovingChecklistTaskGroup,
  MovingChecklistPhase,
} from "./types";
import { applyCountryOverlays } from "./applyCountryOverlays";
import { applyConditionOverlays } from "./applyConditionOverlays";
import type { CountryOverlaysMap } from "./applyCountryOverlays";
import type { ConditionOverlaysMap } from "./applyConditionOverlays";

const PHASE_ORDER: MovingChecklistPhase[] = [
  "preparation",
  "finalPreparation",
  "travelRelocation",
  "arrivalEssentials",
];

const PHASE_LABELS: Record<MovingChecklistPhase, string> = {
  preparation: "Preparation (2–6 months before move)",
  finalPreparation: "Final preparation (1–4 weeks before move)",
  travelRelocation: "Travel & relocation",
  arrivalEssentials: "Arrival essentials",
};

const PHASE_GOALS: Record<MovingChecklistPhase, string> = {
  preparation: "Get the move route, documents, funding, and first landing plan in place.",
  finalPreparation: "Lock in travel, landing logistics, access to funds, and first-address readiness.",
  travelRelocation: "Execute the move smoothly.",
  arrivalEssentials: "Bridge into the Arrival Planner with only the most essential first-step actions.",
};

function matchesWhenVisible(
  whenVisible: Record<string, string[]> | undefined,
  input: MovingChecklistInputExtended
): boolean {
  if (!whenVisible) return true;
  for (const [key, allowed] of Object.entries(whenVisible)) {
    const value = (input as Record<string, string | boolean | undefined>)[key];
    if (value === undefined) continue;
    const str = String(value);
    if (!allowed.includes(str)) return false;
  }
  return true;
}

export type ResolveMovingChecklistTasksParams = {
  genericTasks: MovingChecklistTaskRaw[];
  overlayTasks: MovingChecklistTaskRaw[];
  countryOverlays: CountryOverlaysMap;
  conditionOverlays: ConditionOverlaysMap;
};

/**
 * Build ordered, deduplicated list of resolved tasks grouped by phase.
 */
export function resolveMovingChecklistTasks(
  input: MovingChecklistInputExtended,
  params: ResolveMovingChecklistTasksParams
): MovingChecklistTaskGroup[] {
  const { genericTasks, overlayTasks, countryOverlays, conditionOverlays } = params;

  const taskStore = new Map<string, MovingChecklistTaskRaw>();
  for (const t of genericTasks) taskStore.set(t.id, t);
  for (const t of overlayTasks) taskStore.set(t.id, t);

  const orderedIds: string[] = [];

  // 1. Generic tasks (filter by whenVisible)
  for (const t of genericTasks) {
    if (!matchesWhenVisible(t.whenVisible, input)) continue;
    orderedIds.push(t.id);
  }

  // 2. Country overlay IDs
  orderedIds.push(...applyCountryOverlays(input, countryOverlays));

  // 3. Condition overlay IDs
  orderedIds.push(...applyConditionOverlays(input, conditionOverlays));

  // Dedupe preserving order
  const seen = new Set<string>();
  const uniqueIds: string[] = [];
  for (const id of orderedIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    uniqueIds.push(id);
  }

  const origin = (input.from || "").trim().toLowerCase().replace(/\s+/g, "-");

  const resolved: MovingChecklistTaskResolved[] = [];
  for (const id of uniqueIds) {
    const raw = taskStore.get(id);
    if (!raw) continue;

    const countryNote = raw.countryNotes?.[origin];

    resolved.push({
      ...raw,
      countryNote,
    });
  }

  // Group by phase
  const byPhase = new Map<MovingChecklistPhase, MovingChecklistTaskResolved[]>();
  for (const p of PHASE_ORDER) byPhase.set(p, []);
  for (const t of resolved) {
    const list = byPhase.get(t.phase);
    if (list) list.push(t);
  }

  const groups: MovingChecklistTaskGroup[] = PHASE_ORDER.map((phase) => ({
    phase,
    phaseLabel: PHASE_LABELS[phase],
    phaseGoal: PHASE_GOALS[phase],
    tasks: byPhase.get(phase) ?? [],
  }));

  return groups;
}

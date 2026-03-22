/**
 * Orchestrate resolution of the full moving checklist: summary + task groups.
 */

import type { MovingChecklistInputExtended, MovingChecklistResolved } from "./types";
import { resolveMovingChecklistTasks } from "./resolveMovingChecklistTasks";
import type { ResolveMovingChecklistTasksParams } from "./resolveMovingChecklistTasks";
import { buildPersonalizedSummary } from "./buildPersonalizedSummary";

export type ResolveMovingChecklistParams = ResolveMovingChecklistTasksParams;

/**
 * Resolve the full moving checklist for the given extended input.
 */
export function resolveMovingChecklist(
  input: MovingChecklistInputExtended,
  params: ResolveMovingChecklistParams
): MovingChecklistResolved {
  const summary = buildPersonalizedSummary(input);
  const groups = resolveMovingChecklistTasks(input, params);
  return { summary, groups };
}

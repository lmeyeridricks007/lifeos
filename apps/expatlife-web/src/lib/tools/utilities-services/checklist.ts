import { utilitiesChecklistTemplates } from "./checklistConfig";
import type { UsChecklistTask, UtilitiesServicesInput } from "./types";

/**
 * Deterministic checklist: templates are evaluated in order; each `id` appears at most once.
 */
export function buildUtilitiesMoveInChecklist(input: UtilitiesServicesInput): UsChecklistTask[] {
  const seen = new Set<string>();
  const out: UsChecklistTask[] = [];
  for (const t of utilitiesChecklistTemplates) {
    if (seen.has(t.id)) continue;
    if (!t.when(input)) continue;
    seen.add(t.id);
    out.push({ id: t.id, phase: t.phase, text: t.text, sourceRule: t.sourceRule });
  }
  return out;
}

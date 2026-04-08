/**
 * Lightweight deterministic “what if” rows for dwell-time / education.
 * Each variant clones `base` and applies a small patch, then re-runs the engine.
 */

import { calculateDoubleTaxAwareness } from "./engine";
import { FOREIGN_LINKED_INCOME_TYPES } from "./rules";
import { sanitizeDoubleTaxInput } from "./urlState";
import type { DoubleTaxAwarenessInput, IncomeType } from "./types";

export type ScenarioCompareRow = {
  id: string;
  label: string;
  residencyHeadline: string;
  doubleTaxRisk: string;
  filingComplexity: string;
  reliefHint: string;
};

const FOREIGN_SET = new Set<IncomeType>(FOREIGN_LINKED_INCOME_TYPES);

const VARIANTS: Array<{
  id: string;
  label: string;
  patch: (base: DoubleTaxAwarenessInput) => Partial<DoubleTaxAwarenessInput>;
}> = [
  {
    id: "no-foreign-income",
    label: "Without foreign-linked income types",
    patch: (base) => {
      const next = base.incomeTypes.filter((t) => !FOREIGN_SET.has(t));
      return { incomeTypes: next.length ? next : (["salary_dutch_employer"] as IncomeType[]) };
    },
  },
  {
    id: "no-30-ruling",
    label: "If 30% ruling were not in play",
    patch: () => ({ thirtyPercentRuling: "no" as const }),
  },
  {
    id: "no-rental-abroad",
    label: "If foreign rental were removed",
    patch: (base) => ({
      incomeTypes: base.incomeTypes.filter((t) => t !== "rental_income_abroad"),
    }),
  },
  {
    id: "employer-abroad",
    label: "If employer were outside NL (same work pattern)",
    patch: () => ({
      employerInNl: "no" as const,
      payrollInNl: "no" as const,
    }),
  },
  {
    id: "fewer-months-nl",
    label: "If fewer months in the Netherlands (example: 4)",
    patch: (base) => ({
      monthsInNetherlands: Math.min(4, base.monthsInNetherlands),
      monthsInOtherMainCountry: Math.max(base.monthsInOtherMainCountry, 5),
    }),
  },
  {
    id: "home-abroad-yes",
    label: "If a permanent home abroad were “yes”",
    patch: () => ({ permanentHomeAbroad: "yes" as const }),
  },
];

export function buildScenarioCompareRows(baseInput: DoubleTaxAwarenessInput): ScenarioCompareRow[] {
  const base = sanitizeDoubleTaxInput(baseInput);
  return VARIANTS.map((v) => {
    const merged = sanitizeDoubleTaxInput({ ...base, ...v.patch(base) });
    const r = calculateDoubleTaxAwareness(merged);
    const relief = r.reliefMethodLikely[0]?.title ?? "Relief direction depends on facts";
    return {
      id: v.id,
      label: v.label,
      residencyHeadline: r.residencyAssessment.headline,
      doubleTaxRisk: r.doubleTaxRiskLevel,
      filingComplexity: r.filingComplexity,
      reliefHint: relief,
    };
  });
}

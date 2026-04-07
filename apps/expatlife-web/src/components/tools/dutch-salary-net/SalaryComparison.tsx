"use client";

import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import type { SalaryNetComputation, SalaryScenario } from "@/src/lib/tools/dutch-salary-net/types";
import { formatRulingSettingLabel, formatRulingSettingShort } from "@/src/lib/tools/dutch-salary-net/displayLabels";
import { eur } from "./copilotUi";

export const MAX_SALARY_SCENARIOS = 4;

export type ScenarioSalaryEvaluation = {
  scenario: SalaryScenario;
  result: SalaryNetComputation | null;
};

type CompareToolbarProps = {
  evaluations: ScenarioSalaryEvaluation[];
  activeIndex: number;
  resultsPending?: boolean;
  onSelect: (index: number) => void;
  onLabelChange: (index: number, label: string) => void;
  onDuplicate: (index: number) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
  canAdd: boolean;
};

export function SalaryCompareToolbar({
  evaluations,
  activeIndex,
  resultsPending = false,
  onSelect,
  onLabelChange,
  onDuplicate,
  onRemove,
  onAdd,
  canAdd,
}: CompareToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">
          Scenarios ({evaluations.length}/{MAX_SALARY_SCENARIOS})
        </p>
        <Button type="button" variant="secondary" className="min-h-10 text-xs sm:text-sm" disabled={!canAdd} onClick={onAdd}>
          Add scenario
        </Button>
      </div>
      <p className="text-xs text-slate-500">
        Rename with the text field, duplicate to tweak one variable, or remove extras. Run <strong>Calculate</strong> after changes.
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap">
        {evaluations.map((ev, i) => (
          <button
            key={ev.scenario.id}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "shrink-0 rounded-xl border px-4 py-2 text-left text-sm font-medium transition",
              i === activeIndex
                ? "border-brand-500 bg-brand-50 text-brand-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            )}
          >
            {ev.scenario.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {evaluations.map((ev, i) => (
          <article
            key={ev.scenario.id}
            className={cn(
              "rounded-2xl border p-4 shadow-sm md:p-5",
              i === activeIndex ? "border-brand-300 ring-1 ring-brand-200" : "border-slate-200"
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={`sal-sc-label-${ev.scenario.id}`}>
                  Scenario name
                </label>
                <Input
                  id={`sal-sc-label-${ev.scenario.id}`}
                  value={ev.scenario.label}
                  onChange={(e) => onLabelChange(i, e.target.value)}
                  className="h-9 max-w-full border-slate-200 text-base font-semibold text-slate-900"
                />
              </div>
              <div className="flex gap-1">
                <Button type="button" variant="ghost" className="min-h-9 px-2 text-xs" onClick={() => onDuplicate(i)}>
                  Duplicate
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="min-h-9 px-2 text-xs text-red-700 hover:text-red-800"
                  disabled={evaluations.length <= 1}
                  onClick={() => onRemove(i)}
                >
                  Remove
                </Button>
              </div>
            </div>
            {resultsPending ? (
              <p className="mt-2 text-sm text-slate-600">
                Click <strong>Calculate</strong> below to see net figures for each scenario.
              </p>
            ) : (
              <dl className="mt-3 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                <div>
                  <dt className="text-slate-500">Net (yr)</dt>
                  <dd className="font-semibold text-slate-900 break-words">{ev.result ? eur(ev.result.netAnnual) : "—"}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Net (mo)</dt>
                  <dd className="font-semibold text-slate-900 break-words">{ev.result ? eur(ev.result.netMonthly) : "—"}</dd>
                </div>
              </dl>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function bestNetMonthlyIndex(evaluations: ScenarioSalaryEvaluation[]): number | null {
  let best: number | null = null;
  let max = -Infinity;
  evaluations.forEach((ev, i) => {
    const n = ev.result?.netMonthly;
    if (n != null && n > max) {
      max = n;
      best = i;
    }
  });
  return best;
}

function tradeoffHint(evaluations: ScenarioSalaryEvaluation[]): string | null {
  const rows = evaluations
    .map((ev, i) => ({ i, label: ev.scenario.label, r: ev.result }))
    .filter((x): x is { i: number; label: string; r: SalaryNetComputation } => x.r != null);
  for (const a of rows) {
    for (const b of rows) {
      if (a.i === b.i) continue;
      if (a.r.grossAnnual > b.r.grossAnnual && a.r.netMonthly + 5 < b.r.netMonthly) {
        return `“${a.label}” shows higher gross than “${b.label}” but lower estimated net monthly — check 30% ruling settings, pension %, and band exposure. Align assumptions, then recalculate.`;
      }
    }
  }
  return null;
}

type TableProps = {
  evaluations: ScenarioSalaryEvaluation[];
};

function SalaryComparisonMobileCards({ evaluations, bestIdx }: { evaluations: ScenarioSalaryEvaluation[]; bestIdx: number | null }) {
  const baseline = evaluations[0]?.result?.netMonthly ?? null;
  return (
    <div className="space-y-4 md:hidden">
      {evaluations.map((ev, i) => {
        const r = ev.result;
        const delta = r && baseline != null ? r.netMonthly - baseline : null;
        const isBest = bestIdx === i && r != null;
        return (
          <div
            key={ev.scenario.id}
            className={cn(
              "rounded-2xl border p-4 shadow-sm",
              isBest ? "border-emerald-400/80 bg-emerald-50/50 ring-2 ring-emerald-200/60" : "border-slate-200 bg-white"
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-base font-semibold text-slate-900">{ev.scenario.label}</p>
              {isBest ? (
                <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white">Strongest net (est.)</span>
              ) : null}
            </div>
            {!r ? (
              <p className="mt-2 text-sm text-slate-500">No result — add gross and calculate.</p>
            ) : (
              <dl className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Gross / yr</dt>
                  <dd className="font-medium text-slate-900 break-all text-right">{eur(r.grossAnnual)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Gross / mo</dt>
                  <dd className="font-medium text-slate-900 break-all text-right">{eur(r.grossMonthly)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5 sm:col-span-2">
                  <dt className="text-slate-500">30% ruling setting</dt>
                  <dd className="max-w-[60%] text-right text-sm font-medium text-slate-900">{formatRulingSettingLabel(r.inputs)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Taxable income</dt>
                  <dd className="font-medium text-slate-900 break-all text-right">{eur(r.taxableIncomeAnnual)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Income tax (model)</dt>
                  <dd className="font-medium text-slate-900 break-all text-right">{eur(r.incomeTaxAnnual)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Net / yr</dt>
                  <dd className="font-semibold text-slate-900 break-all text-right">{eur(r.netAnnual)}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-slate-100 py-1.5">
                  <dt className="text-slate-500">Net / mo</dt>
                  <dd className="font-semibold text-brand-800 break-all text-right">{eur(r.netMonthly)}</dd>
                </div>
                <div className="flex justify-between gap-2 py-1.5 sm:col-span-2">
                  <dt className="text-slate-500">Δ net / mo vs scenario 1</dt>
                  <dd className="font-medium text-slate-900">
                    {delta != null ? `${delta >= 0 ? "+" : ""}${eur(delta)}` : "—"}
                  </dd>
                </div>
              </dl>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SalaryComparisonTableInner({ evaluations }: TableProps) {
  const baseline = evaluations[0]?.result?.netMonthly ?? null;
  const bestIdx = useMemo(() => bestNetMonthlyIndex(evaluations), [evaluations]);
  const tradeoff = useMemo(() => tradeoffHint(evaluations), [evaluations]);

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-slate-600">
        Use comparison to line up <strong>competing offers</strong>, <strong>contract structures</strong>, or{" "}
        <strong>30% ruling assumptions</strong> — all figures are indicative until payroll confirms.
      </p>
      {tradeoff ? (
        <div className="rounded-xl border border-amber-200/90 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">{tradeoff}</div>
      ) : null}

      <SalaryComparisonMobileCards evaluations={evaluations} bestIdx={bestIdx} />

      <div id="comparison-view" className="scroll-mt-28 hidden overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm md:scroll-mt-32 md:block">
        <table className="min-w-[920px] w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-3 py-3">Scenario</th>
              <th className="px-3 py-3">Gross / yr</th>
              <th className="px-3 py-3">Gross / mo</th>
              <th className="px-3 py-3">30% setting</th>
              <th className="px-3 py-3">Taxable</th>
              <th className="px-3 py-3">Tax (model)</th>
              <th className="px-3 py-3">Net / yr</th>
              <th className="px-3 py-3">Net / mo</th>
              <th className="px-3 py-3">Δ mo vs #1</th>
            </tr>
          </thead>
          <tbody>
            {evaluations.map((ev, rowIdx) => {
              const r = ev.result;
              const delta = r && baseline != null ? eur(r.netMonthly - baseline) : "—";
              const isBest = bestIdx === rowIdx && r != null;
              return (
                <tr
                  key={ev.scenario.id}
                  className={cn(
                    "border-b border-slate-100",
                    isBest ? "bg-emerald-50/70 ring-1 ring-inset ring-emerald-200/80" : ""
                  )}
                >
                  <td className="px-3 py-3">
                    <span className="font-medium text-slate-900">{ev.scenario.label}</span>
                    {isBest ? (
                      <span className="ml-2 inline-block rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Top net
                      </span>
                    ) : null}
                  </td>
                  <td className="px-3 py-3 text-slate-700">{r ? eur(r.grossAnnual) : "—"}</td>
                  <td className="px-3 py-3 text-slate-700">{r ? eur(r.grossMonthly) : "—"}</td>
                  <td className="max-w-[140px] px-3 py-3 text-xs text-slate-800">{r ? formatRulingSettingShort(r.inputs) : "—"}</td>
                  <td className="px-3 py-3 text-slate-700">{r ? eur(r.taxableIncomeAnnual) : "—"}</td>
                  <td className="px-3 py-3 text-slate-700">{r ? eur(r.incomeTaxAnnual) : "—"}</td>
                  <td className="px-3 py-3 font-semibold text-slate-900">{r ? eur(r.netAnnual) : "—"}</td>
                  <td className="px-3 py-3 font-semibold text-brand-800">{r ? eur(r.netMonthly) : "—"}</td>
                  <td className="px-3 py-3 text-slate-700">{delta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const SalaryComparisonTable = memo(SalaryComparisonTableInner);

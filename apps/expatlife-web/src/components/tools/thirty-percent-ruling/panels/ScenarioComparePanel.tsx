"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { eligibilityBandLabel } from "@/src/lib/tools/thirty-percent-ruling/calculateThirtyPercentRuling";
import type { ThirtyPercentCalculatorResult } from "@/src/lib/tools/thirty-percent-ruling/types";
import type { ScenarioEvaluation } from "@/src/lib/tools/thirty-percent-ruling/scenarios";
import { cn } from "@/lib/cn";

const eur = (n: number) =>
  n.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const MAX_SCENARIOS = 4;

function eligibilityLabel(result: ThirtyPercentCalculatorResult | null | undefined): string {
  if (!result) return "—";
  return result.primaryEligibility?.headline ?? eligibilityBandLabel(result.eligibilityBand);
}

type Props = {
  evaluations: ScenarioEvaluation[];
  activeIndex: number;
  /** When true, scenario cards hide numeric results until the user runs Calculate. */
  resultsPending?: boolean;
  onSelect: (index: number) => void;
  onLabelChange: (index: number, label: string) => void;
  onDuplicate: (index: number) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
  canAdd: boolean;
};

export function ScenarioComparePanel({
  evaluations,
  activeIndex,
  resultsPending = false,
  onSelect,
  onLabelChange,
  onDuplicate,
  onRemove,
  onAdd,
  canAdd,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">Compare scenarios ({evaluations.length}/{MAX_SCENARIOS})</p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" className="min-h-10 text-xs sm:text-sm" disabled={!canAdd} onClick={onAdd}>
            Add scenario
          </Button>
        </div>
      </div>

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

      {/* Mobile-first cards; desktop table-like row optional */}
      <div className="grid gap-4 lg:grid-cols-2">
        {evaluations.map((ev, i) => {
          const res = resultsPending ? null : ev.result;
          const net = res?.netComparison;
          return (
            <article
              key={ev.scenario.id}
              className={cn(
                "rounded-2xl border p-4 shadow-sm md:p-5",
                i === activeIndex ? "border-brand-300 ring-1 ring-brand-200" : "border-slate-200"
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <label className="sr-only" htmlFor={`sc-label-${ev.scenario.id}`}>
                    Scenario name
                  </label>
                  <Input
                    id={`sc-label-${ev.scenario.id}`}
                    value={ev.scenario.label}
                    onChange={(e) => onLabelChange(i, e.target.value)}
                    className="h-9 max-w-full border-slate-200 text-base font-semibold text-slate-900"
                  />
                </div>
                <div className="flex gap-1">
                  <Button type="button" variant="ghost" className="min-h-9 px-2 text-xs" onClick={() => onDuplicate(i)}>
                    Duplicate
                  </Button>
                  {evaluations.length > 1 ? (
                    <Button type="button" variant="ghost" className="min-h-9 px-2 text-xs text-red-700" onClick={() => onRemove(i)}>
                      Remove
                    </Button>
                  ) : null}
                </div>
              </div>
              {resultsPending ? (
                <p className="mt-2 text-sm text-slate-600">Click <strong>Calculate</strong> below to see numbers for this scenario.</p>
              ) : !res ? (
                <p className="mt-2 text-sm text-amber-800">Enter a valid gross salary for this scenario.</p>
              ) : (
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-600">Eligibility</dt>
                    <dd className="font-medium text-slate-900">{eligibilityLabel(res)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-600">Norm</dt>
                    <dd className="tabular-nums text-slate-900">{eur(res.primary.applicableThresholdAnnual)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-600">Untaxed / yr</dt>
                    <dd className="font-semibold text-brand-700">{eur(res.primary.maxUntaxedAllowanceAnnual)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-600">Allowance %</dt>
                    <dd className="tabular-nums text-slate-900">{Math.round(res.primary.allowancePercentApplied * 100)}%</dd>
                  </div>
                  {net ? (
                    <div className="flex justify-between gap-2 border-t border-slate-100 pt-2">
                      <dt className="text-slate-600">Est. monthly net Δ</dt>
                      <dd className="font-semibold text-emerald-800">
                        {net.estimatedMonthlyNetDelta >= 0 ? "+" : ""}
                        {eur(net.estimatedMonthlyNetDelta)}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              )}
            </article>
          );
        })}
      </div>

      <p className="text-xs text-slate-500">
        Tip: duplicate a scenario to tweak salary or employer % side-by-side. Shareable URL state is on the roadmap.
      </p>
    </div>
  );
}

export { MAX_SCENARIOS };

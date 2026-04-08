"use client";

import { formatChildcareEur } from "@/src/lib/tools/childcare/childcareFormatters";
import { cn } from "@/lib/cn";
import type { ChildcareScenarioRow } from "@/src/types/tools/childcare";

type Props = { rows: ChildcareScenarioRow[] };

function comparisonTakeaway(rows: ChildcareScenarioRow[]): string | null {
  const cur = rows.find((r) => r.id === "current");
  if (!cur || rows.length < 2) return null;
  const alts = rows.filter((r) => r.id !== "current");
  if (alts.length === 0) return null;
  let best = alts[0];
  for (const a of alts) {
    if (a.estimatedMonthlyNetChildcareCostEur < best.estimatedMonthlyNetChildcareCostEur) best = a;
  }
  const delta = cur.estimatedMonthlyNetChildcareCostEur - best.estimatedMonthlyNetChildcareCostEur;
  if (Math.abs(delta) < 8) {
    return `Among these model variants, estimated monthly net stays within about €${Math.abs(Math.round(delta))} of your base scenario — small tweaks to days or anchors may not change planning much.`;
  }
  if (delta > 0) {
    return `Largest swing: “${best.label}” is about €${Math.round(delta)} lower per month on estimated net than your current inputs — check whether that variant matches something you might actually do.`;
  }
  return `Your current inputs already sit at or below the lowest net in this comparison set — other rows mostly show higher-cost paths.`;
}

export function ChildcareScenarioComparison({ rows }: Props) {
  const takeaway = comparisonTakeaway(rows);

  return (
    <div id="compare-scenarios" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
      <h3 className="text-lg font-semibold text-copilot-text-primary">Compare scenarios</h3>
      <p className="text-sm text-copilot-text-secondary">
        Your inputs plus several deterministic variants — including at least three alternative models when inputs are sparse. Use
        cards on smaller screens; wide layouts get a full table.
      </p>
      {takeaway ? (
        <div className="rounded-xl border border-copilot-primary/20 bg-copilot-primary/[0.06] px-4 py-3 text-sm text-copilot-text-primary shadow-expatos-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">Takeaway</p>
          <p className="mt-1.5 leading-relaxed text-copilot-text-secondary">{takeaway}</p>
        </div>
      ) : null}
      <div className="hidden overflow-x-auto rounded-xl border border-copilot-primary/12 xl:block">
        <table className="w-full min-w-[56rem] border-collapse text-sm">
          <thead className="bg-copilot-bg-soft/80 text-left text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
            <tr>
              <th className="px-3 py-2.5">Scenario</th>
              <th className="px-3 py-2.5 text-right">Gross /mo</th>
              <th className="px-3 py-2.5 text-right">Est. benefit</th>
              <th className="px-3 py-2.5 text-right">Net /mo</th>
              <th className="px-3 py-2.5 text-right">Annual net</th>
              <th className="px-3 py-2.5 text-right">1st month</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className={cn(
                  "border-t border-copilot-primary/[0.08]",
                  r.id === "current" && "bg-copilot-primary/[0.04]"
                )}
              >
                <td className="px-3 py-2.5">
                  <span className="font-medium text-copilot-text-primary">
                    {r.label}
                    {r.id === "current" ? (
                      <span className="ml-2 rounded-md bg-copilot-primary/15 px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-copilot-primary">
                        Base
                      </span>
                    ) : null}
                  </span>
                  <p className="mt-0.5 text-xs leading-snug text-copilot-text-secondary">{r.notes}</p>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(r.grossMonthlyProviderCostEur)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(r.estimatedMonthlyBenefitEur)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums font-medium text-copilot-text-primary">
                  {formatChildcareEur(r.estimatedMonthlyNetChildcareCostEur)}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(r.annualNetChildcareCostEur)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(r.firstMonthChildcareCashEur)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 xl:hidden">
        {rows.map((r) => (
          <div
            key={r.id}
            className={cn(
              "rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm",
              r.id === "current" && "ring-2 ring-copilot-primary/20"
            )}
          >
            <p className="font-semibold text-copilot-text-primary">
              {r.label}
              {r.id === "current" ? (
                <span className="ml-2 align-middle text-xs font-normal text-copilot-primary">(your inputs)</span>
              ) : null}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary">{r.notes}</p>
            <dl className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <div className="flex items-center justify-between gap-3 rounded-lg bg-copilot-bg-soft/50 px-3 py-2">
                <dt className="text-copilot-text-secondary">Gross /mo</dt>
                <dd className="tabular-nums text-copilot-text-primary">{formatChildcareEur(r.grossMonthlyProviderCostEur)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-copilot-bg-soft/50 px-3 py-2">
                <dt className="text-copilot-text-secondary">Est. benefit</dt>
                <dd className="tabular-nums text-copilot-text-primary">{formatChildcareEur(r.estimatedMonthlyBenefitEur)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-emerald-50/80 px-3 py-2 sm:col-span-2">
                <dt className="font-medium text-copilot-text-primary">Net /mo</dt>
                <dd className="text-lg font-semibold tabular-nums text-copilot-text-primary">
                  {formatChildcareEur(r.estimatedMonthlyNetChildcareCostEur)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-copilot-bg-soft/50 px-3 py-2">
                <dt className="text-copilot-text-secondary">Annual net</dt>
                <dd className="tabular-nums text-copilot-text-primary">{formatChildcareEur(r.annualNetChildcareCostEur)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-copilot-bg-soft/50 px-3 py-2">
                <dt className="text-copilot-text-secondary">1st month</dt>
                <dd className="tabular-nums text-copilot-text-primary">{formatChildcareEur(r.firstMonthChildcareCashEur)}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

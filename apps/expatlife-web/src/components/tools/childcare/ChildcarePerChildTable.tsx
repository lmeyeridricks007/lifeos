"use client";

import { CARE_TYPE_LABELS, formatChildcareEur } from "@/src/lib/tools/childcare/childcareFormatters";
import type { ChildcarePerChildBreakdown } from "@/src/types/tools/childcare";
import { cn } from "@/lib/cn";

type Props = { rows: ChildcarePerChildBreakdown[] };

export function ChildcarePerChildTable({ rows }: Props) {
  return (
    <div className="space-y-3">
      <h3 id="per-child-breakdown" className="scroll-mt-28 text-lg font-semibold text-copilot-text-primary md:scroll-mt-32">
        Per-child breakdown
      </h3>
      <p className="text-sm text-copilot-text-secondary">
        Provider bill = care hours × hourly rate plus monthly extras you entered. Over-cap loss is a planning figure (excess rate vs
        statutory max and/or hours beyond the reimbursable ceiling), not a Belastingdienst line item.
      </p>
      <div className="hidden overflow-x-auto rounded-xl border border-copilot-primary/12 xl:block">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead className="bg-copilot-bg-soft/80 text-left text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
            <tr>
              <th className="px-3 py-2.5">Child</th>
              <th className="px-3 py-2.5">Care</th>
              <th className="px-3 py-2.5 text-right">H/mo</th>
              <th className="px-3 py-2.5 text-right">€/h prov.</th>
              <th className="px-3 py-2.5 text-right">Reimb. €/h</th>
              <th className="px-3 py-2.5 text-right">Reimb. h</th>
              <th className="px-3 py-2.5 text-right">Bill /mo</th>
              <th className="px-3 py-2.5 text-right">Reimb. base</th>
              <th className="px-3 py-2.5 text-right">Est. benefit</th>
              <th className="px-3 py-2.5 text-right">Out of pocket</th>
              <th className="px-3 py-2.5 text-right">Over-cap loss</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const overCap = c.overCapLoss > 0;
              const rateAboveCap = c.providerHourlyRateEur > c.officialHourlyCapEur;
              return (
                <tr key={c.childId} className="border-t border-copilot-primary/[0.08]">
                  <td className="px-3 py-2.5 font-medium text-copilot-text-primary">
                    {c.label}
                    <span className="mt-0.5 block text-xs font-normal text-copilot-text-secondary">{c.ageBand}</span>
                  </td>
                  <td className="px-3 py-2.5 text-copilot-text-secondary">{CARE_TYPE_LABELS[c.careType]}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{c.monthlyHours.toFixed(1)}</td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", rateAboveCap && "text-amber-800")}>
                    {formatChildcareEur(c.providerHourlyRateEur, true)}
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(c.reimbursableRate, true)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{c.reimbursableHours}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(c.providerBillMonthly)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(c.reimbursableBase)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{formatChildcareEur(c.estimatedBenefit)}</td>
                  <td className="px-3 py-2.5 text-right font-medium tabular-nums text-copilot-text-primary">
                    {formatChildcareEur(c.outOfPocket)}
                  </td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", overCap && "text-amber-800/90")}>
                    {formatChildcareEur(c.overCapLoss)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 xl:hidden">
        {rows.map((c) => {
          const rateAboveCap = c.providerHourlyRateEur > c.officialHourlyCapEur;
          return (
            <div
              key={c.childId}
              className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm"
            >
              <p className="font-semibold text-copilot-text-primary">{c.label}</p>
              <p className="text-xs text-copilot-text-secondary">
                {c.ageBand} · {CARE_TYPE_LABELS[c.careType]}
              </p>
              <div
                className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/60 px-3 py-2 text-xs"
                aria-label="Monthly cash flow summary"
              >
                <span className="font-semibold text-copilot-text-secondary">Flow</span>
                <span className="tabular-nums text-copilot-text-primary">{formatChildcareEur(c.providerBillMonthly)} bill</span>
                <span className="text-copilot-text-secondary" aria-hidden>
                  →
                </span>
                <span className="tabular-nums text-emerald-800/90">−{formatChildcareEur(c.estimatedBenefit)} benefit</span>
                <span className="text-copilot-text-secondary" aria-hidden>
                  →
                </span>
                <span className="font-semibold tabular-nums text-copilot-primary">{formatChildcareEur(c.outOfPocket)} net</span>
              </div>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Hours / mo</dt>
                  <dd className="tabular-nums text-copilot-text-primary">{c.monthlyHours.toFixed(1)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Provider €/h</dt>
                  <dd className={cn("tabular-nums", rateAboveCap && "text-amber-800")}>
                    {formatChildcareEur(c.providerHourlyRateEur, true)}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Reimbursable €/h · h</dt>
                  <dd className="tabular-nums">
                    {formatChildcareEur(c.reimbursableRate, true)} · {c.reimbursableHours}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Provider bill / mo</dt>
                  <dd className="tabular-nums">{formatChildcareEur(c.providerBillMonthly)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Reimbursable base</dt>
                  <dd className="tabular-nums">{formatChildcareEur(c.reimbursableBase)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Est. benefit</dt>
                  <dd className="tabular-nums">{formatChildcareEur(c.estimatedBenefit)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-copilot-text-secondary">Over-cap loss (planning)</dt>
                  <dd className={cn("tabular-nums", c.overCapLoss > 0 && "text-amber-800")}>
                    {formatChildcareEur(c.overCapLoss)}
                  </dd>
                </div>
                <div className="flex justify-between gap-2 border-t border-copilot-primary/10 pt-2 font-medium">
                  <dt className="text-copilot-text-primary">Out of pocket / mo</dt>
                  <dd className="tabular-nums text-copilot-text-primary">{formatChildcareEur(c.outOfPocket)}</dd>
                </div>
              </dl>
              {c.notes.length > 0 ? (
                <ul className="mt-3 list-inside list-disc text-xs text-copilot-text-secondary">
                  {c.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

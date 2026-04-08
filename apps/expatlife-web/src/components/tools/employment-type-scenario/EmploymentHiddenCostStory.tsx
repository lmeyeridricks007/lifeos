"use client";

import { cn } from "@/lib/cn";
import { formatEur } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import type { EmploymentScenarioId, ScenarioCostBuckets } from "@/src/lib/tools/employment-type-scenario/types";

type Props = {
  scenarioOrder: EmploymentScenarioId[];
  labels: Partial<Record<EmploymentScenarioId, string>>;
  buckets: Partial<Record<EmploymentScenarioId, ScenarioCostBuckets>>;
  className?: string;
};

export function EmploymentHiddenCostStory({ scenarioOrder, labels, buckets, className }: Props) {
  return (
    <section
      id="where-money-goes"
      className={cn("scroll-mt-28 space-y-4 md:scroll-mt-32", className)}
      aria-labelledby="where-money-goes-heading"
    >
      <div>
        <h3 id="where-money-goes-heading" className="text-base font-semibold tracking-tight text-copilot-text-primary">
          Where the money actually goes
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-copilot-text-secondary">
          Headline pay often hides tax and payroll drag, umbrella or admin costs, utilization and downtime, insurance and reserves, and
          contribution differences. Figures are planning buckets from this tool’s model — not payroll truth.
        </p>
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparison of planning cost buckets and estimated net across employment scenarios.
          </caption>
          <thead>
            <tr className="border-b border-copilot-primary/15 bg-copilot-bg-soft/80">
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Scenario
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Gross / revenue
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Tax &amp; payroll drag
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Admin / umbrella
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Downtime / utilization
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Insurance / reserves
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Pension
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Other modeled
              </th>
              <th scope="col" className="p-2 font-semibold text-copilot-text-primary">
                Est. net
              </th>
            </tr>
          </thead>
          <tbody>
            {scenarioOrder.map((id) => {
              const b = buckets[id];
              if (!b) return null;
              return (
                <tr key={id} className="border-b border-copilot-primary/10">
                  <th scope="row" className="p-2 font-medium text-copilot-text-primary">
                    {labels[id] ?? id}
                  </th>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.grossOrRevenueAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.taxPayrollDragAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.adminUmbrellaComplianceAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.downtimeUtilizationAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.insuranceReserveAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.pensionAnnual)}</td>
                  <td className="p-2 tabular-nums text-copilot-text-secondary">{formatEur(b.otherAnnual)}</td>
                  <td className="p-2 font-semibold tabular-nums text-copilot-text-primary">{formatEur(b.estimatedNetAnnual)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 lg:hidden">
        {scenarioOrder.map((id) => {
          const b = buckets[id];
          if (!b) return null;
          return (
            <article
              key={id}
              className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 text-sm shadow-expatos-sm"
            >
              <p className="font-semibold text-copilot-text-primary">{labels[id] ?? id}</p>
              <dl className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-copilot-text-secondary">
                <dt>Gross / revenue</dt>
                <dd className="text-right font-medium tabular-nums text-copilot-text-primary">{formatEur(b.grossOrRevenueAnnual)}</dd>
                <dt>Tax &amp; payroll drag</dt>
                <dd className="text-right tabular-nums">{formatEur(b.taxPayrollDragAnnual)}</dd>
                <dt>Admin / umbrella</dt>
                <dd className="text-right tabular-nums">{formatEur(b.adminUmbrellaComplianceAnnual)}</dd>
                <dt>Downtime / util.</dt>
                <dd className="text-right tabular-nums">{formatEur(b.downtimeUtilizationAnnual)}</dd>
                <dt>Insurance / reserves</dt>
                <dd className="text-right tabular-nums">{formatEur(b.insuranceReserveAnnual)}</dd>
                <dt>Pension</dt>
                <dd className="text-right tabular-nums">{formatEur(b.pensionAnnual)}</dd>
                <dt>Other modeled</dt>
                <dd className="text-right tabular-nums">{formatEur(b.otherAnnual)}</dd>
                <dt className="font-semibold text-copilot-text-primary">Est. net</dt>
                <dd className="text-right font-semibold tabular-nums text-copilot-primary">{formatEur(b.estimatedNetAnnual)}</dd>
              </dl>
            </article>
          );
        })}
      </div>

      <p className="rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/50 p-3 text-sm text-copilot-text-secondary">
        <span className="font-semibold text-copilot-text-primary">Takeaway: </span>
        Higher gross or headline rate does not always mean better take-home once model-specific costs are included — compare buckets
        above before you negotiate.
      </p>
    </section>
  );
}

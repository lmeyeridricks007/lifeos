"use client";

import { cn } from "@/lib/cn";
import { bankToolCardClass } from "@/src/components/tools/banking/bankComparisonUi";
import type { BankingCostBreakdownItem } from "@/src/lib/banking/bankingCostEstimator";
import { formatBankingCostRange } from "./bankingCostFormat";

export type BankingCostBreakdownProps = {
  items: readonly BankingCostBreakdownItem[];
  className?: string;
};

export function BankingCostBreakdown({ items, className }: BankingCostBreakdownProps) {
  if (!items.length) return null;

  return (
    <section className={cn("min-w-0 space-y-4", className)} aria-labelledby="banking-cost-breakdown-heading">
      <h3 id="banking-cost-breakdown-heading" className="text-base font-normal text-copilot-text-primary md:text-lg">
        Cost category breakdown
      </h3>
      <p className="text-sm text-copilot-text-secondary">
        Each card shows a low–high euro range per cost type for one month and for a full year. “Confidence” means how much we expect real bills to move inside that range.
      </p>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        {items.map((row) => (
          <article
            key={row.key}
            className={bankToolCardClass("flex min-w-0 flex-col gap-3 border-copilot-primary/10")}
          >
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-normal text-copilot-text-primary">{row.label}</h4>
                <span className="shrink-0 rounded-full border border-copilot-primary/15 bg-copilot-bg-soft px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-copilot-text-muted">
                  {row.confidence} confidence
                </span>
              </div>
              <p className="text-xs leading-relaxed text-copilot-text-secondary">{row.explanation}</p>
            </div>
            <dl className="mt-auto flex min-w-0 flex-col gap-3 border-t border-copilot-primary/10 pt-3 text-sm tabular-nums sm:grid sm:grid-cols-2 sm:gap-2">
              <div className="min-w-0 sm:min-w-0">
                <dt className="text-[10px] font-normal uppercase tracking-wide text-copilot-text-muted">Monthly</dt>
                <dd className="min-w-0 break-words font-normal text-copilot-accent [overflow-wrap:anywhere]">
                  {formatBankingCostRange(row.monthlyLow, row.monthlyHigh)}
                </dd>
              </div>
              <div className="min-w-0 sm:text-right">
                <dt className="text-[10px] font-normal uppercase tracking-wide text-copilot-text-muted">Yearly</dt>
                <dd className="min-w-0 break-words font-normal text-copilot-text-primary [overflow-wrap:anywhere] sm:ml-auto sm:max-w-full">
                  {formatBankingCostRange(row.yearlyLow, row.yearlyHigh)}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

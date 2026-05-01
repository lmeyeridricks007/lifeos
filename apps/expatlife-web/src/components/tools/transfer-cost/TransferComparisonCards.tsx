"use client";

import { cn } from "@/lib/cn";
import { bankToolCardClass, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import { formatBankingCostRange } from "@/src/components/tools/banking-cost/bankingCostFormat";
import type { TransferCostChannelEstimate } from "@/src/lib/tools/transfer-cost-calculator/types";
import { TransferChannelCostMiniVisual } from "./TransferChannelCostMiniVisual";

export type TransferComparisonCardsProps = {
  channels: readonly TransferCostChannelEstimate[];
  /** Same send size as the calculator result — drives the “full bar” label. */
  sendAmountEur: number;
  /** `aria-labelledby` target for the section. */
  sectionHeadingId?: string;
  className?: string;
};

/**
 * Three-path comparison — same grid + article cards as the bank comparison results tone (`bankToolCardClass`).
 * Mobile-first: single column, then three columns from `lg`.
 */
export function TransferComparisonCards({
  channels,
  sendAmountEur,
  sectionHeadingId = "tcc-compare-heading",
  className,
}: TransferComparisonCardsProps) {
  return (
    <section className={cn("space-y-4", className)} aria-labelledby={sectionHeadingId}>
      <h3 id={sectionHeadingId} className="text-base font-normal text-copilot-text-primary md:text-lg">
        Three common ways to send (not a ranking)
      </h3>
      <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
        Same send size, different fee and exchange-rate patterns. Compare the ranges here, then check two real quotes on the same day with the same payout details.
      </p>
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-3">
        {channels.map((ch) => (
          <article
            key={ch.channel}
            className={bankToolCardClass("flex min-w-0 flex-col gap-3 break-words")}
            aria-label={`${ch.label}: modelled cost and speed`}
          >
            <div>
              <p className={BANK_TOOL_LABEL}>Path</p>
              <h4 className="mt-1 text-lg font-normal text-copilot-text-primary">{ch.label}</h4>
            </div>
            <TransferChannelCostMiniVisual
              compact
              sendAmountEur={sendAmountEur}
              totalCostEurLow={ch.totalCostEurLow}
              totalCostEurHigh={ch.totalCostEurHigh}
              feeEurLow={ch.feeEurLow}
              feeEurHigh={ch.feeEurHigh}
              fxCostEurLow={ch.fxCostEurLow}
              fxCostEurHigh={ch.fxCostEurHigh}
              receivedValueEurLow={ch.receivedValueEurLow}
              receivedValueEurHigh={ch.receivedValueEurHigh}
              pathLabel={ch.label}
            />
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              <span className="font-normal text-copilot-text-primary">Total cost in our model: </span>
              {formatBankingCostRange(ch.totalCostEurLow, ch.totalCostEurHigh)}
            </p>
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              <span className="font-normal text-copilot-text-primary">Exchange-rate cost in model: </span>
              {formatBankingCostRange(ch.fxCostEurLow, ch.fxCostEurHigh)} ({ch.fxMarkupPctLow.toFixed(1)}–{ch.fxMarkupPctHigh.toFixed(1)}% of amount sent)
            </p>
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              <span className="font-normal text-copilot-text-primary">Speed: </span>
              {ch.speedSummary}
            </p>
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              <span className="font-normal text-copilot-text-primary">Often fits when: </span>
              {ch.bestUseCase}
            </p>
            {ch.watchOuts.length ? (
              <div className="rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-950">
                <p className="font-normal">Things to watch</p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  {ch.watchOuts.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

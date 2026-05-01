"use client";

import type { HTMLAttributes } from "react";
import { ArrowDown, ArrowRight, Coins, MinusCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { formatBankingCostRange } from "@/src/components/tools/banking-cost/bankingCostFormat";
import type { TransferCostCalculatorInput, TransferCostCalculatorResult } from "@/src/lib/tools/transfer-cost-calculator/types";

const eurPlain = new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function formatSend(amount: number): string {
  return eurPlain.format(Math.round(amount));
}

function focalChannel(result: TransferCostCalculatorResult, input: TransferCostCalculatorInput) {
  if (input.method === "not_sure") {
    return result.channels.find((c) => c.channel === "digital_bank") ?? result.channels[1]!;
  }
  return result.channels.find((c) => c.channel === input.method) ?? result.channels[1]!;
}

function clampPct(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

export type TransferCostResultSummaryVisualProps = {
  result: TransferCostCalculatorResult;
  input: TransferCostCalculatorInput;
  className?: string;
} & Pick<HTMLAttributes<HTMLDivElement>, "role" | "aria-live" | "aria-atomic">;

/**
 * Midpoint-only bar for illustration — headline bands can be wider than one path; legend states this.
 */
export function TransferCostResultSummaryVisual({
  result,
  input,
  className,
  role = "region",
  "aria-live": ariaLive,
  "aria-atomic": ariaAtomic,
}: TransferCostResultSummaryVisualProps) {
  const send = Math.max(1, result.sendAmountEur);
  const row = focalChannel(result, input);

  const recvMid = (result.headlineReceivedEurLow + result.headlineReceivedEurHigh) / 2;
  const totalMid = (result.headlineTotalCostEurLow + result.headlineTotalCostEurHigh) / 2;
  const feeMid = (row.feeEurLow + row.feeEurHigh) / 2;
  const fxMid = (row.fxCostEurLow + row.fxCostEurHigh) / 2;
  const costParts = feeMid + fxMid;
  const denom = recvMid + totalMid;
  const recvPct = denom > 0 ? clampPct((recvMid / denom) * 100) : 0;
  const costPct = denom > 0 ? clampPct((totalMid / denom) * 100) : 0;
  /** Split the cost strip using the focal path’s fee vs FX midpoints (illustrative). */
  const feeOfCostPct = costParts > 0 ? clampPct((feeMid / costParts) * 100) : 50;
  const fxOfCostPct = 100 - feeOfCostPct;

  const barLabelId = "tcc-result-summary-bar-label";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-copilot-primary/12 bg-gradient-to-b from-white to-copilot-bg-soft/90 shadow-expatos-md ring-1 ring-copilot-primary/[0.06]",
        className,
      )}
      role={role}
      aria-live={ariaLive}
      aria-atomic={ariaAtomic}
      aria-labelledby="tcc-result-summary-heading"
    >
      <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
      <div className="px-4 py-5 sm:px-6 sm:py-6">
        <h4 id="tcc-result-summary-heading" className="sr-only">
          Transfer cost summary
        </h4>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4">
          <div className="min-w-0 text-center md:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-copilot-text-muted">You send</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold tabular-nums text-copilot-text-primary sm:text-3xl">{formatSend(send)}</p>
            <p className="mt-1 text-xs text-copilot-text-secondary">From the Netherlands (euros)</p>
          </div>

          <div className="hidden shrink-0 text-copilot-primary/50 md:block" aria-hidden>
            <ArrowRight className="h-8 w-8" strokeWidth={1.25} />
          </div>
          <div className="flex justify-center text-copilot-primary/50 md:hidden" aria-hidden>
            <ArrowDown className="h-6 w-6" strokeWidth={1.25} />
          </div>

          <div className="min-w-0 text-center md:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-copilot-text-muted">Roughly arrives</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold tabular-nums text-copilot-text-primary sm:text-3xl">
              {formatBankingCostRange(result.headlineReceivedEurLow, result.headlineReceivedEurHigh)}
            </p>
            <p className="mt-1 text-xs text-copilot-text-secondary">Euro planning range (not live FX)</p>
          </div>
        </div>

        <div className="mt-6 border-t border-copilot-primary/10 pt-5">
          <p id={barLabelId} className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-copilot-text-muted md:text-left">
            Where the money goes (illustration)
          </p>
          <p className="mt-1 text-center text-xs leading-relaxed text-copilot-text-secondary md:text-left">
            Bar uses the <span className="font-medium text-copilot-text-primary">middle</span> of each range — your real split can differ. Cost strip uses your focal path (
            {row.label}) for fee vs exchange.
          </p>

          <div
            className="mt-4 flex h-12 w-full min-w-0 overflow-hidden rounded-xl ring-1 ring-copilot-primary/15 sm:h-14"
            role="img"
            aria-labelledby={barLabelId}
            aria-describedby="tcc-result-summary-bar-desc"
          >
            <span
              className="flex h-full min-w-[2px] shrink-0 items-center justify-center bg-gradient-to-b from-copilot-primary to-blue-700 text-[10px] font-semibold text-white sm:text-xs"
              style={{ width: `${recvPct}%` }}
            >
              {recvPct > 12 ? <span className="px-1 drop-shadow-sm">Stays with recipient</span> : null}
            </span>
            <span className="flex h-full min-w-0 shrink-0" style={{ width: `${costPct}%` }}>
              <span
                className="flex h-full min-w-0 items-center justify-center bg-amber-500/90 text-[10px] font-semibold text-amber-950 sm:text-xs"
                style={{ width: `${feeOfCostPct}%` }}
              >
                {costPct > 8 && feeOfCostPct > 12 ? "Fee" : null}
              </span>
              <span
                className="flex h-full min-w-0 items-center justify-center bg-copilot-accent/90 text-[10px] font-semibold text-slate-900 sm:text-xs"
                style={{ width: `${fxOfCostPct}%` }}
              >
                {costPct > 8 && fxOfCostPct > 12 ? "Exchange" : null}
              </span>
            </span>
          </div>
          <p id="tcc-result-summary-bar-desc" className="sr-only">
            Illustrative bar: about {Math.round(recvPct)} percent stays with the recipient, about {Math.round(costPct)} percent is
            modelled cost on your side, split into fee and exchange parts using midpoints.
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-copilot-text-secondary md:justify-start">
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-gradient-to-br from-copilot-primary to-blue-700" aria-hidden />
              <Coins className="h-3.5 w-3.5 shrink-0 text-copilot-primary" aria-hidden />
              <span>Value for recipient (mid of band)</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-amber-500" aria-hidden />
              <MinusCircle className="h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden />
              <span>Send fee ({row.label}, mid)</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-copilot-accent" aria-hidden />
              <MinusCircle className="h-3.5 w-3.5 shrink-0 text-copilot-accent" aria-hidden />
              <span>Exchange-rate cost (mid)</span>
            </li>
          </ul>

          <div className="mt-5 rounded-xl bg-copilot-bg-soft/80 px-3 py-2.5 text-center text-sm text-copilot-text-primary md:text-left">
            <span className="font-medium">Total cost on your side (model):</span>{" "}
            {formatBankingCostRange(result.headlineTotalCostEurLow, result.headlineTotalCostEurHigh)}
          </div>

          <p className="mt-3 text-center text-xs leading-relaxed text-copilot-text-muted md:text-left">{result.headlineNarrative}</p>
        </div>
      </div>
    </div>
  );
}

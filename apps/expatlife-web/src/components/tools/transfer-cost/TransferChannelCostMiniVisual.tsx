"use client";

import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

function clampPct(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

export type TransferChannelCostMiniVisualProps = {
  sendAmountEur: number;
  totalCostEurLow: number;
  totalCostEurHigh: number;
  feeEurLow: number;
  feeEurHigh: number;
  fxCostEurLow: number;
  fxCostEurHigh: number;
  receivedValueEurLow: number;
  receivedValueEurHigh: number;
  /** For `aria-label` on the bar (e.g. path name). */
  pathLabel: string;
  /** Tighter legend and shorter caption. */
  compact?: boolean;
  className?: string;
};

/**
 * One horizontal strip: recipient value vs fee vs exchange cost, using **midpoints** of planning bands — illustration only.
 */
export function TransferChannelCostMiniVisual({
  sendAmountEur,
  totalCostEurLow,
  totalCostEurHigh,
  feeEurLow,
  feeEurHigh,
  fxCostEurLow,
  fxCostEurHigh,
  receivedValueEurLow,
  receivedValueEurHigh,
  pathLabel,
  compact = false,
  className,
}: TransferChannelCostMiniVisualProps) {
  const send = Math.max(1, sendAmountEur);
  const recvMid = (receivedValueEurLow + receivedValueEurHigh) / 2;
  const totalMid = (totalCostEurLow + totalCostEurHigh) / 2;
  const feeMid = (feeEurLow + feeEurHigh) / 2;
  const fxMid = (fxCostEurLow + fxCostEurHigh) / 2;
  const costParts = feeMid + fxMid;
  const denom = recvMid + totalMid;
  const recvPct = denom > 0 ? clampPct((recvMid / denom) * 100) : 0;
  const costPct = denom > 0 ? clampPct((totalMid / denom) * 100) : 0;
  const feeOfCostPct = costParts > 0 ? clampPct((feeMid / costParts) * 100) : 50;
  const fxOfCostPct = 100 - feeOfCostPct;

  return (
    <div className={cn("min-w-0", className)}>
      <div className={cn("overflow-hidden rounded-lg ring-1 ring-copilot-primary/12", compact ? "" : "shadow-sm")}>
        <div className={cn("h-0.5 w-full", movingNlSignatureGradientClass)} aria-hidden />
        <div className="bg-copilot-bg-soft/50 px-2.5 pb-2 pt-2 sm:px-3">
          <p className={cn("font-medium text-copilot-text-primary", compact ? "text-[10px]" : "text-xs")}>
            Each full bar = {new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(Math.round(send))} sent
          </p>
          <p className={cn("text-copilot-text-muted", compact ? "text-[10px] leading-snug" : "text-[11px] leading-snug")}>
            Colours use midpoints of our ranges — not a live quote.
          </p>
          <div
            className={cn("mt-2 flex w-full min-w-0 overflow-hidden rounded-md", compact ? "h-7" : "h-9")}
            role="img"
            aria-label={`${pathLabel}: about ${Math.round(recvPct)} percent stays with recipient, rest is modelled fee and exchange cost using midpoints.`}
          >
            <span
              className="min-w-[3px] shrink-0 bg-gradient-to-b from-copilot-primary to-blue-700"
              style={{ width: `${recvPct}%` }}
            />
            <span className="flex min-w-0 shrink-0" style={{ width: `${costPct}%` }}>
              <span className="min-w-0 bg-amber-500/90" style={{ width: `${feeOfCostPct}%` }} />
              <span className="min-w-0 bg-copilot-accent/90" style={{ width: `${fxOfCostPct}%` }} />
            </span>
          </div>
          <ul
            className={cn(
              "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-copilot-text-muted",
              compact ? "text-[10px] leading-tight" : "text-[11px]",
            )}
            aria-hidden
          >
            <li className="inline-flex items-center gap-1">
              <span className="h-2 w-2 shrink-0 rounded-sm bg-gradient-to-br from-copilot-primary to-blue-700" />
              Stays with recipient
            </li>
            <li className="inline-flex items-center gap-1">
              <span className="h-2 w-2 shrink-0 rounded-sm bg-amber-500" />
              Fee
            </li>
            <li className="inline-flex items-center gap-1">
              <span className="h-2 w-2 shrink-0 rounded-sm bg-copilot-accent" />
              Exchange
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

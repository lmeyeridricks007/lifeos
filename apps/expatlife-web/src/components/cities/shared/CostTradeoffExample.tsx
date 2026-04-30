import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

const formatEur = (value: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

const formatEurAbs = (value: number) => formatEur(Math.abs(value));

export type CostTradeoffExampleProps = {
  /** Monthly rent reduction vs your baseline (e.g. inner-city hub). Positive = you pay less rent. */
  rentDiff: number;
  /** Extra monthly commute spend (season tickets, fuel, parking). Positive = costs more. */
  commuteCost: number;
  /** Net monthly change after rent and commute (positive = still ahead). Planning illustration only. */
  netImpact: number;
  className?: string;
};

/**
 * Editorial “back-of-envelope” strip: cheaper rent vs higher commute vs net — not a live calculator output.
 */
export function CostTradeoffExample({ rentDiff, commuteCost, netImpact, className }: CostTradeoffExampleProps) {
  const summary = `${formatEurAbs(rentDiff)} cheaper rent, ${formatEurAbs(commuteCost)} more commute, ${formatEur(netImpact)} net per month (illustrative).`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-50/95 via-white to-sky-50/40 p-4 shadow-card ring-1 ring-border/15 sm:p-6",
        className
      )}
      role="figure"
      aria-label={summary}
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-sky-400/[0.07] blur-3xl" aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Illustrative month</p>
      <p className="mt-1 text-xs text-foreground-muted sm:text-sm">Planning numbers only — plug your own bands into the calculators.</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-2 md:gap-3">
        <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl border border-emerald-200/80 bg-white/90 px-4 py-3 shadow-sm ring-1 ring-emerald-900/[0.04] sm:min-w-[140px] sm:max-w-[220px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">Rent</span>
          <span className="mt-1 text-lg font-bold tabular-nums tracking-tight text-emerald-900 sm:text-xl">{formatEurAbs(rentDiff)}</span>
          <span className="mt-0.5 text-xs font-medium leading-snug text-emerald-900/85">cheaper vs baseline</span>
        </div>

        <div className="flex items-center justify-center sm:px-0" aria-hidden>
          <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-slate-400 sm:rotate-0" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl border border-amber-200/90 bg-white/90 px-4 py-3 shadow-sm ring-1 ring-amber-900/[0.05] sm:min-w-[140px] sm:max-w-[220px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900">Commute</span>
          <span className="mt-1 text-lg font-bold tabular-nums tracking-tight text-amber-950 sm:text-xl">+{formatEurAbs(commuteCost)}</span>
          <span className="mt-0.5 text-xs font-medium leading-snug text-amber-950/85">more per month</span>
        </div>

        <div className="flex items-center justify-center sm:px-0" aria-hidden>
          <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-slate-400 sm:rotate-0" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl border border-slate-200 bg-slate-900/[0.92] px-4 py-3 text-white shadow-md ring-1 ring-slate-900/20 sm:min-w-[140px] sm:max-w-[220px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300">Net</span>
          <span className="mt-1 text-lg font-bold tabular-nums tracking-tight text-white sm:text-xl">{formatEur(netImpact)}</span>
          <span className="mt-0.5 text-xs font-medium leading-snug text-slate-300">
            {netImpact >= 0 ? "monthly vs baseline (rent + commute only)" : "monthly after commute eats savings"}
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-sm font-semibold tabular-nums text-foreground sm:text-base" aria-hidden>
        <span className="text-emerald-800">{formatEurAbs(rentDiff)} cheaper rent</span>
        <span className="mx-1.5 text-foreground-muted">→</span>
        <span className="text-amber-950">{formatEurAbs(commuteCost)} more commute</span>
        <span className="mx-1.5 text-foreground-muted">→</span>
        <span className={netImpact >= 0 ? "text-emerald-900" : "text-rose-200"}>
          {formatEur(netImpact)} {netImpact >= 0 ? "savings" : "shortfall"}
        </span>
      </p>
    </div>
  );
}

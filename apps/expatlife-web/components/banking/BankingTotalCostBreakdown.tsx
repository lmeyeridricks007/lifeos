import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";

export type BankingTotalCostBreakdownItem = {
  id?: string;
  label: string;
  text: string;
  /** Rough ballpark for orientation — not a live bank quote. */
  example?: string;
  chip?: string;
};

/** Structured “equation” summary — moving-pillar style chips + outcome (preferred over plain `summaryLine`). */
export type BankingTotalCostEquationSummary = {
  factors: readonly string[];
  outcomeLine: string;
  footnote: string;
};

export type BankingTotalCostBreakdownProps = {
  items: readonly BankingTotalCostBreakdownItem[];
  /** Plain paragraph fallback when you do not pass `summaryVisual`. */
  summaryLine?: string;
  summaryVisual?: BankingTotalCostEquationSummary;
  itemChipLabel?: string;
  className?: string;
  /** Stable id for the “Total picture” heading (avoid clashes if multiple instances). */
  summaryRegionHeadingId?: string;
};

function BankingCostEquationSummaryBlock({
  factors,
  outcomeLine,
  footnote,
  headingId,
}: BankingTotalCostEquationSummary & { headingId: string }) {
  return (
    <div
      className="mt-6 min-w-0 overflow-hidden rounded-2xl bg-copilot-surface shadow-expatos-md ring-1 ring-slate-900/[0.05] sm:mt-7"
      role="region"
      aria-labelledby={headingId}
    >
      <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
      <div className="p-4 sm:p-5">
        <p id={headingId} className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">
          Total picture
        </p>
        <ul className="mt-4 flex list-none flex-wrap items-center gap-x-0.5 gap-y-2 p-0" aria-label="Cost factors to add together">
          {factors.map((factor, i) => (
            <li key={`${factor}-${i}`} className="contents">
              <span className="inline-flex max-w-full items-center rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/90 px-2.5 py-1.5 text-left text-[13px] font-medium leading-snug text-copilot-text-primary ring-1 ring-copilot-primary/[0.04]">
                {factor}
              </span>
              {i < factors.length - 1 ? (
                <span
                  className="mx-0.5 inline-flex min-h-[2rem] items-center px-0.5 text-sm font-semibold text-copilot-text-muted"
                  aria-hidden
                >
                  +
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2 border-t border-copilot-primary/[0.08] pt-4 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="select-none text-2xl font-light leading-none text-copilot-primary sm:text-[1.65rem]" aria-hidden>
            →
          </span>
          <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-copilot-text-primary sm:text-base">{outcomeLine}</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary">{footnote}</p>
      </div>
    </div>
  );
}

/** Cost-line grid aligned with Cheapest accounts “what cheap means” and Banking fees card language. */
export function BankingTotalCostBreakdown({
  items,
  summaryLine,
  summaryVisual,
  itemChipLabel = "Cost line",
  className,
  summaryRegionHeadingId = "banking-cost-total-picture-heading",
}: BankingTotalCostBreakdownProps) {
  return (
    <div className={cn("min-w-0 max-w-full", className)}>
      <div className="grid min-w-0 max-w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {items.map((line, i) => (
          <article key={line.id ?? line.label} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full")}>
            <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
            <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{line.chip ?? itemChipLabel}</span>
                <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-2 break-words text-sm font-bold leading-snug text-foreground">{line.label}</h3>
              <p className="mt-3 text-xs leading-snug text-foreground-muted">{line.text}</p>
              {line.example ? (
                <p className="mt-2.5 border-t border-border/45 pt-2.5 text-[11px] leading-snug text-foreground-muted">
                  <span className="font-semibold text-foreground">Illustrative example</span>
                  <span className="mt-0.5 block">{line.example}</span>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      {summaryVisual ? (
        <BankingCostEquationSummaryBlock {...summaryVisual} headingId={summaryRegionHeadingId} />
      ) : summaryLine ? (
        <div className="mt-6 min-w-0 overflow-hidden rounded-2xl bg-copilot-surface shadow-expatos-md ring-1 ring-slate-900/[0.05] sm:mt-7">
          <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className="p-4 sm:p-5">
            <p id={summaryRegionHeadingId} className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">
              Total picture
            </p>
            <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary">{summaryLine}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

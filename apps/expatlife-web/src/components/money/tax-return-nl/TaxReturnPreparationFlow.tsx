import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { MoneyTaxReturnPreparationFlowStep } from "@/src/content/money/tax-return-nl/moneyTaxReturnPreparationFlow";

export type TaxReturnPreparationFlowProps = {
  /** Steps with markdown-friendly `body` strings (BoldParagraph). */
  steps: readonly MoneyTaxReturnPreparationFlowStep[];
  className?: string;
};

/**
 * Vertical preparation timeline for Dutch tax return orientation — reusable on the Tax Return NL page or elsewhere.
 */
export function TaxReturnPreparationFlow({ steps, className }: TaxReturnPreparationFlowProps) {
  return (
    <ol className={cn("relative m-0 list-none space-y-0 p-0", className)} role="list">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const n = index + 1;
        return (
          <li key={step.id} className="relative flex gap-3 sm:gap-4">
            {/* Timeline rail */}
            <div className="flex w-10 shrink-0 flex-col items-center sm:w-11" aria-hidden>
              <span
                className={cn(
                  "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm sm:h-11 sm:w-11 sm:text-base",
                  "bg-gradient-to-br from-brand to-brand-strong ring-2 ring-white ring-offset-2 ring-offset-surface-raised"
                )}
              >
                {n}
              </span>
              {!isLast ? (
                <span
                  className="mt-1 w-px flex-1 min-h-[1.25rem] bg-gradient-to-b from-brand/35 via-border to-border/60 sm:min-h-[1.5rem]"
                  aria-hidden
                />
              ) : null}
            </div>

            <div className={cn("min-w-0 flex-1", !isLast ? "pb-6 sm:pb-8" : "pb-0")}>
              <article
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border/90 bg-surface-raised/95 p-4 shadow-card ring-1 ring-border/10 sm:p-5"
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <h3 className="pt-0.5 text-base font-semibold tracking-tight text-foreground sm:text-lg">{step.title}</h3>
                <BoldParagraph
                  text={step.body}
                  className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground sm:text-[0.9375rem]"
                />
                {step.links.length > 0 ? (
                  <div className="mt-4 border-t border-border/70 pt-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Related</p>
                    <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2" role="list">
                      {step.links.map((link) => (
                        <li key={`${step.id}-${link.href}-${link.label}`} className="min-w-0">
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline"
                          >
                            {link.label}
                            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { TaxJourneyFlowStep } from "@/src/components/money/tax-guide-for-expats/TaxJourneyFlow";
import { moneyExpatTaxesJourneyFlowSteps } from "@/src/content/money/expat-taxes-nl/moneyExpatTaxesJourneyFlowSteps";

const prose = "[&_strong]:font-semibold [&_strong]:text-foreground";

const linkRowClass =
  "inline-flex min-h-[44px] w-full max-w-full items-center rounded-lg py-2 text-xs font-semibold text-link transition-colors hover:bg-brand/5 hover:text-link-hover sm:min-h-0 sm:w-auto sm:py-0.5 sm:text-sm";

export type ExpatTaxJourneyFlowProps = {
  /** Override steps for tests or variants; defaults to the expat NL journey config. */
  steps?: readonly TaxJourneyFlowStep[];
  className?: string;
};

/**
 * Vertical timeline of the expat tax journey — Money pillar styling, mobile-friendly link rows.
 */
export function ExpatTaxJourneyFlow({ steps = moneyExpatTaxesJourneyFlowSteps, className }: ExpatTaxJourneyFlowProps) {
  const n = steps.length;

  return (
    <ol className={cn("m-0 flex list-none flex-col gap-6 p-0 sm:gap-8", className)} aria-label="Expat tax journey steps">
      {steps.map((step, i) => (
        <li key={step.number} className="flex gap-3 sm:gap-4">
          <div className="flex w-11 shrink-0 flex-col items-center sm:w-12">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand-strong ring-4 ring-surface-raised"
              aria-hidden
            >
              {step.number}
            </span>
            {i < n - 1 ? (
              <div
                className="mt-2 min-h-[1.25rem] w-0.5 flex-1 bg-gradient-to-b from-brand/35 via-brand/15 to-border/50"
                aria-hidden
              />
            ) : null}
          </div>

          <article
            className={cn(
              "relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-border/90 bg-surface-raised p-4 shadow-expatos-sm ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="pt-0.5 text-sm font-semibold tracking-tight text-foreground sm:text-base">{step.title}</h3>
            <BoldParagraph text={step.body} className={cn("mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm", prose)} />
            {step.links && step.links.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-0.5 sm:gap-1" role="list">
                {step.links.map((link) => (
                  <li key={`${step.number}-${link.href}-${link.label}`}>
                    <Link href={link.href} className={linkRowClass}>
                      <span className="underline-offset-2 group-hover:underline">{link.label}</span>
                      <span className="ml-1 text-link/80" aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}

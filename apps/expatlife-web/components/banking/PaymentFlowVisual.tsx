import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PaymentFlowStep = {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
};

const stepNumClass =
  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-strong/20 bg-brand/10 text-xs font-bold text-brand-strong";

/**
 * Ordered payment steps as a vertical flow — full-width cards with a clear connector
 * between steps (no horizontal “orphan” arrows). Same card shell as other banking components.
 */
export function PaymentFlowVisual({
  steps,
  /** Accessible name for the step list (e.g. “Typical SEPA transfer flow”). */
  flowLabel,
  className,
}: {
  steps: readonly PaymentFlowStep[];
  flowLabel: string;
  className?: string;
}) {
  if (!steps.length) return null;

  return (
    <div className={cn("min-w-0", className)}>
      <ol className="m-0 mx-auto max-w-3xl list-none space-y-0 p-0" aria-label={flowLabel}>
        {steps.map((step, index) => (
          <li key={step.id} className="min-w-0">
            <article
              className={cn(
                "relative flex min-h-0 min-w-0 flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:p-4",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="flex items-start gap-3">
                <span className={stepNumClass} aria-hidden>
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold tracking-tight text-foreground">{step.title}</h4>
                  {step.description?.trim() ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
                  ) : null}
                </div>
              </div>
            </article>
            {index < steps.length - 1 ? (
              <div className="flex flex-col items-center py-2 sm:py-3" aria-hidden>
                <span className="block h-4 w-px shrink-0 bg-border/80" />
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface-muted/80 text-xs font-semibold text-foreground-muted">
                  ↓
                </span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

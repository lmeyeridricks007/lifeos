import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
  bankingGuideTertiaryLinkClass,
} from "@/components/banking/bankingPageUi";

export type RecoveryPlanUrgency = "immediate" | "same_day" | "when_possible";

export type RecoveryPlanStepItem = {
  id: string;
  title: string;
  description: string;
  urgency: RecoveryPlanUrgency;
  relatedLinks?: readonly string[];
};

export type RecoveryPlanLinkEntry = { href: string; label: string };

const URGENCY_CHIP_CLASS =
  "rounded-full border border-border/70 bg-surface-muted/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground-muted";

function recoveryPlanUrgencyLabel(urgency: RecoveryPlanUrgency): string {
  switch (urgency) {
    case "immediate":
      return "Do first";
    case "same_day":
      return "Same day";
    case "when_possible":
      return "When you can";
  }
}

const DEFAULT_RESOLVE_LINKS = (): readonly RecoveryPlanLinkEntry[] => [];

/**
 * Ordered recovery plan — same card rhythm as {@link ScamResponseSteps}; urgency chips only.
 */
export function RecoveryPlanSteps({
  steps,
  className,
  stepChipLabel = "Step",
  resolveLinkEntries = DEFAULT_RESOLVE_LINKS,
}: {
  steps: readonly RecoveryPlanStepItem[];
  className?: string;
  stepChipLabel?: string;
  resolveLinkEntries?: (relatedLinks: readonly string[] | undefined) => readonly RecoveryPlanLinkEntry[];
}) {
  if (!steps.length) return null;

  return (
    <div className={cn("grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", className)}>
      {steps.map((step, index) => {
        const links = resolveLinkEntries(step.relatedLinks);
        return (
          <article key={step.id} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full overflow-hidden")}>
            <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
            <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{stepChipLabel}</span>
                <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                <span className={URGENCY_CHIP_CLASS}>{recoveryPlanUrgencyLabel(step.urgency)}</span>
              </div>
              <h3 className="mt-2 break-words text-base font-bold leading-snug tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-3 break-words text-sm leading-relaxed text-foreground-muted sm:text-[0.9375rem] sm:leading-relaxed">{step.description}</p>
              {links.length > 0 ? (
                <div className="mt-4 min-w-0 border-t border-dashed border-border/60 pt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">Related on ExpatCopilot</p>
                  <ul className="mt-2 flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
                    {links.map((l) => (
                      <li key={l.href} className="min-w-0">
                        <Link href={l.href} className={cn(bankingGuideTertiaryLinkClass, "break-words")}>
                          {l.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

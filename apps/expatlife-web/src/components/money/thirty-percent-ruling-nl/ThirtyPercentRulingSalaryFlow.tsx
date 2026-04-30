import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type ThirtyPercentRulingSalaryFlowStep = {
  id: string;
  title: string;
  body: string;
  /** Optional tool or guide links — omit when none. */
  links?: readonly { href: string; label: string }[];
};

export type ThirtyPercentRulingSalaryFlowProps = {
  steps: readonly ThirtyPercentRulingSalaryFlowStep[];
  className?: string;
};

const linkClass =
  "inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2.5 text-sm font-semibold text-brand-strong shadow-sm ring-1 ring-brand/10 transition-colors hover:bg-brand/10 sm:w-auto sm:min-w-0";

/**
 * Vertical salary journey for the 30% ruling guide — readable on small screens, optional tool links per step.
 */
export function ThirtyPercentRulingSalaryFlow({ steps, className }: ThirtyPercentRulingSalaryFlowProps) {
  return (
    <ol className={cn("relative space-y-0", className)} role="list">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.id} className="relative flex gap-3 sm:gap-4">
            {!isLast ? (
              <span
                className="absolute left-4 top-10 bottom-0 w-px translate-x-[-0.5px] bg-gradient-to-b from-brand/30 via-border to-border/40 sm:left-[17px] sm:top-11"
                aria-hidden
              />
            ) : null}
            <div className="relative z-[1] flex shrink-0 flex-col items-center pt-0.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-md ring-2 ring-white sm:h-9 sm:w-9 sm:text-sm">
                {index + 1}
              </span>
            </div>
            <div
              className={cn(
                "relative mb-6 min-w-0 flex-1 overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mb-8 sm:p-5",
                movingNlCardMicroLiftClass,
                isLast && "mb-0"
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
              <div className="pt-1">
                <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                <BoldParagraph
                  text={step.body}
                  className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                {step.links && step.links.length > 0 ? (
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {step.links.map((l) => (
                      <Link key={`${step.id}-${l.href}`} href={l.href} className={linkClass}>
                        {l.label}
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

import Link from "next/link";
import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type TaxJourneyFlowLink = { label: string; href: string };

export type TaxJourneyFlowStep = {
  number: number;
  title: string;
  body: string;
  links?: readonly TaxJourneyFlowLink[];
};

type TaxJourneyFlowProps = {
  steps: readonly TaxJourneyFlowStep[];
  className?: string;
};

const prose = "[&_strong]:font-semibold [&_strong]:text-copilot-text-primary";

export function TaxJourneyFlow({ steps, className }: TaxJourneyFlowProps) {
  const n = steps.length;

  return (
    <div className={cn("w-full", className)}>
      <div className="m-0 flex flex-col gap-0 p-0" role="list">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <div className="relative flex min-w-0 flex-col" role="listitem">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/90 bg-surface-raised p-4 shadow-expatos-sm ring-1 ring-border/10 sm:p-5",
                  movingNlCardMicroLiftClass
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <div className="flex items-start gap-3 pt-0.5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand-strong"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{step.title}</h3>
                    <BoldParagraph
                      text={step.body}
                      className={cn("mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm", prose)}
                    />
                    {step.links && step.links.length > 0 ? (
                      <ul className="mt-3 flex flex-col gap-1.5" role="list">
                        {step.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              href={link.href}
                              className="text-xs font-semibold text-link hover:text-link-hover hover:underline sm:text-sm"
                            >
                              {link.label} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            </div>

            {i < n - 1 ? (
              <div className="flex shrink-0 items-center justify-center py-2" aria-hidden>
                <ChevronDown className="h-5 w-5 text-foreground-faint" strokeWidth={2} />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

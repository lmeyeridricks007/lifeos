"use client";

import { cn } from "@/lib/cn";
import type { DecisionLens } from "@/src/lib/tools/employment-type-scenario/types";

type Props = {
  lenses: DecisionLens[];
  className?: string;
};

export function EmploymentDecisionLensesGrid({ lenses, className }: Props) {
  return (
    <section
      id="decision-lenses"
      className={cn("scroll-mt-28 space-y-3 md:scroll-mt-32", className)}
      aria-labelledby="decision-lenses-heading"
    >
      <h3 id="decision-lenses-heading" className="text-base font-semibold tracking-tight text-copilot-text-primary">
        Who wins by dimension?
      </h3>
      <p className="max-w-3xl text-sm text-copilot-text-secondary">
        Each card is the scenario that scores highest on that axis in this run. Your weighted “top match” can differ if you care more
        about the blend than any single column.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {lenses.map((l) => (
          <article
            key={l.key}
            className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-copilot-primary">{l.title}</p>
            <p className="mt-2 text-lg font-semibold text-copilot-text-primary">{l.winnerShortLabel}</p>
            <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">{l.line}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

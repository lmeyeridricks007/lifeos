"use client";

import { cn } from "@/lib/cn";
import type { EmploymentScenarioId } from "@/src/lib/tools/employment-type-scenario/types";

type Props = {
  formId: string;
  topLabel: string | null;
  topScenarioId: EmploymentScenarioId | null;
  confidence: "low" | "medium" | "high";
  reasons: string[];
  improvementHint: string;
  className?: string;
};

const CONF_BADGE: Record<Props["confidence"], string> = {
  low: "bg-slate-500/12 text-slate-800 ring-slate-500/25",
  medium: "bg-amber-500/14 text-amber-950 ring-amber-500/25",
  high: "bg-emerald-500/14 text-emerald-900 ring-emerald-500/25",
};

export function EmploymentEarlyPreviewCard({
  formId,
  topLabel,
  topScenarioId,
  confidence,
  reasons,
  improvementHint,
  className,
}: Props) {
  const headingId = `${formId}-early-preview-h`;
  return (
    <section
      id="early-preview"
      className={cn(
        "scroll-mt-28 rounded-2xl border border-copilot-primary/14 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/35 p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:scroll-mt-32 md:p-5",
        className
      )}
      aria-labelledby={headingId}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p id={headingId} className="text-xs font-bold uppercase tracking-wide text-copilot-primary">
            Early preview
          </p>
          <p className="mt-1 text-sm text-copilot-text-secondary">
            Updates as you edit — same model as Calculate, without replacing your last locked run.
          </p>
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1",
            CONF_BADGE[confidence]
          )}
        >
          Confidence: {confidence}
        </span>
      </div>

      {topLabel && topScenarioId ? (
        <div className="mt-4 rounded-xl border border-copilot-primary/12 bg-white/80 p-4 shadow-sm dark:bg-copilot-surface/60">
          <p className="text-xs font-semibold text-copilot-text-secondary">Best current fit (weighted preview)</p>
          <p className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary">{topLabel}</p>
          {reasons.length ? (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Why</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
                {reasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 text-sm font-medium text-copilot-text-primary">{improvementHint}</p>
      )}

      <p className="mt-3 text-xs leading-relaxed text-copilot-text-secondary/90">
        Preview uses your current fields and improves as you add income and context. Tap <strong className="text-copilot-text-primary">Calculate</strong>{" "}
        to lock results, export, and sync the detailed sections below.
      </p>
    </section>
  );
}

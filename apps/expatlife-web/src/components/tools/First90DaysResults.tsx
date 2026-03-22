"use client";

import { Sparkles } from "lucide-react";
import { ReadinessMeter } from "./ReadinessMeter";
import { WeekBlock } from "./WeekBlock";
import { UnknownsList } from "./UnknownsList";

export type First90DaysResultsProps = {
  title?: string;
  summary: string;
  readiness: { score: number; label: string; explanation: string };
  week1to2: Array<{ id: string; label: string; description: string; relatedGuideHref?: string }>;
  week3to4: Array<{ id: string; label: string; description: string; relatedGuideHref?: string }>;
  month2: Array<{ id: string; label: string; description: string; relatedGuideHref?: string }>;
  month3: Array<{ id: string; label: string; description: string; relatedGuideHref?: string }>;
  unknowns: Array<{ id: string; label: string; whyItMatters: string }>;
};

export function First90DaysResults({
  title = "Your personalized 90-day plan",
  summary,
  readiness,
  week1to2,
  week3to4,
  month2,
  month3,
  unknowns,
}: First90DaysResultsProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <p className="text-sm text-slate-700">{summary}</p>
        </div>
      </section>

      <ReadinessMeter
        title="Your readiness"
        score={readiness.score}
        label={readiness.label}
        explanation={readiness.explanation}
      />

      <WeekBlock title="Week 1-2" items={week1to2} />
      <WeekBlock title="Week 3-4" items={week3to4} />
      <WeekBlock title="Month 2" items={month2} />
      <WeekBlock title="Month 3" items={month3} />

      <UnknownsList title="Things you may still want to confirm" items={unknowns} />
    </div>
  );
}

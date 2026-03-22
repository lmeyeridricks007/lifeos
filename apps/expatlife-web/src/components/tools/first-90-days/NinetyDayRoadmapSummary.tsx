"use client";

import { Sparkles } from "lucide-react";

export type NinetyDayRoadmapSummaryProps = {
  summary: string;
  focusFirst: string;
  stabilizeByMonth2: string;
  buildByMonth3: string;
  title?: string;
};

export function NinetyDayRoadmapSummary({
  summary,
  focusFirst,
  stabilizeByMonth2,
  buildByMonth3,
  title = "Your 90-day roadmap",
}: NinetyDayRoadmapSummaryProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
        <p className="text-sm text-slate-700">{summary}</p>
      </div>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-slate-800">Focus first</dt>
          <dd className="mt-0.5 text-slate-600">{focusFirst}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-800">Stabilise by month 2</dt>
          <dd className="mt-0.5 text-slate-600">{stabilizeByMonth2}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-800">Build by month 3</dt>
          <dd className="mt-0.5 text-slate-600">{buildByMonth3}</dd>
        </div>
      </dl>
    </section>
  );
}

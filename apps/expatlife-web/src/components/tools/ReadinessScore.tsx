"use client";

import { GaugeCircle } from "lucide-react";

export function ReadinessScore({
  title = "Your readiness score",
  score,
  label,
  explanation,
}: {
  title?: string;
  score: number;
  label: string;
  explanation: string;
}) {
  const chipClass =
    score >= 70
      ? "bg-emerald-100 text-emerald-800 ring-emerald-200"
      : score >= 40
        ? "bg-amber-100 text-amber-800 ring-amber-200"
        : "bg-slate-100 text-slate-800 ring-slate-200";

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-brand-500" />
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <GaugeCircle className="h-5 w-5" />
        </span>
        <span className="text-3xl font-semibold text-slate-900">{score}</span>
        <span className="text-sm text-slate-500">/100</span>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${chipClass}`}>
          {label}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={score >= 70 ? "h-full rounded-full bg-emerald-500" : score >= 40 ? "h-full rounded-full bg-amber-500" : "h-full rounded-full bg-slate-500"}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-slate-600">{explanation}</p>
      <p className="mt-2 text-xs text-slate-500">This score is a completeness indicator, not legal readiness.</p>
    </section>
  );
}

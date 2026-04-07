"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";
import type { VisaPlanResult } from "@/src/lib/visa-plan/types";
import type { VisaApplicationPlanAnswers } from "@/src/lib/visa-plan/types";
import type { PlanTask } from "@/src/lib/visa-plan/types";

const STORAGE_KEY = "expatlife-visa-plan-completed";

type Props = {
  result: VisaPlanResult;
  answers: VisaApplicationPlanAnswers;
  onStartOver: () => void;
};

const BASE = "/netherlands";

function loadCompletedFromStorage(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    // ignore
  }
  return {};
}

function saveCompletedToStorage(completed: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  } catch {
    // ignore
  }
}

export function VisaApplicationPlanResults({ result, answers, onStartOver }: Props) {
  const [completed, setCompleted] = useState<Record<string, boolean>>(loadCompletedFromStorage);

  useEffect(() => {
    saveCompletedToStorage(completed);
  }, [completed]);

  const toggleTask = useCallback((taskId: string) => {
    setCompleted((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  }, []);

  const hasDoNow = result.priorityTasksNow.length > 0;
  const hasNext = result.nextTasks.length > 0;
  const hasLater = result.laterTasks.length > 0;

  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const handleDownloadPdf = useCallback(async () => {
    setIsDownloadingPdf(true);
    try {
      const res = await fetch("/api/visa-plan-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          result: {
            personalizedSummary: result.personalizedSummary,
            priorityTasksNow: result.priorityTasksNow,
            nextTasks: result.nextTasks,
            laterTasks: result.laterTasks,
            costMilestones: result.costMilestones,
            riskFlags: result.riskFlags,
          },
          completedTaskIds: completed,
          answers: {
            primaryRoute: answers.primaryRoute,
            countryCode: answers.countryCode,
          },
        }),
      });
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "netherlands-visa-application-plan.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // silent
    } finally {
      setIsDownloadingPdf(false);
    }
  }, [result, completed, answers]);

  return (
    <div id="visa-plan-results" className="scroll-mt-24 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">Your personalized visa application plan</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            onClick={handleDownloadPdf}
            disabled={isDownloadingPdf}
          >
            {isDownloadingPdf ? "Generating…" : "Download list (PDF)"}
          </Button>
          <Button variant="secondary" onClick={onStartOver}>
            Start over
          </Button>
        </div>
      </div>

      {/* Personalized summary */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-brand-50/30 p-5 shadow-sm md:p-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-full bg-brand-500/80" aria-hidden />
        <div className="pl-4">
          <h3 className="text-base font-semibold text-slate-900">Summary</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {result.personalizedSummary.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/70" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Readiness</span>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                result.readinessLevel === "high" && "bg-emerald-100 text-emerald-800",
                result.readinessLevel === "medium" && "bg-amber-100 text-amber-800",
                result.readinessLevel === "low" && "bg-slate-200 text-slate-700"
              )}
            >
              {result.readinessLevel}
            </span>
            <span className="text-slate-300" aria-hidden>·</span>
            <span className="text-xs font-medium text-slate-500">Urgency</span>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                result.urgencyLevel === "high" && "bg-rose-100 text-rose-800",
                result.urgencyLevel === "medium" && "bg-sky-100 text-sky-800",
                result.urgencyLevel === "low" && "bg-slate-100 text-slate-600"
              )}
            >
              {result.urgencyLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Timeline / roadmap */}
      <Section compact title="Your personalized visa application timeline" contained={true}>
        <div className="space-y-6">
          {hasDoNow && (
            <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-50/50 p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-800">Do now</h4>
              <ul className="mt-2 space-y-2">
                {result.priorityTasksNow.map((t) => (
                  <TaskItem
                    key={t.id}
                    task={t}
                    completed={Boolean(completed[t.id])}
                    onToggle={() => toggleTask(t.id)}
                  />
                ))}
              </ul>
            </div>
          )}
          {hasNext && (
            <div className="rounded-xl border-l-4 border-l-brand-500 bg-brand-50/40 p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-800">Next</h4>
              <ul className="mt-2 space-y-2">
                {result.nextTasks.map((t) => (
                  <TaskItem
                    key={t.id}
                    task={t}
                    completed={Boolean(completed[t.id])}
                    onToggle={() => toggleTask(t.id)}
                  />
                ))}
              </ul>
            </div>
          )}
          {hasLater && (
            <div className="rounded-xl border-l-4 border-l-slate-400 bg-slate-50/60 p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Later</h4>
              <ul className="mt-2 space-y-2">
                {result.laterTasks.map((t) => (
                  <TaskItem
                    key={t.id}
                    task={t}
                    completed={Boolean(completed[t.id])}
                    onToggle={() => toggleTask(t.id)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Cost and document milestones */}
      <Section compact title="Cost and document milestones" contained={true}>
        <p className="mb-5 text-sm text-slate-600">
          These are planning checkpoints, not exact quotes. Confirm amounts and timing with IND or your sponsor.
        </p>
        <div className="space-y-3">
          {result.costMilestones.map((m) => (
            <div
              key={m.id}
              className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/50 p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-full bg-brand-500/70 group-hover:bg-brand-500" aria-hidden />
              <div className="pl-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="font-semibold text-slate-900">{m.label}</span>
                  {m.when && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      {m.when}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={`${BASE}/moving/tools/relocation-cost-estimator/`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-brand-200 bg-gradient-to-r from-brand-50 to-sky-50/80 px-5 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition hover:border-brand-300 hover:from-brand-100 hover:to-sky-100/80 hover:shadow-md"
        >
          Estimate your full relocation cost
          <span className="text-brand-600" aria-hidden>→</span>
        </Link>
      </Section>

      {/* Risk flags */}
      {result.riskFlags.length > 0 && (
        <Section compact title="Potential bottlenecks in your plan" contained={true}>
          <div className="space-y-3">
            {result.riskFlags.map((f) => (
              <InfoBox key={f.id} title={f.label} variant="warn" className="shadow-sm">
                {f.description}
              </InfoBox>
            ))}
          </div>
        </Section>
      )}

      {/* Next best actions */}
      <Section compact title="Your next best actions" contained={true}>
        <div className="flex flex-wrap gap-3">
          {result.nextBestActions.map((a) => (
            <Link
              key={a.label}
              href={a.href ?? "#"}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-brand-600/30 bg-brand-50 px-4 text-sm font-medium text-brand-800 hover:bg-brand-100"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Recommended guides */}
      <Section compact title="Recommended guides" contained={true}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {result.recommendedGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-300 hover:bg-brand-50/30"
            >
              <span className="font-medium text-slate-900">{g.label}</span>
              <span className="mt-1 block text-xs text-brand-600">Read guide →</span>
            </Link>
          ))}
        </div>
      </Section>

    </div>
  );
}

function TaskItem({
  task,
  completed,
  onToggle,
}: {
  task: PlanTask;
  completed: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={cn(
        "flex gap-3 rounded-lg border border-slate-100 bg-white/80 p-3 transition",
        completed && "border-slate-200 bg-slate-50/60"
      )}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-slate-300 text-brand-600 focus:ring-2 focus:ring-brand-500 focus:ring-offset-1"
        aria-label={completed ? "Mark as not completed" : "Mark as completed"}
      />
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "font-medium text-slate-900",
            completed && "line-through text-slate-500"
          )}
        >
          {task.title}
        </span>
        {task.explanation && (
          <p className={cn("mt-1 text-sm text-slate-600", completed && "text-slate-500")}>
            {task.explanation}
          </p>
        )}
        {task.whyItMatters && (
          <p className="mt-0.5 text-xs text-slate-500">Why: {task.whyItMatters}</p>
        )}
        {task.relatedGuideHref && (
          <Link
            href={task.relatedGuideHref}
            className="mt-2 inline-block text-xs font-medium text-brand-600 hover:underline"
          >
            View guide →
          </Link>
        )}
      </div>
    </li>
  );
}

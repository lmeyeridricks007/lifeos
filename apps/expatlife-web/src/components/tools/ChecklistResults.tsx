"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  Flag,
  Landmark,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { ChecklistTaskGroup } from "@/src/lib/tools/movingChecklistTypes";

const PHASE_STYLES: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>;
    accent: string;
    chip: string;
    iconWrap: string;
  }
> = {
  beforeMove: {
    icon: CalendarClock,
    accent: "from-sky-500 to-blue-500",
    chip: "bg-sky-50 text-sky-700 ring-sky-100",
    iconWrap: "bg-sky-50 text-sky-700",
  },
  afterArrival: {
    icon: Landmark,
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    iconWrap: "bg-emerald-50 text-emerald-700",
  },
  first90Days: {
    icon: Clock3,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    iconWrap: "bg-violet-50 text-violet-700",
  },
};

export type ChecklistResultsProps = {
  title?: string;
  summary: string;
  groups: ChecklistTaskGroup[];
  className?: string;
};

export function ChecklistResults({
  title = "Your personalized moving checklist",
  summary,
  groups,
  className,
}: ChecklistResultsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <p className="text-sm text-slate-700">{summary}</p>
        </div>
      </div>

      <div className="space-y-5">
        {groups.map((group) => (
          <div
            key={group.phase}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
          >
            <div
              className={cn(
                "absolute left-0 top-0 h-1 w-full bg-gradient-to-r",
                PHASE_STYLES[group.phase]?.accent ?? "from-brand-500 to-cyan-500"
              )}
              aria-hidden
            />
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-lg",
                    PHASE_STYLES[group.phase]?.iconWrap ?? "bg-brand-50 text-brand-700"
                  )}
                >
                  {(() => {
                    const PhaseIcon = PHASE_STYLES[group.phase]?.icon ?? Flag;
                    return <PhaseIcon className="h-4 w-4" />;
                  })()}
                </span>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">{group.phaseLabel}</h3>
              </div>
              <span
                className={cn(
                  "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                  PHASE_STYLES[group.phase]?.chip ?? "bg-brand-50 text-brand-700 ring-brand-100"
                )}
              >
                {group.tasks.length} tasks
              </span>
            </div>
            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className={cn(
                  "h-full rounded-full",
                  group.phase === "beforeMove"
                    ? "bg-sky-500"
                    : group.phase === "afterArrival"
                      ? "bg-emerald-500"
                      : "bg-violet-500"
                )}
                style={{ width: `${Math.min(100, group.tasks.length * 12.5)}%` }}
              />
            </div>
            <ul className="space-y-2.5">
              {group.tasks.map((task) => (
                <li
                  key={task.id}
                  className={cn(
                    "rounded-xl border border-slate-200 bg-slate-50/70 p-3.5",
                    task.highPriority && "border-brand-200 bg-brand-50/40"
                  )}
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-slate-900">{task.label}</span>
                        {task.highPriority ? (
                          <span className="inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                            High priority
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-sm text-slate-600">{task.description}</p>
                    {task.relatedGuideHref ? (
                      <Link
                        href={task.relatedGuideHref}
                        className="mt-1 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                      >
                        Read more →
                      </Link>
                    ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

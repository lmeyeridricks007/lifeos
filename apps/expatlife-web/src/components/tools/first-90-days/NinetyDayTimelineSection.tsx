"use client";

import { useState } from "react";
import { CalendarRange } from "lucide-react";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import type { NinetyDayTask } from "@/src/lib/tools/first-90-days/types";
import type { TaskContactRef } from "@/src/lib/tools/first-90-days/types";
import type { NinetyDayPhase } from "@/src/lib/tools/first-90-days/types";
import { PHASE_LABELS } from "@/src/lib/tools/first-90-days";
import { NinetyDayTaskCard } from "./NinetyDayTaskCard";

export type NinetyDayTimelineSectionProps = {
  phase: NinetyDayPhase;
  tasks: NinetyDayTask[];
  taskContacts: Record<string, TaskContactRef> | null;
  originCountry?: string;
  completedIds: Set<string>;
  onToggleComplete: (taskId: string) => void;
  onlyOneExpandedPerSection?: boolean;
  affiliateItems?: Array<{ provider: AffiliateProvider; reason: string }>;
};

export function NinetyDayTimelineSection({
  phase,
  tasks,
  taskContacts,
  originCountry,
  completedIds,
  onToggleComplete,
  onlyOneExpandedPerSection = true,
  affiliateItems = [],
}: NinetyDayTimelineSectionProps) {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const label = PHASE_LABELS[phase];

  if (!tasks.length) return null;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-500 to-cyan-500" />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <CalendarRange className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-semibold text-slate-900">{label}</h3>
        </div>
        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
          {tasks.length} tasks
        </span>
      </div>
      <ul className="space-y-3 border-l-2 border-slate-200 pl-4">
        {tasks.map((task) => (
          <li key={task.id} className="relative">
            <span className="absolute -left-[1.34rem] top-4 h-2.5 w-2.5 rounded-full bg-brand-500" />
            <NinetyDayTaskCard
              task={task}
              taskContacts={taskContacts}
              originCountry={originCountry}
              completed={completedIds.has(task.id)}
              onToggleComplete={onToggleComplete}
              onlyOneExpanded={onlyOneExpandedPerSection}
              expandedTaskId={expandedTaskId}
              onExpand={setExpandedTaskId}
              affiliateItems={affiliateItems}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

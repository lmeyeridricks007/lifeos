"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from "lucide-react";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import type { NinetyDayTask } from "@/src/lib/tools/first-90-days/types";
import type { TaskContactRef } from "@/src/lib/tools/first-90-days/types";
import { NinetyDayTaskDetails } from "./NinetyDayTaskDetails";
import { NinetyDayTaskDependencyPill } from "./NinetyDayTaskDependencyPill";

export type NinetyDayTaskCardProps = {
  task: NinetyDayTask;
  taskContacts: Record<string, TaskContactRef> | null;
  originCountry?: string;
  completed: boolean;
  onToggleComplete: (taskId: string) => void;
  onlyOneExpanded?: boolean;
  expandedTaskId: string | null;
  onExpand: (taskId: string | null) => void;
  /** Affiliate providers for "Additional help" when task has matching affiliateCategories */
  affiliateItems?: Array<{ provider: AffiliateProvider; reason: string }>;
};

export function NinetyDayTaskCard({
  task,
  taskContacts,
  originCountry,
  completed,
  onToggleComplete,
  onlyOneExpanded,
  expandedTaskId,
  onExpand,
  affiliateItems = [],
}: NinetyDayTaskCardProps) {
  const [localOpen, setLocalOpen] = useState(false);
  const isExpanded =
    onlyOneExpanded ? expandedTaskId === task.id : localOpen;

  const toggleExpand = () => {
    if (onlyOneExpanded) {
      onExpand(isExpanded ? null : task.id);
    } else {
      setLocalOpen(!localOpen);
    }
  };

  const countryNote = originCountry && task.countryNotes?.[originCountry]
    ? task.countryNotes[originCountry]
    : undefined;

  return (
    <li className="relative rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
      <div className="flex items-start gap-2">
        <button
          type="button"
          onClick={() => onToggleComplete(task.id)}
          className="mt-0.5 shrink-0 rounded p-0.5 text-slate-400 hover:text-brand-600"
          aria-label={completed ? "Mark incomplete" : "Mark complete"}
        >
          {completed ? (
            <CheckCircle2 className="h-5 w-5 text-brand-600" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className={`font-medium text-slate-900 ${completed ? "line-through opacity-70" : ""}`}>
            {task.title}
          </p>
          <p className="mt-0.5 text-sm text-slate-600">{task.shortDescription}</p>
          {task.dependencies?.length > 0 && (
            <NinetyDayTaskDependencyPill
              dependencyIds={task.dependencies}
              className="mt-2"
            />
          )}
          <button
            type="button"
            onClick={toggleExpand}
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            {isExpanded ? (
              <>
                Hide details <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
          {isExpanded && (
            <NinetyDayTaskDetails
              task={task}
              taskContacts={taskContacts}
              countryNote={countryNote}
              affiliateItems={affiliateItems}
            />
          )}
        </div>
      </div>
    </li>
  );
}

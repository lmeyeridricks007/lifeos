"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MovingChecklistTaskResolved } from "@/src/lib/tools/moving-checklist/types";
import { MovingChecklistTaskDetails } from "./MovingChecklistTaskDetails";

export type MovingChecklistTaskCardProps = {
  task: MovingChecklistTaskResolved;
  defaultExpandAll?: boolean;
};

export function MovingChecklistTaskCard({ task, defaultExpandAll = false }: MovingChecklistTaskCardProps) {
  const [expanded, setExpanded] = useState(defaultExpandAll);

  return (
    <li
      className={cn(
        "rounded-xl border border-slate-200 bg-slate-50/70 p-3.5",
        task.priority === "high" && "border-brand-200 bg-brand-50/40"
      )}
    >
      <div className="flex items-start gap-2">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-900">{task.title}</span>
            {task.priority === "high" ? (
              <span className="inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                High priority
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 text-sm text-slate-600">{task.shortDescription}</p>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            {expanded ? (
              <>
                Hide details <ChevronUp className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="h-3.5 w-3.5" />
              </>
            )}
          </button>
          {expanded ? <MovingChecklistTaskDetails task={task} /> : null}
        </div>
      </div>
    </li>
  );
}

"use client";

import Link from "next/link";
import {
  Lightbulb,
  ListTodo,
  CalendarClock,
  ListOrdered,
  GitBranch,
  Globe,
  BookOpen,
} from "lucide-react";
import type { MovingChecklistTaskResolved } from "@/src/lib/tools/moving-checklist/types";
import { TaskDetailSection } from "@/src/components/tools/shared/TaskDetailSection";

export type MovingChecklistTaskDetailsProps = {
  task: MovingChecklistTaskResolved;
  defaultOpen?: boolean;
};

export function MovingChecklistTaskDetails({ task, defaultOpen = false }: MovingChecklistTaskDetailsProps) {
  return (
    <div className="mt-3 space-y-3 border-t border-slate-200 pt-3 text-sm">
      <TaskDetailSection icon={Lightbulb} title="Why this matters">
        <p>{task.whyItMatters}</p>
      </TaskDetailSection>
      {task.whatThisInvolves?.length > 0 ? (
        <TaskDetailSection icon={ListTodo} title="What this involves" variant="sky">
          <ul className="list-inside list-disc space-y-0.5">
            {task.whatThisInvolves.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </TaskDetailSection>
      ) : null}
      <TaskDetailSection icon={CalendarClock} title="When to do it">
        <p>{task.whenToDoIt}</p>
      </TaskDetailSection>
      {task.typicalSteps?.length ? (
        <TaskDetailSection icon={ListOrdered} title="Typical steps" variant="sky">
          <ol className="list-inside list-decimal space-y-0.5">
            {task.typicalSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </TaskDetailSection>
      ) : null}
      {task.dependencies?.length > 0 ? (
        <TaskDetailSection icon={GitBranch} title="Depends on">
          <p>{task.dependencies.join(", ")}</p>
        </TaskDetailSection>
      ) : null}
      {task.countryNote ? (
        <TaskDetailSection icon={Globe} title="Country-specific note" variant="amber">
          <p className="text-amber-800">{task.countryNote}</p>
        </TaskDetailSection>
      ) : null}
      {task.relatedGuides?.length > 0 ? (
        <TaskDetailSection icon={BookOpen} title="Related guides">
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {task.relatedGuides.map((href) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-brand-600 hover:text-brand-700 hover:underline"
                >
                  {href.replace(/^\/netherlands\//, "").replace(/\/$/, "").replace(/-/g, " ")} →
                </Link>
              </li>
            ))}
          </ul>
        </TaskDetailSection>
      ) : null}
    </div>
  );
}

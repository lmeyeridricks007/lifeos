"use client";

import {
  CalendarClock,
  Landmark,
  MapPin,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { MovingChecklistTaskGroup } from "@/src/lib/tools/moving-checklist/types";
import { MovingChecklistTaskCard } from "./MovingChecklistTaskCard";

const PHASE_STYLES: Record<
  string,
  { icon: LucideIcon; accent: string; chip: string; iconWrap: string }
> = {
  preparation: {
    icon: CalendarClock,
    accent: "from-sky-500 to-blue-500",
    chip: "bg-sky-50 text-sky-700 ring-sky-100",
    iconWrap: "bg-sky-50 text-sky-700",
  },
  finalPreparation: {
    icon: CalendarClock,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    iconWrap: "bg-violet-50 text-violet-700",
  },
  travelRelocation: {
    icon: Plane,
    accent: "from-amber-500 to-orange-500",
    chip: "bg-amber-50 text-amber-700 ring-amber-100",
    iconWrap: "bg-amber-50 text-amber-700",
  },
  arrivalEssentials: {
    icon: Landmark,
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    iconWrap: "bg-emerald-50 text-emerald-700",
  },
};

export type MovingChecklistPhaseSectionProps = {
  group: MovingChecklistTaskGroup;
  defaultExpandAll?: boolean;
  className?: string;
};

export function MovingChecklistPhaseSection({
  group,
  defaultExpandAll = false,
  className,
}: MovingChecklistPhaseSectionProps) {
  const style = PHASE_STYLES[group.phase] ?? PHASE_STYLES.preparation;
  const Icon = style.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5",
        className
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-full bg-gradient-to-r",
          style.accent
        )}
        aria-hidden
      />
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-lg",
              style.iconWrap
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              {group.phaseLabel}
            </h3>
            {group.phaseGoal ? (
              <p className="mt-0.5 text-sm text-slate-600">{group.phaseGoal}</p>
            ) : null}
          </div>
        </div>
        <span
          className={cn(
            "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1",
            style.chip
          )}
        >
          {group.tasks.length} task{group.tasks.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={cn(
            "h-full rounded-full",
            group.phase === "preparation" && "bg-sky-500",
            group.phase === "finalPreparation" && "bg-violet-500",
            group.phase === "travelRelocation" && "bg-amber-500",
            group.phase === "arrivalEssentials" && "bg-emerald-500"
          )}
          style={{ width: `${Math.min(100, group.tasks.length * 12.5)}%` }}
        />
      </div>
      <ul className="space-y-2.5">
        {group.tasks.map((task) => (
          <MovingChecklistTaskCard
            key={task.id}
            task={task}
            defaultExpandAll={defaultExpandAll}
          />
        ))}
      </ul>
    </div>
  );
}

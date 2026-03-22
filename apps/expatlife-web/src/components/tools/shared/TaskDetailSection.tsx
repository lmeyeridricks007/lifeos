import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TaskDetailSectionVariant = "default" | "sky" | "amber";

const WRAPPER_STYLES: Record<TaskDetailSectionVariant, string> = {
  default: "rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 md:p-4",
  sky: "rounded-xl border border-sky-100 bg-sky-50/60 p-3.5 md:p-4",
  amber: "rounded-xl border border-amber-200/80 bg-amber-50/90 p-3.5 md:p-4",
};

const ICON_STYLES: Record<TaskDetailSectionVariant, string> = {
  default: "bg-slate-100 text-slate-600",
  sky: "bg-sky-100 text-sky-600",
  amber: "bg-amber-100 text-amber-700",
};

export type TaskDetailSectionProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: TaskDetailSectionVariant;
};

/**
 * Reusable block for task detail sections (Why this matters, What this involves, etc.).
 * Gives each section an icon, tinted background, and consistent spacing across tools.
 */
export function TaskDetailSection({
  icon: Icon,
  title,
  children,
  variant = "default",
}: TaskDetailSectionProps) {
  const wrapperClass = WRAPPER_STYLES[variant];
  const iconWrapClass = ICON_STYLES[variant];

  return (
    <div className={wrapperClass}>
      <div className="flex items-center gap-2.5">
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconWrapClass}`}
          aria-hidden
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="font-semibold text-slate-800">{title}</span>
      </div>
      <div className="mt-2.5 text-sm text-slate-600 [&_ul]:space-y-1 [&_ol]:space-y-1">
        {children}
      </div>
    </div>
  );
}

"use client";

export type NinetyDayProgressBarProps = {
  completed: number;
  total: number;
  className?: string;
};

export function NinetyDayProgressBar({
  completed,
  total,
  className = "",
}: NinetyDayProgressBarProps) {
  if (total <= 0) return null;
  const pct = Math.min(100, Math.round((completed / total) * 100));
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-slate-700">
          {completed} of {total} tasks completed
        </span>
        <span className="text-slate-500">{pct}%</span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-brand-600 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

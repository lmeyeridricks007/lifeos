"use client";

import { cn } from "@/lib/cn";

export type ChecklistStatus = "ready" | "missing" | "not_applicable";

export function DocumentStatusToggle({
  value,
  onChange,
}: {
  value: ChecklistStatus;
  onChange: (value: ChecklistStatus) => void;
}) {
  const options: Array<{ value: ChecklistStatus; label: string }> = [
    { value: "ready", label: "Ready" },
    { value: "missing", label: "Missing" },
    { value: "not_applicable", label: "Not applicable" },
  ];

  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-medium transition",
            value === option.value
              ? "bg-brand-600 text-white"
              : "text-slate-600 hover:bg-slate-100"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Option = { value: string; label: string };

type SegmentedControlProps = {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export function SegmentedControl({ name, options, value, onChange, className, ...props }: SegmentedControlProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label={name}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition",
            value === opt.value
              ? "border-brand-600 bg-brand-50 text-brand-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          )}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
            {...props}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

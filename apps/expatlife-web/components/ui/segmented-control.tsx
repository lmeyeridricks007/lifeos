"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { transitionInteractive } from "@/lib/ui/interaction";

type Option = { value: string; label: string };

type SegmentedControlProps = {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  /** ExpatCopilot Move / NL tools: copilot pill styling. */
  pillTone?: "default" | "copilot";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export function SegmentedControl({
  name,
  options,
  value,
  onChange,
  className,
  pillTone = "default",
  ...props
}: SegmentedControlProps) {
  const selectedClass =
    pillTone === "copilot"
      ? "border-copilot-primary/40 bg-copilot-bg-soft text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/[0.08]"
      : "border-brand bg-brand-muted text-brand-strong shadow-card";
  const idleClass =
    pillTone === "copilot"
      ? "border-copilot-primary/15 bg-copilot-surface text-copilot-text-secondary hover:border-copilot-primary/30 hover:bg-copilot-bg-soft/80"
      : "border-border bg-surface-raised text-foreground-muted hover:border-border-strong hover:bg-surface-muted";
  const focusRing =
    pillTone === "copilot"
      ? "has-[:focus-visible]:ring-copilot-primary/35 has-[:focus-visible]:ring-offset-copilot-surface"
      : "has-[:focus-visible]:ring-ring/30 has-[:focus-visible]:ring-offset-canvas";

  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label={name}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            transitionInteractive,
            "cursor-pointer rounded-full border px-3 py-2 text-sm font-medium ease-out has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2 active:brightness-[0.98] motion-reduce:active:brightness-100 sm:px-4",
            focusRing,
            value === opt.value ? selectedClass : idleClass
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

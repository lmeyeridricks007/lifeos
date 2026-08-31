"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const DEFAULT_MESSAGE = "Building your plan...";

type ToolResultsLoadingProps = {
  /** Preferred copy prop used by newer tools. */
  label?: string;
  /** Legacy alias — same as `label`. */
  message?: string;
  /** Optional determinate progress (0–100). When omitted, only the spinner shows. */
  progressPct?: number;
  /** Match Moving NL / ExpatCopilot tool surfaces (borders, copilot palette). */
  variant?: "default" | "copilot";
};

export function ToolResultsLoading({
  label,
  message,
  progressPct,
  variant = "default",
}: ToolResultsLoadingProps) {
  const copy = label ?? message ?? DEFAULT_MESSAGE;
  const copilot = variant === "copilot";
  const showBar = typeof progressPct === "number" && Number.isFinite(progressPct);
  const pct = showBar ? Math.max(0, Math.min(100, Math.round(progressPct))) : 0;

  return (
    <div
      className={cn(
        "mt-10 flex flex-col items-center justify-center rounded-2xl py-16 px-6 shadow-expatos-sm ring-1",
        copilot
          ? "border border-copilot-primary/12 bg-copilot-bg-soft/90 ring-copilot-primary/[0.06]"
          : "border border-slate-200 bg-slate-50/80 ring-transparent"
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={copy}
    >
      <Loader2
        className={cn("h-10 w-10 animate-spin", copilot ? "text-copilot-primary" : "text-brand-600")}
        aria-hidden
      />
      <p className={cn("mt-4 text-sm font-medium", copilot ? "text-copilot-text-secondary" : "text-slate-600")}>
        {copy}
      </p>
      {showBar ? (
        <div
          className={cn(
            "mt-5 h-1.5 w-full max-w-xs overflow-hidden rounded-full",
            copilot ? "bg-copilot-primary/15" : "bg-slate-200"
          )}
          aria-hidden
        >
          <div
            className={cn("h-full rounded-full transition-[width] duration-300", copilot ? "bg-copilot-primary" : "bg-brand-600")}
            style={{ width: `${pct}%` }}
          />
        </div>
      ) : null}
    </div>
  );
}

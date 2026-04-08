"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const DEFAULT_MESSAGE = "Building your plan...";

type ToolResultsLoadingProps = {
  message?: string;
  /** Match Moving NL / ExpatCopilot tool surfaces (borders, copilot palette). */
  variant?: "default" | "copilot";
};

export function ToolResultsLoading({ message = DEFAULT_MESSAGE, variant = "default" }: ToolResultsLoadingProps) {
  const copilot = variant === "copilot";
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
      aria-label={message}
    >
      <Loader2
        className={cn("h-10 w-10 animate-spin", copilot ? "text-copilot-primary" : "text-brand-600")}
        aria-hidden
      />
      <p className={cn("mt-4 text-sm font-medium", copilot ? "text-copilot-text-secondary" : "text-slate-600")}>
        {message}
      </p>
    </div>
  );
}

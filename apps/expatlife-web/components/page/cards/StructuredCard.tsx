import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type StructuredCardProps = {
  /** Stage / week label */
  label: string;
  children: ReactNode;
  /** `onDark` = nested card inside signature dark band */
  tone?: "light" | "onDark";
  className?: string;
};

/**
 * Process / week / stage tile with clear hierarchy and list-friendly body.
 */
export function StructuredCard({ label, children, tone = "light", className }: StructuredCardProps) {
  const onDark = tone === "onDark";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5 shadow-lg sm:p-6",
        onDark
          ? "border-white/10 bg-white/[0.08] ring-1 ring-copilot-accent/20"
          : "border-copilot-primary/[0.08] bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.06]"
      )}
    >
      {!onDark ? (
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-copilot-primary via-blue-500 to-copilot-accent"
          aria-hidden
        />
      ) : (
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-copilot-primary via-copilot-accent to-sky-300" aria-hidden />
      )}
      <h3
        className={cn(
          "text-base font-bold tracking-tight",
          onDark ? "text-white" : "text-copilot-text-primary"
        )}
      >
        {label}
      </h3>
      <div className={cn("mt-3", onDark ? "text-slate-200" : "text-copilot-text-secondary")}>{children}</div>
    </div>
  );
}

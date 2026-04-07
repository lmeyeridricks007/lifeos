"use client";

import { useId } from "react";
import { CircleHelp } from "lucide-react";
import { cn } from "@/lib/cn";

type HelpTooltipProps = {
  /** Concise label for the icon button (e.g. field name). */
  label: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Keyboard-focusable help: hover or focus shows the panel (no external tooltip lib).
 */
export function HelpTooltip({ label, children, className }: HelpTooltipProps) {
  const id = useId();
  return (
    <span className={cn("group relative inline-flex align-middle", className)}>
      <button
        type="button"
        className="ml-1 inline-flex rounded-full p-0.5 text-copilot-text-secondary outline-none ring-copilot-primary/30 hover:text-copilot-primary focus-visible:ring-2"
        aria-describedby={id}
        aria-label={`Help: ${label}`}
      >
        <CircleHelp className="h-4 w-4 shrink-0" aria-hidden />
      </button>
      <span
        id={id}
        role="tooltip"
        className={cn(
          "invisible absolute bottom-full left-1/2 z-20 mb-2 w-[min(100vw-2rem,18rem)] -translate-x-1/2 rounded-xl border border-copilot-primary/15 bg-white px-3 py-2 text-xs leading-snug text-copilot-text-primary shadow-expatos-md opacity-0 ring-1 ring-copilot-primary/[0.08] transition-opacity duration-150",
          "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        )}
      >
        {children}
      </span>
    </span>
  );
}

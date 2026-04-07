"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { transitionColors } from "@/lib/ui/interaction";

type CollapsiblePanelProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  /** Optional class for the title/trigger (e.g. "text-xl font-semibold" for prominent section headings) */
  titleClassName?: string;
  /** Optional class for the trigger button (e.g. hover background to show it's clickable) */
  triggerClassName?: string;
};

export function CollapsiblePanel({
  title,
  defaultOpen = false,
  children,
  className,
  titleClassName,
  triggerClassName,
}: CollapsiblePanelProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cn("rounded-card border border-border bg-surface-muted/80 shadow-none", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="collapsible-content"
        className={cn(
          transitionColors,
          "flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-foreground ease-out hover:bg-surface-muted active:bg-surface-muted/80 motion-reduce:active:bg-transparent",
          titleClassName ?? "text-sm font-semibold",
          triggerClassName
        )}
      >
        {title}
        {open ? <ChevronDown className="h-4 w-4 shrink-0 text-foreground-faint" /> : <ChevronRight className="h-4 w-4 shrink-0 text-foreground-faint" />}
      </button>
      <div id="collapsible-content" hidden={!open} className="border-t border-border px-4 pb-4 pt-3">
        {children}
      </div>
    </div>
  );
}

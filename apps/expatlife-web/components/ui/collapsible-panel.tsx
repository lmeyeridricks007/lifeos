"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

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
    <div className={cn("rounded-xl border border-slate-200 bg-slate-50/50", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="collapsible-content"
        className={cn(
          "flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-slate-900 transition-colors",
          titleClassName ?? "text-sm font-semibold",
          triggerClassName
        )}
      >
        {title}
        {open ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
      </button>
      <div id="collapsible-content" hidden={!open} className="border-t border-slate-200 px-4 pb-4 pt-3">
        {children}
      </div>
    </div>
  );
}

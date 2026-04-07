"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transitionColors } from "@/lib/ui/interaction";

export type Tab = { key: string; label: string; content: ReactNode };

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
};

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.key ?? "");
  const current = tabs.find((t) => t.key === active) ?? tabs[0];
  if (!tabs.length) return null;
  return (
    <div className={cn("rounded-card border border-border bg-surface-raised shadow-card", className)}>
      <div
        className="flex overflow-x-auto border-b border-border [-ms-overflow-style:none] [scrollbar-width:thin] sm:overflow-visible [&::-webkit-scrollbar]:h-1.5"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isSelected = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(tab.key)}
              className={cn(
                transitionColors,
                "relative min-h-[44px] min-w-[44%] shrink-0 px-4 py-3 text-center text-sm font-medium ease-out focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:bg-surface-muted/50 motion-reduce:active:bg-transparent sm:min-w-0 sm:flex-1",
                isSelected
                  ? "border-b-2 border-brand bg-brand-muted/50 text-brand-strong"
                  : "border-b-2 border-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="p-4" role="tabpanel">
        {current?.content}
      </div>
    </div>
  );
}

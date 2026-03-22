"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

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
    <div className={cn("rounded-xl border border-slate-200 bg-white", className)}>
      <div className="flex border-b border-slate-200" role="tablist">
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
                "px-4 py-3 text-sm font-medium transition",
                isSelected
                  ? "border-b-2 border-brand-600 bg-brand-50 text-brand-800"
                  : "border-b-2 border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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

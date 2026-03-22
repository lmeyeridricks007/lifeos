"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type TabItem = { label: string; href: string };
export type Tab = { key: string; label: string; items: TabItem[] };

const TAB_CONTENT_BG: Record<string, string> = {
  before: "rounded-xl border border-sky-200/80 bg-sky-50/60 p-4",
  after: "rounded-xl border border-teal-200/80 bg-teal-50/60 p-4",
  days90: "rounded-xl border border-amber-200/80 bg-amber-50/60 p-4",
};

export function PillarChecklistTabs({ tabs }: { tabs: Tab[] }) {
  const [activeKey, setActiveKey] = useState(tabs[0]?.key ?? "");
  const activeTab = tabs.find((t) => t.key === activeKey) ?? tabs[0];
  const contentBg = TAB_CONTENT_BG[activeKey] ?? "rounded-xl border border-slate-200 bg-slate-50/50 p-4";

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Checklist stages"
        className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50/50 p-1.5"
      >
        {tabs.map((tab) => {
          const isSelected = activeKey === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isSelected}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={cn(
                "rounded-lg px-4 py-2.5 text-sm font-medium transition",
                isSelected
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className={contentBg}>
        {activeTab && (
          <ul className="space-y-2">
            {activeTab.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium text-brand-700 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

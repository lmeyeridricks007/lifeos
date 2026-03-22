"use client";

import { CircleHelp } from "lucide-react";

export type UnknownsListProps = {
  title?: string;
  items: Array<{ id: string; label: string; whyItMatters: string }>;
};

export function UnknownsList({
  title = "Things you may still want to confirm",
  items,
}: UnknownsListProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rose-500 to-pink-500" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
          {items.length} open questions
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-rose-200 bg-rose-50/40 p-3.5">
            <div className="flex items-start gap-2">
              <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <div>
                <p className="font-medium text-slate-900">{item.label}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.whyItMatters}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

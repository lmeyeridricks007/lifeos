"use client";

import { CalendarClock } from "lucide-react";

export type AppointmentsListProps = {
  title: string;
  items: Array<{
    id: string;
    label: string;
    whyItMatters: string;
    note?: string;
  }>;
};

export function AppointmentsList({ title, items }: AppointmentsListProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
          {items.length} lead-time items
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-amber-200 bg-amber-50/40 p-3.5">
            <div className="flex items-start gap-2">
              <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <div>
                <p className="font-medium text-slate-900">{item.label}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.whyItMatters}</p>
                {item.note ? <p className="mt-1 text-xs text-slate-500">{item.note}</p> : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

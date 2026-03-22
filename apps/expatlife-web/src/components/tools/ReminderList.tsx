"use client";

import { Bell } from "lucide-react";

export type ReminderListProps = {
  title: string;
  items: Array<{ id: string; label: string }>;
};

export function ReminderList({ title, items }: ReminderListProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="inline-flex rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
          {items.length} reminders
        </span>
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-violet-200 bg-violet-50/40 p-3">
            <div className="flex items-start gap-2">
              <Bell className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <p className="text-sm text-slate-700">{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

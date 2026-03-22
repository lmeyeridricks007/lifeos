"use client";

import Link from "next/link";
import { CalendarRange, CheckCircle2 } from "lucide-react";

export type WeekBlockProps = {
  title: string;
  items: Array<{
    id: string;
    label: string;
    description: string;
    relatedGuideHref?: string;
  }>;
};

export function WeekBlock({ title, items }: WeekBlockProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-500 to-cyan-500" />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <CalendarRange className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
          {items.length} milestones
        </span>
      </div>

      <ul className="space-y-3 border-l-2 border-slate-200 pl-4">
        {items.map((item) => (
          <li key={item.id} className="relative rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
            <span className="absolute -left-[1.34rem] top-4 h-2.5 w-2.5 rounded-full bg-brand-500" />
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <div>
                <p className="font-medium text-slate-900">{item.label}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.description}</p>
                {item.relatedGuideHref ? (
                  <Link
                    href={item.relatedGuideHref}
                    className="mt-1 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    Read more →
                  </Link>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

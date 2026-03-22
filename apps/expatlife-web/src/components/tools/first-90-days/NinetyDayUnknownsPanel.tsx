"use client";

import Link from "next/link";
import { CircleHelp } from "lucide-react";
import type { NinetyDayUnknown } from "@/src/lib/tools/first-90-days/types";

export type NinetyDayUnknownsPanelProps = {
  unknowns: NinetyDayUnknown[];
  title?: string;
};

export function NinetyDayUnknownsPanel({
  unknowns,
  title = "Things to confirm",
}: NinetyDayUnknownsPanelProps) {
  if (!unknowns.length) return null;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rose-500 to-pink-500" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
          {unknowns.length} to confirm
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {unknowns.map((item) => (
          <li key={item.id} className="rounded-xl border border-rose-200 bg-rose-50/40 p-3.5">
            <div className="flex items-start gap-2">
              <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.whyItMatters}</p>
                {item.suggestedNextStep && (
                  <p className="mt-1.5 text-sm font-medium text-slate-700">
                    Suggested next step: {item.suggestedNextStep}
                  </p>
                )}
                {item.relatedGuide && (
                  <Link
                    href={item.relatedGuide}
                    className="mt-1 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    Related guide →
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

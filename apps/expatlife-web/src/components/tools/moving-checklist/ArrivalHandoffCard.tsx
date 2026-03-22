"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

const ARRIVAL_PLANNER_HREF = "/netherlands/moving/tools/arrival-planner/";
const FIRST_90_DAYS_HREF = "/netherlands/moving/tools/first-90-days/";

export function ArrivalHandoffCard() {
  return (
    <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-cyan-50 p-5 shadow-sm md:p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <CalendarClock className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Next tool: Plan your first days in the Netherlands
          </h3>
          <p className="mt-1 text-sm text-slate-700">
            Once you arrive, focus on address registration, BSN, bank setup, and health insurance timing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={ARRIVAL_PLANNER_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Open Arrival Planner
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={FIRST_90_DAYS_HREF}
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              Then: First 90 Days Planner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

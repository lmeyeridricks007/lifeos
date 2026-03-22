"use client";

import { Sparkles } from "lucide-react";
import { ResultsMilestoneGroup } from "./ResultsMilestoneGroup";
import { AppointmentsList } from "./AppointmentsList";
import { ReminderList } from "./ReminderList";

export type ArrivalPlannerResultsProps = {
  title?: string;
  summary: string;
  firstWeek: Array<{
    id: string;
    label: string;
    description: string;
    relatedGuideHref?: string | null;
  }>;
  firstMonth: Array<{
    id: string;
    label: string;
    description: string;
    relatedGuideHref?: string | null;
  }>;
  appointments: Array<{
    id: string;
    label: string;
    whyItMatters: string;
    note?: string;
  }>;
  reminders: Array<{ id: string; label: string }>;
};

export function ArrivalPlannerResults({
  title = "Your personalized arrival plan",
  summary,
  firstWeek,
  firstMonth,
  appointments,
  reminders,
}: ArrivalPlannerResultsProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <p className="text-sm text-slate-700">{summary}</p>
        </div>
      </section>

      <ResultsMilestoneGroup title="Your first week" items={firstWeek} />
      <ResultsMilestoneGroup title="Your first month" items={firstMonth} />
      <AppointmentsList title="Things that often need appointments or lead time" items={appointments} />
      <ReminderList title="Arrival reminders" items={reminders} />
    </div>
  );
}

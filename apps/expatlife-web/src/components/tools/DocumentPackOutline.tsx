"use client";

import type { ComponentType } from "react";
import { Briefcase, FileBadge, GraduationCap, Home, Luggage, Users } from "lucide-react";

const CATEGORY_STYLES: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>;
    accent: string;
    chip: string;
    bar: string;
  }
> = {
  identity: {
    icon: FileBadge,
    accent: "from-sky-500 to-cyan-500",
    chip: "bg-sky-50 text-sky-700 ring-sky-100",
    bar: "bg-sky-500",
  },
  employment: {
    icon: Briefcase,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    bar: "bg-violet-500",
  },
  housing: {
    icon: Home,
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    bar: "bg-emerald-500",
  },
  family: {
    icon: Users,
    accent: "from-rose-500 to-pink-500",
    chip: "bg-rose-50 text-rose-700 ring-rose-100",
    bar: "bg-rose-500",
  },
  education: {
    icon: GraduationCap,
    accent: "from-amber-500 to-orange-500",
    chip: "bg-amber-50 text-amber-700 ring-amber-100",
    bar: "bg-amber-500",
  },
  travel: {
    icon: Luggage,
    accent: "from-slate-500 to-slate-700",
    chip: "bg-slate-100 text-slate-700 ring-slate-200",
    bar: "bg-slate-600",
  },
};

export function DocumentPackOutline({
  groups,
}: {
  groups: Array<{ id: string; label: string; intro: string; count: number; readyCount: number; missingCount: number }>;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Document pack outline</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => {
          const style = CATEGORY_STYLES[group.id] ?? CATEGORY_STYLES.identity;
          const Icon = style.icon;
          const completion = group.count > 0 ? Math.round((group.readyCount / group.count) * 100) : 0;
          return (
          <a
            key={group.id}
            href={`#doc-category-${group.id}`}
            className="relative block overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${style.accent}`} />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-medium text-slate-900">{group.label}</p>
              </div>
              <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${style.chip}`}>
                {completion}% ready
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{group.intro}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${completion}%` }} />
            </div>
            <p className="mt-2 text-xs text-slate-500">{group.readyCount} ready / {group.missingCount} to review ({group.count} total)</p>
          </a>
          );
        })}
      </div>
    </section>
  );
}

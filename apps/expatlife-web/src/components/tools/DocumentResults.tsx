"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  FileBadge2,
  GraduationCap,
  Home,
  Plane,
  ShieldCheck,
  Baby,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { DocumentsByCategory } from "@/src/lib/tools/movingChecklistTypes";

const CATEGORY_LABELS: Record<string, string> = {
  identity: "Identity",
  employment: "Employment",
  housing: "Housing",
  household: "Household",
  children: "Children",
  education: "Education",
  travel: "Travel & logistics",
};

const CATEGORY_STYLES: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>;
    accent: string;
    chip: string;
    iconWrap: string;
  }
> = {
  identity: {
    icon: FileBadge2,
    accent: "from-sky-500 to-blue-500",
    chip: "bg-sky-50 text-sky-700 ring-sky-100",
    iconWrap: "bg-sky-50 text-sky-700",
  },
  employment: {
    icon: BriefcaseBusiness,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    iconWrap: "bg-violet-50 text-violet-700",
  },
  housing: {
    icon: Home,
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    iconWrap: "bg-emerald-50 text-emerald-700",
  },
  household: {
    icon: ShieldCheck,
    accent: "from-amber-500 to-orange-500",
    chip: "bg-amber-50 text-amber-700 ring-amber-100",
    iconWrap: "bg-amber-50 text-amber-700",
  },
  children: {
    icon: Baby,
    accent: "from-pink-500 to-rose-500",
    chip: "bg-pink-50 text-pink-700 ring-pink-100",
    iconWrap: "bg-pink-50 text-pink-700",
  },
  education: {
    icon: GraduationCap,
    accent: "from-cyan-500 to-sky-500",
    chip: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    iconWrap: "bg-cyan-50 text-cyan-700",
  },
  travel: {
    icon: Plane,
    accent: "from-blue-500 to-indigo-500",
    chip: "bg-blue-50 text-blue-700 ring-blue-100",
    iconWrap: "bg-blue-50 text-blue-700",
  },
};

export type DocumentResultsProps = {
  documentsByCategory: DocumentsByCategory;
  documentsGuideHref?: string;
  className?: string;
};

export function DocumentResults({
  documentsByCategory,
  documentsGuideHref = "/netherlands/documents-needed-to-move-netherlands/",
  className,
}: DocumentResultsProps) {
  const categories = Object.keys(documentsByCategory);
  if (categories.length === 0) return null;

  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">Documents to gather</h3>
          <p className="mt-1 text-sm text-slate-600">
            Keep these in one digital folder and one paper pack for appointments.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {categories.length} categories
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => {
          const items = documentsByCategory[cat];
          if (!items?.length) return null;
          const label = CATEGORY_LABELS[cat] ?? cat;
          const style = CATEGORY_STYLES[cat] ?? CATEGORY_STYLES.identity;
          const Icon = style.icon;
          return (
            <div key={cat} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div
                className={cn(
                  "absolute left-0 top-0 h-1 w-full bg-gradient-to-r",
                  style.accent
                )}
                aria-hidden
              />
              <div className="mb-3 flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-lg",
                      style.iconWrap
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-sm font-semibold text-slate-800">{label}</h4>
                </div>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                    style.chip
                  )}
                >
                  {items.length} item{items.length > 1 ? "s" : ""}
                </span>
              </div>
              <ul className="space-y-2">
                {items.map((doc) => (
                  <li key={doc.id} className="rounded-lg bg-slate-50/70 p-2.5 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="font-medium text-slate-800">{doc.label}</span>
                        {doc.whyItMatters ? (
                          <span className="mt-0.5 block text-xs text-slate-500">{doc.whyItMatters}</span>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <Link
        href={documentsGuideHref}
        className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
      >
        Open full documents guide →
      </Link>
    </div>
  );
}

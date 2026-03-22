import {
  Briefcase,
  Calendar,
  FileText,
  Home,
  HelpCircle,
  Lightbulb,
  Scale,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";

const POINT_ICONS: LucideIcon[] = [
  Briefcase,
  Calendar,
  FileText,
  Home,
  HelpCircle,
  Scale,
];

/** Icon style variants for list items (cycle for visual variety) */
const ICON_STYLES = [
  "bg-brand-50 text-brand-600 ring-brand-100",
  "bg-emerald-50 text-emerald-600 ring-emerald-100",
  "bg-slate-100 text-slate-600 ring-slate-200",
  "bg-amber-50 text-amber-600 ring-amber-100",
  "bg-sky-50 text-sky-600 ring-sky-100",
  "bg-violet-50 text-violet-600 ring-violet-100",
] as const;

export function DecisionSupportBlock({
  whenNotNeed,
}: {
  whenNotNeed: NonNullable<ServiceCategoryPageData["whenNotNeed"]>;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-500 to-brand-400" aria-hidden />
      <div className="px-5 pt-5 pb-5">
        {/* Intro with hint icon */}
        <div className="flex gap-3 border-b border-slate-100 pb-5">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 ring-1 ring-amber-100" aria-hidden>
            <Lightbulb className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            {whenNotNeed.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-sm text-slate-700 leading-relaxed ${i > 0 ? "mt-3" : ""}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        {/* List with icons and hover */}
        <ul className="mt-5 space-y-3" role="list">
          {whenNotNeed.points.map((point, i) => {
            const Icon = POINT_ICONS[i % POINT_ICONS.length];
            const style = ICON_STYLES[i % ICON_STYLES.length];
            return (
              <li
                key={i}
                className="flex gap-4 rounded-lg px-3 py-2 -mx-3 transition-colors hover:bg-slate-50/80"
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${style}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 pt-0.5 text-sm text-slate-700 leading-relaxed">
                  {point}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

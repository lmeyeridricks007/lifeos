import Link from "next/link";
import {
  ClipboardList,
  CheckCircle2,
  SlidersHorizontal,
  AlertTriangle,
  ArrowRight,
  User,
  Building2,
  GraduationCap,
  Briefcase,
  Plane,
  Scale,
} from "lucide-react";
import type { ScenarioCard } from "@/src/lib/service-category/types";

const ACCENTS = [
  { border: "border-l-brand-500", bg: "bg-brand-50/40", iconBg: "bg-brand-100", iconColor: "text-brand-600" },
  { border: "border-l-emerald-500", bg: "bg-emerald-50/40", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  { border: "border-l-amber-500", bg: "bg-amber-50/40", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { border: "border-l-violet-500", bg: "bg-violet-50/40", iconBg: "bg-violet-100", iconColor: "text-violet-600" },
] as const;

const SCENARIO_ICONS = [ClipboardList, User, Building2, GraduationCap, Briefcase, Scale] as const;

export function ScenarioCards({ scenarios }: { scenarios: ScenarioCard[] }) {
  return (
    <div className="space-y-5">
      {scenarios.map((s, index) => {
        const accent = ACCENTS[index % ACCENTS.length];
        const ScenarioIcon = SCENARIO_ICONS[index % SCENARIO_ICONS.length];
        return (
          <article
            key={s.id}
            className={`rounded-xl border border-slate-200 border-l-4 bg-white shadow-sm transition hover:shadow-md ${accent.border}`}
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ${accent.iconColor}`}
                  aria-hidden
                >
                  <ScenarioIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.summary}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className={`rounded-lg border border-slate-200/80 p-4 ${accent.bg}`}>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-wider">What to confirm</span>
                  </div>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
                    {s.whatToConfirm.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-lg border border-slate-200/80 p-4 ${accent.bg}`}>
                  <div className="flex items-center gap-2 text-slate-700">
                    <SlidersHorizontal className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-wider">What to compare</span>
                  </div>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
                    {s.whatToCompare.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {s.commonMistakes?.length ? (
                <div className="mt-4 flex gap-3 rounded-lg border border-amber-200/80 bg-amber-50/60 p-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-amber-900">Common mistakes</p>
                    <p className="mt-0.5 text-sm text-amber-800/90 leading-relaxed">
                      {s.commonMistakes.join("; ")}
                    </p>
                  </div>
                </div>
              ) : null}

              {s.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {s.links.map((link) =>
                    link.href.startsWith("http") ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-100 hover:border-slate-300"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

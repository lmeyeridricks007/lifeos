import Link from "next/link";
import { Plane, KeyRound, Home, Heart } from "lucide-react";
import type { RelocationStageBlock } from "@/src/lib/services-hub/types";
import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";

const STAGE_ICONS = [
  { icon: Plane, label: "Before you move", accent: "border-l-brand-500 bg-brand-50/30" },
  { icon: KeyRound, label: "First weeks", accent: "border-l-emerald-500 bg-emerald-50/30" },
  { icon: Home, label: "Settling in", accent: "border-l-amber-500 bg-amber-50/30" },
  { icon: Heart, label: "Long-term", accent: "border-l-rose-500 bg-rose-50/30" },
];

export function ServicesByRelocationStage({ stages }: { stages: RelocationStageBlock[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1">
      {stages.map((stage, index) => {
        const meta = STAGE_ICONS[index] ?? STAGE_ICONS[0];
        const Icon = meta.icon;
        return (
          <div
            key={stage.id}
            className={`relative rounded-xl border border-slate-200 border-l-4 ${meta.accent} p-5 shadow-sm transition hover:shadow-md`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-sm">
                <Icon className="h-5 w-5 text-slate-600" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    Stage {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{stage.title}</h3>
                </div>
                {stage.description ? (
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{stage.description}</p>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {filterLiveInternalLinks(stage.categoryHrefs ?? []).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

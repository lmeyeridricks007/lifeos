import type { ReactNode } from "react";
import Link from "next/link";
import type { CityComparisonRow } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Euro,
  Home,
  MapPin,
  Sparkles,
  TrainFront,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CARD_VISUAL = [
  {
    border: "border-l-teal-500",
    ribbon: "from-teal-500 via-emerald-500 to-teal-400",
    headerTint: "bg-gradient-to-r from-teal-50/90 via-white to-white",
  },
  {
    border: "border-l-sky-500",
    ribbon: "from-sky-500 via-blue-500 to-sky-400",
    headerTint: "bg-gradient-to-r from-sky-50/90 via-white to-white",
  },
  {
    border: "border-l-violet-500",
    ribbon: "from-violet-500 via-purple-500 to-violet-400",
    headerTint: "bg-gradient-to-r from-violet-50/90 via-white to-white",
  },
  {
    border: "border-l-amber-500",
    ribbon: "from-amber-500 via-orange-500 to-amber-400",
    headerTint: "bg-gradient-to-r from-amber-50/90 via-white to-white",
  },
  {
    border: "border-l-rose-500",
    ribbon: "from-rose-500 via-pink-500 to-rose-400",
    headerTint: "bg-gradient-to-r from-rose-50/90 via-white to-white",
  },
] as const;

function bandBadgeClass(text: string, kind: "cost" | "housing"): string {
  const t = text.toLowerCase();
  const veryHigh = t.includes("very high");
  const high = veryHigh || t.includes("high") || t.includes("expensive");
  const medium = t.includes("medium") || t.includes("mid");
  if (kind === "cost") {
    if (high) return "bg-rose-50 text-rose-900 ring-1 ring-rose-200/80";
    if (medium) return "bg-amber-50 text-amber-950 ring-1 ring-amber-200/80";
    return "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200/80";
  }
  if (veryHigh || (t.includes("high") && t.includes("pressure")) || t.includes("very high"))
    return "bg-rose-50 text-rose-900 ring-1 ring-rose-200/80";
  if (t.includes("high") || t.includes("competitive")) return "bg-amber-50 text-amber-950 ring-1 ring-amber-200/80";
  return "bg-slate-50 text-slate-800 ring-1 ring-slate-200/80";
}

function IconRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 text-slate-600 shadow-sm ring-1 ring-slate-200/80"
        aria-hidden
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</p>
        <div className="mt-1 text-sm leading-snug text-slate-800">{children}</div>
      </div>
    </div>
  );
}

export function CityComparisonTable({ rows }: { rows: CityComparisonRow[] }) {
  if (!rows?.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {rows.map((row, i) => {
        const vis = CARD_VISUAL[i % CARD_VISUAL.length];

        return (
          <article
            key={row.slug}
            className={cn(
              "flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-200/40",
              "border-l-[3px] transition-shadow hover:shadow-lg hover:shadow-slate-200/50",
              vis.border
            )}
          >
            <div className={cn("h-1 w-full bg-gradient-to-r", vis.ribbon)} aria-hidden />

            <div className={cn("flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4", vis.headerTint)}>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{row.name}</h3>
              {row.comingSoon ? (
                <span className="rounded-full bg-slate-200/90 px-3 py-1 text-xs font-semibold text-slate-600">
                  Soon
                </span>
              ) : (
                <Link
                  href={row.detailHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  City guide
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-5 px-5 py-5">
              <IconRow icon={Briefcase} label="Best for">
                {row.bestFor}
              </IconRow>
              <IconRow icon={Sparkles} label="Typical vibe">
                <span className="text-slate-700">{row.vibe}</span>
              </IconRow>

              <div className="grid grid-cols-2 gap-3">
                <IconRow icon={Euro} label="Cost">
                  <span
                    className={cn(
                      "inline-flex rounded-lg px-2.5 py-1 text-sm font-semibold",
                      bandBadgeClass(row.costBand, "cost")
                    )}
                  >
                    {row.costBand}
                  </span>
                </IconRow>
                <IconRow icon={Home} label="Housing pressure">
                  <span
                    className={cn(
                      "inline-flex rounded-lg px-2.5 py-1 text-sm font-semibold",
                      bandBadgeClass(row.housingPressure, "housing")
                    )}
                  >
                    {row.housingPressure}
                  </span>
                </IconRow>
              </div>

              <IconRow icon={TrainFront} label="Commute">
                <span className="text-slate-700">{row.commuteFit}</span>
              </IconRow>

              <IconRow icon={Building2} label="Main sectors">
                <div className="flex flex-wrap gap-1.5">
                  {row.sectors.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </IconRow>

              <IconRow icon={MapPin} label="Newcomer support">
                {row.newcomerSupportHref ? (
                  <a
                    href={row.newcomerSupportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800 hover:underline"
                  >
                    {row.newcomerSupportName}
                  </a>
                ) : (
                  <span className="text-slate-700">{row.newcomerSupportName}</span>
                )}
              </IconRow>
            </div>
          </article>
        );
      })}
    </div>
  );
}

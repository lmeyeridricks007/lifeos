import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { SecondaryCityCard } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

const cardAccents = [
  "border-l-amber-500 bg-gradient-to-br from-amber-50/50 to-white",
  "border-l-sky-500 bg-gradient-to-br from-sky-50/50 to-white",
  "border-l-emerald-500 bg-gradient-to-br from-emerald-50/50 to-white",
  "border-l-violet-500 bg-gradient-to-br from-violet-50/50 to-white",
  "border-l-rose-500 bg-gradient-to-br from-rose-50/50 to-white",
  "border-l-slate-400 bg-gradient-to-br from-slate-50 to-white",
] as const;

export function SecondaryCitiesSection({ cities }: { cities: SecondaryCityCard[] }) {
  if (!cities?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city, i) => (
        <article
          key={city.name}
          className={cn(
            "flex flex-col rounded-2xl border border-slate-200 overflow-hidden shadow-md shadow-slate-200/40",
            "border-l-4 transition-all",
            cardAccents[i % cardAccents.length],
            city.comingSoon ? "border-dashed border-slate-300 bg-slate-50/50" : "hover:shadow-md hover:border-slate-300"
          )}
        >
          <div className="flex flex-col flex-1 px-5 py-4">
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/5",
                  i % 6 === 0 && "bg-gradient-to-br from-amber-100 to-amber-50 text-amber-800",
                  i % 6 === 1 && "bg-gradient-to-br from-sky-100 to-sky-50 text-sky-800",
                  i % 6 === 2 && "bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-800",
                  i % 6 === 3 && "bg-gradient-to-br from-violet-100 to-violet-50 text-violet-800",
                  i % 6 === 4 && "bg-gradient-to-br from-rose-100 to-rose-50 text-rose-800",
                  i % 6 === 5 && "bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700"
                )}
              >
                <MapPin className="h-5 w-5" aria-hidden strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900">{city.name}</h3>
                {city.brief && (
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{city.brief}</p>
                )}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80">
              {city.comingSoon ? (
                <ComingSoonBadge label="Coming soon" />
              ) : city.detailHref ? (
                <Link
                  href={city.detailHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  Explore guide
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

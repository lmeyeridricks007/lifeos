import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { SecondaryCityCard } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

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
            "flex flex-col rounded-xl border border-slate-200 overflow-hidden shadow-sm",
            "border-l-4 transition-all hover:shadow-md hover:border-slate-300",
            cardAccents[i % cardAccents.length]
          )}
        >
          <div className="flex flex-col flex-1 px-5 py-4">
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                  i % 6 === 0 && "bg-amber-100 text-amber-700",
                  i % 6 === 1 && "bg-sky-100 text-sky-700",
                  i % 6 === 2 && "bg-emerald-100 text-emerald-700",
                  i % 6 === 3 && "bg-violet-100 text-violet-700",
                  i % 6 === 4 && "bg-rose-100 text-rose-700",
                  i % 6 === 5 && "bg-slate-100 text-slate-600"
                )}
              >
                <MapPin className="h-4 w-4" aria-hidden />
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  Guide coming soon
                </span>
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

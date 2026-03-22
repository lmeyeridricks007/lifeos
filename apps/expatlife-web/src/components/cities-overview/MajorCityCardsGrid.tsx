import Link from "next/link";
import type { MajorCityCard } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

export function MajorCityCardsGrid({ cards }: { cards: MajorCityCard[] }) {
  if (!cards?.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article
          key={card.slug}
          className={cn(
            "flex flex-col rounded-xl border bg-white p-5 shadow-sm",
            "border-l-4 border-l-teal-500",
            "bg-gradient-to-br from-teal-50/30 to-white"
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-slate-900">{card.name}</h3>
            {card.comingSoon && (
              <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">Coming soon</span>
            )}
          </div>
          <p className="mt-2 text-sm text-slate-700">{card.overview}</p>
          <p className="mt-2 text-xs text-slate-600">
            <span className="font-medium">Who chooses it:</span> {card.whoChooses}
          </p>
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-medium">Why expats pick it:</span> {card.whyExpatsPick}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {card.strengths.map((s, i) => (
              <span key={i} className="rounded bg-teal-100/80 px-2 py-0.5 text-xs text-teal-800">
                {s}
              </span>
            ))}
          </div>
          {card.tradeoffs?.length ? (
            <p className="mt-2 text-xs text-slate-600">
              <span className="font-medium text-amber-800">Tradeoffs:</span> {card.tradeoffs.join("; ")}
            </p>
          ) : null}
          <p className="mt-2 text-xs text-slate-600">
            <span className="font-medium">Newcomer support:</span>{" "}
            <a href={card.newcomerSupport.href} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
              {card.newcomerSupport.name}
            </a>
          </p>
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-medium">Cost band:</span> {card.costBand}
            {card.costNote ? ` — ${card.costNote}` : ""}
          </p>
          {card.stats && (
            <p className="mt-1 text-xs text-slate-500">
              Jobs & businesses: {card.stats.sourceLabel}
              {card.stats.sourceHref && (
                <a href={card.stats.sourceHref} target="_blank" rel="noopener noreferrer" className="ml-1 text-brand-600 hover:underline">↗</a>
              )}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            {card.sectorHighlights.map((s, i) => (
              <span key={i} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{s}</span>
            ))}
          </div>
          <div className="mt-4 pt-3">
            {card.comingSoon ? (
              <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                {card.ctaLabel}
              </span>
            ) : (
              <Link
                href={card.detailHref}
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                {card.ctaLabel}
                <span className="ml-1" aria-hidden>→</span>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

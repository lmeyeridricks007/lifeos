import type { NewcomerSupportCard } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

export function NewcomerSupportCards({ cards }: { cards: NewcomerSupportCard[] }) {
  if (!cards?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.id}
          className={cn(
            "rounded-xl border p-4 shadow-sm",
            card.isOfficial ? "border-blue-200/80 bg-blue-50/40" : "border-slate-200 bg-white"
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-slate-900">{card.name}</h3>
            {card.isOfficial && (
              <span className="shrink-0 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">Official</span>
            )}
          </div>
          <p className="mt-1 text-xs font-medium text-slate-600">{card.cityOrRegion}</p>
          <p className="mt-2 text-sm text-slate-700">{card.description}</p>
          <ul className="mt-2 space-y-0.5 text-xs text-slate-600">
            {card.whatItHelpsWith.map((item, i) => (
              <li key={i}>· {item}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-slate-600">
            <span className="font-medium">Audience:</span> {card.audience}
          </p>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm font-medium text-brand-700 hover:underline"
          >
            Visit {card.name}
            <span className="ml-1" aria-hidden>→</span>
          </a>
        </article>
      ))}
    </div>
  );
}

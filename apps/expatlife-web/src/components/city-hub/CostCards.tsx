import type { CityCostCard } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

const cardAccents = [
  "border-l-teal-500 bg-gradient-to-br from-teal-50/60 to-white",
  "border-l-emerald-500 bg-gradient-to-br from-emerald-50/50 to-white",
  "border-l-sky-500 bg-gradient-to-br from-sky-50/50 to-white",
  "border-l-amber-500 bg-gradient-to-br from-amber-50/50 to-white",
  "border-l-violet-500 bg-gradient-to-br from-violet-50/50 to-white",
  "border-l-slate-500 bg-gradient-to-br from-slate-50/50 to-white",
] as const;

const disclaimerAccents = [
  "bg-teal-100/80 text-teal-800",
  "bg-emerald-100/80 text-emerald-800",
  "bg-sky-100/80 text-sky-800",
  "bg-amber-100/80 text-amber-800",
  "bg-violet-100/80 text-violet-800",
  "bg-slate-100 text-slate-600",
] as const;

export function CostCards({ cards }: { cards: CityCostCard[] }) {
  if (!cards?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const accent = cardAccents[i % cardAccents.length];
        const disclaimerStyle = disclaimerAccents[i % disclaimerAccents.length];
        return (
          <article
            key={i}
            className={cn(
              "rounded-xl border border-slate-200/80 p-4 shadow-sm",
              "border-l-4",
              accent
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-slate-700">{card.label}</p>
              {card.disclaimer ? (
                <span className={cn("shrink-0 rounded px-2 py-0.5 text-xs font-medium", disclaimerStyle)}>
                  {card.disclaimer}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-lg font-semibold text-slate-900">{card.value}</p>
            {card.note ? (
              <p className="mt-0.5 text-xs text-slate-600">{card.note}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

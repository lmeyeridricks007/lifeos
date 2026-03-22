import Link from "next/link";
import type { QuickFitCard } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

export function QuickFitCards({ cards }: { cards: QuickFitCard[] }) {
  if (!cards?.length) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.cityName}
          className={cn(
            "rounded-xl border p-4 transition",
            card.comingSoon
              ? "border-slate-200 bg-slate-50/60"
              : "border-sky-200/80 bg-white shadow-sm hover:border-sky-300 hover:shadow"
          )}
        >
          <p className="text-sm font-medium text-slate-700">{card.label}</p>
          {card.comingSoon ? (
            <span className="mt-1 inline-block font-semibold text-slate-500">
              {card.cityName}
              <span className="ml-1.5 rounded bg-slate-200/80 px-1.5 py-0.5 text-xs">Soon</span>
            </span>
          ) : (
            <Link href={card.cityHref} className="mt-1 inline-block font-semibold text-brand-700 hover:underline">
              {card.cityName} →
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

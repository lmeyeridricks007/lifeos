import type { CityReasonCard } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

const cardAccents = [
  "border-l-teal-500 bg-gradient-to-br from-teal-50/60 to-white",
  "border-l-emerald-500 bg-gradient-to-br from-emerald-50/50 to-white",
  "border-l-sky-500 bg-gradient-to-br from-sky-50/50 to-white",
  "border-l-amber-500 bg-gradient-to-br from-amber-50/50 to-white",
  "border-l-violet-500 bg-gradient-to-br from-violet-50/50 to-white",
  "border-l-rose-500 bg-gradient-to-br from-rose-50/50 to-white",
] as const;

export function CityReasonsGrid({
  heading,
  reasons,
}: {
  heading: string;
  reasons: CityReasonCard[];
}) {
  if (!reasons?.length) return null;

  return (
    <section id="why-expats-choose" className="scroll-mt-24 mt-12 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((card, i) => (
          <article
            key={i}
            className={cn(
              "rounded-xl border border-slate-200/80 p-5 shadow-sm",
              "border-l-4",
              cardAccents[i % cardAccents.length]
            )}
          >
            <h3 className="font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {card.explanation}
            </p>
            <p className="mt-3 text-xs font-medium text-slate-500">
              Who it suits: {card.whoItSuits}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

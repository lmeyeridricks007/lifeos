import type { CityQuickFact } from "@/src/lib/city-hub/types";
import { InfoCard } from "@/components/page/cards";

/** City “at a glance” — shared `InfoCard` system. */
export function QuickFactsGrid({ items }: { items: CityQuickFact[] }) {
  if (!items?.length) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <InfoCard key={i} eyebrow={item.label} title={item.value} accent="top" />
      ))}
    </div>
  );
}

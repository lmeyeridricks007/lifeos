import type { CityQuickFact } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

const cardStyles = [
  "rounded-xl border border-slate-200/80 border-l-4 border-l-blue-500 bg-blue-50/80 p-4 shadow-sm",
  "rounded-xl border border-slate-200/80 border-l-4 border-l-teal-500 bg-teal-50/80 p-4 shadow-sm",
  "rounded-xl border border-slate-200/80 border-l-4 border-l-amber-500 bg-amber-50/80 p-4 shadow-sm",
  "rounded-xl border border-slate-200/80 border-l-4 border-l-blue-500 bg-blue-50/80 p-4 shadow-sm",
  "rounded-xl border border-slate-200/80 border-l-4 border-l-teal-500 bg-teal-50/80 p-4 shadow-sm",
  "rounded-xl border border-slate-200/80 border-l-4 border-l-amber-500 bg-amber-50/80 p-4 shadow-sm",
];
const labelStyles = [
  "text-xs font-semibold uppercase tracking-wide text-blue-700",
  "text-xs font-semibold uppercase tracking-wide text-teal-700",
  "text-xs font-semibold uppercase tracking-wide text-amber-700",
  "text-xs font-semibold uppercase tracking-wide text-blue-700",
  "text-xs font-semibold uppercase tracking-wide text-teal-700",
  "text-xs font-semibold uppercase tracking-wide text-amber-700",
];

export function QuickFactsGrid({ items }: { items: CityQuickFact[] }) {
  if (!items?.length) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const styleIndex = i % cardStyles.length;
        return (
          <div key={i} className={cn(cardStyles[styleIndex])}>
            <p className={labelStyles[styleIndex]}>{item.label}</p>
            <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

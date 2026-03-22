import { cn } from "@/lib/cn";

export type TOCItem = { id: string; label: string };

export function PillarTOC({ items, className }: { items: TOCItem[]; className?: string }) {
  return (
    <nav aria-label="Table of contents" className={cn("space-y-1", className)}>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
      <ul className="space-y-1 border-l-2 border-slate-200 pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block min-h-[44px] rounded-md py-2.5 text-sm leading-snug text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:min-h-0 sm:py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

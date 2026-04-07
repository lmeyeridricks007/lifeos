import { cn } from "@/lib/cn";
import { shellSupportModuleTitleClass } from "@/lib/ui/shell";

export type TOCItem = { id: string; label: string };

const tocSupportTitleClass =
  "text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500";

export function PillarTOC({
  items,
  className,
  tone = "default",
}: {
  items: TOCItem[];
  className?: string;
  /** `support` = softer secondary rail (city hubs); default = stronger module chrome. */
  tone?: "default" | "support";
}) {
  const support = tone === "support";
  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        support
          ? "rounded-xl border border-slate-200/55 bg-gradient-to-b from-slate-50/90 to-slate-50/40 p-4 shadow-none ring-1 ring-slate-900/[0.04] sm:p-4"
          : "rounded-card border border-border/50 bg-gradient-to-b from-surface-raised to-surface-muted/25 p-5 shadow-card ring-1 ring-border/20",
        className
      )}
    >
      <p className={support ? tocSupportTitleClass : shellSupportModuleTitleClass}>On this page</p>
      <ul className="mt-3 space-y-0.5 sm:mt-3.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "group flex items-start gap-2.5 rounded-lg py-1.5 pl-1 pr-1 text-sm leading-snug transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 sm:min-h-0",
                support
                  ? "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                  : "text-foreground-muted hover:bg-brand-muted/30 hover:text-foreground focus-visible:ring-ring/20"
              )}
            >
              <span
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-150",
                  support
                    ? "bg-slate-300 group-hover:bg-copilot-primary"
                    : "bg-brand/35 group-hover:bg-brand"
                )}
                aria-hidden
              />
              <span className="min-w-0 flex-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

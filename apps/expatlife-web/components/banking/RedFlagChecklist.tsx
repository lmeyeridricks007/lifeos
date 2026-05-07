import { cn } from "@/lib/cn";

/**
 * Simple red-flag checklist with an explicit heading (use inside a section that already has an h2).
 */
export function RedFlagChecklist({
  title,
  titleId,
  items,
  className,
  listClassName,
}: {
  title: string;
  /** Stable id for `aria-labelledby` when the parent section titles this block. */
  titleId?: string;
  items: readonly string[];
  className?: string;
  listClassName?: string;
}) {
  if (!items.length) return null;

  return (
    <div
      className={cn(
        "max-w-3xl rounded-xl border border-amber-200/60 bg-amber-50/35 py-3 pl-4 pr-3 ring-1 ring-amber-100/50 sm:py-4 sm:pl-5 sm:pr-4",
        "border-l-4 border-l-amber-500/80",
        className
      )}
    >
      <h3 id={titleId} className="text-sm font-semibold text-foreground">
        {title}
      </h3>
      <ul className={cn("mt-3 list-disc space-y-2 pl-5 text-sm leading-snug text-foreground-muted sm:space-y-2.5 sm:leading-relaxed", listClassName)} role="list">
        {items.map((r) => (
          <li key={r} className="break-words">
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

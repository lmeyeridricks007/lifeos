import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Account protection bullets — same dot rhythm as other banking safety lists on the page.
 */
export function AccountProtectionChecklist({
  items,
  className,
  /** When nested in a labelled region, pass the section heading id. */
  ariaLabelledBy,
  /** `panel` = soft row cards (document checklist groups, onboarding flows). */
  variant = "plain",
}: {
  items: readonly string[];
  className?: string;
  ariaLabelledBy?: string;
  variant?: "plain" | "panel";
}) {
  if (!items.length) return null;

  const panel = variant === "panel";

  return (
    <ul
      className={cn("max-w-3xl list-none p-0", panel ? "space-y-2 sm:space-y-2.5" : "space-y-2.5", className)}
      role="list"
      {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-sm leading-snug",
            panel
              ? "rounded-xl border border-copilot-primary/[0.08] bg-white/85 px-3.5 py-2.5 text-slate-700 shadow-sm ring-1 ring-slate-900/[0.03] sm:px-4 sm:py-3"
              : "text-foreground-muted"
          )}
        >
          {panel ? (
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-copilot-primary/12 text-copilot-primary"
              aria-hidden
            >
              <Check className="h-3 w-3 stroke-[3]" />
            </span>
          ) : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
          )}
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

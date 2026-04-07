import { cn } from "@/lib/cn";

type ComingSoonBadgeProps = {
  className?: string;
  label?: string;
  /** Amber pill for roadmap / highlight labels; default is neutral “coming soon” styling. */
  emphasis?: boolean;
};

/** Small, accessible label for nav rows and cards that are not yet live. Prefer short “Soon” in menus to avoid layout clash. */
export function ComingSoonBadge({ className, label = "Soon", emphasis }: ComingSoonBadgeProps) {
  const isShort = (label ?? "Soon").length <= 8;
  return (
    <span
      className={cn(
        // `normal-case` resets inherited uppercase from nav ancestors; short labels re-apply `uppercase` below.
        "inline-flex shrink-0 items-center rounded-pill px-2 py-[3px] text-[10px] font-semibold leading-none tracking-wide normal-case",
        emphasis
          ? "border border-warning-border/70 bg-warning-muted text-warning"
          : isShort
            ? "border border-border/60 bg-surface-subtle uppercase tracking-wide text-foreground-muted"
            : "border border-border/60 bg-surface-subtle text-foreground-muted",
        className
      )}
    >
      {label}
    </span>
  );
}

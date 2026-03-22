import { cn } from "@/lib/cn";

type ComingSoonBadgeProps = {
  className?: string;
  label?: string;
};

/** Small, accessible label for nav rows and cards that are not yet live. */
export function ComingSoonBadge({ className, label = "Coming soon" }: ComingSoonBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600",
        className
      )}
    >
      {label}
    </span>
  );
}

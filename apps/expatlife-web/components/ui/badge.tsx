import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { transitionColors } from "@/lib/ui/interaction";

const badgeVariants = {
  neutral: "bg-surface-subtle text-foreground-muted border border-border/60",
  emphasis: "bg-warning-muted text-warning border border-warning-border/80",
  brand: "bg-brand-muted text-brand-strong border border-brand/15",
  success: "bg-success-muted text-success border border-success-border/80",
  outline: "bg-surface-raised text-foreground-muted border border-border",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

/**
 * Small status / meta pill. Use `ComingSoonBadge` for roadmap-specific copy.
 */
export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        transitionColors,
        "inline-flex shrink-0 items-center rounded-pill px-2 py-0.5 text-xs font-medium leading-none ease-out",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

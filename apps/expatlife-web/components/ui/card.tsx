import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";

const shellVariants = {
  default: cn("border border-border bg-surface-raised shadow-card", transitionSurface),
  muted: cn("border border-border/80 bg-surface-muted shadow-none", transitionSurface),
  elevated: cn("border border-border bg-surface-raised shadow-popover", transitionSurface),
  inset: cn("border border-border bg-surface-subtle shadow-inset", transitionSurface),
  /** Netherlands moving / guide pillar — matches FAQ + monetization shortlist rhythm */
  expatCopilot: cn(
    "rounded-2xl border-0 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]",
    transitionSurface
  ),
} as const;

export type CardShellVariant = keyof typeof shellVariants;

type CardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardShellVariant;
};

/**
 * Presentational card shell — border, surface, radius, shadow. Compose with padding via `className` or children layout.
 */
export function Card({ variant = "default", className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-card text-foreground", shellVariants[variant], className)}
      {...props}
    />
  );
}

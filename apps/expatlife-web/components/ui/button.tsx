import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive, transitionSurface } from "@/lib/ui/interaction";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles = {
  primary:
    "border border-brand-strong/25 bg-brand text-white shadow-card hover:bg-brand-strong hover:text-white hover:shadow-card-hover focus-visible:text-white",
  secondary:
    "border border-border bg-surface-raised text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted active:bg-surface-subtle motion-reduce:active:bg-surface-raised",
  ghost:
    "border border-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground active:bg-surface-muted/80 motion-reduce:active:bg-transparent",
} as const;

const transitionByVariant = {
  primary: cn(transitionInteractive, activeBrightnessPress),
  secondary: transitionSurface,
  ghost: transitionSurface,
} as const;

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionByVariant[variant],
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

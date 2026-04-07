import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";

const fieldClass = cn(
  transitionSurface,
  "min-h-[44px] w-full rounded-xl border border-border bg-surface-raised px-3 py-2 text-base text-foreground shadow-card outline-none ease-out sm:text-sm focus-visible:border-brand-600 focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas hover:border-border-strong/90"
);

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldClass, "font-medium", className)} {...props} />;
}

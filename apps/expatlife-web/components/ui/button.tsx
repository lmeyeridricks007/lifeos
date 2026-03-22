import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles = {
  primary:
    "border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow hover:-translate-y-0.5 hover:from-brand-700 hover:to-cyan-700",
  secondary: "border border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
} as const;

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

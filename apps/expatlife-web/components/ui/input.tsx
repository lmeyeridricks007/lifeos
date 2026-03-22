import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 shadow-sm outline-none transition sm:text-sm focus-visible:border-brand-600 focus-visible:ring-4 focus-visible:ring-brand-50",
        className,
      )}
      {...props}
    />
  );
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-medium text-slate-900 shadow-sm outline-none transition sm:text-sm focus-visible:border-brand-600 focus-visible:ring-4 focus-visible:ring-brand-50",
        className,
      )}
      {...props}
    />
  );
}

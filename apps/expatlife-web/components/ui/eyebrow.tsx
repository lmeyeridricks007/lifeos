import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = ComponentPropsWithoutRef<"p">;

/**
 * Section / page label above headings. Uses brand token for a calm product accent.
 */
export function Eyebrow({ className, ...props }: EyebrowProps) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.14em] text-brand", className)} {...props} />;
}

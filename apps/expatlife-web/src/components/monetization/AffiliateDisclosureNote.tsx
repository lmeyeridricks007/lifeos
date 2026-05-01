import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type AffiliateDisclosureNoteProps = ComponentPropsWithoutRef<"p"> & {
  /** When true, slightly more padding for use under a CTA row. */
  spaced?: boolean;
};

/**
 * Short, editorial affiliate / partner link notice. Subtle but visible.
 */
export function AffiliateDisclosureNote({ className, spaced, children, ...props }: AffiliateDisclosureNoteProps) {
  return (
    <p
      className={cn(
        "max-w-full text-pretty text-xs leading-relaxed text-foreground-muted [overflow-wrap:anywhere]",
        spaced ? "mt-3" : "mt-0",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

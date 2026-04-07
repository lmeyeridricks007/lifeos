import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { MONETIZATION_TRUST_DISCLOSURE_LINES } from "@/src/lib/monetization/trustCopy";
import { monetizationTrustListClass, monetizationTrustPanelClass } from "./monetizationTrustStyles";

export type MonetizationTrustDisclosureProps = ComponentPropsWithoutRef<"div"> & {
  /** Subset of standard lines; default all three. */
  lines?: Array<"partner" | "topic" | "pricing">;
  tone?: "default" | "copilot";
  /** List + heading only (parent supplies card shell). */
  embedded?: boolean;
};

const LINE_MAP = {
  partner: MONETIZATION_TRUST_DISCLOSURE_LINES.partnerLinks,
  topic: MONETIZATION_TRUST_DISCLOSURE_LINES.topicRelevance,
  pricing: MONETIZATION_TRUST_DISCLOSURE_LINES.confirmOnProvider,
} as const;

/**
 * Reusable stacked disclosure (partner links, topic fit, confirm on provider site).
 */
export function MonetizationTrustDisclosure({
  className,
  lines = ["partner", "topic", "pricing"],
  tone = "default",
  embedded = false,
  ...props
}: MonetizationTrustDisclosureProps) {
  const resolved = lines.map((k) => LINE_MAP[k]);
  if (resolved.length === 0) return null;

  const copilot = tone === "copilot";
  const headingClass = copilot
    ? "text-[11px] font-semibold uppercase tracking-wider text-copilot-text-muted"
    : "text-[11px] font-semibold uppercase tracking-wider text-foreground-muted";
  const bulletClass = copilot ? "bg-copilot-primary/80" : "bg-brand/70";
  const textClass = copilot ? "text-sm text-copilot-text-secondary" : "text-sm text-foreground-muted";

  const list = (
    <ul className={cn(monetizationTrustListClass, "mt-2", textClass)}>
      {resolved.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", bulletClass)} aria-hidden />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );

  if (embedded) {
    return (
      <div className={className} role="note" {...props}>
        <p className={headingClass}>Transparency</p>
        {list}
      </div>
    );
  }

  return (
    <div className={cn(monetizationTrustPanelClass, className)} role="note" {...props}>
      <p className={headingClass}>Transparency</p>
      {list}
    </div>
  );
}

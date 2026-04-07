import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlFaqCardInnerClass } from "@/lib/ui/moving-nl-pillar-identity";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import { HowWeChooseMicrocopy } from "./HowWeChooseMicrocopy";
import { MonetizationTrustDisclosure } from "./MonetizationTrustDisclosure";

export type MonetizationProviderTrustFooterProps = {
  className?: string;
  /** Extra editorial context for this placement (e.g. why this category on this page). */
  editorialRationale?: string;
  /** ISO date `YYYY-MM-DD` or display-ready string. */
  lastReviewed?: string;
  /** Shown below the standard trust panel (placement-specific). */
  disclosureText: string;
  showHowWeChoose?: boolean;
  trustLines?: Array<"partner" | "topic" | "pricing">;
  /** Optional content between “How we choose” and the stacked disclosure (e.g. custom note). */
  children?: ReactNode;
  /** Match Netherlands JSON guide FAQ / shortlist card shell. */
  visualVariant?: "default" | "movingGuide";
  /**
   * When `visualVariant` is `movingGuide`, wrap the trust stack in the FAQ-matched inner card.
   * Set `false` when a parent `Card` already provides that shell (e.g. `AffiliateSection`).
   */
  nestMovingGuideCard?: boolean;
};

function formatLastReviewed(raw: string): string {
  const trimmed = raw.trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (!m) return trimmed;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return trimmed;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Full trust stack for provider/recommendation sections: optional rationale, how-we-choose, disclosure lines, default note, optional last reviewed.
 */
export function MonetizationProviderTrustFooter({
  className,
  editorialRationale,
  lastReviewed,
  disclosureText,
  showHowWeChoose = true,
  trustLines,
  children,
  visualVariant = "default",
  nestMovingGuideCard,
}: MonetizationProviderTrustFooterProps) {
  const movingGuide = visualVariant === "movingGuide";
  const wrapTrustCard = movingGuide && nestMovingGuideCard !== false;

  const rationaleBlock =
    editorialRationale != null && editorialRationale !== "" ? (
      <p
        className={cn(
          "text-sm leading-relaxed",
          movingGuide ? "text-copilot-text-secondary" : "text-foreground-muted"
        )}
      >
        {editorialRationale}
      </p>
    ) : null;

  const stack = (
    <>
      {showHowWeChoose ? (
        <HowWeChooseMicrocopy
          tone={movingGuide ? "copilot" : "default"}
          embedded={movingGuide}
        />
      ) : null}
      {children}
      <div className={cn(showHowWeChoose && movingGuide && "mt-5 border-t border-slate-200/80 pt-5")}>
        <MonetizationTrustDisclosure
          lines={trustLines}
          tone={movingGuide ? "copilot" : "default"}
          embedded={movingGuide}
        />
        <AffiliateDisclosureNote
          spaced
          className={cn("mt-3", movingGuide ? "text-copilot-text-secondary" : "text-foreground-muted")}
        >
          {disclosureText}
        </AffiliateDisclosureNote>
        {lastReviewed ? (
          <p
            className={cn(
              "mt-2 text-[11px] leading-relaxed",
              movingGuide ? "text-copilot-text-muted" : "text-foreground-faint"
            )}
          >
            Last reviewed {formatLastReviewed(lastReviewed)}.
          </p>
        ) : null}
      </div>
    </>
  );

  if (movingGuide) {
    return (
      <div className={cn("w-full min-w-0 space-y-4", className)}>
        {rationaleBlock}
        {wrapTrustCard ? (
          <div className={cn(movingNlFaqCardInnerClass, "w-full min-w-0")}>{stack}</div>
        ) : (
          stack
        )}
      </div>
    );
  }

  return (
    <div className={cn("w-full min-w-0 space-y-4", className)}>
      {rationaleBlock}
      {showHowWeChoose ? <HowWeChooseMicrocopy /> : null}
      {children}
      <MonetizationTrustDisclosure lines={trustLines} />
      <AffiliateDisclosureNote spaced className="text-foreground-muted">
        {disclosureText}
      </AffiliateDisclosureNote>
      {lastReviewed ? (
        <p className="text-[11px] leading-relaxed text-foreground-faint">Last reviewed {formatLastReviewed(lastReviewed)}.</p>
      ) : null}
    </div>
  );
}

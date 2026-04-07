import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { movingNlSectionH2Class, movingNlSidebarModuleTitleClass } from "@/lib/ui/moving-nl-pillar-identity";
import { MonetizationProviderTrustFooter } from "./MonetizationProviderTrustFooter";
import { ProviderCard } from "./ProviderCard";
import type { ProviderCardProps } from "./provider-card-types";

export type RecommendationBlockVariant = "default" | "compact" | "inline";

export type RecommendationBlockProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ProviderCardProps[];
  variant?: RecommendationBlockVariant;
  disclosureText: string;
  /** Why this block appears on this page (editorial rationale). */
  editorialRationale?: string;
  /** ISO `YYYY-MM-DD` or display string. */
  lastReviewed?: string;
  showHowWeChoose?: boolean;
  /** Optional link or button row below the grid (e.g. “Compare all banks”). */
  cta?: ReactNode;
  /** When true, wrap in `Container`. Turn off inside an already-contained column. */
  contained?: boolean;
  className?: string;
  /** Match Netherlands moving / city hub (ExpatCopilot cards + FAQ-style “How we choose”). */
  pillarVisualVariant?: "default" | "movingGuide";
};

/**
 * Curated 2–4 provider recommendations with “why these” framing. Place after primary content.
 */
export function RecommendationBlock({
  eyebrow,
  title,
  subtitle,
  items,
  variant = "default",
  disclosureText,
  editorialRationale,
  lastReviewed,
  showHowWeChoose = true,
  cta,
  contained = true,
  className,
  pillarVisualVariant = "default",
}: RecommendationBlockProps) {
  const slice = items.slice(0, 4);
  if (slice.length === 0) return null;

  const isCompact = variant === "compact";
  const isInline = variant === "inline";
  const copilotPillar = pillarVisualVariant === "movingGuide";
  const cardTone = copilotPillar ? "copilot" : "default";

  const inner = (
    <>
      <header
        className={cn(
          "w-full min-w-0",
          isCompact ? "mb-4 md:mb-5" : "mb-8 md:mb-10",
          isInline && "mb-4"
        )}
      >
        {copilotPillar ? (
          <>
            <p className={movingNlSidebarModuleTitleClass}>{eyebrow}</p>
            <h2
              className={cn(
                movingNlSectionH2Class,
                "mt-2",
                isCompact && "text-xl sm:text-2xl md:text-[1.65rem]"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed text-copilot-text-secondary md:text-base",
                !isInline && "max-w-none"
              )}
            >
              {subtitle}
            </p>
          </>
        ) : (
          <>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className={cn(
                "mt-1 font-semibold tracking-tight text-foreground",
                isCompact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl md:text-3xl"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-2 max-w-3xl text-foreground-muted",
                isCompact ? "text-sm" : "text-sm md:text-base"
              )}
            >
              {subtitle}
            </p>
          </>
        )}
      </header>

      <div
        className={cn(
          "grid w-full min-w-0 items-start gap-4 md:gap-6",
          isInline && "grid-cols-1 sm:grid-cols-2",
          !isInline &&
            !isCompact &&
            (slice.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"),
          isCompact && "grid-cols-1 sm:grid-cols-2"
        )}
      >
        {slice.map((item) => (
          <ProviderCard
            key={item.name + item.href}
            {...item}
            layoutDensity="compact"
            tone={cardTone}
          />
        ))}
      </div>

      {cta ? <div className={cn("mt-6 flex flex-wrap gap-3", isCompact && "mt-4")}>{cta}</div> : null}

      <MonetizationProviderTrustFooter
        className={cn(cta ? "mt-4" : "mt-6", "w-full min-w-0")}
        disclosureText={disclosureText}
        editorialRationale={editorialRationale}
        lastReviewed={lastReviewed}
        showHowWeChoose={showHowWeChoose}
        visualVariant={copilotPillar ? "movingGuide" : "default"}
      />
    </>
  );

  const sectionClass = cn(
    "w-full min-w-0",
    isCompact ? "py-section-y-compact sm:py-4 md:py-5" : "py-section-y sm:py-10 md:py-section-y-lg",
    isInline && "py-6 md:py-8",
    className
  );

  return (
    <section className={sectionClass} aria-label={title}>
      {contained ? <Container>{inner}</Container> : inner}
    </section>
  );
}

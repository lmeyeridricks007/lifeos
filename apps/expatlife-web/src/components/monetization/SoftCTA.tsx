import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { movingNlGuideSectionTopAccentClass, movingNlPathPrimaryCtaClass, movingNlSidebarModuleTitleClass } from "@/lib/ui/moving-nl-pillar-identity";
import { transitionSurface } from "@/lib/ui/interaction";

export type SoftCtaLink = { label: string; href: string };

/** Visual layout: `inline` = left-accent callout, `card` = raised surface, `band` = full-width horizontal strip. */
export type SoftCTAVariant = "card" | "band" | "inline";

/** Alias for docs / design system: same as `band`. */
export const SOFT_CTA_HORIZONTAL_BAND_VARIANT: SoftCTAVariant = "band";

const copilotSecondaryBtnClass = cn(
  "inline-flex min-h-10 items-center justify-center rounded-xl border border-copilot-primary/15 bg-copilot-surface px-4 py-2 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 transition-colors",
  "hover:border-copilot-primary/22 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-surface"
);

export type SoftCTAProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: SoftCtaLink;
  secondaryCta?: SoftCtaLink;
  variant?: SoftCTAVariant;
  contained?: boolean;
  className?: string;
  /** Card layout only: match Netherlands moving / city hub surfaces (gradient cap + copilot typography). */
  cardVariant?: "default" | "expatCopilot";
};

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

const btnPrimary = cn(
  "inline-flex min-h-10 items-center justify-center rounded-xl border border-brand-strong/25 bg-brand px-4 py-2 text-sm font-semibold text-white shadow-card",
  "hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionSurface
);

const btnSecondary = cn(
  "inline-flex min-h-10 items-center justify-center rounded-xl border border-border bg-surface-raised px-4 py-2 text-sm font-semibold text-foreground shadow-card",
  "hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionSurface
);

function CtaAnchor({ link, className }: { link: SoftCtaLink; className: string }) {
  if (isInternal(link.href)) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  );
}

/**
 * Non-intrusive next-step prompt (tools, checklists, comparisons).
 * At most one primary and one secondary control per block—avoid stacking multiple competing CTAs in the same row.
 */
export function SoftCTA({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "card",
  contained = true,
  className,
  cardVariant = "default",
}: SoftCTAProps) {
  const copilotCard = variant === "card" && cardVariant === "expatCopilot";

  const actions: ReactNode = (
    <div className="mt-4 flex flex-wrap gap-3">
      <CtaAnchor
        link={primaryCta}
        className={copilotCard ? cn(movingNlPathPrimaryCtaClass, "min-h-10 justify-center text-sm") : btnPrimary}
      />
      {secondaryCta ? (
        <CtaAnchor link={secondaryCta} className={copilotCard ? copilotSecondaryBtnClass : btnSecondary} />
      ) : null}
    </div>
  );

  const body = (
    <>
      {copilotCard ? (
        <p className={movingNlSidebarModuleTitleClass}>{eyebrow}</p>
      ) : (
        <Eyebrow>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "mt-1 text-lg font-semibold tracking-tight sm:text-xl",
          copilotCard ? "text-copilot-text-primary" : "text-foreground"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-2 text-sm sm:text-base",
          copilotCard ? "max-w-none text-copilot-text-secondary" : "max-w-2xl text-foreground-muted"
        )}
      >
        {description}
      </p>
      {actions}
    </>
  );

  if (variant === "inline") {
    const inline = (
      <div className={cn("w-full min-w-0 rounded-r-card border-l-4 border-brand bg-surface-muted/60 py-4 pl-4 pr-4", className)}>
        {body}
      </div>
    );
    return (
      <aside className="w-full min-w-0 py-section-y-compact" aria-label={title}>
        {contained ? <Container>{inline}</Container> : inline}
      </aside>
    );
  }

  if (variant === "band") {
    const band = (
      <div className={cn("w-full min-w-0 border-y border-border bg-surface-muted/80 py-8 md:py-10", className)}>{body}</div>
    );
    return (
      <aside className="w-full min-w-0" aria-label={title}>
        {contained ? <Container>{band}</Container> : band}
      </aside>
    );
  }

  const card = (
    <Card
      variant={copilotCard ? "expatCopilot" : "default"}
      className={cn("relative w-full min-w-0 overflow-hidden p-5 md:p-6", copilotCard && "border-0", className)}
    >
      {copilotCard ? <div className={movingNlGuideSectionTopAccentClass} aria-hidden /> : null}
      <div className="relative z-[1]">{body}</div>
    </Card>
  );

  return (
    <aside className="w-full min-w-0 py-section-y-compact sm:py-6 md:py-8" aria-label={title}>
      {contained ? <Container>{card}</Container> : card}
    </aside>
  );
}

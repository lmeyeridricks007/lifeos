import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import { MonetizationTrustDisclosure } from "./MonetizationTrustDisclosure";
import type { ProviderCardLogo } from "./provider-card-types";
import {
  movingNlFaqCardInnerClass,
  movingNlPathPrimaryCtaClass,
  movingNlSectionH2Class,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type BestProvidersMiniListItem = {
  rank: number;
  name: string;
  href: string;
  logo?: ProviderCardLogo;
  blurb: string;
  isAffiliate?: boolean;
};

export type BestProvidersMiniListProps = {
  title: string;
  items: BestProvidersMiniListItem[];
  viewAllHref: string;
  viewAllLabel?: string;
  contained?: boolean;
  className?: string;
  /** Merged onto the outer `<section>` (after default vertical padding). Use to sit flush under FAQ. */
  outerSectionClassName?: string;
  /**
   * `compact`: stacked transparency lines + disclosure note (no “How we choose” grid).
   * `none`: omit (caller adds `MonetizationProviderTrustFooter`).
   */
  trustFooter?: "compact" | "none";
  disclosureText?: string;
  /** ISO `YYYY-MM-DD` or display string. */
  lastReviewed?: string;
  /**
   * `raised` — default card lift (border + shadow).
   * `flat` — lighter band (ignored when `visualVariant` is `movingGuide`).
   */
  surface?: "raised" | "flat";
  /**
   * `movingGuide` — match Netherlands JSON guide FAQ rhythm (ExpatCopilot shell, section heading, primary CTA).
   */
  visualVariant?: "default" | "movingGuide";
  /** With `movingGuide`, eyebrow above the title (default “Shortlist”). */
  listEyebrow?: string;
};

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function ViewAllCta({
  href,
  label,
  movingGuide,
}: {
  href: string;
  label: string;
  movingGuide: boolean;
}) {
  const inner = (
    <>
      {label} <span aria-hidden>→</span>
    </>
  );
  if (movingGuide) {
    if (isInternal(href)) {
      return (
        <Link href={href} className={cn(movingNlPathPrimaryCtaClass, "w-full justify-center text-center")}>
          {inner}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(movingNlPathPrimaryCtaClass, "w-full justify-center text-center")}
      >
        {inner}
      </a>
    );
  }
  if (isInternal(href)) {
    return (
      <Link href={href} className="text-sm font-semibold text-link hover:text-link-hover">
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-link hover:text-link-hover">
      {inner}
    </a>
  );
}

/**
 * Compact ranked shortlist for sidebars or end-of-article modules.
 */
export function BestProvidersMiniList({
  title,
  items,
  viewAllHref,
  viewAllLabel = "View all",
  contained = true,
  className,
  outerSectionClassName,
  trustFooter = "compact",
  disclosureText = DEFAULT_MONETIZATION_DISCLOSURE,
  lastReviewed,
  surface = "raised",
  visualVariant = "default",
  listEyebrow,
}: BestProvidersMiniListProps) {
  if (!items.length) return null;

  const movingGuide = visualVariant === "movingGuide";

  const rowClasses = movingGuide
    ? "flex w-full min-w-0 items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left no-underline transition-colors hover:border-copilot-primary/12 hover:bg-copilot-bg-soft/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-surface"
    : "flex w-full min-w-0 gap-3 rounded-lg p-2 transition-colors hover:bg-surface-muted/80";

  const rankClasses = movingGuide
    ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-xs font-bold text-copilot-text-primary ring-1 ring-copilot-primary/10"
    : "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-xs font-bold text-foreground-muted";

  const nameClasses = movingGuide ? "truncate font-semibold text-copilot-text-primary" : "truncate font-medium text-foreground";
  const blurbClasses = movingGuide ? "mt-0.5 text-xs leading-snug text-copilot-text-secondary" : "mt-0.5 text-xs leading-snug text-foreground-muted";

  const listBody = (
    <ol
      className={cn(
        movingGuide
          ? "mt-1 flex w-full min-w-0 list-none flex-col gap-2 p-0"
          : "mt-4 w-full min-w-0 space-y-3"
      )}
    >
      {items.map((item) => {
        const rel = item.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
        const rowInner = (
          <>
            <span className={rankClasses} aria-hidden>
              {item.rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {item.logo ? (
                  <span
                    className={cn(
                      "relative h-6 w-6 shrink-0 overflow-hidden rounded",
                      movingGuide ? "bg-copilot-bg-soft ring-1 ring-copilot-primary/10" : "bg-surface-muted"
                    )}
                  >
                    <Image
                      src={normalizeExternalProviderLogoSrc(item.logo.src)}
                      alt={item.logo.alt || item.name}
                      width={24}
                      height={24}
                      className="object-contain p-0.5"
                    />
                  </span>
                ) : null}
                <span className={nameClasses}>{item.name}</span>
              </div>
              <p className={blurbClasses}>{item.blurb}</p>
            </div>
          </>
        );

        return (
          <li key={item.name + item.href} className={cn(movingGuide && "min-w-0")}>
            {isInternal(item.href) ? (
              <Link href={item.href} className={rowClasses}>
                {rowInner}
              </Link>
            ) : (
              <a href={item.href} target="_blank" rel={rel} className={rowClasses}>
                {rowInner}
              </a>
            )}
          </li>
        );
      })}
    </ol>
  );

  const trustBlock =
    trustFooter === "compact" ? (
      <div
        className={cn(
          "space-y-3 border-t pt-4",
          movingGuide ? "mt-4 border-slate-200/80" : "mt-4 border-border"
        )}
      >
        <MonetizationTrustDisclosure />
        <AffiliateDisclosureNote
          className={movingGuide ? "text-copilot-text-secondary" : "text-foreground-muted"}
        >
          {disclosureText}
        </AffiliateDisclosureNote>
        {lastReviewed ? (
          <p
            className={cn(
              "text-[11px] leading-relaxed",
              movingGuide ? "text-copilot-text-muted" : "text-foreground-faint"
            )}
          >
            Last reviewed{" "}
            {(() => {
              const t = lastReviewed.trim();
              const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t);
              if (!m) return t;
              const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
              return Number.isNaN(d.getTime()) ? t : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
            })()}
            .
          </p>
        ) : null}
      </div>
    ) : null;

  const viewAllBlock = (
    <div className={cn("border-t pt-4", movingGuide ? "mt-4 border-slate-200/80" : "mt-4 border-border pt-3")}>
      <ViewAllCta href={viewAllHref} label={viewAllLabel} movingGuide={movingGuide} />
    </div>
  );

  if (movingGuide) {
    const inner = (
      <section className={cn("min-w-0 w-full", outerSectionClassName)} aria-label={title}>
        <p className={movingNlSidebarModuleTitleClass}>{listEyebrow ?? "Shortlist"}</p>
        <h2 className={cn(movingNlSectionH2Class, "mt-2")}>{title}</h2>
        <div className={cn("mt-5 min-w-0 sm:mt-6", movingNlFaqCardInnerClass, className)}>
          {listBody}
          {trustBlock}
          {viewAllBlock}
        </div>
      </section>
    );
    return contained ? <Container className="max-w-2xl">{inner}</Container> : inner;
  }

  const list = (
    <div
      className={cn(
        "rounded-card border border-border p-4 sm:p-5",
        surface === "flat" ? "border-border/90 bg-surface-muted/50" : "bg-surface-raised shadow-card",
        className
      )}
    >
      <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
      {listBody}
      {trustBlock}
      {viewAllBlock}
    </div>
  );

  return (
    <section className={cn("py-section-y-compact", outerSectionClassName)} aria-label={title}>
      {contained ? <Container className="max-w-lg">{list}</Container> : list}
    </section>
  );
}

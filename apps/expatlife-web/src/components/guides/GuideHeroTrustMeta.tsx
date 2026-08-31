/**
 * D2 — Citability / source-of-record ATF trust strip.
 *
 * Any page that states a statutory number (HSM floors, IND fees, 30% norms,
 * minimum wage, eigen risico, etc.) should show a visible last-reviewed date
 * and at least one official source link above the fold. Keep FAQs and dated
 * tables — do not strip the citability layer.
 */

import { cn } from "@/lib/cn";

export type GuideHeroOfficialSource = {
  label: string;
  href: string;
};

type GuideHeroTrustMetaProps = {
  /**
   * Date only, e.g. "26 August 2026".
   * Rendered as `{lastReviewedLabel} {lastReviewed}` unless `lastReviewedText` is set.
   */
  lastReviewed?: string | null;
  /** Prefix for `lastReviewed` (default "Last reviewed:"). */
  lastReviewedLabel?: string;
  /**
   * Full preformatted reviewed line (e.g. JSON guides' `lastUpdated: "Last reviewed: …"`).
   * Wins over `lastReviewed` when set.
   */
  lastReviewedText?: string | null;
  /** Official authority links shown above the fold. */
  sources?: readonly GuideHeroOfficialSource[] | null;
  sourcesLabel?: string;
  className?: string;
};

export function GuideHeroTrustMeta({
  lastReviewed,
  lastReviewedLabel = "Last reviewed:",
  lastReviewedText,
  sources,
  sourcesLabel = "Official sources:",
  className,
}: GuideHeroTrustMetaProps) {
  const reviewedLine =
    lastReviewedText?.trim() ||
    (lastReviewed?.trim() ? `${lastReviewedLabel} ${lastReviewed.trim()}` : null);
  const hasSources = Boolean(sources?.length);
  if (!reviewedLine && !hasSources) return null;

  return (
    <div className={cn("space-y-2", className)}>
      {reviewedLine ? (
        <p className="text-sm font-medium text-foreground-muted" role="doc-dateline">
          {reviewedLine}
        </p>
      ) : null}
      {hasSources ? (
        <p className="text-sm text-foreground-muted">
          {sourcesLabel}{" "}
          {sources!.map((source, index) => (
            <span key={source.href}>
              {index > 0 ? " · " : null}
              <a
                href={source.href}
                className="font-semibold text-link hover:text-link-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}

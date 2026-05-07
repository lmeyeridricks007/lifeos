import Link from "next/link";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { ProviderLogo } from "@/src/components/affiliates/ProviderLogo";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";
import { cn } from "@/lib/cn";

const DEFAULT_UTM_REFERRER_PATH = "/netherlands/money/banking/best-banks-expats/" as const;

const CTA_SOFT =
  "inline-flex min-h-9 w-full max-w-full items-center justify-center rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto";

type CategoryLink = { href: string; label: string };

export type BankingRecommendedOptionsSectionProps = {
  placementId: string;
  analyticsPageContext: string;
  /** Optional intro under the region label; omit or leave empty when cards carry the detail. */
  boundaryNote?: string;
  categoryLinks: readonly CategoryLink[];
  browseLabel?: string;
  /** Overrides the small uppercase line above the boundary note (default: marks this block as separate from the main guide). */
  regionIntroLabel?: string;
  /** Canonical path of the page embedding this block — used for referral UTM `utm_content` (defaults to Best Banks). */
  utmReferrerPath?: string;
  destinationCountry?: string;
  originCountry?: string;
  /** Softer chrome for long-form guides where the main comparison should stay primary (e.g. ZZP banking). */
  surfaceTone?: "default" | "muted";
};

function isInternalSiteCta(href: string, isAffiliate: boolean): boolean {
  return href.startsWith("/") && !href.startsWith("//") && !isAffiliate;
}

function normalizeForCompare(s: string) {
  return s.replace(/\s+/g, " ").replace(/[.]$/g, "").trim().toLowerCase();
}

/** Placement copy pattern: `Onboarding: … Best for: … Watch-outs: …` (NL banking placements). */
type ParsedBankingProviderReason = {
  onboarding: string;
  bestFor: string;
  watchOuts: string;
};

function parseBankingProviderReasonTriplet(reason: string): ParsedBankingProviderReason | null {
  const t = reason.trim();
  const m = t.match(/^onboarding:\s*(.+?)\s*best for:\s*(.+?)\s*watch-outs:\s*(.+)$/is);
  if (!m) return null;
  const onboarding = m[1]?.trim();
  const bestFor = m[2]?.trim();
  const watchOuts = m[3]?.trim();
  if (!onboarding || !bestFor || !watchOuts) return null;
  return { onboarding, bestFor, watchOuts };
}

function BankingProviderReasonDetails({ reason, className }: { reason: string; className?: string }) {
  const parsed = parseBankingProviderReasonTriplet(reason);
  if (!parsed) {
    return <p className={cn("text-sm leading-relaxed text-foreground-muted", className)}>{reason.trim()}</p>;
  }

  const rowClass =
    "rounded-lg border border-copilot-primary/[0.08] bg-gradient-to-b from-copilot-bg-soft/50 to-white/90 px-2.5 py-2 ring-1 ring-copilot-primary/[0.05] sm:px-3 sm:py-2";
  const dtClass = "text-[10px] font-semibold uppercase tracking-[0.12em] text-copilot-primary";
  const ddClass = "mt-1 text-sm leading-snug text-slate-700 sm:leading-relaxed";

  return (
    <dl className={cn("w-full min-w-0 space-y-2 sm:space-y-2", className)}>
      <div className={rowClass}>
        <dt className={dtClass}>Onboarding</dt>
        <dd className={ddClass}>{parsed.onboarding}</dd>
      </div>
      <div className={rowClass}>
        <dt className={dtClass}>Best for</dt>
        <dd className={ddClass}>{parsed.bestFor}</dd>
      </div>
      <div className="rounded-lg border border-slate-200/90 bg-slate-50/90 px-2.5 py-2 ring-1 ring-slate-900/[0.04] sm:px-3 sm:py-2">
        <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Watch-outs</dt>
        <dd className="mt-1 text-sm leading-snug text-slate-700 sm:leading-relaxed">{parsed.watchOuts}</dd>
      </div>
    </dl>
  );
}

/**
 * Monetization-only region: provider cards, disclosures, and tracking-friendly anchors.
 * The main comparison or guide lives outside this component — callers should label the section boundary in copy.
 */
const SURFACE_DEFAULT_CLASS =
  "rounded-2xl border-2 border-dashed border-slate-300/90 bg-slate-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6 md:p-7";
const SURFACE_MUTED_CLASS =
  "rounded-2xl border border-dashed border-border/45 bg-surface-muted/25 p-3 shadow-none ring-1 ring-border/[0.08] sm:p-4 md:p-5";

export function BankingRecommendedOptionsSection({
  placementId,
  analyticsPageContext,
  boundaryNote,
  categoryLinks,
  browseLabel,
  regionIntroLabel,
  utmReferrerPath,
  destinationCountry = "netherlands",
  originCountry,
  surfaceTone = "default",
}: BankingRecommendedOptionsSectionProps) {
  const data = loadPlacementWithProviders(placementId, destinationCountry, originCountry);
  const placement = data?.placement;
  const items = data?.items ?? [];
  const utmContent = utmContentFromPath(utmReferrerPath ?? DEFAULT_UTM_REFERRER_PATH);
  const regionHeadingId = `banking-recommended-options-${placementId}`;
  const boundary = (boundaryNote ?? "").trim();

  if (!placement && categoryLinks.length === 0) return null;

  return (
    <aside
      role="complementary"
      aria-labelledby={regionHeadingId}
      className="relative"
      data-expatcopilot-region="monetization"
      data-monetization-kind="banking-recommended-options"
      data-monetization-placement={placementId}
    >
      <div
        className={surfaceTone === "muted" ? SURFACE_MUTED_CLASS : SURFACE_DEFAULT_CLASS}
        data-monetization-surface="provider-listings"
      >
        <p id={regionHeadingId} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-muted">
          {regionIntroLabel ?? "Outside the main guide"}
        </p>
        {boundary ? (
          <BoldParagraph
            text={boundary}
            className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
          />
        ) : null}

        {items.length > 0 ? (
          <div
            className={cn(
              "grid w-full min-w-0 grid-cols-1 items-start gap-3 sm:gap-4",
              boundary ? "mt-5" : "mt-3",
              items.length >= 3 && "md:grid-cols-3",
              items.length === 2 && "sm:grid-cols-2",
            )}
            data-monetization-cards="true"
            data-monetization-card-count={items.length}
          >
            {items.map((item, index) => {
              const { provider, reason } = item;
              const reasonTrim = reason.trim();
              const taglineTrim = (provider.tagline ?? "").trim();
              const showTaglineSecondary =
                taglineTrim && reasonTrim && normalizeForCompare(taglineTrim) !== normalizeForCompare(reasonTrim);
              const outboundHref = withPartnerReferralUtms(provider.cta.href, {
                partnerSlug: provider.id,
                utmContent,
              });
              const internal = isInternalSiteCta(provider.cta.href, provider.cta.isAffiliate);

              const structured = parseBankingProviderReasonTriplet(reasonTrim);
              const fallbackReasonOnly = !structured && (reasonTrim || taglineTrim);

              return (
                <article
                  key={provider.id}
                  className="flex min-h-0 w-full min-w-0 flex-col rounded-2xl border border-border bg-white/95 p-3 shadow-card ring-1 ring-border/10 sm:p-4"
                  data-monetization-item-index={index}
                  data-provider-id={provider.id}
                  data-monetization-link-mode={provider.cta.isAffiliate ? "affiliate" : "direct"}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <ProviderLogo provider={provider} size="md" />
                    <h3 className="min-w-0 flex-1 text-[0.9375rem] font-semibold leading-tight tracking-tight text-copilot-text-primary sm:text-base">
                      {provider.name}
                    </h3>
                  </div>
                  {structured ? (
                    <BankingProviderReasonDetails reason={reasonTrim} className="mt-2" />
                  ) : fallbackReasonOnly ? (
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{reasonTrim || taglineTrim}</p>
                  ) : null}
                  {showTaglineSecondary ? (
                    <p className="mt-1.5 text-xs leading-snug text-foreground-faint">{taglineTrim}</p>
                  ) : null}

                  <div className="mt-3 flex flex-col gap-1.5 border-t border-dashed border-border/50 pt-3 sm:mt-3.5 sm:pt-3.5">
                    {internal ? (
                      <Link href={provider.cta.href} className={CTA_SOFT}>
                        {provider.cta.label}
                      </Link>
                    ) : (
                      <a
                        href={outboundHref}
                        target="_blank"
                        rel={provider.cta.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                        className={CTA_SOFT}
                        data-outbound-link-type="provider"
                        data-outbound-partner-slug={provider.id}
                        data-outbound-link-text={provider.cta.label}
                        data-outbound-page-context={analyticsPageContext}
                      >
                        {provider.cta.label}
                      </a>
                    )}
                    <span
                      className="text-[10px] leading-snug text-foreground-faint"
                      data-monetization-affiliate-placeholder={provider.cta.isAffiliate ? "inactive" : "eligible"}
                    >
                      {provider.cta.isAffiliate
                        ? "Referral or sponsored link possible — see disclosure below."
                        : "Direct link; partner parameters may be added later without changing the guide above."}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : placement ? (
          <div className="mt-5 rounded-xl border border-border bg-white/80 p-4 text-sm text-foreground-muted ring-1 ring-border/40">
            {placement.intro ? (
              <BoldInline text={placement.intro} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
            ) : (
              <p>Provider cards will appear here when configured for this page.</p>
            )}
          </div>
        ) : null}

        {placement ? (
          <div className="mt-4 border-t border-border/60 pt-4" data-monetization-disclosure="true">
            <AffiliateDisclosure text={placement.disclosure} variant="copilot" />
          </div>
        ) : null}

        {categoryLinks.length > 0 ? (
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted" data-monetization-context-links="true">
            {browseLabel ? <span className="font-medium text-foreground">{browseLabel}</span> : null}
            {categoryLinks.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? <span aria-hidden> · </span> : null}
                <Link href={link.href} className="font-semibold text-link hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </aside>
  );
}

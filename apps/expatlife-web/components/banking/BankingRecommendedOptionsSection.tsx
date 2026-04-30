import Link from "next/link";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { ProviderLogo } from "@/src/components/affiliates/ProviderLogo";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";
import { cn } from "@/lib/cn";

const DEFAULT_UTM_REFERRER_PATH = "/netherlands/money/banking/best-banks-expats/" as const;

const CTA_SOFT =
  "inline-flex min-h-10 w-full max-w-full items-center justify-center rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto";

type CategoryLink = { href: string; label: string };

export type BankingRecommendedOptionsSectionProps = {
  placementId: string;
  analyticsPageContext: string;
  boundaryNote: string;
  categoryLinks: readonly CategoryLink[];
  browseLabel?: string;
  /** Overrides the small uppercase line above the boundary note (default: separate-from-editorial copy). */
  regionIntroLabel?: string;
  /** Canonical path of the page embedding this block — used for referral UTM `utm_content` (defaults to Best Banks). */
  utmReferrerPath?: string;
  destinationCountry?: string;
  originCountry?: string;
};

function isInternalEditorialCta(href: string, isAffiliate: boolean): boolean {
  return href.startsWith("/") && !href.startsWith("//") && !isAffiliate;
}

function normalizeForCompare(s: string) {
  return s.replace(/\s+/g, " ").replace(/[.]$/g, "").trim().toLowerCase();
}

/**
 * Monetization-only region: provider cards, disclosures, and tracking-friendly anchors.
 * Editorial comparison lives outside this component — callers should label the section boundary in copy.
 */
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
}: BankingRecommendedOptionsSectionProps) {
  const data = loadPlacementWithProviders(placementId, destinationCountry, originCountry);
  const placement = data?.placement;
  const items = data?.items ?? [];
  const utmContent = utmContentFromPath(utmReferrerPath ?? DEFAULT_UTM_REFERRER_PATH);
  const regionHeadingId = `banking-recommended-options-${placementId}`;

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
        className="rounded-2xl border-2 border-dashed border-slate-300/90 bg-slate-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6 md:p-7"
        data-monetization-surface="provider-listings"
      >
        <p id={regionHeadingId} className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground-muted">
          {regionIntroLabel ?? "Separate from editorial comparison"}
        </p>
        <BoldParagraph
          text={boundaryNote}
          className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />

        {items.length > 0 ? (
          <div
            className="mt-6 grid gap-4 sm:grid-cols-2"
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
              const internal = isInternalEditorialCta(provider.cta.href, provider.cta.isAffiliate);

              return (
                <article
                  key={provider.id}
                  className="flex flex-col rounded-2xl border border-border bg-white/95 p-4 shadow-card ring-1 ring-border/10 sm:p-5"
                  data-monetization-item-index={index}
                  data-provider-id={provider.id}
                  data-monetization-link-mode={provider.cta.isAffiliate ? "affiliate" : "direct"}
                >
                  <div className="flex gap-3">
                    <ProviderLogo provider={provider} size="md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">{provider.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{reasonTrim || taglineTrim}</p>
                      {showTaglineSecondary ? (
                        <p className="mt-1 text-xs leading-snug text-foreground-faint">{taglineTrim}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 border-t border-dashed border-border/60 pt-4">
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
          <div className="mt-6 border-t border-border/60 pt-5" data-monetization-disclosure="true">
            <AffiliateDisclosure text={placement.disclosure} variant="copilot" />
          </div>
        ) : null}

        {categoryLinks.length > 0 ? (
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted" data-monetization-editorial-links="true">
            <span className="font-medium text-foreground">Editorial: </span>
            {browseLabel ?? ""}
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

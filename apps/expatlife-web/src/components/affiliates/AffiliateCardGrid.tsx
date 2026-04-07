"use client";

import Link from "next/link";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import { ProviderLogo } from "./ProviderLogo";

const ctaButtonClass =
  "inline-flex items-center rounded-xl border-0 bg-copilot-primary px-4 py-2.5 text-sm font-semibold text-white shadow-expatos-sm transition hover:bg-copilot-primary-strong hover:shadow-expatos-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/70 focus-visible:ring-offset-2";

function isInternalEditorialCta(href: string, isAffiliate: boolean): boolean {
  return href.startsWith("/") && !isAffiliate;
}

export type CardItem = {
  provider: AffiliateProvider;
  reason: string;
};

type Props = {
  items: CardItem[];
};

function normalizeForCompare(s: string) {
  return s.replace(/\s+/g, " ").replace(/[.]$/g, "").trim().toLowerCase();
}

function AffiliateCard({ provider, reason }: CardItem) {
  const tagline = (provider.tagline ?? "").trim();
  const reasonTrim = reason.trim();
  const isSameAsTagline =
    tagline && reasonTrim && normalizeForCompare(reasonTrim) === normalizeForCompare(tagline);
  const description = isSameAsTagline ? reasonTrim : tagline || reasonTrim;
  const showReasonBelow = !isSameAsTagline && !!tagline && !!reasonTrim;

  return (
    <article className="rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] transition hover:shadow-expatos-hover sm:p-6 motion-reduce:transition-none">
      <div className="flex gap-4">
        <ProviderLogo provider={provider} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            {provider.badges?.slice(0, 2).map((b, i) => (
              <span
                key={`${provider.id}-badge-${i}`}
                className="rounded-full bg-copilot-bg-soft px-2 py-0.5 text-xs font-medium text-copilot-text-secondary ring-1 ring-copilot-primary/10"
              >
                {b}
              </span>
            ))}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-copilot-text-primary">{provider.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-copilot-text-secondary">{description}</p>
          {showReasonBelow ? (
            <p className="mt-1.5 text-xs text-copilot-text-muted">{reasonTrim}</p>
          ) : null}
          <div className="mt-4">
            {isInternalEditorialCta(provider.cta.href, provider.cta.isAffiliate) ? (
              <Link href={provider.cta.href} className={ctaButtonClass}>
                {provider.cta.label}
              </Link>
            ) : (
              <TrackedExternalLink
                href={provider.cta.href}
                target="_blank"
                rel={provider.cta.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                linkType="provider"
                linkText={provider.cta.label}
                className={ctaButtonClass}
              >
                {provider.cta.label}
              </TrackedExternalLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function AffiliateCardGrid({ items }: Props) {
  if (!items.length) return null;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <AffiliateCard key={item.provider.id} provider={item.provider} reason={item.reason} />
      ))}
    </div>
  );
}

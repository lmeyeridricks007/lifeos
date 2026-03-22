"use client";

import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import { ProviderLogo } from "./ProviderLogo";

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
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div className="flex gap-4">
        <ProviderLogo provider={provider} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            {provider.badges?.slice(0, 2).map((b, i) => (
              <span
                key={`${provider.id}-badge-${i}`}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
              >
                {b}
              </span>
            ))}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{provider.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
          {showReasonBelow ? (
            <p className="mt-1.5 text-xs text-slate-500">{reasonTrim}</p>
          ) : null}
          <div className="mt-4">
            <TrackedExternalLink
              href={provider.cta.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              linkType="provider"
              linkText={provider.cta.label}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              {provider.cta.label}
            </TrackedExternalLink>
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

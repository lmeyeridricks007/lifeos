"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Banknote, Globe, MapPin, ExternalLink } from "lucide-react";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";

/** Resolve logo URL: use apistemic when src is a Clearbit URL (Clearbit API was discontinued). */
function resolveLogoUrl(src: string): string {
  if (src.startsWith("https://logo.clearbit.com/")) {
    const domain = src.replace("https://logo.clearbit.com/", "").replace(/\/$/, "");
    return `https://logos-api.apistemic.com/domain:${domain}`;
  }
  return src;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

const PROVIDER_TYPE_LABELS: Record<string, string> = {
  bank: "Bank",
  "money-service": "Money service",
  "law-firm": "Law firm",
  "relocation-legal": "Relocation + legal",
  boutique: "Boutique",
};

function ProviderLogo({
  src,
  alt,
  name,
}: { src: string; alt: string; name: string }) {
  const [error, setError] = useState(false);
  const resolvedSrc = resolveLogoUrl(src);
  const isExternal = resolvedSrc.startsWith("http");

  if (error) {
    return (
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-200/50 bg-gradient-to-br from-brand-50 to-brand-100/80 text-sm font-semibold text-brand-700"
        aria-hidden
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
      {isExternal ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolvedSrc}
          alt={alt}
          width={48}
          height={48}
          className="h-12 w-12 object-contain p-1"
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : (
        <Image
          src={resolvedSrc}
          alt={alt}
          width={48}
          height={48}
          className="h-12 w-12 object-contain p-1"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export function ProviderCardsGrid({ providers }: { providers: ServiceCategoryProviderCard[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {providers.map((p) => (
        <article
          key={p.slug}
          className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:border-slate-300"
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-brand-400" aria-hidden />

          <div className="pl-5">
            {/* Header: logo, name, type */}
            <div className="flex gap-4 pt-5 pr-5">
              {p.logo?.src ? (
                <ProviderLogo src={p.logo.src} alt={p.logo.alt} name={p.name} />
              ) : (
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-600"
                  aria-hidden
                >
                  {initials(p.name)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  {p.providerType ? (
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      {PROVIDER_TYPE_LABELS[p.providerType] ?? p.providerType}
                    </span>
                  ) : null}
                </div>
                {p.typicalCost ? (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/60 bg-emerald-50/60 px-2.5 py-1 text-sm font-semibold tabular-nums text-emerald-800">
                    <Banknote className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {p.typicalCost}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 pr-5">
              <p className="line-clamp-3 text-sm text-slate-600 leading-relaxed">
                {p.shortDescription}
              </p>
            </div>

            {/* Key details */}
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 pr-5">
              <p className="text-sm text-slate-700">
                <span className="font-medium text-slate-800">Best for:</span>{" "}
                <span className="text-slate-600">{p.bestFor}</span>
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                {p.cityRelevance?.length ? (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {p.cityRelevance.join(", ")}
                  </span>
                ) : null}
                {p.englishSupportNote ? (
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {p.englishSupportNote}
                  </span>
                ) : null}
              </div>
              {p.priceNote ? (
                <p className="text-xs text-slate-500">{p.priceNote}</p>
              ) : null}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 py-4 pr-5">
              {p.reviewComingSoon ? (
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                  Provider review coming soon
                </span>
              ) : (
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  View details
                </Link>
              )}
              {p.externalUrl ? (
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Visit website <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

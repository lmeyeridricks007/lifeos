"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, MapPin, Banknote, CheckCircle2 } from "lucide-react";
import type { RelocationProviderRecord } from "@/src/lib/service-category/types";

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

function ProviderLogo({ logoUrl, name }: { logoUrl?: string; name: string }) {
  const [error, setError] = useState(false);
  const resolvedUrl = logoUrl ? resolveLogoUrl(logoUrl) : undefined;
  if (resolvedUrl && !error) {
    return (
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedUrl}
          alt=""
          className="h-full w-full object-contain p-1"
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-200/50 bg-gradient-to-br from-brand-50 to-brand-100/80 text-xs font-semibold text-brand-700"
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

type Props = {
  providers: RelocationProviderRecord[];
  profileBasePath?: string;
};

export function FeaturedRelocationCards({
  providers,
  profileBasePath = "/netherlands/services/relocation-agencies",
}: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {providers.map((p) => (
        <article
          key={p.slug}
          className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-2.5">
            <ProviderLogo logoUrl={p.logoUrl} name={p.name} />
            <h3 className="font-semibold text-slate-900">{p.name}</h3>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.shortDescription}</p>
          {p.servicesOrProducts && p.servicesOrProducts.length > 0 ? (
            <div className="mt-2">
              <p className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                <CheckCircle2 className="h-3 w-3" aria-hidden />
                Services
              </p>
              <ul className="space-y-0.5 text-xs text-slate-700">
                {p.servicesOrProducts.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="mt-1.5 h-0.5 w-0.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                    {item}
                  </li>
                ))}
                {p.servicesOrProducts.length > 3 ? (
                  <li className="text-slate-500">+{p.servicesOrProducts.length - 3} more</li>
                ) : null}
              </ul>
            </div>
          ) : null}
          {p.typicalCost ? (
            <div className="mt-2 flex items-start gap-1.5 rounded-md border border-slate-100 bg-slate-50/80 px-2 py-1.5">
              <Banknote className="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden />
              <span className="line-clamp-2 text-xs text-slate-700">{p.typicalCost}</span>
            </div>
          ) : null}
          {p.cityRelevance.length > 0 ? (
            <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden />
              {p.cityRelevance.slice(0, 2).join(", ")}
              {p.cityRelevance.length > 2 ? "…" : ""}
            </p>
          ) : null}
          <p className="mt-0.5 text-xs text-slate-500">Source: {p.sourceEcosystems.join(", ")}</p>
          <div className="mt-auto flex flex-col gap-1.5 pt-3">
            {p.providerUrl ? (
              <a
                href={p.providerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Visit provider <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
            <Link
              href={`${profileBasePath}/${p.slug}/`}
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-2 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
            >
              View details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

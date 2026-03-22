"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Briefcase, Building2, Copy, Check } from "lucide-react";
import type { FeaturedSponsorExample } from "@/src/lib/service-category/types";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";

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

function SponsorLogo({
  logoUrl,
  name,
}: { logoUrl?: string; name: string }) {
  const [error, setError] = useState(false);
  const resolvedUrl = logoUrl ? resolveLogoUrl(logoUrl) : undefined;
  if (resolvedUrl && !error) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {resolvedUrl.startsWith("http") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolvedUrl}
            alt=""
            className="h-full w-full object-contain p-1.5"
            onError={() => setError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <Image
            src={resolvedUrl}
            alt=""
            fill
            className="object-contain p-1.5"
            onError={() => setError(true)}
            sizes="56px"
          />
        )}
      </div>
    );
  }
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-200/50 bg-gradient-to-br from-brand-50 to-brand-100/80 text-lg font-semibold text-brand-700"
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

type Props = {
  sponsors: FeaturedSponsorExample[];
  profileBasePath?: string;
};

export function FeaturedSponsorCards({
  sponsors,
  profileBasePath = "/netherlands/services/highly-skilled-migrant-sponsors",
}: Props) {
  const [copiedKvk, setCopiedKvk] = useState<string | null>(null);
  const copyKvk = (kvk: string) => {
    navigator.clipboard.writeText(kvk).then(() => {
      setCopiedKvk(kvk);
      setTimeout(() => setCopiedKvk(null), 2000);
    });
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sponsors.map((s, i) => (
          <article
            key={s.kvkNumber + i}
            className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex gap-4 p-5">
              <SponsorLogo logoUrl={s.logoUrl} name={s.name} />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                <div className="mt-1.5 flex items-center gap-2">
                  <code className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-700">
                    KvK {s.kvkNumber}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyKvk(s.kvkNumber)}
                    className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                    title="Copy KvK number"
                  >
                    {copiedKvk === s.kvkNumber ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {s.description ? (
              <p className="px-5 pb-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                {s.description}
              </p>
            ) : null}
            <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 p-4 pt-3">
              {s.websiteUrl ? (
                <TrackedExternalLink
                  href={s.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  linkType="provider"
                  linkText="Visit website"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  <Building2 className="h-3.5 w-3.5" />
                  Visit website
                  <ExternalLink className="h-3 w-3" />
                </TrackedExternalLink>
              ) : null}
              {s.careersUrl ? (
                <TrackedExternalLink
                  href={s.careersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  linkType="provider"
                  linkText="Careers"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  Careers
                  <ExternalLink className="h-3 w-3" />
                </TrackedExternalLink>
              ) : null}
            </div>
          </article>
      ))}
    </div>
  );
}

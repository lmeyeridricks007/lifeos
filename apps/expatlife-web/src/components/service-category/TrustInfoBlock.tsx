import { Shield, Landmark, Coins, ExternalLink } from "lucide-react";
import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";

export function TrustInfoBlock({
  trustBlock,
}: {
  trustBlock: NonNullable<ServiceCategoryPageData["trustBlock"]>;
}) {
  return (
    <div className="rounded-xl border border-slate-200 border-l-4 border-l-emerald-500 bg-white shadow-sm">
      <div className="p-5">
        {/* Highlight with icon */}
        {trustBlock.highlight ? (
          <div className="flex gap-3 rounded-lg bg-emerald-50/80 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600" aria-hidden>
              <Shield className="h-5 w-5" />
            </div>
            <p className="text-base font-medium text-slate-800 leading-relaxed">
              {trustBlock.highlight}
            </p>
          </div>
        ) : null}

        {/* Key figure: €100,000 coverage */}
        {trustBlock.highlight?.includes("€100,000") || trustBlock.paragraphs.some((p) => p.includes("€100,000")) ? (
          <div className="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600" aria-hidden>
              <Coins className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Coverage per person, per bank</p>
              <p className="text-2xl font-bold tabular-nums text-emerald-700">€100,000</p>
              <p className="mt-0.5 text-xs text-slate-600">From 1 cent up to this amount — legally protected</p>
            </div>
          </div>
        ) : null}

        {/* DNB / administrator callout if mentioned */}
        {trustBlock.paragraphs.some((p) => p.includes("DNB") || p.includes("De Nederlandsche Bank")) ? (
          <div className="mt-4 flex gap-3 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-600" aria-hidden>
              <Landmark className="h-4 w-4" />
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">De Nederlandsche Bank (DNB)</strong> administers the scheme. If a bank fails, eligible deposits are protected by law.
            </p>
          </div>
        ) : null}

        {/* Remaining paragraphs: skip DNB admin (shown above) and "You can check" if we have a link */}
        {trustBlock.paragraphs
          .filter(
            (p) =>
              !p.includes("De Nederlandsche Bank (DNB) administers") &&
              !(trustBlock.link && p.includes("public register"))
          )
          .map((p, i) => (
            <p key={i} className="mt-3 text-sm text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}

        {/* CTA link */}
        {trustBlock.link ? (
          <div className="mt-4">
            <a
              href={trustBlock.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4 text-slate-500" aria-hidden />
              {trustBlock.link.label}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

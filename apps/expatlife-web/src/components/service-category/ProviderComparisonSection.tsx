"use client";

import Link from "next/link";
import { useState, useMemo, useRef, useCallback } from "react";
import { Check, X, Banknote, User, Package, Plus, Trash2, LayoutGrid, MapPin } from "lucide-react";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";

const PROVIDER_TYPE_LABELS: Record<string, string> = {
  bank: "Bank",
  "money-service": "Money service",
  "law-firm": "Law firm",
  "relocation-legal": "Relocation + legal",
  boutique: "Boutique",
};

const MAX_SHORTLIST = 3;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function ProviderLogoSmall({
  src,
  alt,
  name,
  size = "md",
}: { src: string; alt: string; name: string; size?: "sm" | "md" }) {
  const [error, setError] = useState(false);
  const resolvedSrc = normalizeExternalProviderLogoSrc(src);
  const dim = size === "sm" ? 32 : 40;
  const sizeClass = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const textClass = size === "sm" ? "text-[10px]" : "text-xs";
  if (error) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100/80 font-semibold text-brand-700 ring-1 ring-brand-200/50 ${sizeClass} ${textClass}`}
        aria-hidden
      >
        {initials(name)}
      </div>
    );
  }
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white ${sizeClass}`}>
      {/* Use img for all logos so local SVGs (e.g. health insurance, banks) display; next/image can block SVG. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolvedSrc}
        alt={alt}
        width={dim}
        height={dim}
        className={`${sizeClass} object-contain p-0.5`}
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
}

function providerMatchesFilters(p: ServiceCategoryProviderCard, activeFilters: string[]): boolean {
  if (activeFilters.length === 0) return true;
  const typeFilters = activeFilters.filter((id) => id in PROVIDER_TYPE_LABELS);
  const locationFilters = activeFilters.filter(
    (id) => id !== "english" && id !== "featured" && !(id in PROVIDER_TYPE_LABELS)
  );
  const englishOnly = activeFilters.includes("english");
  const featuredOnly = activeFilters.includes("featured");

  if (typeFilters.length > 0) {
    const providerType = p.providerType ?? "";
    if (!typeFilters.includes(providerType)) return false;
  }
  if (locationFilters.length > 0) {
    const cities = p.cityRelevance ?? [];
    if (!locationFilters.some((loc) => cities.includes(loc))) return false;
  }
  if (englishOnly && !p.englishSupportNote) return false;
  if (featuredOnly && !p.isFeatured) return false;
  return true;
}

function ProviderCardContent({ p }: { p: ServiceCategoryProviderCard }) {
  return (
    <>
      <div className="mt-5 space-y-4 border-t border-slate-200 pt-5">
        {p.typicalCost ? (
          <div className="flex items-start gap-3 rounded-lg border border-emerald-200/60 bg-emerald-50/50 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600" aria-hidden>
              <Banknote className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Typical cost</p>
              <p className="mt-0.5 text-base font-semibold tabular-nums text-slate-900">{p.typicalCost}</p>
              {p.priceNote ? <p className="mt-0.5 text-xs text-slate-600">{p.priceNote}</p> : null}
            </div>
          </div>
        ) : null}

        {p.features && p.features.length > 0 ? (
          <div className="rounded-lg border border-slate-200/80 bg-slate-50/50 p-3">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-200/80 text-slate-600" aria-hidden>
                <Package className="h-3.5 w-3.5" />
              </span>
              Features / products
            </p>
            <ul className="mt-2 list-inside list-disc space-y-0.5 pl-1 text-sm text-slate-700">
              {p.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {p.pros && p.pros.length > 0 ? (
          <div className="rounded-lg border border-emerald-200/60 bg-emerald-50/30 p-3">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-600" aria-hidden>
                <Check className="h-3.5 w-3.5" />
              </span>
              Pros
            </p>
            <ul className="mt-2 list-inside list-disc space-y-0.5 pl-1 text-sm text-slate-700">
              {p.pros.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {p.cons && p.cons.length > 0 ? (
          <div className="rounded-lg border border-amber-200/60 bg-amber-50/30 p-3">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-100 text-amber-600" aria-hidden>
                <X className="h-3.5 w-3.5" />
              </span>
              Cons
            </p>
            <ul className="mt-2 list-inside list-disc space-y-0.5 pl-1 text-sm text-slate-700">
              {p.cons.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {p.whoShouldChoose ? (
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-brand-500 bg-brand-50/40 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600" aria-hidden>
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-800">Who should choose them</p>
              <p className="mt-0.5 text-sm text-slate-700 leading-relaxed">{p.whoShouldChoose}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
        {p.externalUrl ? (
          <TrackedExternalLink
            href={p.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            linkType="provider"
            partnerSlug={p.slug}
            linkText="Visit provider"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            Visit provider →
          </TrackedExternalLink>
        ) : null}
        {!p.reviewComingSoon && p.href ? (
          <Link
            href={p.href}
            className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-200"
          >
            Full review →
          </Link>
        ) : null}
      </div>
    </>
  );
}

export function ProviderComparisonSection({
  providers,
  sectionTitle = "Compare providers",
  sectionIntro,
  shortlist: controlledShortlist,
  onShortlistChange,
}: {
  providers: ServiceCategoryProviderCard[];
  sectionTitle?: string;
  sectionIntro?: string;
  /** When provided with onShortlistChange, shortlist is controlled (e.g. shared with directory). */
  shortlist?: string[];
  onShortlistChange?: (shortlist: string[]) => void;
}) {
  const [internalShortlist, setInternalShortlist] = useState<string[]>([]);
  const isControlled = controlledShortlist != null && onShortlistChange != null;
  const shortlist = isControlled ? controlledShortlist : internalShortlist;
  const shortlistRef = useRef(shortlist);
  shortlistRef.current = shortlist;

  const withComparison = useMemo(
    () =>
      providers.filter(
        (p) =>
          p.shortDescription ||
          (p.pros?.length ?? 0) > 0 ||
          (p.cons?.length ?? 0) > 0 ||
          p.whoShouldChoose ||
          p.typicalCost ||
          (p.features?.length ?? 0) > 0
      ),
    [providers]
  );

  const availableFilters = useMemo(() => {
    const types = new Set<string>();
    const locations = new Set<string>();
    let hasEnglish = false;
    let hasFeatured = false;
    withComparison.forEach((p) => {
      if (p.providerType) types.add(p.providerType);
      (p.cityRelevance ?? []).forEach((c) => locations.add(c));
      if (p.englishSupportNote) hasEnglish = true;
      if (p.isFeatured) hasFeatured = true;
    });
    const list: { id: string; label: string }[] = [];
    types.forEach((t) => list.push({ id: t, label: PROVIDER_TYPE_LABELS[t] ?? t }));
    Array.from(locations)
      .sort((a, b) => a.localeCompare(b))
      .forEach((loc) => list.push({ id: loc, label: loc }));
    if (hasEnglish) list.push({ id: "english", label: "English support" });
    if (hasFeatured) list.push({ id: "featured", label: "Featured only" });
    return list;
  }, [withComparison]);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredProviders = useMemo(
    () => withComparison.filter((p) => providerMatchesFilters(p, activeFilters)),
    [withComparison, activeFilters]
  );

  const shortlistedProviders = useMemo(
    () => shortlist.map((slug) => withComparison.find((p) => p.slug === slug)).filter(Boolean) as ServiceCategoryProviderCard[],
    [withComparison, shortlist]
  );

  const handleFilterChange = useCallback((id: string, checked: boolean) => {
    setActiveFilters((prev) =>
      checked ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter((f) => f !== id)
    );
  }, []);

  const addToShortlist = useCallback(
    (slug: string) => {
      const prev = shortlistRef.current;
      if (prev.includes(slug) || prev.length >= MAX_SHORTLIST) return;
      const next = [...prev, slug];
      if (isControlled && onShortlistChange) {
        onShortlistChange(next);
      } else {
        setInternalShortlist(next);
      }
    },
    [isControlled, onShortlistChange]
  );

  const removeFromShortlist = useCallback(
    (slug: string) => {
      const next = shortlistRef.current.filter((s) => s !== slug);
      if (isControlled && onShortlistChange) {
        onShortlistChange(next);
      } else {
        setInternalShortlist(next);
      }
    },
    [isControlled, onShortlistChange]
  );

  if (withComparison.length === 0) return null;

  return (
    <section id="compare-providers" className="mt-12 scroll-mt-28 space-y-6 sm:scroll-mt-24">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sectionTitle}</h2>
        {sectionIntro ? (
          <p className="mt-2 text-slate-700 leading-relaxed">{sectionIntro}</p>
        ) : null}
      </div>

      {/* Shortlist bar */}
      <div className="rounded-xl border border-slate-200 border-l-4 border-l-brand-500 bg-gradient-to-r from-brand-50/60 to-slate-50/80 p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600" aria-hidden>
              <LayoutGrid className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Your comparison shortlist</p>
              <p className="text-xs text-slate-600">
                {shortlist.length === 0
                  ? "Add up to 3 providers below to compare them side by side"
                  : `${shortlist.length} of ${MAX_SHORTLIST} selected`}
              </p>
            </div>
          </div>
          {shortlistedProviders.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {shortlistedProviders.map((p) => (
                <span
                  key={p.slug}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white py-1.5 pl-1.5 pr-2 shadow-sm ring-1 ring-slate-900/5"
                >
                  {p.logo?.src ? (
                    <ProviderLogoSmall src={p.logo.src} alt={p.logo.alt} name={p.name} size="sm" />
                  ) : (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600" aria-hidden>
                      {initials(p.name)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-slate-800">{p.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFromShortlist(p.slug)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label={`Remove ${p.name} from shortlist`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Side-by-side comparison (when 1–3 in shortlist) */}
      {shortlistedProviders.length >= 1 && shortlistedProviders.length <= MAX_SHORTLIST ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/30 p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <LayoutGrid className="h-5 w-5 text-brand-600" aria-hidden />
            Compare side by side
          </h3>
          <div
            className={`grid gap-5 grid-cols-1 ${shortlistedProviders.length >= 2 ? "md:grid-cols-2" : ""} ${shortlistedProviders.length === 3 ? "lg:grid-cols-3" : ""}`}
          >
            {shortlistedProviders.map((p) => (
              <article key={p.slug} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-brand-500 bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-slate-50/80 px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {p.logo?.src ? (
                        <ProviderLogoSmall src={p.logo.src} alt={p.logo.alt} name={p.name} />
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600" aria-hidden>
                          {initials(p.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-slate-900">{p.name}</h4>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5">
                          {p.providerType ? (
                            <span className="inline-block rounded-md bg-slate-200/80 px-2 py-0.5 text-xs font-medium text-slate-600">
                              {PROVIDER_TYPE_LABELS[p.providerType] ?? p.providerType}
                            </span>
                          ) : null}
                          {p.cityRelevance && p.cityRelevance.length > 0 ? (
                            <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                              {p.cityRelevance.slice(0, 4).join(", ")}
                              {p.cityRelevance.length > 4 ? " …" : ""}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromShortlist(p.slug)}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      aria-label={`Remove ${p.name} from comparison`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {p.shortDescription ? (
                    <p className="text-sm text-slate-600 leading-relaxed">{p.shortDescription}</p>
                  ) : null}
                  <ProviderCardContent p={p} />
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {/* Filters */}
      {availableFilters.length > 0 ? (
        <div className="min-w-0 rounded-xl border border-slate-200 bg-slate-50/90 p-3 sm:border-0 sm:bg-transparent sm:p-0">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
            <span className="shrink-0 text-sm font-medium text-slate-600">Filter:</span>
            <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
              {availableFilters.map((f) => (
                <label
                  key={f.id}
                  className="inline-flex min-h-[44px] max-w-full cursor-pointer items-center gap-3 rounded-lg py-1 pr-1 sm:min-h-0 sm:py-0"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(f.id)}
                    onChange={(e) => handleFilterChange(f.id, e.target.checked)}
                    className="h-5 w-5 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    aria-label={`Filter by ${f.label}`}
                  />
                  <span className="min-w-0 break-words text-sm text-slate-700">{f.label}</span>
                </label>
              ))}
            </div>
            {activeFilters.length > 0 ? (
              <button
                type="button"
                onClick={() => setActiveFilters([])}
                className="min-h-[44px] self-start rounded-md text-left text-sm font-medium text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 sm:min-h-0"
              >
                Clear all filters
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Provider grid with add/remove shortlist */}
      {filteredProviders.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-5 py-8 text-center">
          <p className="text-sm font-medium text-slate-700">No providers match the current filters.</p>
          <p className="mt-1 text-sm text-slate-600">Try clearing one or more filters to see more options.</p>
          <button
            type="button"
            onClick={() => setActiveFilters([])}
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            Clear all filters
          </button>
        </div>
      ) : (
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {filteredProviders.map((p) => {
          const inShortlist = shortlist.includes(p.slug);
          const canAdd = !inShortlist && shortlist.length < MAX_SHORTLIST;
          return (
            <article
              key={p.slug}
              className="flex flex-col rounded-xl border border-slate-200 border-l-4 border-l-slate-300 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                {p.logo?.src ? (
                  <ProviderLogoSmall src={p.logo.src} alt={p.logo.alt} name={p.name} />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600" aria-hidden>
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
                  {p.cityRelevance && p.cityRelevance.length > 0 ? (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {p.cityRelevance.slice(0, 4).join(", ")}
                      {p.cityRelevance.length > 4 ? " …" : ""}
                    </p>
                  ) : null}
                  {p.shortDescription ? (
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.shortDescription}</p>
                  ) : null}
                </div>
              </div>

              <ProviderCardContent p={p} />

              <div className="mt-5 border-t border-slate-200 pt-5">
                {inShortlist ? (
                  <button
                    type="button"
                    onClick={() => removeFromShortlist(p.slug)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm font-medium text-amber-800 shadow-sm hover:bg-amber-100"
                  >
                    <Trash2 className="h-4 w-4" /> Remove from compare
                  </button>
                ) : canAdd ? (
                  <button
                    type="button"
                    onClick={() => addToShortlist(p.slug)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border-2 border-brand-400 bg-brand-500 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
                  >
                    <Plus className="h-4 w-4" /> Add to compare
                  </button>
                ) : (
                  <span className="text-sm text-slate-500">Shortlist full (max {MAX_SHORTLIST}). Remove one to add another.</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
      )}
    </section>
  );
}

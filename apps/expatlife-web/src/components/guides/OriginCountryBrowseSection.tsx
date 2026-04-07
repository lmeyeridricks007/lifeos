"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { CardLink } from "@/components/ui/card-link";
import type { OriginCountryGuideEntry, OriginCountryRegion } from "@/src/lib/countries/originCountryGuides";

const REGIONS: { value: OriginCountryRegion | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Europe", label: "Europe" },
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "North America", label: "North America" },
  { value: "South America", label: "South America" },
  { value: "Oceania", label: "Oceania" },
  { value: "Middle East", label: "Middle East" },
];

/** Convert ISO 3166-1 alpha-2 code to flag emoji. */
function toFlagEmoji(code: string): string {
  if (!code || code.length !== 2) return "";
  return code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

type Props = {
  items: OriginCountryGuideEntry[];
  title: string;
  subheading?: string;
  /** Section id for anchor / On this page. */
  id?: string;
  /** Optional outer section classes (e.g. trim padding when nested in a pillar surface). */
  className?: string;
};

function matchesSearch(entry: OriginCountryGuideEntry, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return (
    entry.countryName.toLowerCase().includes(q) ||
    entry.shortName.toLowerCase().includes(q) ||
    entry.region.toLowerCase().includes(q) ||
    entry.slug.replace(/-/g, " ").includes(q)
  );
}

export function OriginCountryBrowseSection({ items, title, subheading, id: sectionId, className }: Props) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<OriginCountryRegion | "all">("all");

  const filtered = useMemo(() => {
    return items.filter(
      (e) =>
        matchesSearch(e, search) &&
        (region === "all" || e.region === region)
    );
  }, [items, search, region]);

  const byRegion = useMemo(() => {
    const map = new Map<OriginCountryRegion, OriginCountryGuideEntry[]>();
    filtered.forEach((e) => {
      const list = map.get(e.region) ?? [];
      list.push(e);
      map.set(e.region, list);
    });
    return map;
  }, [filtered]);

  const regionsWithResults = REGIONS.filter(
    (r) => r.value === "all" || byRegion.get(r.value as OriginCountryRegion)?.length
  );

  return (
    <section id={sectionId} className={cn("py-6 sm:py-8 md:py-12", className)}>
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl md:text-3xl">
          {title}
        </h2>
        {subheading && (
          <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary md:text-base">
            {subheading}
          </p>
        )}
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label htmlFor="country-search" className="sr-only">
            Search by country
          </label>
          <input
            id="country-search"
            type="search"
            placeholder="Search by country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-900/10 bg-copilot-surface px-4 py-2.5 text-sm text-copilot-text-primary shadow-expatos-sm placeholder:text-copilot-text-muted focus:border-copilot-primary focus:outline-none focus:ring-2 focus:ring-copilot-primary/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {regionsWithResults.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => setRegion(r.value as OriginCountryRegion | "all")}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-semibold transition motion-reduce:transition-none",
                region === r.value
                  ? "bg-copilot-primary text-white shadow-expatos-sm ring-1 ring-copilot-primary/20"
                  : "bg-copilot-bg-soft text-copilot-text-secondary ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-light"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-copilot-text-secondary">No country guides match your search.</p>
      ) : region === "all" ? (
        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => {
            const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
            const icon = flagEmoji ? <span className="text-xl leading-none" aria-hidden>{flagEmoji}</span> : undefined;
            return (
              <li key={entry.slug}>
                <CardLink
                  href={entry.href}
                  title={entry.title}
                  description={entry.shortDescription}
                  meta={entry.region}
                  icon={icon}
                  status={entry.isPublished ? undefined : "coming_soon"}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {(byRegion.get(region) ?? []).map((entry) => {
              const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
              const icon = flagEmoji ? <span className="text-xl leading-none" aria-hidden>{flagEmoji}</span> : undefined;
              return (
                <li key={entry.slug}>
                  <CardLink
                    href={entry.href}
                    title={entry.title}
                    description={entry.shortDescription}
                    meta={entry.region}
                    icon={icon}
                    status={entry.isPublished ? undefined : "coming_soon"}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

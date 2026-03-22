"use client";

import Link from "next/link";
import { CardLink } from "@/components/ui/card-link";
import { Container } from "@/components/ui/container";
import type { OriginCountryGuideEntry } from "@/src/lib/countries/originCountryGuides";

export type OriginCountryGuideGridProps = {
  title: string;
  intro?: string;
  items: OriginCountryGuideEntry[];
  /** Max number of cards to show (e.g. 4–6 on hub, 3–4 on tools). */
  limit?: number;
  /** Show "View all country guides" CTA linking to index. */
  showViewAll?: boolean;
  /** Compact cards (e.g. for sidebar or tool pages). */
  compact?: boolean;
  /** Card layout: default (grid) or list. */
  cardVariant?: "default" | "compact";
  /** Optional section id for anchor links (e.g. moving-from-your-country). */
  id?: string;
  /** When true (default), wrap content in Container to match page template width. */
  contained?: boolean;
};

const COUNTRY_INDEX_HREF = "/netherlands/moving-to-netherlands-from";

/** Convert ISO 3166-1 alpha-2 code to flag emoji (e.g. "gb" → 🇬🇧). */
function toFlagEmoji(code: string): string {
  if (!code || code.length !== 2) return "";
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export function OriginCountryGuideGrid({
  title,
  intro,
  items,
  limit,
  showViewAll = true,
  compact = false,
  cardVariant = "default",
  id,
  contained = true,
}: OriginCountryGuideGridProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems.length) return null;

  const gridClass = compact
    ? "grid gap-3 sm:grid-cols-2"
    : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";

  const content = (
    <>
      <div className="mb-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="max-w-3xl text-sm text-slate-600 md:text-base">{intro}</p>
        )}
      </div>
      <ul className={`${gridClass} list-none p-0`}>
        {displayItems.map((entry) => {
          const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
          const icon = flagEmoji ? (
            <span className="text-xl leading-none" aria-hidden>
              {flagEmoji}
            </span>
          ) : undefined;
          return (
            <li key={entry.slug}>
              <CardLink
                href={entry.href}
                title={entry.title}
                description={entry.shortDescription}
                meta={compact ? undefined : entry.supportingNote}
                icon={icon}
                className={compact ? "p-4" : undefined}
              />
            </li>
          );
        })}
      </ul>
      {showViewAll && displayItems.length > 0 && (
        <p className="mt-6">
          <Link
            href={COUNTRY_INDEX_HREF}
            className="font-medium text-brand-600 hover:text-brand-700 hover:underline"
          >
            View all country guides →
          </Link>
        </p>
      )}
    </>
  );

  return (
    <section id={id} className="py-6 sm:py-8 md:py-10">
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}

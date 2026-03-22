"use client";

import Link from "next/link";
import type { ServiceCategoryHero as HeroType } from "@/src/lib/service-category/types";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";

export type ServiceCategoryHeroActionBarProps = {
  url: string;
  title: string;
  pageId: string;
};

export function ServiceCategoryHero({
  hero,
  actionBar,
}: {
  hero: HeroType;
  /** Save, copy link, and social share — same pattern as guide/pillar headers. */
  actionBar?: ServiceCategoryHeroActionBarProps;
}) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);

  return (
    <header className="space-y-6">
      {hero.eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">
          {hero.eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {hero.title}
      </h1>
      <p className="text-base text-slate-600 md:text-lg">
        {hero.subtitle}
      </p>
      {actionBar ? (
        <ContentActionBar
          url={actionBar.url}
          title={actionBar.title}
          pageId={actionBar.pageId}
          variant="top"
          className="mt-4"
        />
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        {primaryCtas.map((cta) =>
          cta.href.startsWith("#") ? (
            <a
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>→</span>
            </a>
          ) : (
            <Link
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>→</span>
            </Link>
          )
        )}
        {secondaryCtas.map((cta) => (
          <a
            key={cta.href}
            href={cta.href}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {cta.label}
          </a>
        ))}
      </div>
      {hero.image?.src ? (
        <div className="mt-6 w-full">
          <ContentHeroMedia
            image={{
              src: hero.image.src,
              alt: hero.image.alt,
              caption: hero.image.caption,
              priority: true,
              width: 1200,
              height: 630,
            }}
            aspectClass="aspect-video md:aspect-[21/9]"
          />
        </div>
      ) : null}
    </header>
  );
}

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
      <h1 className="text-3xl font-semibold tracking-tight text-copilot-text-primary sm:text-4xl md:text-5xl">
        {hero.title}
      </h1>
      <p className="text-base text-copilot-text-secondary md:text-lg">
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
              className="inline-flex items-center rounded-xl bg-copilot-primary px-6 py-3 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>→</span>
            </a>
          ) : (
            <Link
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center rounded-xl bg-copilot-primary px-6 py-3 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover"
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
            className="inline-flex items-center rounded-xl border border-slate-900/12 bg-copilot-surface px-5 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-soft"
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

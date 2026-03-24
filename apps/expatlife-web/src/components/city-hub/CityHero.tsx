import Link from "next/link";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import type { CityHubHero } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function CityHero({ hero }: { hero: CityHubHero }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);

  return (
    <header className="space-y-6">
      {hero.eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">
          {hero.eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl max-w-5xl">
        {hero.title}
      </h1>
      <p className="max-w-5xl text-base text-slate-600 md:text-lg">
        {hero.subtitle}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {primaryCtas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            {cta.label}
            <span className="ml-1" aria-hidden>→</span>
          </Link>
        ))}
        {secondaryCtas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {cta.label}
          </Link>
        ))}
      </div>
      {hero.image?.src ? (
        <div className="mt-6 w-full">
          <ContentHeroMedia
            image={{
              src: hero.image.src,
              alt: hero.image.alt,
              caption: hero.image.caption,
              priority: hero.image.priority ?? true,
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

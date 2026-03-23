import Link from "next/link";
import type { CitiesOverviewHero } from "@/src/lib/cities-overview/types";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import { cn } from "@/lib/cn";

export function CitiesOverviewHero({ hero }: { hero: CitiesOverviewHero }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);
  const hasImage = Boolean(hero.image?.src);

  const textBlock = (
    <div className="space-y-6">
      {hero.eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">
          {hero.eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-5xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {hero.title}
      </h1>
      <p className="max-w-2xl text-base text-slate-600 md:text-lg md:leading-relaxed">{hero.subtitle}</p>
      <div className="flex flex-wrap items-center gap-3">
        {primaryCtas.map((cta) =>
          cta.href.startsWith("#") ? (
            <a
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>
                →
              </span>
            </a>
          ) : (
            <Link
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
          )
        )}
        {secondaryCtas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const imageBlock =
    hasImage && hero.image ? (
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100/60 via-sky-100/40 to-amber-100/50 blur-2xl md:-inset-6"
          aria-hidden
        />
        <ContentHeroMedia
          image={{
            src: hero.image.src,
            alt: hero.image.alt,
            caption: hero.image.caption,
            priority: true,
            width: 1200,
            height: 630,
          }}
          aspectClass={cn(
            "aspect-[4/3] sm:aspect-[5/4]",
            "lg:aspect-[3/4] xl:aspect-[3/4] min-[1400px]:aspect-[4/5]"
          )}
          imageClassName="object-[50%_44%] sm:object-[50%_42%]"
          className="shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200/90"
        />
      </div>
    ) : null;

  if (!hasImage) {
    return <header className="space-y-6">{textBlock}</header>;
  }

  return (
    <header className="space-y-8">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)] lg:gap-12">
        <div className="order-2 lg:order-1">{textBlock}</div>
        <div className="order-1 lg:order-2">{imageBlock}</div>
      </div>
    </header>
  );
}

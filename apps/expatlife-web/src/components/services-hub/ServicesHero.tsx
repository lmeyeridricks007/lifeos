import Link from "next/link";
import type { ServicesHubHero as ServicesHeroType } from "@/src/lib/services-hub/types";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";

export function ServicesHero({ hero }: { hero: ServicesHeroType }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);

  return (
    <header className="space-y-6">
      {hero.eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">
          {hero.eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-5xl text-2xl font-bold tracking-tight text-copilot-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
        {hero.title}
      </h1>
      <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-copilot-text-secondary sm:max-w-3xl sm:text-base md:text-lg">
        {hero.subtitle}
      </p>
      <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
        {primaryCtas.map((cta) =>
          cta.href.startsWith("#") ? (
            <a
              key={cta.href}
              href={cta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>→</span>
            </a>
          ) : (
            <Link
              key={cta.href}
              href={cta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
            >
              {cta.label}
              <span className="ml-1" aria-hidden>→</span>
            </Link>
          )
        )}
        {secondaryCtas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-900/12 bg-copilot-surface px-5 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-soft sm:w-auto"
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

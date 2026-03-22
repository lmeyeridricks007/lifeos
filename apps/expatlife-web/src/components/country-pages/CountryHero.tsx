import Link from "next/link";

export function CountryHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  heroImageSrc,
}: {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageSrc?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-[1fr_340px] lg:px-8">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:mt-4">{subtitle}</p>
          <div className="mt-5 flex w-full min-w-0 flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 sm:w-auto"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {heroImageSrc ? (
          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
            {/* Fixed aspect avoids CLS while the image loads */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
              <img
                src={heroImageSrc}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


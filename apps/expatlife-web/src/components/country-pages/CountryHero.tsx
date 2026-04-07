import Image from "next/image";
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
    <section className="bg-gradient-to-b from-surface-muted to-surface-raised py-8 sm:py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-[1fr_340px] lg:px-8">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-base text-foreground-muted sm:mt-4">{subtitle}</p>
          <div className="mt-5 flex w-full min-w-0 flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-card hover:bg-brand-strong sm:w-auto"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-border-strong bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-muted sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {heroImageSrc ? (
          <div className="min-w-0 overflow-hidden rounded-card border border-border bg-surface-raised p-2">
            {/* Fixed aspect avoids CLS while the image loads */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-muted">
              <Image
                src={heroImageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
                unoptimized={!heroImageSrc.startsWith("/")}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


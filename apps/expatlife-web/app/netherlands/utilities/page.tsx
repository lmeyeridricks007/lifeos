import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { utilitiesNetherlandsPage as guide } from "@/src/components/utilities/utilitiesNetherlandsPageModel";
import { energyAndWaterNetherlandsPage as energyGuide } from "@/src/components/utilities/energyAndWaterNetherlandsPageModel";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: "Utilities in the Netherlands | Guides for Expats",
  description:
    "Start here for Dutch utility setup guides covering electricity, gas, water, internet, mobile services, waste collection and utility costs.",
  alternates: { canonical: guide.hubPath },
  openGraph: {
    title: "Utilities in the Netherlands | Guides for Expats",
    description:
      "Start here for Dutch utility setup guides covering electricity, gas, water, internet, mobile services, waste collection and utility costs.",
    type: "website",
    url: guide.hubPath,
    images: [guide.hero.image.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utilities in the Netherlands | Guides for Expats",
    description: "Dutch utilities setup guides for expats and newcomers.",
    images: [guide.hero.image.src],
  },
};

const futureGuides = [
  { label: "Electricity Netherlands", href: "/netherlands/utilities/electricity-netherlands/" },
  { label: "Gas Netherlands", href: "/netherlands/utilities/gas-netherlands/" },
  { label: "Water Netherlands", href: "/netherlands/utilities/water-netherlands/" },
  { label: "District Heating Netherlands", href: "/netherlands/utilities/district-heating-netherlands/" },
  { label: "Internet Providers Netherlands", href: "/netherlands/utilities/internet-providers-netherlands/" },
  { label: "Mobile Providers Netherlands", href: "/netherlands/utilities/mobile-providers-netherlands/" },
  { label: "Energy Providers Netherlands", href: "/netherlands/utilities/energy-providers-netherlands/" },
];

const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);

export default function UtilitiesHubPage() {
  return (
    <>
      <WebPageJsonLd name="Utilities in the Netherlands" description={metadata.description ?? ""} urlPath={guide.hubPath} />
      <div className={sitePageCanvasClass}>
        <section className={cn("relative overflow-hidden", siteHeroFramedShellClass)}>
          <div className={siteHeroTopAccentClass} aria-hidden />
          <div className={siteHeroGlowPrimaryClass} aria-hidden />
          <div className={siteHeroGlowSecondaryClass} aria-hidden />
          <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(420px,0.95fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">Utilities hub</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Utilities in the Netherlands
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
                  Start with electricity, gas, water, internet, mobile services and waste collection, then use the complete setup guide when you get keys.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={guide.path}
                    className={cn(
                      "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-card hover:bg-brand-strong",
                      transitionInteractive,
                      activeBrightnessPress
                    )}
                  >
                    Open complete utilities guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/netherlands/moving-to-the-netherlands/"
                    className={cn(
                      "inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50",
                      transitionInteractive,
                      activeBrightnessPress
                    )}
                  >
                    Moving guide
                  </Link>
                </div>
              </div>
              <figure className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-200/35 via-white to-brand-100/30 blur-2xl" aria-hidden />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-expatos-xl ring-1 ring-slate-900/[0.04]">
                  <Image
                    src={guide.hero.image.src}
                    alt={guide.hero.image.alt}
                    fill
                    priority
                    unoptimized
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </div>
          </Container>
        </section>

        <Container className="py-12 sm:py-16">
          <main className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Start here</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Complete Setup Guide</h2>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <Link href={guide.path} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <Zap className="h-6 w-6 text-brand-strong" aria-hidden />
                  <h3 className="mt-4 text-xl font-black tracking-tight text-foreground">{guide.hero.pageTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{guide.hero.subtitle}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                    Read the guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
                <Link href={energyGuide.path} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <Zap className="h-6 w-6 text-brand-strong" aria-hidden />
                  <h3 className="mt-4 text-xl font-black tracking-tight text-foreground">{energyGuide.hero.pageTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{energyGuide.hero.subtitle}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                    Read the guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Planned child guides</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Explore Utility Topics</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {futureGuides.map((item) => (
                  <article key={item.href} className={cn(cardClass, "bg-slate-50/85")}>
                    <div className="absolute inset-x-0 top-0 h-1 bg-slate-200" aria-hidden />
                    <h3 className="text-base font-black tracking-tight text-foreground">{item.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">Planned guide</p>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}

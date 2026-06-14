import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  Droplets,
  ExternalLink,
  Flame,
  Home,
  Lightbulb,
  MapPin,
  Phone,
  Recycle,
  Router,
  Tv,
  Wifi,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualAfterIntroClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import { utilitiesNetherlandsPage as page, type UtilitiesLink } from "./utilitiesNetherlandsPageModel";

const baseUrl = getSiteOrigin();

const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [Lightbulb, Flame, Droplets, Router, Tv, Phone, Recycle, Home, Building2, ClipboardList] as const;
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="w-full max-w-none">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {children ? <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground-muted">{children}</div> : null}
    </div>
  );
}

function LinkOrPlanned({ item, className }: { item: UtilitiesLink; className?: string }) {
  const isLive = item.status !== "comingSoon";
  const content = (
    <div className="flex h-full flex-col">
      <span className="block text-base font-black leading-snug tracking-tight text-foreground">{item.label}</span>
      {item.description ? <span className="mt-2 block text-sm font-normal leading-relaxed text-foreground-muted">{item.description}</span> : null}
      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-copilot-bg-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10">
        {isLive ? "Open guide" : "Planned guide"}
        {isLive ? <ArrowRight className="h-3.5 w-3.5" aria-hidden /> : null}
      </span>
    </div>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "bg-slate-50/85 opacity-90", className)}>
        <div className="absolute inset-x-0 top-0 h-1 bg-slate-200" aria-hidden />
        {content}
      </article>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress,
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {content}
    </Link>
  );
}

function Hero() {
  return (
    <section className={cn("relative overflow-hidden", siteHeroFramedShellClass)}>
      <div className={siteHeroTopAccentClass} aria-hidden />
      <div className={siteHeroGlowPrimaryClass} aria-hidden />
      <div className={siteHeroGlowSecondaryClass} aria-hidden />
      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(420px,0.95fr)]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground-muted">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/netherlands/" className="hover:text-foreground">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={page.hubPath} className="hover:text-foreground">
                    Utilities
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-foreground" aria-current="page">
                  Utilities Guide
                </li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {page.hero.pageTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={page.hero.primaryCta.href}
                className={cn(
                  "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {page.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={page.hero.secondaryCta.href}
                className={cn(
                  "inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <figure className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-200/35 via-white to-brand-100/30 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-expatos-xl ring-1 ring-slate-900/[0.04]">
              <Image
                src={page.hero.image.src}
                alt={page.hero.image.alt}
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
  );
}

function SectionNav() {
  return (
    <div className="sticky top-0 z-20 border-y border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <Container>
        <nav aria-label="Utilities page sections" className="flex gap-2 overflow-x-auto py-3">
          {page.sectionNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted hover:border-brand/30 hover:text-brand-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}

function FeatureGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon = iconPool[index % iconPool.length];
        return (
          <article key={item.title} className={cardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function VisualTextDetails({ details }: { details: (typeof page.visualTextDetails)[keyof typeof page.visualTextDetails] }) {
  return (
    <aside className="rounded-3xl border border-slate-200/90 bg-slate-50/85 p-5 ring-1 ring-slate-900/[0.03]">
      <h3 className="text-base font-black tracking-tight text-foreground">{details.title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {details.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function InternetTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[820px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-foreground-muted">
            <tr>
              {["Provider", "Technology", "Typical speed range", "TV bundles", "Business services"].map((label) => (
                <th key={label} scope="col" className="px-4 py-4 font-bold">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {page.internet.table.map((row) => (
              <tr key={row.provider} className="hover:bg-slate-50/70">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">
                  {row.provider}
                </th>
                <td className="px-4 py-4 text-foreground-muted">{row.technology}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.typicalSpeedRange}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.tvBundles ? "Often available" : "Not usually bundled"}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.businessServices ? "Yes" : "Check directly"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProviderDetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs leading-relaxed text-foreground-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProviderDirectory() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {page.providerDirectory.map((provider) => (
        <article key={`${provider.serviceType}-${provider.name}`} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", provider.featured ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{provider.serviceType}</p>
              <h3 className="mt-1 text-lg font-black tracking-tight text-foreground">{provider.name}</h3>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-foreground-muted">
              {provider.onlineServices ? "Online setup" : "Contact"}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{provider.summary}</p>
          <div className="mt-4 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/70 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Example costs and prices</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{provider.pricing}</p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ProviderDetailList title="Features" items={provider.offers} />
            <ProviderDetailList title="Pros" items={provider.pros} />
            <ProviderDetailList title="Watch-outs" items={provider.cons} />
          </div>
          <p className="mt-4 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Service regions: </span>
            {provider.serviceRegions}
          </p>
          <a
            href={provider.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50"
          >
            Visit website
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </article>
      ))}
    </div>
  );
}

export function UtilitiesNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({
    id: `faq-${index}`,
    title: item.q,
    content: item.a,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Utilities", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Utilities in the Netherlands", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <div className={sitePageCanvasClass}>
        <Hero />
        <SectionNav />
        <Container className="py-12 sm:py-16">
          <main className="space-y-8">
            <section id="intro" className={sectionClass}>
              <SectionIntro eyebrow="First-week setup" title={page.intro.heading}>
                {page.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.overview} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.overview} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro title="Dutch Utilities at a Glance">
                <p>Start here if you need a quick split between services you choose, services tied to your address and municipality-managed tasks.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.overview} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.overview} />
                <FeatureGrid items={page.snapshotCards} />
              </div>
            </section>

            <section id="types" className={sectionClass}>
              <SectionIntro title="Typical Utility Services">
                <p>Use this list to separate essential services from optional subscriptions and municipality-managed tasks.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.types} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.types} />
                <FeatureGrid items={page.utilityTypes} />
              </div>
            </section>

            <section id="electricity" className={sectionClass}>
              <SectionIntro title={page.electricity.heading}>
                {page.electricity.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.energy} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.energy} />
                <div className="flex flex-wrap gap-2">
                  {page.electricity.providers.map((provider) => (
                    <span key={provider} className="rounded-full bg-copilot-bg-soft px-3 py-1 text-sm font-bold text-brand-strong">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="gas" className={sectionClass}>
              <SectionIntro title={page.gas.heading}>
                {page.gas.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.energy} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.energy} />
              </div>
            </section>

            <section id="heating" className={sectionClass}>
              <SectionIntro title={page.districtHeating.heading}>
                {page.districtHeating.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.waterHeating} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.waterHeating} />
              </div>
            </section>

            <section id="water" className={sectionClass}>
              <SectionIntro title={page.water.heading}>
                {page.water.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.waterHeating} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.waterHeating} />
                <div className="flex flex-wrap gap-2">
                  {page.water.providers.map((provider) => (
                    <span key={provider} className="rounded-full bg-copilot-bg-soft px-3 py-1 text-sm font-bold text-brand-strong">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="internet" className={sectionClass}>
              <SectionIntro title={page.internet.heading}>
                {page.internet.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.connectivity} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.connectivity} />
                <InternetTable />
              </div>
            </section>

            <section id="mobile" className={sectionClass}>
              <SectionIntro title={page.mobile.heading}>
                {page.mobile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.connectivity} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.connectivity} />
                <div className="flex flex-wrap gap-2">
                  {page.mobile.providers.map((provider) => (
                    <span key={provider} className="rounded-full bg-copilot-bg-soft px-3 py-1 text-sm font-bold text-brand-strong">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section id="tv" className={sectionClass}>
              <SectionIntro title={page.tv.heading}>
                {page.tv.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.connectivity} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.connectivity} />
              </div>
            </section>

            <section id="waste" className={sectionClass}>
              <SectionIntro title={page.waste.heading}>
                {page.waste.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.waste} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.waste} />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {page.waste.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-foreground">
                      <Recycle className="h-4 w-4 text-brand-strong" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="costs" className={sectionClass}>
              <SectionIntro title="What Do Utilities Cost?">
                <p>These are realistic example ranges only. They are not quotes, guarantees or provider recommendations.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.costs} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.costs} />
                <div className="grid gap-5 lg:grid-cols-3">
                  {page.costExamples.map((example) => (
                    <article key={example.household} className={cardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{example.household}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{example.totalRange}</h3>
                      <ul className="mt-4 space-y-2">
                        {example.details.map((detail) => (
                          <li key={detail} className="flex gap-2 text-sm text-foreground-muted">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="housing-types" className={sectionClass}>
              <SectionIntro title="Utilities for Different Housing Types">
                <p>Home type changes the utility setup because heating system, insulation, floor area and included service costs can all differ.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.housingCity} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.housingCity} />
                <FeatureGrid items={page.housingTypes} />
              </div>
            </section>

            <section id="city-costs" className={sectionClass}>
              <SectionIntro title="Utility Costs Across Dutch Cities">
                <p>City differences usually come from housing type, building age, insulation, district heating, rent structure and municipality rules.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.housingCity} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.housingCity} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {page.cityCosts.map((city) => (
                    <Link key={city.city} href={city.href} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
                      <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-lg font-black text-foreground">{city.city}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.body}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section id="checklist" className={sectionClass}>
              <SectionIntro title="Utility Setup Checklist" />
              <GuidePremiumVisualFigure visual={page.visuals.checklist} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.checklist} />
                <div className="grid gap-3 md:grid-cols-2">
                  {page.setupChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                        <Check className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-bold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro title="Common Utility Mistakes" />
              <GuidePremiumVisualFigure visual={page.visuals.mistakes} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.mistakes} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {page.commonMistakes.map((mistake) => (
                    <article key={mistake} className={cardClass}>
                      <ClipboardList className="h-5 w-5 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">{mistake}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="providers" className={sectionClass}>
              <SectionIntro title="Major Utility Providers">
                <p>
                  These are real provider examples grouped by utility type. Example prices are orientation ranges only — not quotes, guarantees or
                  recommendations. Always verify current tariffs, contract terms and address availability directly with providers.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.providers} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.providers} />
                <ProviderDirectory />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro title="Utilities in the Netherlands FAQ">
                <p>Use these quick answers for orientation before checking your lease, provider terms or municipality instructions.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.faq} />
                <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro title="Official Resources">
                <p>
                  Utility providers, prices and contract options change regularly. Always verify current information directly with providers,
                  regulators and your municipality.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.sources} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.sources} />
                <div className="grid gap-4 md:grid-cols-2">
                  {page.officialSources.map((source) => (
                    <a
                      key={source.label}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                    >
                      <h3 className="text-lg font-black text-foreground">{source.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{source.description}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                        Open official source
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro title="Related Guides">
                <p>Continue from utilities into housing, moving, city choice and practical insurance setup.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {page.relatedGuides.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="explore-next"
              className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-slate-950 p-6 text-white shadow-card ring-1 ring-white/10 sm:p-8 lg:p-10"
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Explore next</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Keep Setting Up Life in the Netherlands</h2>
                <p className="mt-4 max-w-5xl text-base leading-relaxed text-cyan-50/86">
                  Move from utilities into housing contracts, ownership costs, city choices, insurance and your broader relocation checklist.
                </p>
                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {page.exploreNextCards.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} className="bg-white/95" />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}

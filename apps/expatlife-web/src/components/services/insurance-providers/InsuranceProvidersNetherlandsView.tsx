import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  ExternalLink,
  FileQuestion,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
  X,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { insuranceProvidersNetherlandsPage as page, type InsuranceLink } from "./insuranceProvidersNetherlandsPageModel";

const baseUrl = getSiteOrigin();

const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [ShieldCheck, HeartPulse, Home, Plane, BriefcaseBusiness, ClipboardList, BadgeCheck, FileQuestion] as const;

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

function LinkOrPlanned({ item, className }: { item: InsuranceLink; className?: string }) {
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
        <div className={cn("absolute inset-x-0 top-0 h-1", "bg-slate-200")} aria-hidden />
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
                  <Link href="/netherlands/services/" className="hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-foreground" aria-current="page">
                  Insurance Providers
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
                  "inline-flex min-h-[46px] items-center justify-center rounded-xl border border-border bg-white px-5 py-3 text-sm font-bold text-foreground shadow-card hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {page.hero.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {page.hero.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-copilot-primary/10 bg-white/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-brand-strong shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.04]">
            <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <div className="relative aspect-[4/3] w-full">
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

function SectionNav({ items }: { items: typeof page.sectionNav }) {
  return (
    <div className="sticky top-0 z-20 border-y border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <Container>
        <nav aria-label="Insurance page sections" className="flex gap-2 overflow-x-auto py-3">
          {items.map((item) => (
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
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
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
      {page.providers.map((provider) => (
        <article key={provider.name} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", provider.featured ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-black tracking-tight text-foreground">{provider.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">
                {provider.expatFriendly ? "Expat-relevant" : "Dutch provider"}
              </p>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-foreground-muted">
              {provider.onlineServices ? "Online" : "Contact"}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{provider.summary}</p>
          <div className="mt-4 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/70 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Costs and prices</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{provider.pricing}</p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ProviderDetailList title="What they offer" items={provider.offers} />
            <ProviderDetailList title="Pros" items={provider.pros} />
            <ProviderDetailList title="Watch-outs" items={provider.cons} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {provider.categories.map((category) => (
              <span key={category} className="rounded-full bg-copilot-bg-soft px-2.5 py-1 text-[11px] font-bold text-brand-strong">
                {category}
              </span>
            ))}
          </div>
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

function BooleanCell({ value }: { value: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full",
        value ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-slate-100 text-slate-400 ring-1 ring-slate-200"
      )}
      aria-label={value ? "Available" : "Not listed"}
    >
      {value ? <Check className="h-4 w-4" aria-hidden /> : <X className="h-4 w-4" aria-hidden />}
    </span>
  );
}

function ComparisonTable() {
  const columns = [
    ["healthInsurance", "Health Insurance"],
    ["homeInsurance", "Home Insurance"],
    ["liabilityInsurance", "Liability Insurance"],
    ["travelInsurance", "Travel Insurance"],
    ["businessInsurance", "Business Insurance"],
    ["onlineServices", "Online Services"],
  ] as const;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[860px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-foreground-muted">
            <tr>
              <th scope="col" className="px-4 py-4 font-bold">
                Provider
              </th>
              {columns.map(([, label]) => (
                <th key={label} scope="col" className="px-4 py-4 font-bold">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {page.comparisonTable.map((row) => (
              <tr key={row.provider} className="hover:bg-slate-50/70">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">
                  {row.provider}
                </th>
                {columns.map(([key]) => (
                  <td key={key} className="px-4 py-4">
                    <BooleanCell value={row[key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-foreground-muted">
        Product availability can change and may vary by channel, package or underwriting outcome. Verify directly with each provider.
      </p>
    </div>
  );
}

export function InsuranceProvidersNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Insurance Providers", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqAccordionItems = page.faqs.map((item, index) => ({
    id: `faq-${index}`,
    title: item.q,
    content: item.a,
  }));

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <div className={sitePageCanvasClass}>
        <Hero />
        <SectionNav items={page.sectionNav} />

        <Container className="py-10 sm:py-14 lg:py-16">
          <main className="space-y-10">
            <section id="intro" className={sectionClass}>
              <SectionIntro title={page.intro.heading}>
                {page.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.intro} />
                <div className="grid gap-3 md:grid-cols-2">
                  {page.intro.orientation.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-relaxed text-foreground-muted">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="Dutch Insurance at a Glance" title="Dutch Insurance at a Glance" />
              <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.snapshot} />
                <FeatureGrid items={page.snapshotCards} />
              </div>
            </section>

            <section id="types" className={sectionClass}>
              <SectionIntro title="Common Types of Insurance">
                <p>
                  Insurance in the Netherlands is easier to navigate when you separate mandatory products from optional household,
                  travel and business products.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.types} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.types} />
                <FeatureGrid items={page.insuranceTypes} />
              </div>
            </section>

            <section id="health" className={sectionClass}>
              <SectionIntro title={page.healthcareInsurance.heading}>
                {page.healthcareInsurance.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.health} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.health} />
                <FeatureGrid items={page.healthcareInsurance.checkpoints} />
                <div className="grid gap-4 md:grid-cols-2">
                  {page.healthcareInsurance.links.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section id="liability" className={sectionClass}>
              <SectionIntro title={page.liabilityInsurance.heading}>
                {page.liabilityInsurance.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.liability} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.liability} />
                <FeatureGrid items={page.liabilityInsurance.checkpoints} />
              </div>
            </section>

            <section id="home-contents" className={sectionClass}>
              <SectionIntro title={page.homeContentsInsurance.heading}>
                {page.homeContentsInsurance.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.homeContents} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.homeContents} />
                <div className="grid gap-5 md:grid-cols-2">
                  {page.homeContentsInsurance.comparison.map((item) => (
                    <article key={item.title} className={cardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-lg font-black text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <FeatureGrid items={page.homeContentsInsurance.checkpoints} />
                <div className="grid gap-4 md:grid-cols-3">
                  {page.homeContentsInsurance.links.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section id="travel" className={sectionClass}>
              <SectionIntro title={page.travelInsurance.heading}>
                {page.travelInsurance.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.travel} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.travel} />
                <FeatureGrid items={page.travelInsurance.checkpoints} />
              </div>
            </section>

            <section id="business" className={sectionClass}>
              <SectionIntro title={page.businessInsurance.heading}>
                {page.businessInsurance.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.business} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.business} />
                <div className="flex flex-wrap gap-2">
                  {page.businessInsurance.categories.map((category) => (
                    <span key={category} className="rounded-full bg-copilot-bg-soft px-3 py-1 text-sm font-bold text-brand-strong">
                      {category}
                    </span>
                  ))}
                </div>
                <FeatureGrid items={page.businessInsurance.checkpoints} />
                <div className="grid gap-4 md:grid-cols-3">
                  {page.businessInsurance.links.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <SectionIntro title="Insurance Considerations for Expats">
                <p>Needs vary significantly by individual situation, especially during arrival, temporary housing and international travel periods.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.expatConsiderations} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.expatConsiderations} />
                <FeatureGrid items={page.expatConsiderations} />
              </div>
            </section>

            <section id="directory" className={sectionClass}>
              <SectionIntro title="Major Insurance Providers in the Netherlands">
                <p>
                  These are real providers and insurance groups expats often encounter while researching Dutch insurance. Inclusion is informational,
                  not a ranking, endorsement or recommendation.
                </p>
                <p>
                  Price notes use public 2026 premiums or example profiles where available. Treat them as orientation only because quotes can change
                  with your address, household, excess, policy type, add-ons and business activity.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.directory} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.directory} />
                <ProviderDirectory />
              </div>
            </section>

            <section id="comparison" className={sectionClass}>
              <SectionIntro title="Compare Insurance Providers">
                <p>Use this matrix to identify which providers may be relevant by product category before checking current terms directly.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.comparison} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.comparison} />
                <ComparisonTable />
              </div>
            </section>

            <section id="costs" className={sectionClass}>
              <SectionIntro title="Typical Insurance Costs">
                <p>These are broad orientation ranges only. They are not quotes, guarantees or advice.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.costs} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.costs} />
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {page.costCards.map((card) => (
                    <article key={card.title} className={cardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{card.title}</p>
                      <p className="mt-3 text-lg font-black leading-snug text-foreground">{card.range}</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{card.note}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro title="Questions to Ask Before Choosing" />
              <GuidePremiumVisualFigure visual={page.visuals.questions} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.questions} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {page.choosingQuestions.map((question) => (
                    <article key={question} className={cardClass}>
                      <FileQuestion className="h-5 w-5 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">{question}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro title="Common Insurance Mistakes" />
              <GuidePremiumVisualFigure visual={page.visuals.expatMistakes} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.expatMistakes} />
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

            <section id="related-insurance-guides" className={sectionClass}>
              <SectionIntro title="Related Insurance Guides" />
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {page.relatedInsuranceGuides.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="services-cta"
              className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-slate-950 p-6 text-white shadow-card ring-1 ring-white/10 sm:p-8 lg:p-10"
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-28 left-8 h-56 w-56 rounded-full bg-brand-400/15 blur-3xl"
                aria-hidden
              />
              <div className="relative w-full max-w-none">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Insurance directory</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{page.serviceCta.heading}</h2>
                <p className="mt-4 max-w-5xl text-base leading-relaxed text-cyan-50/86">{page.serviceCta.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {page.serviceCta.buttons.map((button, index) => (
                    <Link
                      key={button.label}
                      href={button.href}
                      className={cn(
                        "inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 py-2.5 text-sm font-black shadow-sm",
                        transitionInteractive,
                        activeBrightnessPress,
                        index === 0
                          ? "bg-white text-brand-strong hover:bg-cyan-50"
                          : "border border-white/35 bg-white/10 text-white hover:border-white/60 hover:bg-white/16"
                      )}
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro title="Insurance Providers FAQ" />
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.faq} />
                <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro title="Official Resources">
                <p>
                  Insurance products, premiums and regulations can change over time. Always verify current information with providers and official resources.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.officialSources} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.officialSources} />
                <div className="grid gap-4 md:grid-cols-2">
                  {page.officialSources.map((source) => (
                    <a
                      key={source.label}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(cardClass, "block")}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-lg font-black text-foreground">{source.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{source.category}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-strong">
                        Open source <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro title="Related Guides" />
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item) => (
                  <LinkOrPlanned key={item.label} item={item} />
                ))}
              </div>
            </section>

            <section id="explore-next" className={sectionClass}>
              <SectionIntro title="Explore Next" />
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {page.exploreNextCards.map((item) => (
                  <LinkOrPlanned key={item.label} item={item} />
                ))}
              </div>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  Landmark,
  MapPin,
  ReceiptText,
  Scale,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  siteGuideColumnPadYClass,
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlSectionH2Class,
  movingNlSectionH2OnDarkClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  citiesFunnelHeroFigureClassName,
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  propertyTaxNetherlandsPage as page,
  type PropertyTaxNetherlandsLink,
} from "./propertyTaxNetherlandsPageModel";

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.05] before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-copilot-primary/25 before:to-transparent after:pointer-events-none after:absolute after:-right-20 after:-top-24 after:h-56 after:w-56 after:rounded-full after:bg-copilot-primary/10 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const cardIcons = [Home, Landmark, Building2, ReceiptText, Banknote, WalletCards, FileText, Scale, ClipboardCheck, ShieldCheck] as const;
const snapshotIcons = [Landmark, Home, ReceiptText, Banknote, MapPin, WalletCards] as const;

const primaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);
const secondaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
  fullWidth?: boolean;
}) {
  const onDark = tone === "onDark";
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            fullWidth && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
            onDark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual }: { visual: (typeof page.visuals)[keyof typeof page.visuals] }) {
  return (
    <figure className={cn("overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[3/2] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function StatCard({ label, value, iconIndex }: { label: string; value: string; iconIndex: number }) {
  const Icon = snapshotIcons[iconIndex % snapshotIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{label}</p>
          <p className="mt-1 text-base font-bold leading-snug text-foreground">{value}</p>
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </div>
      </div>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: PropertyTaxNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ExampleTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: readonly string[];
  rows: readonly Record<string, string>[];
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/80">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-bold text-foreground">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-3 leading-relaxed text-foreground-muted">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScenarioCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.planningScenarios.map((scenario) => (
        <article key={scenario.title} className={cn(mutedCardClass, "min-h-full")}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold tracking-tight text-foreground">{scenario.title}</h3>
          <p className="mt-2 rounded-2xl bg-slate-50/90 p-3 text-sm font-semibold leading-relaxed text-foreground ring-1 ring-slate-200/80">{scenario.profile}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{scenario.takeaway}</p>
        </article>
      ))}
    </div>
  );
}

function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {page.challengeWozSteps.map((step) => (
        <li key={step.step} className={cn("relative rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">{step.step}</span>
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.cityCards.map((city) => (
        <Link key={city.label} href={city.href} className={cn("group relative block overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{city.label}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{city.market}</p>
            </div>
            <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
          </div>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-2">
              <dt className="text-foreground-muted">Local variation</dt>
              <dd className="text-right font-medium text-foreground">{city.municipalVariation}</dd>
            </div>
            <div className="border-t border-slate-100 pt-2 text-foreground-muted">{city.planningNote}</div>
          </dl>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function FaqSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.faq.map((item) => (
        <article key={item.q} className={cn("relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold tracking-tight text-foreground">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function SourcesSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.officialSources.map((source) => (
        <a key={source.href} href={source.href} className={cn("group relative block overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)} target="_blank" rel="noreferrer">
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="text-sm font-bold text-foreground">{source.label}</span>
              <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open official source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

const crumbs = [
  { name: "Home", item: "/" },
  { name: "Netherlands", item: "/netherlands/" },
  { name: "Taxes", item: "/netherlands/taxes/" },
  { name: page.hero.pageTitle, item: page.path },
];

export function PropertyTaxNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-6 sm:p-8 lg:p-10")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.78fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">{page.hero.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {page.hero.chips.map((chip) => (
                    <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                  This guide is general orientation, not tax advice, investment advice, legal advice or a substitute for municipal or professional guidance.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>

          <nav className="mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/85 p-2 shadow-sm ring-1 ring-slate-900/[0.03] backdrop-blur" aria-label="Property tax guide sections">
            {page.sectionNav.map((item) => (
              <a key={item.href} href={item.href} className={cn("shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Overview" title="How Property Tax Works in the Netherlands">
                  {page.introPoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </SectionIntro>
                <VisualFigure visual={page.visuals.woz} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="At a glance" title="Dutch Property Taxes at a Glance" />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.snapshotCards.map((card, index) => (
                      <StatCard key={card.label} label={card.label} value={card.value} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.recurringOwnerBudget} />
              </div>
              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <ExampleTable
                  title="Illustrative ownership situations"
                  columns={["Situation", "Recurring items", "Planning note"]}
                  rows={page.homeownerBudgetExamples.map((row) => ({
                    Situation: row.situation,
                    "Recurring items": row.recurringItems,
                    "Planning note": row.planningNote,
                  }))}
                />
                <BulletPanel title="How to use this snapshot" items={page.snapshotUseTips} />
              </div>
            </section>

            <section id="woz" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="WOZ value" title="Understanding WOZ Value">
                    <p>WOZ value is the government-assessed value of a property. Municipalities use WOZ values for various tax calculations, and the figure can influence property taxes, municipal charges and some wider tax contexts.</p>
                    <p>It is not automatically the same as the price you paid, the asking price or a lender&apos;s valuation.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.wozCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.woz} />
              </div>
              <div className="mt-6">
                <BulletPanel title="WOZ checks for expats" items={page.wozChecklist} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="WOZ calculation examples, using an illustrative local rate"
                  columns={["WOZ value", "Example local rate", "Example OZB", "Why it matters"]}
                  rows={page.wozCalculationExamples.map((row) => ({
                    "WOZ value": row.wozValue,
                    "Example local rate": row.exampleLocalRate,
                    "Example OZB": row.exampleOzb,
                    "Why it matters": row.whyItMatters,
                  }))}
                />
              </div>
            </section>

            <section id="municipal" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Local bills" title="Municipal Taxes in the Netherlands">
                    <p>Common property-related charges can include OZB property tax, waste collection tax, sewerage charges and water-board taxes. Municipal taxes vary significantly by location.</p>
                    <p>Do not use another city, landlord or colleague&apos;s bill as your estimate. Check the actual municipality and water board for the address.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {page.municipalTaxCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.municipalCosts} />
              </div>
              <div className="mt-6">
                <BulletPanel title="How to plan around local bills" items={page.municipalPlanningTips} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Illustrative local-bill ranges to budget for"
                  columns={["Bill", "Example amount", "Typical rhythm", "What to check"]}
                  rows={page.municipalBillExamples.map((row) => ({
                    Bill: row.bill,
                    "Example amount": row.exampleAmount,
                    "Typical rhythm": row.typicalRhythm,
                    "What to check": row.whatToCheck,
                  }))}
                />
              </div>
            </section>

            <section id="owner-renter" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Responsibility" title="Taxes for Homeowners vs Renters">
                    <p>Homeowners often pay ownership taxes, municipal charges and maintenance costs. Renters may still pay user-related local charges such as waste, water-board or municipal charges.</p>
                    <p>The split depends on ownership, occupancy, municipality and contract. That is why buyers should read ownership documents, while renters should check lease and service-charge wording.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.ownerRenterCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.ownerRenterCity} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <LinkCard item={{ label: "Buying a House", href: "/netherlands/housing/buying-a-house-netherlands/", status: "live", description: "Understand the purchase process before comparing owner costs." }} iconIndex={0} />
                <LinkCard item={{ label: "Renting in the Netherlands", href: "/netherlands/housing/renting-in-the-netherlands/", status: "comingSoon", description: "Compare renter charges before deciding to buy." }} iconIndex={1} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Owner vs renter checks" items={page.ownerRenterTips} />
              </div>
            </section>

            <section id="buying" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Purchase costs" title="Taxes When Buying Property">
                    <p>Buying a home may involve transfer tax, notary costs and registration costs. These are different from yearly municipal bills and should be budgeted separately.</p>
                    <p>Transfer-tax rules depend on the buyer and situation, so verify current rules with Belastingdienst, your notary and qualified professionals before relying on an estimate.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.buyingTaxCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.buyingCosts} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <LinkCard item={{ label: "Buying a House", href: "/netherlands/housing/buying-a-house-netherlands/", status: "live", description: "Understand bidding, transfer and buyer costs." }} iconIndex={0} />
                <LinkCard item={{ label: "Mortgages for Expats", href: "/netherlands/housing/mortgages-netherlands-expats/", status: "live", description: "Connect property taxes to mortgage affordability." }} iconIndex={1} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Buying-tax checks before transfer" items={page.buyingTaxChecklist} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="One-off buying-tax examples"
                  columns={["Purchase price", "Owner-occupied transfer tax example", "Notary and registration planning", "Note"]}
                  rows={page.buyingTaxExamples.map((row) => ({
                    "Purchase price": row.purchasePrice,
                    "Owner-occupied transfer tax example": row.ownerOccupiedTransferTaxExample,
                    "Notary and registration planning": row.notaryAndRegistrationPlanning,
                    Note: row.note,
                  }))}
                />
              </div>
            </section>

            <section id="recurring" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Owner budget" title="Recurring Costs of Home Ownership">
                    <p>Owning property involves ongoing costs beyond mortgage payments. Municipal taxes, insurance, maintenance, VvE costs and utilities all belong in the ownership budget.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {page.homeownerCostCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.recurringOwnerBudget} />
              </div>
              <div className="mt-6">
                <ScenarioCards />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Annual owner-budget scenarios, excluding mortgage and utilities"
                  columns={["Profile", "Local taxes and water", "Insurance / maintenance", "VvE", "Annual planning range"]}
                  rows={page.annualOwnerBudgetExamples.map((row) => ({
                    Profile: row.profile,
                    "Local taxes and water": row.localTaxesAndWater,
                    "Insurance / maintenance": row.insuranceMaintenance,
                    VvE: row.vve,
                    "Annual planning range": row.annualPlanningRange,
                  }))}
                />
              </div>
              <div className="mt-6">
                <BulletPanel title="Recurring-budget guardrails" items={page.recurringBudgetTips} />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="City planning" title="Property Costs Across Dutch Cities">
                  <p>Property market differences, municipal variation and homeowner cost considerations change by city. A higher purchase price does not automatically tell the full ownership-cost story.</p>
                </SectionIntro>
                <VisualFigure visual={page.visuals.ownerRenterCity} />
              </div>
              <div className="mt-6">
                <CityCards />
              </div>
              <div className="mt-6">
                <BulletPanel title="How to use city differences" items={page.cityUseTips} />
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Expat context" title="What Expats Should Know">
                    <p>Expats commonly face challenges with Dutch municipal letters, WOZ assessments, recurring-cost budgeting and comparisons with home-country tax systems.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {page.expatChallenges.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.wozObjectionFlow} />
              </div>
              <div className="mt-6">
                <ScenarioCards />
              </div>
              <div className="mt-6">
                <BulletPanel title="When a Dutch property letter arrives" items={page.expatLetterChecklist} />
              </div>
            </section>

            <section id="vve" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Apartments" title="Apartments, VvE Fees and Property Costs">
                    <p>Apartment owners often participate in a VvE, or owners association. VvE contributions are separate from property taxes but essential for realistic budgeting.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.vveCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.vveApartmentCosts} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Apartment buyer checks" items={page.vveChecklist} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="VvE monthly-cost scenarios"
                  columns={["Apartment type", "Monthly VvE", "Annual cost", "What to check"]}
                  rows={page.vveCostExamples.map((row) => ({
                    "Apartment type": row.apartmentType,
                    "Monthly VvE": row.monthlyVve,
                    "Annual cost": row.annualCost,
                    "What to check": row.whatToCheck,
                  }))}
                />
              </div>
            </section>

            <section id="challenge" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="WOZ assessment" title="Can You Challenge a WOZ Assessment?">
                    <p>Property owners may sometimes object to WOZ assessments. Processes and deadlines apply, and the official route is through the municipality.</p>
                  </SectionIntro>
                  <div className="mt-6">
                    <ProcessSteps />
                  </div>
                </div>
                <VisualFigure visual={page.visuals.wozObjectionFlow} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="WOZ objection timing examples"
                  columns={["Received", "Example deadline", "What to do"]}
                  rows={page.wozTimingExamples.map((row) => ({
                    Received: row.received,
                    "Example deadline": row.exampleDeadline,
                    "What to do": row.whatToDo,
                  }))}
                />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Common questions" title="Questions Expats Often Ask" />
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {page.expatQuestions.map((item, index) => (
                      <FeatureCard key={item.q} title={item.q} body={item.a} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.woz} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Use these questions before deciding" items={page.questionUseTips} />
              </div>
            </section>

            <section id="housing-costs" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Total cost view" title="Property Taxes vs Other Housing Costs">
                  <p>Property taxes are only one part of total ownership costs. Compare them against mortgage payments, utilities, insurance, maintenance and VvE fees.</p>
                </SectionIntro>
                <VisualFigure visual={page.visuals.recurringOwnerBudget} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Housing-cost comparison"
                  columns={["Cost", "Example range", "Type", "Who checks it", "Planning risk"]}
                  rows={page.costComparisonRows.map((row) => ({
                    Cost: row.cost,
                    "Example range": row.exampleRange,
                    Type: row.type,
                    "Who checks it": row.whoChecks,
                    "Planning risk": row.risk,
                  }))}
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Internal planning hub" title="Related Housing & Tax Guides" />
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {page.relatedGuides.map((link, index) => (
                      <LinkCard key={link.href} item={link} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.buyingCosts} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Recommended reading order" items={page.relatedGuideUseTips} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Professional help" title="Professional Services That May Help">
                    <p>Professionals can help translate general property-tax concepts into your personal purchase, ownership or tax situation.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {page.services.map((link, index) => (
                      <LinkCard key={link.href} item={link} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.ownerRenterCity} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Choosing the right help" items={page.serviceSelectionTips} />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" />
                  <div className="mt-6">
                    <FaqSection />
                  </div>
                </div>
                <VisualFigure visual={page.visuals.municipalCosts} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Use the FAQ carefully" items={page.faqUseTips} />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Official sources" title="Official Sources">
                    <p>{page.sourcesDisclaimer}</p>
                  </SectionIntro>
                  <div className="mt-6">
                    <SourcesSection />
                  </div>
                </div>
                <VisualFigure visual={page.visuals.wozObjectionFlow} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
              </div>
            </section>

            <section className={cn("relative overflow-hidden rounded-3xl bg-slate-950 p-6 shadow-expatos-xl sm:p-8")}>
              <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
              <SectionIntro eyebrow="Explore next" title="Continue Your Housing and Tax Plan" tone="onDark">
                <p>Move from property-tax basics into buying, mortgages, cities and relocation planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {page.exploreNextCards.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} tone="onDark" />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  GraduationCap,
  Home,
  Landmark,
  MapPin,
  Router,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
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
import { movingNlCardMicroLiftClass, movingNlSectionH2Class, movingNlSectionH2OnDarkClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  BUY_VS_RENT_NETHERLANDS_PATH,
  BUYING_HOUSE_NETHERLANDS_PATH,
  CITIES_HUB_PATH,
  DIGID_AWARENESS_PATH,
  ENERGY_AND_WATER_NETHERLANDS_PATH,
  BSN_REGISTRATION_PATH,
  housingNetherlandsPage as page,
  INSURANCE_PROVIDERS_PATH,
  INTERNET_AND_MOBILE_NETHERLANDS_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  MORTGAGES_NETHERLANDS_EXPATS_PATH,
  MUNICIPALITY_SERVICES_PATH,
  RENT_AFFORDABILITY_TOOL_PATH,
  RENTING_NETHERLANDS_PATH,
  RENT_ALLOWANCE_PATH,
  TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
  UTILITIES_NETHERLANDS_PATH,
  type CityHousingCard,
  type HousingLink,
} from "./housingNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [Home, Building2, MapPin, ClipboardList, Users, Briefcase, GraduationCap, Shield, Zap, Router] as const;
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} className={visualAfterIntroClass} />
      <div className={guidePremiumSectionDetailStackClass}>{children}</div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <div className="w-full max-w-none">
      {eyebrow ? (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div className={cn("mt-4 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div>
      ) : null}
    </div>
  );
}

function ExploreLinkCard({ item, iconIndex = 0, tone = "default" }: { item: HousingLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>
            Coming soon
          </span>
        ) : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return <article className={cn(cardClass, onDark && "border-white/10 bg-white/10 text-white ring-white/10", "opacity-90")}>{body}</article>;
  }

  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
        onDark && "border-white/10 bg-white/10 ring-white/10",
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {body}
    </Link>
  );
}

function LinkOrPlanned({ item, className }: { item: HousingLink; className?: string }) {
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

function FeatureGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
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

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TipCardGrid({ items, icon: Icon = Home }: { items: Array<{ title: string; body: string }>; icon?: typeof Home }) {
  const xlColumnClass = items.length === 5 || items.length === 6 ? "xl:grid-cols-3" : "xl:grid-cols-4";
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", xlColumnClass)}>
      {items.map((item) => (
        <article key={item.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function GuideCrossLink({
  href,
  title,
  description,
  linkLabel,
  icon: Icon = ArrowRight,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
  icon?: typeof ArrowRight;
}) {
  return (
    <Link href={href} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
      <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
        {linkLabel}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}

function QuickAnswerBox() {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-copilot-bg-soft/60 p-5 ring-1 ring-copilot-primary/10", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Quick answer</p>
      <p className="mt-3 text-lg font-bold text-foreground">{page.quickAnswer.summary}</p>
      <p className="mt-4 text-sm font-bold text-foreground">Buying becomes attractive when:</p>
      <ul className="mt-2 space-y-2">
        {page.quickAnswer.buyingWhen.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{page.quickAnswer.note}</p>
    </aside>
  );
}

function RentVsBuyTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-foreground-muted">
            <tr>
              <th scope="col" className="px-4 py-4 font-bold">Factor</th>
              <th scope="col" className="px-4 py-4 font-bold">Renting</th>
              <th scope="col" className="px-4 py-4 font-bold">Buying</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {page.rentVsBuyComparison.map((row) => (
              <tr key={row.factor} className="hover:bg-slate-50/70">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">{row.factor}</th>
                <td className="px-4 py-4 text-foreground-muted">{row.renting}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.buying}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CostExampleGrid({ items }: { items: typeof page.housingCostExamples }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
      {items.map((example) => (
        <article key={example.profile} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{example.profile}</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{example.priceRange}</h3>
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
  );
}

function CityCostTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-foreground-muted">
            <tr>
              <th scope="col" className="px-4 py-4 font-bold">City</th>
              <th scope="col" className="px-4 py-4 font-bold">Studio</th>
              <th scope="col" className="px-4 py-4 font-bold">1 bedroom</th>
              <th scope="col" className="px-4 py-4 font-bold">2 bedroom</th>
              <th scope="col" className="px-4 py-4 font-bold">Family home</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {page.cityCostRows.map((row) => (
              <tr key={row.city} className="hover:bg-slate-50/70">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">{row.city}</th>
                <td className="px-4 py-4 text-foreground-muted">{row.studio}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.oneBed}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.twoBed}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.family}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-foreground-muted">
        Example monthly rent ranges for orientation only — not quotes or guarantees. Verify current listings locally.
      </p>
    </div>
  );
}

function CityHousingCardGrid({ items }: { items: CityHousingCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.city} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-black tracking-tight text-foreground">{item.city}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.population}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.housingProfile}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><span className="font-bold text-foreground">Affordability: </span>{item.affordability}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><span className="font-bold text-foreground">International appeal: </span>{item.internationalAppeal}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={item.href} className={cn("inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-foreground shadow-sm hover:bg-slate-50", transitionInteractive, activeBrightnessPress)}>
              City guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link href={CITIES_HUB_PATH} className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-foreground shadow-sm hover:bg-slate-50">
              Compare cities
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function SetupPhaseCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {page.setupPhases.map((phase) => (
        <article key={phase.phase} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{phase.phase}</p>
          <ul className="mt-4 space-y-3">
            {phase.tasks.map((task) => (
              <li key={task} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function LinkCardGrid({ items }: { items: HousingLink[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item) => (
        <LinkOrPlanned key={item.label} item={item} />
      ))}
    </div>
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
                <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link></li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-foreground" aria-current="page">Housing</li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={page.hero.primaryCta.href} className={cn("inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-card hover:bg-brand-strong", transitionInteractive, activeBrightnessPress)}>
                {page.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={page.hero.secondaryCta.href} className={cn("inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50", transitionInteractive, activeBrightnessPress)}>
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <figure className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-200/35 via-white to-brand-100/30 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-expatos-xl ring-1 ring-slate-900/[0.04]">
              <Image src={page.hero.image.src} alt={page.hero.image.alt} fill priority unoptimized sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
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
        <nav aria-label="Housing page sections" className="flex gap-2 overflow-x-auto py-3">
          {page.sectionNav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted hover:border-brand/30 hover:text-brand-strong">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export function HousingNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Housing in the Netherlands", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <div className={sitePageCanvasClass}>
        <Hero />
        <SectionNav />
        <Container className="py-12 sm:py-16">
          <main className="space-y-8">
            <PremiumGuideSection
              id="intro"
              intro={
                <SectionIntro eyebrow="Housing hub" title={page.intro.heading}>
                  {page.intro.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.overview}
            >
              <VisualTextDetails details={page.visualTextDetails.overview} />
              <QuickAnswerBox />
              <FeatureGrid items={page.snapshotCards} />
              <BulletPanel title={page.visualTextDetails.snapshot.title} items={page.visualTextDetails.snapshot.items} />
              <GuideCrossLink
                href={MOVING_TO_NETHERLANDS_PATH}
                title="Moving to the Netherlands"
                description="Connect housing decisions to your wider relocation timeline, documents and first-month setup."
                linkLabel="Open moving guide"
                icon={Briefcase}
              />
              <GuideCrossLink
                href={CITIES_HUB_PATH}
                title="Compare Dutch Cities"
                description="Explore city guides to compare housing profiles, affordability and international appeal across the Netherlands."
                linkLabel="Open cities hub"
                icon={MapPin}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="market" intro={<SectionIntro title={page.market.heading}>{page.market.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.market}>
              <VisualTextDetails details={page.visualTextDetails.market} />
              <TipCardGrid items={page.marketSegments} icon={Building2} />
              <BulletPanel title="Supply and demand reality" items={page.marketSupplyTips} />
            </PremiumGuideSection>

            <PremiumGuideSection id="rent-vs-buy" intro={<SectionIntro title={page.rentVsBuy.heading}>{page.rentVsBuy.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.rentVsBuy}>
              <VisualTextDetails details={page.visualTextDetails.rentVsBuy} />
              <RentVsBuyTable />
              <LinkCardGrid items={[{ label: "Buy vs Rent Guide", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Deeper financial and lifestyle comparison for expats." }]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="renting" intro={<SectionIntro title={page.renting.heading}>{page.renting.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.renting}>
              <VisualTextDetails details={page.visualTextDetails.renting} />
              <TipCardGrid items={page.rentingTopics} icon={Home} />
              <BulletPanel title="Documents to prepare before viewings" items={page.rentingDocumentChecklist} />
              <LinkCardGrid items={[
                { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Contracts, deposits, viewings and tenant orientation." },
                { label: "Rent allowance guide", href: RENT_ALLOWANCE_PATH, status: "live", description: "Huurtoeslag orientation for qualifying renters." },
              ]} />
              <GuideCrossLink
                href={RENT_AFFORDABILITY_TOOL_PATH}
                title="Rent affordability calculator"
                description="Estimate a realistic monthly rent range from your income before you start searching."
                linkLabel="Run calculator"
                icon={ClipboardList}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="buying" intro={<SectionIntro title={page.buying.heading}>{page.buying.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.buying}>
              <VisualTextDetails details={page.visualTextDetails.buying} />
              <TipCardGrid items={page.buyingTopics} icon={Building2} />
              <LinkCardGrid items={[
                { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Purchase process, kosten koper and bidding strategy." },
                { label: "Mortgage for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Eligibility, borrowing capacity and application steps." },
              ]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="costs" intro={<SectionIntro title={page.housingCosts.heading}>{page.housingCosts.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.costs}>
              <VisualTextDetails details={page.visualTextDetails.costs} />
              <CostExampleGrid items={page.housingCostExamples} />
              <CityCostTable />
              <GuideCrossLink
                href={RENT_AFFORDABILITY_TOOL_PATH}
                title="Check rent against your income"
                description="Use the rent affordability calculator to stress-test listings before applying in competitive cities."
                linkLabel="Open rent calculator"
                icon={ClipboardList}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="cities" intro={<SectionIntro title={page.citiesSection.heading}>{page.citiesSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.cities}>
              <VisualTextDetails details={page.visualTextDetails.cities} />
              <CityHousingCardGrid items={page.cityCards} />
              <GuideCrossLink
                href={CITIES_HUB_PATH}
                title="Dutch Cities Hub"
                description="Compare Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and regional cities in one place."
                linkLabel="Compare all cities"
                icon={MapPin}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="temporary" intro={<SectionIntro title={page.temporary.heading}>{page.temporary.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.temporary}>
              <VisualTextDetails details={page.visualTextDetails.temporary} />
              <TipCardGrid items={page.temporaryOptions} icon={Home} />
              <BulletPanel title="Temporary stay planning tips" items={page.temporaryPlanningTips} />
              <LinkCardGrid items={[{ label: "Temporary accommodation guide", href: TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH, status: "comingSoon", description: "Short-stay options, registration rules and arrival windows." }]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="utilities" intro={<SectionIntro title={page.utilitiesSection.heading}>{page.utilitiesSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.utilities}>
              <VisualTextDetails details={page.visualTextDetails.utilities} />
              <TipCardGrid items={page.utilityTopics} icon={Zap} />
              <LinkCardGrid items={[
                { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Complete utilities setup after move-in." },
                { label: "Internet and Mobile", href: INTERNET_AND_MOBILE_NETHERLANDS_PATH, status: "live", description: "Broadband, SIM-only and eSIM setup." },
                { label: "Energy and Water", href: ENERGY_AND_WATER_NETHERLANDS_PATH, status: "live", description: "Electricity, gas, water and heating." },
              ]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="insurance" intro={<SectionIntro title={page.insurance.heading}>{page.insurance.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.insurance}>
              <VisualTextDetails details={page.visualTextDetails.insurance} />
              <TipCardGrid items={page.insuranceTopics} icon={Shield} />
              <BulletPanel title="Cover by renter or owner" items={page.insuranceByRoleTips} />
              <LinkCardGrid items={[{ label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare contents, home and liability cover." }]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="municipality" intro={<SectionIntro title={page.municipality.heading}>{page.municipality.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.municipality}>
              <VisualTextDetails details={page.visualTextDetails.municipality} />
              <BulletPanel title="Registration checklist" items={page.municipalitySteps} />
              <LinkCardGrid items={[
                { label: "Municipality Services", href: MUNICIPALITY_SERVICES_PATH, status: "live", description: "Gemeente registration, BSN, taxes and local rules." },
                { label: "BSN Registration", href: BSN_REGISTRATION_PATH, status: "live", description: "Documents, timing and employer onboarding context." },
                { label: "DigiD Awareness", href: DIGID_AWARENESS_PATH, status: "live", description: "Apply after your registered address receives post." },
              ]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="mortgages" intro={<SectionIntro title={page.mortgages.heading}>{page.mortgages.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.mortgages}>
              <VisualTextDetails details={page.visualTextDetails.mortgages} />
              <TipCardGrid items={page.mortgageTopics} icon={Landmark} />
              <BulletPanel title="Pre-approval preparation" items={page.mortgagePreApprovalSteps} />
              <LinkCardGrid items={[
                { label: "Mortgage for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Expat mortgage eligibility and application orientation." },
                { label: "Buy vs Rent Guide", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Decide whether ownership fits before applying." },
              ]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="life-stage" intro={<SectionIntro title={page.lifeStageSection.heading}>{page.lifeStageSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.lifeStage}>
              <VisualTextDetails details={page.visualTextDetails.lifeStage} />
              <TipCardGrid items={page.lifeStages} icon={Users} />
              <BulletPanel title="Decision prompts by profile" items={page.lifeStageDecisionTips} />
            </PremiumGuideSection>

            <PremiumGuideSection id="checklist" intro={<SectionIntro title={page.checklistSection.heading}>{page.checklistSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.checklist}>
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <SetupPhaseCards />
              <div className="grid gap-3 md:grid-cols-2">
                {page.housingChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.03]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10"><Check className="h-4 w-4" aria-hidden /></span>
                    <span className="text-sm font-bold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection id="mistakes" intro={<SectionIntro title={page.mistakesSection.heading}>{page.mistakesSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.mistakes}>
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <TipCardGrid items={page.commonMistakes} icon={ClipboardList} />
              <GuideCrossLink
                href={BUY_VS_RENT_NETHERLANDS_PATH}
                title="Avoid the wrong tenure choice"
                description="If you are unsure whether to rent or buy, use the structured comparison guide before committing."
                linkLabel="Compare rent vs buy"
                icon={Home}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="guides" intro={<SectionIntro title={page.guidesSection.heading}>{page.guidesSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.guides}>
              <VisualTextDetails details={page.visualTextDetails.guides} />
              <div className={guidePremiumCardGridClass(page.featuredGuides.length)}>
                {page.featuredGuides.map((item) => (
                  <LinkOrPlanned key={item.label} item={item} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="future-guides"
              intro={
                <SectionIntro eyebrow="Planned expansion" title={page.futureGuidesSection.heading}>
                  {page.futureGuidesSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.futureGuides}
            >
              <VisualTextDetails details={page.visualTextDetails.futureGuides} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.futureGuides.map((item) => (
                  <LinkOrPlanned key={item.href} item={item} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection id="faq" intro={<SectionIntro title={page.faqSection.heading}>{page.faqSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.faq}>
              <VisualTextDetails details={page.visualTextDetails.faq} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection id="sources" intro={<SectionIntro title={page.sourcesSection.heading}>{page.sourcesSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.sources}>
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <BulletPanel title="How to use these resources" items={page.sourceUsageTips} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.officialSources.map((source) => (
                  <a key={source.label} href={source.href} target="_blank" rel="noopener noreferrer" className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-black text-foreground">{source.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{source.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">Open official source <ExternalLink className="h-3.5 w-3.5" aria-hidden /></span>
                  </a>
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection id="related-guides" intro={<SectionIntro title={page.relatedSection.heading}>{page.relatedSection.paragraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.relatedGuides}>
              <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {page.relatedGuides.map((item) => (
                  <LinkOrPlanned key={item.label} item={item} />
                ))}
              </div>
            </PremiumGuideSection>

            <section id="explore-next" className="scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10">
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Plan Your Next Housing Step" tone="onDark">
                  <p>Move from this housing overview into renting, buying, mortgage, utilities and insurance guides.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={visualAfterIntroClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, index) => (
                      <ExploreLinkCard key={item.label} item={item} iconIndex={index} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
                    <ul className="mt-4 grid gap-3">
                      {page.exploreNextTips.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-100 ring-1 ring-white/15">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}

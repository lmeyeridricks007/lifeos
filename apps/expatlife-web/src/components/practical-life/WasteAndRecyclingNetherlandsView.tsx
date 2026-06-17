import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Home,
  Leaf,
  MapPin,
  Recycle,
  Trash2,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
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
  HOUSING_HUB_PATH,
  MUNICIPALITY_SERVICES_PATH,
  REGISTERING_ADDRESS_PATH,
  UTILITIES_NETHERLANDS_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  wasteAndRecyclingNetherlandsPage as page,
  type MunicipalityWasteDirectoryEntry,
  type PracticalLifeLink,
  type RecyclingCategory,
  type WasteCityCard,
} from "./wasteAndRecyclingNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [Building2, MapPin, ClipboardList, Recycle, Trash2, Home, Leaf] as const;
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

const organicBenefitTitles = ["Lower residual waste", "Support composting", "Reduce household waste"] as const;

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

function ExploreLinkCard({ item, iconIndex = 0, tone = "default" }: { item: PracticalLifeLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
      <p className="mt-4 text-sm font-bold text-foreground">Key points:</p>
      <ul className="mt-2 space-y-2">
        {page.quickAnswer.bullets.map((item) => (
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

function InfoTable({ title, columns, rows }: { title: string; columns: readonly string[]; rows: readonly Record<string, string>[] }) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
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
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
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

function TipCardGrid({ items, icon: Icon = Building2 }: { items: Array<{ title: string; body: string }>; icon?: typeof Building2 }) {
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

function ChecklistGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.03]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
            <Check className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-sm font-bold text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function ChecklistPhases({ items }: { items: readonly { phase: string; items: readonly string[] }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((phase) => (
        <article key={phase.phase} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{phase.phase}</h3>
          <ul className="mt-4 space-y-2">
            {phase.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function AvoidCallout({ label, text }: { label: string; text: string }) {
  return (
    <p className="rounded-2xl bg-copilot-bg-soft p-4 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
      <span className="font-bold text-foreground">{label}: </span>
      {text}
    </p>
  );
}

function LinkOrPlanned({ item, className }: { item: PracticalLifeLink; className?: string }) {
  const isLive = item.status !== "comingSoon";
  const content = (
    <div className="flex h-full flex-col">
      <span className="block text-base font-black leading-snug tracking-tight text-foreground">{item.label}</span>
      {item.description ? (
        <span className="mt-2 block text-sm font-normal leading-relaxed text-foreground-muted">{item.description}</span>
      ) : null}
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

function LinkCardGrid({ items }: { items: PracticalLifeLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <LinkOrPlanned key={item.label} item={item} />
      ))}
    </div>
  );
}

function RecyclingCategoryGrid({ items }: { items: readonly RecyclingCategory[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((category) => (
        <article key={category.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Recycle className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{category.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{category.body}</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Examples</p>
          <ul className="mt-2 space-y-1.5">
            {category.examples.map((example) => (
              <li key={example} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{example}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Avoid: </span>
            {category.avoid}
          </p>
        </article>
      ))}
    </div>
  );
}

function WasteCityCardGrid({ items }: { items: readonly WasteCityCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((city) => (
        <article key={city.city} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{city.population}</p>
              <h3 className="mt-1 text-lg font-black tracking-tight text-foreground">{city.city}</h3>
            </div>
            <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.collectionApproach}</p>
          <p className="mt-3 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Recycling emphasis: </span>
            {city.recyclingEmphasis}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={city.href}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50"
            >
              City guide
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <a
              href={city.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50"
            >
              Gemeente site
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function MunicipalityDirectoryGrid({ items }: { items: readonly MunicipalityWasteDirectoryEntry[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((entry) => (
        <article key={entry.municipality} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-black tracking-tight text-foreground">{entry.municipality}</h3>
            <Building2 className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Waste information: </span>
            {entry.wasteInformation}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Recycling services: </span>
            {entry.recyclingServices}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={entry.href}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50"
            >
              City guide
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <a
              href={entry.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50"
            >
              Waste portal
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </article>
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
                    Moving to the Netherlands
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={page.parentGuidePath} className="hover:text-foreground">
                    Municipality Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-foreground" aria-current="page">
                  Waste and Recycling
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
                  "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-card hover:bg-brand-strong",
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
        <nav aria-label="Waste and recycling page sections" className="flex gap-2 overflow-x-auto py-3">
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

export function WasteAndRecyclingNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));
  const undergroundCityCards = page.underground.cityExamples.map((item) => ({ title: item.city, body: item.note }));
  const organicBenefitCards = page.organic.organicBenefits.map((body, index) => ({
    title: organicBenefitTitles[index] ?? `Benefit ${index + 1}`,
    body,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Moving to the Netherlands", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Municipality Services", item: new URL(page.parentGuidePath, baseUrl).toString() },
          { name: "Waste and Recycling", item: new URL(page.path, baseUrl).toString() },
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
                <SectionIntro eyebrow="Quick answer" title={page.intro.heading}>
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
                href={MUNICIPALITY_SERVICES_PATH}
                title="Municipality Services"
                description="Connect waste and recycling rules to broader gemeente services including taxes, parking and registration."
                linkLabel="Open municipality guide"
                icon={Building2}
              />
              <GuideCrossLink
                href={MOVING_TO_NETHERLANDS_PATH}
                title="Moving to the Netherlands"
                description="Place waste setup in your wider relocation timeline alongside housing, registration and first-month household tasks."
                linkLabel="Open moving guide"
                icon={MapPin}
              />
              <GuideCrossLink
                href={UTILITIES_NETHERLANDS_PATH}
                title="Utilities in the Netherlands"
                description="Complete household setup with energy, water and internet after you understand local waste systems."
                linkLabel="Open utilities guide"
                icon={Home}
              />
              <GuideCrossLink
                href={REGISTERING_ADDRESS_PATH}
                title="Registering Your Address"
                description="Address registration unlocks waste passes, calendars and gemeente waste portals at your postcode."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
              <GuideCrossLink
                href={HOUSING_HUB_PATH}
                title="Housing in the Netherlands"
                description="Learn building-specific waste rules for apartments, VvE shared containers and new move-ins."
                linkLabel="Open housing hub"
                icon={Home}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="essentials"
              intro={
                <SectionIntro eyebrow="At a glance" title={page.essentialsSection.heading}>
                  {page.essentialsSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <VisualTextDetails details={page.visualTextDetails.snapshot} />
              <BulletPanel title="Core waste and recycling facts" items={page.essentialsSection.essentialsFacts} />
              <InfoTable
                title="Useful apps and portals"
                columns={["Resource", "What it helps with"]}
                rows={page.essentialsSection.usefulApps.map((row) => ({
                  Resource: row.name,
                  "What it helps with": row.detail,
                }))}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="understanding"
              intro={
                <SectionIntro title={page.understanding.heading}>
                  {page.understanding.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.understanding}
            >
              <VisualTextDetails details={page.visualTextDetails.understanding} />
              <InfoTable
                title="How collection systems differ by area"
                columns={["Area", "Containers", "Schedule", "Expat tip"]}
                rows={page.understanding.systemComparison.map((row) => ({
                  Area: row.area,
                  Containers: row.containers,
                  Schedule: row.schedule,
                  "Expat tip": row.expatTip,
                }))}
              />
              <BulletPanel title="How Dutch waste systems work" items={page.understanding.systemPoints} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="categories"
              intro={
                <SectionIntro title={page.categoriesSection.heading}>
                  {page.categoriesSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.categories}
            >
              <VisualTextDetails details={page.visualTextDetails.categories} />
              <RecyclingCategoryGrid items={page.recyclingCategories} />
              <BulletPanel title="Textiles, batteries and special streams" items={page.categoriesSection.specialStreamNotes} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="underground"
              intro={
                <SectionIntro title={page.underground.heading}>
                  {page.underground.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.underground}
            >
              <VisualTextDetails details={page.visualTextDetails.underground} />
              <TipCardGrid items={undergroundCityCards} icon={MapPin} />
              <BulletPanel title="Underground container access tips" items={page.underground.accessTips} />
              <GuideCrossLink
                href={REGISTERING_ADDRESS_PATH}
                title="Registering Your Address"
                description="Waste passes and underground container access often activate after address registration at your gemeente."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="household"
              intro={
                <SectionIntro title={page.household.heading}>
                  {page.household.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.household}
            >
              <VisualTextDetails details={page.visualTextDetails.household} />
              <InfoTable
                title="Household waste collection methods"
                columns={["Method", "Detail"]}
                rows={page.household.collectionMethods.map((row) => ({
                  Method: row.method,
                  Detail: row.detail,
                }))}
              />
              <BulletPanel title="Collection schedule tips" items={page.household.scheduleTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="glass"
              intro={
                <SectionIntro title={page.glass.heading}>
                  {page.glass.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.glass}
            >
              <VisualTextDetails details={page.visualTextDetails.glass} />
              <BulletPanel title="What goes in glass banks" items={page.glass.glassExamples} />
              <AvoidCallout label="Do not put in glass banks" text={page.glass.glassAvoid} />
              <BulletPanel title="Glass recycling tips" items={page.glass.glassTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="paper"
              intro={
                <SectionIntro title={page.paper.heading}>
                  {page.paper.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.paper}
            >
              <VisualTextDetails details={page.visualTextDetails.paper} />
              <BulletPanel title="Paper and cardboard examples" items={page.paper.paperExamples} />
              <AvoidCallout label="Keep out of paper stream" text={page.paper.paperAvoid} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="plastic"
              intro={
                <SectionIntro title={page.plastic.heading}>
                  {page.plastic.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.plastic}
            >
              <VisualTextDetails details={page.visualTextDetails.plastic} />
              <InfoTable
                title="Plastic collection streams — verify yours locally"
                columns={["Stream", "Usually accepted", "Usually not accepted"]}
                rows={page.plastic.plasticComparison.map((row) => ({
                  Stream: row.stream,
                  "Usually accepted": row.accepted,
                  "Usually not accepted": row.notAccepted,
                }))}
              />
              <BulletPanel title="Plastic packaging tips" items={page.plastic.plasticTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="organic"
              intro={
                <SectionIntro title={page.organic.heading}>
                  {page.organic.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.organic}
            >
              <VisualTextDetails details={page.visualTextDetails.organic} />
              <BulletPanel title="What belongs in GFT" items={page.organic.gftExamples} />
              <AvoidCallout label="Keep out of GFT" text={page.organic.gftAvoid} />
              <TipCardGrid items={organicBenefitCards} icon={Leaf} />
              <BulletPanel title="Kitchen GFT tips" items={page.organic.organicTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="recycling-centers"
              intro={
                <SectionIntro title={page.recyclingCenters.heading}>
                  {page.recyclingCenters.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.recyclingCenters}
            >
              <VisualTextDetails details={page.visualTextDetails.recyclingCenters} />
              <TipCardGrid items={page.recyclingCenters.centerItems} icon={Recycle} />
              <BulletPanel title="Recycling center access requirements" items={page.recyclingCenters.accessRequirements} />
              <BulletPanel title="Bulky waste and large items" items={page.recyclingCenters.bulkyWasteTips} />
              <GuideCrossLink
                href={MUNICIPALITY_SERVICES_PATH}
                title="Municipality Services"
                description="Find milieustraat locations, bulky waste booking and gemeente waste portals for your address."
                linkLabel="Open municipality guide"
                icon={Building2}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="electronics"
              intro={
                <SectionIntro title={page.electronics.heading}>
                  {page.electronics.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.electronics}
            >
              <VisualTextDetails details={page.visualTextDetails.electronics} />
              <BulletPanel title="Common e-waste examples" items={page.electronics.electronicsExamples} />
              <TipCardGrid items={page.electronics.electronicsChannels} icon={Trash2} />
              <BulletPanel title="Battery disposal tips" items={page.electronics.batteryTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cities"
              intro={
                <SectionIntro title={page.citiesSection.heading}>
                  {page.citiesSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.cities}
            >
              <VisualTextDetails details={page.visualTextDetails.cities} />
              <InfoTable
                title="City waste system comparison"
                columns={["City", "Container type", "Organic (GFT)", "Official resource"]}
                rows={page.cityComparison.map((row) => ({
                  City: row.city,
                  "Container type": row.containerType,
                  "Organic (GFT)": row.organic,
                  "Official resource": row.expatResource,
                }))}
              />
              <WasteCityCardGrid items={page.cityCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sustainability"
              intro={
                <SectionIntro title={page.sustainability.heading}>
                  {page.sustainability.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.sustainability}
            >
              <VisualTextDetails details={page.visualTextDetails.sustainability} />
              <TipCardGrid items={page.sustainability.culturePoints} icon={Leaf} />
              <BulletPanel title="Statiegeld (deposit return) tips" items={page.sustainability.statiegeldTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro title={page.mistakesSection.heading}>
                  {page.mistakesSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <TipCardGrid items={page.commonMistakes} icon={ClipboardList} />
              <GuideCrossLink
                href={MUNICIPALITY_SERVICES_PATH}
                title="Municipality Services"
                description="Double-check sorting rules, collection calendars and container access before your first pickup week."
                linkLabel="Open municipality guide"
                icon={Building2}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              intro={
                <SectionIntro title={page.checklistSection.heading}>
                  {page.checklistSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.checklist}
            >
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <ChecklistPhases items={page.checklistPhases} />
              <BulletPanel title="Suggested priority order" items={page.checklistSection.priorityOrder} />
              <ChecklistGrid items={page.checklist} />
              <GuideCrossLink
                href={REGISTERING_ADDRESS_PATH}
                title="Registering Your Address"
                description="Complete address registration first — waste passes, calendars and gemeente portals usually require a registered postcode."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="municipality-directory"
              intro={
                <SectionIntro title={page.municipalityDirectorySection.heading}>
                  {page.municipalityDirectorySection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.municipalityDirectory}
            >
              <VisualTextDetails details={page.visualTextDetails.municipalityDirectory} />
              <MunicipalityDirectoryGrid items={page.municipalityDirectory} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro title={page.faqSection.heading}>
                  {page.faqSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <VisualTextDetails details={page.visualTextDetails.faq} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sources"
              intro={
                <SectionIntro title={page.sourcesSection.heading}>
                  {page.sourcesSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.officialSources.map((source) => (
                  <a
                    key={source.label}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-black text-foreground">{source.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{source.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                      Open official source
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </a>
                ))}
              </div>
              <BulletPanel title="How to use these resources" items={page.sourceUsageTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title={page.relatedSection.heading}>
                  {page.relatedSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
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
                <SectionIntro eyebrow="Explore next" title={page.exploreNextSection.heading} tone="onDark">
                  {page.exploreNextSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={visualAfterIntroClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">{page.visualTextDetails.exploreNext.title}</h3>
                    <ul className="mt-4 grid gap-3 md:grid-cols-2">
                      {page.visualTextDetails.exploreNext.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
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

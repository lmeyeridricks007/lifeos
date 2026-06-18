import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Home,
  MapPin,
  ParkingCircle,
  Recycle,
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
  GETTING_AROUND_PATH,
  HOUSING_HUB_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  MUNICIPALITY_SERVICES_PATH,
  REGISTERING_ADDRESS_PATH,
  UTILITIES_NETHERLANDS_PATH,
  WASTE_AND_RECYCLING_PATH,
  parkingAndLocalPermitsNetherlandsPage as page,
  type MunicipalityParkingDirectoryEntry,
  type ParkingAppCard,
  type ParkingCityCard,
  type ParkingPermitStep,
  type PermitType,
  type PracticalLifeLink,
} from "./parkingAndLocalPermitsNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [Car, ParkingCircle, MapPin, Building2, ClipboardList, Home] as const;
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

function LinkCardGrid({ items }: { items: PracticalLifeLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <LinkOrPlanned key={item.label} item={item} />
      ))}
    </div>
  );
}

function PermitApplicationSteps({ items }: { items: readonly ParkingPermitStep[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.step}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.03]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-xs font-black text-brand-strong ring-1 ring-copilot-primary/10">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-bold text-foreground">{item.step}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
          </div>
        </div>
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

function PermitTypeGrid({ items }: { items: readonly PermitType[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((permit) => (
        <article key={permit.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <ClipboardList className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{permit.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{permit.body}</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Examples</p>
          <ul className="mt-2 space-y-1.5">
            {permit.examples.map((example) => (
              <li key={example} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{example}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Note: </span>
            {permit.note}
          </p>
        </article>
      ))}
    </div>
  );
}

function ParkingAppGrid({ items }: { items: readonly ParkingAppCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((app) => (
        <article key={app.name} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <ParkingCircle className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{app.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{app.summary}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Payment: </span>
            {app.payment}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Coverage: </span>
            {app.coverage}
          </p>
        </article>
      ))}
    </div>
  );
}

function ParkingCityCardGrid({ items }: { items: readonly ParkingCityCard[] }) {
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
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.parkingProfile}</p>
          <p className="mt-3 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Permit demand: </span>
            {city.permitDemand}
          </p>
          <p className="mt-3 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Visitor system: </span>
            {city.visitorSystem}
          </p>
          <p className="mt-3 rounded-2xl bg-copilot-bg-soft p-3 text-xs leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Park and ride: </span>
            {city.parkAndRide}
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

function MunicipalityParkingDirectoryGrid({ items }: { items: readonly MunicipalityParkingDirectoryEntry[] }) {
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
            <span className="font-bold text-foreground">Parking services: </span>
            {entry.parkingServices}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Permit information: </span>
            {entry.permitInformation}
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
              Parking portal
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
                  Parking and Local Permits
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
        <nav aria-label="Parking and local permits page sections" className="flex gap-2 overflow-x-auto py-3">
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

export function ParkingAndLocalPermitsNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));
  const parkRideCityCards = page.parkAndRide.cityExamples.map((item) => ({ title: item.city, body: item.note }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Moving to the Netherlands", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Municipality Services", item: new URL(page.parentGuidePath, baseUrl).toString() },
          { name: "Parking and Local Permits", item: new URL(page.path, baseUrl).toString() },
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
                description="Connect parking permits and local gemeente rules to broader registration, taxes and municipal services."
                linkLabel="Open municipality guide"
                icon={Building2}
              />
              <GuideCrossLink
                href={MOVING_TO_NETHERLANDS_PATH}
                title="Moving to the Netherlands"
                description="Place parking setup in your wider relocation timeline alongside housing, registration and first-month household tasks."
                linkLabel="Open moving guide"
                icon={MapPin}
              />
              <GuideCrossLink
                href={REGISTERING_ADDRESS_PATH}
                title="Registering Your Address"
                description="Address registration unlocks resident parking permits and postcode-specific zone maps at your gemeente."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
              <GuideCrossLink
                href={UTILITIES_NETHERLANDS_PATH}
                title="Utilities in the Netherlands"
                description="Complete household setup with energy, water and internet after you understand local parking rules."
                linkLabel="Open utilities guide"
                icon={Home}
              />
              <GuideCrossLink
                href={HOUSING_HUB_PATH}
                title="Housing in the Netherlands"
                description="Learn garage access, VvE parking rules and building-specific parking before relying on street permits."
                linkLabel="Open housing hub"
                icon={Home}
              />
              <GuideCrossLink
                href={WASTE_AND_RECYCLING_PATH}
                title="Waste and Recycling"
                description="Another core gemeente service — sorting, schedules and local rules that vary by municipality like parking."
                linkLabel="Open waste and recycling guide"
                icon={Recycle}
              />
              <GuideCrossLink
                href={GETTING_AROUND_PATH}
                title="Getting Around"
                description="Compare public transport, cycling and driving options before committing to car ownership and parking costs."
                linkLabel="Open getting around guide"
                icon={Car}
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
              <FeatureGrid items={page.snapshotCards} />
              <BulletPanel title="Core parking facts" items={page.essentialsSection.essentialsFacts} />
              <InfoTable
                title="How to read parking signs"
                columns={["Sign", "What it means"]}
                rows={page.essentialsSection.zoneSignGuide.map((row) => ({
                  Sign: row.sign,
                  "What it means": row.meaning,
                }))}
              />
              <InfoTable
                title="Useful resources"
                columns={["Resource", "What it helps with"]}
                rows={page.essentialsSection.usefulResources.map((row) => ({
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
                title="How parking systems differ by area"
                columns={["System", "Where", "Expat tip"]}
                rows={page.understanding.systemComparison.map((row) => ({
                  System: row.system,
                  Where: row.where,
                  "Expat tip": row.expatTip,
                }))}
              />
              <BulletPanel title="How Dutch parking systems work" items={page.understanding.systemPoints} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="resident"
              intro={
                <SectionIntro title={page.residentPermits.heading}>
                  {page.residentPermits.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.resident}
            >
              <VisualTextDetails details={page.visualTextDetails.resident} />
              <PermitApplicationSteps items={page.residentPermits.permitApplicationSteps} />
              <InfoTable
                title="Documents often required"
                columns={["Document", "Why it matters"]}
                rows={page.residentPermits.documentsOftenRequired.map((row) => ({
                  Document: row.document,
                  "Why it matters": row.detail,
                }))}
              />
              <BulletPanel title="Resident permit eligibility" items={page.residentPermits.eligibilityNotes} />
              <BulletPanel title="Waiting list notes" items={page.residentPermits.waitingListNotes} />
              <GuideCrossLink
                href={REGISTERING_ADDRESS_PATH}
                title="Registering Your Address"
                description="Resident permits usually require a registered postcode — complete address registration before applying."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="visitor"
              intro={
                <SectionIntro title={page.visitorPermits.heading}>
                  {page.visitorPermits.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.visitor}
            >
              <VisualTextDetails details={page.visualTextDetails.visitor} />
              <InfoTable
                title="Which visitor model fits your situation"
                columns={["Model", "When to use", "Expat tip"]}
                rows={page.visitorPermits.visitorModelComparison.map((row) => ({
                  Model: row.model,
                  "When to use": row.whenToUse,
                  "Expat tip": row.expatTip,
                }))}
              />
              <TipCardGrid items={page.visitorPermits.visitorModels} icon={ParkingCircle} />
              <AvoidCallout label="Important" text={page.visitorPermits.visitorAvoid} />
              <BulletPanel title="Visitor parking tips" items={page.visitorPermits.visitorTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="paid"
              intro={
                <SectionIntro title={page.paidParking.heading}>
                  {page.paidParking.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.paid}
            >
              <VisualTextDetails details={page.visualTextDetails.paid} />
              <InfoTable
                title="Payment options in paid zones"
                columns={["Method", "How it works", "Best for"]}
                rows={page.paidParking.paymentMethods.map((row) => ({
                  Method: row.method,
                  "How it works": row.detail,
                  "Best for": row.bestFor,
                }))}
              />
              <BulletPanel title="Paid zone tips" items={page.paidParking.zoneTips} />
              <BulletPanel title="Enforcement notes" items={page.paidParking.enforcementNotes} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="apps"
              intro={
                <SectionIntro title={page.appsSection.heading}>
                  {page.appsSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.apps}
            >
              <VisualTextDetails details={page.visualTextDetails.apps} />
              <ParkingAppGrid items={page.parkingApps} />
              <BulletPanel title="Choosing and using an app" items={page.appsSection.appSelectionTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="park-ride"
              intro={
                <SectionIntro title={page.parkAndRide.heading}>
                  {page.parkAndRide.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.parkRide}
            >
              <VisualTextDetails details={page.visualTextDetails.parkRide} />
              <InfoTable
                title="P+R examples by city"
                columns={["City", "Location", "Transit", "Note"]}
                rows={page.parkAndRide.locationComparison.map((row) => ({
                  City: row.city,
                  Location: row.location,
                  Transit: row.transit,
                  Note: row.note,
                }))}
              />
              <TipCardGrid items={parkRideCityCards} icon={MapPin} />
              <BulletPanel title="Park-and-ride benefits" items={page.parkAndRide.benefits} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="ev"
              intro={
                <SectionIntro title={page.evParking.heading}>
                  {page.evParking.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.ev}
            >
              <VisualTextDetails details={page.visualTextDetails.ev} />
              <InfoTable
                title="EV charging paths"
                columns={["Path", "How to set up", "Parking rule"]}
                rows={page.evParking.chargingPaths.map((row) => ({
                  Path: row.path,
                  "How to set up": row.setup,
                  "Parking rule": row.parkingRule,
                }))}
              />
              <TipCardGrid items={page.evParking.evTopics} icon={Car} />
              <BulletPanel title="EV parking tips" items={page.evParking.evTips} />
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
                title="City parking comparison at a glance"
                columns={["City", "Permit demand", "Paid parking", "Visitor system", "P+R"]}
                rows={page.citiesSection.comparisonTable.map((row) => ({
                  City: row.city,
                  "Permit demand": row.permitDemand,
                  "Paid parking": row.paidParking,
                  "Visitor system": row.visitorSystem,
                  "P+R": row.parkAndRide,
                }))}
              />
              <ParkingCityCardGrid items={page.cityCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="local-permits"
              intro={
                <SectionIntro title={page.localPermits.heading}>
                  {page.localPermits.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.localPermits}
            >
              <VisualTextDetails details={page.visualTextDetails.localPermits} />
              <PermitTypeGrid items={page.localPermits.permitTypes} />
              <GuideCrossLink
                href={MUNICIPALITY_SERVICES_PATH}
                title="Municipality Services"
                description="See how parking permits fit into broader gemeente registration, taxes and local admin."
                linkLabel="Open municipality guide"
                icon={Building2}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="car-ownership"
              intro={
                <SectionIntro title={page.carOwnership.heading}>
                  {page.carOwnership.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.carOwnership}
            >
              <VisualTextDetails details={page.visualTextDetails.carOwnership} />
              <InfoTable
                title="Mobility options compared"
                columns={["Option", "Typical costs", "Best for"]}
                rows={page.carOwnership.mobilityComparison.map((row) => ({
                  Option: row.option,
                  "Typical costs": row.typicalCost,
                  "Best for": row.bestFor,
                }))}
              />
              <TipCardGrid items={page.carOwnership.considerations} icon={Car} />
              <GuideCrossLink
                href={GETTING_AROUND_PATH}
                title="Getting Around"
                description="Weigh public transport, cycling and occasional car use before buying or importing a vehicle."
                linkLabel="Open getting around guide"
                icon={Car}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="costs"
              intro={
                <SectionIntro title={page.costs.heading}>
                  {page.costs.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.costs}
            >
              <VisualTextDetails details={page.visualTextDetails.costs} />
              <InfoTable
                title="Typical parking costs and fees"
                columns={["Item", "Range", "Note"]}
                rows={page.costs.costExamples.map((row) => ({
                  Item: row.item,
                  Range: row.range,
                  Note: row.note,
                }))}
              />
              <AvoidCallout label="Important" text={page.costs.costDisclaimer} />
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
                description="Complete address registration first — resident permits and zone maps usually require a registered postcode."
                linkLabel="Open address registration guide"
                icon={MapPin}
              />
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
              <AvoidCallout label="When in doubt" text={page.mistakesSection.avoidNote} />
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
              <MunicipalityParkingDirectoryGrid items={page.municipalityDirectory} />
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
              <LinkCardGrid items={[...page.relatedGuides]} />
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

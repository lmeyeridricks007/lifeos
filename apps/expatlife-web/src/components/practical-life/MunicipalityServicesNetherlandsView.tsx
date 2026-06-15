import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Check,
  ClipboardList,
  ExternalLink,
  Heart,
  Home,
  Landmark,
  MapPin,
  Trash2,
  Users,
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
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  BSN_REGISTRATION_PATH,
  BSN_NETHERLANDS_PATH,
  BUYING_HOUSE_PATH,
  CHILDCARE_ALLOWANCE_PATH,
  DIGID_AWARENESS_PATH,
  DIGID_NETHERLANDS_PATH,
  LOCAL_TAXES_NETHERLANDS_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  MUNICIPALITY_REGISTRATION_PATH,
  PROPERTY_TAX_PATH,
  REGISTER_ADDRESS_PATH,
  RENTING_NETHERLANDS_PATH,
  STARTING_BUSINESS_PATH,
  TAXES_HUB_PATH,
  UTILITIES_NETHERLANDS_PATH,
  ZZP_PATH,
  municipalityServicesNetherlandsPage as page,
  type CityMunicipalityCard,
  type MunicipalityDirectoryEntry,
  type PracticalLifeLink,
} from "./municipalityServicesNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass =
  "scroll-mt-24 rounded-[2rem] border border-slate-200/90 bg-white/92 p-6 shadow-card ring-1 ring-slate-900/[0.03] sm:p-8 lg:p-10";
const cardClass = cn(
  "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03]",
  movingNlCardMicroLiftClass
);
const iconPool = [Building2, MapPin, ClipboardList, Landmark, Users, Car, Trash2, Home, Briefcase, Heart] as const;
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

const registrationLinks: PracticalLifeLink[] = [
  {
    label: "Municipality Registration",
    href: MUNICIPALITY_REGISTRATION_PATH,
    status: "live",
    description: "Focused guide on registering your address and preparing documents.",
  },
  {
    label: "Register Address",
    href: REGISTER_ADDRESS_PATH,
    status: "live",
    description: "Address registration steps and proof-of-address preparation.",
  },
  {
    label: "BSN Registration",
    href: BSN_REGISTRATION_PATH,
    status: "live",
    description: "Live BSN guide with document and appointment detail.",
  },
];

const bsnLinks: PracticalLifeLink[] = [
  {
    label: "BSN Registration",
    href: BSN_REGISTRATION_PATH,
    status: "live",
    description: "Live BSN guide with document lists, timing and employer onboarding context.",
  },
  {
    label: "BSN Netherlands",
    href: BSN_NETHERLANDS_PATH,
    status: "comingSoon",
    description: "Planned practical-life pillar guide dedicated to BSN routes and documents.",
  },
];

const digitalLinks: PracticalLifeLink[] = [
  {
    label: "DigiD Awareness",
    href: DIGID_AWARENESS_PATH,
    status: "live",
    description: "Why DigiD matters and when to apply after registration.",
  },
  {
    label: "DigiD Netherlands",
    href: DIGID_NETHERLANDS_PATH,
    status: "comingSoon",
    description: "Step-by-step digital identity setup after BSN and address registration.",
  },
];

const familyLinks: PracticalLifeLink[] = [
  {
    label: "Childcare Allowance",
    href: CHILDCARE_ALLOWANCE_PATH,
    status: "live",
    description: "National allowance context paired with local childcare information.",
  },
  {
    label: "Register Address",
    href: REGISTER_ADDRESS_PATH,
    status: "live",
    description: "Register children and partners at your gemeente when household composition changes.",
  },
  {
    label: "Municipality Registration",
    href: MUNICIPALITY_REGISTRATION_PATH,
    status: "live",
    description: "Appointment and document preparation for family registration visits.",
  },
];

const socialLinks: PracticalLifeLink[] = [
  {
    label: "Moving to the Netherlands",
    href: MOVING_TO_NETHERLANDS_PATH,
    status: "live",
    description: "Wider relocation timeline including community settling and first-week orientation.",
  },
  {
    label: "DigiD Awareness",
    href: DIGID_AWARENESS_PATH,
    status: "live",
    description: "Digital access to government programs, tax portals and municipality services.",
  },
  {
    label: "Utilities Guide",
    href: UTILITIES_NETHERLANDS_PATH,
    status: "live",
    description: "Household setup that often runs alongside gemeente registration and local services.",
  },
];

const housingLinks: PracticalLifeLink[] = [
  {
    label: "Renting in the Netherlands",
    href: RENTING_NETHERLANDS_PATH,
    status: "live",
    description: "Landlord permission, registration and housing responsibilities for tenants.",
  },
  {
    label: "Buying a House",
    href: BUYING_HOUSE_PATH,
    status: "live",
    description: "Owner responsibilities including address registration and local charges.",
  },
  {
    label: "Register Address",
    href: REGISTER_ADDRESS_PATH,
    status: "live",
    description: "Core housing-municipality link for BSN, post and permits.",
  },
];

const businessLinks: PracticalLifeLink[] = [
  {
    label: "Starting a Business",
    href: STARTING_BUSINESS_PATH,
    status: "live",
    description: "KVK and gemeente permit context for entrepreneurs.",
  },
  {
    label: "ZZP Netherlands",
    href: ZZP_PATH,
    status: "live",
    description: "Freelancer setup including home-office and local compliance checks.",
  },
];

const localTaxLinks: PracticalLifeLink[] = [
  {
    label: "Taxes Hub",
    href: TAXES_HUB_PATH,
    status: "live",
    description: "National and local tax context beyond gemeente charge letters.",
  },
  {
    label: "Property Tax",
    href: PROPERTY_TAX_PATH,
    status: "live",
    description: "Municipal property levy context for owners and some renters.",
  },
  {
    label: "Local Taxes Netherlands",
    href: LOCAL_TAXES_NETHERLANDS_PATH,
    status: "comingSoon",
    description: "Deeper guide to gemeente tax letters, charges and payment steps.",
  },
];

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

function SectionIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="w-full max-w-none">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {children ? <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground-muted">{children}</div> : null}
    </div>
  );
}

function LinkOrPlanned({ item, className }: { item: PracticalLifeLink; className?: string }) {
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
                <li aria-hidden>
                  /
                </li>
                <li>
                  <Link href="/netherlands/" className="hover:text-foreground">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden>
                  /
                </li>
                <li>
                  <Link href={page.hubPath} className="hover:text-foreground">
                    Moving to the Netherlands
                  </Link>
                </li>
                <li aria-hidden>
                  /
                </li>
                <li className="font-semibold text-foreground" aria-current="page">
                  Municipality Services
                </li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
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
        <nav aria-label="Municipality services page sections" className="flex gap-2 overflow-x-auto py-3">
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

function NumberedSteps({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.03]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-xs font-black text-brand-strong ring-1 ring-copilot-primary/10">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-bold text-foreground">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </div>
        </div>
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

function CostExampleGrid({ items }: { items: typeof page.localTaxCostExamples }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

function LinkCardGrid({ items }: { items: PracticalLifeLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <LinkOrPlanned key={item.label} item={item} />
      ))}
    </div>
  );
}

function ParkingCityGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.parkingCityExamples.map((city) => (
        <Link
          key={city.city}
          href={city.href}
          className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Car className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-black tracking-tight text-foreground">{city.city}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.zoneNote}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.exampleCost}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.waitingList}</p>
        </Link>
      ))}
    </div>
  );
}

function CityMunicipalityCardGrid({ items }: { items: CityMunicipalityCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.city} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-black tracking-tight text-foreground">{item.city}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.population}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.expatServices}</p>
          <ul className="mt-3 space-y-1.5">
            {item.keyResources.map((resource) => (
              <li key={resource} className="flex gap-2 text-xs leading-relaxed text-foreground-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                <span>{resource}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={item.href}
              className={cn(
                "inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-foreground shadow-sm hover:bg-slate-50",
                transitionInteractive,
                activeBrightnessPress
              )}
            >
              City guide
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-foreground shadow-sm hover:bg-slate-50"
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

function DirectoryDetailList({ title, items }: { title: string; items: string[] }) {
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

function MunicipalityDirectory({ entries }: { entries: MunicipalityDirectoryEntry[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {entries.map((entry) => (
        <article key={entry.name} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Gemeente</p>
              <h3 className="mt-1 text-lg font-black tracking-tight text-foreground">{entry.name}</h3>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-foreground-muted">
              {entry.population}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{entry.summary}</p>
          <p className="mt-4 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/70 p-4 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Expat services: </span>
            {entry.expatServicesNote}
          </p>
          <div className="mt-4">
            <DirectoryDetailList title="Services offered" items={entry.offers} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.onlineServices.map((service) => (
              <span key={service} className="rounded-full bg-copilot-bg-soft px-2.5 py-1 text-[11px] font-bold text-brand-strong">
                {service}
              </span>
            ))}
          </div>
          <a
            href={entry.website}
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

export function MunicipalityServicesNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Moving to the Netherlands", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Municipality Services in the Netherlands", item: new URL(page.path, baseUrl).toString() },
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
                <SectionIntro eyebrow="Practical life" title={page.intro.heading}>
                  {page.intro.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.overview}
            >
              <VisualTextDetails details={page.visualTextDetails.overview} />
              <FeatureGrid items={page.snapshotCards} />
              <BulletPanel title={page.visualTextDetails.snapshot.title} items={page.visualTextDetails.snapshot.items} />
              <Link href={page.parentGuidePath} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <Building2 className="h-5 w-5 text-brand-strong" aria-hidden />
                <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">Moving to the Netherlands</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Continue into the complete moving hub for relocation timeline, first-week setup and wider practical-life guides.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                  Open moving guide
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="registration"
              intro={
                <SectionIntro title={page.registration.heading}>
                  {page.registration.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.registration}
            >
              <VisualTextDetails details={page.visualTextDetails.registration} />
              <NumberedSteps items={page.registrationSteps} />
              <BulletPanel title="Document preparation tips" items={page.documentTips} />
              <LinkCardGrid items={registrationLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="bsn"
              intro={
                <SectionIntro title={page.bsn.heading}>
                  {page.bsn.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.bsn}
            >
              <VisualTextDetails details={page.visualTextDetails.bsn} />
              <TipCardGrid items={page.bsnUses} icon={ClipboardList} />
              <BulletPanel title="BSN timing and privacy tips" items={page.bsnTimingTips} />
              <LinkCardGrid items={bsnLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="digital"
              intro={
                <SectionIntro title={page.digital.heading}>
                  {page.digital.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.digital}
            >
              <VisualTextDetails details={page.visualTextDetails.digital} />
              <BulletPanel title="DigiD setup checklist" items={page.digidSetupSteps} />
              <TipCardGrid items={page.digitalServices} icon={Landmark} />
              <LinkCardGrid items={digitalLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="local-taxes"
              intro={
                <SectionIntro title={page.localTaxes.heading}>
                  {page.localTaxes.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.localTaxes}
            >
              <VisualTextDetails details={page.visualTextDetails.localTaxes} />
              <TipCardGrid items={page.localTaxExamples} icon={Landmark} />
              <div className="space-y-4">
                <h3 className="text-lg font-black tracking-tight text-foreground">Example municipal charge ranges</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  These are orientation ranges only — not quotes, guarantees or tax advice. Verify current amounts on your gemeente website.
                </p>
                <CostExampleGrid items={page.localTaxCostExamples} />
              </div>
              <BulletPanel title="How to respond to gemeente tax letters" items={page.localTaxResponseTips} />
              <LinkCardGrid items={localTaxLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="parking"
              intro={
                <SectionIntro title={page.parking.heading}>
                  {page.parking.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.parking}
            >
              <VisualTextDetails details={page.visualTextDetails.parking} />
              <BulletPanel title="Resident permit application steps" items={page.parkingPermitSteps} />
              <ParkingCityGrid />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="waste"
              intro={
                <SectionIntro title={page.waste.heading}>
                  {page.waste.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.waste}
            >
              <VisualTextDetails details={page.visualTextDetails.waste} />
              <TipCardGrid items={page.wasteRules} icon={Trash2} />
              <BulletPanel title="First-week waste setup" items={page.wasteSetupSteps} />
              <LinkCardGrid
                items={[
                  {
                    label: "Utilities Guide",
                    href: UTILITIES_NETHERLANDS_PATH,
                    status: "live",
                    description: "Energy, water, internet, mobile and waste within the wider utilities picture.",
                  },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="family"
              intro={
                <SectionIntro title={page.family.heading}>
                  {page.family.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.family}
            >
              <VisualTextDetails details={page.visualTextDetails.family} />
              <TipCardGrid items={page.familyServices} icon={Users} />
              <BulletPanel title="Family registration and school tips" items={page.familyRegistrationTips} />
              <LinkCardGrid items={familyLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="housing"
              intro={
                <SectionIntro title={page.housing.heading}>
                  {page.housing.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.housing}
            >
              <VisualTextDetails details={page.visualTextDetails.housing} />
              <TipCardGrid items={page.housingTopics} icon={Home} />
              <BulletPanel title="Address change checklist" items={page.housingAddressChangeTips} />
              <LinkCardGrid items={housingLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="business"
              intro={
                <SectionIntro title={page.business.heading}>
                  {page.business.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.business}
            >
              <VisualTextDetails details={page.visualTextDetails.business} />
              <TipCardGrid items={page.businessTopics} icon={Briefcase} />
              <BulletPanel title="Business permit checklist" items={page.businessPermitChecklist} />
              <LinkCardGrid items={businessLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="social"
              intro={
                <SectionIntro title={page.social.heading}>
                  {page.social.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.social}
            >
              <VisualTextDetails details={page.visualTextDetails.social} />
              <TipCardGrid items={page.socialPrograms} icon={Heart} />
              <BulletPanel title="Newcomer community orientation" items={page.socialNewcomerTips} />
              <LinkCardGrid items={socialLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cities"
              intro={
                <SectionIntro title="Major Dutch Municipalities">
                  <p>Compare appointment access, expat desks and online tools across popular relocation cities.</p>
                </SectionIntro>
              }
              visual={page.visuals.cities}
            >
              <VisualTextDetails details={page.visualTextDetails.cities} />
              <CityMunicipalityCardGrid items={page.cityMunicipalityCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              intro={
                <SectionIntro title="New Arrival Municipality Checklist">
                  <p>Use this sequence after confirming your address and move-in date.</p>
                </SectionIntro>
              }
              visual={page.visuals.checklist}
            >
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <SetupPhaseCards />
              <div className="grid gap-3 md:grid-cols-2">
                {page.newArrivalChecklist.map((item) => (
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
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro title="Common Municipality Mistakes">
                  <p>These are the gemeente setup errors expats most often make after arriving in the Netherlands.</p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <TipCardGrid items={page.commonMistakes} icon={ClipboardList} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="directory"
              intro={
                <SectionIntro title="Municipality Directory">
                  <p>Population figures are orientation only. Verify current services, fees and appointment processes on each gemeente website.</p>
                </SectionIntro>
              }
              visual={page.visuals.directory}
            >
              <VisualTextDetails details={page.visualTextDetails.directory} />
              <MunicipalityDirectory entries={page.municipalityDirectory} />
            </PremiumGuideSection>

            <section id="future-guides" className={sectionClass}>
              <SectionIntro eyebrow="Planned expansion" title="Deeper Practical-Life Guides">
                <p>These focused child guides are planned as the practical-life cluster expands. Use this page for the full overview until they ship.</p>
              </SectionIntro>
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.futureGuides} />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {page.futureGuides.map((item) => (
                    <LinkOrPlanned key={item.href} item={item} />
                  ))}
                </div>
              </div>
            </section>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro title="Municipality Services FAQ">
                  <p>Use these quick answers for orientation before checking your gemeente website and official sources.</p>
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
                <SectionIntro title="Official Resources">
                  <p>Municipality services, registration requirements and local regulations change over time. Always verify current information with official sources.</p>
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <BulletPanel title="How to use these resources" items={page.sourceUsageTips} />
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
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title="Related Guides">
                  <p>Continue from municipality services into BSN, DigiD, housing, taxes and relocation guides.</p>
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
                  Move from municipality services into BSN and DigiD setup, utilities, housing and your broader relocation checklist.
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

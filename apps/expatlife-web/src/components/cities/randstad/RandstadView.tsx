import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Home,
  Landmark,
  MapPin,
  Network,
  Route,
  Search,
  Train,
  Users,
  Waves,
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
import { getSiteOrigin } from "@/lib/site-origin";
import {
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { randstadPage as meta } from "./randstadPageModel";

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "p-6 sm:p-8"
);
const mutedCardClass = cn(
  "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
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

type InternalLink = { label: string; href: string; description?: string };

const randstadMapCities = [
  { name: "Amsterdam", href: "/netherlands/amsterdam/", x: 56, y: 25, core: true },
  { name: "Haarlem", href: "/netherlands/haarlem/", x: 42, y: 29, core: false },
  { name: "Amstelveen", href: "/netherlands/amstelveen/", x: 61, y: 35, core: false },
  { name: "Leiden", href: "/netherlands/leiden/", x: 37, y: 47, core: false },
  { name: "The Hague", href: "/netherlands/the-hague/", x: 28, y: 60, core: true },
  { name: "Delft", href: "/netherlands/delft/", x: 40, y: 68, core: false },
  { name: "Rotterdam", href: "/netherlands/rotterdam/", x: 49, y: 76, core: true },
  { name: "Utrecht", href: "/netherlands/utrecht/", x: 78, y: 56, core: true },
] as const;

const randstadMapConnections = [
  ["Amsterdam", "Haarlem"],
  ["Amsterdam", "Amstelveen"],
  ["Amsterdam", "Leiden"],
  ["Leiden", "The Hague"],
  ["The Hague", "Delft"],
  ["Delft", "Rotterdam"],
  ["Rotterdam", "Utrecht"],
  ["Utrecht", "Amsterdam"],
] as const;

const cityVisuals = {
  Amsterdam: { Icon: Briefcase, accentClass: "from-blue-600 to-cyan-500", nodeClass: "bg-blue-600", marker: "AMS" },
  Rotterdam: { Icon: Waves, accentClass: "from-cyan-600 to-slate-700", nodeClass: "bg-cyan-600", marker: "RTM" },
  "The Hague": { Icon: Landmark, accentClass: "from-indigo-600 to-sky-500", nodeClass: "bg-indigo-600", marker: "HAG" },
  Utrecht: { Icon: Train, accentClass: "from-orange-500 to-blue-600", nodeClass: "bg-orange-500", marker: "UTR" },
  Haarlem: { Icon: Building2, accentClass: "from-teal-600 to-sky-500", nodeClass: "bg-teal-600", marker: "HLM" },
  Leiden: { Icon: GraduationCap, accentClass: "from-emerald-600 to-teal-500", nodeClass: "bg-emerald-600", marker: "LDN" },
  Delft: { Icon: GraduationCap, accentClass: "from-sky-600 to-orange-500", nodeClass: "bg-sky-600", marker: "DLF" },
  Amstelveen: { Icon: Home, accentClass: "from-blue-600 to-emerald-500", nodeClass: "bg-emerald-600", marker: "AMV" },
} as const;

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
    <div className="max-w-3xl">
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function RandstadMapCard() {
  const byName = new Map(randstadMapCities.map((city) => [city.name, city]));

  return (
    <section
      aria-labelledby="randstad-map-heading"
      className={cn(
        CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
        "mt-7 p-5 sm:p-6",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.7fr)] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Map view</p>
          <h3 id="randstad-map-heading" className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Major Randstad cities on the map
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            The Randstad sits around the western Netherlands, with Amsterdam to the north, Rotterdam and The Hague to
            the south-west, and Utrecht inland to the east. Smaller cities often work as practical bases between those
            core hubs.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-brand-strong ring-1 ring-brand/15">Core hubs</span>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800 ring-1 ring-teal-200/70">Nearby options</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 ring-1 ring-slate-200/80">Common commute links</span>
          </div>
        </div>

        <div
          className="relative isolate aspect-[4/3] min-h-[300px] overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50 via-white to-teal-50 shadow-inner ring-1 ring-slate-900/[0.04]"
          role="img"
          aria-label="Simplified map of the Randstad showing Amsterdam, Haarlem, Amstelveen, Leiden, The Hague, Delft, Rotterdam, and Utrecht."
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 75" aria-hidden="true">
            <path
              d="M6 2 C12 11 15 21 12 31 C9 41 14 51 11 64 C16 68 27 70 35 65 C43 59 48 68 59 64 C72 58 78 49 90 54 C95 43 91 31 82 25 C73 19 74 8 64 5 C54 2 43 9 34 5 C24 1 15 0 6 2Z"
              fill="rgba(255,255,255,0.82)"
              stroke="rgba(14,116,144,0.18)"
              strokeWidth="1"
            />
            <path d="M3 0 C9 16 5 31 9 46 C13 61 8 68 0 75 L0 0Z" fill="rgba(186,230,253,0.72)" />
            <path d="M16 61 C28 56 41 57 54 63 C67 69 79 66 96 59" fill="none" stroke="rgba(14,165,233,0.18)" strokeWidth="2" />
            <path d="M20 27 C31 34 39 39 49 48 C58 56 69 58 83 55" fill="none" stroke="rgba(14,165,233,0.14)" strokeWidth="1.5" />
            {randstadMapConnections.map(([fromName, toName]) => {
              const from = byName.get(fromName);
              const to = byName.get(toName);
              if (!from || !to) return null;
              return (
                <line
                  key={`${fromName}-${toName}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(37,99,235,0.42)"
                  strokeWidth="1.4"
                  strokeDasharray="3 2"
                />
              );
            })}
          </svg>

          {randstadMapCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className={cn(
                "absolute z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full text-xs font-bold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2",
                city.core
                  ? "bg-brand px-3 py-1.5 text-white ring-4 ring-brand/15"
                  : "bg-white px-2.5 py-1 text-foreground ring-1 ring-slate-200/90 hover:text-brand-strong",
                transitionInteractive,
                activeBrightnessPress
              )}
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              aria-label={`Open ${city.name} guide`}
            >
              <span className={cn("mr-1 inline-block rounded-full align-middle", city.core ? "h-2 w-2 bg-cyan-100" : "h-1.5 w-1.5 bg-teal-500")} />
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkPills({ links }: { links: readonly InternalLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "rounded-full border border-border bg-white px-3 py-1.5 text-sm font-semibold text-foreground-muted hover:border-brand/30 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
            transitionInteractive,
            activeBrightnessPress
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function LinkCard({ link }: { link: InternalLink }) {
  return (
    <Link
      href={link.href}
      className={cn(
        "group rounded-2xl border border-border bg-white p-5 shadow-sm hover:border-brand/35 hover:bg-copilot-bg-soft/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        transitionInteractive,
        activeBrightnessPress,
        movingNlCardMicroLiftClass
      )}
    >
      <span className="flex items-center justify-between gap-3 text-sm font-semibold text-foreground group-hover:text-brand-strong">
        {link.label}
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      </span>
      {link.description ? <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{link.description}</p> : null}
    </Link>
  );
}

function InfographicFigure({
  image,
  priority = false,
}: {
  image: { src: string; alt: string; caption: string };
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card ring-1 ring-slate-900/[0.04]">
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        priority={priority}
        sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
        className="aspect-[16/9] h-auto w-full object-cover"
      />
      <figcaption className="border-t border-border bg-surface-muted/50 px-5 py-4 text-sm leading-relaxed text-foreground-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function RandstadCityCard({ city }: { city: (typeof meta.mainCities)[number] }) {
  const visual = cityVisuals[city.name];
  const Icon = visual.Icon;

  return (
    <article className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "flex h-full flex-col p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r", visual.accentClass)} aria-hidden />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-copilot-primary/10 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary">
            {city.role}
          </p>
          <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">{city.name}</h3>
        </div>
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-card ring-1 ring-white/60",
            visual.nodeClass
          )}
          aria-hidden
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm ring-1 ring-slate-900/[0.03]">
        <div className="relative h-16 overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-white to-copilot-bg-soft">
          <div className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-slate-300" />
          <div className="absolute left-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-300" />
          <div className="absolute right-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-300" />
          <div className={cn("absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-black text-white shadow-sm", visual.nodeClass)}>
            {visual.marker}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.summary}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold tracking-tight text-copilot-text-secondary">Good fit if you need</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {city.bestFor.map((item) => (
            <span key={item} className="rounded-full border border-border bg-white px-2.5 py-1 text-xs font-semibold text-foreground-muted shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-sm leading-relaxed text-blue-950/80">
          <span className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-blue-900">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Watch-out
          </span>
          {city.watchOut}
        </div>
        <div className="rounded-xl border border-teal-100 bg-teal-50/70 px-3 py-3 text-sm leading-relaxed text-teal-950/80">
          <span className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-teal-900">
            <Train className="h-3.5 w-3.5" aria-hidden />
            Commute lens
          </span>
          {city.commuteNote}
        </div>
      </div>

      <Link href={city.href} className={cn(secondaryCtaClass, "mt-5 w-full")}>
        Open {city.name} guide
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}

function RandstadConceptVisual() {
  const routes = [
    { from: "Live", to: "Work", example: "Haarlem -> Amsterdam" },
    { from: "Study", to: "Research", example: "Leiden / Delft" },
    { from: "Family base", to: "Services", example: "Amstelveen -> Amsterdam Zuid" },
  ];
  const points = [
    { label: "Network of cities", Icon: Network, body: "Amsterdam, Rotterdam, The Hague and Utrecht anchor the region." },
    { label: "Cross-city routines", Icon: Route, body: "Many expats combine a home city, work city and service city." },
    { label: "Housing pressure", Icon: Home, body: "A wider search can help if the core city is too competitive." },
  ];

  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)} aria-label="Randstad concept summary">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-copilot-bg-soft/60 to-sky-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">How to read the region</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Think in city combinations</h3>
        <div className="mt-5 grid gap-3">
          {routes.map((route) => (
            <div key={route.example} className="rounded-2xl border border-white bg-white/95 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand px-2.5 py-1 text-xs font-bold text-white">{route.from}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand/50 to-copilot-accent/50" aria-hidden />
                <span className="rounded-full bg-copilot-bg-soft px-2.5 py-1 text-xs font-bold text-brand-strong ring-1 ring-copilot-primary/10">
                  {route.to}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">{route.example}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {points.map(({ label, Icon, body }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function WorkSectorVisual() {
  const sectors = [
    { city: "Amsterdam", label: "Tech, finance, media", Icon: Briefcase },
    { city: "Rotterdam", label: "Port, logistics, trade", Icon: Waves },
    { city: "The Hague", label: "Diplomacy, legal, NGOs", Icon: Landmark },
    { city: "Utrecht", label: "Central business, health, education", Icon: Train },
    { city: "Leiden / Delft", label: "Science, biotech, engineering", Icon: GraduationCap },
  ];

  return (
    <div className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Work clusters</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Jobs are clustered by city strength</h3>
      <div className="mt-5 grid gap-3">
        {sectors.map(({ city, label, Icon }) => (
          <div key={city} className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-foreground">{city}</span>
              <span className="mt-0.5 block text-sm text-foreground-muted">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaFitVisual() {
  const rows = [
    { label: "Most options", body: "Professionals, couples, students and founders who want the widest service ecosystem.", Icon: Users },
    { label: "Best when flexible", body: "You can compare city + commute combinations instead of needing one exact postcode.", Icon: Search },
    { label: "Check before committing", body: "Housing, school routes and weekly travel still decide whether the region works.", Icon: CheckCircle2 },
  ];

  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Decision signal</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Choose the Randstad for optionality</h3>
      <div className="mt-5 grid gap-3">
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className="rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand-strong" aria-hidden />
              <p className="text-sm font-semibold text-foreground">{label}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

function RandstadHeroGraphic() {
  return (
    <figure className="relative isolate m-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card ring-1 ring-slate-900/[0.04]">
      <Image
        src={meta.hero.image.src}
        alt={meta.hero.image.alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="aspect-[16/11] h-full w-full object-cover md:aspect-[5/4]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

export function RandstadView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Randstad", item: new URL(meta.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
              <div>
                <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                  <Link href="/" className="hover:text-foreground">Home</Link>
                  <span aria-hidden>/</span>
                  <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                  <span aria-hidden>/</span>
                  <Link href="/netherlands/cities/" className="hover:text-foreground">Cities</Link>
                  <span aria-hidden>/</span>
                  <span className="text-foreground" aria-current="page">Randstad</span>
                </nav>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{meta.hero.eyebrow}</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {meta.hero.pageTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{meta.hero.subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {meta.hero.chips.map((chip) => (
                    <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>
                    {meta.hero.primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={meta.hero.secondaryCta.href} className={secondaryCtaClass}>
                    {meta.hero.secondaryCta.label}
                  </Link>
                </div>
              </div>
              <RandstadHeroGraphic />
            </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm">
            <nav aria-label="Randstad guide sections" className="flex min-w-max gap-2">
              {meta.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                    transitionInteractive,
                    activeBrightnessPress
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 space-y-8">
            <section id="what-is-the-randstad" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-start">
                <SectionIntro title="What Is the Randstad?">
                  <p>
                    The Randstad is the Netherlands&apos; main urban-economic region. It connects major cities including Amsterdam,
                    Rotterdam, The Hague and Utrecht, plus surrounding cities that are closely tied by work, study, services,
                    and transport.
                  </p>
                  <p>
                    For many expats, this is where international jobs, universities, relocation services, specialist providers,
                    and transport links are easiest to reach. It is also where housing competition is often strongest.
                  </p>
                  <p>
                    The Randstad is best understood as a network of cities, not one unified city. Amsterdam, Rotterdam, The
                    Hague, Utrecht, Haarlem, Leiden, Delft and Amstelveen can feel very different, and many expats work in one
                    Randstad city while living in another.
                  </p>
                </SectionIntro>
                <RandstadConceptVisual />
              </div>
            </section>

            <section id="randstad-at-a-glance" className={sectionClass}>
              <SectionIntro title="Randstad at a Glance" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.snapshotCards.map((card) => (
                  <article key={card.title} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="where-is-the-randstad" className={sectionClass}>
              <SectionIntro title="Where Is the Randstad?">
                <p>
                  The Randstad sits in the western Netherlands. Depending on the definition, it includes North Holland, South
                  Holland, Utrecht and parts of Flevoland. The core idea is practical: cities are connected by train, road,
                  jobs, universities, services, and daily commuting patterns.
                </p>
                <p>
                  That connectivity matters for relocation. You may search housing in one city, work in another, and use a
                  third city for university, airport access, or specialist services.
                </p>
              </SectionIntro>
              <div className="mt-6">
                <LinkPills links={meta.regionLinks} />
              </div>
              <RandstadMapCard />
              <div className="mt-7">
                <InfographicFigure image={meta.infographics.cityNetwork} />
              </div>
            </section>

            <section id="main-randstad-cities" className={sectionClass}>
              <SectionIntro
                title="Main Randstad Cities for Expats"
                eyebrow="City network"
              >
                <p>
                  Use these as starting points, not a ranking. The right choice depends on your office location, household,
                  housing luck, school route, and weekly commute.
                </p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {meta.mainCities.map((city) => (
                  <RandstadCityCard key={city.name} city={city} />
                ))}
              </div>
            </section>

            <section id="lifestyle-fit" className={sectionClass}>
              <SectionIntro title="Which Randstad City Fits Your Lifestyle?" />
              <div className="mt-6">
                <InfographicFigure image={meta.infographics.cityFit} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.lifestyleComparisons.map((item) => (
                  <article key={item.title} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="housing" className={sectionClass}>
              <SectionIntro title="Housing in the Randstad">
                <p>
                  The Randstad has the highest housing pressure in many relocation journeys. Expats should compare commute
                  options, not only central neighbourhoods or famous city names.
                </p>
                <p>
                  Living outside the biggest city can sometimes improve value or availability, especially if train access,
                  bike-to-station time, and hybrid work patterns still fit your week. Housing platforms, rental agencies and
                  relocation agencies can help, but always verify registration eligibility, fees, deposits, and contract terms.
                </p>
              </SectionIntro>
              <div className="mt-7">
                <InfographicFigure image={meta.infographics.commuteHousing} />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {meta.housingLinks.map((link) => <LinkCard key={link.href} link={link} />)}
              </div>
            </section>

            <section id="jobs-business" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] lg:items-start">
                <div>
                  <SectionIntro title="Jobs and Business in the Randstad">
                    <p>
                      Amsterdam is strong for tech, finance, startups, media and corporate HQs. Rotterdam is tied to port,
                      logistics, maritime, energy and trade. The Hague is known for government, diplomacy, legal work, NGOs and
                      international institutions. Utrecht supports central business, health, education, transport and professional
                      services. Leiden and Delft add universities, science, biotech and engineering.
                    </p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {meta.workLinks.map((link) => <LinkCard key={link.href} link={link} />)}
                  </div>
                </div>
                <WorkSectorVisual />
              </div>
            </section>

            <section id="commuting" className={sectionClass}>
              <SectionIntro title="Commuting Across the Randstad">
                <p>
                  Many expats live in one city and work in another. Train access can be more important than city boundaries,
                  so compare the door-to-door routine before choosing housing.
                </p>
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className={mutedCardClass}>
                  <h3 className="font-semibold text-foreground">Before choosing housing, compare:</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
                    {meta.commuteChecks.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={mutedCardClass}>
                  <h3 className="font-semibold text-foreground">Practical examples:</h3>
                  <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                    {meta.commuteExamples.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="best-for" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] lg:items-start">
                <div>
                  <SectionIntro title="Who the Randstad Is Best For" />
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {meta.personas.map((persona) => (
                      <div key={persona} className={cn("rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/80 px-4 py-3 text-sm font-semibold text-foreground shadow-sm ring-1 ring-copilot-primary/[0.04]", movingNlCardMicroLiftClass)}>
                        {persona}
                      </div>
                    ))}
                  </div>
                </div>
                <PersonaFitVisual />
              </div>
            </section>

            <section id="beyond-randstad" className={sectionClass}>
              <SectionIntro title="When to Look Beyond the Randstad">
                <p>
                  Look beyond the Randstad if housing cost is the main concern, you prefer quieter cities, your job is remote,
                  you want more nature or space, or your work is linked to another region.
                </p>
              </SectionIntro>
              <div className="mt-6">
                <LinkPills links={meta.outsideRandstadLinks} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro title="Services That Help Expats Settle in the Randstad">
                <p>
                  The Randstad has a broad service ecosystem for housing, visas, banking, insurance, schools, and relocation.
                  Compare categories first, then verify provider coverage, pricing, and eligibility on official sites.
                </p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.serviceLinks.map((link) => <LinkCard key={link.href} link={link} />)}
              </div>
              <div className="mt-6">
                <Link href="/netherlands/services/" className={primaryCtaClass}>
                  Open all expat services
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <SectionIntro title="Common Randstad Relocation Scenarios" />
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {meta.scenarios.map((scenario) => (
                  <article key={scenario.title} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-bold text-foreground">{scenario.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
                    <div className="mt-4">
                      <LinkPills links={scenario.links} />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro title="Official Sources and Useful References" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {meta.officialSources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-foreground transition-colors hover:border-brand/35 hover:text-brand-strong"
                    >
                      {source.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro title="Related Guides" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {meta.relatedGuides.map((link) => <LinkCard key={link.href} link={link} />)}
              </div>
            </section>

            <section id="plan-your-randstad-move" className="scroll-mt-28 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl sm:p-8">
              <SectionIntro title="Plan Your Randstad Move" tone="onDark">
                <p>
                  Move from regional overview to concrete decisions: compare cities, open service categories, and connect
                  your housing search with your relocation timeline.
                </p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {meta.exploreNextCards.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group rounded-2xl border border-white/10 bg-white/10 p-5 transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center justify-between gap-3 text-sm font-semibold text-white">
                      {card.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

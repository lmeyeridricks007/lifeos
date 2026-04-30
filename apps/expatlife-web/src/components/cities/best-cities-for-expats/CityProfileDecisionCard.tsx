import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { CITIES_FUNNEL_SCENARIO_CHIP } from "@/src/components/cities/shared/citiesFunnelPageUi";
import type { BestCitiesProfileCard, BestCitiesProfileCardAccent } from "./config/citiesBestForExpats.types";

const ACCENTS: readonly BestCitiesProfileCardAccent[] = [
  "sky",
  "violet",
  "emerald",
  "amber",
  "rose",
  "cyan",
  "indigo",
  "teal",
  "fuchsia",
] as const;

function normalizeAccent(a?: BestCitiesProfileCardAccent): BestCitiesProfileCardAccent {
  return a && ACCENTS.includes(a) ? a : "sky";
}

/** Hero fallback only — body and panels stay neutral so rows look cohesive. */
type AccentFallback = { banner: string; orb: string };

const ACCENT_FALLBACK: Record<BestCitiesProfileCardAccent, AccentFallback> = {
  sky: { banner: "bg-gradient-to-br from-sky-200/35 via-slate-50 to-white", orb: "bg-sky-400/50" },
  violet: { banner: "bg-gradient-to-br from-violet-200/35 via-slate-50 to-white", orb: "bg-violet-400/45" },
  emerald: { banner: "bg-gradient-to-br from-emerald-200/35 via-slate-50 to-white", orb: "bg-emerald-400/45" },
  amber: { banner: "bg-gradient-to-br from-amber-200/35 via-slate-50 to-white", orb: "bg-amber-400/45" },
  rose: { banner: "bg-gradient-to-br from-rose-200/35 via-slate-50 to-white", orb: "bg-rose-400/45" },
  cyan: { banner: "bg-gradient-to-br from-cyan-200/35 via-slate-50 to-white", orb: "bg-cyan-400/45" },
  indigo: { banner: "bg-gradient-to-br from-indigo-200/35 via-slate-50 to-white", orb: "bg-indigo-400/45" },
  teal: { banner: "bg-gradient-to-br from-teal-200/35 via-slate-50 to-white", orb: "bg-teal-400/45" },
  fuchsia: { banner: "bg-gradient-to-br from-fuchsia-200/35 via-slate-50 to-white", orb: "bg-fuchsia-400/45" },
};

const BEST_FOR_PANEL =
  "rounded-xl border border-slate-200/90 border-l-4 border-l-sky-500 bg-white p-3.5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-4";
const WATCH_OUTS_PANEL =
  "rounded-xl border border-slate-200/90 border-l-4 border-l-amber-400/95 bg-gradient-to-br from-amber-50/50 to-white p-3.5 shadow-sm ring-1 ring-amber-100/40 sm:p-4";

const PROFILE_PILL_CLASS =
  "rounded-full border border-copilot-primary/18 bg-copilot-bg-soft/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-copilot-text-primary";

const TOOL_LINK_CLASS = cn(
  "flex min-h-[40px] w-full items-center rounded-lg border border-border/80 bg-white px-3 py-2 text-left text-sm font-medium text-copilot-text-primary shadow-sm",
  "hover:border-copilot-primary/20 hover:bg-copilot-bg-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
  transitionInteractive
);

const cityHubPrimaryCtaClass = cn(
  "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-brand/35 bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm",
  "hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

export function CityProfileDecisionCard({ card: c }: { card: BestCitiesProfileCard }) {
  const accent = normalizeAccent(c.accent);
  const fb = ACCENT_FALLBACK[accent];
  const toolLinks = c.nextLinks.filter((l) => l.href !== c.href);

  return (
    <article
      className={cn(
        "relative flex w-full max-w-full flex-col self-start overflow-hidden rounded-2xl border border-border/60 bg-white shadow-card ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        "p-0"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 z-20 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />

      {c.image ? (
        <Link
          href={c.href}
          className="group relative z-0 block aspect-[5/3] min-h-[120px] w-full overflow-hidden sm:aspect-[2.1/1] sm:min-h-[132px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <Image
            src={c.image.src}
            alt={c.image.alt}
            fill
            className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.01]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" aria-hidden />
        </Link>
      ) : (
        <div className={cn("relative z-0 h-20 w-full overflow-hidden sm:h-[5.25rem]", fb.banner)} aria-hidden>
          <div className={cn("absolute -right-8 -top-10 h-32 w-32 rounded-full opacity-40 blur-3xl", fb.orb)} />
          <div className="absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-white/30 opacity-50 blur-2xl" />
        </div>
      )}

      <div className="relative z-10 flex flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={PROFILE_PILL_CLASS}>Profile</span>
          {c.tags?.map((t) => (
            <span key={t} className={CITIES_FUNNEL_SCENARIO_CHIP}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-2.5 text-lg font-bold tracking-tight text-copilot-text-primary sm:text-xl">{c.name}</h3>
        <BoldParagraph
          text={c.personality}
          className="mt-2 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
        />
        <div className="mt-4 grid min-w-0 gap-2.5 sm:grid-cols-2 sm:gap-3">
          <div className={cn("relative min-h-0", BEST_FOR_PANEL)}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-copilot-text-muted">Best for</p>
            <BoldInline
              text={c.bestFor}
              className="mt-2 block text-sm leading-snug text-copilot-text-secondary sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
            />
          </div>
          <div className={cn("relative min-h-0", WATCH_OUTS_PANEL)}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-950/70">Watch-outs</p>
            <BoldInline
              text={c.watchOuts}
              className="mt-2 block text-sm leading-snug text-copilot-text-secondary sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
            />
          </div>
        </div>
        {toolLinks.length > 0 ? (
          <div className="relative mt-4 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-copilot-text-muted">Tools & links</p>
            <ul className="mt-2 flex flex-col gap-2" role="list">
              {toolLinks.map((l) => (
                <li key={`${c.id}-${l.href}`} className="min-w-0">
                  <Link href={l.href} className={TOOL_LINK_CLASS}>
                    <span className="min-w-0 flex-1 pr-2">{l.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-copilot-primary/60" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Link href={c.href} className={cn(cityHubPrimaryCtaClass, toolLinks.length > 0 ? "mt-4" : "mt-5")}>
          Open {c.name} guide
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

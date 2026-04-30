import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { CITIES_FUNNEL_PATHS, CHOOSE_YOUR_CITY_LENS_SECTION_ID } from "./citiesDecisionFunnel";

export type CitiesChooseApproachActive = "best" | "cheapest" | "families" | "professionals";

const PATH_BEST = CITIES_FUNNEL_PATHS.bestOverall;
const PATH_CHEAPEST = CITIES_FUNNEL_PATHS.cheapest;
const PATH_FAMILIES = CITIES_FUNNEL_PATHS.families;
const PATH_PROFESSIONALS = CITIES_FUNNEL_PATHS.professionals;

const SECTION_ID = CHOOSE_YOUR_CITY_LENS_SECTION_ID;

const ctaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

type ApproachCardProps = {
  role: CitiesChooseApproachActive;
  active: CitiesChooseApproachActive;
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
};

function ApproachCard({ role, active, title, body, href, ctaLabel }: ApproachCardProps) {
  const isHere = active === role;
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface-raised p-5 shadow-card ring-1 sm:p-6",
        movingNlCardMicroLiftClass,
        isHere ? "border-brand/30 ring-2 ring-brand/20" : "border-border ring-border/10"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {isHere ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">You are here</p>
      ) : (
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Other lens</p>
      )}
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 min-w-0 max-w-none text-pretty text-sm leading-relaxed text-foreground-muted">{body}</p>
      <div className="mt-auto border-t border-dashed border-border/50 pt-4">
        {isHere ? (
          <p className="min-w-0 max-w-none text-pretty text-sm font-medium text-foreground-muted">
            Stay on this page, then use the same tools below with the same shortlist.
          </p>
        ) : (
          <Link href={href} className={ctaClass}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
}

type CitiesChooseYourApproachSectionProps = {
  active: CitiesChooseApproachActive;
  className?: string;
};

export function CitiesChooseYourApproachSection({ active, className }: CitiesChooseYourApproachSectionProps) {
  return (
    <SectionBlock
      id={SECTION_ID}
      funnelFramed
      className={cn("scroll-mt-28 md:scroll-mt-32", className)}
      eyebrow="Cities · Decision funnel"
      title="Choose your city lens"
      compact
    >
      <p className="w-full min-w-0 max-w-none text-pretty text-sm leading-relaxed text-foreground-muted">
        Pick Best overall, Cheapest, Families, or Professionals. Keep the same shortlist of cities and the same tools when you move between these pages.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ApproachCard
          role="best"
          active={active}
          title="Best overall"
          body="Work, lifestyle, international feel, and how each city fits your situation — then check rent and commute with the tools below."
          href={PATH_BEST}
          ctaLabel="Open Best overall"
        />
        <ApproachCard
          role="cheapest"
          active={active}
          title="Cheapest"
          body="Relative affordability in the Netherlands: rent, commute, and job trade-offs so any savings you see stay realistic."
          href={PATH_CHEAPEST}
          ctaLabel="Open Cheapest"
        />
        <ApproachCard
          role="families"
          active={active}
          title="Families"
          body="Schools, childcare, space, and whether a normal family week stays manageable — using the same calculators on each page."
          href={PATH_FAMILIES}
          ctaLabel="Open Families"
        />
        <ApproachCard
          role="professionals"
          active={active}
          title="Professionals"
          body="Where jobs cluster, pay after tax versus rent and travel, and everyday lifestyle — same tools with a work-first angle."
          href={PATH_PROFESSIONALS}
          ctaLabel="Open Professionals"
        />
      </div>
    </SectionBlock>
  );
}

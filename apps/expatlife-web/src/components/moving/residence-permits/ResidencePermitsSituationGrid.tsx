import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveResidencePermitRouteCard } from "./config/moveResidencePermits.types";

/** Matches `VisasResidencyRouteDoorwayGrid` chip styling (Move pillar route cards). */
const CHIP_BADGE =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export function ResidencePermitsSituationGrid({
  region,
  cards,
}: {
  region: { id: string; eyebrow: string; title: string; subtitle: string };
  cards: readonly MoveResidencePermitRouteCard[];
}) {
  return (
    <SectionBlock
      id={region.id}
      className={cn(SECTION_SCROLL_MARGIN, "!pt-2 sm:!pt-3 md:!pt-4")}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {cards.map((d) => (
          <article
            key={d.id}
            className={cn(
              "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-copilot-primary/[0.07] bg-copilot-surface p-4 shadow-expatos-md sm:p-5",
              movingNlCardShadowHoverClass,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="pt-1 text-[0.9375rem] font-bold leading-snug tracking-tight text-copilot-text-primary sm:text-base">{d.title}</h3>
            {d.intro ? (
              <p className="mt-2 text-[13px] leading-snug text-copilot-text-secondary sm:text-sm sm:leading-relaxed">{d.intro}</p>
            ) : null}
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Route tags">
              {d.chips.map((c) => (
                <li key={c}>
                  <span className={CHIP_BADGE}>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-lg bg-copilot-bg-soft/80 px-3 py-2 ring-1 ring-copilot-primary/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Best for</p>
              <p className="mt-0.5 text-[13px] font-medium leading-snug text-copilot-text-primary sm:text-sm">
                <BoldInline text={d.bestFor} />
              </p>
            </div>
            <div className="mt-3 rounded-lg bg-copilot-bg-soft/80 px-3 py-2 ring-1 ring-copilot-primary/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Focus next</p>
              <p className="mt-0.5 text-[13px] leading-snug text-copilot-text-secondary sm:text-sm">
                <BoldInline text={d.whatMattersNext} />
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Link
                href={d.nextStep.href}
                aria-label={`${d.nextStep.ctaLabel}: ${d.title}`}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
              >
                {d.nextStep.ctaLabel}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

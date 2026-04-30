import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
export type CitiesPairedGuideLens = {
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
};

export type CitiesPairedBestVsCheapestSectionModel = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  bestLens: CitiesPairedGuideLens;
  cheapestLens: CitiesPairedGuideLens;
};

type CitiesPairedBestVsCheapestSectionProps = {
  model: CitiesPairedBestVsCheapestSectionModel;
  /** Which guide the user is currently reading — that card is highlighted and not a duplicate CTA. */
  active: "best" | "cheapest";
  className?: string;
};

const ctaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

export function CitiesPairedBestVsCheapestSection({ model, active, className }: CitiesPairedBestVsCheapestSectionProps) {
  const { id, eyebrow, title, lead, bestLens, cheapestLens } = model;

  function LensCard({
    lens,
    role,
  }: {
    lens: CitiesPairedGuideLens;
    role: "best" | "cheapest";
  }) {
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
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Paired guide</p>
        )}
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{lens.title}</h3>
        <BoldParagraph
          text={lens.body}
          className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
        <div className="mt-auto border-t border-dashed border-border/50 pt-4">
          {isHere ? (
            <p className="text-sm font-medium text-foreground-muted">Keep reading this page, then run the shared tools below on the same shortlist.</p>
          ) : (
            <Link href={lens.href} className={ctaClass}>
              {lens.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <SectionBlock
      id={id}
      funnelFramed
      className={cn("scroll-mt-28 md:scroll-mt-32", className)}
      eyebrow={eyebrow}
      title={title}
      compact
    >
      <BoldParagraph
        text={lead}
        className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
      />
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <LensCard lens={bestLens} role="best" />
        <LensCard lens={cheapestLens} role="cheapest" />
      </div>
    </SectionBlock>
  );
}

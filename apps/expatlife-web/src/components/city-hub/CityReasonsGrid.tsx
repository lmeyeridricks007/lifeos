import type { CityOverviewSection, CityReasonCard } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { SectionBlock } from "@/components/page/pillar-template";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export function CityReasonsCards({ reasons }: { reasons: CityReasonCard[] }) {
  if (!reasons?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {reasons.map((card, i) => (
        <article
          key={i}
          className={cn(
            "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="relative z-[1] font-bold text-copilot-text-primary">{card.title}</h3>
          <p className="relative z-[1] mt-2 text-sm leading-relaxed text-copilot-text-secondary">{card.explanation}</p>
          <p className="relative z-[1] mt-3 text-xs font-semibold text-copilot-text-muted">
            Who it suits: <span className="text-copilot-text-secondary">{card.whoItSuits}</span>
          </p>
        </article>
      ))}
    </div>
  );
}

/** Narrative intro + reason cards under one anchor (`living-in-city`). */
export function CityWhyExpatsCombinedSection({
  cityName,
  cityOverview,
  whyExpatsChoose,
}: {
  cityName: string;
  cityOverview?: CityOverviewSection;
  whyExpatsChoose?: { heading: string; reasons: CityReasonCard[] };
}) {
  const hasOverview = Boolean(cityOverview?.paragraphs?.length);
  const hasReasons = Boolean(whyExpatsChoose?.reasons?.length);
  if (!hasOverview && !hasReasons) return null;

  const title =
    hasOverview && cityOverview
      ? cityOverview.heading
      : whyExpatsChoose?.heading ?? `Why expats choose ${cityName}`;

  return (
    <SectionBlock id="living-in-city" title={title} compact className="scroll-mt-24">
      {hasOverview && cityOverview ? (
        <div className="space-y-4">
          {cityOverview.paragraphs.map((p, i) => (
            <p key={i} className="text-copilot-text-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      ) : null}
      {hasReasons && whyExpatsChoose ? (
        <div className={cn("space-y-4", hasOverview && "mt-8 border-t border-copilot-primary/10 pt-8")}>
          {hasOverview ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-copilot-text-muted">
              What draws people in practice
            </p>
          ) : null}
          <CityReasonsCards reasons={whyExpatsChoose.reasons} />
        </div>
      ) : null}
    </SectionBlock>
  );
}

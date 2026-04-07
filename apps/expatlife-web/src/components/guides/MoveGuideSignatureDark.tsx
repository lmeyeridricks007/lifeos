import type { MoveGuideSignatureModel } from "@/src/lib/guides/buildMoveGuideSignatureModel";
import { StructuredCard } from "@/components/page/cards";
import { PillarDarkStagesBand, SectionBlock } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";
import { movingNlSectionH2StagesSignatureClass } from "@/lib/ui/moving-nl-pillar-identity";

/**
 * Premium dark signature band for JSON Move guides: scannable cards sourced from early sections
 * (see {@link buildMoveGuideSignatureModel} registry). Full sections remain in the article below.
 */
export function MoveGuideSignatureDark({ model }: { model: MoveGuideSignatureModel }) {
  const n = model.cards.length;
  const gridClass = cn(
    "grid gap-4 sm:gap-5",
    n === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
  );

  return (
    <PillarDarkStagesBand className="w-full">
      <SectionBlock
        className="relative z-10"
        contentClassName="mt-8 sm:mt-9"
        id="move-premium-focus"
        eyebrow={model.eyebrow}
        title={model.title}
        subtitle={model.subtitle}
        titleClassName={movingNlSectionH2StagesSignatureClass}
        tone="onDark"
      >
        <div className={gridClass}>
          {model.cards.map((card, i) => (
            <StructuredCard key={`${card.title}-${i}`} label={card.title} tone="onDark">
              <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                {card.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </StructuredCard>
          ))}
        </div>
      </SectionBlock>
    </PillarDarkStagesBand>
  );
}

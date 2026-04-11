import { BoldInline } from "@/components/content/PillarContentBlocks";
import type { AffiliatePlacement } from "@/src/lib/affiliates/types";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { AffiliateCardGridLazy } from "./AffiliateCardGridLazy";
import { AffiliateComparison } from "./AffiliateComparison";
import { AffiliateCompactList } from "./AffiliateCompactList";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { cn } from "@/lib/cn";
import { movingNlGuideSectionShellClass, movingNlGuideSectionTopAccentClass } from "@/lib/ui/moving-nl-pillar-identity";

export type AffiliateBlockViewProps = {
  placement: AffiliatePlacement;
  items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  showStageChip?: boolean;
};

const blockWrapperClass = cn("relative overflow-hidden", movingNlGuideSectionShellClass);

export function AffiliateBlockView({ placement, items, showStageChip }: AffiliateBlockViewProps) {
  if (!items.length) return null;
  const variant = placement.variant;

  return (
    <div className={blockWrapperClass}>
      <div className={movingNlGuideSectionTopAccentClass} aria-hidden />
      <div className="relative">
        {showStageChip && (
          <span className="mb-2 inline-block rounded-full bg-copilot-bg-soft px-2.5 py-0.5 text-xs font-medium text-copilot-primary ring-1 ring-copilot-primary/15">
            Recommended for your stage
          </span>
        )}
        {placement.title ? (
          <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{placement.title}</h2>
        ) : null}
        {placement.intro ? (
          <p className="mt-2 text-sm text-copilot-text-secondary md:text-base">
            <BoldInline text={placement.intro} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        ) : null}
        <div className="mt-4">
          {variant === "cards" && (
            <AffiliateCardGridLazy
              items={items.map((i) => ({ provider: i.provider, reason: i.reason }))}
            />
          )}
          {variant === "comparison" && placement.comparisonFields && (
            <AffiliateComparison
              items={items.map((i) => ({ provider: i.provider, reason: i.reason, meta: i.meta }))}
              comparisonFields={placement.comparisonFields}
            />
          )}
          {variant === "compact-list" && (
            <AffiliateCompactList
              variant="copilot"
              items={items.map((i) => ({ provider: i.provider, reason: i.reason }))}
            />
          )}
        </div>
        <AffiliateDisclosure text={placement.disclosure} variant="copilot" />
      </div>
    </div>
  );
}

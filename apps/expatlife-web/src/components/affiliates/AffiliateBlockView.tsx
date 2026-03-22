import type { AffiliatePlacement } from "@/src/lib/affiliates/types";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { AffiliateCardGrid } from "./AffiliateCardGrid";
import { AffiliateComparison } from "./AffiliateComparison";
import { AffiliateCompactList } from "./AffiliateCompactList";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { cn } from "@/lib/cn";

export type AffiliateBlockViewProps = {
  placement: AffiliatePlacement;
  items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  showStageChip?: boolean;
};

const blockWrapperClass = cn(
  "rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6 md:p-8",
  "relative overflow-hidden",
  "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500 before:opacity-80"
);

export function AffiliateBlockView({ placement, items, showStageChip }: AffiliateBlockViewProps) {
  if (!items.length) return null;
  const variant = placement.variant;

  return (
    <div className={blockWrapperClass}>
      <div className="relative pl-2">
        {showStageChip && (
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Recommended for your stage
          </span>
        )}
        {placement.title ? (
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">{placement.title}</h2>
        ) : null}
        {placement.intro ? (
          <p className="mt-2 text-sm text-slate-600">{placement.intro}</p>
        ) : null}
        <div className="mt-4">
          {variant === "cards" && (
            <AffiliateCardGrid
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
              items={items.map((i) => ({ provider: i.provider, reason: i.reason }))}
            />
          )}
        </div>
        <AffiliateDisclosure text={placement.disclosure} />
      </div>
    </div>
  );
}

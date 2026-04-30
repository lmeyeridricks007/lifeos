import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type AccountTypeComparisonPair = {
  readonly id: string;
  /** Accessible title for the pair (e.g. “Current vs savings”). */
  readonly title: string;
  readonly leftTitle: string;
  readonly leftBody: string;
  readonly rightTitle: string;
  readonly rightBody: string;
};

/**
 * Side-by-side editorial comparisons — stacks on small screens, two columns per card from `sm`.
 */
export function AccountTypeComparisonCards({
  pairs,
  className,
}: {
  pairs: readonly AccountTypeComparisonPair[];
  className?: string;
}) {
  if (pairs.length === 0) return null;

  return (
    <div className={cn("grid min-w-0 gap-3 overflow-x-hidden sm:gap-4", className)} role="list">
      {pairs.map((pair) => (
        <article
          key={pair.id}
          role="listitem"
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-card ring-1 ring-border/10",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="border-b border-border/60 px-4 py-3 text-sm font-bold tracking-tight text-foreground sm:px-5 sm:py-3.5">
            {pair.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="min-w-0 border-border/60 px-4 py-4 sm:border-r sm:px-5 sm:py-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">{pair.leftTitle}</h4>
              <BoldParagraph
                text={pair.leftBody}
                className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>
            <div className="min-w-0 border-t border-border/60 px-4 py-4 sm:border-t-0 sm:px-5 sm:py-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">{pair.rightTitle}</h4>
              <BoldParagraph
                text={pair.rightBody}
                className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

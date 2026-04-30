import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { getBankById, type BankId } from "@/src/data/banking/banks";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type BankingProfileCostCard = {
  readonly id: string;
  readonly title: string;
  /** Markdown-friendly copy — typical fee pressure points for this profile. */
  readonly costDrivers: string;
  /** How to compare banks or stacks for this profile. */
  readonly nextSteps: string;
  readonly watchOuts?: string;
  readonly relatedLinks: readonly { readonly href: string; readonly label: string }[];
  readonly relatedBankIds?: readonly BankId[];
};

export type BankingProfileCostCardsProps = {
  profiles: readonly BankingProfileCostCard[];
  className?: string;
};

/**
 * Example banking personas with **likely cost drivers** — pairs with fee guides and comparison pages.
 */
export function BankingProfileCostCards({ profiles, className }: BankingProfileCostCardsProps) {
  return (
    <div className={cn("grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3", className)}>
      {profiles.map((p) => (
        <article
          key={p.id}
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:p-4",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Likely cost drivers</p>
          <BoldParagraph
            text={p.costDrivers}
            className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
          />
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">How to compare</p>
          <BoldParagraph
            text={p.nextSteps}
            className="mt-1 text-sm font-semibold text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
          />
          {p.watchOuts ? (
            <>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/80">Watch-outs</p>
              <BoldParagraph
                text={p.watchOuts}
                className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </>
          ) : null}
          {p.relatedBankIds?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Related banks from editorial data">
              {p.relatedBankIds.map((id) => {
                const b = getBankById(id);
                if (!b) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex rounded-full border border-border/70 bg-surface-muted/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground-muted"
                  >
                    {b.name}
                  </span>
                );
              })}
            </div>
          ) : null}
          <ul className="mt-3 list-none space-y-1.5 p-0" role="list" aria-label="Related guides">
            {p.relatedLinks.map((l) => (
              <li key={`${l.href}-${l.label}`}>
                <Link href={l.href} className="text-xs font-semibold text-link hover:underline">
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

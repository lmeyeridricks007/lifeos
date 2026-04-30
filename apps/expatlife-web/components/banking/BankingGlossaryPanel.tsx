import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { BankingRichText } from "@/components/banking/BankingRichText";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { bankingGlossaryTerms } from "@/src/data/banking/bankingGlossaryTerms";

/**
 * Compact reference grid — definitions from {@link bankingGlossaryTerms}; one “Learn more” per row when configured.
 */
export function BankingGlossaryPanel({
  className,
  intro,
}: {
  className?: string;
  /** Optional one-line intro (supports **bold**). */
  intro?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      {intro?.trim() ? (
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5 [&_strong]:font-semibold [&_strong]:text-foreground">
          <BankingRichText text={intro} />
        </p>
      ) : null}
      <dl className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
        {bankingGlossaryTerms.map((term) => (
          <div
            key={term.id}
            className={cn(
              "relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <dt className="text-sm font-bold tracking-tight text-foreground">
              {term.learnMoreHref ? (
                <Link
                  href={term.learnMoreHref}
                  className="text-foreground underline-offset-2 hover:text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm"
                >
                  {term.title}
                </Link>
              ) : (
                term.title
              )}
              {term.dutchLabel ? (
                <span className="mt-0.5 block text-xs font-normal text-foreground-muted">{term.dutchLabel}</span>
              ) : null}
            </dt>
            <dd className="mt-2">
              <BoldParagraph
                text={term.definition}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

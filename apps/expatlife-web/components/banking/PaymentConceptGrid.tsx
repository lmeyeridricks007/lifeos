import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { stripPairedBold } from "@/components/banking/GuideTopicParagraphCards";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { bankingAccountRelatedGuides } from "@/src/data/banking/accountTypes";
import type { BankingPaymentConcept } from "@/src/data/banking/paymentConcepts";

const kicker = "text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted";
const kickerAccent = "text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong";
const proseLead = "text-[0.9375rem] leading-[1.65] text-foreground/95";
const proseDetail = "text-sm leading-relaxed text-foreground-muted";

const tertiaryLinkClass =
  "text-xs font-semibold text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

function relatedLinksForConcept(c: BankingPaymentConcept) {
  const seen = new Set<string>();
  const out: { href: string; label: string }[] = [];
  for (const k of c.relatedGuideKeys) {
    const l = bankingAccountRelatedGuides[k];
    if (seen.has(l.href)) continue;
    seen.add(l.href);
    out.push({ href: l.href, label: l.label });
  }
  return out;
}

/**
 * Reference grid for payment concepts: short lead line, bullets first, long copy behind a native disclosure.
 */
export function PaymentConceptGrid({
  concepts,
  className,
}: {
  concepts: readonly BankingPaymentConcept[];
  className?: string;
}) {
  return (
    <div
      className={cn("grid min-w-0 grid-cols-1 gap-3 min-[640px]:grid-cols-2 min-[640px]:gap-4", className)}
      role="list"
      aria-label="Payment concepts"
    >
      {concepts.map((c) => {
        const links = relatedLinksForConcept(c);
        const details = c.detailParagraphs ?? [];
        const hasDetails = details.length > 0;
        return (
          <article
            key={c.id}
            role="listitem"
            className={cn(
              "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="text-balance text-sm font-bold tracking-tight text-foreground">{c.name}</h3>

            <p className={cn(kickerAccent, "mt-3")}>In short</p>
            <p className={cn(proseLead, "mt-1.5")}>{stripPairedBold(c.plainEnglish.trim())}</p>

            <p className={cn(kicker, "mt-4")}>Used for</p>
            <ul className="mt-1.5 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-foreground-muted marker:text-brand">
              {c.usedFor.map((line) => (
                <li key={line}>{stripPairedBold(line)}</li>
              ))}
            </ul>

            {c.expatWatchOuts.length ? (
              <>
                <p className={cn(kicker, "mt-4 text-amber-900/80")}>Watch-outs</p>
                <ul className="mt-1.5 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-foreground-muted marker:text-brand">
                  {c.expatWatchOuts.map((line) => (
                    <li key={line}>{stripPairedBold(line)}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {hasDetails ? (
              <details className="group mt-4 rounded-xl border border-border/45 bg-surface-muted/15 ring-1 ring-border/10 open:bg-surface-muted/25">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-xs font-semibold text-foreground outline-none marker:content-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-ring/30 sm:px-3.5 sm:py-3">
                  <span>Optional longer read</span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="space-y-2.5 border-t border-border/35 px-3 pb-3 pt-2 sm:px-3.5">
                  {details.map((p, i) => (
                    <p key={`${c.id}-detail-${i}`} className={proseDetail}>
                      {stripPairedBold(p.trim())}
                    </p>
                  ))}
                </div>
              </details>
            ) : null}

            {links.length ? (
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className={cn(kicker, "mb-2")}>Related guides</p>
                <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={tertiaryLinkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

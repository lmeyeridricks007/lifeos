import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";

export type TaxBoxesExplainerAccent = "box1" | "box2" | "box3";

export type TaxBoxesExplainerCard = {
  id: string;
  /** Visual lane — maps to top accent stripe only */
  accent: TaxBoxesExplainerAccent;
  /** e.g. "Box 1" */
  title: string;
  /** Short theme line, e.g. "Work and home" */
  tagline: string;
  simpleExplanation: string;
  commonExample: string;
  commonExamples?: readonly string[];
  whoShouldCareMost: string;
  links?: readonly { href: string; label: string }[];
};

const accentTopBarClass: Record<TaxBoxesExplainerAccent, string> = {
  box1: "bg-gradient-to-r from-copilot-primary via-blue-500 to-blue-600",
  box2: "bg-gradient-to-r from-blue-600 via-violet-600 to-violet-500",
  box3: "bg-gradient-to-r from-violet-500 via-purple-500 to-copilot-accent",
};

const stepBadgeClass: Record<TaxBoxesExplainerAccent, string> = {
  box1: "bg-copilot-primary/15 text-copilot-primary ring-copilot-primary/20",
  box2: "bg-violet-500/12 text-violet-800 ring-violet-500/25",
  box3: "bg-copilot-accent/15 text-cyan-800 ring-copilot-accent/25",
};

const stepIndex: Record<TaxBoxesExplainerAccent, 1 | 2 | 3> = {
  box1: 1,
  box2: 2,
  box3: 3,
};

export type TaxBoxesExplainerProps = {
  cards: readonly TaxBoxesExplainerCard[];
  note: string;
};

/**
 * Visual explainer for Dutch income-tax “boxes” (filing groupings).
 * Copy is supplied by the page model — no rates or thresholds inside this component.
 */
export function TaxBoxesExplainer({ cards, note }: TaxBoxesExplainerProps) {
  return (
    <div className="space-y-4">
      <ol
        className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3 sm:gap-3 md:gap-4"
        aria-label="The three tax boxes in order"
      >
        {cards.map((card) => (
          <li key={card.id} className="min-w-0">
            <article
              className={cn(
                "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-card ring-1 ring-border/10",
                movingNlCardMicroLiftClass
              )}
            >
              <div
                className={cn("absolute inset-x-0 top-0 z-[1] h-1.5", accentTopBarClass[card.accent])}
                aria-hidden
              />
              <div className="flex flex-1 flex-col p-4 pt-5 sm:p-5">
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 ring-inset",
                      stepBadgeClass[card.accent]
                    )}
                    aria-hidden
                  >
                    {stepIndex[card.accent]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{card.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-strong">{card.tagline}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Plain terms</p>
                    <BoldParagraph
                      text={card.simpleExplanation}
                      className="mt-1 text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                      Example situations
                    </p>
                    {card.commonExamples && card.commonExamples.length > 0 ? (
                      <ul className="mt-1.5 space-y-1.5" role="list">
                        {card.commonExamples.map((example) => (
                          <li key={example} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <BoldParagraph
                              text={example}
                              className="min-w-0 text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                            />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <BoldParagraph
                        text={card.commonExample}
                        className="mt-1 text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                      Who should care most
                    </p>
                    <BoldParagraph
                      text={card.whoShouldCareMost}
                      className="mt-1 text-foreground [&_strong]:font-semibold"
                    />
                  </div>
                </div>

                {card.links && card.links.length > 0 ? (
                  <div className="mt-auto border-t border-border/70 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Related</p>
                    <ul className="mt-2 flex flex-col gap-2 text-sm font-semibold text-link" role="list">
                      {card.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="inline-flex items-center gap-1 hover:underline">
                            {link.label}
                            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950 ring-1 ring-amber-200/60">
        <BoldParagraph text={note} className="[&_strong]:font-semibold" />
      </div>
    </div>
  );
}

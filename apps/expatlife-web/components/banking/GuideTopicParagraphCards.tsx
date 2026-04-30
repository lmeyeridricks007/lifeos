import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export function stripPairedBold(s: string): string {
  let out = s;
  let prev: string;
  do {
    prev = out;
    out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
  } while (out !== prev);
  return out;
}

/**
 * Short bullets above a topic deep-dive — matches banking guide “card” chrome without heavy chrome.
 */
export function GuideTopicScanBand({
  lines,
  ariaLabel,
  kicker = "In short",
  embedded = false,
}: {
  lines: readonly string[];
  ariaLabel: string;
  kicker?: string;
  /** When true, no outer card chrome — use inside {@link GuideTopicDeepDive} or similar shells. */
  embedded?: boolean;
}) {
  if (!lines.length) return null;
  return (
    <div
      className={cn(
        embedded
          ? "border-0 bg-transparent p-0 shadow-none ring-0"
          : "rounded-2xl border border-border/60 bg-surface-muted/30 p-4 ring-1 ring-border/12 sm:p-5"
      )}
      role="region"
      aria-label={ariaLabel}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{kicker}</p>
      <ul className="mt-3 list-none space-y-2.5 p-0" role="list">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
            <span className="min-w-0 text-sm leading-relaxed text-foreground-muted">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Long-form guide paragraphs as a readable 2-column card grid (2×2 when there are four blocks).
 * Strips legacy `**bold**` markers from source strings for plain display.
 */
export function GuideTopicParagraphCards({
  paragraphs,
  className,
}: {
  paragraphs: readonly string[];
  className?: string;
}) {
  const items = paragraphs.map((p) => stripPairedBold(p.trim())).filter(Boolean);
  if (!items.length) return null;

  return (
    <ul
      className={cn(
        "m-0 grid list-none grid-cols-1 gap-3 p-0 min-[480px]:grid-cols-2 min-[480px]:gap-4 lg:gap-5",
        className
      )}
      role="list"
    >
      {items.map((text, i) => (
        <li key={i} className="min-w-0">
          <article
            className={cn(
              "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-pretty text-[0.9375rem] leading-[1.65] text-foreground/90">{text}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

/**
 * “In short” bullets plus paragraph cards in one bordered panel — reads as one digestible block.
 */
export function GuideTopicDeepDive({
  scanLines,
  scanAriaLabel,
  paragraphs,
  className,
}: {
  scanLines: readonly string[];
  scanAriaLabel: string;
  paragraphs: readonly string[];
  className?: string;
}) {
  const hasScan = scanLines.length > 0;
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/55 bg-surface-muted/15 p-4 ring-1 ring-border/10 sm:p-5",
        className
      )}
    >
      {hasScan ? (
        <>
          <GuideTopicScanBand lines={scanLines} ariaLabel={scanAriaLabel} embedded />
          <div className="my-4 border-t border-border/35 sm:my-5" aria-hidden />
        </>
      ) : null}
      <GuideTopicParagraphCards paragraphs={paragraphs} />
    </div>
  );
}

import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { movingNlGuideSectionTopAccentClass, movingNlSidebarModuleTitleClass } from "@/lib/ui/moving-nl-pillar-identity";
import { MonetizationProviderTrustFooter } from "./MonetizationProviderTrustFooter";
import { ProviderCard } from "./ProviderCard";
import type { ProviderCardProps } from "./provider-card-types";

export type AffiliateSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProviderCardProps[];
  disclosureText: string;
  editorialRationale?: string;
  lastReviewed?: string;
  showHowWeChoose?: boolean;
  contained?: boolean;
  className?: string;
  /** Match Netherlands moving-guide pillar cards (FAQ / shortlist rhythm). */
  cardVariant?: "muted" | "expatCopilot";
};

/**
 * Lighter-weight curated block for guide-style pages (muted shell, smaller visual weight).
 */
export function AffiliateSection({
  eyebrow,
  title,
  description,
  items,
  disclosureText,
  editorialRationale,
  lastReviewed,
  showHowWeChoose = true,
  contained = true,
  className,
  cardVariant = "muted",
}: AffiliateSectionProps) {
  const slice = items.slice(0, 4);
  if (slice.length === 0) return null;

  const copilot = cardVariant === "expatCopilot";

  const inner = (
    <Card
      variant={copilot ? "expatCopilot" : "muted"}
      className={cn("relative w-full min-w-0 overflow-hidden p-5 md:p-6", copilot && "border-0")}
    >
      {copilot ? <div className={movingNlGuideSectionTopAccentClass} aria-hidden /> : null}
      <div className="relative w-full min-w-0">
        {copilot ? (
          <p className={movingNlSidebarModuleTitleClass}>{eyebrow}</p>
        ) : (
          <Eyebrow className="text-[11px]">{eyebrow}</Eyebrow>
        )}
        <h2
          className={cn(
            "text-lg font-semibold tracking-tight sm:text-xl",
            copilot ? "mt-2 text-copilot-text-primary" : "mt-1 text-foreground"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-2 max-w-3xl text-sm",
            copilot ? "text-copilot-text-secondary" : "text-foreground-muted"
          )}
        >
          {description}
        </p>

        <div className="mt-6 grid w-full min-w-0 grid-cols-1 items-start gap-4 sm:grid-cols-2">
          {slice.map((item) => (
            <ProviderCard
              key={item.name + item.href}
              {...item}
              layoutDensity="compact"
              tone={copilot ? "copilot" : "default"}
            />
          ))}
        </div>

        <div className={cn("mt-5 border-t pt-4", copilot ? "border-slate-200/80" : "border-border")}>
          <MonetizationProviderTrustFooter
            disclosureText={disclosureText}
            editorialRationale={editorialRationale}
            lastReviewed={lastReviewed}
            showHowWeChoose={showHowWeChoose}
            visualVariant={copilot ? "movingGuide" : "default"}
            nestMovingGuideCard={copilot ? false : undefined}
          />
        </div>
      </div>
    </Card>
  );

  /**
   * Netherlands JSON guides: `expatCopilot` blocks sit in `<main>` beside the sidebar. The global
   * `Container` uses `max-w-screen-2xl` + `lg:px-8` / `xl:px-10`, which misaligns vs FAQ / tools
   * shells (`movingNlShellFaqClass`, `movingNlShellToolsClass`: `px-4 sm:px-6`) and can read as
   * “too wide” next to the grid column. Use a flush guide-column inset instead.
   */
  const guideColumnShell = <div className="w-full min-w-0 px-4 sm:px-6">{inner}</div>;

  return (
    <section
      className={cn("w-full min-w-0 py-section-y-compact sm:py-6 md:py-8", className)}
      aria-label={title}
    >
      {contained ? (copilot ? guideColumnShell : <Container>{inner}</Container>) : inner}
    </section>
  );
}

import { MoveHero } from "@/components/page/move-shell";

type CostOfLivingHeroProps = {
  shareUrl: string;
  canonicalPath: string;
  primaryScrollToId: string;
  /** Editorial cost guide (moving & monthly expenses context). */
  secondaryGuideHref: string;
};

/**
 * Branded tool hero for the Netherlands cost-of-living calculator (Move NL cluster styling).
 */
export function CostOfLivingHero({
  shareUrl,
  canonicalPath,
  primaryScrollToId,
  secondaryGuideHref,
}: CostOfLivingHeroProps) {
  return (
    <MoveHero
      variant="tool"
      eyebrow="TOOL"
      title="Netherlands expat cost of living calculator"
      subtitle="Estimate monthly spend, move-in cash, and a sensible net salary band for Dutch cities and household types. Built for relocation planning — not personalized financial advice."
      introBullets={[
        "Monthly lines: rent, groceries, utilities, transport, insurance, optional childcare",
        "One-off setup: deposit timing, furniture, travel, and a contingency slice",
        "First-month cash plus a suggested pre-move savings buffer",
        "Tweak city, neighborhood band, housing mode, and lifestyle in one place",
      ]}
      primaryCtaLabel="Start calculating"
      primaryCtaScrollToId={primaryScrollToId}
      secondaryCtaLabel="Read cost of living guide"
      secondaryCtaHref={secondaryGuideHref}
      image={{
        src: "/images/tools/netherlands-cost-of-living-calculator-hero.png",
        alt: "Editorial illustration: planning monthly costs in the Netherlands — calculator, coins, and home key motifs; not real financial data.",
      }}
      imageFallback={{
        src: "/images/heroes/netherlands-dutch-salary-net-calculator-hero.png",
        alt: "Alternate Netherlands money-planning illustration if the primary hero does not load.",
      }}
      shareUrl={shareUrl}
      pageId={canonicalPath}
    />
  );
}

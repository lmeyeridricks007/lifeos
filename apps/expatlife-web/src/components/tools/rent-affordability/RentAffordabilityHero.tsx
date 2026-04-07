import { MoveHero } from "@/components/page/move-shell";

type RentAffordabilityHeroProps = {
  shareUrl: string;
  canonicalPath: string;
  primaryScrollToId: string;
};

export function RentAffordabilityHero({ shareUrl, canonicalPath, primaryScrollToId }: RentAffordabilityHeroProps) {
  return (
    <MoveHero
      variant="tool"
      eyebrow="TOOL"
      title="Netherlands Rent Affordability Calculator"
      subtitle="Plan Dutch rent from net or gross income, city living costs, landlord screening multiples, and move-in cash — with a practical guide to affordable rent, city differences, and common expat budgeting gaps."
      introBullets={[
        "Recommended, stretch, and safer rent bands plus gross vs rent landlord view",
        "Monthly living lines and setup cash (deposit, first month, relocation) as separate stories",
        "Compare Amsterdam, Rotterdam, The Hague, Utrecht, and other NL cities in one model",
        "Indicative planning only — confirm every line with listings, payroll, and professionals",
      ]}
      primaryCtaLabel="Start calculator"
      primaryCtaScrollToId={primaryScrollToId}
      secondaryCtaLabel="Read the planning guide"
      secondaryCtaHref={`${canonicalPath.replace(/\/$/, "")}#rent-affordability-guide`}
      image={{
        src: "/images/tools/netherlands-rent-affordability-calculator-hero.png",
        alt: "Editorial illustration: Dutch rental housing and budget planning — house, calculator, and euro motifs in calm teal tones; not a listing or mortgage offer.",
      }}
      imageFallback={{
        src: "/images/heroes/netherlands-dutch-salary-net-calculator-hero.png",
        alt: "Alternate Netherlands salary-planning hero if the rent affordability image does not load.",
      }}
      shareUrl={shareUrl}
      pageId={canonicalPath}
    />
  );
}

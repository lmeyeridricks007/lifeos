import { MoveHero } from "@/components/page/move-shell";

const UTILITIES_GUIDE = "/netherlands/living/utilities/";

type UtilitiesServicesHeroProps = {
  shareUrl: string;
  canonicalPath: string;
  primaryScrollToId: string;
};

export function UtilitiesServicesHero({ shareUrl, canonicalPath, primaryScrollToId }: UtilitiesServicesHeroProps) {
  return (
    <MoveHero
      variant="tool"
      eyebrow="TOOL"
      title="Netherlands household utilities — planner & guide"
      subtitle="Plan monthly bands and first-month setup, learn what to compare vs what is fixed locally, and link out to rent, cost of living, cities, and moving tools — in one destination page."
      introBullets={[
        "Editorial guide: what you usually contract yourself, gemeente-style charges, landlord questions, and contract checklists",
        "Calculator: monthly bands, compare vs fixed labels, scenarios, checklist, and export — with transparent assumptions",
        "Worked presets for Amsterdam studio, Rotterdam apartment, Utrecht family, efficient vs older homes, shared housing, and WFH",
        "Planning only — not live tariffs, address-specific quotes, or legal interpretation of your lease",
      ]}
      primaryCtaLabel="Start comparing services"
      primaryCtaScrollToId={primaryScrollToId}
      secondaryCtaLabel="Read utilities setup guide"
      secondaryCtaHref={UTILITIES_GUIDE}
      image={{
        src: "/images/tools/netherlands-utilities-services-comparison-hero.png",
        alt: "Illustration of a Dutch home with energy, water, Wi-Fi, and local-services motifs — editorial hero for the utilities and household services planner; not a provider advertisement.",
      }}
      imageFallback={{
        src: "/images/heroes/netherlands-dutch-salary-net-calculator-hero.png",
        alt: "Alternate Netherlands planning illustration if the utilities hero image does not load.",
      }}
      shareUrl={shareUrl}
      pageId={canonicalPath}
    />
  );
}

import { MoveHero } from "@/components/page/move-shell";

type Props = {
  shareUrl: string;
  canonicalPath: string;
};

export function ChildcareHero({ shareUrl, canonicalPath }: Props) {
  return (
    <MoveHero
      variant="tool"
      eyebrow="TOOL"
      title="Netherlands childcare cost estimator for expats"
      subtitle="Plan gross provider bills, estimated childcare benefit, net out-of-pocket, and first-month cash for daycare, BSO, or gastouder — transparent assumptions, not an official toeslag calculator."
      introBullets={[
        "Separate gross invoice, capped reimbursable slice, and estimated benefit",
        "Multiple children with different ages and care types",
        "City-aware model rates or your actual hourly quote",
        "Scenario comparison for days, city, and care-type changes",
      ]}
      primaryCtaLabel="Open calculator"
      primaryCtaScrollToId="tool-inputs"
      secondaryCtaLabel="Moving with kids guide"
      secondaryCtaHref="/netherlands/moving-to-netherlands-with-kids/"
      image={{
        src: "/images/heroes/netherlands-childcare-cost-estimator-hero.png",
        alt: "Editorial illustration: childcare budgeting and family planning in the Netherlands — indicative visuals only.",
      }}
      imageFallback={{
        src: "/images/heroes/netherlands-childcare-cost-estimator-hero.png",
        alt: "Alternate Netherlands childcare planning illustration.",
      }}
      shareUrl={shareUrl}
      pageId={canonicalPath}
    />
  );
}

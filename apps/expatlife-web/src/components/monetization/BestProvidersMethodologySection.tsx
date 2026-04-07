import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import { MonetizationTrustDisclosure } from "./MonetizationTrustDisclosure";
import { MonetizationTrustResourceLinks } from "./HowWeChooseMicrocopy";
import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

export type BestProvidersMethodologySectionProps = {
  methodology: BestProvidersPageContent["methodology"];
  affiliateNote?: string;
};

/**
 * “How we compare” + “good fit” split cards—reusable on other comparison surfaces.
 */
export function BestProvidersMethodologySection({ methodology, affiliateNote }: BestProvidersMethodologySectionProps) {
  return (
    <Section
      contained={false}
      eyebrow="Methodology"
      title={methodology.title}
      subtitle={methodology.intro}
      compact
      className="!py-8 md:!py-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <Card variant="muted" className="p-5 md:p-6">
          <h3 className="text-sm font-semibold text-foreground">How we compare</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-foreground-muted">
            {methodology.howWeEvaluate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card variant="muted" className="p-5 md:p-6">
          <h3 className="text-sm font-semibold text-foreground">{methodology.goodFitTitle}</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-foreground-muted">
            {methodology.goodFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
      <MonetizationTrustDisclosure className="mt-8 max-w-3xl" />
      <MonetizationTrustResourceLinks className="mt-3 max-w-3xl" />
      {affiliateNote ? <AffiliateDisclosureNote className="mt-6 max-w-3xl">{affiliateNote}</AffiliateDisclosureNote> : null}
    </Section>
  );
}

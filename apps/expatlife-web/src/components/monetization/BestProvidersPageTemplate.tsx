import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { GuidePageRoot } from "@/components/page-families";
import {
  PageHero,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarMainStack,
  FAQBlock,
} from "@/components/page/pillar-template";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import { BestProvidersMethodologySection } from "./BestProvidersMethodologySection";
import { BestProvidersMiniList } from "./BestProvidersMiniList";
import { ProviderCard } from "./ProviderCard";
import { ProvidersComparisonTable } from "./ProvidersComparisonTable";
import { bestRowsToMiniListItems } from "@/src/data/monetization/best-pages/utils";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import type { ProviderCardProps } from "./provider-card-types";
import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import { resolveBestProvidersSoftCtaPreset } from "@/src/lib/soft-cta/mapping";

export type BestProvidersPageTemplateProps = {
  content: BestProvidersPageContent;
  shareUrl: string;
};

function rowToDetailCard(row: BestProvidersPageContent["rows"][number]): ProviderCardProps {
  if (!row.logo?.src) {
    throw new Error(`BestProviders row "${row.id}" requires logo.src for detail cards`);
  }
  return {
    name: row.name,
    logo: row.logo,
    description: row.detailDescription,
    tags: row.tags ?? [],
    bestFor: row.bestFor,
    priceHint: row.priceHint,
    ctaLabel: row.ctaLabel,
    href: row.ctaHref,
    isAffiliate: Boolean(row.isAffiliate),
    disclosureText: row.isAffiliate ? DEFAULT_MONETIZATION_DISCLOSURE : undefined,
  };
}

/**
 * Best-providers SEO hub: aligns with `MonetizationPageType` `"comparison"` (`getMonetizationPolicy("comparison")`):
 * primary surfaces are the comparison table and provider detail cards.
 */
export function BestProvidersPageTemplate({ content, shareUrl }: BestProvidersPageTemplateProps) {
  const miniItems = bestRowsToMiniListItems(content.rows, 5);
  const heroImage = content.hero.image
    ? {
        src: content.hero.image.src,
        alt: content.hero.image.alt,
        priority: content.hero.image.priority,
      }
    : null;

  return (
    <GuidePageRoot>
      <PillarGuideHeroRegion>
        <PageHero
          movingPillarIdentity
          heroTitleDensity="tight"
          eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
          contentGutterClassName={sitePillarFramedHeroGutterXClass}
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          heroImage={heroImage}
          shareUrl={shareUrl}
          pageId={content.path}
        />
      </PillarGuideHeroRegion>

      <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
        <PillarMainStack className="space-y-0">
          <BestProvidersMethodologySection
            methodology={content.methodology}
            affiliateNote={content.affiliateNote}
          />

          <Container className="py-section-y-compact sm:py-6 md:py-8">
            <div className="w-full min-w-0">
              {content.shortlist.subtitle ? (
                <p className="mb-4 max-w-3xl text-sm text-foreground-muted">{content.shortlist.subtitle}</p>
              ) : null}
              <BestProvidersMiniList
                title={content.shortlist.title}
                items={miniItems}
                viewAllHref={`${content.path}#comparison`}
                viewAllLabel="Jump to full table"
                contained={false}
              />
            </div>
          </Container>

          <Section
            id="comparison"
            contained={false}
            eyebrow="Comparison"
            title={content.comparison.title}
            subtitle={content.comparison.subtitle}
            className="scroll-mt-24 !pt-4 md:!pt-6"
          >
            <ProvidersComparisonTable rows={content.rows} />
            <AffiliateDisclosureNote className="mt-4 max-w-3xl">{content.disclosure}</AffiliateDisclosureNote>
          </Section>

          <Section
            contained={false}
            title={content.detailedCardsTitle}
            subtitle="Same options as the table—more context per provider."
            className="!pt-10 md:!pt-12"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              {content.rows.map((row) => (
                <ProviderCard key={row.id} {...rowToDetailCard(row)} />
              ))}
            </div>
          </Section>

          {content.relatedLinks?.length ? (
            <div className="border-t border-border py-8 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Related</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {content.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-link hover:text-link-hover">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <PresetSoftCTA preset={resolveBestProvidersSoftCtaPreset(content.slug)} />

          <PillarGuideFaqRegion>
            <FAQBlock id="faq" eyebrow="FAQ" title="Common questions" items={content.faq} maxItems={20} />
          </PillarGuideFaqRegion>

          <footer className="border-t border-border pb-12 pt-8 md:pb-16 md:pt-10">
            <p className="max-w-3xl text-xs leading-relaxed text-foreground-muted">
              ExpatCopilot curates these pages for planning—not as a substitute for professional advice. Rankings
              reflect typical expat use-cases, not paid placement unless explicitly labelled.
            </p>
          </footer>
        </PillarMainStack>
      </Container>
    </GuidePageRoot>
  );
}

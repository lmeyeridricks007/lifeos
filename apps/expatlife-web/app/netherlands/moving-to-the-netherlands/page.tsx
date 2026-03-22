import type { Metadata } from "next";
import Link from "next/link";
import {
  getNlMovingPillarContent,
  resolveLinkFromRegistry,
  resolveReadingOrder,
} from "@expatlife/content";
import { PillarPageTemplate } from "@/components/content/PillarPageTemplate";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import {
  getAffiliatesForCategory,
  getAffiliateCategoryTitle,
} from "@/lib/affiliates";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { Section } from "@/components/ui/section";
import { CostOfMovingSection } from "@/components/content/CostOfMovingSection";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();

function resolveScenarios(
  scenarios: Array<{
    id: string;
    chips?: string[];
    personaTitle: string;
    whatMatters: string[];
    readingOrder: string[];
    startTool: { key: string; prefill?: Record<string, string> };
    unknownsToConfirm: string[];
  }>,
  linkRegistry: Parameters<typeof resolveReadingOrder>[0]
): ResolvedScenario[] {
  return scenarios.map((s) => {
    const startToolLink =
      s.startTool?.key != null && s.startTool.key !== ""
        ? resolveLinkFromRegistry(linkRegistry, s.startTool.key) ?? null
        : null;
    return {
      id: s.id,
      chips: s.chips,
      personaTitle: s.personaTitle,
      whatMatters: s.whatMatters,
      readingOrderLinks: resolveReadingOrder(linkRegistry, s.readingOrder),
      startToolLink,
      unknownsToConfirm: s.unknownsToConfirm,
    };
  });
}

// Static metadata to avoid DataCloneError (Next.js clones metadata; async generateMetadata can trigger unsupported types).
// Keep in sync with packages/content/core/nl/moving/pillar.meta.v1.json seo/canonicalPath.
export const metadata: Metadata = buildSocialMetadata({
  title: "Moving to the Netherlands: checklist, timeline, and what to prepare",
  description:
    "Planning to move to the Netherlands? Learn what to prepare before you move, what to do after arrival, and how to settle in during your first 90 days. Includes practical guides, tools, and checklists.",
  path: "/netherlands/moving-to-the-netherlands/",
  ogType: "article",
});

type PageProps = { searchParams?: Promise<{ from?: string }> | { from?: string } };

export default async function MovingToNetherlandsPillarPage(props: PageProps) {
  const raw = props.searchParams;
  const searchParams: { from?: string } =
    raw !== undefined && raw !== null ? await Promise.resolve(raw) : {};
  const originCountry = typeof searchParams.from === "string" ? searchParams.from : undefined;

  const content = await getNlMovingPillarContent();
  const {
    meta,
    scenarios,
    faq,
    linkRegistry,
    checklistTabs,
    timelineStages,
    timelineIntro,
    timelineSectionCta,
    toolsStrip,
    tocItems,
    sections,
  } = content;
  const resolvedScenarios = resolveScenarios(scenarios, linkRegistry);

  const breadcrumbCrumbs = meta.breadcrumbs.map((b) => ({
    name: b.label,
    item: new URL(b.href, baseUrl).toString(),
  }));

  const faqAccordionItems = faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: (
      <div className="space-y-3">
        <p className="text-sm text-slate-700">{item.a}</p>
        {item.links?.length ? (
          <ul className="flex flex-wrap gap-2">
            {item.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
    ),
  }));

  const affiliatePagePath = "/netherlands/moving-to-the-netherlands/";
  const sectionTitle = "Services commonly used by expats";
  const slotConfig = [
    { afterSectionId: "before-you-move", categories: ["international-moving", "international-shipping"] },
    { afterSectionId: "housing", categories: ["housing-platforms"] },
  ] as const;

  const affiliateSlots = await Promise.all(
    slotConfig.map(async ({ afterSectionId, categories }) => {
      const blocks = await Promise.all(
        categories.map(async (category) => {
          const [providers, categoryTitle] = await Promise.all([
            getAffiliatesForCategory(affiliatePagePath, category),
            getAffiliateCategoryTitle(category),
          ]);
          return {
            title: `${sectionTitle}: ${categoryTitle}`,
            providers,
          };
        })
      );
      return { afterSectionId, blocks };
    })
  );

  const destCountry = "netherlands";
  const bankingData = loadPlacementWithProviders("nl-moving-pillar-banking-problem-solution", destCountry, originCountry);
  const housingData = loadPlacementWithProviders("nl-moving-pillar-housing-problem-solution", destCountry, originCountry);
  const sidebarData = loadPlacementWithProviders("nl-moving-pillar-sidebar-start-here", destCountry, originCountry);
  const nextStepsData = loadPlacementWithProviders("nl-moving-pillar-next-steps", destCountry, originCountry);
  const endResourcesData = loadPlacementWithProviders("nl-moving-pillar-end-resources", destCountry, originCountry);
  const scenarioData = loadPlacementWithProviders("nl-moving-pillar-scenario-work-solo-30", destCountry, originCountry);
  const affiliateBlockData = {
    ...(bankingData && { banking: bankingData }),
    ...(housingData && { housing: housingData }),
    ...(sidebarData && { sidebar: sidebarData }),
    ...(nextStepsData && { nextSteps: nextStepsData }),
    ...(endResourcesData && { endResources: endResourcesData }),
    ...(scenarioData && { scenario: scenarioData }),
  };

  return (
    <>
      <PillarPageTemplate
        breadcrumbCrumbs={breadcrumbCrumbs}
        meta={meta}
        faq={faq}
        faqAccordionItems={faqAccordionItems}
        sections={sections}
        timelineStages={timelineStages}
        timelineIntro={timelineIntro}
        timelineSectionCta={timelineSectionCta}
        toolsStrip={toolsStrip}
        tocItems={tocItems}
        checklistTabs={checklistTabs}
        resolvedScenarios={resolvedScenarios}
        linkRegistry={linkRegistry}
        affiliateSlots={affiliateSlots}
        originCountry={originCountry}
        affiliateBlockData={affiliateBlockData}
        canonicalUrl={new URL(meta.canonicalPath, baseUrl).toString()}
        slotBeforeTimeline={
          <OriginCountryGuideGrid
            id="moving-from-your-country"
            title="Moving to the Netherlands from your country"
            intro="Country-specific relocation guides with origin-specific planning notes, document cues, and tailored routes into the right tools."
            items={getFeaturedOriginCountryGuides(6)}
            limit={6}
            showViewAll={true}
            contained={false}
          />
        }
      />
      <CostOfMovingSection />
      <Section
        title="Arrival overview"
        subtitle="If you have already landed, use these guides for practical first-step sequencing."
      >
        <ul className="space-y-2">
          <li>
            <Link
              href="/netherlands/after-arriving-netherlands/"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              What to do when moving to the Netherlands: first steps after arrival
            </Link>
          </li>
          <li>
            <Link
              href="/netherlands/municipality-registration-netherlands/"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              Municipality registration in the Netherlands
            </Link>
          </li>
          <li>
            <Link
              href="/netherlands/open-bank-account-netherlands/"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              Open a bank account in the Netherlands
            </Link>
          </li>
          <li>
            <Link
              href="/netherlands/health-insurance-netherlands/"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              Health insurance in the Netherlands
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}

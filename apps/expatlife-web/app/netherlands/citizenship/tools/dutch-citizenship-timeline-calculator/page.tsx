import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadataTitle, sharePreviewTitle } from "@/lib/seo/metadata";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { DutchCitizenshipTimelineClient } from "@/src/components/tools/dutch-citizenship-timeline/DutchCitizenshipTimelineClient";
import {
  CITIZENSHIP_TIMELINE_CANONICAL,
  CITIZENSHIP_TIMELINE_FAQ_ITEMS,
  CITIZENSHIP_TIMELINE_OFFICIAL_SOURCES,
  CITIZENSHIP_TIMELINE_RELATED_GUIDES,
} from "@/src/content/tools/dutch-citizenship-timeline/content";
import {
  CITIZENSHIP_TOOLS_PATH,
  DUTCH_CITIZENSHIP_PATH,
  INBURGERING_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Dutch Citizenship Timeline Calculator Netherlands";
const META_DESCRIPTION =
  "Orientation timeline for Dutch naturalisation: five-year horizon, integration prep, renunciation checks, gemeente application, IND decision period, and ceremony. Not an IND decision.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: CITIZENSHIP_TIMELINE_CANONICAL },
  keywords: [
    "Dutch citizenship timeline",
    "naturalisation calculator Netherlands",
    "when can I naturalise Netherlands",
    "Dutch citizenship milestones",
    "option vs naturalisation timing",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: CITIZENSHIP_TIMELINE_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Passport and civic documents for Dutch citizenship timeline planning.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    images: ["/images/heroes/highly-skilled-migrant-netherlands.png"],
  },
};

function resolveRelatedGuides() {
  return CITIZENSHIP_TIMELINE_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function DutchCitizenshipTimelineCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CITIZENSHIP_TIMELINE_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Citizenship tools", url: CITIZENSHIP_TOOLS_PATH },
    { name: "Dutch citizenship timeline calculator", url: CITIZENSHIP_TIMELINE_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Dutch Citizenship Timeline Calculator Netherlands",
    description:
      "Deterministic orientation timeline for Dutch naturalisation planning: residence horizon, integration, renunciation, gemeente application, IND decision period, and ceremony. Not legal advice.",
    url: CITIZENSHIP_TIMELINE_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: CITIZENSHIP_TIMELINE_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    CITIZENSHIP_TIMELINE_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Dutch Citizenship Timeline Calculator"
            subtitle="Sequence naturalisation milestones — residence horizon, integration, renunciation, gemeente application, IND decision period, and ceremony — or check whether option comes first."
            introBullets={[
              "Orientation bands: early planning, prep milestones, ready to book gemeente, option check, or needs review",
              "Optional start month for a rough five-year horizon (not a legal deadline)",
              "Flags integration and renunciation blockers before you fix an apply month",
              "Always confirm on IND naturalisation / option pages",
            ]}
            primaryCtaLabel="Build timeline"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Dutch citizenship guide"
            secondaryCtaHref={DUTCH_CITIZENSHIP_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Passport and civic documents for Dutch citizenship planning.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Dutch citizenship timeline planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={CITIZENSHIP_TIMELINE_CANONICAL}
          />
        }
        disclosure="Planning view only — not immigration or legal advice. This tool does not decide IND eligibility, fees, decision speed, or dual nationality outcomes. Confirm requirements on official IND and government.nl pages (and with a qualified adviser for complex histories)."
        primarySectionTitle="Calculator"
        primarySectionContent={<DutchCitizenshipTimelineClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-sequence",
            title: "What we sequence",
            body: [
              "We map deterministic planning milestones: residence horizon, continuity risks, civic integration evidence, renunciation stance, gemeente application, IND decision period orientation, and the mandatory ceremony.",
            ],
          },
          {
            id: "option-first",
            title: "Why option can change the timeline",
            body: [
              "If option might apply, that path is usually faster and often skips integration demonstration and renunciation. Years of residence alone do not create option eligibility — check IND first.",
            ],
          },
          {
            id: "not-a-calendar",
            title: "Why this is not a calendar promise",
            body: [
              "IND decision periods and gemeente appointment availability vary. We use cautious horizon language so you can prepare documents — not so you can book flights around a predicted approval date.",
            ],
          },
          {
            id: "pr-vs-citizenship",
            title: "Permanent residence vs citizenship",
            body: [
              "PR stabilises stay rights without changing nationality. Citizenship is optional and separate. Many people hold PR for years before naturalising.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={CITIZENSHIP_TIMELINE_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related citizenship links">
            <Link href={DUTCH_CITIZENSHIP_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch citizenship guide
            </Link>
            <Link href={PERMANENT_RESIDENCE_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Permanent residence guide
            </Link>
            <Link href={INBURGERING_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Inburgering guide
            </Link>
            <Link
              href="/netherlands/citizenship/tools/permanent-residence-eligibility-calculator/"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              PR eligibility calculator
            </Link>
            <Link href={CITIZENSHIP_TOOLS_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Citizenship tools hub
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Verify every application decision on these portals. This timeline is orientation only.
            </p>
            <ul className="space-y-2">
              {CITIZENSHIP_TIMELINE_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:underline">
                    {source.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

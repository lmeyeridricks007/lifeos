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
import { InburgeringExamReadinessClient } from "@/src/components/tools/inburgering-exam-readiness/InburgeringExamReadinessClient";
import {
  EXAM_READINESS_CANONICAL,
  EXAM_READINESS_FAQ_ITEMS,
  EXAM_READINESS_OFFICIAL_SOURCES,
  EXAM_READINESS_RELATED_GUIDES,
} from "@/src/content/tools/inburgering-exam-readiness/content";
import {
  INBURGERING_PATH,
  INTEGRATION_TOOLS_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Inburgering Exam Readiness Checker Netherlands";
const META_DESCRIPTION =
  "Module self-check for language + KNM prep, post-July 2025 materials reminder — not a pass prediction.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: EXAM_READINESS_CANONICAL },
  keywords: [
    "inburgering exam readiness",
    "KNM exam Netherlands",
    "DUO practice exams",
    "A2 B1 inburgering",
    "civic integration exam prep",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: EXAM_READINESS_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Inburgering exam readiness planning for language and KNM modules in the Netherlands.",
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
  return EXAM_READINESS_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function InburgeringExamReadinessCheckerPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(EXAM_READINESS_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Integration tools", url: INTEGRATION_TOOLS_PATH },
    { name: "Inburgering exam readiness checker", url: EXAM_READINESS_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Inburgering Exam Readiness Checker Netherlands",
    description:
      "Deterministic self-assessment checklist for inburgering language modules and KNM prep, including post–July 2025 materials. Not a pass prediction.",
    url: EXAM_READINESS_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: EXAM_READINESS_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    EXAM_READINESS_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Inburgering Exam Readiness Checker"
            subtitle="Self-check language modules and KNM prep against your target level — then verify with current DUO practice exams before you book."
            introBullets={[
              "Orientation bands — not a pass prediction",
              "Reading, writing, speaking, listening + KNM",
              "Post–July 2025 KNM materials reminder",
              "Priority modules to study next",
            ]}
            primaryCtaLabel="Start readiness check"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Inburgering guide"
            secondaryCtaHref={INBURGERING_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Inburgering exam readiness planning for language and KNM modules.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Inburgering exam readiness planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={EXAM_READINESS_CANONICAL}
          />
        }
        disclosure="Self-assessment only. DUO practice exams are the source of truth. This tool does not invent scores, predict passes, or replace official materials on inburgeren.nl."
        primarySectionTitle="Checker"
        primarySectionContent={<InburgeringExamReadinessClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "modules-covered",
            title: "Modules covered",
            body: [
              "We map reading, writing, speaking, listening, KNM, and optional participation / labour-market modules against your self-reported status and booking window.",
            ],
          },
          {
            id: "a2-vs-b1",
            title: "A2 vs B1",
            body: [
              "Wi 2021 obligation routes often target B1 in a PIP. IND secure-residence evidence is often at least A2 or a Wi 2021 certificate / exemption. Confirm which goal applies before you book the wrong package.",
            ],
          },
          {
            id: "knm-2025",
            title: "KNM from 1 July 2025",
            body: [
              "KNM end terms and style were updated from 1 July 2025. Older third-party quizzes can be stale — prepare with current DUO practice materials on inburgeren.nl.",
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not claim",
            body: [
              "We do not predict whether you will pass, invent practice scores, or replace DUO or IND. Official practice exams and your PIP / evidence list remain decisive.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={EXAM_READINESS_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related integration links">
            <Link
              href="/netherlands/integration/tools/integration-requirement-checker/"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Requirement checker
            </Link>
            <Link href={INBURGERING_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Inburgering guide
            </Link>
            <Link href={PERMANENT_RESIDENCE_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Permanent residence guide
            </Link>
            <Link href={INTEGRATION_TOOLS_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Integration tools hub
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Verify prep and booking on these portals. This tool is a self-assessment checklist only.
            </p>
            <ul className="space-y-2">
              {EXAM_READINESS_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-600 hover:underline"
                  >
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

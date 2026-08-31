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
import { IntegrationRequirementClient } from "@/src/components/tools/integration-requirement/IntegrationRequirementClient";
import {
  INTEGRATION_REQUIREMENT_CANONICAL,
  INTEGRATION_REQUIREMENT_FAQ_ITEMS,
  INTEGRATION_REQUIREMENT_OFFICIAL_SOURCES,
  INTEGRATION_REQUIREMENT_RELATED_GUIDES,
} from "@/src/content/tools/integration-requirement/content";
import {
  INBURGERING_PATH,
  INTEGRATION_TOOLS_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Integration Requirement Checker Netherlands";
const META_DESCRIPTION =
  "Orientation about civic integration obligation vs secure-residence proof for HSM, family, and Wi 2021 cohorts in the Netherlands. Not a legal determination.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: INTEGRATION_REQUIREMENT_CANONICAL },
  keywords: [
    "inburgeringsplicht Netherlands",
    "civic integration obligation",
    "HSM inburgering",
    "Wi 2021",
    "integration requirement checker",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: INTEGRATION_REQUIREMENT_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Documents and planning materials for civic integration requirements in the Netherlands.",
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
  return INTEGRATION_REQUIREMENT_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function IntegrationRequirementCheckerPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(INTEGRATION_REQUIREMENT_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Integration tools", url: INTEGRATION_TOOLS_PATH },
    { name: "Integration requirement checker", url: INTEGRATION_REQUIREMENT_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Integration Requirement Checker Netherlands",
    description:
      "Deterministic orientation checklist for civic integration obligation vs secure-residence evidence: IND letter, cohort, HSM, Wi 2021, and PR goals. Not a legal determination.",
    url: INTEGRATION_REQUIREMENT_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: INTEGRATION_REQUIREMENT_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    INTEGRATION_REQUIREMENT_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Integration Requirement Checker"
            subtitle="Surface whether your situation looks like an obligation path, a no-obligation-but-plan-evidence path, or a careful-review case — before you book exams."
            introBullets={[
              "Orientation bands — not a legal determination",
              "IND letter and DUO as source of truth",
              "HSM vs obligation vs secure-residence proof",
              "Wi 2021 cohort and exemption themes to verify",
            ]}
            primaryCtaLabel="Start requirement check"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Inburgering guide"
            secondaryCtaHref={INBURGERING_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Documents and planning materials for civic integration requirements.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Integration requirement planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={INTEGRATION_REQUIREMENT_CANONICAL}
          />
        }
        disclosure="Planning view only — not immigration or legal advice. This tool does not decide whether you have inburgeringsplicht. Your IND decision letter and DUO / gemeente portals are the source of truth."
        primarySectionTitle="Checker"
        primarySectionContent={<IntegrationRequirementClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-surface",
            title: "What we surface",
            body: [
              "We map deterministic orientation topics: residence basis, IND obligation letter signals, Wi 2021 vs older cohort, PR/citizenship goals, exemption themes, and timing in the Netherlands.",
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not do",
            body: [
              "We do not decide your legal duty, certify exemptions, or replace IND / DUO correspondence. Official letters and portals remain the source of truth.",
            ],
          },
          {
            id: "hsm-vs-obligation",
            title: "HSM vs obligation",
            body: [
              "Many Highly Skilled Migrants are not under inburgeringsplicht on the temporary work permit, but that is not automatic for every person. Confirm your letter, then still plan civic integration evidence if permanent residence or citizenship is the goal.",
            ],
          },
          {
            id: "pr-evidence-separate",
            title: "PR evidence is a separate question",
            body: [
              "Obligation is a legal duty for some newcomers. IND’s civic integration requirement for a more secure residence permit is a separate evidence check when you apply for permanent residence or similar status.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={INTEGRATION_REQUIREMENT_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related integration links">
            <Link href={INBURGERING_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Inburgering guide
            </Link>
            <Link
              href="/netherlands/integration/tools/inburgering-exam-readiness-checker/"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Exam readiness checker
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
              Verify obligation and secure-residence evidence on these portals. This tool is orientation only.
            </p>
            <ul className="space-y-2">
              {INTEGRATION_REQUIREMENT_OFFICIAL_SOURCES.map((source) => (
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

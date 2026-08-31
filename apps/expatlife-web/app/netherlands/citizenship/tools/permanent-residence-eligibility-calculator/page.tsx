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
import { PermanentResidenceEligibilityClient } from "@/src/components/tools/permanent-residence-eligibility/PermanentResidenceEligibilityClient";
import {
  PR_ELIGIBILITY_CANONICAL,
  PR_ELIGIBILITY_FAQ_ITEMS,
  PR_ELIGIBILITY_OFFICIAL_SOURCES,
  PR_ELIGIBILITY_RELATED_GUIDES,
} from "@/src/content/tools/permanent-residence-eligibility/content";
import {
  CITIZENSHIP_TOOLS_PATH,
  DUTCH_CITIZENSHIP_PATH,
  INBURGERING_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Permanent Residence Eligibility Calculator Netherlands";
const META_DESCRIPTION =
  "Orientation checklist for Dutch permanent residence after HSM or other lawful stay: five-year signals, continuity, BRP, integration evidence, and IND next steps. Not an IND decision.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: PR_ELIGIBILITY_CANONICAL },
  keywords: [
    "permanent residence Netherlands calculator",
    "PR eligibility Netherlands",
    "HSM permanent residence",
    "verblijfsvergunning onbepaalde tijd",
    "IND permanent residence checklist",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: PR_ELIGIBILITY_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Residence documents on a desk for permanent residence planning in the Netherlands.",
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
  return PR_ELIGIBILITY_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function PermanentResidenceEligibilityCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(PR_ELIGIBILITY_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Citizenship tools", url: CITIZENSHIP_TOOLS_PATH },
    { name: "Permanent residence eligibility calculator", url: PR_ELIGIBILITY_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Permanent Residence Eligibility Calculator Netherlands",
    description:
      "Deterministic orientation checklist for Dutch permanent residence planning: residence length, continuity, BRP, integration evidence, and permit validity. Not legal advice and not an IND decision.",
    url: PR_ELIGIBILITY_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: PR_ELIGIBILITY_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    PR_ELIGIBILITY_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Permanent Residence Eligibility Calculator"
            subtitle="Map common IND themes for permanent residence after HSM or other lawful stay — five-year signals, continuity, BRP, integration evidence, and what to verify next."
            introBullets={[
              "Orientation bands only: ready to verify, close with gaps, early planning, or needs review",
              "Built around consecutive residence, renewals, absences, BRP, and civic integration evidence",
              "HSM-aware: PR is not automatic after five years and does not replace the job-search clock",
              "Always confirm on the IND permanent residence page before you apply",
            ]}
            primaryCtaLabel="Start checklist"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Permanent residence guide"
            secondaryCtaHref={PERMANENT_RESIDENCE_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Residence documents and planning notes for permanent residence in the Netherlands.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Permanent residence planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={PR_ELIGIBILITY_CANONICAL}
          />
        }
        disclosure="Planning view only — not immigration or legal advice. This tool does not decide IND eligibility, fees, or outcomes. It does not restate IND rules as if ExpatLife were the IND. Confirm requirements, documents, and timing on official IND pages (and with a qualified adviser for complex histories)."
        primarySectionTitle="Calculator"
        primarySectionContent={<PermanentResidenceEligibilityClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-score",
            title: "What we map",
            body: [
              "We use deterministic planning signals drawn from common IND permanent-residence themes: consecutive lawful years, renewal continuity, absences, BRP registration, civic integration evidence, and whether your current permit is still valid.",
            ],
          },
          {
            id: "what-we-do-not-do",
            title: "What we do not do",
            body: [
              "We do not grant or refuse permanent residence, calculate fees, or replace IND forms. Mixed permit histories, family routes, and long absences often need human review beyond this checklist.",
            ],
          },
          {
            id: "hsm-context",
            title: "HSM context",
            body: [
              "Holding a Highly Skilled Migrant permit for about five years is a planning signal, not automatic PR. Job-search windows after losing a sponsor are not permanent residence.",
            ],
          },
          {
            id: "integration-context",
            title: "Integration context",
            body: [
              "For a more secure residence permit, IND usually looks for civic integration at least at A2, a Wi 2021 certificate, or an accepted exemption. That is separate from Dutch citizenship.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={PR_ELIGIBILITY_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related citizenship links">
            <Link href={PERMANENT_RESIDENCE_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Permanent residence guide
            </Link>
            <Link href={INBURGERING_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Inburgering guide
            </Link>
            <Link href={DUTCH_CITIZENSHIP_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch citizenship guide
            </Link>
            <Link href={CITIZENSHIP_TOOLS_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Citizenship tools hub
            </Link>
            <Link href="/netherlands/visa/highly-skilled-migrant/" className="font-medium text-brand-600 hover:text-brand-700">
              HSM visa guide
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Verify every application decision on these portals. This calculator is orientation only.
            </p>
            <ul className="space-y-2">
              {PR_ELIGIBILITY_OFFICIAL_SOURCES.map((source) => (
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

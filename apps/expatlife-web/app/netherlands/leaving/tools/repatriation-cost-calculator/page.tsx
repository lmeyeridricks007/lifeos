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
import { RepatriationCostClient } from "@/src/components/tools/repatriation-cost/RepatriationCostClient";
import {
  REPATRIATION_COST_CANONICAL,
  REPATRIATION_COST_FAQ_ITEMS,
  REPATRIATION_COST_RELATED_GUIDES,
} from "@/src/content/tools/repatriation-cost/content";
import { EXIT_READINESS_CANONICAL } from "@/src/content/tools/exit-readiness/content";
import { LEAVING_NL_TAX_PATH } from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const LEAVING_TOOLS_HUB_PATH = "/netherlands/leaving/tools/";

const META_TITLE = "Repatriation Cost Calculator Netherlands";
const META_DESCRIPTION =
  "Orientation budget ranges for leaving the Netherlands: flights, shipping, lease break risk, temporary housing, and pets. Not a mover quote or tax advice.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: REPATRIATION_COST_CANONICAL },
  keywords: [
    "repatriation cost calculator",
    "leaving Netherlands budget",
    "exit moving costs NL",
    "Netherlands shipping cost estimate",
    "repatriation flights shipping pets",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: REPATRIATION_COST_CANONICAL,
    images: [
      {
        url: "/images/heroes/netherlands-leaving-tax-hero-v1.png",
        width: 1200,
        height: 630,
        alt: "Planning documents for leaving the Netherlands and budgeting repatriation costs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    images: ["/images/heroes/netherlands-leaving-tax-hero-v1.png"],
  },
};

function resolveRelatedGuides() {
  return REPATRIATION_COST_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function RepatriationCostCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(REPATRIATION_COST_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Leaving tools", url: LEAVING_TOOLS_HUB_PATH },
    { name: "Repatriation cost calculator", url: REPATRIATION_COST_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Repatriation Cost Calculator Netherlands",
    description:
      "Deterministic orientation budget ranges for leaving the Netherlands: flights, shipping, lease risk, temporary housing, and pets. Not a mover quote and not tax advice.",
    url: REPATRIATION_COST_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: REPATRIATION_COST_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    REPATRIATION_COST_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Repatriation Cost Calculator"
            subtitle="Build orientation budget ranges for leaving the Netherlands — flights, shipping, lease risk, temporary housing, and pets — then sequence cash before your last Dutch payslip."
            introBullets={[
              "Min–typical–max ranges by logistics category",
              "Household size and destination scale flights and shipping",
              "Cash timing notes for deposits and overlapping rent",
              "Not a mover quote — not tax advice",
            ]}
            primaryCtaLabel="Estimate costs"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Exit readiness checker"
            secondaryCtaHref={EXIT_READINESS_CANONICAL}
            image={{
              src: "/images/heroes/netherlands-leaving-tax-hero-v1.png",
              alt: "Planning documents for leaving the Netherlands and budgeting repatriation costs.",
            }}
            imageFallback={{
              src: "/images/heroes/netherlands-leaving-tax-hero-v1.png",
              alt: "Repatriation cost planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={REPATRIATION_COST_CANONICAL}
          />
        }
        disclosure="Planning view only — not a mover quote and not tax or financial advice. Ranges are orientation bands. Get written quotes from movers, airlines, and landlords, and use Belastingdienst for exit tax topics."
        primarySectionTitle="Calculator"
        primarySectionContent={<RepatriationCostClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-estimate",
            title: "What we estimate",
            body: [
              "We combine deterministic planning bands for flights, shipping, lease break / deposit risk, temporary housing, pets, and small admin closures based on household size, destination region, and your selections.",
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not do",
            body: [
              "We do not issue mover quotes, book flights, predict landlord outcomes, or calculate exit tax, M-form, or toeslagen. Those need providers and official sources for your case.",
            ],
          },
          {
            id: "cash-timing",
            title: "Cash timing matters",
            body: [
              "Deposits for movers and flights often land weeks before departure, while temporary housing at destination is usually paid upfront. Plan a buffer for overlapping rent and deposit disputes.",
            ],
          },
          {
            id: "pair-with-exit",
            title: "Pair with exit readiness",
            body: [
              "Cost planning and admin sequencing work together. Use the exit readiness checker for deregistration, insurance, and tax-record themes alongside this budget view.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={REPATRIATION_COST_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related leaving links">
            <Link href={EXIT_READINESS_CANONICAL} className="font-medium text-brand-600 hover:text-brand-700">
              Exit readiness checker
            </Link>
            <Link href={LEAVING_NL_TAX_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Taxes when leaving the Netherlands
            </Link>
            <Link href={LEAVING_TOOLS_HUB_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Leaving tools hub
            </Link>
          </nav>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

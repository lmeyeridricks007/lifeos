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
import { ExitReadinessClient } from "@/src/components/tools/exit-readiness/ExitReadinessClient";
import {
  EXIT_READINESS_CANONICAL,
  EXIT_READINESS_FAQ_ITEMS,
  EXIT_READINESS_OFFICIAL_SOURCES,
  EXIT_READINESS_RELATED_GUIDES,
} from "@/src/content/tools/exit-readiness/content";
import { LEAVING_NL_TAX_PATH } from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const LEAVING_TOOLS_PATH = "/netherlands/leaving/tools/";
const REPATRIATION_CALCULATOR_PATH = "/netherlands/leaving/tools/repatriation-cost-calculator/";
const EXTENSIONS_CHANGES_PATH = "/netherlands/moving/extensions-changes/";

const META_TITLE = "Exit Readiness Checker Netherlands";
const META_DESCRIPTION =
  "orientation checklist for deregistration, insurance, toeslagen, payroll, tax records before leaving NL";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: EXIT_READINESS_CANONICAL },
  keywords: [
    "leaving Netherlands checklist",
    "deregister municipality Netherlands",
    "exit readiness Netherlands",
    "toeslagen when leaving NL",
    "taxes when leaving Netherlands",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: EXIT_READINESS_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Exit readiness planning for leaving the Netherlands.",
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
  return EXIT_READINESS_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function ExitReadinessCheckerPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(EXIT_READINESS_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Leaving tools", url: LEAVING_TOOLS_PATH },
    { name: "Exit readiness checker", url: EXIT_READINESS_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Exit Readiness Checker Netherlands",
    description:
      "Deterministic orientation checklist for leaving the Netherlands: municipality deregistration, housing, health insurance, toeslagen, payroll, tax records, and destination admin. Not legal or tax advice.",
    url: EXIT_READINESS_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: EXIT_READINESS_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    EXIT_READINESS_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Exit Readiness Checker"
            subtitle="Sequence municipality deregistration, housing, insurance, toeslagen, payroll, and tax records before you leave the Netherlands."
            introBullets={[
              "Orientation bands — not clearance to leave",
              "Deregistration, insurance, and tax-file priorities",
              "Toeslagen, payroll, and contract close-out themes",
              "Links to leaving-NL tax guidance and official portals",
            ]}
            primaryCtaLabel="Start exit readiness check"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Taxes when leaving NL"
            secondaryCtaHref={LEAVING_NL_TAX_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Exit readiness planning for leaving the Netherlands.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Exit readiness planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={EXIT_READINESS_CANONICAL}
          />
        }
        disclosure="Planning view only — not legal or tax advice. This tool does not clear you to leave or decide residency, insurance, or benefits for your case. Confirm steps with your gemeente, insurer, Belastingdienst, and qualified advisers when facts are complex."
        primarySectionTitle="Checker"
        primarySectionContent={<ExitReadinessClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-surface",
            title: "What we surface",
            body: [
              "We map deterministic exit-admin themes: departure timing, municipality deregistration, housing close-out, Dutch health insurance, toeslagen, employer/payroll exit, tax records, banks/contracts, and destination registration.",
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not do",
            body: [
              "We do not book appointments, stop insurance, file tax returns, or certify that your exit is complete. Official portals and your own situation remain the source of truth.",
            ],
          },
          {
            id: "leaving-tax",
            title: "Exit checklist vs leaving-NL tax",
            body: [
              "This checker sequences practical closures. The taxes-when-leaving guide covers residency, payroll split, M-form orientation, and records in more depth.",
            ],
          },
          {
            id: "plans-shift",
            title: "If plans shift",
            body: [
              "If you stay longer or change permit status, review extensions and changes guidance before treating exit steps as final.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={EXIT_READINESS_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related leaving links">
            <Link href={LEAVING_NL_TAX_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Taxes when leaving NL
            </Link>
            <Link href={REPATRIATION_CALCULATOR_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Repatriation cost calculator
            </Link>
            <Link href={EXTENSIONS_CHANGES_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Extensions and changes
            </Link>
            <Link href={LEAVING_TOOLS_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Leaving tools hub
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Verify every exit and tax step on these portals. This tool is orientation only.
            </p>
            <ul className="space-y-2">
              {EXIT_READINESS_OFFICIAL_SOURCES.map((source) => (
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

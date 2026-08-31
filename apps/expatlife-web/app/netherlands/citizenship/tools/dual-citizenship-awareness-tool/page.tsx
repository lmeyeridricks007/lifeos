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
import { DualCitizenshipAwarenessClient } from "@/src/components/tools/dual-citizenship-awareness/DualCitizenshipAwarenessClient";
import {
  DUAL_CITIZENSHIP_CANONICAL,
  DUAL_CITIZENSHIP_FAQ_ITEMS,
  DUAL_CITIZENSHIP_OFFICIAL_SOURCES,
  DUAL_CITIZENSHIP_RELATED_GUIDES,
} from "@/src/content/tools/dual-citizenship-awareness/content";
import {
  CITIZENSHIP_TOOLS_PATH,
  DUTCH_CITIZENSHIP_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Dual Citizenship Awareness Tool Netherlands";
const META_DESCRIPTION =
  "Orientation checklist for Dutch dual nationality trade-offs: renunciation, exceptions, option vs naturalisation, home-country rules, and long stay abroad. Not a dual-passport verdict.";

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: DUAL_CITIZENSHIP_CANONICAL },
  keywords: [
    "dual citizenship Netherlands",
    "renounce nationality Netherlands",
    "Dutch dual nationality",
    "naturalisation renunciation",
    "option Dutch citizenship dual",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: DUAL_CITIZENSHIP_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Passports and documents for dual citizenship awareness planning in the Netherlands.",
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
  return DUAL_CITIZENSHIP_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function DualCitizenshipAwarenessToolPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(DUAL_CITIZENSHIP_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Citizenship tools", url: CITIZENSHIP_TOOLS_PATH },
    { name: "Dual citizenship awareness tool", url: DUAL_CITIZENSHIP_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Dual Citizenship Awareness Tool Netherlands",
    description:
      "Deterministic orientation checklist for Dutch dual nationality topics: renunciation, exceptions, option vs naturalisation, home-country friction, and long stay abroad. Not legal advice.",
    url: DUAL_CITIZENSHIP_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: DUAL_CITIZENSHIP_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    DUAL_CITIZENSHIP_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="Dual Citizenship Awareness Tool"
            subtitle="Surface Dutch renunciation themes, possible exceptions, option vs naturalisation, and home-country friction before you apply for Dutch nationality."
            introBullets={[
              "Orientation bands — not a dual-passport approval",
              "Naturalisation default renunciation vs option differences",
              "Exception themes to document (not self-certify)",
              "Home-country and long-stay-abroad loss risks to verify",
            ]}
            primaryCtaLabel="Start awareness check"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Dutch citizenship guide"
            secondaryCtaHref={DUTCH_CITIZENSHIP_PATH}
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Passports and documents for dual citizenship awareness planning.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Dual citizenship awareness planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={DUAL_CITIZENSHIP_CANONICAL}
          />
        }
        disclosure="Planning view only — not immigration or legal advice. This tool does not decide whether you may hold two nationalities. Confirm renunciation, exceptions, and loss rules on government.nl and IND (and with qualified advisers in both countries for complex cases)."
        primarySectionTitle="Checker"
        primarySectionContent={<DualCitizenshipAwarenessClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-surface",
            title: "What we surface",
            body: [
              "We map deterministic awareness topics: route (naturalisation vs option), Dutch renunciation default, possible exception themes, willingness to renounce, home-country friction, and long residence outside NL/EU.",
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not do",
            body: [
              "We do not certify exceptions, list every nationality’s renunciation law, or promise you can keep dual citizenship. Official pages and home authorities remain the source of truth.",
            ],
          },
          {
            id: "option-vs-nat",
            title: "Option vs naturalisation",
            body: [
              "Option often skips renunciation when you qualify. Naturalisation usually requires renunciation if possible. Check IND option categories before assuming the default rule.",
            ],
          },
          {
            id: "pr-alternative",
            title: "Permanent residence as an alternative",
            body: [
              "If you will not renounce and no exception or option path fits, PR can stabilise stay rights without changing nationality.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={DUAL_CITIZENSHIP_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related citizenship links">
            <Link href={DUTCH_CITIZENSHIP_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch citizenship guide
            </Link>
            <Link href={PERMANENT_RESIDENCE_PATH} className="font-medium text-brand-600 hover:text-brand-700">
              Permanent residence guide
            </Link>
            <Link
              href="/netherlands/citizenship/tools/dutch-citizenship-timeline-calculator/"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Citizenship timeline
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
              Verify every dual nationality decision on these portals. This tool is awareness only.
            </p>
            <ul className="space-y-2">
              {DUAL_CITIZENSHIP_OFFICIAL_SOURCES.map((source) => (
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

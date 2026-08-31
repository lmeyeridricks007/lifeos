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
import { HsmSalaryCheckerClient } from "@/src/components/tools/hsm-salary-checker/HsmSalaryCheckerClient";
import {
  HSM_SALARY_CANONICAL,
  HSM_SALARY_FAQ_ITEMS,
  HSM_SALARY_OFFICIAL_SOURCES,
  HSM_SALARY_RELATED_GUIDES,
  HSM_SALARY_THRESHOLD_SUMMARY,
} from "@/src/content/tools/hsm-salary-checker/content";
import { HSM_SALARY_FIGURE_YEAR } from "@/src/lib/tools/hsm-salary-checker/thresholds";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "HSM Salary Checker Netherlands";
const META_DESCRIPTION = `Compare a job offer to Dutch Highly Skilled Migrant salary floors (${HSM_SALARY_FIGURE_YEAR} planning figures): age 30+, under 30, and reduced criterion. Not an IND decision.`;

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  alternates: { canonical: HSM_SALARY_CANONICAL },
  keywords: [
    "HSM salary checker",
    "highly skilled migrant salary Netherlands",
    "kennismigrant salary threshold",
    "IND required amounts HSM",
  ],
  openGraph: {
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    url: HSM_SALARY_CANONICAL,
    images: [
      {
        url: "/images/heroes/highly-skilled-migrant-netherlands.png",
        width: 1200,
        height: 630,
        alt: "Job offer and salary documents for Highly Skilled Migrant planning in the Netherlands.",
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
  return HSM_SALARY_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function HsmSalaryCheckerPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(HSM_SALARY_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const floorsLine = HSM_SALARY_THRESHOLD_SUMMARY.map((r) => `${r.label} ${r.amount}`).join(" · ");

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Moving tools", url: "/netherlands/moving/tools/" },
    { name: "HSM salary checker", url: HSM_SALARY_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "HSM Salary Checker Netherlands",
    description: `Deterministic orientation checker comparing a gross monthly offer to ${HSM_SALARY_FIGURE_YEAR} Highly Skilled Migrant salary floors. Not immigration advice.`,
    url: HSM_SALARY_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: sharePreviewTitle(META_TITLE),
    description: META_DESCRIPTION,
    canonicalPath: HSM_SALARY_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(
    HSM_SALARY_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
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
            title="HSM Salary Checker"
            subtitle={`Compare your offer to Highly Skilled Migrant salary floors (${HSM_SALARY_FIGURE_YEAR} planning figures). Confirm holiday-pay treatment and recognised-sponsor status before you sign.`}
            introBullets={[
              floorsLine,
              "Gross monthly — typically without holiday pay",
              "Reduced criterion only when IND / employer say it applies",
              "Not an IND approval prediction",
            ]}
            primaryCtaLabel="Check salary fit"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="HSM visa guide"
            secondaryCtaHref="/netherlands/visa/highly-skilled-migrant/"
            image={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "Job offer documents for Highly Skilled Migrant salary planning.",
            }}
            imageFallback={{
              src: "/images/heroes/highly-skilled-migrant-netherlands.png",
              alt: "HSM salary planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={HSM_SALARY_CANONICAL}
          />
        }
        disclosure="Planning view only — not immigration or legal advice. This tool does not decide whether IND will approve a Highly Skilled Migrant permit. Verify current required amounts on IND and confirm salary components with your employer."
        primarySectionTitle="Checker"
        primarySectionContent={<HsmSalaryCheckerClient />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "what-we-compare",
            title: "What we compare",
            body: [
              `We compare your entered gross monthly figure to ${HSM_SALARY_FIGURE_YEAR} planning floors for age 30+, under 30, and (only if you claim it) the reduced criterion. We also surface holiday-pay and recognised-sponsor checks.`,
            ],
          },
          {
            id: "what-we-do-not",
            title: "What we do not do",
            body: [
              "We do not approve visas, certify reduced-criterion eligibility, or replace the IND required-amounts page. Market-conform pay and sponsor duties still apply beyond the floor.",
            ],
          },
          {
            id: "holiday-pay",
            title: "Holiday pay matters",
            body: [
              "IND HSM thresholds are typically gross per month without holiday allowance. If your offer letter mixes vakantiegeld or bonuses, ask HR for the IND-relevant monthly gross before you decide.",
            ],
          },
          {
            id: "30-ruling",
            title: "Not the same as the 30% ruling",
            body: [
              "Belastingdienst 30% ruling salary norms are a separate tax regime. Clearing an HSM floor does not automatically mean you qualify for the 30% ruling, and vice versa.",
            ],
          },
        ]}
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={HSM_SALARY_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related HSM links">
            <Link href="/netherlands/visa/highly-skilled-migrant/" className="font-medium text-brand-600 hover:text-brand-700">
              HSM visa guide
            </Link>
            <Link href="/netherlands/visa/eu-blue-card/" className="font-medium text-brand-600 hover:text-brand-700">
              EU Blue Card
            </Link>
            <Link href="/netherlands/visa-cost-calculator/" className="font-medium text-brand-600 hover:text-brand-700">
              Visa cost calculator
            </Link>
            <Link href="/netherlands/moving/tools/" className="font-medium text-brand-600 hover:text-brand-700">
              Moving tools hub
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Always verify current salary floors here. ExpatLife figures are orientation only.
            </p>
            <ul className="space-y-2">
              {HSM_SALARY_OFFICIAL_SOURCES.map((source) => (
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

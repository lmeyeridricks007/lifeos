import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { ContractScannerRightRail } from "@/src/components/tools/employment-contract-scanner/ContractScannerRightRail";
import {
  CONTRACT_SCANNER_AT_A_GLANCE,
  CONTRACT_SCANNER_CANONICAL,
  CONTRACT_SCANNER_FAQ,
  CONTRACT_SCANNER_OFFICIAL_SOURCES,
  CONTRACT_SCANNER_RELATED_GUIDES,
  NL_BASE,
} from "@/src/content/tools/employment-contract-scanner/content";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";

const ContractScannerClient = dynamic(
  () =>
    import("@/src/components/tools/employment-contract-scanner/ContractScannerClient").then((m) => ({
      default: m.ContractScannerClient,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-2xl border-0 bg-copilot-surface p-6 shadow-expatos-md ring-1 ring-copilot-primary/[0.1]"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="h-2 w-2/3 max-w-xs overflow-hidden rounded-full bg-copilot-bg-soft">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-copilot-primary/40" />
        </div>
        <p className="mt-4 text-sm font-semibold text-copilot-text-primary">Loading contract scanner…</p>
      </div>
    ),
  }
);

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Dutch Employment Contract Risk Scanner | ExpatCopilot";
const META_DESCRIPTION =
  "Paste contract text or upload a text-based PDF to detect common risk areas in Dutch employment contracts, including notice, probation, non-compete, relocation repayment, and 30% ruling wording.";
/** Dedicated hero (generated asset); 1376×768 PNG under public/images/heroes/ */
const HERO_IMAGE = "/images/heroes/netherlands-employment-contract-scanner-hero.png";
const HERO_IMAGE_WIDTH = 1376;
const HERO_IMAGE_HEIGHT = 768;

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CONTRACT_SCANNER_CANONICAL },
  keywords: [
    "Dutch employment contract checker",
    "employment contract Netherlands expat",
    "Dutch contract non-compete probation notice",
    "30% ruling clause contract",
    "relocation repayment clause Netherlands",
    "what to check before signing Dutch contract",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CONTRACT_SCANNER_CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: HERO_IMAGE_WIDTH,
        height: HERO_IMAGE_HEIGHT,
        alt: "Illustration: professional reviewing an employment contract at a desk, expat career planning.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

function resolveRelatedGuides() {
  return CONTRACT_SCANNER_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function EmploymentContractRiskScannerPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CONTRACT_SCANNER_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const pageContext = CONTRACT_SCANNER_CANONICAL;

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Work tools", url: "/netherlands/work/tools/" },
    { name: "Employment contract risk scanner", url: CONTRACT_SCANNER_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Dutch Employment Contract Risk Scanner",
    description:
      "Planning scanner for Dutch contracts and offers: deterministic clause pattern detection, missing-topic heuristics, HR questions, and HTML export. Not legal advice; no OCR in free mode.",
    url: CONTRACT_SCANNER_CANONICAL,
    applicationCategory: "WebApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: CONTRACT_SCANNER_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(CONTRACT_SCANNER_FAQ.map((item) => ({ question: item.question, answer: item.answer })));

  const intro = (
    <div className="space-y-8">
      <div
        id="contract-scanner-at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">At a glance</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          Dutch employment contract risk scanner
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {CONTRACT_SCANNER_AT_A_GLANCE.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
            >
              <p className="text-sm font-semibold text-copilot-text-primary">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
            title="Dutch Employment Contract Risk Scanner"
            subtitle="Paste contract text or upload a text-based PDF to spot common risk areas, restrictive clauses, expat-specific obligations, and practical questions to ask before signing."
            introBullets={[
              "Flags common Dutch / English contract phrases: probation, notice, salary, overtime, non-compete, handbook refs, relocation repayment, permits, 30% wording",
              "Paste text, upload a text-based PDF, or use the manual checklist if you cannot share full text",
              "PDFs are extracted once on the server and not kept; analysis runs in your browser — see FAQ for details",
              "Planning only — not legal advice; confirm everything material with HR and official sources",
            ]}
            primaryCtaLabel="Start scanning"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read Dutch employment guide"
            secondaryCtaHref={`${NL_BASE}/work/employment-contract-netherlands/`}
            image={{
              src: HERO_IMAGE,
              alt: "Professional reviewing an employment contract at a desk — Dutch expat work tool.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Employment contract review and planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={CONTRACT_SCANNER_CANONICAL}
          />
        }
        intro={intro}
        disclosure="Planning and awareness only — not legal advice. This scanner does not determine whether a clause is valid or enforceable, and it only sees the text you provide. Handbook pages, CAO articles, and annexes often contain pay, hours, and discipline rules that are not repeated in the main PDF — request the full pack (with version dates) before signing. For restrictive clauses, repayment, or immigration-linked obligations, use the questions we generate with HR and consider a qualified Dutch employment lawyer alongside the official sources below."
        sidebar={<ContractScannerRightRail pageContext={pageContext} />}
        primarySectionTitle="Contract scanner"
        primarySectionContent={
          <ContractScannerClient calculatorCanonicalUrl={shareUrl} pageContext={pageContext} />
        }
        explanatorySectionsOuterTitle="How this scanner works"
        explanatorySections={[
          {
            id: "deterministic-matching",
            title: "Deterministic clause matching",
            body: [
              "We match common Dutch and English contract phrases with explainable rules — not LLM guesses. Every finding ties to text patterns you can search for in your document.",
            ],
          },
          {
            id: "pdf-limits",
            title: "PDF: text layer only (no OCR here)",
            body: [
              "Upload works when the PDF already contains selectable text (most employer portals). Image-only scans produce empty or nonsense text — you will see a low “extraction quality” warning. In that case, copy text from the original source, ask HR for a text PDF, or type key clauses into the paste box.",
            ],
          },
          {
            id: "privacy-session",
            title: "Privacy — we do not keep your contract file",
            body: [
              "Contract text is not written to our database for this tool. PDF upload is used only to extract text for that request, then discarded. Pattern matching and your results stay in this browser tab until you leave or refresh. On a shared computer, close the tab when finished. Analytics may still record page views (see site policy).",
            ],
          },
          {
            id: "not-advice",
            title: "Why this is not legal advice",
            body: [
              "Risk labels describe practical planning concern from keyword-style rules, not court outcomes. A clause can look “standard” and still need HR confirmation, or look “broad” and still depend on CAO or reasonableness tests you cannot assess here.",
            ],
          },
        ]}
        seoContentSectionTitle="Dutch employment contracts — planning context"
        seoContent={
          <div className="space-y-4 text-sm text-copilot-text-secondary">
            <p>
              Use this page when you are comparing offers, preparing questions for HR, or deciding whether to involve a lawyer. The scanner highlights salary and allowance wording, notice and
              probation, overtime inclusion, non-compete and client restrictions, handbook incorporation, relocation repayment, and expat topics such as permits and the 30% ruling when those phrases
              appear in the text you supply.
            </p>
            <p>
              Pair results with the{" "}
              <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                Dutch salary net calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                30% ruling calculator
              </Link>
              , and{" "}
              <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-semibold text-copilot-primary hover:underline">
                payslip decoder
              </Link>{" "}
              for payroll context after you sign.
            </p>
          </div>
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={[...CONTRACT_SCANNER_FAQ]}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related tools and hubs">
            <span className="w-full text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Related tools</span>
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Salary net calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-copilot-primary hover:underline">
              30% ruling calculator
            </Link>
            <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-medium text-copilot-primary hover:underline">
              Payslip decoder
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/double-tax-awareness-tool/`} className="font-medium text-copilot-primary hover:underline">
              Double tax awareness tool
            </Link>
            <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Rent affordability calculator
            </Link>
            <span className="w-full pt-1 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Hubs</span>
            <Link href={`${NL_BASE}/work/tools/`} className="font-medium text-copilot-primary hover:underline">
              Work tools hub
            </Link>
            <Link href={`${NL_BASE}/work/employment-contract-netherlands/`} className="font-medium text-copilot-primary hover:underline">
              Employment contract guide
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/`} className="font-medium text-copilot-primary hover:underline">
              Tax tools hub
            </Link>
            <Link href={`${NL_BASE}/tools/`} className="font-medium text-copilot-primary hover:underline">
              All tools
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              Use these for general rules and updates. They do not replace a review of your wording, CAO, or handbook.
            </p>
            <ul className="space-y-4">
              {CONTRACT_SCANNER_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href} className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4 ring-1 ring-copilot-primary/[0.05]">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-copilot-primary hover:underline"
                  >
                    {source.label}
                    <span className="ml-1" aria-hidden>
                      ↗
                    </span>
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{source.note}</p>
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

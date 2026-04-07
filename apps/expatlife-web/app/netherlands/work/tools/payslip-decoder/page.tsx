import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import {
  FAQ_ITEMS,
  HERO_BULLETS,
  HOW_IT_WORKS_SECTIONS,
  NETHERLANDS_BASE,
  OFFICIAL_SOURCES,
  PAYSLIP_AT_A_GLANCE_CARDS,
  PAYSLIP_COMMON_LINES_SEO,
  PAYSLIP_DECODER_CANONICAL,
  PAYSLIP_HERO,
  PAYSLIP_OFFICIAL_SECTION_INTRO,
  PAYSLIP_ORIENTATION_BULLETS,
  PAYSLIP_PAGE_SEO,
  PAYSLIP_PRIVACY_NOTE,
  PAYSLIP_RELATED_NEXT_STEPS,
  PAYSLIP_SOFTWARE_APP_DESCRIPTION,
  PAYSLIP_TOOL_DISCLOSURE,
  WHAT_CAN_CANNOT,
} from "@/src/content/tools/payslip-decoder/pageContent";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getPayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import {
  getDutchSalaryNetBankCards,
  getDutchSalaryNetPayrollServiceCards,
  type PageRecommendedProviderCard,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { PayrollPlanningToolTrio } from "@/src/components/tools/PayrollPlanningToolTrio";

const PayslipDecoderClient = dynamic(
  () =>
    import("@/src/components/tools/payslip-decoder/PayslipDecoderClient").then((m) => ({
      default: m.PayslipDecoderClient,
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
        <p className="mt-4 text-sm font-semibold text-copilot-text-primary">Loading payslip decoder…</p>
        <p className="mt-1 text-xs text-copilot-text-secondary">Interactive tool — one moment.</p>
      </div>
    ),
  }
);

export const revalidate = CONTENT_REVALIDATE;

const canonical = PAYSLIP_DECODER_CANONICAL;

export const metadata: Metadata = {
  title: PAYSLIP_PAGE_SEO.title,
  description: PAYSLIP_PAGE_SEO.description,
  alternates: { canonical },
  keywords: [...PAYSLIP_PAGE_SEO.keywords],
  openGraph: {
    title: PAYSLIP_PAGE_SEO.title,
    description: PAYSLIP_PAGE_SEO.description,
    url: canonical,
    images: [
      {
        url: PAYSLIP_PAGE_SEO.openGraphImage.url,
        width: PAYSLIP_PAGE_SEO.openGraphImage.width,
        height: PAYSLIP_PAGE_SEO.openGraphImage.height,
        alt: PAYSLIP_PAGE_SEO.openGraphImage.alt,
      },
    ],
  },
  twitter: {
    card: PAYSLIP_PAGE_SEO.twitterCard,
    title: PAYSLIP_PAGE_SEO.title,
    description: PAYSLIP_PAGE_SEO.description,
    images: [PAYSLIP_PAGE_SEO.openGraphImage.url],
  },
};

const TOC = [
  { id: "payslip-orientation", label: "At a glance" },
  { id: "tool-inputs", label: "Start decoder" },
  { id: "payslip-results", label: "Results" },
  { id: "seo-content", label: "Common terms" },
  { id: "how-the-tool-works", label: "How it works" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
  { id: "related-guides", label: "Related guides" },
];

const QUICK = [
  { label: "Start decoder", href: "#tool-inputs" },
  { label: "Results", href: "#payslip-results" },
  { label: "Net salary calculator", href: `${NETHERLANDS_BASE}/taxes/tools/dutch-salary-net-calculator/` },
  { label: "30% ruling calculator", href: `${NETHERLANDS_BASE}/taxes/tools/30-ruling-calculator/` },
  { label: "Common terms", href: "#seo-content" },
  { label: "FAQ", href: "#faq" },
  { label: "Official sources", href: "#official-sources" },
  { label: "Related guides", href: "#related-guides" },
];

function relatedGuidesFromRouteStatus(
  items: readonly { href: string; title: string; description: string }[]
): Array<{ href: string; title: string; description: string; status?: "coming_soon" }> {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const r of items) {
    const st = getRouteStatus(r.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") {
      out.push({ href: r.href, title: r.title, description: r.description, status: "coming_soon" });
    } else {
      out.push({ href: r.href, title: r.title, description: r.description });
    }
  }
  return out;
}

function RecommendedProviderGrid({ cards, title }: { cards: PageRecommendedProviderCard[]; title: string }) {
  if (!cards.length) return null;
  return (
    <div>
      <p className="text-sm font-semibold text-copilot-text-primary">{title}</p>
      <ul className="mt-3 space-y-3">
        {cards.map((c) => (
          <li key={c.url} className="rounded-xl bg-white/80 p-3 ring-1 ring-copilot-primary/[0.08]">
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-copilot-primary hover:underline"
            >
              {c.name}
            </a>
            <p className="mt-1 text-xs text-copilot-text-secondary">{c.useFor}</p>
            {c.priceRange ? <p className="mt-1 text-[11px] text-copilot-text-secondary">{c.priceRange}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PayslipDecoderPage() {
  // TODO(auth): use async server helper with cookies() → getPayslipEntitlementsFromRequest or plan lookup
  const payslipEntitlements = getPayslipEntitlements();
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const payrollCards = getDutchSalaryNetPayrollServiceCards().slice(0, 3);
  const bankCards = getDutchSalaryNetBankCards().slice(0, 3);
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(PAYSLIP_RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Work tools", url: "/netherlands/work/tools/" },
    { name: "Dutch payslip decoder", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Dutch Payslip Decoder (Netherlands)",
    description: PAYSLIP_SOFTWARE_APP_DESCRIPTION,
    url: canonical,
    applicationCategory: "WebApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));
  const webPageJsonLd = buildToolPageSchema({
    title: PAYSLIP_PAGE_SEO.title,
    description: PAYSLIP_PAGE_SEO.description,
    canonicalPath: canonical,
  });

  const intro = (
    <div className="space-y-8">
      <div
        id="payslip-orientation"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Payslip planning helper</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          Decode a Dutch payslip without storing your document
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          {PAYSLIP_ORIENTATION_BULLETS.map((bullet, bi) => (
            <li key={`payslip-orient-${bi}`}>
              {bullet.segments.map((seg, j) =>
                seg.type === "text" ? (
                  <Fragment key={j}>{seg.text}</Fragment>
                ) : (
                  <Link key={j} href={seg.href} className="font-medium text-copilot-primary hover:underline">
                    {seg.text}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-tight text-copilot-text-primary sm:text-xl">At a glance</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {PAYSLIP_AT_A_GLANCE_CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
            >
              <p className="text-sm font-semibold text-copilot-text-primary">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.description}</p>
            </div>
          ))}
        </div>
        <PayrollPlanningToolTrio highlight="payslip" className="mt-8" />
      </div>

      <div className="rounded-2xl border-0 bg-copilot-bg-soft/90 p-5 ring-1 ring-copilot-primary/[0.08] md:p-6">
        <h2 className="text-lg font-semibold text-copilot-text-primary">What this tool can and cannot do</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-copilot-text-primary">Can</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {WHAT_CAN_CANNOT.can.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-copilot-text-primary">Cannot</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {WHAT_CAN_CANNOT.cannot.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const sidebar = <MoveToolSidebar tocItems={TOC} quickLinks={QUICK} />;

  const commonLinesContent = (
    <div className="prose prose-slate max-w-none text-copilot-text-secondary prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm">
      <p>{PAYSLIP_COMMON_LINES_SEO.intro}</p>
      <ul>
        {PAYSLIP_COMMON_LINES_SEO.items.map((item) => (
          <li key={item.term}>
            <strong>{item.term}</strong> — {item.description}
          </li>
        ))}
      </ul>
      <p className="text-xs text-copilot-text-secondary">{PAYSLIP_COMMON_LINES_SEO.footnote}</p>
    </div>
  );

  const officialExtra = (
    <div id="official-sources" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
      <section>
        <h2 className="text-lg font-semibold text-copilot-text-primary">Official sources</h2>
        <p className="mt-2 text-sm text-copilot-text-secondary">{PAYSLIP_OFFICIAL_SECTION_INTRO}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {OFFICIAL_SOURCES.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium text-copilot-primary hover:underline">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-xl bg-copilot-bg-soft/80 p-4 ring-1 ring-copilot-primary/[0.06]">
        <h3 className="text-sm font-semibold text-copilot-text-primary">{PAYSLIP_PRIVACY_NOTE.title}</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">{PAYSLIP_PRIVACY_NOTE.body}</p>
      </section>
    </div>
  );

  const recommendedBlock = (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        <strong className="text-copilot-text-primary">Editorial shortlist only</strong> — not endorsements, not payroll advice. Compare scope and
        pricing before you engage any provider.
      </p>
      <RecommendedProviderGrid cards={payrollCards} title="Relocation & payroll support (examples)" />
      <RecommendedProviderGrid cards={bankCards} title="Banks & salary accounts (examples)" />
      <p className="text-xs text-copilot-text-secondary">
        More listings:{" "}
        <Link href={`${NETHERLANDS_BASE}/services/`} className="font-medium text-copilot-primary hover:underline">
          services directory
        </Link>
        .
      </p>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow={PAYSLIP_HERO.eyebrow}
            title={PAYSLIP_HERO.title}
            subtitle={PAYSLIP_HERO.subtitle}
            introBullets={HERO_BULLETS}
            primaryCtaLabel={PAYSLIP_HERO.primaryCtaLabel}
            primaryCtaScrollToId={PAYSLIP_HERO.primaryCtaScrollToId}
            secondaryCtaLabel={PAYSLIP_HERO.secondaryCtaLabel}
            secondaryCtaHref={PAYSLIP_HERO.secondaryCtaHref}
            image={PAYSLIP_HERO.image}
            imageFallback={PAYSLIP_HERO.imageFallback}
            shareUrl={shareUrl}
            pageId={canonical}
          />
        }
        intro={intro}
        disclosure={PAYSLIP_TOOL_DISCLOSURE}
        explanatorySectionsOuterTitle="How it works"
        explanatorySections={HOW_IT_WORKS_SECTIONS}
        seoContentSectionTitle="Common terms on Dutch payslips"
        seoContent={commonLinesContent}
        sidebar={sidebar}
        primarySectionTitle="Decoder"
        primarySectionContent={<PayslipDecoderClient entitlements={payslipEntitlements} />}
        recommendedServices={recommendedBlock}
        relatedGuidesSectionTitle="Related guides and next steps"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        extraSection={officialExtra}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${NETHERLANDS_BASE}/work/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Work tools hub
            </Link>
            <Link href={`${NETHERLANDS_BASE}/money/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money tools hub
            </Link>
            <Link href={`${NETHERLANDS_BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools hub
            </Link>
            <Link
              href={`${NETHERLANDS_BASE}/taxes/tools/dutch-salary-net-calculator/`}
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Net salary calculator
            </Link>
            <Link href={`${NETHERLANDS_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              30% ruling calculator
            </Link>
            <Link href={`${NETHERLANDS_BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch taxes hub
            </Link>
            <Link href={`${NETHERLANDS_BASE}/taxes/net-salary-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Net salary guide
            </Link>
            <Link href={`${NETHERLANDS_BASE}/open-bank-account-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Open a bank account
            </Link>
            <Link href={`${NETHERLANDS_BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands
            </Link>
            <Link href={`${NETHERLANDS_BASE}/services/banks/`} className="font-medium text-brand-600 hover:text-brand-700">
              Compare banks
            </Link>
          </nav>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

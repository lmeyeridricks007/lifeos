import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { PillarTOC } from "@/components/content/PillarTOC";
import { VisaTimelineEstimatorClient } from "@/src/components/tools/visa-timeline-estimator/VisaTimelineEstimatorClient";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { EXAMPLE_SCENARIOS } from "@/src/data/tools/visa-timeline-estimator/example-scenarios";
import {
  VISA_TIMELINE_ESTIMATOR_RELATED_GUIDES,
  VISA_TIMELINE_ESTIMATOR_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";

export const revalidate = 3600;

const canonical = "/netherlands/visa-timeline-estimator/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "Netherlands Visa Timeline Estimator | Estimate Processing and Move Timing",
  description:
    "Estimate how long a Dutch visa or residence route may take, including document prep, official decision periods, travel timing, and first-step relocation planning.",
  alternates: { canonical },
  openGraph: {
    title: "Netherlands Visa Timeline Estimator | Estimate Processing and Move Timing",
    description:
      "Estimate how long a Dutch visa or residence route may take, including document prep, official decision periods, travel timing, and first-step relocation planning.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Visa Timeline Estimator | Estimate Processing and Move Timing",
    description:
      "Estimate how long a Dutch visa or residence route may take, including document prep, official decision periods, travel timing, and first-step relocation planning.",
  },
};

const FAQ_ITEMS = [
  {
    id: "how-long-application",
    question: "How long does a Netherlands visa application take?",
    answer:
      "It depends on your route. The IND has statutory decision periods—often 60 or 90 days—for most residence permit applications. That is only the official processing time. Your total timeline also includes document preparation, sponsor or institution steps, and post-approval move planning. Use this tool to get an estimated range for your situation.",
  },
  {
    id: "decision-period-vs-total",
    question: "Is the official decision period the same as my total move timeline?",
    answer:
      "No. The IND decision period is the legal processing time for the application. Your total move timeline can be longer because of document gathering, translations or apostille, sponsor or school timing, appointment availability, travel booking, and first-week admin. This tool separates official decision period from prep and post-approval phases.",
  },
  {
    id: "fastest-route",
    question: "Which visa route is usually fastest?",
    answer:
      "Work routes with a recognized sponsor (e.g. Highly Skilled Migrant) can be relatively fast once the employer submits a complete file. Student applications are often coordinated by the institution with a 60-day decision period. Self-employed and partner routes typically have 90-day decision periods and may involve more document complexity. Your own document readiness and sponsor timing have a big impact.",
  },
  {
    id: "why-self-employed-family-longer",
    question: "Why can self-employed and family routes take longer?",
    answer:
      "The self-employed route may involve extra IND review and viability checks; the decision period can be extended in some cases. Partner and family routes often require more civil documents (birth, marriage, relationship proof) and sponsor evidence, which can add lead time before submission. Both routes have a 90-day statutory decision period.",
  },
  {
    id: "when-start-documents",
    question: "How early should I start preparing documents?",
    answer:
      "As early as possible. Document preparation—especially civil documents, translations, and apostille or legalization—often takes weeks or months. Use the Document Readiness Checker to see what you need for your route and plan accordingly.",
  },
  {
    id: "when-start-housing",
    question: "When should I start looking for housing?",
    answer:
      "Temporary housing is often needed for arrival and registration; many people start searching once they have a likely approval timeline or submission date. Long-term housing can be planned after approval or in parallel. Do not commit to long-term leases before you have clarity on your visa outcome.",
  },
  {
    id: "not-sure-visa",
    question: "Can I use this tool if I have not chosen a visa yet?",
    answer:
      "Yes. Choose “Not sure yet” and you will get broad timing ranges. For a more accurate estimate, use the Visa Checker first to find your likely route, then return here.",
  },
  {
    id: "estimates-guaranteed",
    question: "Are the estimates guaranteed?",
    answer:
      "No. This tool gives planning ranges only. Official decision periods and real timelines depend on IND workload, completeness of your file, and your specific situation. Always confirm current processing times with the IND or your sponsor.",
  },
  {
    id: "after-estimating",
    question: "What should I do after estimating my timeline?",
    answer:
      "Use the Document Readiness Checker to see what you still need, the Visa Application Plan to build a step-by-step roadmap, and the Visa Cost Calculator and Relocation Cost Estimator to budget. Link your timeline to the Moving Checklist and First 90 Days Planner for practical sequencing.",
  },
  {
    id: "other-tools",
    question: "Which other planning tools should I use?",
    answer:
      "Use the Visa Checker to confirm your route, the Document Readiness Checker to see document gaps, the Visa Application Plan for a step-by-step roadmap, the Visa Cost Calculator and Relocation Cost Estimator for budgeting, and the Moving Checklist and First 90 Days Planner for arrival and settlement sequencing.",
  },
];

const VALUE_CARDS = [
  {
    id: "what-tool-does",
    title: "What this tool does",
    description: "Estimates how long your visa route and pre-move preparation may take.",
  },
  {
    id: "what-it-includes",
    title: "What it includes",
    description: "Document prep, application stage, official decision periods, travel planning, and first-step arrival timing.",
  },
  {
    id: "what-you-get",
    title: "What you get",
    description: "A personalized timing estimate, phase-by-phase timeline, risk flags, and suggested next steps.",
  },
];

const RELATED_TOOLS_FOR_PAGE = [
  { href: `${BASE}/visa-checker/`, title: "Visa Checker", description: "Find the right route." },
  { href: `${BASE}/document-readiness-checker/`, title: "Document Readiness Checker", description: "Check document readiness." },
  { href: `${BASE}/visa-application-plan/`, title: "Visa Application Plan", description: "Build a step-by-step roadmap." },
  { href: `${BASE}/visa-cost-calculator/`, title: "Visa Cost Calculator", description: "Budget your route." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, title: "Relocation Cost Estimator", description: "Estimate full move costs." },
  { href: `${BASE}/moving/tools/moving-checklist/`, title: "Moving Checklist", description: "Turn timing into action." },
  { href: `${BASE}/moving/tools/first-90-days/`, title: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
];

const RECOMMENDED_SERVICES: Array<{
  name: string;
  useFor: string;
  url: string;
  logo?: { src: string; alt: string };
}> = [
  { name: "Wise", useFor: "Moving money / transfer timing.", url: "https://wise.com", logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" } },
  { name: "bunq", useFor: "Banking after arrival.", url: "https://www.bunq.com", logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" } },
  { name: "HousingAnywhere", useFor: "Temporary housing timing.", url: "https://www.housinganywhere.com", logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" } },
  { name: "Simyo", useFor: "Phone setup after arrival.", url: "https://www.simyo.nl", logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" } },
  { name: "Independer", useFor: "Insurance comparison.", url: "https://www.independer.nl", logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" } },
  { name: "Everaert Immigration Lawyers", useFor: "Complex timing / route situations.", url: "https://www.everaert.nl/" },
  { name: "ACCESS NL", useFor: "Expat support and information.", url: "https://www.access-nl.org/" },
];

const OFFICIAL_SOURCES = [
  { label: "IND – Decision periods", href: "https://ind.nl/en/after-your-application/decision-periods" },
  { label: "IND – Highly Skilled Migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
  { label: "IND – EU Blue Card", href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit" },
  { label: "IND – Self-Employed", href: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person" },
  { label: "IND – Student (university / HBO)", href: "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education" },
  { label: "IND – Partner", href: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  { label: "Business.gov.nl – Self-employed", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
];

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

type SearchParamsRecord = Record<string, string | string[] | undefined>;

export default async function VisaTimelineEstimatorPage(props: PageProps) {
  const raw = props.searchParams;
  const searchParams: SearchParamsRecord =
    raw !== undefined && raw !== null ? await Promise.resolve(raw) : {};
  const scenarioId = typeof searchParams.scenario === "string" ? searchParams.scenario : undefined;
  const scenario = scenarioId ? EXAMPLE_SCENARIOS.find((s) => s.id === scenarioId) : undefined;
  const initialPrefill = scenario?.prefilledAnswers;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Visa Timeline Estimator", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Visa Timeline Estimator",
    description:
      "Estimate how long your Dutch visa or residence route may take, including document prep, official decision periods, and move timing.",
    url: canonical,
    applicationCategory: "WebApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <>
      <p className="mb-3">
        People often underestimate how many phases sit around a visa application. The official IND decision period is only one part of the total move timeline.
      </p>
      <p className="mb-3">
        Real timing also depends on document readiness, sponsor or institution timing, appointment availability, housing, travel, and first-week setup. This tool gives a planning estimate, not a legal guarantee.
      </p>
      <p className="mb-3">
        Major routes include{" "}
        <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="font-medium text-brand-600 hover:text-brand-700">Highly Skilled Migrant</Link>
        ,{" "}
        <Link href={`${BASE}/visa/eu-blue-card/`} className="font-medium text-brand-600 hover:text-brand-700">EU Blue Card</Link>
        ,{" "}
        <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:text-brand-700">DAFT</Link>
        ,{" "}
        <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:text-brand-700">Self-Employed</Link>
        ,{" "}
        <Link href={`${BASE}/visa/student-visa/`} className="font-medium text-brand-600 hover:text-brand-700">Student</Link>
        , and{" "}
        <Link href={`${BASE}/visa/partner-family-visa/`} className="font-medium text-brand-600 hover:text-brand-700">Partner & Family</Link>
        . Choose your route and current stage to see an estimated timeline.
      </p>
    </>
  );

  const valueCardsSection = (
    <div className="grid gap-4 sm:grid-cols-3 mb-6">
      {VALUE_CARDS.map((card, i) => {
        const variants = [
          "rounded-2xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-5 shadow-sm border-l-4 border-l-brand-500",
          "rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-5 shadow-sm border-l-4 border-l-sky-500",
          "rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/70 to-white p-5 shadow-sm border-l-4 border-l-cyan-500",
        ];
        return (
          <div key={card.id} className={variants[i % 3]}>
            <h3 className="font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
          </div>
        );
      })}
    </div>
  );

  const exampleScenariosBlock = (
    <div id="example-scenarios" className="scroll-mt-24 mb-6">
      <CollapsiblePanel
        title="Example visa timeline situations"
        defaultOpen={false}
        titleClassName="text-base font-semibold text-slate-800"
        triggerClassName="cursor-pointer rounded-t-xl bg-sky-50/80 text-sky-800 hover:bg-sky-100/90 hover:text-sky-900"
        className="border-sky-200/80 bg-sky-50/40 rounded-2xl border border-sky-200/80"
      >
        <div className="rounded-b-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <p className="mb-4 text-sm text-slate-600">
            Click &quot;Use this scenario&quot; to prefill the tool. You can then adjust answers and see your estimate.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {EXAMPLE_SCENARIOS.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30"
              >
                <h4 className="font-medium text-slate-900">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{s.summary}</p>
                <p className="mt-1 text-xs text-slate-500">{s.timingEmphasis}</p>
                <Link
                  href={`${canonical}?scenario=${encodeURIComponent(s.id)}#tool-inputs`}
                  className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Use this scenario →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </CollapsiblePanel>
    </div>
  );

  const primarySectionContent = (
    <div className="space-y-6">
      {valueCardsSection}
      {exampleScenariosBlock}
      <VisaTimelineEstimatorClient key={scenarioId ?? "default"} initialPrefill={initialPrefill} />
    </div>
  );

  const recommendedServicesSection = (
    <section className="rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Recommended services</h3>
      <p className="mt-1 text-sm text-slate-600">
        These services may help with different parts of your move timeline. Timelines and provider response times can vary.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECOMMENDED_SERVICES.map((service) => {
          const initials = service.name
            .split(/[\s-]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0])
            .join("")
            .toUpperCase() || service.name.slice(0, 2).toUpperCase();
          return (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-16 shrink-0 items-center justify-center rounded-lg bg-slate-50/80 px-3">
                {service.logo ? (
                  <Image
                    src={service.logo.src}
                    alt={service.logo.alt}
                    width={120}
                    height={48}
                    className="max-h-12 w-full object-contain object-center"
                  />
                ) : (
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600"
                    aria-hidden
                  >
                    {initials}
                  </span>
                )}
              </div>
              <p className="mt-3 font-semibold text-slate-900">{service.name}</p>
              <p className="mt-1 text-sm text-slate-600">{service.useFor}</p>
              <span className="mt-2 inline-block text-xs font-medium text-brand-600">Visit site →</span>
            </a>
          );
        })}
      </div>
    </section>
  );

  const officialSourcesSection = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Official sources and further reading</h3>
      <p className="mt-1 text-sm text-slate-600">
        For current decision periods, rules, and procedures, refer to the IND and Dutch government.
      </p>
      <ul className="mt-4 space-y-2">
        {OFFICIAL_SOURCES.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <h3 className="text-lg font-semibold text-slate-900">How long does it take to move to the Netherlands on a visa route?</h3>
      <p>
        Official IND decision periods are not the whole story. Work, study, partner, and entrepreneur routes each have different typical timelines and bottlenecks. Document preparation is often the real delay: ordering civil documents, getting apostille or legalization, and certified translations can add weeks or months before you can even submit.
      </p>
      <p>
        Sponsor or institution timing matters. For Highly Skilled Migrant and EU Blue Card routes, the employer submits the application; their internal process affects when the IND clock starts. For students, the institution usually coordinates the application. For partner and family routes, the sponsor must meet income and housing requirements and provide evidence—all of which can add lead time.
      </p>
      <p>
        Families and long-haul movers should start earlier. More people mean more documents and more dependency on housing and school placement. Moving from farther away adds logistics for travel, shipping, and arrival admin. Housing should often be planned before approval is final—at least for temporary accommodation—because registration at the municipality typically requires an address.
      </p>
      <p>
        Use this tool together with the Visa Checker to confirm your route, the Document Readiness Checker to see what you still need, and the Visa Application Plan to build a step-by-step roadmap. The estimates here are planning ranges; official decision periods and real timelines can vary. Always confirm current processing times with the IND or your sponsor.
      </p>
    </div>
  );

  const sidebarOnThisPage = [
    { id: "how-the-tool-works", label: "How the tool works" },
    { id: "tool-inputs", label: "Estimate your timeline" },
    { id: "example-scenarios", label: "Example scenarios" },
    { id: "recommended-services", label: "Services" },
    { id: "faq", label: "FAQ" },
    { id: "official-sources", label: "Official sources" },
  ];

  const sidebar = (
    <>
      <PillarTOC items={sidebarOnThisPage} />
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tools</p>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#tool-inputs" className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Estimate my timeline</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/visa-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Find my visa</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/document-readiness-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Check my documents</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/visa-application-plan/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Build my visa plan</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  const relatedGuides = VISA_TIMELINE_ESTIMATOR_RELATED_GUIDES.map((g) => ({
    href: g.href,
    title: g.title,
    description: g.description,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ToolPageTemplate
        hero={
          <ToolHero
            eyebrow="TOOL"
            title="Netherlands Visa Timeline Estimator"
            subtitle="Estimate how long your Dutch visa or residence route may take, including document prep, official decision periods, application stages, and practical move timing."
            primaryCtaLabel="Estimate my visa timeline"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Find my visa first"
            secondaryCtaHref={`${BASE}/visa-checker/`}
            image={{
              src: "/images/heroes/netherlands-visa-timeline-estimator.png",
              alt: "Expat at a wooden desk by a Dutch canal-side window, planning a move: laptop showing a visa application timeline with Documents, Application, and Decision stages; passport, notebook with notes, and books titled Visa Documents, Application Timeline, and Relocation Tasks.",
            }}
          />
        }
        intro={intro}
        disclosure="Planning ranges only — official decision periods and real timelines can vary."
        explanatorySections={[
          { id: "what-tool-does", title: "What this tool does", body: ["Estimates how long your visa route and pre-move preparation may take."] },
          { id: "what-it-includes", title: "What it includes", body: ["Document prep, application stage, official decision periods, travel planning, and first-step arrival timing."] },
          { id: "what-you-get", title: "What you get", body: ["A personalized timing estimate, phase-by-phase timeline, risk flags, and suggested next steps."] },
        ]}
        sidebar={sidebar}
        primarySectionTitle="Estimate your visa timeline"
        primarySectionContent={primarySectionContent}
        faqItems={FAQ_ITEMS}
        relatedGuides={relatedGuides}
        recommendedLawyersSection={<RecommendedImmigrationLawyersSection />}
        recommendedServices={recommendedServicesSection}
        seoContent={seoContent}
        seoContentSectionTitle="How long does it take to move to the Netherlands on a visa route?"
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related">
            {VISA_TIMELINE_ESTIMATOR_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {VISA_TIMELINE_ESTIMATOR_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <>
            <Section title="Related tools" contained={true} className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {RELATED_TOOLS_FOR_PAGE.map((t) => (
                  <CardLink
                    key={t.href}
                    href={t.href}
                    title={t.title}
                    description={t.description}
                    className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50"
                  />
                ))}
              </div>
            </Section>
            <Section id="official-sources" title="Official sources" contained={true} className="pt-6">
              {officialSourcesSection}
            </Section>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

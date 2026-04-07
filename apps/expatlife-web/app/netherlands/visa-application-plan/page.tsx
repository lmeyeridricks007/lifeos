import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import { SectionBlock } from "@/components/page/pillar-template";
import { CardLink } from "@/components/ui/card-link";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { VisaApplicationPlanClient } from "@/src/components/tools/visa-application-plan/VisaApplicationPlanClient";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { EXAMPLE_SCENARIOS } from "@/src/data/tools/visa-plan/example-scenarios";
import {
  VISA_APPLICATION_PLAN_RELATED_GUIDES,
  VISA_APPLICATION_PLAN_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getVisaRelocationMarketingRecommendedCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/visa-application-plan/";
const BASE = "/netherlands";

const VISA_APPLICATION_PLAN_SIDEBAR_TOC = [
  { id: "tool-inputs", label: "Build your plan" },
  { id: "example-scenarios", label: "Example scenarios" },
  { id: "how-the-tool-works", label: "How to use it" },
  { id: "recommended-immigration-lawyers", label: "Immigration lawyers" },
  { id: "recommended-services", label: "Services" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const VISA_APPLICATION_PLAN_QUICK_LINKS = [
  { label: "Build my visa plan", href: "#tool-inputs" },
  { label: "Find my visa", href: `${BASE}/visa-checker/` },
  { label: "Check my documents", href: `${BASE}/document-readiness-checker/` },
  { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
];

export const metadata: Metadata = {
  title: "Netherlands Visa Application Plan: Get Your Personalized Step-by-Step Roadmap",
  description:
    "Create a personalized step-by-step visa application plan for moving to the Netherlands, including timeline, document milestones, costs, next steps, and links to official sources.",
  alternates: { canonical },
  openGraph: {
    title: "Netherlands Visa Application Plan: Get Your Personalized Step-by-Step Roadmap",
    description:
      "Create a personalized step-by-step visa application plan for moving to the Netherlands, including timeline, document milestones, costs, next steps, and links to official sources.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Visa Application Plan: Get Your Personalized Step-by-Step Roadmap",
    description:
      "Create a personalized step-by-step visa application plan for moving to the Netherlands, including timeline, document milestones, costs, next steps, and links to official sources.",
  },
};

const FAQ_ITEMS = [
  {
    id: "how-apply-visa",
    question: "How do I apply for a visa to move to the Netherlands?",
    answer:
      "The exact process depends on your visa route (e.g. Highly Skilled Migrant, student, partner, DAFT). In general: confirm your route and eligibility, gather the required documents, have your sponsor or institution submit the application where applicable, pay the fee, and wait for the IND to process. Use this tool to get a step-by-step plan tailored to your situation, then confirm every step with the IND or official sources.",
  },
  {
    id: "what-do-first",
    question: "What should I do first before applying?",
    answer:
      "Confirm which visa or residence route fits your situation (use the Visa Checker if unsure), then check what documents that route requires and how ready you are (Document Readiness Checker). Start gathering identity and route-specific documents early; many people need apostille, legalization, or certified translations, which can add weeks.",
  },
  {
    id: "how-early-start",
    question: "How early should I start my visa application plan?",
    answer:
      "As early as possible. Document preparation (especially civil documents, translations, apostille) often takes weeks or months. Work and study routes depend on employer or institution timelines. A common sequence is: choose route → gather documents → submit → plan move and housing. Starting 3–6 months before your desired move date is often realistic; for complex or family moves, earlier is better.",
  },
  {
    id: "same-process-every-route",
    question: "Does each visa route follow the same process?",
    answer:
      "No. Work routes (e.g. HSM, EU Blue Card) are usually employer-sponsored; the employer submits the application. Student routes are often coordinated by the institution. Partner and family routes require sponsor documents and relationship proof. DAFT and self-employed routes involve business and viability evidence. This tool adapts the plan to your chosen route.",
  },
  {
    id: "when-arrange-housing",
    question: "When should I arrange housing?",
    answer:
      "Temporary housing is often needed for arrival and registration; plan it before or as you get approval. Long-term housing can be searched once you know your timeline; many people secure something after approval or shortly before arrival. Registration at the municipality usually requires an address, so housing and admin are linked.",
  },
  {
    id: "when-book-flights",
    question: "When should I book flights?",
    answer:
      "Only after key milestones where appropriate—for example, after you have approval or a clear timeline from the IND or your sponsor. Processing times vary; booking too early can create risk if dates shift.",
  },
  {
    id: "not-sure-visa",
    question: "Can I use this plan if I am still not sure about my visa?",
    answer:
      "Yes. You can choose “Not sure yet” and get a general plan. For a better result, use the Visa Checker first to find your likely route, then return here to build a step-by-step application plan for that route.",
  },
  {
    id: "legally-binding",
    question: "Are the results legally binding?",
    answer:
      "No. This tool gives planning guidance only, not legal advice. It does not replace official IND or government requirements. Always confirm exact steps, documents, and timelines with official sources or a qualified adviser.",
  },
  {
    id: "after-approval",
    question: "What should I do after my visa is approved?",
    answer:
      "Plan travel, temporary housing, and municipality registration. After arrival, complete registration (BSN), set up banking and health insurance, and work through the First 90 Days Planner and Arrival Planner for a smooth first period.",
  },
  {
    id: "which-tools-next",
    question: "Which tools should I use next?",
    answer:
      "After building your visa plan: use the Document Readiness Checker to see what you still need, the Relocation Cost Estimator to budget, the Moving Checklist to turn the plan into tasks, and the First 90 Days Planner and Arrival Planner for post-arrival steps.",
  },
];

const RELATED_TOOLS_FOR_PAGE = [
  { href: `${BASE}/visa-checker/`, title: "Visa Checker", description: "Find your best visa route." },
  { href: `${BASE}/document-readiness-checker/`, title: "Document Readiness Checker", description: "See whether your documents are ready." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, title: "Relocation Cost Estimator", description: "Estimate first-year costs." },
  { href: `${BASE}/moving/tools/moving-checklist/`, title: "Moving Checklist", description: "Turn this plan into a checklist." },
  { href: `${BASE}/moving/tools/first-90-days/`, title: "First 90 Days Planner", description: "Organize your first weeks." },
  { href: `${BASE}/moving/tools/arrival-planner/`, title: "Arrival Planner", description: "Plan your arrival." },
];

const OFFICIAL_SOURCES = [
  { label: "IND – Residence permits overview", href: "https://ind.nl/en/residence-permits" },
  { label: "IND – Work permits", href: "https://ind.nl/en/residence-permits/work" },
  { label: "IND – Study permits", href: "https://ind.nl/en/residence-permits/study" },
  { label: "IND – Family and partner permits", href: "https://ind.nl/en/residence-permits/family-and-partner" },
  { label: "Business.gov.nl – Self-employed", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
];

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

type SearchParamsRecord = Record<string, string | string[] | undefined>;

export default async function VisaApplicationPlanPage(props: PageProps) {
  const raw = props.searchParams;
  const searchParams: SearchParamsRecord =
    raw !== undefined && raw !== null ? await Promise.resolve(raw) : {};
  const scenarioId = typeof searchParams.scenario === "string" ? searchParams.scenario : undefined;
  const scenario = scenarioId ? EXAMPLE_SCENARIOS.find((s) => s.id === scenarioId) : undefined;
  const initialPrefill = scenario?.prefilledAnswers;
  const recommendedServiceCards = getVisaRelocationMarketingRecommendedCards();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Visa Application Plan", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Personalized Netherlands Visa Application Plan",
    description:
      "Create a personalized step-by-step visa application plan for moving to the Netherlands, including timeline, document milestones, costs, next steps, and links to official sources.",
    url: canonical,
    applicationCategory: "PlanningApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <>
      <p className="mb-3">
        You need a sensible order of tasks—route, documents, application, travel, housing, and arrival admin—not only the permit type.
      </p>
      <p className="mb-3">
        Generate a step-by-step plan from your route, timing, and readiness. Confirm every step with official sources or an adviser.
      </p>
    </>
  );

  const exampleScenariosBlock = (
    <div id="example-scenarios" className="scroll-mt-24 mb-6">
      <CollapsiblePanel
        title="Example visa application plans"
        defaultOpen={false}
        titleClassName="text-base font-semibold text-slate-800"
        triggerClassName="cursor-pointer rounded-t-xl bg-sky-50/80 text-sky-800 hover:bg-sky-100/90 hover:text-sky-900"
        className="border-sky-200/80 bg-sky-50/40 rounded-2xl border border-sky-200/80"
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <p className="mb-4 text-sm text-slate-600">
            Click &quot;Use this scenario&quot; to prefill the tool with that scenario, then generate your plan.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {EXAMPLE_SCENARIOS.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30"
              >
                <h4 className="font-medium text-slate-900">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{s.summary}</p>
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
      <div>
        <VisaApplicationPlanClient key={scenarioId ?? "default"} initialPrefill={initialPrefill} />
      </div>
      {exampleScenariosBlock}
    </div>
  );

  const recommendedLawyersSection = <RecommendedImmigrationLawyersSection />;

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <p>
        Start documents early—civil records, translations, and apostille often take longer than the IND clock. Employer-, school-, and sponsor-driven routes follow their submission timeline; align your travel and housing plans with them.
      </p>
      <p>
        Families usually need more layers (extra documents, schools, housing). Use the Visa Checker and Document Readiness Checker alongside this plan; budget with the cost tools before you book flights.
      </p>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <ToolPageTemplate
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Personalized Netherlands Visa Application Plan"
            subtitle="Answer a few questions to generate a practical step-by-step visa application plan for your route, including timeline, documents, costs, and next actions before you move to the Netherlands."
            primaryCtaLabel="Build my visa plan"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Find my visa first"
            secondaryCtaHref={`${BASE}/visa-checker/`}
            image={{
              src: "/images/heroes/netherlands-visa-application-plan.png",
              alt: "A man with glasses meticulously plans his Netherlands visa application at a clean wooden desk by a window overlooking a picturesque Dutch canal. He is writing in a notebook while a laptop screen displays a multi-step visa planning interface. On the desk are a passport, documents, a smartphone with a checklist, and a stack of books titled VISA DOCUMENTS, APPLICATION TIMELINE, and RELOCATION TASKS, symbolizing comprehensive expatriate planning.",
            }}
          />
        }
        intro={intro}
        disclosure="Planning guidance only — always confirm exact requirements with official sources."
        explanatorySections={[
          {
            id: "what-tool-does",
            title: "What this tool does",
            body: ["Builds a personalized step-by-step visa and relocation action plan."],
          },
          {
            id: "what-it-uses",
            title: "What it uses",
            body: ["Visa route, timing, country, household, document readiness, and move planning inputs."],
          },
          {
            id: "what-you-get",
            title: "What you get",
            body: ["A timeline, task list, cost checkpoints, bottleneck warnings, and links to the right guides and tools."],
          },
        ]}
        sidebar={
          <MoveToolSidebar tocItems={VISA_APPLICATION_PLAN_SIDEBAR_TOC} quickLinks={VISA_APPLICATION_PLAN_QUICK_LINKS} />
        }
        relatedGuides={VISA_APPLICATION_PLAN_RELATED_GUIDES}
        recommendedLawyersSection={recommendedLawyersSection}
        recommendedServices={
          <div id="recommended-services" className="scroll-mt-24 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-sky-50/50 p-6 shadow-md md:p-8">
            <p className="mb-5 text-sm text-slate-600">
              These services may help with different parts of your visa and relocation plan. Suitability and pricing vary by provider and route.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedServiceCards.map((service) => {
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
                    className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2 group-hover:bg-brand-50">
                        {service.logo ? (
                          <Image
                            src={service.logo.src}
                            alt={service.logo.alt}
                            width={80}
                            height={48}
                            className="h-10 w-auto max-w-[72px] object-contain"
                          />
                        ) : (
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-semibold text-slate-600"
                            aria-hidden
                          >
                            {initials}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                        <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                      </div>
                    </div>
                    <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700">
                      {service.priceRange ?? "Check provider for current pricing."}
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-brand-600 group-hover:text-brand-700">Visit site →</span>
                  </a>
                );
              })}
            </div>
          </div>
        }
        seoContentSectionTitle="How to plan a Netherlands visa application step by step"
        seoContent={seoContent}
        primarySectionTitle="Build your visa application plan"
        primarySectionContent={primarySectionContent}
        faqItems={FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {VISA_APPLICATION_PLAN_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {VISA_APPLICATION_PLAN_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <>
            <SectionBlock id="related-tools" title="Related tools" compact className="pt-3 md:pt-4">
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
            </SectionBlock>

            <SectionBlock id="official-sources" title="Official sources" className="scroll-mt-24">
              <p className="mb-4 text-sm text-slate-600">
                Confirm exact requirements and procedures with these official resources.
              </p>
              <ul className="space-y-2">
                {OFFICIAL_SOURCES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-600 hover:underline"
                    >
                      {s.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { Section } from "@/components/ui/section";
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

const VALUE_CARDS = [
  {
    id: "what-tool-does",
    title: "What this tool does",
    description: "Builds a personalized step-by-step visa and relocation action plan.",
  },
  {
    id: "what-it-uses",
    title: "What it uses",
    description: "Visa route, timing, country, household, document readiness, and move planning inputs.",
  },
  {
    id: "what-you-get",
    title: "What you get",
    description: "A timeline, task list, cost checkpoints, bottleneck warnings, and links to the right guides and tools.",
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
        A visa route is only part of the move; most people also need a clear sequence of actions. The order of tasks matters: visa route confirmation, document prep, application, travel planning, housing, registration, banking, and insurance.
      </p>
      <p className="mb-3">
        This tool creates a personalized plan based on your route, country, timing, household, and current readiness. It does not replace official legal instructions but helps you organize your move realistically. Major route types include <strong>Highly Skilled Migrant</strong>, <strong>EU Blue Card</strong>, <strong>DAFT</strong>, <strong>Self-Employed</strong>, <strong>Student</strong>, and <strong>Partner / Family</strong>.
      </p>
    </>
  );

  const valueCardVariants = [
    "rounded-2xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-5 shadow-sm border-l-4 border-l-brand-500",
    "rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-5 shadow-sm border-l-4 border-l-sky-500",
    "rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/70 to-white p-5 shadow-sm border-l-4 border-l-cyan-500",
  ];
  const valueCardsSection = (
    <div className="grid gap-4 sm:grid-cols-3">
      {VALUE_CARDS.map((card, i) => (
        <div key={card.id} className={valueCardVariants[i % valueCardVariants.length]}>
          <h3 className="font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{card.description}</p>
        </div>
      ))}
    </div>
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
      {exampleScenariosBlock}
      <div className="mb-6">{valueCardsSection}</div>
      <div>
        <VisaApplicationPlanClient key={scenarioId ?? "default"} initialPrefill={initialPrefill} />
      </div>
    </div>
  );

  const recommendedLawyersSection = <RecommendedImmigrationLawyersSection />;

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <h2 className="text-xl font-semibold text-slate-900">How to plan a Netherlands visa application step by step</h2>
      <p>
        <strong>Why timing matters.</strong> Document preparation, especially certified copies, translations, apostille, or legalization, often takes weeks or months. Employer and institution timelines affect when you can submit. Planning early reduces last-minute stress and avoids booking travel before key milestones.
      </p>
      <p>
        <strong>Why route-specific sequencing matters.</strong> Work routes (e.g. Highly Skilled Migrant, EU Blue Card) are usually employer-sponsored; the employer submits the application. Student routes are coordinated by the institution. Partner and family routes require relationship and sponsor evidence. DAFT and self-employed routes involve business and viability documentation. Each route has a common sequence; this tool adapts the plan to your chosen route.
      </p>
      <p>
        <strong>Why documents should be started early.</strong> Identity and civil documents (passport, birth certificate, marriage certificate) are needed for many routes. Getting certified copies, translations, or apostille can take longer in some countries. Starting early ensures you are not delayed at the application or registration stage.
      </p>
      <p>
        <strong>Why housing and arrival setup often overlap with visa planning.</strong> Registration at the municipality usually requires an address. Temporary housing is often needed for the first weeks. Banking and health insurance are typically set up after you have a BSN and address. Connecting your visa plan with housing, registration, and first-90-days planning makes the move smoother.
      </p>
      <p>
        <strong>Why employer, school, or sponsor routes require different workflows.</strong> If your permit depends on an employer, university, or sponsor, their submission timeline drives yours. Align your document gathering and travel plans with their process. Use this tool to see a likely sequence, then confirm dates with them and the IND.
      </p>
      <p>
        <strong>Why families need a more layered plan.</strong> Partner and family moves often involve more documents (relationship proof, sponsor income, civil documents for children), school planning, and housing for more people. Start earlier and use the Document Readiness Checker and Moving Checklist alongside this plan.
      </p>
      <p>
        <strong>Connecting this tool with the Visa Checker, Document Readiness Checker, and Cost Estimator.</strong> Use the Visa Checker to find your likely route, then build your step-by-step plan here. Use the Document Readiness Checker to see what you still need to gather. Use the Relocation Cost Estimator to budget for fees, housing, and first-year costs. Together, these tools help you turn your visa route into a practical, realistic move plan.
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
        hero={
          <ToolHero
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
            imageFallback={{
              src: "/images/heroes/netherlands-visa-application-plan.png",
              alt: "A man plans his Netherlands visa application at a desk by a window overlooking a Dutch canal, with a laptop, passport, notebook, and books titled VISA DOCUMENTS, APPLICATION TIMELINE, and RELOCATION TASKS.",
            }}
          />
        }
        intro={intro}
        disclosure="Planning guidance only — always confirm exact requirements with official sources."
        sidebar={
          <nav className="space-y-4" aria-label="On this page">
            <div className="text-sm font-semibold text-slate-800">On this page</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#tool-inputs" className="hover:text-brand-600">Build your plan</a></li>
              <li><a href="#example-scenarios" className="hover:text-brand-600">Example scenarios</a></li>
              <li><a href="#recommended-immigration-lawyers" className="hover:text-brand-600">Immigration lawyers</a></li>
              <li><a href="#recommended-services" className="hover:text-brand-600">Services</a></li>
              <li><a href="#faq" className="hover:text-brand-600">FAQ</a></li>
              <li><a href="#official-sources" className="hover:text-brand-600">Official sources</a></li>
            </ul>
            <div className="pt-4 space-y-2">
              <Link href="#tool-inputs" className="block text-sm font-medium text-brand-600 hover:underline">Build my visa plan</Link>
              <Link href={`${BASE}/visa-checker/`} className="block text-sm font-medium text-brand-600 hover:underline">Find my visa</Link>
              <Link href={`${BASE}/document-readiness-checker/`} className="block text-sm font-medium text-brand-600 hover:underline">Check my documents</Link>
              <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="block text-sm font-medium text-brand-600 hover:underline">Estimate relocation cost</Link>
            </div>
          </nav>
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
            <Section title="Related tools" contained={true}>
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

            <Section id="official-sources" title="Official sources" className="scroll-mt-24" contained={true}>
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
            </Section>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { ExamplesSection } from "@/src/components/tools/ExamplesSection";
import { First90DaysClient } from "@/src/components/tools/First90DaysClient";
import {
  loadFirst90DaysDatasetsV2,
  loadFirst90DaysExamples,
  loadFirst90DaysFaq,
  loadFirst90DaysMeta,
} from "@/src/lib/tools/loadFirst90DaysContent";
import {
  hasFirst90DaysParams,
  getFirst90DaysFullValuesFromSearchParams,
} from "@/src/lib/tools/first90DaysInitialFromSearchParams";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { FIRST_90_DAYS_RELATED_GUIDES, FIRST_90_DAYS_RELATED_TOOLS } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

const canonical = "/netherlands/moving/tools/first-90-days/";

export const metadata: Metadata = buildSocialMetadata({
  title: "First 90 days in the Netherlands planner (free tool)",
  description:
    "Create a personalized week-by-week plan for your first 90 days in the Netherlands, including admin, daily life setup, and integration awareness.",
  path: canonical,
  ogType: "website",
});

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function First90DaysToolPage(props: PageProps) {
  const meta = loadFirst90DaysMeta();
  const datasetsV2 = loadFirst90DaysDatasetsV2();
  const examples = loadFirst90DaysExamples();
  const faq = loadFirst90DaysFaq();

  const emptyParams: Record<string, string | string[] | undefined> = {};
  const searchParamsResolved = await Promise.resolve(props.searchParams ?? emptyParams).catch(() => emptyParams);
  const searchParams = searchParamsResolved && typeof searchParamsResolved === "object" ? searchParamsResolved : emptyParams;

  const hasParams = hasFirst90DaysParams(searchParams);
  const initialValuesJson = hasParams ? JSON.stringify(getFirst90DaysFullValuesFromSearchParams(searchParams)) : undefined;
  const initialMode: "default" | "personalized" = hasParams ? "personalized" : "default";

  if (!meta) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-slate-600">Tool content could not be loaded. Please try again later.</p>
      </div>
    );
  }

  const intro = (
    <>
      {meta.seo.introParagraphs?.map((paragraph, index) => (
        <p key={index} className="mb-3">
          {paragraph}
        </p>
      ))}
    </>
  );

  const pageTitle = "First 90 Days in the Netherlands Planner (Free Tool)";
  const pageDescription =
    "Create a personalized week-by-week plan for your first 90 days in the Netherlands, including admin, daily life setup, and integration awareness.";
  const breadcrumbItems = getToolBreadcrumbItems("First 90 Days Planner", canonical);
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: pageTitle,
    description: pageDescription,
    url: canonical,
    applicationCategory: "PlanningApplication",
  });
  const faqJsonLd = buildFaqSchema(faq.map((q) => ({ question: q.question, answer: q.answer })));

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
            eyebrow="Tool"
            title={meta.hero.title}
            subtitle={meta.hero.subtitle}
            introBullets={meta.hero.introBullets}
            primaryCtaLabel={meta.hero.primaryCtaLabel}
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel={meta.hero.secondaryCtaLabel}
            secondaryCtaHref={meta.hero.secondaryCtaHref}
            image={meta.hero.image}
            imageFallback={meta.hero.imageFallback}
          />
        }
        intro={intro}
        disclosure={meta.disclosure}
        explanatorySections={meta.explanatorySections}
        infographic={meta.infographic}
        examplesSection={
          examples.length > 0 ? (
            <ExamplesSection
              title="Example scenarios"
              subtitle="See how different expat situations translate into a practical 90-day timeline."
              showHeading={false}
              examples={examples.map((example) => {
                const inputs = example.inputs as Record<string, string | boolean | undefined>;
                const stringInputs: Record<string, string> = {};
                for (const [k, v] of Object.entries(inputs)) {
                  if (v === undefined) continue;
                  stringInputs[k] = typeof v === "boolean" ? (v ? "true" : "false") : String(v);
                }
                return {
                  id: example.id,
                  title: example.title,
                  summary: example.summary,
                  inputs: stringInputs,
                  topTasks: example.topWeek1to2Priorities?.slice(0, 3) ?? [],
                };
              })}
              toolPath="/netherlands/moving/tools/first-90-days"
              paramKeys={[
                "arrivalStage",
                "household",
                "startingJobSoon",
                "needsIntegrationAwareness",
                "from",
                "arrivalDate",
                "needsDrivingSoon",
                "housingSituation",
                "hasBankAccountAlready",
                "hasBSNAlready",
                "wantsLanguageSupport",
                "hasKidsAdminNeeds",
                "needsUtilitiesSetup",
              ]}
              prefilledCtaLabel="Use this scenario"
            />
          ) : null
        }
        faqItems={faq}
        relatedGuides={FIRST_90_DAYS_RELATED_GUIDES}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {FIRST_90_DAYS_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {FIRST_90_DAYS_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
      >
        <First90DaysClient
          initialValuesJson={initialValuesJson}
          initialMode={initialMode}
          datasetsV2Json={JSON.stringify(datasetsV2)}
          metaJson={JSON.stringify({ toolPanel: meta.toolPanel, results: meta.results })}
          originCountriesJson={JSON.stringify(meta.originCountries ?? [])}
          signupCtaJson={JSON.stringify({
            title: "Save and track your 90-day plan",
            subtitle:
              "Create a free account to save your timeline, mark tasks complete, keep notes, and unlock deeper relocation planning.",
            bullets: [
              "save your timeline",
              "mark tasks as completed",
              "keep reminders and unknowns together",
              "unlock more personalized planning tools",
            ],
            primaryCtaLabel: "Create free account",
            primaryCtaHref: "/signup",
            secondaryCtaLabel: "Maybe later",
          })}
          placementId="tool_first_90_days_after_results"
        />
      </ToolPageTemplate>
    </>
  );
}

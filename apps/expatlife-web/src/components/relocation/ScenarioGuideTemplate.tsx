"use client";

import Link from "next/link";
import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { CardLink } from "@/components/ui/card-link";
import { InfoBox } from "@/components/ui/info-box";
import { Accordion } from "@/components/ui/accordion";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import { getToolBySlug } from "@/src/lib/tools/getToolBySlug";

export type ScenarioGuideTemplateProps = {
  content: ScenarioGuideContent;
};

export function ScenarioGuideTemplate({ content }: ScenarioGuideTemplateProps) {
  const {
    h1,
    eyebrow,
    intro,
    quickAnswer,
    dependsOn,
    sections,
    comparisonTable,
    checklist,
    mistakes,
    faq,
    relatedGuides,
    relatedTools,
    relatedServices,
  } = content;

  return (
    <>
      <Container className="py-8">
        <PageHeader
          eyebrow={eyebrow}
          title={h1}
          subtitle={intro.length > 0 ? intro[0] : undefined}
        />
        {intro.length > 1 && (
          <div className="mt-4 space-y-3">
            {intro.slice(1).map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Quick answer */}
        <Section contained={false} className="pt-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Quick answer
            </p>
            <p className="mt-2 text-slate-800 leading-relaxed">{quickAnswer}</p>
          </div>
        </Section>

        {/* What this usually depends on */}
        {dependsOn && dependsOn.length > 0 && (
          <Section contained={false}>
            <h2 id="depends-on" className="text-xl font-semibold tracking-tight text-slate-900">
              What this usually depends on
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {dependsOn.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Main sections */}
        {sections.map((section) => (
          <Section key={section.id} contained={false} id={section.id}>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-1 text-sm text-slate-600">{section.subtitle}</p>
            )}
            <div className="mt-4 space-y-4">
              {section.body?.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc space-y-1 pl-5 text-slate-700">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.scenarios?.map((sc, i) => (
                <InfoBox key={i} variant="info" title={sc.title}>
                  <p className="text-sm leading-relaxed">{sc.body}</p>
                </InfoBox>
              ))}
              {section.cta && (
                <p className="pt-2">
                  <Link
                    href={section.cta.href}
                    className="text-sm font-medium text-brand-700 underline hover:text-brand-800"
                  >
                    {section.cta.label}
                    {!String(section.cta.label).trim().endsWith("→") ? " →" : null}
                  </Link>
                </p>
              )}
            </div>
          </Section>
        ))}

        {/* Comparison table */}
        {comparisonTable && comparisonTable.headers.length > 0 && (
          <Section contained={false} id="comparison">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              At a glance
            </h2>
            {comparisonTable.caption && (
              <p className="mt-1 text-sm text-slate-600">{comparisonTable.caption}</p>
            )}
            <ContentTable
              className="mt-4"
              headers={comparisonTable.headers}
              minWidth="400px"
            >
              {comparisonTable.rows.map((row, ri) => (
                <ContentTableRow key={ri}>
                  {row.map((cell, ci) => (
                    <ContentTableCell key={ci} emphasis={ci === 0}>
                      {cell}
                    </ContentTableCell>
                  ))}
                </ContentTableRow>
              ))}
            </ContentTable>
          </Section>
        )}

        {/* Checklist */}
        {checklist && checklist.length > 0 && (
          <Section contained={false} id="checklist">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Practical checklist
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              {checklist.map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-brand-700 hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Common mistakes */}
        {mistakes && mistakes.length > 0 && (
          <Section contained={false} id="mistakes">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Common mistakes
            </h2>
            <div className="mt-4 space-y-4">
              {mistakes.map((m, i) => (
                <InfoBox key={i} variant="warn" title={m.title}>
                  <p className="text-sm leading-relaxed">{m.body}</p>
                </InfoBox>
              ))}
            </div>
          </Section>
        )}

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <Section contained={false} id="tools">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Relevant tools
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Use these tools to build a personalised checklist and sequence your steps.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((slug) => {
                const tool = getToolBySlug(slug, { categoryId: "move-immigration" });
                if (!tool) return null;
                return (
                  <CardLink
                    key={tool.slug}
                    href={tool.route}
                    title={tool.title}
                    description={tool.summary ?? ""}
                    badge="Tool"
                  />
                );
              })}
            </div>
          </Section>
        )}

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <Section contained={false} id="related-guides">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Related guides
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedGuides.map((g) => (
                <CardLink
                  key={g.href}
                  href={g.href}
                  title={g.label}
                  description={g.description ?? ""}
                />
              ))}
            </div>
          </Section>
        )}

        {/* FAQ */}
        {faq.length > 0 && (
          <Section contained={false} id="faq">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              FAQ
            </h2>
            <Accordion
              className="mt-4"
              items={faq.map((item, i) => ({
                id: `faq-${i}`,
                title: item.q,
                content: (
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.a}
                  </p>
                ),
              }))}
            />
          </Section>
        )}

        {/* Optional services */}
        {relatedServices && relatedServices.length > 0 && (
          <Section contained={false} id="services">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Services that may help
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              These are examples of services expats sometimes use. We do not give advice; confirm suitability for your situation.
            </p>
            <ul className="mt-4 space-y-3">
              {relatedServices.map((s, i) => (
                <li key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3">
                  <span className="font-medium text-slate-900">{s.name}.</span>{" "}
                  <span className="text-sm text-slate-600">{s.description}</span>
                  {s.href && (
                    <span className="ml-1">
                      <Link href={s.href} className="text-sm text-brand-700 hover:underline">
                        More info
                      </Link>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Back to main guide */}
        <Section contained={false} className="border-t border-slate-200 pt-8">
          <Link
            href="/netherlands/moving-to-the-netherlands/"
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            ← Back to Moving to the Netherlands
          </Link>
        </Section>
      </Container>
    </>
  );
}

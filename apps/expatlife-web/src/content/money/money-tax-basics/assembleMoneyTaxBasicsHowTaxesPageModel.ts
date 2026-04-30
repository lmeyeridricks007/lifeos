import {
  HOW_TAXES_WORK_IN_NL_PATH,
  TAX_RESIDENCY_NL_PATH,
  TAX_RETURN_NL_PATH,
  taxGuideRoutes,
} from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { buildOfficialSourcesReferences, resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import { moneyTaxBasicsBoxCards } from "./moneyTaxBasicsBoxCards";
import { moneyTaxBasicsDecisionCards } from "./moneyTaxBasicsDecisionCards";
import { moneyTaxBasicsFaq } from "./moneyTaxBasicsFaq";
import { moneyTaxBasicsJourneySteps } from "./moneyTaxBasicsJourneySteps";
import { moneyTaxBasicsMisunderstandings } from "./moneyTaxBasicsMisunderstandings";
import { moneyTaxBasicsOfficialSources } from "./moneyTaxBasicsOfficialSources";
import { moneyTaxBasicsPayrollReturnCards } from "./moneyTaxBasicsPayrollReturnCards";
import { moneyTaxBasicsRecommendedServices } from "./moneyTaxBasicsRecommendedServices";
import { moneyTaxBasicsRelatedTools } from "./moneyTaxBasicsRelatedTools";
import { moneyTaxBasicsStartCards } from "./moneyTaxBasicsStartCards";

const R = { ...taxGuideRoutes, canonical: HOW_TAXES_WORK_IN_NL_PATH } as const;

function resolveTools(keys: readonly MoneyTaxGuideToolKey[]) {
  return resolveRelatedTools(keys.map((key) => ({ kind: "tool" as const, key })));
}

const PAYROLL_CTA_LABEL_OVERRIDES: Partial<Record<MoneyTaxGuideToolKey, string>> = {
  expatTaxesGuide: "Learn expat taxes",
};

function joinExamples(examples: readonly string[]): string {
  return examples.join(" ");
}

function buildReferences(): MoveVisaResidencyReferences {
  return buildOfficialSourcesReferences({
    sectionId: moneyTaxBasicsOfficialSources.sectionId,
    sectionTitle: moneyTaxBasicsOfficialSources.sectionTitle,
    disclaimer: moneyTaxBasicsOfficialSources.intro,
    groups: moneyTaxBasicsOfficialSources.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
    internalLinks: [
      { label: "Tax residency in the Netherlands", href: TAX_RESIDENCY_NL_PATH },
      { label: "Tax return in the Netherlands", href: TAX_RETURN_NL_PATH },
      { label: "Netherlands Tax Guide for Expats", href: R.taxGuideForExpats },
      { label: "Expat Taxes in the Netherlands", href: R.expatTaxesGuide },
      { label: "Taxes tools hub", href: R.taxesTools },
      { label: "Money & tax tools hub", href: R.moneyTools },
      { label: "Working in the Netherlands", href: R.workingNl },
    ],
  });
}

function buildHelpfulToolsSections() {
  return moneyTaxBasicsRelatedTools.sections.map((g) => ({
    eyebrow: g.eyebrow,
    description: g.description,
    items: g.items.map((it) => {
      const r = resolveTools([it.toolKey])[0];
      return { title: it.title, description: it.intro, href: r.href, cta: it.ctaLabel };
    }),
  }));
}

export function assembleMoneyTaxBasicsHowTaxesPageModel() {
  const references = buildReferences();

  const startHere = {
    id: moneyTaxBasicsStartCards.id,
    eyebrow: moneyTaxBasicsStartCards.eyebrow,
    title: moneyTaxBasicsStartCards.title,
    subtitle: moneyTaxBasicsStartCards.intro,
    cards: moneyTaxBasicsStartCards.cards.map((c) => ({
      id: c.id,
      title: c.title,
      intro: c.intro,
      keyPoints: [...c.keyPoints],
    })),
  };

  const taxJourney = {
    id: moneyTaxBasicsJourneySteps.id,
    eyebrow: moneyTaxBasicsJourneySteps.eyebrow,
    title: moneyTaxBasicsJourneySteps.title,
    subtitle: moneyTaxBasicsJourneySteps.intro,
    steps: moneyTaxBasicsJourneySteps.steps.map((st) => ({
      number: st.number,
      title: st.title,
      body: st.intro,
      links: resolveTools([...st.relatedToolKeys]),
    })),
  };

  const payroll = moneyTaxBasicsPayrollReturnCards;
  const payrollVsReturn = {
    id: payroll.id,
    eyebrow: payroll.eyebrow,
    title: payroll.title,
    subtitle: payroll.subtitle,
    timingHighlight: [...payroll.timingHighlight],
    intro: payroll.intro,
    bullets: [...payroll.keyPoints],
    comparison: payroll.comparisonCards.map((c) => ({ id: c.id, title: c.title, body: c.body })),
    ctas: [...payroll.payrollCtaToolKeys].map((key) => {
      const r = resolveTaxGuideTool(key, PAYROLL_CTA_LABEL_OVERRIDES[key]);
      return { href: r.href, label: r.label };
    }),
  };

  const boxes = moneyTaxBasicsBoxCards;
  const accent = { 1: "box1", 2: "box2", 3: "box3" } as const;
  const taxBoxes = {
    id: boxes.id,
    eyebrow: boxes.eyebrow,
    title: boxes.title,
    subtitle: boxes.subtitle,
    note: boxes.note,
    cards: boxes.cards.map((c) => ({
      id: c.id,
      accent: accent[c.boxNumber],
      title: `Box ${c.boxNumber}`,
      tagline: c.plainName,
      simpleExplanation: c.simpleExplanation,
      commonExample: joinExamples(c.commonExamples),
      commonExamples: [...c.commonExamples],
      whoShouldCareMost: c.whoShouldCare,
      links: resolveTools([...c.relatedToolKeys]),
    })),
  };

  const decision = moneyTaxBasicsDecisionCards;
  const topicDecisionFirst = {
    id: decision.id,
    eyebrow: decision.eyebrow,
    title: decision.title,
    subtitle: decision.intro,
    cards: decision.cards.map((card) => ({
      id: card.id,
      title: card.title,
      whyItMatters: card.intro,
      nextAction: card.keyPoints[0],
      links: [
        ...resolveTools([...card.relatedToolKeys]),
        ...(card.internalAnchors ?? []).map((a) => ({
          href: `${HOW_TAXES_WORK_IN_NL_PATH}#${a.hash}`,
          label: a.label,
        })),
      ],
    })),
  };

  const misunderstandings = {
    id: moneyTaxBasicsMisunderstandings.id,
    eyebrow: moneyTaxBasicsMisunderstandings.eyebrow,
    title: moneyTaxBasicsMisunderstandings.title,
    subtitle: moneyTaxBasicsMisunderstandings.intro,
    rows: moneyTaxBasicsMisunderstandings.rows.map((r) => ({ id: r.id, title: r.title, body: r.body })),
  };

  const servicesRegion = {
    id: moneyTaxBasicsRecommendedServices.id,
    eyebrow: moneyTaxBasicsRecommendedServices.eyebrow,
    title: moneyTaxBasicsRecommendedServices.title,
    subtitle: moneyTaxBasicsRecommendedServices.intro,
    whenHelpBullets: [...moneyTaxBasicsRecommendedServices.whenHelpBullets],
  };

  const helpfulTools = {
    id: moneyTaxBasicsRelatedTools.id,
    eyebrow: moneyTaxBasicsRelatedTools.eyebrow,
    title: moneyTaxBasicsRelatedTools.title,
    subtitle: moneyTaxBasicsRelatedTools.intro,
    sections: buildHelpfulToolsSections(),
  };

  const faq = moneyTaxBasicsFaq.items.map((item) => ({
    q: item.q,
    a: item.a,
  }));

  return {
    references,
    startHere,
    taxJourney,
    payrollVsReturn,
    taxBoxes,
    topicDecisionFirst,
    misunderstandings,
    servicesRegion,
    helpfulTools,
    faq,
  };
}

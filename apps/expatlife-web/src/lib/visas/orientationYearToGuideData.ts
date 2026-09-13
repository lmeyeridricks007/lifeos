/**
 * Orientation Year (zoekjaar) → GuideData adapter for GuidePageTemplate.
 */

import type {
  GuideData,
  GuideSection,
  GuideToolCta,
  GuideHeroCta,
  GuideTocItem,
  GuideExampleScenario,
} from "@/src/lib/guides/types";
import type { VisaPageData } from "@/src/content/visas/types";
import { normalizeGuideContract } from "@/src/lib/guides/normalizeMovingGuideContract";
import {
  ORIENTATION_YEAR_CONTENT_LAST_REVIEWED,
  ORIENTATION_YEAR_IND_PAGE_LAST_UPDATE,
  ORIENTATION_YEAR_IND_URL,
  ORIENTATION_YEAR_BUSINESS_GOV_URL,
  ORIENTATION_YEAR_FEES_URL,
} from "@/src/content/visas/orientation-year";
import {
  formatEurMonthly,
  HSM_SALARY_THRESHOLDS_EUR,
  IND_REQUIRED_AMOUNTS_URL,
} from "@/src/lib/tools/hsm-salary-checker/thresholds";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;
const DOCUMENT_READINESS_CHECKER = `${BASE}/document-readiness-checker/`;
const COMPARE_VISAS_HREF = `${BASE}/visa/compare-visas/`;
const HSM_REDUCED = formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced);

export function orientationYearToGuideData(v: VisaPageData): GuideData {
  const tocItems: GuideTocItem[] = [
    { id: "short-answer", label: "Short answer" },
    { id: "at-a-glance", label: "At a glance" },
    { id: "journey", label: "Typical journey" },
    { id: "who-qualifies", label: "Who qualifies" },
    { id: "when-to-apply", label: "When you can apply" },
    { id: "what-it-lets-you-do", label: "What it lets you do" },
    { id: "how-long", label: "How long it lasts" },
    { id: "working", label: "Working during the year" },
    { id: "reduced-hsm", label: "Reduced HSM salary" },
    { id: "process", label: "Application process" },
    { id: "documents", label: "Documents" },
    { id: "fees", label: "Costs" },
    { id: "after", label: "After the orientation year" },
    { id: "switching", label: "Switching to HSM / other routes" },
    { id: "mistakes", label: "Common mistakes" },
    { id: "faq", label: "FAQ" },
    { id: "official-sources", label: "Official sources" },
  ];

  const heroCta: GuideHeroCta = {
    title: "Plan your post-graduation job search",
    supportingText:
      "Use the visa checker and HSM salary checker to connect orientation year timing with a realistic next residence purpose.",
    primaryCtaLabel: "Open the visa checker",
    primaryCtaHref: `${BASE}/visa-checker/`,
    secondaryCtas: [
      { label: "HSM salary checker", href: `${TOOLS}/hsm-salary-checker/` },
      { label: "Compare visas", href: COMPARE_VISAS_HREF },
    ],
    supportingLinks: [
      { label: "Student visa guide", href: `${BASE}/visa/student-visa/` },
      { label: "Highly skilled migrant", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Official figures 2026", href: `${BASE}/official-figures/` },
      { label: "IND orientation year", href: ORIENTATION_YEAR_IND_URL },
    ],
  };

  const quickAnswers = [
    { label: "Also called", value: "Zoekjaar / search year / orientation year visa" },
    { label: "Validity", value: "1 year (not extended — IND)" },
    { label: "Apply within", value: "3 years of qualifying graduation / PhD / research end" },
    { label: "IND fee (2026)", value: v.keyFacts.indFee },
    { label: "Work rights", value: "Work freely; TWV not required (IND)" },
    { label: "HSM reduced floor (2026)", value: `${HSM_REDUCED} / month excl. holiday pay` },
  ];

  const shortAnswer: GuideSection = {
    id: "short-answer",
    heading: "Short answer",
    body: [
      "The Dutch orientation year (zoekjaar) is a residence permit for highly educated graduates, PhD holders and qualifying researchers to look for work — and to work — in the Netherlands for one year. You normally apply within three years of the qualifying graduation, doctorate or research period. It is not a job guarantee and it is not legal advice; IND decides eligibility against current rules.",
    ],
    callout: {
      type: "info",
      title: "Source stamp",
      text: `Orientation-year rules summarised from IND (page last update ${ORIENTATION_YEAR_IND_PAGE_LAST_UPDATE}) and Business.gov.nl. Fees and HSM amounts verified against IND fees / required-amounts pages on 13 September 2026.`,
    },
  };

  const atAGlance: GuideSection = {
    id: "at-a-glance",
    heading: "At a glance",
    table: {
      headers: ["Topic", "Planning figure", "Source"],
      rows: [
        ["Permit name", "Orientation year for highly educated persons (zoekjaar)", "IND"],
        ["Validity", "1 year; not extended", "IND / Business.gov.nl"],
        ["Application window", "Within 3 years before the application date (qualifying ground)", "IND"],
        ["Sponsor for this permit", "None — you apply personally", "IND / Business.gov.nl"],
        ["Work during the year", "Freely permitted; TWV not required; freelancing allowed", "IND"],
        ["IND fee (2026)", `${v.fees.applicationFee} first application / change of purpose (exceptions may apply)`, "IND fees"],
        ["Common next step", "HSM, start-up or self-employed before the year ends", "IND / Business.gov.nl"],
        ["HSM reduced salary (2026)", `${HSM_REDUCED} gross/month excl. holiday pay when IND reduced-criterion rules apply`, "IND required amounts"],
      ],
    },
  };

  const journey: GuideSection = {
    id: "journey",
    heading: "Typical journey",
    body: [
      "Most people use the orientation year as a bridge after study or research — not as a permanent status.",
    ],
    table: {
      headers: ["Stage", "What usually happens"],
      rows: [
        ["1. Graduate / researcher", "Finish qualifying Dutch study, PhD, foreign top-200 route, Erasmus Mundus master’s, or qualifying research residence"],
        ["2. Orientation year (zoekjaar)", "Apply within the 3-year window; receive a 1-year permit to look for and carry out work"],
        ["3. Job search / work", "Interview, accept employment or freelance freely without a TWV"],
        ["4. HSM / other route", "Change residence purpose before the year ends — often HSM with a recognised sponsor (possibly reduced salary criterion)"],
      ],
    },
    links: [
      { label: "Student visa guide", href: `${BASE}/visa/student-visa/` },
      { label: "Highly skilled migrant guide", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "HSM salary checker", href: `${TOOLS}/hsm-salary-checker/` },
    ],
  };

  const whoQualifies: GuideSection = {
    id: "who-qualifies",
    heading: "Who qualifies",
    body: [
      "IND lists several grounds. You must meet at least one ground in the three years before the application date. This is a summary for orientation — not a personal eligibility decision.",
    ],
    bullets: v.eligibility,
    callout: {
      type: "warning",
      title: "Do not self-certify complex foreign-institution cases",
      text: "The designated foreign institution route depends on top-200 rankings from separate publishers on your graduation/PhD date, plus Nuffic evaluation and language evidence in many cases. Confirm the exact documentary checklist on the IND form for your situation.",
    },
    links: [
      { label: "IND — Orientation year", href: ORIENTATION_YEAR_IND_URL },
      { label: "Business.gov.nl — Orientation year", href: ORIENTATION_YEAR_BUSINESS_GOV_URL },
    ],
  };

  const whenToApply: GuideSection = {
    id: "when-to-apply",
    heading: "When you can apply",
    body: [
      "Apply while you still meet an IND ground based on events in the previous three years (graduation date, doctoral defence date, or end of a qualifying research residence — depending on your ground).",
      "If you are already in the Netherlands on a valid study or research permit and meet DigiD / BRP / BSN conditions, IND describes an online application path. If you are abroad, you may need the written form and possibly an MVV via a Dutch representation — follow IND’s decision aid for your nationality.",
    ],
    links: [{ label: "IND orientation year — how to apply", href: ORIENTATION_YEAR_IND_URL }],
  };

  const whatItLetsYouDo: GuideSection = {
    id: "what-it-lets-you-do",
    heading: "What the orientation year lets you do",
    body: [
      "The purpose of residence is looking for work and carrying out work whether or not as an employee. In practice that covers job search, employment, internships and self-employed activity during the year, subject to the permit conditions IND prints on your document.",
    ],
    bullets: [
      "Search for highly skilled or other employment in the Netherlands",
      "Accept a job or internship without a TWV",
      "Work as freelancer / self-employed / independent entrepreneur during the year (IND)",
      "Prepare a switch to HSM, start-up or another residence purpose before expiry",
    ],
  };

  const howLong: GuideSection = {
    id: "how-long",
    heading: "How long it lasts",
    body: [
      "IND states the residence permit for the orientation year for highly educated persons is valid for 1 year. Business.gov.nl states it is not possible to extend it.",
      "IND also describes that a further orientation year can be granted after a new qualifying study or research completed after a previous orientation year — not as a simple renewal of the same year. Verify on IND before assuming a second year is available.",
    ],
  };

  const working: GuideSection = {
    id: "working",
    heading: "Working during the orientation year",
    body: [v.workRightsSummary ?? ""],
    callout: {
      type: "tip",
      title: "Document wording",
      text: "IND says the back of the residence document states that work is freely permitted and a TWV is not required. If you need a residence endorsement sticker while waiting for the card, book an IND appointment as described on the IND page.",
    },
    links: [
      { label: "Finding jobs in the Netherlands", href: `${BASE}/jobs/finding-jobs-netherlands/` },
      { label: "English-speaking jobs", href: `${BASE}/jobs/english-speaking-jobs-netherlands/` },
    ],
  };

  const reducedHsm: GuideSection = {
    id: "reduced-hsm",
    heading: "Reduced HSM salary criterion",
    body: [
      `For calendar year 2026, IND lists the highly skilled migrant reduced salary criterion at ${HSM_REDUCED} gross per month without holiday allowance. It is not automatic for every graduate — it applies only in the cases IND lists on the required-amounts page:`,
    ],
    bullets: [
      "HSM is applied for while you hold an orientation-year residence permit",
      "You previously held orientation year and apply for HSM within 3 years of graduation / PhD defence / research-permit end",
      "You never held orientation year but meet orientation-year requirements and apply for HSM within that same 3-year window",
    ],
    callout: {
      type: "info",
      title: "Employer still matters",
      text: "HSM still requires an IND-recognised sponsor and a qualifying offer. Use the HSM salary checker for orientation, then verify the live IND table before signing.",
    },
    links: [
      { label: "IND required amounts", href: IND_REQUIRED_AMOUNTS_URL },
      { label: "HSM guide", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "HSM salary checker", href: `${TOOLS}/hsm-salary-checker/` },
      { label: "Official figures citation table", href: `${BASE}/official-figures/` },
    ],
    table: v.salaryThresholds?.length
      ? {
          headers: ["Linked planning figure", "Amount", "Note"],
          rows: v.salaryThresholds.map((s) => [s.label, s.amountMonthly, s.note ?? ""]),
        }
      : undefined,
  };

  const process: GuideSection = {
    id: "process",
    heading: "Application process",
    bullets: v.processSteps.map((s) => `${s.step}. ${s.title}${s.detail ? ` — ${s.detail}` : ""}`),
    body: [
      "Decision periods and MVV steps depend on nationality and whether you apply from inside or outside the Netherlands. Use IND’s decision aid and forms rather than forum timelines.",
    ],
    links: [{ label: "IND orientation year", href: ORIENTATION_YEAR_IND_URL }],
  };

  const documents: GuideSection = {
    id: "documents",
    heading: "Documents",
    body: [
      "Exact evidence depends on which IND ground you use. The list below is a planning checklist compiled from IND form guidance — always follow the live form for your situation.",
    ],
    bullets: v.documents.map((d) => (d.note ? `${d.name} (${d.note})` : d.name)),
    ctaBlock: {
      title: "Check document readiness",
      supportingText: "Map identity, diploma and arrival documents for your wider move profile.",
      primaryLabel: "Open document readiness checker",
      primaryHref: DOCUMENT_READINESS_CHECKER,
    },
  };

  const fees: GuideSection = {
    id: "fees",
    heading: "Costs",
    table: {
      headers: ["Item", "Amount", "Note"],
      rows: [
        ["IND application fee (orientation year)", v.fees.applicationFee, v.fees.note ?? ""],
        [
          "Turkish nationals (where the reduced fee applies)",
          "€85",
          "IND fees page — verify category before paying",
        ],
        ["San Marino / Israel (where listed free)", "€0", "IND fees page — verify category before paying"],
      ],
    },
    body: [
      "Fees are set for the calendar year and change on 1 January. MVV, legalisation, translation and relocation costs are separate.",
    ],
    links: [{ label: "IND fees", href: ORIENTATION_YEAR_FEES_URL }],
  };

  const after: GuideSection = {
    id: "after",
    heading: "After the orientation year",
    body: [
      "The orientation year ends after one year. If you want to remain, change to another residence purpose in time — for example Highly Skilled Migrant, start-up or self-employed. Leaving the year unused does not automatically create a new right to stay.",
    ],
    links: [
      { label: "Status changes hub", href: `${BASE}/moving/status-changes/` },
      { label: "Self-employed visa", href: `${BASE}/visa/self-employed-visa/` },
    ],
  };

  const switching: GuideSection = {
    id: "switching",
    heading: "Switching to HSM / other residence purposes",
    body: [
      "Business.gov.nl notes that if you find a highly skilled migrant job during the orientation year, the new employer applies for HSM for you, and a lower income requirement can apply when IND’s reduced-criterion rules fit.",
      "If the job does not meet HSM (or Blue Card) conditions, a different work residence route may be required. Partner/family members need their own qualifying applications.",
    ],
    table: {
      headers: ["Route", "Best for", "Main difference"],
      rows: v.alternatives.map((a) => [a.route, a.bestFor, a.mainDifference]),
    },
    links: v.alternatives.filter((a) => a.href).map((a) => ({ label: a.route, href: a.href! })),
  };

  const mistakes: GuideSection = {
    id: "mistakes",
    heading: "Common mistakes",
    bullets: [
      "Waiting until after the 3-year window closes",
      "Assuming any foreign university qualifies without IND ranking / Nuffic evidence",
      "Treating orientation year as extendable like a study permit",
      "Signing an HSM offer without checking whether the reduced criterion actually applies",
      "Forgetting to change residence purpose before the year expires",
      "Assuming a partner can join without meeting separate IND family conditions",
    ],
  };

  const officialSources: GuideSection = {
    id: "official-sources",
    heading: "Official sources",
    body: ["Always prefer these authority pages over secondary summaries when you apply:"],
    links: (v.officialSources ?? []).map((o) => ({ label: o.label, href: o.href })),
  };

  const toolCtas: GuideToolCta[] = (v.toolCtas ?? []).map((t) => ({
    key: t.key,
    label: t.label,
    href: t.href,
    description: t.description,
  }));

  const exampleScenarios: GuideExampleScenario[] = (v.exampleScenarios ?? []).map((s) => ({
    title: s.title,
    summary: s.summary,
    href: s.href,
    ctaLabel: s.ctaLabel ?? "Use this scenario",
  }));

  return normalizeGuideContract({
    slug: v.slug,
    path: v.path,
    title: v.title,
    metaTitle: v.seo.title,
    breadcrumbLabel: v.shortTitle,
    subtitle:
      "Zoekjaar / search year: who qualifies, when to apply, free work rights, the 1-year limit, reduced HSM salary links, and how to plan the switch after graduation or research.",
    description: v.summary,
    lastUpdated: ORIENTATION_YEAR_CONTENT_LAST_REVIEWED,
    heroOfficialSources: [
      { label: "IND — Orientation year", href: ORIENTATION_YEAR_IND_URL },
      { label: "IND — Application fees", href: ORIENTATION_YEAR_FEES_URL },
      { label: "IND — Required amounts (HSM)", href: IND_REQUIRED_AMOUNTS_URL },
    ],
    hero: {
      eyebrow: "VISA GUIDE",
      badges: [v.category, "2026 IND figures"],
      image: {
        src: v.heroImage,
        alt: v.heroImageAlt,
        priority: true,
      },
    },
    tocItems,
    heroCta,
    quickAnswers,
    sections: [
      shortAnswer,
      atAGlance,
      journey,
      whoQualifies,
      whenToApply,
      whatItLetsYouDo,
      howLong,
      working,
      reducedHsm,
      process,
      documents,
      fees,
      after,
      switching,
      mistakes,
      officialSources,
    ],
    toolCtas,
    exampleScenarios,
    scenariosSectionTitle: "Example orientation-year scenarios",
    scenariosSectionIntro:
      "How zoekjaar often sits between graduation/research and a longer work or entrepreneur residence purpose.",
    internalLinks: {
      hub: { label: "Visas & residency", href: `${BASE}/moving/visas-residency/` },
      pillar: { label: "Orientation year", href: v.path },
      related: [
        { label: "Compare visa options", href: COMPARE_VISAS_HREF },
        ...(v.relatedGuides ?? []).map((g) => ({ label: g.label, href: g.href })),
      ],
    },
    sidebarStartLinks: [
      { label: "Compare visas", href: COMPARE_VISAS_HREF },
      { label: "Visa checker", href: `${BASE}/visa-checker/` },
      { label: "HSM salary checker", href: `${TOOLS}/hsm-salary-checker/` },
      { label: "Official figures", href: `${BASE}/official-figures/` },
      { label: "Student visa", href: `${BASE}/visa/student-visa/` },
      { label: "Highly skilled migrant", href: `${BASE}/visa/highly-skilled-migrant/` },
    ],
    toolsCtaBand: {
      title: "Connect zoekjaar to a concrete next permit",
      body: "Check route fit, then test an HSM offer against IND salary floors — including the reduced criterion when it applies.",
      primaryLabel: "Visa checker",
      primaryHref: `${BASE}/visa-checker/`,
      secondaryLabel: "HSM salary checker",
      secondaryHref: `${TOOLS}/hsm-salary-checker/`,
      tertiaryLabel: "Compare visas",
      tertiaryHref: COMPARE_VISAS_HREF,
    },
    faq: v.faq,
    disclosure:
      "This page is for planning and awareness only. It is not immigration or legal advice. Eligibility, fees and salary amounts change. Always confirm with the IND, Business.gov.nl or a qualified adviser before you apply or accept an offer.",
  });
}

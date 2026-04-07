import type { GuideData, GuideSection } from "@/src/lib/guides/types";

export type MoveGuideSignatureCard = { title: string; items: string[] };

export type MoveGuideSignatureModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: MoveGuideSignatureCard[];
};

type SlugConfig = {
  sectionIds: string[];
  eyebrow: string;
  title: string;
  subtitle: string;
};

const MAX_BULLETS = 5;

/** Premium dark-band focus: slug → which sections supply scannable bullets (full sections still below). */
const MOVE_SIGNATURE_BY_SLUG: Record<string, SlugConfig> = {
  "first-30-days-netherlands": {
    sectionIds: ["week-1", "week-2", "week-3", "week-4"],
    eyebrow: "First month",
    title: "Your first four weeks in the Netherlands",
    subtitle: "Week-by-week priorities most expats tackle first—details and links follow in each section below.",
  },
  "first-60-days-netherlands": {
    sectionIds: ["weeks-5-6", "weeks-7-8", "housing-follow-up", "admin-health-check"],
    eyebrow: "Second month",
    title: "From first month to day-60 stability",
    subtitle: "Confirm essentials, routines, and admin follow-ups before you move deeper into settling in.",
  },
  "first-90-days-netherlands": {
    sectionIds: ["days-1-30", "days-31-60", "days-61-90"],
    eyebrow: "First 90 days",
    title: "Three phases of your first quarter",
    subtitle: "How timing, admin, and daily life typically unfold across days 1–90.",
  },
  "moving-checklist-netherlands": {
    sectionIds: ["before-you-move", "relocation-timeline", "arrival-steps", "first-90-days"],
    eyebrow: "How to use this guide",
    title: "Your move in focused phases",
    subtitle: "Treat relocation as a sequence: prepare, travel, land, then stabilize—use the checklist sections below for depth.",
  },
  "documents-needed-to-move-netherlands": {
    sectionIds: ["identity-documents", "employment-documents", "housing-documents", "organize-pack"],
    eyebrow: "Document pack",
    title: "Build a coherent document set",
    subtitle: "Core categories expats gather before they travel—then keep reading for legalisation and copies.",
  },
  "moving-to-netherlands-timeline": {
    sectionIds: ["3-6-months-before", "1-2-months-before", "arrival-week", "first-30-days"],
    eyebrow: "Timeline",
    title: "Relocation timing at a glance",
    subtitle: "Typical sequencing from a few months out through your first month on the ground.",
  },
  "moving-to-netherlands-cost": {
    sectionIds: ["main-cost-categories", "what-people-underestimate", "ways-to-reduce-costs", "checklist"],
    eyebrow: "Costs",
    title: "Plan money like you plan documents",
    subtitle: "Where budgets usually go, what surprises people, and how to stay in control.",
  },
  "move-to-netherlands-without-job": {
    sectionIds: ["situations-without-job", "minimum-savings", "what-to-prepare", "risks-bottlenecks"],
    eyebrow: "Your route",
    title: "Moving without a job lined up",
    subtitle: "When it can work, what finances to prove, what to prepare, and where bottlenecks appear.",
  },
  "moving-to-netherlands-with-family": {
    sectionIds: ["extra-planning-areas", "housing-families", "schools-childcare", "registration-sequencing"],
    eyebrow: "Family move",
    title: "Extra layers when you relocate with family",
    subtitle: "Housing, schools, registration order, and documents—before you dive into each topic below.",
  },
  "eu-vs-non-eu-moving-to-netherlands": {
    sectionIds: ["biggest-differences", "before-you-move", "arrival-and-admin", "timeline-comparison"],
    eyebrow: "Route differences",
    title: "EU vs non-EU: how the path diverges",
    subtitle: "Practical contrasts on admin, timing, and flexibility—then read visa detail in the sections that follow.",
  },
  "moving-to-netherlands-with-partner": {
    sectionIds: ["overview", "immigration-routes", "housing", "arrival-admin"],
    eyebrow: "Together",
    title: "Partner relocation in practice",
    subtitle: "Visa routes, housing, and arrival admin for couples—full detail stays in each section.",
  },
  "moving-to-netherlands-with-kids": {
    sectionIds: ["overview", "school-considerations", "housing-families", "arrival-admin"],
    eyebrow: "With children",
    title: "Kids, schools, and housing first",
    subtitle: "What parents usually line up early before deeper admin and benefits sections.",
  },
  "bringing-pets-to-netherlands": {
    sectionIds: ["rules-documents", "travel-and-costs", "pet-housing", "after-arrival"],
    eyebrow: "With pets",
    title: "Import, travel, housing, then settling in",
    subtitle: "The sequence most pet owners follow—full rules and checklists are in the sections below.",
  },
  "moving-mistakes-netherlands": {
    sectionIds: ["mistake-housing", "mistake-documents", "mistake-arrival", "mistake-finances"],
    eyebrow: "Avoid pain",
    title: "Where relocations usually go wrong",
    subtitle: "Common failure points—read on for how to prevent each one.",
  },
  "moving-requirements-netherlands": {
    sectionIds: ["legal-route-awareness", "documents", "housing", "financial"],
    eyebrow: "Requirements",
    title: "What you actually need lined up",
    subtitle: "Route awareness, paperwork, housing, and money—before you work through the full guide.",
  },
  "moving-to-netherlands-steps": {
    sectionIds: ["step-1", "step-2", "step-3", "step-4"],
    eyebrow: "Step-by-step",
    title: "The first moves in order",
    subtitle: "Early steps in sequence—continue below for every stage through settling in.",
  },
};

function sectionToCard(sec: GuideSection | undefined): MoveGuideSignatureCard | null {
  if (!sec) return null;
  const bullets = sec.bullets?.filter(Boolean).slice(0, MAX_BULLETS) ?? [];
  if (bullets.length > 0) {
    return { title: sec.heading, items: bullets };
  }
  const body = sec.body?.filter(Boolean) ?? [];
  if (body.length > 0) {
    const line = body[0].replace(/\s+/g, " ").trim();
    const clipped = line.length > 220 ? `${line.slice(0, 217)}…` : line;
    return { title: sec.heading, items: [clipped] };
  }
  return null;
}

/**
 * Builds props for {@link MoveGuideSignatureDark} on Move-cluster JSON guides.
 * Returns null when the slug has no registry entry or too little extractable content.
 */
export function buildMoveGuideSignatureModel(data: GuideData): MoveGuideSignatureModel | null {
  const cfg = MOVE_SIGNATURE_BY_SLUG[data.slug];
  if (!cfg) return null;

  const cards: MoveGuideSignatureCard[] = [];
  for (const id of cfg.sectionIds) {
    const sec = data.sections.find((s) => s.id === id);
    const card = sectionToCard(sec);
    if (card) cards.push(card);
  }

  if (cards.length < 2) return null;

  return {
    eyebrow: cfg.eyebrow,
    title: cfg.title,
    subtitle: cfg.subtitle,
    cards,
  };
}

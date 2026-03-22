/**
 * Central Open Graph / Twitter copy for Netherlands guide routes that use `GuideBySlugPage`.
 * Keeps titles and descriptions aligned with `buildSocialMetadata` (absolute URLs, default PNG OG image).
 */

import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";

const ENTRIES = {
  "documents-needed-to-move-netherlands": {
    title: "Documents Needed to Move to the Netherlands (Expat Guide)",
    description:
      "Learn which documents expats commonly prepare before moving to the Netherlands, including identity, housing, employment, family, and education records, plus apostille and translation tips.",
  },
  "moving-checklist-netherlands": {
    title: "Moving to the Netherlands Checklist (2026 Guide for Expats)",
    description:
      "Use this moving to the Netherlands checklist to plan what to do before you move, after arrival, and during your first 90 days. Includes documents, registration, costs, and practical next steps.",
  },
  "apostille-documents-netherlands": {
    title: "Apostille Documents Netherlands | How to Get an Apostille",
    description:
      "Learn how apostille documents work in the Netherlands, when you need an apostille, how to obtain one, typical costs, timelines, and how apostilles are used for visas, municipality registration, and official administration.",
  },
  "document-legalization-netherlands": {
    title: "Document Legalization in the Netherlands | Apostille & Legalisation Guide",
    description:
      "Learn how to legalise foreign documents for use in the Netherlands. Understand apostille vs legalisation, costs, timelines, and requirements for visas, municipality registration, and official administration.",
  },
  "health-insurance-netherlands": {
    title: "Health Insurance in the Netherlands | Costs, Basic Cover, Providers, Expats",
    description:
      "A practical guide to Dutch health insurance for expats, including who needs it, when to arrange it, what the basic package covers, typical monthly costs, provider comparisons, and useful next steps.",
  },
  "open-bank-account-netherlands": {
    title: "Open a Bank Account in the Netherlands | Expat Banking Guide",
    description:
      "Learn how to open a bank account in the Netherlands as an expat. Requirements, BSN rules, costs, best banks, and practical tips for setting up your finances after arrival.",
  },
  "municipality-registration-netherlands": {
    title: "Municipality Registration Netherlands | BRP Registration & BSN Guide",
    description:
      "Learn how to register with a municipality in the Netherlands, including required documents, deadlines, BRP registration, and how to receive your BSN.",
  },
  "after-arriving-netherlands": {
    title: "After Arriving in the Netherlands | BSN, Registration, DigiD, Insurance, Banking",
    description:
      "A practical guide to what to do after arriving in the Netherlands, including municipality registration, BSN, residence permit collection, DigiD, health insurance, banking, and first-week setup.",
  },
  "moving-to-netherlands-cost": {
    title: "Cost of Moving to the Netherlands: Budget, Expenses, and What to Plan For",
    description:
      "How much does it cost to move to the Netherlands? See typical relocation expenses, budget examples, housing and document costs, and how to plan your move.",
  },
  "first-90-days-netherlands": {
    title: "First 90 Days in the Netherlands: Complete Expat Setup Guide",
    description:
      "Learn what expats typically complete in their first 90 days in the Netherlands, including address registration, BSN, banking, DigiD, insurance, and settling into daily life.",
  },
  "eu-vs-non-eu-moving-to-netherlands": {
    title: "EU vs Non-EU Moving to the Netherlands: Visas, Documents & Timelines",
    description:
      "Compare the main differences between EU/EEA and non-EU relocation to the Netherlands, including permits, documents, timelines, costs, and first-step planning.",
  },
  "bringing-pets-to-netherlands": {
    title: "Bringing Pets to the Netherlands: Rules, Documents & Travel Tips",
    description:
      "Moving to the Netherlands with a dog or cat? Learn about pet import rules, documents, vaccinations, airline travel, housing, costs, and arrival planning.",
  },
  "moving-to-netherlands-with-kids": {
    title: "Moving to the Netherlands With Kids: Schools, Childcare & Family Planning",
    description:
      "Moving to the Netherlands with kids? Learn about schools, childcare, housing, documents, healthcare, registration, and first-step planning for expat families.",
  },
  "moving-to-netherlands-with-partner": {
    title: "Moving to the Netherlands With a Partner: Documents, Work Rights & Planning",
    description:
      "Moving to the Netherlands with a partner? Learn about common relocation routes, documents, housing, work rights, registration, and first-step planning for couples.",
  },
  "moving-to-netherlands-with-family": {
    title: "Moving to the Netherlands With Family: Housing, Schools & Documents",
    description:
      "Planning to move to the Netherlands with your partner or children? Learn what documents, housing, schools, childcare, healthcare, and practical steps to prepare.",
  },
  "move-to-netherlands-without-job": {
    title: "Can You Move to the Netherlands Without a Job? | EU & Non-EU Guide",
    description:
      "Can you move to the Netherlands without a job offer? Learn the difference for EU and non-EU nationals, what documents and savings may be needed, and how to plan your move.",
  },
  "moving-documents-checklist": {
    title: "Moving Documents Checklist Netherlands",
    description:
      "Use this practical checklist to organize the documents many expats prepare before moving to the Netherlands.",
  },
  "moving-to-netherlands-steps": {
    title: "Moving to the Netherlands Step by Step: Expat Guide",
    description:
      "Learn the main steps many expats follow when moving to the Netherlands, from document preparation and housing planning to arrival admin and first-month setup.",
  },
  "moving-requirements-netherlands": {
    title: "Moving to the Netherlands Requirements: Expat Planning Guide",
    description:
      "Learn the main requirements many expats need to plan for when moving to the Netherlands, including documents, housing, arrival admin, finances, and first-month setup.",
  },
  "moving-mistakes-netherlands": {
    title: "Common Mistakes When Moving to the Netherlands",
    description:
      "Learn the most common mistakes expats make when moving to the Netherlands and how to avoid them with better preparation, document planning, and arrival setup.",
  },
  "visa-documents-netherlands": {
    title: "Visa Documents for the Netherlands: Expat Preparation Guide",
    description:
      "Learn which document categories are commonly prepared for Netherlands visa and residence routes, why they matter, and how to organize a practical document pack before moving.",
  },
  "first-60-days-netherlands": {
    title: "First 60 Days in the Netherlands: What Expats Usually Set Up",
    description:
      "A practical guide to the first 60 days after moving to the Netherlands. Learn what expats usually set up after arrival, from banking and health insurance to DigiD, housing, and daily-life routines.",
  },
  "first-30-days-netherlands": {
    title: "First 30 Days in the Netherlands: What Expats Usually Do",
    description:
      "A practical guide to your first 30 days in the Netherlands. Learn the key admin, banking, insurance, and daily-life steps expats typically complete after arrival.",
  },
  "shipping-household-goods-netherlands": {
    title: "Shipping Household Goods to the Netherlands: Costs, Methods & Tips",
    description:
      "Learn how expats ship household goods to the Netherlands. Compare sea freight vs air freight, typical costs, timelines, customs considerations, and relocation services.",
  },
  "moving-to-netherlands-timeline": {
    title: "Moving to the Netherlands Timeline (Before You Move, Arrival, First 90 Days)",
    description:
      "Understand the typical timeline for moving to the Netherlands, including what expats usually prepare before departure, on arrival, and during the first 90 days.",
  },
} as const satisfies Record<string, { title: string; description: string; imagePath?: string }>;

export type NetherlandsGuideShareSlug = keyof typeof ENTRIES;

export function guideShareMetadata(slug: NetherlandsGuideShareSlug): Metadata {
  const e = ENTRIES[slug];
  const imagePath =
    "imagePath" in e && typeof (e as { imagePath?: unknown }).imagePath === "string"
      ? (e as { imagePath: string }).imagePath
      : undefined;
  return buildSocialMetadata({
    title: e.title,
    description: e.description,
    path: `/netherlands/${slug}/`,
    ogType: "article",
    ...(imagePath ? { imagePath } : {}),
  });
}

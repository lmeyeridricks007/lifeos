/**
 * Rule-based service category hints for the recommended-services block (editorial, not sponsored ranking).
 */

import { hasForeignLinkedIncome } from "./rules";
import type { DoubleTaxAwarenessInput, DoubleTaxAwarenessResult } from "./types";

export type ServiceCategoryCard = {
  id: string;
  title: string;
  whenYouNeedIt: string;
  whyItMatters: string;
};

export type ServiceRecommendationContext = {
  intro: string;
  categories: ServiceCategoryCard[];
  /** Registry category ids passed to `buildPageRecommendedProviderCards` per section. */
  taxAdvisorCategories: readonly string[];
  payrollCategories: readonly string[];
  relocationCategories: readonly string[];
  filingHelpCategories: readonly string[];
};

export function buildServiceRecommendationContext(
  input: DoubleTaxAwarenessInput,
  result: DoubleTaxAwarenessResult
): ServiceRecommendationContext {
  const dual = result.dualResidencyRisk !== "low";
  const foreign = hasForeignLinkedIncome(input);
  const remoteEmployer = input.toolMode === "remote_foreign_employer" || (input.employerInNl === "no" && input.mainWorkPhysicallyInNl !== "no");
  const moving = input.toolMode === "moving_to_netherlands";
  const propertyInv = input.incomeTypes.includes("rental_income_abroad") || input.incomeTypes.includes("dividends_investments");

  let intro =
    "Based on your inputs, these service types are often the most relevant next step. Ordering stays editorial (relevance-first), not pay-to-rank.";

  const categories: ServiceCategoryCard[] = [];

  if (dual || foreign || result.doubleTaxRiskLevel === "high") {
    categories.push({
      id: "tax-advisor",
      title: "Tax advisor (international / expat)",
      whenYouNeedIt: "Dual-residency signals, foreign income, or treaty relief questions.",
      whyItMatters: "They map filing scope, relief methods, and documentation for your specific countries and facts.",
    });
  }

  if (remoteEmployer || input.payrollInNl === "no") {
    categories.push({
      id: "payroll",
      title: "Cross-border payroll / employer support",
      whenYouNeedIt: "Foreign employer, Dutch workdays, or unclear withholding.",
      whyItMatters: "Payroll setup drives withholding; filing is separate and errors here create avoidable corrections.",
    });
  }

  if (moving || input.toolMode === "already_in_netherlands") {
    categories.push({
      id: "relocation",
      title: "Relocation / onboarding support",
      whenYouNeedIt: "Move timing touches BRP, bank, and employer coordination.",
      whyItMatters: "Keeps registration and employer timelines aligned with tax practicalities.",
    });
  }

  if (propertyInv || input.hasMajorForeignAssets === "yes") {
    categories.push({
      id: "filing-records",
      title: "Filing prep / records & bookkeeping support",
      whenYouNeedIt: "Foreign rental, investments, or many income lines.",
      whyItMatters: "Clean year packs make advisor time efficient and relief claims defensible.",
    });
  }

  if (!categories.length) {
    categories.push(
      {
        id: "tax-advisor",
        title: "Tax advisor",
        whenYouNeedIt: "Whenever facts are uncertain or your situation changed during the year.",
        whyItMatters: "A short review can confirm filing scope before deadlines.",
      },
      {
        id: "relocation",
        title: "Relocation support",
        whenYouNeedIt: "If the move timeline still affects work or registration.",
        whyItMatters: "Reduces admin gaps that show up later in tax questions.",
      }
    );
  }

  const taxAdvisorCategories = ["immigration-lawyers", "visa-consultants"] as const;
  const payrollCategories = ["relocation-services"] as const;
  const relocationCategories = ["relocation-agencies"] as const;
  const filingHelpCategories = ["immigration-lawyers", "visa-consultants", "relocation-services"] as const;

  if (dual && foreign) {
    intro =
      "Your scenario mixes residency signals and cross-border income — tax advisors and filing-oriented support are usually the first port of call.";
  } else if (remoteEmployer) {
    intro =
      "Foreign employer and Dutch work patterns often need payroll coordination plus tax filing clarity — we surface both types of help below.";
  } else if (moving) {
    intro =
      "You’re in a move-phase pattern — onboarding/relocation help pairs well with tax checks as you settle payroll and registration.";
  } else if (propertyInv) {
    intro =
      "Foreign property or investment lines usually mean stronger record-keeping and often tax-advisor review alongside filing prep.";
  }

  return {
    intro,
    categories: categories.slice(0, 4),
    taxAdvisorCategories,
    payrollCategories,
    relocationCategories,
    filingHelpCategories,
  };
}

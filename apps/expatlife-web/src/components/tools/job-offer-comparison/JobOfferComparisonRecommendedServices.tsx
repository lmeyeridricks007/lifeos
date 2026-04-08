"use client";

import Link from "next/link";
import { useMemo } from "react";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { JOB_OFFER_COMPARISON_TOOL_LINKS } from "@/src/content/tools/job-offer-comparison/content";
import {
  OFFER_COMPARISON_RECOMMENDED_SERVICES,
  type RecommendedServicesGroupId,
} from "@/src/content/tools/job-offer-comparison/config/offerComparisonRecommendedServices";
import type { JobOfferComparisonResult } from "@/src/lib/tools/job-offer-comparison/types";
import {
  buildPageRecommendedProviderCards,
  getDutchSalaryNetBankCards,
  getThirtyPercentRulingTaxAdvisorCards,
  type PageRecommendedProviderCard,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";

const RS = OFFER_COMPARISON_RECOMMENDED_SERVICES;

type ServiceGroup = {
  id: string;
  title: string;
  bestFor: string;
  cards: PageRecommendedProviderCard[];
};

function metaFor(id: RecommendedServicesGroupId): { title: string; bestFor: string } {
  const row = RS.groupMeta.find((g) => g.id === id);
  if (!row) throw new Error(`Missing recommended-services meta for id: ${id}`);
  return { title: row.title, bestFor: row.bestFor };
}

function buildBaseGroups(): ServiceGroup[] {
  const tax = metaFor("tax-ruling");
  const law = metaFor("employment-law");
  const rel = metaFor("relocation");
  const pay = metaFor("payroll");
  const bank = metaFor("banking");
  return [
    {
      id: "tax-ruling",
      title: tax.title,
      bestFor: tax.bestFor,
      cards: getThirtyPercentRulingTaxAdvisorCards(),
    },
    {
      id: "employment-law",
      title: law.title,
      bestFor: law.bestFor,
      cards: buildPageRecommendedProviderCards({
        categories: ["immigration-lawyers"],
        limit: 4,
        strategy: "round-robin",
      }),
    },
    {
      id: "relocation",
      title: rel.title,
      bestFor: rel.bestFor,
      cards: buildPageRecommendedProviderCards({
        categories: ["relocation-agencies", "relocation-services"],
        limit: 5,
        strategy: "round-robin",
      }),
    },
    {
      id: "payroll",
      title: pay.title,
      bestFor: pay.bestFor,
      cards: buildPageRecommendedProviderCards({
        categories: ["relocation-services"],
        limit: 4,
        strategy: "sequential",
      }),
    },
    {
      id: "banking",
      title: bank.title,
      bestFor: bank.bestFor,
      cards: getDutchSalaryNetBankCards().slice(0, 4),
    },
  ];
}

/** Built once per page load — provider lists are static; only sort order reacts to comparison result. */
const JOB_OFFER_SERVICE_GROUPS_BASE = buildBaseGroups();

function scoreServiceGroups(result: JobOfferComparisonResult): Map<string, number> {
  const offers = result.activeOffers;
  const minContract = Math.min(...offers.map((o) => o.structuredScores.contractQuality));
  const strongRisk = offers.some((o) => o.riskFlags.some((f) => f.severity === "strong"));
  const watchCount = offers.reduce((n, o) => n + o.riskFlags.filter((f) => f.severity === "watch").length, 0);
  const gap = result.topRecommendation.closeness.overallScoreGap;
  const close = result.topRecommendation.closeness.isCloseCall || gap <= 10;

  const expatInputsWeak = offers.some(
    (o) =>
      o.offer.thirtyPercentSupport === "no" ||
      o.offer.thirtyPercentSupport === "not_mentioned" ||
      o.offer.relocationSupport === "none" ||
      o.offer.visaSponsorship === "not_sure",
  );

  const foreignOrContractorHeavy = offers.some(
    (o) => o.offer.contractType === "remote_foreign" || o.offer.contractType === "contractor",
  );

  const scores = new Map<string, number>();
  for (const g of RS.groupMeta) {
    scores.set(g.id, 0);
  }

  scores.set("employment-law", (scores.get("employment-law") ?? 0) + (minContract < 52 || strongRisk ? 6 : 0) + (watchCount >= 4 ? 2 : 0));
  scores.set("tax-ruling", (scores.get("tax-ruling") ?? 0) + (expatInputsWeak ? 5 : 0) + (close ? 2 : 0));
  scores.set("relocation", (scores.get("relocation") ?? 0) + (expatInputsWeak ? 4 : 0) + (close ? 2 : 0));
  scores.set(
    "payroll",
    (scores.get("payroll") ?? 0) + (close ? 2 : 0) + (foreignOrContractorHeavy ? 4 : 0),
  );
  scores.set("banking", (scores.get("banking") ?? 0) + 1);

  return scores;
}

function buildContextHints(result: JobOfferComparisonResult): string[] {
  const offers = result.activeOffers;
  const minContract = Math.min(...offers.map((o) => o.structuredScores.contractQuality));
  const minExpat = Math.min(...offers.map((o) => o.structuredScores.expatSupport));
  const strongRisk = offers.some((o) => o.riskFlags.some((f) => f.severity === "strong"));
  const gap = result.topRecommendation.closeness.overallScoreGap;
  const close = result.topRecommendation.closeness.isCloseCall || gap <= 10;

  const hints: string[] = [];
  if (minContract < 52 || strongRisk) {
    hints.push(
      "Contract quality scores look pressured or strong risk flags fired — clause review and legal advice should be on your short list before you accept.",
    );
  }
  if (minExpat < 55) {
    hints.push(
      "Expat support scores are on the low side for at least one offer — tax, relocation, and payroll clarity often matter as much as a small gross gap.",
    );
  }
  if (close) {
    hints.push(
      `Overall fit is close (~${Math.round(gap)} point gap between top two) — re-check holiday allowance, bonus certainty, rent, and commute days; tiny input fixes can swap the winner.`,
    );
  }
  return hints;
}

export function JobOfferComparisonRecommendedServices({ result }: { result: JobOfferComparisonResult }) {
  const orderedGroups = useMemo(() => {
    const scores = scoreServiceGroups(result);
    return [...JOB_OFFER_SERVICE_GROUPS_BASE].sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0));
  }, [result]);

  const contextHints = useMemo(() => buildContextHints(result), [result]);

  return (
    <div className="space-y-8">
      {contextHints.length ? (
        <div className="rounded-2xl border border-copilot-primary/15 bg-copilot-surface p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] md:p-5">
          <p className="font-semibold text-copilot-text-primary">{RS.tailoredBlockTitle}</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed">
            {contextHints.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-copilot-text-secondary">{RS.tailoredFollowUpNote}</p>
        </div>
      ) : null}

      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.05] md:p-5">
        <p className="font-semibold text-copilot-text-primary">{RS.editorialShortlistTitle}</p>
        <p className="mt-2">{RS.editorialShortlistBody}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href={RS.servicesDirectoryHref} className="font-semibold text-copilot-primary hover:underline">
            {RS.servicesDirectoryLabel}
          </Link>
          <span className="text-copilot-text-secondary">·</span>
          <Link href={RS.housingGuidesHref} className="font-semibold text-copilot-primary hover:underline">
            {RS.housingGuidesLabel}
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 p-4 text-sm text-copilot-text-secondary">
        <p className="font-medium text-copilot-text-primary">{RS.refineNumbersTitle}</p>
        <p className="mt-1">
          {RS.refineNumbersLead}{" "}
          {JOB_OFFER_COMPARISON_TOOL_LINKS.map((t, i) => (
            <span key={t.href}>
              {i > 0 ? " · " : null}
              <Link href={t.href} className="font-semibold text-copilot-primary hover:underline">
                {t.label}
              </Link>
            </span>
          ))}
          .
        </p>
      </div>

      {orderedGroups.map((group) => (
        <section key={group.id} className="space-y-3">
          <h3 className="text-base font-semibold text-copilot-text-primary">{group.title}</h3>
          <p className="text-sm text-copilot-text-secondary">{group.bestFor}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.cards.map((service) => (
              <a
                key={`${group.id}-${service.name}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05] hover:ring-copilot-primary/[0.12]"
              >
                <p className="font-semibold text-copilot-text-primary">{service.name}</p>
                <p className="mt-1 text-sm text-copilot-text-secondary">{service.useFor}</p>
                <p className="mt-2 text-xs text-copilot-text-secondary">{service.priceRange ?? "Confirm current fees with provider."}</p>
                <span className="mt-2 inline-block text-sm font-medium text-copilot-primary">Open provider →</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <AffiliateDisclosure variant="copilot" text={RS.affiliateDisclosure} />
    </div>
  );
}

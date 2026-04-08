"use client";

import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { buildPageRecommendedProviderCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { buildServiceRecommendationContext } from "@/src/lib/tools/double-tax-awareness/serviceRecommendation";
import type { DoubleTaxAwarenessInput, DoubleTaxAwarenessResult } from "@/src/lib/tools/double-tax-awareness/types";

const BASE = "/netherlands";

const STATIC_GROUPS = [
  {
    id: "tax-advisors",
    title: "Tax advisors for internationals",
    bestFor: "Dual-residency review, treaty questions, and annual filing support.",
    cards: buildPageRecommendedProviderCards({
      categories: ["immigration-lawyers", "visa-consultants"],
      limit: 3,
      strategy: "round-robin",
    }),
  },
  {
    id: "payroll-support",
    title: "Payroll / employer support",
    bestFor: "Foreign-employer payroll setup and Dutch wage-tax coordination.",
    cards: buildPageRecommendedProviderCards({
      categories: ["relocation-services"],
      limit: 3,
      strategy: "sequential",
    }),
  },
  {
    id: "relocation-support",
    title: "Relocation / onboarding firms",
    bestFor: "Move support when tax admin and registration timing are connected.",
    cards: buildPageRecommendedProviderCards({
      categories: ["relocation-agencies"],
      limit: 3,
      strategy: "sequential",
    }),
  },
  {
    id: "filing-help",
    title: "Accounting / tax filing help",
    bestFor: "Practical return preparation and document pack organization.",
    cards: buildPageRecommendedProviderCards({
      categories: ["immigration-lawyers", "visa-consultants", "relocation-services"],
      limit: 3,
      strategy: "round-robin",
    }),
  },
];

type Props = {
  /** When both set, intro and category hints tailor to the scenario; otherwise editorial defaults. */
  input?: DoubleTaxAwarenessInput | null;
  result?: DoubleTaxAwarenessResult | null;
};

export function DoubleTaxAwarenessRecommendedServices({ input, result }: Props) {
  const dynamic =
    input && result ? buildServiceRecommendationContext(input, result) : null;

  const groups = dynamic
    ? [
        {
          id: "tax-advisors",
          title: "Tax advisors for internationals",
          bestFor: dynamic.categories.find((c) => c.id === "tax-advisor")?.whenYouNeedIt ?? STATIC_GROUPS[0].bestFor,
          cards: buildPageRecommendedProviderCards({
            categories: dynamic.taxAdvisorCategories,
            limit: 3,
            strategy: "round-robin",
          }),
        },
        {
          id: "payroll-support",
          title: "Payroll / employer support",
          bestFor: dynamic.categories.find((c) => c.id === "payroll")?.whenYouNeedIt ?? STATIC_GROUPS[1].bestFor,
          cards: buildPageRecommendedProviderCards({
            categories: dynamic.payrollCategories,
            limit: 3,
            strategy: "sequential",
          }),
        },
        {
          id: "relocation-support",
          title: "Relocation / onboarding firms",
          bestFor: dynamic.categories.find((c) => c.id === "relocation")?.whenYouNeedIt ?? STATIC_GROUPS[2].bestFor,
          cards: buildPageRecommendedProviderCards({
            categories: dynamic.relocationCategories,
            limit: 3,
            strategy: "sequential",
          }),
        },
        {
          id: "filing-help",
          title: "Accounting / tax filing help",
          bestFor: dynamic.categories.find((c) => c.id === "filing-records")?.whenYouNeedIt ?? STATIC_GROUPS[3].bestFor,
          cards: buildPageRecommendedProviderCards({
            categories: dynamic.filingHelpCategories,
            limit: 3,
            strategy: "round-robin",
          }),
        },
      ]
    : STATIC_GROUPS;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.05] md:p-5">
        <p className="font-semibold text-copilot-text-primary">How we rank services</p>
        <p className="mt-2">
          Ordering is based on editorial planning relevance for this tool flow (residency signals, filing complexity, payroll context), not pay-to-rank placement.
        </p>
        {dynamic ? (
          <p className="mt-2 font-medium text-copilot-text-primary">{dynamic.intro}</p>
        ) : (
          <p className="mt-2">
            Use this section when your scenario includes dual-residency signals, mixed payroll, foreign-source income, or self-employment across countries and you want practical filing support.
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href={`${BASE}/taxes/`} className="font-semibold text-copilot-primary hover:underline">
            Dutch taxes hub
          </Link>
          <span aria-hidden>·</span>
          <Link href={`${BASE}/services/`} className="font-semibold text-copilot-primary hover:underline">
            Full services directory
          </Link>
        </div>
      </div>

      {dynamic && dynamic.categories.length ? (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-copilot-text-primary">Most relevant help for this scenario</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {dynamic.categories.map((c) => (
              <article
                key={c.id}
                className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 text-sm shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
              >
                <p className="font-semibold text-copilot-text-primary">{c.title}</p>
                <p className="mt-1 text-copilot-text-secondary">
                  <span className="font-medium text-copilot-text-primary">When you need it: </span>
                  {c.whenYouNeedIt}
                </p>
                <p className="mt-1 text-copilot-text-secondary">
                  <span className="font-medium text-copilot-text-primary">Why it matters: </span>
                  {c.whyItMatters}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {groups.map((group) => (
        <section key={group.id} className="space-y-3">
          <h3 className="text-base font-semibold text-copilot-text-primary">{group.title}</h3>
          <p className="text-sm text-copilot-text-secondary">{group.bestFor}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.cards.map((service) => (
              <a
                key={`${group.id}-${service.name}-${service.url}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05] hover:ring-copilot-primary/[0.12]"
              >
                <p className="font-semibold text-copilot-text-primary">{service.name}</p>
                <p className="mt-1 text-sm text-copilot-text-secondary">{service.useFor}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Best for</p>
                <p className="text-sm text-copilot-text-primary">{group.bestFor}</p>
                <p className="mt-2 text-xs text-copilot-text-secondary">{service.priceRange ?? "Confirm current fees with provider."}</p>
                <span className="mt-2 inline-block text-sm font-medium text-copilot-primary">Open provider →</span>
              </a>
            ))}
          </div>
        </section>
      ))}
      <AffiliateDisclosure
        variant="copilot"
        text="Some links may include referral tracking. Editorial order in this block is relevance-first and not paid placement."
      />
      <p className="text-sm text-copilot-text-secondary">
        <Link href={`${BASE}/services/`} className="font-semibold text-copilot-primary hover:underline">
          Editorial policy and service directory
        </Link>
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { trackEmploymentTypeScenarioTool } from "@/lib/analytics/track";
import { buildPageRecommendedProviderCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { buildEmploymentScenarioServicePlan } from "@/src/lib/tools/employment-type-scenario/serviceRecommendation";
import type { EmploymentTypeScenarioResult } from "@/src/lib/tools/employment-type-scenario/types";
import { NL_BASE } from "@/src/content/tools/employment-type-scenario/content";

type Props = {
  result: EmploymentTypeScenarioResult | null;
  pageContext: string;
};

function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function EmploymentTypeScenarioRecommendedServices({ result, pageContext }: Props) {
  const plan = buildEmploymentScenarioServicePlan(result);

  return (
    <div className="space-y-8">
      {plan.elevatedRisk ? (
        <div
          className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-amber-950 ring-1 ring-amber-300/40 md:p-5"
          role="status"
        >
          <p className="font-semibold text-amber-950">Higher complexity in this run</p>
          <p className="mt-2 leading-relaxed">
            Several risk flags or many topics fired at once. Consider prioritising a contract review, immigration check-in, or tax
            conversation before you rely on headline income scores alone.
          </p>
        </div>
      ) : null}

      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.05] md:p-5">
        <p className="font-semibold text-copilot-text-primary">{plan.introTitle}</p>
        <p className="mt-2 leading-relaxed">{plan.introBody}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-copilot-text-secondary">Related tools</p>
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {plan.toolLinks.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="font-semibold text-copilot-primary hover:underline">
                {t.label} →
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2 border-t border-copilot-primary/10 pt-3">
          <Link href={`${NL_BASE}/services/`} className="text-sm font-semibold text-copilot-primary hover:underline">
            Full services directory
          </Link>
          <span className="text-copilot-text-secondary" aria-hidden>
            ·
          </span>
          <Link href={`${NL_BASE}/taxes/tax-advisors-netherlands/`} className="text-sm font-semibold text-copilot-primary hover:underline">
            Tax advisors guide
          </Link>
        </div>
      </div>

      {plan.groups.map((group) => {
        const registryCards = buildPageRecommendedProviderCards({
          categories: group.categories,
          limit: group.limit,
          strategy: group.strategy,
        });
        const cards = [...(group.prepend ?? []), ...registryCards, ...(group.append ?? [])];
        if (cards.length === 0) return null;
        return (
          <section key={group.id} className="space-y-3">
            <h3 className="text-base font-semibold text-copilot-text-primary">{group.title}</h3>
            <p className="text-sm text-copilot-text-secondary">{group.bestFor}</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((service) => {
                const external = isExternalUrl(service.url);
                const body = (
                  <>
                    <p className="font-semibold text-copilot-text-primary">{service.name}</p>
                    <p className="mt-1 text-sm text-copilot-text-secondary">{service.useFor}</p>
                    <p className="mt-2 text-xs text-copilot-text-secondary">
                      {service.priceRange ?? "Confirm current fees with provider."}
                    </p>
                    <span className="mt-2 inline-block text-sm font-medium text-copilot-primary">
                      {external ? "Open provider →" : "Open guide →"}
                    </span>
                  </>
                );
                const className =
                  "rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05] hover:ring-copilot-primary/[0.12]";
                const track = () =>
                  trackEmploymentTypeScenarioTool("employment_type_tool_service_clicked", {
                    service_name: service.name,
                    page_context: pageContext,
                    section: group.id,
                    lean: plan.lean,
                    elevated_risk: plan.elevatedRisk,
                  });
                if (external) {
                  return (
                    <a
                      key={`${group.id}-${service.name}-${service.url}`}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      onClick={track}
                    >
                      {body}
                    </a>
                  );
                }
                return (
                  <Link
                    key={`${group.id}-${service.name}-${service.url}`}
                    href={service.url}
                    className={className}
                    onClick={track}
                  >
                    {body}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
      <AffiliateDisclosure
        variant="copilot"
        text="Some links may include referral tracking. Editorial order in this block is relevance-first and not paid placement."
      />
    </div>
  );
}

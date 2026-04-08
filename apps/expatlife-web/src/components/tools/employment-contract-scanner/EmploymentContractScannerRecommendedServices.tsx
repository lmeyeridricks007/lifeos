"use client";

import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { buildPageRecommendedProviderCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { NL_BASE } from "@/src/content/tools/employment-contract-scanner/content";
import type { ContractScanResult } from "@/src/lib/tools/contract-scanner/types";
import { formatOverallConcernLabel } from "@/src/lib/tools/contract-scanner/parser";
import { trackContractScanner } from "@/lib/analytics/track";

const GROUPS = [
  {
    id: "employment-law",
    title: "Employment lawyers / contract review",
    bestFor: "Non-compete, client restrictions, repayment, penalty clauses, or unclear restrictive language.",
    categories: ["immigration-lawyers"] as const,
  },
  {
    id: "permits-mobility",
    title: "Visa & permit consultants",
    bestFor:
      "Sponsorship, recognised employer, or permit-linked role changes. If the contract only mentions the 30% facility, payroll setup is usually via your employer — use Belastingdienst for rules and the services directory if you need an independent tax advisor.",
    categories: ["visa-consultants"] as const,
  },
  {
    id: "relocation",
    title: "Relocation & onboarding support",
    bestFor: "Relocation repayment triggers, move timing, and employer-funded relocation packages.",
    categories: ["relocation-agencies", "relocation-services"] as const,
  },
] as const;

type Props = {
  result: ContractScanResult | null;
  pageContext: string;
};

export function EmploymentContractScannerRecommendedServices({ result, pageContext }: Props) {
  const concern = result ? formatOverallConcernLabel(result.overallConcern) : null;
  const restrictive = result?.findings?.some(
    (f) => f.category === "restrictive_clauses" && f.riskLabel === "potentially_restrictive"
  );
  const expatHeavy = result?.findings?.some((f) => f.category === "expat_immigration");

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.05] md:p-5">
        <p className="font-semibold text-copilot-text-primary">Editorial shortlist</p>
        <p className="mt-2">
          Ordering favours relevance to contract review and expat payroll — not paid placement. Compare scope and fees before engaging any provider.
        </p>
        {result ? (
          <p className="mt-2 font-medium text-copilot-text-primary">
            Your latest scan: <span className="text-copilot-text-secondary">{concern}</span>
            {restrictive ? " — restrictive clauses flagged; legal review may be worthwhile." : null}
            {expatHeavy && !restrictive ? " — expat / permit-linked topics detected; tax or immigration advisors may help." : null}
          </p>
        ) : (
          <p className="mt-2">Run a scan first; we will tailor the intro to your concern level when results are available.</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href={`${NL_BASE}/services/`} className="font-semibold text-copilot-primary hover:underline">
            Services directory
          </Link>
        </div>
      </div>

      {GROUPS.map((group) => (
        <section key={group.id} className="space-y-3">
          <h3 className="text-base font-semibold text-copilot-text-primary">{group.title}</h3>
          <p className="text-sm text-copilot-text-secondary">{group.bestFor}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buildPageRecommendedProviderCards({
              categories: [...group.categories],
              limit: 3,
              strategy: "round-robin",
            }).map((service) => (
              <a
                key={`${group.id}-${service.name}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackContractScanner("contract_scanner_service_clicked", {
                    page_context: pageContext,
                    section: group.id,
                    service_name: service.name,
                  })
                }
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

      <AffiliateDisclosure
        variant="copilot"
        text="Some provider links may include referral tracking. This block is editorially ordered for planning relevance."
      />
    </div>
  );
}

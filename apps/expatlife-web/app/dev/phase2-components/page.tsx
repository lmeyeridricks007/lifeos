import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PillarMainStack } from "@/components/page/pillar-template";
import { NextStepCTA, QuickAnswer, ToolPreviewCard, TrustBar } from "@/components/page";

/**
 * Internal preview for Phase 2 additive page components.
 * - Not linked from site navigation.
 * - `/dev/` is disallowed in `app/robots.ts`.
 * - Delete this folder when components are wired into real pages.
 */
export const metadata: Metadata = {
  title: "Phase 2 components (dev preview)",
  robots: { index: false, follow: false },
};

export default function DevPhase2ComponentsPreviewPage() {
  return (
    <main className="min-w-0 bg-slate-50 py-10 md:py-14">
      <Container>
        <header className="mb-12 max-w-3xl border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">
            Dev-only preview
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Phase 2 page components
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Manual review for QuickAnswer, TrustBar, ToolPreviewCard, and NextStepCTA. Remove{" "}
            <code className="rounded-md bg-slate-200/80 px-1.5 py-0.5 text-xs text-slate-800">
              app/dev/phase2-components/
            </code>{" "}
            after integration.
          </p>
        </header>

        <PillarMainStack className="mt-0 space-y-16 sm:mt-0 sm:space-y-16 md:mt-0 md:space-y-20">
          <section aria-labelledby="scenario-moving">
            <h2 id="scenario-moving" className="mb-4 scroll-mt-24 text-lg font-semibold text-slate-900">
              Scenario: Moving to the Netherlands
            </h2>
            <div className="flex flex-col gap-6">
              <QuickAnswer
                title="At a glance"
                summary="Most non-EU moves need a residence purpose (often work or family) before you can register and open everyday services."
                appliesTo={["Work-sponsored moves", "Family reunification", "Study (with conditions)"]}
                timeline="Often weeks to months depending on route and IND processing"
                costRange="IND fees, rent deposit, and insurance are common early cash needs"
                firstSteps={["Confirm your visa or permit route", "Line up BSN registration in your municipality"]}
                note="Timelines and costs change; use official IND and municipality sources for your case."
                primaryCta={{ label: "Main moving guide", href: "/netherlands/moving-to-the-netherlands/" }}
                secondaryCta={{ label: "Moving hub", href: "/netherlands/moving/hub/" }}
              />
              <TrustBar
                variant="footer"
                updatedDate="April 2026"
                reviewedNote="Reviewed against official IND and Dutch government guidance."
                methodologyLink={{ label: "Methodology", href: "/methodology/" }}
                disclosureLink={{ label: "Affiliate disclosure", href: "/affiliate-disclosure/" }}
                sourcesLink={{ label: "Editorial policy", href: "/editorial-policy/" }}
                attribution="ExpatCopilot editorial"
              />
            </div>
          </section>

          <section aria-labelledby="scenario-health">
            <h2 id="scenario-health" className="mb-4 scroll-mt-24 text-lg font-semibold text-slate-900">
              Scenario: Health insurance comparison
            </h2>
            <div className="flex flex-col gap-6">
              <QuickAnswer
                title="What to know first"
                summary="Basic health insurance (basisverzekering) is mandatory for most residents; you choose an insurer and can switch annually."
                appliesTo={["Residents who live/work in NL", "Most visa holders after registration"]}
                timeline="Usually arrange within months of becoming resident (avoid long gaps)"
                costRange="Premiums vary by insurer and year; check zorgtoeslag eligibility"
                firstSteps={["Compare basic package coverage", "Register with a provider after you have a Dutch address"]}
                note="This is general information, not insurance advice."
              />
              <TrustBar
                variant="inline"
                updatedDate="April 2026"
                methodologyLink={{ label: "How we rank services", href: "/how-we-rank-services/" }}
                disclosureLink={{ label: "Affiliate disclosure", href: "/affiliate-disclosure/" }}
              />
              <NextStepCTA
                title="Compare insurers on fit and premium"
                description="Start with the basics—network, reimbursement style, and English support—then narrow by price."
                supportingText="Best after you know your municipality and registration timeline."
                bullets={["Basic vs additional cover", "Switch windows and notice rules"]}
                primaryCta={{ label: "Health insurance hub", href: "/netherlands/services/health-insurance/" }}
                secondaryCta={{ label: "BSN and registration", href: "/netherlands/bsn-registration/" }}
                variant="emphasis"
              />
            </div>
          </section>

          <section aria-labelledby="scenario-amsterdam">
            <h2 id="scenario-amsterdam" className="mb-4 scroll-mt-24 text-lg font-semibold text-slate-900">
              Scenario: Amsterdam city page
            </h2>
            <div className="flex flex-col gap-6">
              <QuickAnswer
                title="City snapshot"
                summary="Amsterdam is a high-demand housing market; plan registration, insurance, and housing timelines early."
                appliesTo={["New arrivals to the capital region", "Renters and commuters"]}
                timeline="Housing search often dominates your first weeks"
                costRange="Rent and deposits are typically the largest early expense"
                firstSteps={["Secure housing or temporary address where allowed", "Book municipality registration if required"]}
              />
              <div className="grid gap-6 lg:grid-cols-2">
                <ToolPreviewCard
                  eyebrow="Tool"
                  title="City comparison"
                  description="Compare signals like cost pressure and commute trade-offs before you lock a neighbourhood."
                  highlights={["Side-by-side framing", "Links to deeper city guides"]}
                  status="coming_soon"
                  primaryCta={{ label: "Open tool" }}
                  secondaryCta={{ label: "Browse cities", href: "/netherlands/cities/" }}
                  accentIndex={2}
                  instanceId="city-compare-preview"
                />
                <ToolPreviewCard
                  eyebrow="Planner"
                  title="First 90 days"
                  description="Turn arrival tasks into a phased plan so utilities and registration don’t pile up."
                  highlights={["Phased tasks", "Dependency hints"]}
                  status="live"
                  primaryCta={{ label: "Open planner", href: "/netherlands/moving/tools/first-90-days/" }}
                  secondaryCta={{ label: "Amsterdam guide", href: "/netherlands/amsterdam/" }}
                  accentIndex={1}
                  instanceId="first-90-preview"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="scenario-checklist">
            <h2 id="scenario-checklist" className="mb-4 scroll-mt-24 text-lg font-semibold text-slate-900">
              Scenario: Moving checklist tool preview
            </h2>
            <div className="max-w-xl">
              <ToolPreviewCard
                eyebrow="Tool"
                title="Moving checklist"
                description="Break your move into phases with links to the next official steps—without replacing municipality or IND instructions."
                highlights={["Before travel, arrival, and first weeks", "Print-friendly flow on supported guides"]}
                status="live"
                primaryCta={{ label: "Open checklist", href: "/netherlands/moving/tools/moving-checklist/" }}
                secondaryCta={{ label: "Relocation cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" }}
                accentIndex={0}
              />
              <NextStepCTA
                className="mt-8"
                title="Budget the first year"
                description="Pair your checklist with a rough relocation budget so fees and deposits don’t surprise you."
                primaryCta={{ label: "Open cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" }}
                variant="default"
              />
            </div>
          </section>
        </PillarMainStack>
      </Container>
    </main>
  );
}

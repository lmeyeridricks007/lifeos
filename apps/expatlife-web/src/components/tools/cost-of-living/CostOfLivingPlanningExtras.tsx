"use client";

import Link from "next/link";
import { CardLink } from "@/components/ui/card-link";
import { trackCostOfLivingCalculator } from "@/lib/analytics/track";
import { Container } from "@/components/ui/container";
import { SectionBlock } from "@/components/page/pillar-template";
import { getPlanningShortlistByCategory } from "@/src/lib/calculators/cost-of-living/seed/providerShortlist";
import type { PlanningProviderSeed } from "@/src/lib/calculators/cost-of-living/seed/types";
import { cn } from "@/lib/cn";

const BASE = "/netherlands";

const SALARY_AND_TAX_TOOLS = [
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Need help estimating net after housing? Gross-to-net planning pairs with the monthly total above.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Want to see whether the facility could change affordability? Check norms separately from living-cost lines.",
  },
  {
    href: `${BASE}/work/tools/payslip-decoder/`,
    title: "Dutch payslip decoder",
    description: "Once payroll starts, map line items to the budget categories you modelled here.",
  },
  {
    href: `${BASE}/taxes/`,
    title: "Dutch taxes hub",
    description: "Light context on payroll and filing when salary targets are part of your move plan — not personalized advice.",
  },
] as const;

const CITY_COMPARE = [
  {
    href: `${BASE}/tools/city-comparison/`,
    title: "Netherlands city comparison tool",
    description: "Weighted compare of rent pressure, monthly anchors, commute, and lifestyle fit across shortlist cities.",
  },
  {
    href: `${BASE}/cities/`,
    title: "Compare Dutch cities",
    description: "Unsure how much rent is realistic by city? Start with city hubs before you lock numbers in the calculator.",
  },
  {
    href: `${BASE}/amsterdam/`,
    title: "Amsterdam expat hub",
    description: "Local context when Amsterdam is in the shortlist.",
  },
  {
    href: `${BASE}/rotterdam/`,
    title: "Rotterdam expat hub",
    description: "Often a lower rent anchor than Amsterdam — worth a deliberate comparison.",
  },
  {
    href: `${BASE}/the-hague/`,
    title: "The Hague expat hub",
    description: "International-city angle and commuting patterns that affect housing choice.",
  },
  {
    href: `${BASE}/living/rental-market/`,
    title: "Rental market guide",
    description: "Looking for housing? Demand, viewings, and timelines — why rent often dominates the monthly total.",
  },
] as const;

const FIRST_MONTHS = [
  {
    href: `${BASE}/first-30-days-netherlands/`,
    title: "First 30 days checklist",
    description: "Practical sequencing after arrival — overlaps with cash timing in this calculator.",
  },
  {
    href: `${BASE}/moving/working-in-the-netherlands/`,
    title: "Working in the Netherlands",
    description: "Bridge salary, payroll, permit, and housing questions when a job is driving the move.",
  },
  {
    href: `${BASE}/moving-checklist-netherlands/`,
    title: "Moving checklist (Netherlands)",
    description: "Broader move tasks alongside the monthly budget you are modelling here.",
  },
  {
    href: `${BASE}/health-insurance-netherlands/`,
    title: "Health insurance basics",
    description: "Mandatory basic cover timing — a fixed line in most expat monthly budgets.",
  },
  {
    href: `${BASE}/open-bank-account-netherlands/`,
    title: "Open a bank account",
    description: "Documentation and timing notes that affect your first-month cash flow.",
  },
] as const;

function ProviderCard({ p, className }: { p: PlanningProviderSeed; className?: string }) {
  const inner = (
    <>
      <p className="font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{p.name}</p>
      <p className="mt-1 text-sm text-copilot-text-secondary">{p.summary}</p>
      <p className="mt-2 text-xs text-copilot-text-secondary">
        <span className="font-medium text-copilot-text-primary">Often shortlists when:</span> {p.bestFor}
      </p>
      <p className="mt-1 text-xs text-copilot-text-secondary">{p.pricingNote}</p>
      <p className="mt-3 text-sm font-medium text-copilot-primary">
        {p.ctaLabel}
        <span aria-hidden> →</span>
      </p>
    </>
  );

  const cardClass = cn(
    "group block rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md",
    className
  );

  const track = () =>
    trackCostOfLivingCalculator("recommended_service_clicked", {
      service_name: p.name,
      provider_id: p.id,
      destination_url: p.href,
      section: "planning_shortlist",
      external: p.external,
    });

  if (p.external) {
    return (
      <a href={p.href} target="_blank" rel="noopener noreferrer" className={cardClass} onClick={track}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={p.href} className={cardClass} onClick={track}>
      {inner}
    </Link>
  );
}

export function CostOfLivingPlanningExtras() {
  const groups = getPlanningShortlistByCategory();

  return (
    <div className="space-y-6">
      <Container>
        <SectionBlock
          id="salary-tax-tools-col"
          title="Related tools for salary and tax planning"
          compact
          className="scroll-mt-28 pt-2 md:scroll-mt-32"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {SALARY_AND_TAX_TOOLS.map((a) => (
              <CardLink
                key={a.href}
                href={a.href}
                title={a.title}
                description={a.description}
                className="min-w-0 border-l-4 border-l-copilot-primary/40 bg-copilot-surface shadow-expatos-sm ring-1 ring-copilot-primary/[0.08]"
                onClick={() =>
                  trackCostOfLivingCalculator("related_tool_clicked", {
                    href: a.href,
                    title: a.title,
                    section: "salary_tax_tools",
                  })
                }
              />
            ))}
          </div>
        </SectionBlock>
      </Container>

      <Container>
        <SectionBlock
          id="planning-shortlist"
          title="Planning shortlist: common next steps"
          subtitle="Useful when setting up — not a ranking of “best” providers."
          compact
          className="scroll-mt-28 pt-2 md:scroll-mt-32"
        >
          <div className="space-y-8">
            {groups.map((g) => (
              <div key={g.category}>
                <h3 className="text-base font-semibold text-copilot-text-primary">{g.label}</h3>
                <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2">
                  {g.items.map((p) => (
                    <ProviderCard key={p.id} p={p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      </Container>

      <Container>
        <SectionBlock id="compare-cities-col" title="Compare cities before you choose" compact className="scroll-mt-28 pt-2 md:scroll-mt-32">
          <div className="grid gap-3 sm:grid-cols-2">
            {CITY_COMPARE.map((c) => (
              <CardLink
                key={c.href}
                href={c.href}
                title={c.title}
                description={c.description}
                className="min-w-0 border-l-4 border-l-blue-500/35 bg-copilot-bg-soft/80 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06]"
                onClick={() =>
                  trackCostOfLivingCalculator("related_tool_clicked", { href: c.href, title: c.title, section: "compare_cities" })
                }
              />
            ))}
          </div>
        </SectionBlock>
      </Container>

      <Container>
        <SectionBlock id="first-months-col" title="Useful for your first months" compact className="scroll-mt-28 pt-2 md:scroll-mt-32">
          <div className="grid gap-3 sm:grid-cols-2">
            {FIRST_MONTHS.map((c) => (
              <CardLink
                key={c.href}
                href={c.href}
                title={c.title}
                description={c.description}
                className="min-w-0 border-l-4 border-l-copilot-accent/40 bg-copilot-surface shadow-expatos-sm ring-1 ring-copilot-primary/[0.07]"
                onClick={() =>
                  trackCostOfLivingCalculator("related_tool_clicked", { href: c.href, title: c.title, section: "first_months" })
                }
              />
            ))}
          </div>
        </SectionBlock>
      </Container>
    </div>
  );
}

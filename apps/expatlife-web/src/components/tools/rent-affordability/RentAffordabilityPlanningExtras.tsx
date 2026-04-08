"use client";

import Link from "next/link";
import { CardLink } from "@/components/ui/card-link";
import { Container } from "@/components/ui/container";
import { SectionBlock } from "@/components/page/pillar-template";
import { trackRentAffordabilityCalculator } from "@/lib/analytics/track";

const BASE = "/netherlands";

const SALARY_AND_TAX = [
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Gross-to-net and net-to-gross with the same model family as this affordability page.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Eligibility and facility framing — separate from the planning-only uplift toggle here.",
  },
  {
    href: `${BASE}/work/tools/payslip-decoder/`,
    title: "Payslip decoder",
    description: "Decode real payroll lines once you start receiving Dutch payslips.",
  },
] as const;

const CITY_PILLS = [
  { href: `${BASE}/amsterdam/`, title: "Amsterdam" },
  { href: `${BASE}/rotterdam/`, title: "Rotterdam" },
  { href: `${BASE}/the-hague/`, title: "The Hague" },
  { href: `${BASE}/utrecht/`, title: "Utrecht" },
  { href: `${BASE}/eindhoven/`, title: "Eindhoven" },
  { href: `${BASE}/cities/`, title: "All city hubs" },
] as const;

export function RentAffordabilityPlanningExtras() {
  return (
    <Container className="space-y-8">
      <SectionBlock id="salary-tax-tools" title="Salary & tax tools" compact className="scroll-mt-28 pt-2 md:scroll-mt-32">
        <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm md:p-5">
          <p className="text-sm text-copilot-text-secondary">
            After you size rent, most people reconcile the story with payroll and tax tools — especially when an offer is gross-led but budgeting is net-led.
          </p>
          <ul className="mt-4 space-y-2">
            {SALARY_AND_TAX.map((x) => (
              <li key={x.href}>
                <CardLink
                  href={x.href}
                  title={x.title}
                  description={x.description}
                  onClick={() =>
                    trackRentAffordabilityCalculator("related_tool_clicked", {
                      href: x.href,
                      section: "planning_extras_salary_tax",
                    })
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      <SectionBlock id="compare-cities" title="Compare cities" compact className="scroll-mt-28 md:scroll-mt-32">
        <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm md:p-5">
          <p className="text-sm text-copilot-text-secondary">
            Rent is only one line — the full monthly picture depends on commute, childcare, and lifestyle. Use the cost-of-living calculator for side-by-side city bands, then jump back here with the income story that matches your job offer.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`${BASE}/money/tools/cost-of-living-calculator/`}
              className="inline-flex rounded-full border border-copilot-primary/20 bg-copilot-primary px-4 py-2 text-sm font-semibold text-white hover:bg-copilot-primary/90"
              onClick={() =>
                trackRentAffordabilityCalculator("related_tool_clicked", {
                  href: `${BASE}/money/tools/cost-of-living-calculator/`,
                  section: "compare_cities_col",
                })
              }
            >
              Open cost of living calculator →
            </Link>
            <Link
              href={`${BASE}/tools/city-comparison/`}
              className="inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft px-4 py-2 text-sm font-semibold text-copilot-primary hover:border-copilot-primary/30"
              onClick={() =>
                trackRentAffordabilityCalculator("related_tool_clicked", {
                  href: `${BASE}/tools/city-comparison/`,
                  section: "compare_cities_tool",
                })
              }
            >
              City comparison tool →
            </Link>
            {CITY_PILLS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft px-3 py-1.5 text-sm font-medium text-copilot-primary hover:border-copilot-primary/30"
                onClick={() =>
                  trackRentAffordabilityCalculator("related_tool_clicked", {
                    href: c.href,
                    section: "compare_cities_hub",
                  })
                }
              >
                {c.title} →
              </Link>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock id="planning-shortlist" title="Planning shortlist" compact className="scroll-mt-28 md:scroll-mt-32">
        <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm md:p-5">
          <ul className="list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
            <li>Book viewings only after you know your gross story for landlords and your net story for cash flow.</li>
            <li>Keep deposit + first month + fees in a separate bucket from recurring rent — the tool separates them on purpose.</li>
            <li>Re-run when childcare hours, car ownership, or neighborhood band changes — those swing the non-rent baseline fast.</li>
            <li>Export HTML or print when you want a snapshot for a partner or relocation coach.</li>
          </ul>
        </div>
      </SectionBlock>

      <SectionBlock id="first-months" title="First months in the Netherlands" compact className="scroll-mt-28 md:scroll-mt-32">
        <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm md:p-5">
          <p className="text-sm text-copilot-text-secondary">
            Move-in timing overlaps short-stay, deposits, and first bills. Pair this calculator with the{" "}
            <Link href={`${BASE}/moving-to-netherlands-cost/`} className="font-semibold text-copilot-primary hover:underline">
              cost of moving to the Netherlands
            </Link>{" "}
            guide and the{" "}
            <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="font-semibold text-copilot-primary hover:underline">
              relocation cost estimator
            </Link>{" "}
            so one-off move costs sit next to monthly rent planning.
          </p>
          <p className="mt-3 text-sm text-copilot-text-secondary">
            Timeline and documents: start from{" "}
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
              Moving to the Netherlands
            </Link>
            .
          </p>
        </div>
      </SectionBlock>
    </Container>
  );
}

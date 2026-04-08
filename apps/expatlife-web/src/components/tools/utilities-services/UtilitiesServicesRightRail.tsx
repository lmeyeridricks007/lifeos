"use client";

import Link from "next/link";
import { MoveToolSidebar } from "@/components/page/move-shell";
import type { TOCItem } from "@/components/content/PillarTOC";
import { cn } from "@/lib/cn";
import { trackUtilitiesServicesComparison } from "@/lib/analytics/track";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";

const BASE = "/netherlands";

const TOC: TOCItem[] = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results summary" },
  { id: "monthly-breakdown", label: "Monthly breakdown" },
  { id: "compare-fixed", label: "Compare vs fixed" },
  { id: "first-month-setup", label: "First-month setup" },
  { id: "move-in-checklist", label: "Move-in checklist" },
  { id: "scenario-comparison", label: "Scenario comparison" },
  { id: "what-surprises-expats", label: "What surprises expats" },
  { id: "methodology-inline", label: "How we estimate" },
  { id: "download-summary", label: "Download summary" },
  { id: "example-scenarios", label: "Worked examples" },
  { id: "seo-content", label: "Planning guide" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Start comparison", href: "#tool-inputs" },
  { label: "See monthly total", href: "#tool-results" },
  { label: "What to compare", href: "#compare-fixed" },
  { label: "First-month setup", href: "#first-month-setup" },
  { label: "Download summary", href: "#download-summary" },
];

const RELATED_TOOLS = [
  { href: `${BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator →" },
  { href: `${BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator →" },
  { href: `${BASE}/tools/city-comparison/`, label: "City comparison tool →" },
  { href: `${BASE}/cities/`, label: "Netherlands cities overview →" },
  { href: `${BASE}/family/tools/childcare-cost-estimator/`, label: "Childcare cost estimator →" },
  { href: `${BASE}/taxes/tools/healthcare-allowance-estimator/`, label: "Healthcare allowance estimator →" },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving checklist →" },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 days planner →" },
  { href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
  { href: `${BASE}/services/mobile-connectivity/`, label: "Mobile & internet services →" },
] as const;

export function UtilitiesServicesRightRail() {
  return (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={TOC} quickLinks={QUICK} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          {RELATED_TOOLS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-copilot-primary hover:underline"
                onClick={() =>
                  trackUtilitiesServicesComparison("related_tool_clicked", {
                    href: item.href,
                    section: "sidebar_related_tools",
                  })
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

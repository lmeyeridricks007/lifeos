"use client";

import Link from "next/link";
import { MoveToolSidebar } from "@/components/page/move-shell";
import type { TOCItem } from "@/components/content/PillarTOC";
import { cn } from "@/lib/cn";
import { trackChildcareEstimator } from "@/lib/analytics/track";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";

const BASE = "/netherlands";

const TOC: TOCItem[] = [
  { id: "at-a-glance", label: "What this page covers" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Childcare calculator" },
  { id: "tool-results", label: "Results" },
  { id: "monthly-childcare-cost", label: "Monthly childcare cost" },
  { id: "benefit-estimate", label: "Benefit estimate" },
  { id: "per-child-breakdown", label: "Per-child breakdown" },
  { id: "first-month-cash", label: "First-month cash" },
  { id: "work-decision-impact", label: "Work decision impact" },
  { id: "compare-scenarios", label: "Compare scenarios" },
  { id: "download-summary", label: "Download summary" },
  { id: "example-scenarios", label: "Worked examples" },
  { id: "seo-content", label: "How we estimate" },
  { id: "childcare-search-partners", label: "Childcare search partners" },
  { id: "childcare-relocation-partners", label: "Relocation + childcare help" },
  { id: "childcare-family-finances", label: "Banking & insurance picks" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Open calculator", href: "#tool-inputs" },
  { label: "Childcare search partners", href: "#childcare-search-partners" },
  { label: "See results", href: "#tool-results" },
  { label: "Compare scenarios", href: "#compare-scenarios" },
  { label: "First-month cash", href: "#first-month-cash" },
  { label: "Work decision view", href: "#work-decision-impact" },
  { label: "Download summary", href: "#download-summary" },
];

export function ChildcareRightRail() {
  return (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={TOC} quickLinks={QUICK} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          {(
            [
              { href: `${BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator →" },
              { href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
              { href: `${BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator →" },
              { href: `${BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator →" },
              { href: `${BASE}/tools/city-comparison/`, label: "City comparison tool →" },
              { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation cost estimator →" },
              { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 days planner →" },
              { href: `${BASE}/family/tools/`, label: "Family tools hub →" },
            ] as const
          ).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-copilot-primary hover:underline"
                onClick={() =>
                  trackChildcareEstimator("related_tool_clicked", {
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

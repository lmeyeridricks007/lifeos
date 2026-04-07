"use client";

import Link from "next/link";
import { MoveToolSidebar } from "@/components/page/move-shell";
import type { TOCItem } from "@/components/content/PillarTOC";
import { cn } from "@/lib/cn";
import { trackRentAffordabilityCalculator } from "@/lib/analytics/track";
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
  { id: "advanced-assumptions", label: "Advanced assumptions" },
  { id: "tool-results", label: "Results" },
  { id: "setup-costs", label: "Setup costs" },
  { id: "monthly-budget", label: "Monthly budget" },
  { id: "affordability-status", label: "Affordability vs target" },
  { id: "landlord-check", label: "Landlord screening" },
  { id: "salary-target", label: "Salary targets" },
  { id: "compare-scenarios", label: "Compare scenarios" },
  { id: "download-summary", label: "Download summary" },
  { id: "example-scenarios", label: "Example scenarios" },
  { id: "rent-affordability-guide", label: "Affordability guide" },
  { id: "seo-content", label: "Guide & methodology" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "related-guides", label: "Related guides" },
  { id: "salary-tax-tools", label: "Salary & tax tools" },
  { id: "planning-shortlist", label: "Planning shortlist" },
  { id: "compare-cities", label: "Compare cities" },
  { id: "first-months", label: "First months" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Start calculator", href: "#tool-inputs" },
  { label: "Advanced assumptions", href: "#advanced-assumptions" },
  { label: "See results", href: "#tool-results" },
  { label: "Landlord screening", href: "#landlord-check" },
  { label: "Compare scenarios", href: "#compare-scenarios" },
  { label: "Download summary", href: "#download-summary" },
  { label: "Setup costs", href: "#setup-costs" },
  { label: "Monthly budget", href: "#monthly-budget" },
  { label: "Salary targets", href: "#salary-target" },
];

const RELATED_TOOLS = [
  { href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
  { href: `${BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator →" },
  { href: `${BASE}/work/tools/payslip-decoder/`, label: "Payslip decoder →" },
] as const;

export function RentAffordabilityRightRail() {
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
                  trackRentAffordabilityCalculator("related_tool_clicked", {
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

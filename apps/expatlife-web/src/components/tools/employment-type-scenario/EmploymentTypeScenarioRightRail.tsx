"use client";

import Link from "next/link";
import { MoveToolSidebar } from "@/components/page/move-shell";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  EMPLOYMENT_TYPE_QUICK_LINKS,
  EMPLOYMENT_TYPE_RELATED_TOOLS,
  EMPLOYMENT_TYPE_TOC,
} from "@/src/content/tools/employment-type-scenario/content";

export function EmploymentTypeScenarioRightRail() {
  return (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={[...EMPLOYMENT_TYPE_TOC]} quickLinks={[...EMPLOYMENT_TYPE_QUICK_LINKS]} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          {EMPLOYMENT_TYPE_RELATED_TOOLS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-medium text-copilot-primary hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

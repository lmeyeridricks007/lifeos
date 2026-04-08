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
import { DOUBLE_TAX_QUICK_LINKS, DOUBLE_TAX_RELATED_TOOLS, DOUBLE_TAX_TOC } from "@/src/content/tools/double-tax-awareness/content";

export function DoubleTaxAwarenessRightRail() {
  return (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={[...DOUBLE_TAX_TOC]} quickLinks={[...DOUBLE_TAX_QUICK_LINKS]} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          {DOUBLE_TAX_RELATED_TOOLS.map((item) => (
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

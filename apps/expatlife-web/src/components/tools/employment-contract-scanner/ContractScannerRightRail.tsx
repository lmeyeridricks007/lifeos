"use client";

import Link from "next/link";
import { MoveToolSidebar } from "@/components/page/move-shell";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
  movingNlSidebarLinkChevronClass,
  movingNlSidebarLinkRowClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  CONTRACT_SCANNER_QUICK_LINKS,
  CONTRACT_SCANNER_RELATED_TOOLS,
  CONTRACT_SCANNER_TOC,
} from "@/src/content/tools/employment-contract-scanner/content";
import { trackContractScanner } from "@/lib/analytics/track";

export function ContractScannerRightRail({ pageContext }: { pageContext: string }) {
  return (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={[...CONTRACT_SCANNER_TOC]} quickLinks={[...CONTRACT_SCANNER_QUICK_LINKS]} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          {CONTRACT_SCANNER_RELATED_TOOLS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={movingNlSidebarLinkRowClass}
                onClick={() =>
                  trackContractScanner("contract_scanner_related_tool_clicked", {
                    page_context: pageContext,
                    destination_href: item.href,
                  })
                }
              >
                <span className="min-w-0">{item.label}</span>
                <span className={movingNlSidebarLinkChevronClass} aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

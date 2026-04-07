import Link from "next/link";
import { PillarTOC, type TOCItem } from "@/components/content/PillarTOC";
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

export type MoveToolSidebarQuickLink = { label: string; href: string };

export type MoveToolSidebarProps = {
  tocItems: TOCItem[];
  quickLinks?: MoveToolSidebarQuickLink[];
  className?: string;
};

/**
 * Soft rail aligned with JSON Move guides: `PillarTOC` (support tone) + optional quick actions.
 */
export function MoveToolSidebar({ tocItems, quickLinks, className }: MoveToolSidebarProps) {
  return (
    <nav className={cn("space-y-6", className)} aria-label="On this page">
      {tocItems.length > 0 ? <PillarTOC items={tocItems} tone="support" /> : null}
      {quickLinks && quickLinks.length > 0 ? (
        <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
          <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
          <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Quick actions</p>
          <ul className="relative z-[2] mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={movingNlSidebarLinkRowClass}>
                  <span className="min-w-0">{link.label}</span>
                  <span className={movingNlSidebarLinkChevronClass} aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

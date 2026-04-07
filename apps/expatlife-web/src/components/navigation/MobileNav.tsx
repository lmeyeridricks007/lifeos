"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavDrawer } from "./MobileNavDrawer";

type MobileNavProps = {
  drawerOpen: boolean;
  onDrawerOpen: () => void;
  onDrawerClose: () => void;
  onOpenSearch: () => void;
};

/**
 * Mobile header controls: hamburger (opens drawer), search icon (opens search overlay), CTA.
 * Shown below lg; desktop nav is shown at lg+.
 */
export function MobileNav({
  drawerOpen,
  onDrawerOpen,
  onDrawerClose,
  onOpenSearch,
}: MobileNavProps) {
  return (
    <div className="flex min-w-0 items-center gap-2 lg:hidden">
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Open search"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-raised text-foreground-muted shadow-card transition-colors duration-150 hover:border-border-strong hover:bg-surface-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <Search className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onDrawerOpen}
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-drawer"
        aria-label="Open menu"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-raised text-foreground-muted shadow-card transition-colors duration-150 hover:border-border-strong hover:bg-surface-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex min-w-0 max-w-[14rem] shrink gap-1.5 sm:max-w-none sm:gap-2">
        <Link href="/netherlands/moving-to-the-netherlands/" className="min-w-0 flex-1">
          <Button
            variant="secondary"
            className="h-11 w-full justify-center truncate px-2 text-[11px] font-semibold shadow-card sm:px-3 sm:text-xs"
          >
            Guide
          </Button>
        </Link>
        <Link href="/netherlands/moving/tools/moving-checklist" className="min-w-0 flex-1">
          <Button className="h-11 w-full justify-center truncate px-2 text-[11px] font-semibold shadow-card sm:px-3 sm:text-xs">
            Checklist
          </Button>
        </Link>
      </div>
      <MobileNavDrawer
        isOpen={drawerOpen}
        onClose={onDrawerClose}
        onOpenSearch={onOpenSearch}
      />
    </div>
  );
}

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
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        <Search className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onDrawerOpen}
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-drawer"
        aria-label="Open menu"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        <Menu className="h-5 w-5" />
      </button>
      <Link href="/netherlands/moving/tools/moving-checklist" className="min-w-0 shrink">
        <Button className="max-w-[9.5rem] truncate px-3 text-xs sm:max-w-none sm:px-4 sm:text-sm">Get a checklist</Button>
      </Link>
      <MobileNavDrawer
        isOpen={drawerOpen}
        onClose={onDrawerClose}
        onOpenSearch={onOpenSearch}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { getActiveNavKey, MEGA_MENUS, TOP_NAV } from "@/src/lib/nav/config";
import type { TopNavKey } from "@/src/lib/nav/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { MegaMenu } from "@/src/components/site/MegaMenu";
import { MobileNav } from "@/src/components/navigation/MobileNav";
import { MobileSearchOverlay } from "@/src/components/search/MobileSearchOverlay";
import { SearchFieldWithPreview } from "@/src/components/search/SearchFieldWithPreview";
import { shellHeaderToolsClass } from "@/lib/ui/shell";

const OPEN_DELAY_MS = 120;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [openKey, setOpenKey] = useState<TopNavKey | null>(null);
  const [openByClick, setOpenByClick] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const navTriggersRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = () => {
    setOpenKey(null);
    setOpenByClick(false);
  };

  useEffect(() => {
    closeMenu();
    setMobileDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openKey) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (navTriggersRef.current?.contains(target)) return;
      closeMenu();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        lastTriggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusable || focusable.length === 0) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openKey]);

  useEffect(() => {
    if (!openKey || openByClick) {
      return;
    }
    firstLinkRef.current?.focus();
  }, [openKey, openByClick]);

  const openViaHover = (key: TopNavKey) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    const delay = openKey ? 0 : OPEN_DELAY_MS;
    hoverTimerRef.current = setTimeout(() => {
      setOpenKey(key);
      setOpenByClick(false);
      hoverTimerRef.current = null;
    }, delay);
  };

  const activeMenu = openKey ? MEGA_MENUS[openKey] : null;
  const entries = useMemo(() => TOP_NAV, []);
  const activeNavKey = getActiveNavKey(pathname ?? "");

  return (
    <header className="sticky top-0 z-40 bg-surface-raised/95 pt-safe shadow-expatos-md backdrop-blur supports-[backdrop-filter]:bg-surface-raised/90">
      <div ref={headerRef} className="relative">
        <Container className="relative z-40 py-2.5 sm:py-3">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto] lg:gap-6 xl:gap-8">
            <div className="flex min-w-0 items-center gap-2 lg:min-h-10">
              <div className="flex min-w-0 flex-col justify-center gap-0">
                <Logo />
                <p className="hidden max-w-[14rem] truncate text-[10px] leading-tight text-slate-600 sm:block lg:max-w-none lg:whitespace-normal lg:text-[11px] lg:leading-snug">
                  Guidance for moving to the Netherlands
                </p>
              </div>
            </div>

            <div className="hidden min-w-0 justify-self-stretch lg:block">
              <nav
                ref={navTriggersRef}
                className="flex min-w-0 justify-center self-center overflow-x-visible overflow-y-visible"
                aria-label="Primary navigation"
              >
                {/*
                  Center column uses min-w-0; pill strip stays one row now that header CTAs are leaner.
                  Rare overflow: subtle horizontal scroll on very narrow viewports.
                */}
                <ul className="flex max-w-full flex-nowrap items-center justify-center gap-x-1 overflow-x-auto overflow-y-visible rounded-2xl border border-border/90 bg-surface-muted/90 p-1 shadow-inset sm:gap-x-1 sm:p-1.5 [scrollbar-width:thin]">
                {entries.map((entry) => {
                  const isOpen = openKey === entry.key;
                  const isActive = activeNavKey === entry.key;
                  return (
                    <li key={entry.key} className="shrink-0">
                      <button
                        type="button"
                        data-top-nav-key={entry.key}
                        aria-expanded={isOpen}
                        aria-current={isActive ? "true" : undefined}
                        aria-controls={isOpen ? "mega-menu-panel" : undefined}
                        aria-haspopup="dialog"
                        className={`flex min-h-11 items-center justify-center rounded-full px-2.5 py-2 text-xs font-semibold transition-[color,background-color,box-shadow] duration-150 lg:px-2.5 xl:px-3 xl:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                          isOpen
                            ? "bg-surface-raised text-foreground shadow-card ring-1 ring-border/30"
                            : isActive
                              ? "bg-brand-muted text-brand-strong shadow-sm ring-1 ring-brand/25"
                              : "text-foreground-muted hover:bg-surface-raised/90 hover:text-foreground"
                        }`}
                        onMouseEnter={() => openViaHover(entry.key)}
                        onFocus={() => openViaHover(entry.key)}
                        onClick={(event) => {
                          lastTriggerRef.current = event.currentTarget;
                          if (entry.href) {
                            closeMenu();
                            router.push(entry.href);
                            return;
                          }
                          if (openKey === entry.key) {
                            closeMenu();
                          } else {
                            setOpenKey(entry.key);
                            setOpenByClick(true);
                          }
                        }}
                      >
                        {entry.label}
                      </button>
                    </li>
                  );
                })}
                </ul>
              </nav>
            </div>

            <div className={`hidden shrink-0 items-center lg:flex ${shellHeaderToolsClass}`}>
              <SearchFieldWithPreview variant="header" />

              <Link
                href="/netherlands/moving/tools/moving-checklist"
                className="inline-flex shrink-0 items-center"
              >
                <Button className="h-11 min-w-[11rem] justify-center whitespace-nowrap px-5 shadow-card">
                  Get a checklist
                </Button>
              </Link>
            </div>

            <MobileNav
              drawerOpen={mobileDrawerOpen}
              onDrawerOpen={() => setMobileDrawerOpen(true)}
              onDrawerClose={() => setMobileDrawerOpen(false)}
              onOpenSearch={() => setMobileSearchOpen(true)}
            />
          </div>
        </Container>

        {activeMenu ? (
          <>
            <div
              ref={backdropRef}
              className="fixed inset-0 z-[39] bg-foreground/10 backdrop-blur-[2px] transition-opacity duration-150"
              aria-hidden
              onClick={closeMenu}
              onPointerDown={closeMenu}
            />
            <MegaMenu
              menu={activeMenu}
              panelRef={panelRef}
              firstLinkRef={firstLinkRef}
              onNavigate={closeMenu}
              pathname={pathname ?? ""}
            />
          </>
        ) : null}
      </div>
      <MobileSearchOverlay
        isOpen={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      />
    </header>
  );
}

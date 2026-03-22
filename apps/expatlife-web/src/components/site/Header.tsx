"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES, getActiveNavKey, MEGA_MENUS, TOP_NAV } from "@/src/lib/nav/config";
import { getCountryFromPath, replaceCountryInPath } from "@/src/lib/nav/country";
import type { CountrySlug, TopNavKey } from "@/src/lib/nav/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/input";
import { Logo } from "@/components/site/logo";
import { MegaMenu } from "@/src/components/site/MegaMenu";
import { MobileNav } from "@/src/components/navigation/MobileNav";
import { MobileSearchOverlay } from "@/src/components/search/MobileSearchOverlay";
import { SearchFieldWithPreview } from "@/src/components/search/SearchFieldWithPreview";

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
  const country = getCountryFromPath(pathname ?? "");
  const countryValue = country ?? "netherlands";

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

  const handleCountryChange = (nextCountry: CountrySlug) => {
    const nextPath = replaceCountryInPath(pathname ?? "/", nextCountry);
    router.push(nextPath);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 pt-safe backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div ref={headerRef} className="relative">
        <Container className="relative z-40 py-2 sm:py-3">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto] lg:gap-4">
            <div className="min-w-0">
              <Logo />
              <p className="hidden text-xs text-slate-500 sm:block">Guidance for moving to the Netherlands</p>
            </div>

            <nav ref={navTriggersRef} className="hidden justify-center lg:flex" aria-label="Primary navigation">
              <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
                {entries.map((entry) => {
                  const isOpen = openKey === entry.key;
                  const isActive = activeNavKey === entry.key;
                  return (
                    <li key={entry.key}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-current={isActive ? "page" : undefined}
                        aria-controls={isOpen ? "mega-menu-panel" : undefined}
                        aria-haspopup="dialog"
                        className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                          isOpen
                            ? "bg-white text-slate-900 shadow-sm"
                            : isActive
                              ? "bg-brand-50 text-brand-700 ring-1 ring-brand-600/20"
                              : "text-slate-600 hover:bg-white hover:text-slate-900"
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

            <div className="hidden items-center gap-2 lg:flex">
              <SearchFieldWithPreview variant="header" />

              <Select value={countryValue} onChange={(event) => handleCountryChange(event.target.value as CountrySlug)} className="w-44">
                {COUNTRIES.map((option) => (
                  <option key={option.slug} value={option.slug}>
                    {option.label}
                  </option>
                ))}
              </Select>

              <Link href="/netherlands/moving/tools/moving-checklist">
                <Button>Get a checklist</Button>
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
              className="fixed inset-0 z-[39]"
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

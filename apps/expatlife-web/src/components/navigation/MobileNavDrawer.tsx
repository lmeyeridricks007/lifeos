"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { COUNTRIES, getActiveNavKey, MEGA_MENUS, TOP_NAV } from "@/src/lib/nav/config";
import { getCountryFromPath, replaceCountryInPath } from "@/src/lib/nav/country";
import type { CountrySlug, TopNavKey } from "@/src/lib/nav/types";
import { isNavHrefActive } from "@/src/lib/nav/navItemModel";
import { Button } from "@/components/ui/button";
import { NavMenuItemRow } from "@/src/components/navigation/NavMenuItemRow";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
};

function topLevelActive(pathname: string, href: string | undefined): boolean {
  return isNavHrefActive(pathname, href);
}

export function MobileNavDrawer({ isOpen, onClose, onOpenSearch }: MobileNavDrawerProps) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const [expandedKey, setExpandedKey] = useState<TopNavKey | null>(null);
  const country = getCountryFromPath(pathname) ?? "netherlands";

  const handleCountryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const next = e.target.value as CountrySlug;
      const nextPath = replaceCountryInPath(pathname, next);
      router.push(nextPath);
    },
    [pathname, router]
  );

  useEffect(() => {
    if (!isOpen) setExpandedKey(null);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], select, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    first?.focus?.();

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        previouslyFocused?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusable?.length) return;
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", trap);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeNavKey = getActiveNavKey(pathname);

  const drawerContent = (
    <>
      <div
        className="fixed inset-0 z-[99] bg-foreground/20 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={cn(
          "fixed inset-0 right-0 top-0 z-[100] flex h-full min-h-[100dvh] w-full max-w-sm flex-col border-l border-border bg-surface-raised pt-safe shadow-popover",
          "pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]"
        )}
        style={{ left: "auto" }}
      >
        <div className="flex min-h-[3.25rem] shrink-0 items-center justify-between border-b border-border bg-surface-muted/30 px-4">
          <span className="text-sm font-semibold text-foreground">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-foreground-muted transition-colors duration-150 hover:bg-surface-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-4">
          <nav className="px-4" aria-label="Primary navigation">
            <ul className="space-y-1">
              {TOP_NAV.map((entry) => {
                const menu = MEGA_MENUS[entry.key];
                const hasSubmenu = menu.sections.length > 0;
                const isExpanded = expandedKey === entry.key;
                const isSectionActive = activeNavKey === entry.key;
                const fallbackHref = entry.href ?? "/netherlands";
                const fallbackActive = topLevelActive(pathname, fallbackHref);

                if (entry.href && !hasSubmenu) {
                  const active = topLevelActive(pathname, entry.href);
                  return (
                    <li key={entry.key} data-top-nav-key={entry.key}>
                      <Link
                        href={entry.href}
                        data-top-nav-key={entry.key}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block min-h-[44px] rounded-xl px-3 py-3 text-sm font-semibold leading-snug",
                          active ? "bg-brand-muted text-brand-strong shadow-sm ring-1 ring-brand/15" : "text-foreground hover:bg-surface-muted"
                        )}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={entry.key} data-top-nav-key={entry.key}>
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          data-top-nav-key={entry.key}
                          onClick={() => setExpandedKey(isExpanded ? null : entry.key)}
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-nav-${entry.key}`}
                          aria-current={isSectionActive ? "true" : undefined}
                          id={`mobile-nav-trigger-${entry.key}`}
                          className={cn(
                            "flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-inset",
                            isSectionActive
                              ? "bg-brand-muted text-brand-strong shadow-sm ring-1 ring-brand/15"
                              : "text-foreground hover:bg-surface-muted"
                          )}
                        >
                          {entry.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 shrink-0 text-foreground-faint transition-transform duration-150",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                        <div
                          id={`mobile-nav-${entry.key}`}
                          role="region"
                          aria-labelledby={`mobile-nav-trigger-${entry.key}`}
                          hidden={!isExpanded}
                          className="overflow-hidden"
                        >
                          <div className="border-l-2 border-brand/20 py-2 pl-3 pr-2">
                            {menu.sections.map((section) => (
                              <div key={section.title} className="mt-4 first:mt-0">
                                <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                                  {section.title}
                                </p>
                                <ul className="space-y-0.5" role="list">
                                  {section.items.map((navItem, i) => (
                                    <li key={`${section.title}-${navItem.label}-${i}`}>
                                      <NavMenuItemRow
                                        item={navItem}
                                        pathname={pathname}
                                        variant="mobile"
                                        onNavigate={onClose}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={fallbackHref}
                        data-top-nav-key={entry.key}
                        onClick={onClose}
                        aria-current={fallbackActive ? "page" : undefined}
                        className={cn(
                          "block min-h-[44px] rounded-xl px-3 py-3 text-sm font-semibold leading-snug",
                          fallbackActive
                            ? "bg-brand-muted text-brand-strong shadow-sm ring-1 ring-brand/15"
                            : "text-foreground hover:bg-surface-muted"
                        )}
                      >
                        {entry.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 border-t border-border px-4 pt-5">
            <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
              Country
            </label>
            <select
              value={country}
              onChange={handleCountryChange}
              className="mt-2 min-h-[44px] w-full rounded-xl border border-border bg-surface-raised px-3 py-2 text-base text-foreground shadow-card transition-colors duration-150 focus:border-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-sm"
              aria-label="Select country"
            >
              {COUNTRIES.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-col gap-2.5 px-4 pb-safe">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="flex min-h-[44px] items-center gap-2 rounded-xl border border-border bg-surface-muted px-3 py-3 text-left text-sm font-medium text-foreground-muted transition-colors duration-150 hover:border-border-strong hover:bg-surface-subtle hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              aria-label="Open search"
            >
              Search guides and tools
            </button>
            <Link href="/netherlands/moving-to-the-netherlands/" onClick={onClose}>
              <Button variant="secondary" className="w-full">
                Guide
              </Button>
            </Link>
            <Link href="/netherlands/moving/tools/moving-checklist" onClick={onClose}>
              <Button className="w-full">Get a checklist</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  if (typeof document === "undefined") return null;
  return createPortal(drawerContent, document.body);
}

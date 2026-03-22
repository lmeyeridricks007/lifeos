"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { COUNTRIES, MEGA_MENUS, TOP_NAV } from "@/src/lib/nav/config";
import { getCountryFromPath, replaceCountryInPath } from "@/src/lib/nav/country";
import type { CountrySlug, TopNavKey } from "@/src/lib/nav/types";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
};

function isItemActive(pathname: string, href: string | undefined): boolean {
  if (!href) return false;
  if (pathname === href) return true;
  if (href !== "/" && pathname.startsWith(href + "/")) return true;
  const pathSlug = pathname.split("/").filter(Boolean).pop() ?? "";
  const hrefSlug = href.split("/").filter(Boolean).pop() ?? "";
  if (pathSlug && pathSlug === hrefSlug && pathname.includes("/netherlands/")) return true;
  return false;
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

  const drawerContent = (
    <>
      <div
        className="fixed inset-0 z-[99] bg-slate-900/40 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={cn(
          "fixed inset-0 right-0 top-0 z-[100] flex h-full min-h-[100dvh] w-full max-w-sm flex-col border-l border-slate-200 bg-white pt-safe shadow-xl",
          "pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]"
        )}
        style={{ left: "auto" }}
      >
        <div className="flex min-h-[3.25rem] shrink-0 items-center justify-between border-b border-slate-200 px-4">
          <span className="text-sm font-semibold text-slate-900">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
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

                if (entry.href && !hasSubmenu) {
                  const active = isItemActive(pathname, entry.href);
                  return (
                    <li key={entry.key}>
                      <Link
                        href={entry.href}
                        onClick={onClose}
                        className={cn(
                          "block min-h-[44px] rounded-xl px-3 py-3 text-sm font-semibold leading-snug",
                          active ? "bg-brand-50 text-brand-700" : "text-slate-800 hover:bg-slate-100"
                        )}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={entry.key}>
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setExpandedKey(isExpanded ? null : entry.key)}
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-nav-${entry.key}`}
                          id={`mobile-nav-trigger-${entry.key}`}
                          className={cn(
                            "flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
                          )}
                        >
                          {entry.label}
                          <ChevronDown
                            className={cn("h-4 w-4 shrink-0 text-slate-500 transition", isExpanded && "rotate-180")}
                          />
                        </button>
                        <div
                          id={`mobile-nav-${entry.key}`}
                          role="region"
                          aria-labelledby={`mobile-nav-trigger-${entry.key}`}
                          hidden={!isExpanded}
                          className="overflow-hidden"
                        >
                          <ul className="border-l-2 border-slate-200 py-2 pl-4 pr-3">
                            {menu.sections.flatMap((section) =>
                              section.items.map((item, i) => {
                                const href = item.href;
                                const active = isItemActive(pathname, href);
                                const locked = item.disabled || !href;
                                return (
                                  <li key={`${section.title}-${item.label}-${i}`}>
                                    {locked ? (
                                      <span
                                        className="block min-h-[44px] cursor-not-allowed rounded-lg px-2 py-2.5 -mx-2 text-sm leading-snug text-slate-400"
                                        aria-disabled="true"
                                      >
                                        {item.label}
                                        {item.badge ? (
                                          <span className="ml-2 inline-flex rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">
                                            {item.badge}
                                          </span>
                                        ) : (
                                          <ComingSoonBadge className="ml-2 align-middle" />
                                        )}
                                      </span>
                                    ) : (
                                      <Link
                                        href={href}
                                        onClick={onClose}
                                        className={cn(
                                          "block min-h-[44px] rounded-lg px-2 py-2.5 -mx-2 text-sm leading-snug",
                                          active
                                            ? "font-semibold text-brand-700 bg-brand-50"
                                            : "text-slate-700 hover:bg-slate-100"
                                        )}
                                      >
                                        {item.label}
                                        {item.badge ? (
                                          <span className="ml-2 inline-flex rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">
                                            {item.badge}
                                          </span>
                                        ) : null}
                                      </Link>
                                    )}
                                  </li>
                                );
                              })
                            )}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={entry.href ?? "/netherlands"}
                        onClick={onClose}
                        className="block min-h-[44px] rounded-xl px-3 py-3 text-sm font-semibold leading-snug text-slate-800 hover:bg-slate-100"
                      >
                        {entry.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 border-t border-slate-200 px-4 pt-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Country
            </label>
            <select
              value={country}
              onChange={handleCountryChange}
              className="mt-2 min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 sm:text-sm"
              aria-label="Select country"
            >
              {COUNTRIES.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-col gap-2 px-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Open search"
            >
              Search guides and tools
            </button>
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

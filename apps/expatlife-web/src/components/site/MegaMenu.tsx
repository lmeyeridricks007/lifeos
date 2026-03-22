"use client";

import Link from "next/link";
import type { RefObject } from "react";
import type { MegaMenu as MegaMenuType, NavItem } from "@/src/lib/nav/types";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

/** True when pathname matches this menu link (same path or under it, or same guide slug). */
function isItemActive(pathname: string, href: string | undefined): boolean {
  if (!href) return false;
  if (pathname === href) return true;
  if (href !== "/" && pathname.startsWith(href + "/")) return true;
  const pathSlug = pathname.split("/").filter(Boolean).pop() ?? "";
  const hrefSlug = href.split("/").filter(Boolean).pop() ?? "";
  if (pathSlug && pathSlug === hrefSlug && pathname.includes("/netherlands/")) return true;
  return false;
}

function MegaMenuRow({
  entry,
  pathname,
  attachFirstLinkRef,
  firstLinkRef,
  onNavigate,
}: {
  entry: NavItem;
  pathname: string;
  attachFirstLinkRef?: boolean;
  firstLinkRef: RefObject<HTMLAnchorElement | null>;
  onNavigate: () => void;
}) {
  const active = isItemActive(pathname, entry.href);
  const isDisabled = entry.disabled || !entry.href;

  if (isDisabled) {
    return (
      <span
        className="block cursor-not-allowed rounded-lg py-2 px-2 -mx-2 text-sm text-slate-500"
        aria-disabled="true"
      >
        <span className="font-medium text-slate-600">{entry.label}</span>
        {entry.badge ? (
          <span className="ml-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
            {entry.badge}
          </span>
        ) : (
          <ComingSoonBadge className="ml-2 align-middle" />
        )}
      </span>
    );
  }

  return (
    <Link
      ref={attachFirstLinkRef ? firstLinkRef : undefined}
      href={entry.href}
      onClick={onNavigate}
      className={`block rounded-lg py-2 px-2 -mx-2 text-sm transition-colors hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-inset ${active ? "bg-slate-200/80 font-semibold text-slate-900" : "text-slate-700 focus:bg-blue-100"}`}
    >
      <span className="font-medium">{entry.label}</span>
      {entry.badge ? (
        <span className="ml-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
          {entry.badge}
        </span>
      ) : null}
    </Link>
  );
}

type MegaMenuProps = {
  menu: MegaMenuType;
  panelRef: RefObject<HTMLDivElement | null>;
  firstLinkRef: RefObject<HTMLAnchorElement | null>;
  onNavigate: () => void;
  pathname: string;
};

export function MegaMenu({ menu, panelRef, firstLinkRef, onNavigate, pathname }: MegaMenuProps) {
  const isToolsMenu = menu.key === "tools";
  let assignedFirstFocus = false;
  return (
    <div className="absolute inset-x-0 top-full z-50 pt-2">
      <div ref={panelRef} id="mega-menu-panel" role="dialog" aria-label={`${menu.label} menu`} className="mx-auto w-[90%] max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className={`grid gap-6 ${isToolsMenu ? "xl:grid-cols-[3.4fr_1fr_1fr]" : "xl:grid-cols-[3fr_1.1fr_1.1fr]"}`}>
            <div
              className={`grid gap-5 sm:grid-cols-2 ${isToolsMenu ? "xl:max-h-[65vh] xl:grid-cols-3 xl:overflow-y-auto xl:pr-2" : "xl:grid-cols-4 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"}`}
            >
              {menu.sections.map((section) => (
                <div
                  key={section.title}
                  className="min-w-0 rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                >
                  <h4 className="mb-3 border-b border-slate-200/80 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    {section.title}
                  </h4>
                  <ul className="space-y-0.5">
                    {section.items.map((entry, index) => {
                      const isLive = Boolean(entry.href) && !entry.disabled;
                      const attachFirstLinkRef = isLive && !assignedFirstFocus;
                      if (attachFirstLinkRef) assignedFirstFocus = true;
                      return (
                        <li key={`${section.title}-${entry.label}-${index}`}>
                          <MegaMenuRow
                            entry={entry}
                            pathname={pathname}
                            attachFirstLinkRef={attachFirstLinkRef}
                            firstLinkRef={firstLinkRef}
                            onNavigate={onNavigate}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Featured</p>
              <h4 className="mt-2 text-base font-semibold text-slate-900">{menu.featured?.label ?? `${menu.label} overview`}</h4>
              <p className="mt-2 text-sm text-slate-600">
                {menu.featured?.description ?? "Open the category overview first, then use grouped links to navigate deeper pages."}
              </p>
              {menu.featured?.href && !menu.featured.disabled ? (
                <Link
                  href={menu.featured.href}
                  onClick={onNavigate}
                  className="mt-4 inline-flex items-center rounded-lg px-2 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1"
                >
                  {menu.featured.label} -&gt;
                </Link>
              ) : (
                <Link
                  href="/netherlands/moving-to-the-netherlands/"
                  onClick={onNavigate}
                  className="mt-4 inline-flex items-center rounded-lg px-2 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1"
                >
                  Moving to the Netherlands -&gt;
                </Link>
              )}
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Tools</h4>
              <p className="mt-1 text-xs text-slate-600">Fast actions for deterministic planning.</p>
              <ul className="mt-3 space-y-2">
                {(menu.tools ?? []).map((tool, ti) => (
                  <li key={`${tool.label}-${ti}`}>
                    {tool.href && !tool.disabled ? (
                      <Link
                        href={tool.href}
                        onClick={onNavigate}
                        className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-inset"
                      >
                        {tool.label}
                      </Link>
                    ) : (
                      <span
                        className="block cursor-not-allowed rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-400"
                        aria-disabled="true"
                      >
                        {tool.label}
                        <ComingSoonBadge className="ml-2 align-middle" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/netherlands/tools/"
                onClick={onNavigate}
                className="mt-4 inline-flex items-center rounded-lg px-2 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1"
              >
                Open tools hub -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

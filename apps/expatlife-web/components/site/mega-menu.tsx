"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MegaMenuSection } from "@/config/nav";
import type { MutableRefObject } from "react";

type MegaMenuProps = {
  section: MegaMenuSection;
  onNavigate: () => void;
  panelRef: MutableRefObject<HTMLDivElement | null>;
};

export function MegaMenu({ section, onNavigate, panelRef }: MegaMenuProps) {
  return (
    <div className="absolute inset-x-0 top-full z-50 pt-2">
      <div ref={panelRef} role="dialog" aria-label={`${section.label} mega menu`} className="mx-auto w-[90%] max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
          <div className="grid gap-4 md:grid-cols-3">
            {section.groups.map((group) => (
              <div key={group.title} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <h4 className="text-sm font-semibold text-slate-900">{group.title}</h4>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        className="block rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-slate-900"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium">{link.title}</span>
                          {link.comingSoon ? <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">Soon</span> : null}
                        </div>
                        {link.description ? <p className="mt-1 text-xs text-slate-500">{link.description}</p> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-xl border border-brand-100 bg-gradient-to-br from-brand-50 to-cyan-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Featured</p>
              <h4 className="mt-2 text-base font-semibold text-slate-900">{section.label} hub</h4>
              <p className="mt-1 text-sm text-slate-600">Open the main section then branch into guides or tools.</p>
              <Link href={section.href} onClick={onNavigate} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Explore {section.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

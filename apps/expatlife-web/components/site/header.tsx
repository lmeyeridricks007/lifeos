"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { MEGA_MENU, NAV_ITEMS, type TopNavKey } from "@/config/nav";
import { useOriginCountry } from "@/hooks/use-origin-country";
import { originToChecklistRoute } from "@/lib/origin";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { MegaMenu } from "./mega-menu";

export function Header() {
  const pathname = usePathname();
  const { origin, origins, setOrigin } = useOriginCountry();
  const [openKey, setOpenKey] = useState<TopNavKey | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    if (!openKey) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !headerRef.current?.contains(target)) {
        setOpenKey(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenKey(null);
        lastTriggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openKey]);

  const openSection = openKey ? MEGA_MENU[openKey] : null;
  const checklistHref = useMemo(() => originToChecklistRoute(origin.slug), [origin.slug]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div ref={headerRef} className="relative">
        <Container className="py-3">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Logo />

            <nav className="hidden justify-center lg:flex" aria-label="Primary">
              <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
                {NAV_ITEMS.map((item) => {
                  const isOpen = openKey === item.key;
                  return (
                    <li key={item.key}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="dialog"
                        className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                          isOpen ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-900"
                        }`}
                        onMouseEnter={() => setOpenKey(item.key)}
                        onFocus={() => setOpenKey(item.key)}
                        onClick={(event) => {
                          lastTriggerRef.current = event.currentTarget;
                          setOpenKey((prev) => (prev === item.key ? null : item.key));
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden items-center gap-2 xl:flex">
              <Link href="/search" className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-slate-600 hover:bg-slate-50">
                <Search className="h-4 w-4" />
              </Link>
              <Select value={origin.slug} onChange={(event) => setOrigin(event.target.value)} className="w-52">
                {origins.map((item) => (
                  <option key={item.code} value={item.slug}>
                    {item.label}
                  </option>
                ))}
              </Select>
              <Link href={checklistHref}>
                <Button>Get a checklist</Button>
              </Link>
            </div>
          </div>
        </Container>

        {openSection ? <MegaMenu section={openSection} panelRef={panelRef} onNavigate={() => setOpenKey(null)} /> : null}
      </div>
    </header>
  );
}

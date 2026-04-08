"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Info } from "lucide-react";

/** Click-to-toggle info (same interaction pattern as the cost-of-living calculator). Portal avoids overflow clipping. */
export function ChildcareTip({ text, label = "More information" }: { text: string; label?: string }) {
  const id = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const measure = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ left: r.left + r.width / 2, top: r.top });
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setPos(null);
  }, []);

  const toggle = useCallback(() => {
    if (open) {
      close();
      return;
    }
    const el = btnRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      setPos({ left: r.left + r.width / 2, top: r.top });
    }
    setOpen(true);
  }, [close, open]);

  useEffect(() => {
    if (!open) return;
    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [open, measure]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      close();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const portal =
    open &&
    pos &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        ref={panelRef}
        id={id}
        role="tooltip"
        className="fixed box-border w-[min(calc(100vw-2rem),22rem)] rounded-xl border border-copilot-primary/15 bg-white px-3 py-2 text-left text-xs font-normal normal-case leading-snug tracking-normal text-copilot-text-primary shadow-expatos-md ring-1 ring-copilot-primary/[0.12]"
        style={{
          left: pos.left,
          top: pos.top,
          transform: "translate(-50%, calc(-100% - 10px))",
          zIndex: 10050,
        }}
      >
        {text}
      </div>,
      document.body
    );

  return (
    <span className="ml-0.5 inline-flex shrink-0 align-middle">
      {portal}
      <button
        ref={btnRef}
        type="button"
        className="inline-flex rounded-full p-0.5 text-copilot-primary/70 outline-none transition-colors hover:text-copilot-primary focus-visible:ring-2 focus-visible:ring-copilot-primary/40 focus-visible:ring-offset-1 focus-visible:ring-offset-copilot-bg-soft"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={`Help: ${label} (tap to open)`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
      >
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </button>
    </span>
  );
}

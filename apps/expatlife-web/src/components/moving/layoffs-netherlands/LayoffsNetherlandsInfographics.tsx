import { cn } from "@/lib/cn";

const FOUR_LENS_CAP =
  "Same news, four lanes — skim all four once, then go deep only where your situation needs it.";

/** Stable SVG defs (single instance per page; avoids `useId` so this file stays RSC-safe). */
const LENS = { h: "laynlLensH", v: "laynlLensV", m: "laynlLensM", l: "laynlLensL" } as const;
const PH_RAIL = "laynlPhRail";

/**
 * Mirrors `moveLayoffsSections.whatJobChangeAffects.blocks` labels:
 * employment, immigration/status, financial continuity, daily life & family.
 */
export function LayoffsFourLensesInfographic({ className }: { className?: string }) {
  const cols = [
    { fill: `url(#${LENS.h})`, title: "Employment", sub: "Contract · notice · access", c: "#0369a1" },
    { fill: `url(#${LENS.v})`, title: "Immigration / status", sub: "Permits · sponsor · gaps", c: "#4f46e5" },
    { fill: `url(#${LENS.m})`, title: "Financial continuity", sub: "Pay · benefits · rent math", c: "#b45309" },
    { fill: `url(#${LENS.l})`, title: "Daily life & family", sub: "Housing · care · schools", c: "#0f766e" },
  ] as const;

  return (
    <figure
      className={cn(
        "mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-sky-50/40 px-3 py-4 shadow-sm ring-1 ring-slate-900/[0.04] sm:px-5 sm:py-5",
        className
      )}
      aria-label="Four areas a layoff can affect at once: employment, stay, money, and daily life"
    >
      <svg viewBox="0 0 640 112" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id={LENS.h} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#0ea5e9" stopOpacity="0.12" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id={LENS.v} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#6366f1" stopOpacity="0.12" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id={LENS.m} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id={LENS.l} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#14b8a6" stopOpacity="0.12" />
            <stop offset="1" stopColor="#14b8a6" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[
          { x: 8, w: 148 },
          { x: 168, w: 148 },
          { x: 328, w: 148 },
          { x: 488, w: 148 },
        ].map((col, i) => {
          const c = cols[i]!;
          return (
            <g key={c.title}>
              <rect x={col.x} y="6" width={col.w} height="98" rx="14" fill={c.fill} stroke="#e2e8f0" strokeWidth="1" />
              <rect x={col.x + 12} y="16" width={col.w - 24} height="5" rx="2" fill={c.c} opacity="0.22" />
              <text
                x={col.x + col.w / 2}
                y="42"
                textAnchor="middle"
                fontFamily="system-ui,sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#0f172a"
              >
                {c.title}
              </text>
              <text
                x={col.x + col.w / 2}
                y="58"
                textAnchor="middle"
                fontFamily="system-ui,sans-serif"
                fontSize="9"
                fontWeight="500"
                fill="#64748b"
              >
                {c.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 px-1 text-center text-[11px] leading-snug text-slate-600 sm:text-xs">{FOUR_LENS_CAP}</figcaption>
    </figure>
  );
}

/** Same three phases as start-here cards, each with one concrete action (matches prose beside it). */
export function LayoffsThreePhasesRail({ className }: { className?: string }) {
  const phases = [
    { cx: 40, label: "Early signal", action: "Questions + PDF copies", fill: "#fef3c7", stroke: "#f59e0b", t: "#78350f", ta: "#92400e" },
    { cx: 160, label: "Role at risk", action: "Dates + who owns each topic", fill: "#e0f2fe", stroke: "#0ea5e9", t: "#0c4a6e", ta: "#075985" },
    { cx: 280, label: "Confirmed", action: "Real deadlines first", fill: "#ccfbf1", stroke: "#14b8a6", t: "#134e4a", ta: "#115e59" },
  ] as const;

  return (
    <figure className={cn("w-full max-w-xl shrink-0", className)} aria-label="Three phases: early signal, role at risk, confirmed — with what to do in each">
      <svg viewBox="0 0 320 88" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id={PH_RAIL} x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#fbbf24" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#0ea5e9" stopOpacity="0.4" />
            <stop offset="1" stopColor="#14b8a6" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path d="M40 20 H280" stroke={`url(#${PH_RAIL})`} strokeWidth="3" strokeLinecap="round" />
        {phases.map((p) => (
          <g key={p.label}>
            <circle cx={p.cx} cy="20" r="10" fill={p.fill} stroke={p.stroke} strokeWidth="1.5" />
            <text x={p.cx} y="46" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill={p.t}>
              {p.label}
            </text>
            <text x={p.cx} y="62" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="500" fill={p.ta}>
              {p.action}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

/**
 * Aligns with tools `journeyIntro`: split load across Move / Work / Money–Living clusters;
 * reminds to export proof before work access ends.
 */
export function LayoffsToolTracksInfographic({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200/80 bg-white px-3 py-3 shadow-sm ring-1 ring-slate-900/[0.03] sm:max-w-[240px]",
        className
      )}
      aria-label="Three tool tracks: move and stay, work and contracts, money and housing — plus saving documents outside work email"
    >
      <svg viewBox="0 0 200 124" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <text x="100" y="12" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="#475569" letterSpacing="0.06em">
          ONE AREA PER VISIT
        </text>
        {[
          { y: 22, c: "#e0f2fe", s: "#0ea5e9", t: "Move & stay", sub: "Permits · planners" },
          { y: 54, c: "#eef2ff", s: "#6366f1", t: "Work & contract", sub: "Payslips · clauses" },
          { y: 86, c: "#fff7ed", s: "#ea580c", t: "Money & home", sub: "Rent · bills · proof" },
        ].map((row) => (
          <g key={row.t}>
            <rect x="12" y={row.y} width="176" height="26" rx="8" fill={row.c} stroke={row.s} strokeWidth="1" opacity="0.92" />
            <text x="22" y={row.y + 12} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#0f172a">
              {row.t}
            </text>
            <text x="22" y={row.y + 22} fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="500" fill="#64748b">
              {row.sub}
            </text>
          </g>
        ))}
        <text x="100" y="120" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="600" fill="#0369a1">
          Save PDFs outside work email
        </text>
      </svg>
      <figcaption className="sr-only">
        Three bands: move and residence tools, work and contract tools, money and housing tools; export documents before portal access ends.
      </figcaption>
    </figure>
  );
}

const REASSURANCE_CAP_ID = "laynl-reassurance-graphic-cap";

/**
 * Same priorities as reassurance chips + checklist theme: clarify, written facts, sustainable pace.
 * Replaces a decorative photo with an on-page summary you can scan in seconds.
 */
export function LayoffsReassurancePrioritiesGraphic({ className }: { className?: string }) {
  const steps = [
    { n: "1", title: "Clarify early", body: "HR questions, payslips, permits — saved off work devices", bar: "#0ea5e9" },
    { n: "2", title: "Confirm in writing", body: "Last day, pay stop, who owns stay / payroll letters", bar: "#6366f1" },
    { n: "3", title: "One lane per week", body: "Stay, cash month, or housing — not all three every day", bar: "#14b8a6" },
  ] as const;

  return (
    <figure
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-4 lg:max-w-none",
        className
      )}
      aria-labelledby={REASSURANCE_CAP_ID}
    >
      <p id={REASSURANCE_CAP_ID} className="text-center text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        First weeks — keep it workable
      </p>
      <svg viewBox="0 0 260 168" className="mt-2 h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {steps.map((s, i) => {
          const y = 8 + i * 52;
          return (
            <g key={s.n} transform={`translate(0 ${y})`}>
              <rect x="0" y="0" width="4" height="44" rx="1" fill={s.bar} />
              <rect x="12" y="0" width="248" height="44" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
              <text x="28" y="18" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" fill="#0f172a">
                {s.n}. {s.title}
              </text>
              <text x="28" y="34" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="500" fill="#64748b">
                {s.body}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">Three priorities: clarify early with copies, get key facts in writing, and rotate one admin topic per week.</figcaption>
    </figure>
  );
}

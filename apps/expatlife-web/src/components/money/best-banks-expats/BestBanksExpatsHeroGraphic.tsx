import { cn } from "@/lib/cn";

/**
 * Inline SVG hero — bank cards, phone (digital), building (traditional), comparison arrows.
 * No raster assets; matches copilot-style flat illustration used on pillar pages.
 */
export function BestBanksExpatsHeroGraphic({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "relative m-0 w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/80 shadow-card ring-1 ring-slate-900/[0.04]",
        "aspect-[5/4] max-h-[min(260px,48vh)] sm:max-h-[min(300px,50vh)] md:aspect-[4/3] md:max-h-none",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 400 320" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bb-card-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="bb-card-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.08" />
          </linearGradient>
          <filter id="bb-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
          <marker id="bb-arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 Z" fill="#0ea5e9" fillOpacity="0.55" />
          </marker>
        </defs>

        {/* Building — traditional bank */}
        <g filter="url(#bb-soft)" transform="translate(32 48)">
          <rect x="0" y="40" width="72" height="168" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="10" y="52" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <rect x="28" y="52" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <rect x="46" y="52" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <rect x="10" y="78" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <rect x="28" y="78" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <rect x="46" y="78" width="14" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
          <path d="M36 40 L36 20 L54 8 L72 20 L72 40 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2" />
        </g>

        {/* Phone — digital */}
        <g filter="url(#bb-soft)" transform="translate(268 56)">
          <rect x="0" y="0" width="100" height="200" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <rect x="8" y="16" width="84" height="160" rx="10" fill="url(#bb-card-a)" />
          <rect x="18" y="32" width="64" height="10" rx="3" fill="#0d9488" fillOpacity="0.35" />
          <rect x="18" y="50" width="44" height="8" rx="2" fill="#0369a1" fillOpacity="0.25" />
          <rect x="18" y="68" width="64" height="36" rx="6" fill="#fff" fillOpacity="0.55" />
          <rect x="26" y="78" width="20" height="6" rx="2" fill="#0f766e" fillOpacity="0.4" />
          <rect x="26" y="88" width="48" height="4" rx="1" fill="#64748b" fillOpacity="0.35" />
          <circle cx="50" cy="184" r="4" fill="#475569" />
        </g>

        {/* Bank cards */}
        <g filter="url(#bb-soft)" transform="translate(120 96)">
          <rect x="0" y="0" width="148" height="92" rx="12" fill="#fff" stroke="#0ea5e9" strokeWidth="1.5" />
          <rect x="14" y="16" width="48" height="8" rx="3" fill="#0284c7" fillOpacity="0.2" />
          <rect x="14" y="32" width="120" height="6" rx="2" fill="#64748b" fillOpacity="0.25" />
          <rect x="14" y="44" width="96" height="6" rx="2" fill="#64748b" fillOpacity="0.18" />
          <rect x="14" y="62" width="32" height="18" rx="4" fill="url(#bb-card-b)" stroke="#94a3b8" />
        </g>

        <g filter="url(#bb-soft)" transform="translate(148 188)">
          <rect x="0" y="0" width="148" height="92" rx="12" fill="#fff" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="14" y="16" width="40" height="8" rx="3" fill="#0f766e" fillOpacity="0.22" />
          <rect x="14" y="32" width="110" height="6" rx="2" fill="#64748b" fillOpacity="0.22" />
          <rect x="14" y="44" width="72" height="6" rx="2" fill="#64748b" fillOpacity="0.15" />
          <circle cx="118" cy="70" r="10" fill="#0ea5e9" fillOpacity="0.15" stroke="#0ea5e9" strokeWidth="1" />
        </g>

        {/* Comparison arrows */}
        <path
          d="M108 140 H186"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
          markerEnd="url(#bb-arr)"
        />
        <path
          d="M196 214 H248 V128 H262"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
          fill="none"
          markerEnd="url(#bb-arr)"
        />
      </svg>
    </figure>
  );
}

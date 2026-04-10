import { cn } from "@/lib/cn";

/**
 * App-stack hero — phone, floating tiles, weather strip — matches Living / Move framed collage language.
 */
export function EssentialAppsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[11.5rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-violet-50/80 via-white to-sky-50/50 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:rounded-2xl sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-copilot-primary/[0.08] blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-sky-400/14 blur-3xl sm:h-48 sm:w-44" />
      <div className="pointer-events-none absolute left-[12%] top-8 h-px w-28 rotate-[-14deg] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[18%] top-11 h-px w-24 rotate-10 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "OV", hint: "Tap in / out" },
            { k: "Pay", hint: "Bank · Tikkie" },
            { k: "AH", hint: "Bonus · list" },
            { k: "Rain", hint: "Radar · commute" },
            { k: "Maps", hint: "Walk · bike" },
            { k: "Chat", hint: "WhatsApp" },
          ].map(({ k, hint }) => (
            <span
              key={k}
              title={hint}
              className="rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-3 sm:py-2">
          <svg
            viewBox="0 0 400 268"
            className="h-full max-h-[9.5rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ecoea-apps-sky" x1="32" y1="8" x2="360" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e0f2fe" stopOpacity="0.85" />
                <stop offset="0.45" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#ede9fe" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="ecoea-apps-phone" x1="200" y1="48" x2="268" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="ecoea-apps-tile" x1="56" y1="72" x2="120" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" stopOpacity="0.12" />
                <stop offset="1" stopColor="#22c55e" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <rect x="12" y="14" width="376" height="240" rx="18" fill="url(#ecoea-apps-sky)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.5" />

            {/* weather cue — cloud + drops (Dutch sky) */}
            <g opacity="0.9">
              <ellipse cx="318" cy="36" rx="22" ry="14" fill="#fff" stroke="#94a3b8" strokeWidth="0.8" />
              <ellipse cx="332" cy="34" rx="14" ry="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.6" />
              <path d="M308 52v6M318 54v8M328 52v7" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* floating tiles */}
            <g>
              <rect x="36" y="50" width="88" height="72" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.97" />
              <rect x="44" y="58" width="72" height="20" rx="5" fill="url(#ecoea-apps-tile)" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.25" />
              <text x="80" y="72" textAnchor="middle" fill="#312e81" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.04em">
                NS
              </text>
              <rect x="48" y="86" width="64" height="10" rx="3" fill="#e2e8f0" opacity="0.9" />
              <rect x="48" y="100" width="48" height="10" rx="3" fill="#e2e8f0" opacity="0.75" />
              <circle cx="74" cy="116" r="6" fill="#22c55e" opacity="0.35" />
            </g>

            <g transform="translate(0 6)">
              <rect x="132" y="38" width="92" height="78" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.95" />
              <rect x="140" y="46" width="76" height="22" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
              <text x="178" y="62" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                Tikkie
              </text>
              <rect x="144" y="76" width="68" height="8" rx="2" fill="#e5e7eb" />
              <rect x="144" y="88" width="52" height="8" rx="2" fill="#e5e7eb" opacity="0.85" />
            </g>

            <g>
              <rect x="48" y="146" width="86" height="70" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.92" />
              <rect x="56" y="154" width="70" height="24" rx="6" fill="#ecfdf5" stroke="#059669" strokeWidth="1" />
              <text x="91" y="170" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                AH
              </text>
              <rect x="60" y="184" width="62" height="8" rx="2" fill="#d1fae5" opacity="0.8" />
              <rect x="60" y="196" width="44" height="8" rx="2" fill="#d1fae5" opacity="0.65" />
            </g>

            {/* phone */}
            <g>
              <rect
                x="218"
                y="42"
                width="138"
                height="204"
                rx="22"
                fill="url(#ecoea-apps-phone)"
                stroke="#0f172a"
                strokeWidth="2.2"
              />
              <rect x="232" y="56" width="110" height="176" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="248" y="66" width="78" height="6" rx="3" fill="#e2e8f0" opacity="0.85" />
              <rect x="244" y="80" width="86" height="26" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
              <text x="262" y="98" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                9292
              </text>
              <rect x="244" y="112" width="86" height="26" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
              <text x="256" y="130" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                OVpay
              </text>
              <rect x="244" y="144" width="86" height="26" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
              <text x="258" y="162" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                Maps
              </text>
              {/* weather strip — mobile-first daily utility */}
              <rect x="244" y="176" width="86" height="22" rx="7" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="0.9" opacity="0.95" />
              <text x="287" y="190" textAnchor="middle" fill="#0369a1" fontSize="7" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.02em">
                Rain · 18 min
              </text>
              <rect x="244" y="204" width="86" height="22" rx="8" fill="#ecfccb" stroke="#65a30d" strokeWidth="1" />
              <text x="256" y="219" fill="#3f6212" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                TAP
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

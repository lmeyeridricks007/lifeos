"use client";

import { useId, useMemo } from "react";
import type { CityComparisonId } from "@/src/lib/tools/city-comparison/types";

const VB_W = 320;
const VB_H = 112;
const BASE_Y = VB_H - 8;

/** Sky gradients + building tint — decorative only, not geographic claims. */
const PALETTES: Record<CityComparisonId, readonly [string, string, string]> = {
  amsterdam: ["#1d4ed8", "#7c3aed", "rgba(255,255,255,0.28)"],
  rotterdam: ["#0e7490", "#1d4ed8", "rgba(255,255,255,0.24)"],
  "the-hague": ["#4338ca", "#2563eb", "rgba(255,255,255,0.26)"],
  utrecht: ["#c2410c", "#ea580c", "rgba(255,255,255,0.27)"],
  eindhoven: ["#047857", "#0d9488", "rgba(255,255,255,0.25)"],
  haarlem: ["#be185d", "#db2777", "rgba(255,255,255,0.26)"],
  delft: ["#1d4ed8", "#0ea5e9", "rgba(255,255,255,0.28)"],
  leiden: ["#7c2d12", "#b45309", "rgba(255,255,255,0.26)"],
  groningen: ["#15803d", "#22c55e", "rgba(255,255,255,0.22)"],
  amstelveen: ["#166534", "#15803d", "rgba(255,255,255,0.24)"],
  rotterdam_commuter_belt: ["#155e75", "#0369a1", "rgba(255,255,255,0.22)"],
  the_hague_commuter_belt: ["#3730a3", "#4f46e5", "rgba(255,255,255,0.23)"],
  other: ["#475569", "#64748b", "rgba(255,255,255,0.2)"],
};

function hashCity(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function skylineRects(id: CityComparisonId): { x: number; w: number; h: number }[] {
  const h = hashCity(id);
  const count = 7 + (h % 3);
  const rects: { x: number; w: number; h: number }[] = [];
  let x = 10;
  for (let i = 0; i < count; i++) {
    const w = 12 + ((h >> (i * 4)) & 0x11);
    const height = 28 + ((h >> (i * 5 + 2)) & 0x1d);
    rects.push({ x, w: Math.min(w, 38), h: Math.min(height, 78) });
    x += w + 2 + ((h >> i) & 3);
    if (x > VB_W - 16) break;
  }
  return rects;
}

type Props = {
  cityId: CityComparisonId;
  displayName: string;
};

/**
 * Lightweight SVG “postcard” per city — unique palette + generated skyline silhouette.
 */
export function CityAngleBanner({ cityId, displayName }: Props) {
  const gid = useId().replace(/:/g, "");
  const [c0, c1, building] = PALETTES[cityId] ?? PALETTES.other;
  const rects = useMemo(() => skylineRects(cityId), [cityId]);
  const sunCx = 255 + (hashCity(cityId) % 28);
  const sunCy = 22 + (hashCity(cityId + "s") % 12);

  return (
    <div className="relative w-full overflow-hidden bg-copilot-bg-soft">
      <span className="sr-only">{displayName} — decorative city skyline</span>
      <svg
        className="h-28 w-full md:h-32"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${gid}-sky`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c0} />
            <stop offset="100%" stopColor={c1} />
          </linearGradient>
          <linearGradient id={`${gid}-glow`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <rect width={VB_W} height={VB_H} fill={`url(#${gid}-sky)`} />
        <ellipse cx={sunCx} cy={sunCy} rx={28} ry={22} fill="rgba(255,255,255,0.14)" />
        <rect x="0" y={BASE_Y - 40} width={VB_W} height={48} fill={`url(#${gid}-glow)`} />
        {rects.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={BASE_Y - r.h}
            width={r.w}
            height={r.h}
            rx={1.5}
            fill={building}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth={0.5}
          />
        ))}
        <line
          x1="0"
          y1={BASE_Y}
          x2={VB_W}
          y2={BASE_Y}
          stroke="rgba(0,0,0,0.12)"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
}

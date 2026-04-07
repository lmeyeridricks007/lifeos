/**
 * Editorial / UX readiness for pages and nav targets.
 *
 * - `live` — full or flagship content; treat as the default “real” page.
 * - `planned` — on the roadmap; URL may exist in registries as non-linkable (see route registry `coming-soon`).
 * - `coming_soon` — scaffold or thin guide: route is safe to link; page explains rollout.
 * - `hidden` — omit from menus, hub listings, and similar surfaces.
 *
 * Orthogonal to `getRouteStatus()` (URL live vs registry placeholder vs hidden), which answers
 * “can we link here safely?”. Combine both when rendering menus vs topic pages.
 */
export type ContentPublishStatus = "live" | "planned" | "coming_soon" | "hidden";

const LEGACY_SCAFFOLD = new Set(["scaffold"]);
const LEGACY_FULL = new Set(["full"]);

/**
 * Normalizes JSON / legacy cluster values to `ContentPublishStatus`.
 */
export function parseContentPublishStatus(raw: string | undefined | null): ContentPublishStatus {
  if (raw == null || raw === "") return "coming_soon";
  if (raw === "live" || raw === "hidden" || raw === "planned" || raw === "coming_soon") {
    return raw;
  }
  if (LEGACY_FULL.has(raw)) return "live";
  if (LEGACY_SCAFFOLD.has(raw)) return "coming_soon";
  return "coming_soon";
}

export function isContentHidden(status: ContentPublishStatus): boolean {
  return status === "hidden";
}

/** Scaffold-style pages: linked in nav when route is live, copy explains depth. */
export function isComingSoonContent(status: ContentPublishStatus): boolean {
  return status === "coming_soon";
}

export function isLiveContent(status: ContentPublishStatus): boolean {
  return status === "live";
}

/** Label for compact UI (cards, search). */
export function contentStatusShortLabel(status: ContentPublishStatus): string | null {
  if (status === "coming_soon") return "Expanding";
  if (status === "planned") return "Planned";
  return null;
}

/**
 * Local bookmark/save state for editorial content pages.
 * Uses localStorage; can be wired to an account/save system later.
 */

const STORAGE_KEY = "expatlife_saved_pages";

export function getSavedPageIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isPageSaved(id: string): boolean {
  return getSavedPageIds().includes(id);
}

export function toggleSavedPage(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const ids = getSavedPageIds();
    const next = ids.includes(id)
      ? ids.filter((x) => x !== id)
      : [...ids, id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next.includes(id);
  } catch {
    return false;
  }
}

export function setSavedPage(id: string, saved: boolean): boolean {
  if (typeof window === "undefined") return false;
  try {
    const ids = getSavedPageIds();
    const next = saved
      ? ids.includes(id) ? ids : [...ids, id]
      : ids.filter((x) => x !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next.includes(id);
  } catch {
    return false;
  }
}

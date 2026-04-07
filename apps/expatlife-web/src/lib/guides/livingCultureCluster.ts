/**
 * Living + Culture cluster pages (scaffold guides). Source: `living-culture-cluster.json`.
 */
import clusterRegistry from "@/src/content/guides/netherlands/living-culture-cluster.json";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import {
  type ContentPublishStatus,
  isContentHidden,
  parseContentPublishStatus,
} from "@/src/lib/content/contentPublishStatus";

export type ClusterId = "living" | "culture";

export type ClusterPageType = "hub" | "guide" | "article" | "support";

/** Legacy JSON may still use `scaffold` / `full`; normalized at load time. */
export type ClusterContentStatusRaw = ContentPublishStatus | "scaffold" | "full";

export type ClusterRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export type ClusterPageEntry = {
  cluster: ClusterId;
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  breadcrumbLabel: string;
  section: "guides";
  clusterLabel: string;
  pageType: ClusterPageType;
  contentStatus: ContentPublishStatus;
  menuVisible: boolean;
  navGroup: string | null;
  intro: string;
  canonicalGuidePath: string | null;
  canonicalLabel: string | null;
  related: ClusterRelatedLink[];
};

type ClusterPageEntryRaw = Omit<ClusterPageEntry, "contentStatus"> & {
  contentStatus: ClusterContentStatusRaw;
};

const entries: ClusterPageEntry[] = (clusterRegistry.entries as ClusterPageEntryRaw[]).map((e) => ({
  ...e,
  contentStatus: parseContentPublishStatus(e.contentStatus),
}));

const byPath = new Map<string, ClusterPageEntry>();
for (const e of entries) {
  byPath.set(normalizeSitePath(e.path), e);
}

export function getAllLivingCultureClusterPaths(): string[] {
  return entries.map((e) => normalizeSitePath(e.path));
}

export function getClusterPageByPath(path: string): ClusterPageEntry | undefined {
  return byPath.get(normalizeSitePath(path));
}

export function getClusterHubEntry(cluster: ClusterId): ClusterPageEntry | undefined {
  return entries.find((e) => e.cluster === cluster && e.slug === "");
}

export function getClusterChildEntries(cluster: ClusterId): ClusterPageEntry[] {
  return entries.filter(
    (e) => e.cluster === cluster && e.slug !== "" && e.menuVisible && !isContentHidden(e.contentStatus)
  );
}

/** All child slugs for static params (includes hidden / menu-off). */
export function getClusterChildEntriesAll(cluster: ClusterId): ClusterPageEntry[] {
  return entries.filter((e) => e.cluster === cluster && e.slug !== "");
}

export function getClusterSlugsForStaticParams(cluster: ClusterId): string[] {
  return getClusterChildEntriesAll(cluster)
    .filter((e) => !isContentHidden(e.contentStatus))
    .map((e) => e.slug);
}

const GROUP_LABELS: Record<ClusterId, Record<string, string>> = {
  living: {
    housing: "Housing",
    utilities: "Utilities",
    "daily-life": "Daily life",
    "digital-life": "Digital life / admin-light",
  },
  culture: {
    workplace: "Workplace culture",
    social: "Social norms",
    traditions: "Traditions",
    "language-integration": "Language + integration",
  },
};

export function clusterNavGroupLabel(cluster: ClusterId, navGroup: string | null): string | null {
  if (!navGroup) return null;
  return GROUP_LABELS[cluster][navGroup] ?? navGroup;
}

export function clusterChildrenGrouped(cluster: ClusterId): { label: string; items: ClusterPageEntry[] }[] {
  const children = getClusterChildEntries(cluster);
  const order = Object.keys(GROUP_LABELS[cluster]);
  const map = new Map<string, ClusterPageEntry[]>();
  for (const c of children) {
    const g = c.navGroup ?? "other";
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(c);
  }
  const out: { label: string; items: ClusterPageEntry[] }[] = [];
  for (const key of order) {
    const items = map.get(key);
    if (items?.length) {
      out.push({ label: GROUP_LABELS[cluster][key] ?? key, items });
    }
  }
  for (const [key, items] of Array.from(map.entries())) {
    if (!order.includes(key) && items.length) {
      out.push({ label: key, items });
    }
  }
  return out;
}

import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarMainStack } from "@/components/page/pillar-template";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { isComingSoonContent, isLiveContent } from "@/src/lib/content/contentPublishStatus";
import type { ClusterPageEntry } from "@/src/lib/guides/livingCultureCluster";
import { clusterChildrenGrouped, clusterNavGroupLabel, getClusterHubEntry } from "@/src/lib/guides/livingCultureCluster";
import { getSiteOrigin } from "@/lib/site-origin";

type Props = {
  entry: ClusterPageEntry;
};

function pageTypeLabel(t: ClusterPageEntry["pageType"]): string {
  switch (t) {
    case "hub":
      return "Hub";
    case "guide":
      return "Guide";
    case "article":
      return "Article";
    case "support":
      return "Support";
    default:
      return "Page";
  }
}

export function ClusterTopicScaffold({ entry }: Props) {
  const baseUrl = getSiteOrigin();
  const hub = getClusterHubEntry(entry.cluster);
  if (!hub) return null;

  const hubPath = hub.path.endsWith("/") ? hub.path : `${hub.path}/`;
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: hub.breadcrumbLabel, item: new URL(hubPath, baseUrl).toString() },
    ...(entry.slug
      ? [{ name: entry.breadcrumbLabel, item: new URL(entry.path, baseUrl).toString() }]
      : []),
  ];

  const eyebrow = isComingSoonContent(entry.contentStatus)
    ? `${entry.clusterLabel} · Topic guide (expanding)`
    : entry.clusterLabel;

  const isHub = entry.pageType === "hub";

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <Section eyebrow={eyebrow} title={entry.title} subtitle={entry.metaDescription}>
        <PillarMainStack className="mt-0 space-y-6 pt-6 sm:pt-7 md:pt-8">
          <nav aria-label="Breadcrumbs" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span className="text-foreground-faint" aria-hidden>
              /
            </span>
            <Link href="/netherlands/" className="transition-colors hover:text-foreground">
              Netherlands
            </Link>
            <span className="text-foreground-faint" aria-hidden>
              /
            </span>
            <Link href={hubPath} className="transition-colors hover:text-foreground">
              {hub.breadcrumbLabel}
            </Link>
            {entry.slug ? (
              <>
                <span className="text-foreground-faint" aria-hidden>
                  /
                </span>
                <span className="text-foreground">{entry.breadcrumbLabel}</span>
              </>
            ) : null}
          </nav>

          {entry.navGroup ? (
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {clusterNavGroupLabel(entry.cluster, entry.navGroup)}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-pill border border-border/70 bg-surface-subtle px-2.5 py-0.5 font-medium text-foreground-muted">
              {pageTypeLabel(entry.pageType)}
            </span>
            {isComingSoonContent(entry.contentStatus) ? (
              <ComingSoonBadge label="Expanding" className="normal-case" />
            ) : isLiveContent(entry.contentStatus) ? (
              <span className="rounded-pill border border-border/70 bg-surface-subtle px-2.5 py-0.5 font-medium text-foreground-muted">
                Published
              </span>
            ) : null}
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{entry.intro}</p>

          {entry.canonicalGuidePath ? (
            <InfoBox title={entry.canonicalLabel ?? "Related deep guide"} variant="info">
              <p>
                This topic page orients you in the cluster; the longer guide with more detail lives on a dedicated
                article.
              </p>
              <div className="mt-3">
                <Link href={entry.canonicalGuidePath}>
                  <Button variant="secondary">Open guide</Button>
                </Link>
              </div>
            </InfoBox>
          ) : null}

          {isHub ? (
            <div className="space-y-8">
              {clusterChildrenGrouped(entry.cluster).map((group) => (
                <div key={group.label}>
                  <h2 className="text-base font-semibold text-foreground">{group.label}</h2>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className="block rounded-card border border-border/80 bg-surface-raised p-3 text-sm shadow-card ring-1 ring-inset ring-border/10 transition-colors hover:border-brand/20 hover:bg-surface-muted"
                        >
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="font-medium text-foreground">{item.breadcrumbLabel}</span>
                            {isComingSoonContent(item.contentStatus) ? (
                              <ComingSoonBadge label="Expanding" className="normal-case" />
                            ) : null}
                          </span>
                          <span className="mt-0.5 block text-xs text-foreground-muted">{item.metaDescription}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {!isHub && entry.related.length > 0 ? (
            <div>
              <h2 className="text-base font-semibold text-foreground">Related next steps</h2>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">
                {entry.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="block rounded-card border border-border/80 bg-surface-muted/80 p-3 text-sm ring-1 ring-inset ring-border/10 transition-colors hover:border-brand/20 hover:bg-surface-raised"
                    >
                      <span className="font-medium text-foreground">{r.label}</span>
                      {r.description ? (
                        <span className="mt-0.5 block text-xs text-foreground-muted">{r.description}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 border-t border-border/70 pt-6">
            <Link href={hubPath}>
              <Button variant="secondary">{hub.breadcrumbLabel} hub</Button>
            </Link>
            <Link href="/netherlands/moving-to-the-netherlands/">
              <Button variant="secondary">Moving to the Netherlands</Button>
            </Link>
            <Link href="/netherlands/tools/">
              <Button variant="secondary">Tools hub</Button>
            </Link>
          </div>
        </PillarMainStack>
      </Section>
    </>
  );
}

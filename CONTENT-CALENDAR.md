# Content calendar — merge anytime + publish flags (recommended)

You can keep things **simple**: maintain a **central link directory** (one or more JSON registries—guides, tools, articles, nav entries) with at least:

| Field | Purpose |
|--------|--------|
| **`publish`** | Hard switch: **`false`** = never show. **Omitted** or **`true`** = allowed if the date rule passes (backward compatible: existing rows stay public). |
| **`publishDate`** | **`YYYY-MM-DD`** (starts **00:00 UTC** that day) or full **ISO datetime**. Omitted = no date gate. Visible when **now ≥** that instant and `publish !== false`. |

Then **merge to `main` whenever you want**. No scheduled Git merges are required. The site decides **what to show** from flags + date, not from “is this commit on main yet.”

This document explains how that works, what you must wire up so it behaves correctly (not just hiding menu links), and how it compares to optional **scheduled merges**.

---

## Does this work?

**Yes.** It is a standard pattern: **content in repo + visibility rules in code**.

Operationally:

1. Add or edit pages, tools, and registry rows on **`main`** (or merge PRs whenever).
2. Set **`publish: false`** or a **future `publishDate`** until you are ready for public visibility.
3. Flip **`publish: true`** and set **`publishDate`** to the day (or instant) you want it to appear—**without** a new deploy if you only change data and the app reads it at request time (see [Caching](#caching-and-when-the-date-flips)).

---

## What “show” must mean (more than hiding links)

If you only hide links in the UI but the **route still renders** and the **URL is in `/sitemap.xml`**, search engines and direct visitors can still see “unpublished” content. For a clean model, use **one rule everywhere**:

**An item is “publicly visible” only if `publish !== false` and (no `publishDate` or now ≥ parsed `publishDate`).**

Apply that consistently to:

1. **Navigation and link lists** — footer, hubs, related links, HTML sitemap lists.
2. **XML sitemap** (`/sitemap.xml`) — omit URLs that fail the check so Google does not get a green light to index drafts.
3. **The page route itself** — if someone bookmarks `/netherlands/some-guide/`, the page should **`notFound()`** (404) or return **`noindex`** until the item is public. Otherwise the “directory” and the **actual page** disagree.

Internal **preview** (see below) can bypass the date check for trusted reviewers if you add something like **`?preview=secret`** plus auth or a Preview-only env—optional.

---

## Suggested shape of the “link directory”

You do not need a single giant file on day one, but **one conceptual directory** helps:

- **Guides:** extend `apps/expatlife-web/src/content/guides/netherlands/moving/registry.json` (or merge a shared `content-index.json` later).
- **Tools:** extend `apps/expatlife-web/src/content/tools/registry.json`.
- **Other surfaces:** any hard-coded arrays in `route-registry.ts` or nav data should eventually **read the same flags** or stay in sync manually.

Example row (illustrative):

```json
{
  "slug": "example-guide-slug",
  "path": "/netherlands/example-guide-slug/",
  "title": "Example",
  "description": "…",
  "publish": true,
  "publishDate": "2025-04-15"
}
```

**Timezone:** date-only values use **start of that calendar day in UTC** (`isPubliclyVisible` in `src/lib/publishing/isPubliclyVisible.ts`).

**`publish: false`** — never show, regardless of date (draft).  
**Omitted `publish` + future `publishDate`** — scheduled go-live (subject to [ISR](#caching-strategy-in-this-repo-8-hour-isr-no-isr-in-local-dev)).

### Implementation in this repo

- **Helper:** `apps/expatlife-web/src/lib/publishing/isPubliclyVisible.ts`, `registryPublishing.ts`
- **Registries:** optional `publish` / `publishDate` on rows in `src/content/guides/netherlands/moving/registry.json` and `src/content/tools/registry.json`; MDX moving guides: frontmatter in `packages/content/...` via `contentlayer.config.js`
- **Routing / links / sitemap:** `getRouteStatus` / `isRouteLive` in `src/lib/routes/routeStatus.ts` (used by `filterLiveInternalLinks`, nav, `collectLiveSitemapNormalizedPaths`)
- **404 for direct URLs:** `middleware.ts` (Netherlands paths) + `notFound()` in guide pages (`[...slug]`, `GuideBySlugPage`, `moving/guides/[slug]`)
- **Search index:** `src/lib/search/buildSearchIndex.ts` skips unpublished guides/tools
- **Preview bypass date only:** `CONTENT_PREVIEW=true`, `VERCEL_ENV=preview`, or `NEXT_PUBLIC_CONTENT_PREVIEW=true` (latter for client nav on preview)

---

## Performance impact of `publish` + `publishDate`

Evaluating two booleans/dates per registry row is **cheap** (microseconds) compared to rendering React and loading JSON. The meaningful tradeoffs are:

| Area | Effect |
|------|--------|
| **CPU per request** | Negligible: a few `Date` comparisons and lookups in data you already load for nav/sitemap. |
| **TTFB / caching** | With **ISR** (see below), most visitors still get **cached HTML**; only **revalidation** passes hit the server to re-run visibility logic. |
| **Build time** | Unchanged unless you add many new static paths; same number of routes. |
| **Sitemap** | `/sitemap.xml` is regenerated on the same **revalidate** interval, so crawlers see new URLs within that window—not instantly on every request. |

**Stale window:** After you flip `publish` or `publishDate`, public HTML and the XML sitemap can lag by up to one **revalidate** period unless you trigger **on-demand revalidation** (optional, more setup).

---

## Caching strategy in this repo (8-hour ISR, no ISR in local dev)

`apps/expatlife-web/lib/content-revalidate.ts` exports:

- **`CONTENT_REVALIDATE_SECONDS`** — `8 * 60 * 60` (production/preview stale-while-revalidate interval).
- **`CONTENT_REVALIDATE`** — use this for **`export const revalidate = …`** on pages and `sitemap.ts`. It resolves to **`0` when `NODE_ENV === "development"`** (`next dev`) so you do not sit behind a stale ISR cache locally, and to **`CONTENT_REVALIDATE_SECONDS`** in production and Vercel Preview builds.

**Wired today:** Every route under **`app/**/page.tsx`** plus **`app/sitemap.ts`** uses **`export const revalidate = CONTENT_REVALIDATE`**. API routes and other non-page modules are unchanged.

The 8h ISR window (in prod) bounds how long cached HTML/sitemap can lag after a registry edit until the next revalidation.

**Finer timing:** If you need **near-instant** go-live, shorten the constant, use **`dynamic = "force-dynamic"`** for specific segments (more origin hits), or add **on-demand revalidation** when registry JSON changes.

### Menu (header / mega menu) vs sitemaps

- **`/sitemap.xml` and `/sitemap/`** are **server** routes with **8h ISR**: on each revalidation they re-run `collectLiveSitemapNormalizedPaths()` / `filterLiveInternalLinks` and reload registry JSON from the **current deployment**. After you add **`publish` / `publishDate`**, wire those checks into the same helpers so both sitemaps stay aligned with guide visibility (within the 8h stale window).
- **Mega menu** (`Header` is a **client** component) builds from `src/lib/nav/config.ts`, which pulls in **`LIVE_PATHS`** via `getRouteStatus`. That graph is bundled for the browser at **build time**, so the menu updates on **each production deploy**, not on the same 8h tick as individual pages. For **time-only** go-live (`publishDate` passes without a new deploy), the menu can lag until you either **redeploy**, **move nav link resolution to the server** (pass props from an RSC layout with `revalidate`), or **fetch nav from a short-cache API**.

---

## Preview while `publish` is false or date is in the future

- **Vercel Preview** deployments: you can use an env like **`VERCEL_ENV=preview`** in layout/page logic to **ignore `publishDate`** (still require auth or secret token for anything sensitive), or always respect `publish`/`publishDate` on Preview too and use **draft PRs** only for QA.
- **Production:** always enforce **`publish` + `publishDate`** for sitemap, nav, and `notFound()`.

---

## How this relates to the current codebase

`publish` / `publishDate` are enforced as in [Implementation in this repo](#implementation-in-this-repo). **`LIVE_PATHS`** still lists registered URLs at build time; **`isRouteLive`** applies the schedule at runtime (and in the client nav bundle via the same JSON imports).

---

## Optional: scheduled merges (heavier, no app changes)

If you **do not** add `publish` / `publishDate` in the app, you can approximate a drip by **merging slices to `main` on a cron** (GitHub Actions). That avoids new visibility logic but adds **Git automation, branch queues, and preview discipline**. See **Appendix A** below if you ever want that path.

---

## Summary

| Approach | Merge to `main` | Scheduling |
|----------|------------------|------------|
| **Publish directory (recommended)** | Anytime | **`publish`** + **`publishDate`** evaluated on the server (+ sitemap + routes + cache strategy). |
| **Cron merges** | Bot merges batches | Time of go-live = merge time; no date fields in app. |

**Yes:** a link directory with **`publish`** and **`publishDate`**, with consistent checks for **links, sitemap, and direct URLs**, matches how you want to work—and is simpler day-to-day than scheduled Git merges once the plumbing exists.

---

## Appendix A — Scheduled automatic publishing (optional)

Use this only if you prefer **not** to add visibility fields and instead **control go-live by when code hits `main`.**

### Rhythm

- **Sprints:** batch content on a branch or labeled PRs.
- **Drip:** **GitHub Actions** `schedule` (cron in **UTC**) merges the next **N** PRs or cherry-picks from a queue branch.

### Preview

- **Vercel Preview** on the queue branch PR or per-article PRs before the bot merges.
- **`workflow_dispatch`** with **`dry_run: true`** to test merge selection without writing to `main`.

### Cron example (Tuesday / Friday 09:00 UTC)

```yaml
on:
  schedule:
    - cron: "0 9 * * 2"
    - cron: "0 9 * * 5"
  workflow_dispatch:
```

### Execution notes

- Grant **`permissions`** (`contents: write`, `pull-requests: write`) or use a **PAT** if branch protection blocks `GITHUB_TOKEN`.
- Use **`concurrency`** so two runs do not merge concurrently.
- **GitHub `schedule` is best-effort** and runs in **UTC** only.

This repo does not ship that workflow by default.

---

## Appendix B — Quick reference (files)

| Concern | File(s) |
|---------|---------|
| ISR (`CONTENT_REVALIDATE` / dev `0`) | `apps/expatlife-web/lib/content-revalidate.ts` |
| Moving guides registry | `apps/expatlife-web/src/content/guides/netherlands/moving/registry.json` |
| Tools registry | `apps/expatlife-web/src/content/tools/registry.json` |
| Live paths / sitemap input today | `apps/expatlife-web/src/data/site/route-registry.ts`, `src/lib/sitemap/liveSitemapPaths.ts`, `src/lib/routes/routeStatus.ts` |
| Deploy | [VERCEL.md](./VERCEL.md) |

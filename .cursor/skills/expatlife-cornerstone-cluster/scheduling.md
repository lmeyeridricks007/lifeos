# Cluster Go-Live Scheduling

Controls when new cluster pages become public on **Vercel production**. Local `next dev` always shows full pages in menu, sitemap, and routes (date bypass).

## User input

| User says | Behaviour |
|---|---|
| `Go live: 2026-08-14` / `Schedule for 14 August 2026` / `publishDate: 2026-08-14` | Schedule **all pages in this cluster batch** for that date |
| Per-page date in the page table | Schedule that page only; others follow cluster default or immediate |
| **No date** | Ship **live immediately** — do **not** add to `SCHEDULED_GUIDES` |

Normalize dates to `YYYY-MM-DD`. Public from **00:00 UTC** that day (`isPubliclyVisible`).

Do **not** invent future schedule dates. Do **not** apply the old “sequential future publishDate series” habit unless the user asked to schedule.

## Immediate live (default)

When no go-live date is provided:

1. Set model `publishDate` to today’s date (or the editorial date in the brief) — **not** a future gate.
2. Do **not** add the path to `apps/expatlife-web/src/lib/publishing/scheduledGuides.ts`.
3. Page metadata may omit `publishGate`, or use a date that is already past/today (no production hold).
4. Nav + `LIVE_PATHS` / route-registry as usual → production menu and sitemap include the page after deploy.

## Scheduled go-live (user provided a date)

For each scheduled page in the batch:

### 1. Registry (source of truth for the gate)

Add a row to `SCHEDULED_GUIDES` in:

`apps/expatlife-web/src/lib/publishing/scheduledGuides.ts`

```ts
{
  path: "/netherlands/money/banking/joint-accounts/",
  publishDate: "2026-08-14",
  title: "Joint bank accounts",
},
```

### 2. Page model

```ts
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const PAGE_PATH = "/netherlands/.../" as const;

// in page object:
publishDate: scheduledPublishDateForPath(PAGE_PATH) ?? "YYYY-MM-DD",
```

Keep the fallback identical to the registry date.

### 3. `page.tsx` metadata

Use `buildSocialMetadata` + `publishGate` so production stays noindex until live:

```ts
...buildSocialMetadata({
  title: seo.title,
  description: seo.description,
  path,
  ogType: "article",
  imagePath: hero.image.src,
  publishGate: { publish: true, publishDate },
}),
```

### 4. Nav + registry

Still add nav items and `EXTRA_LIVE_PATHS` / route-registry entries **now**.

Production before the date (automatic via existing plumbing):

- Menu → **Coming soon** (`getRouteStatus` → `coming-soon`)
- XML sitemap → omitted (`isRouteLive` false)
- URL → middleware **404**
- Local / Vercel Preview → full preview (date bypass)

### 5. Editorial linking

In related/hub/explore cards, keep peer `status: "live"` once `page.tsx` exists. Do **not** use model `comingSoon` for scheduling — the schedule registry owns production visibility.

## Pass into each page build

```
Go-live: {YYYY-MM-DD | immediate}
If scheduled: add SCHEDULED_GUIDES row; model publishDate via scheduledPublishDateForPath; page.tsx publishGate
If immediate: no SCHEDULED_GUIDES row; publishDate is today/editorial only
```

## Verify

- [ ] Scheduled paths present in `SCHEDULED_GUIDES` with the correct date
- [ ] Immediate paths **absent** from `SCHEDULED_GUIDES`
- [ ] Models sync publishDate from `scheduledPublishDateForPath` when scheduled
- [ ] `page.tsx` has `publishGate` when scheduled
- [ ] Local: pages open; menu links work
- [ ] Production simulation: `?preview=true` → coming soon / 404 before the date

## Reference implementation

Joint + Student bank accounts (go-live `2026-08-14`):

- `src/lib/publishing/scheduledGuides.ts`
- `src/lib/routes/routeStatus.ts` (scheduled → `coming-soon` before date)
- `middleware.ts` (scheduled → 404 before date)
- `src/lib/publishing/isPubliclyVisible.ts` (dev/preview bypass)

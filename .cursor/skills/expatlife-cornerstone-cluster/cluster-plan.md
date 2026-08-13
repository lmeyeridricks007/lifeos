# Cluster Plan Template

Fill this before building pages.

```
Cluster name: {e.g. Pharmacies Netherlands}
Pillar: {health|family|housing|life|education|jobs|money|…}
Parent hub: {existing path or "deferred"}
Menu section: {e.g. Living → Daily life / Healthcare}
Tone cluster: {practical / reassuring / …}
Go-live: {immediate | YYYY-MM-DD}   # from user; default immediate — never invent a future date

## Pages (build order)

| # | Topic | Title | Slug | Route | Boundary (1 line) | Go-live | Status |
|---|---|---|---|---|---|---|---|
| 1 | Pharmacies | Pharmacies in the Netherlands | pharmacies-netherlands | /netherlands/health/pharmacies-netherlands/ | How Dutch pharmacies work overall | (cluster) | building |
| 2 | … | … | … | … | … | (cluster) or YYYY-MM-DD | planned |

## Outside-cluster links (shared)

- GP → /netherlands/health/gp-netherlands/
- Emergency Healthcare → …
- Health Insurance → …
- {others}

## Differentiation rules

- Page A owns: …
- Page B owns: …
- Overlap allowed only as short orientation + cross-link

## Nav order

1. …
2. …

## Go-live / scheduling

- **Default:** `immediate` when the user did not give a date.
- **Scheduled:** when the user gave a date, set cluster Go-live to `YYYY-MM-DD` and follow [scheduling.md](scheduling.md) (`SCHEDULED_GUIDES` + publishGate).
- Per-page override only if the user listed different dates per page.
- Do **not** auto-assign a sequential future “publishDate series” unless the user asked to schedule.
```

## Build-order heuristics

1. **Orientation / flagship** page first (cluster hub article)
2. Then **high-traffic how-to** pages
3. Then **narrow specialist** pages
4. Update **existing siblings** for inbound links last (linking pass)

## Status values

- `live` — already in repo and shippable
- `building` — current cornerstone-page job
- `planned` — in this cluster, not started yet
- `deferred` — future cluster content, not in this batch

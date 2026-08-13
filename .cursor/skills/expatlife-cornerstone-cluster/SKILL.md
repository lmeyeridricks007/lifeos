---
name: expatlife-cornerstone-cluster
description: >-
  Orchestrates a multi-page ExpatLife SEO cornerstone cluster. Takes a named
  cluster plus page topics (optional go-live date), plans routes and content
  boundaries, builds each page via the expatlife-cornerstone-page skill/agent,
  then wires hub cards, related guides, explore-next, nav siblings, and path
  constants so linking works across the cluster. When a go-live date is given,
  schedules production visibility via scheduledGuides; when omitted, pages go
  live immediately. Use when the user asks to create a cluster, batch of
  cornerstone pages, content cluster, or "build these pages together".
---

# ExpatLife Cornerstone Cluster Builder

## Goal

Ship a coherent set of premium cornerstone guides as one cluster:

1. Plan the cluster (routes, order, differentiation, shared links, **go-live**)
2. Build each page with skill/agent `expatlife-cornerstone-page`
3. Pass **cluster linking** so every page knows its siblings
4. After all pages exist, run a **cluster linking pass** so related/hub/explore/nav are live and consistent
5. Apply **go-live scheduling** when the user provided a date (see [scheduling.md](scheduling.md))

## When invoked

User provides a cluster name + pages, e.g.:

```
Cluster: Pharmacies Netherlands
Pages:
- Pharmacies
- Finding a Pharmacy
- Prescriptions Netherlands
- Emergency Pharmacy
```

or:

```
Build healthcare cluster: Midwives, Pregnancy & Birth, Kraamzorg
Go live: 2026-09-01
```

### Go-live (required decision — do not invent dates)

| Input | Action |
|---|---|
| User gives a date (`Go live: …`, `Schedule for …`, `publishDate: YYYY-MM-DD`) | Schedule the batch for that date per [scheduling.md](scheduling.md) |
| Per-page dates in the plan table | Schedule those pages individually |
| **No date provided** | Ship **live immediately** — no `SCHEDULED_GUIDES` rows, no production hold |

Local preview always shows full pages; production enforces the schedule.

If cluster name or page list is missing, ask once. Do not invent a large cluster beyond what the user listed. Do **not** invent a future go-live date.

## Required reading

1. This skill
2. [cluster-plan.md](cluster-plan.md)
3. [linking.md](linking.md)
4. [scheduling.md](scheduling.md)
5. `.cursor/skills/expatlife-cornerstone-page/SKILL.md` (and its refs when building a page)
6. `apps/expatlife-web/src/lib/nav/config.ts` for menu placement / siblings
7. `apps/expatlife-web/src/lib/publishing/scheduledGuides.ts` when scheduling

## Workflow checklist

```
Cluster progress:
- [ ] 0. Cluster plan written (name, pillar, routes, build order, differentiation, go-live)
- [ ] 1. Existing siblings / hubs inventoried (paths + labels)
- [ ] 2. Shared path constants decided (export from a lead model or shared paths file if cluster needs it)
- [ ] 3. Page 1 built via expatlife-cornerstone-page (+ cluster context + go-live)
- [ ] 4. Page 2…N built the same way (sequential preferred)
- [ ] 5. Scheduling applied (SCHEDULED_GUIDES + publishGate) OR confirmed immediate
- [ ] 6. Cluster linking pass across all new + touched sibling models
- [ ] 7. Nav: one item per page, correct section, ordered sensibly, no duplicates
- [ ] 8. Route registry + nav tests for every new route
- [ ] 9. Final verify: every cross-link href exists; no editorial comingSoon for shipped peers
```

## Step 0 — Cluster plan

Write a short plan using [cluster-plan.md](cluster-plan.md):

- Cluster name + pillar (`health`, `family`, `housing`, …)
- Parent hub path (existing or deferred)
- **Go-live: `immediate` or `YYYY-MM-DD`** (from user; default immediate)
- For each page: topic, slug, route, title, 1-line boundary vs siblings, optional per-page go-live override
- Build order (hub/orientation pages first, then deep specialists)
- Shared related guides outside the cluster (GP, Insurance, etc.)
- Menu section + item order

Show the plan to the user only if they asked for plan-first; otherwise proceed.

## Step 1 — Inventory

Scan repo for:

- Existing pages already in this cluster
- Natural siblings to link (do not orphan the new set)
- Correct Living vs Culture menu placement
- Existing `SCHEDULED_GUIDES` rows if resuming a scheduled batch

## Steps 3–4 — Build each page

For **each** page in build order:

1. Invoke / follow `expatlife-cornerstone-page` end-to-end (brief → implement → six follow-ups).
2. Pass **cluster context** into that build (required):

```
Cluster: {name}
Pillar: {pillar}
This page: {topic} → {route}
Go-live: {immediate | YYYY-MM-DD}
Sibling pages in this cluster (build all; mark status):
- {Title} | {route} | {live|building|planned}
Content boundary for this page: {one line}
Must link to siblings in: relatedGuides, healthcareHub/hub cards, exploreNext, section cross-links
Do not mark live sibling routes as comingSoon
Export PATH constant for this page; reuse sibling PATH constants when they exist
If Go-live is a date: follow scheduling.md (SCHEDULED_GUIDES + scheduledPublishDateForPath + publishGate)
If Go-live is immediate: do not add SCHEDULED_GUIDES; publishDate is editorial/today only
```

3. Prefer **sequential** builds (one page fully done before the next) so later pages can link to live assets.
4. If using Task/subagents, launch `expatlife-cornerstone-page` per page with the cluster context above; do not skip follow-ups.

## Step 5 — Scheduling pass

After pages exist (or as each page ships), apply [scheduling.md](scheduling.md):

- Date given → registry + model sync + publishGate for every scheduled path
- No date → confirm no accidental `SCHEDULED_GUIDES` rows for this batch

## Step 6 — Cluster linking pass

After all listed pages are built, run [linking.md](linking.md):

- Every cluster page lists every other live cluster page in related guides / hub / explore-next as appropriate
- Shared `*_PATH` constants imported or duplicated consistently (prefer single source of truth)
- Replace editorial `comingSoon` / `#anchor` stubs that now have live routes (scheduling is separate from model status)
- Update older sibling guides outside the cluster that should point into the new set (low-risk link updates only)
- Menu order matches the plan
- Hub cards describe distinct jobs (no duplicate blurbs)

## Steps 7–9 — Verify

- All new routes in `route-registry.ts`
- Nav tests cover active state for each new href
- No model `src` pointing at missing images
- Spot-check: from page A, links to B and C resolve
- Scheduling: local preview works; `?preview=true` matches production hold when scheduled

## Output to user

Report:

- Cluster name + routes shipped
- **Go-live: immediate or YYYY-MM-DD** (and any per-page overrides)
- Build order used
- Cross-link matrix summary (who links to whom)
- Menu section + order
- Deferred future pages (names only)
- Any pages skipped because they already existed (and whether they were upgraded for linking)

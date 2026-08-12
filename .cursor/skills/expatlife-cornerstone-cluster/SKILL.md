---
name: expatlife-cornerstone-cluster
description: >-
  Orchestrates a multi-page ExpatLife SEO cornerstone cluster. Takes a named
  cluster plus page topics, plans routes and content boundaries, builds each
  page via the expatlife-cornerstone-page skill/agent, then wires hub cards,
  related guides, explore-next, nav siblings, and path constants so linking
  works across the cluster. Use when the user asks to create a cluster, batch
  of cornerstone pages, content cluster, or "build these pages together".
---

# ExpatLife Cornerstone Cluster Builder

## Goal

Ship a coherent set of premium cornerstone guides as one cluster:

1. Plan the cluster (routes, order, differentiation, shared links)
2. Build each page with skill/agent `expatlife-cornerstone-page`
3. Pass **cluster linking** so every page knows its siblings
4. After all pages exist, run a **cluster linking pass** so related/hub/explore/nav are live and consistent

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
```

If cluster name or page list is missing, ask once. Do not invent a large cluster beyond what the user listed.

## Required reading

1. This skill
2. [cluster-plan.md](cluster-plan.md)
3. [linking.md](linking.md)
4. `.cursor/skills/expatlife-cornerstone-page/SKILL.md` (and its refs when building a page)
5. `apps/expatlife-web/src/lib/nav/config.ts` for menu placement / siblings

## Workflow checklist

```
Cluster progress:
- [ ] 0. Cluster plan written (name, pillar, routes, build order, differentiation)
- [ ] 1. Existing siblings / hubs inventoried (paths + labels)
- [ ] 2. Shared path constants decided (export from a lead model or shared paths file if cluster needs it)
- [ ] 3. Page 1 built via expatlife-cornerstone-page (+ cluster context)
- [ ] 4. Page 2…N built the same way (sequential preferred)
- [ ] 5. Cluster linking pass across all new + touched sibling models
- [ ] 6. Nav: one item per page, correct section, ordered sensibly, no duplicates
- [ ] 7. Route registry + nav tests for every new route
- [ ] 8. Final verify: every cross-link href exists; no comingSoon for live cluster peers
```

## Step 0 — Cluster plan

Write a short plan using [cluster-plan.md](cluster-plan.md):

- Cluster name + pillar (`health`, `family`, `housing`, …)
- Parent hub path (existing or deferred)
- For each page: topic, slug, route, title, 1-line boundary vs siblings
- Build order (hub/orientation pages first, then deep specialists)
- Shared related guides outside the cluster (GP, Insurance, etc.)
- Menu section + item order

Show the plan to the user only if they asked for plan-first; otherwise proceed.

## Step 1 — Inventory

Scan repo for:

- Existing pages already in this cluster
- Natural siblings to link (do not orphan the new set)
- Correct Living vs Culture menu placement

## Steps 3–4 — Build each page

For **each** page in build order:

1. Invoke / follow `expatlife-cornerstone-page` end-to-end (brief → implement → six follow-ups).
2. Pass **cluster context** into that build (required):

```
Cluster: {name}
Pillar: {pillar}
This page: {topic} → {route}
Sibling pages in this cluster (build all; mark status):
- {Title} | {route} | {live|building|planned}
Content boundary for this page: {one line}
Must link to siblings in: relatedGuides, healthcareHub/hub cards, exploreNext, section cross-links
Do not mark live sibling routes as comingSoon
Export PATH constant for this page; reuse sibling PATH constants when they exist
```

3. Prefer **sequential** builds (one page fully done before the next) so later pages can link to live assets.
4. If using Task/subagents, launch `expatlife-cornerstone-page` per page with the cluster context above; do not skip follow-ups.

## Step 5 — Cluster linking pass

After all listed pages are built, run [linking.md](linking.md):

- Every cluster page lists every other live cluster page in related guides / hub / explore-next as appropriate
- Shared `*_PATH` constants imported or duplicated consistently (prefer single source of truth)
- Replace `comingSoon` / `#anchor` stubs that now have live routes
- Update older sibling guides outside the cluster that should point into the new set (low-risk link updates only)
- Menu order matches the plan
- Hub cards describe distinct jobs (no duplicate blurbs)

## Step 6–8 — Verify

- All new routes in `route-registry.ts`
- Nav tests cover active state for each new href
- No model `src` pointing at missing images
- Spot-check: from page A, links to B and C resolve

## Output to user

Report:

- Cluster name + routes shipped
- Build order used
- Cross-link matrix summary (who links to whom)
- Menu section + order
- Deferred future pages (names only)
- Any pages skipped because they already existed (and whether they were upgraded for linking)

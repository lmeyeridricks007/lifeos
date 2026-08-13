---
name: expatlife-cornerstone-page
description: >-
  Builds ExpatLife premium SEO cornerstone guide pages end-to-end from a short
  topic (e.g. Hospitals). Expands the topic into the standard cornerstone brief,
  implements page/model/view/nav/assets, then runs the six follow-up phases one
  by one. Use when the user asks to create a cornerstone page, article page,
  premium guide, or says "build [topic] page" / "create Hospitals" style requests.
---

# ExpatLife Cornerstone Page Builder

## Goal

Turn a short topic into a shipped premium cornerstone guide the same way the human workflow does:

1. Expand topic → full cornerstone brief
2. Implement the page from that brief
3. Run six follow-up phases **one by one**

## When invoked

User may say only a topic, e.g.:

- `Hospitals`
- `Create cornerstone page: Mental Healthcare`
- `Build /netherlands/health/pharmacies-netherlands/`

If route/title/cluster are missing, infer sensible defaults from existing siblings, then proceed. Ask at most one clarifying question only if pillar/route is genuinely ambiguous.

## Required reading (in order)

1. [brief-template.md](brief-template.md) — brief structure
2. [hospitals-brief-example.md](hospitals-brief-example.md) — depth/tone gold standard
3. [implementation.md](implementation.md) — files, templates, nav, verification
4. [follow-ups.md](follow-ups.md) — phased follow-ups (verbatim)
5. `.cursor/rules/premium-infographic-generation.mdc` — before any image generation

## Workflow checklist

Copy and track:

```
Cornerstone progress:
- [ ] 0. Brief written (full template)
- [ ] 1. Scaffold: page.tsx + model + view (mirror nearest template)
- [ ] 2. Content: all sections filled with useful expat-facing info
- [ ] 3. Phase 1 follow-up: unique photorealistic hero
- [ ] 4. Phase 2 follow-up: premium infographics (one-by-one, cursor rule)
- [ ] 5. Phase 3 follow-up: section usefulness + visuals
- [ ] 6. Phase 4 follow-up: latest styles/designs
- [ ] 7. Phase 5 follow-up: menu item (reuse if exists; correct section)
- [ ] 8. Phase 6 follow-up: Vercel/build will succeed
- [ ] 9. Final verify: images exist, nav/tests/registry OK, no new lints
```

## Step 0 — Write the brief

Expand the topic into the full brief using [brief-template.md](brief-template.md).

- Match section headers and density of [hospitals-brief-example.md](hospitals-brief-example.md)
- Inspect `apps/expatlife-web/src/lib/nav/config.ts` for siblings and correct menu section
- Prefer existing related routes for internal links
- Save the brief in the working notes / todo context; treat it as the source of truth for implementation

If the user asks **brief only**, stop after Step 0 and output the brief (see also skill `expatlife-cornerstone-brief`).

If invoked as part of skill/agent `expatlife-cornerstone-cluster`, also apply the provided cluster context: sibling routes, content boundary, PATH constants, “live peers must not be comingSoon”, and **go-live** (`immediate` or `YYYY-MM-DD`). When go-live is a date, follow `.cursor/skills/expatlife-cornerstone-cluster/scheduling.md`. When immediate (or no date), do not add `SCHEDULED_GUIDES` rows.

## Steps 1–2 — Implement from the brief

Follow [implementation.md](implementation.md).

- Mirror the nearest live healthcare/life template (Emergency Healthcare / Hospitals / GP)
- Create route + model + view
- Fill content for every brief section (no empty shipped sections)
- Wire placeholders for visual keys before generating images
- Do not invent medical/legal/tax advice; use trusted-source orientation only

## Steps 3–8 — Follow-ups (mandatory, sequential)

Execute [follow-ups.md](follow-ups.md) in order.

Rules:

- Complete and verify one phase before starting the next
- Do not skip phases even if assets were partially created earlier
- For Phase 2, generate infographics one-by-one with unique compositions
- For Phase 5, never duplicate an existing menu href

## Step 9 — Final verify

- Every model `src` path exists on disk
- Menu active-state test updated if needed
- Route registry includes the page
- Read lints on edited files; fix new issues

## Output to user

When done, report:

- Route URL
- Key files created/updated
- Hero + infographic counts
- Menu section used
- Any deferred future-cluster pages (names only)

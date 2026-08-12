# Cornerstone Follow-up Phases

Run these **one by one**. Finish and verify each phase before starting the next. Do not batch them.

## Phase 1 — Hero

```
make sure to generate and use unique photo realistic hero image for the page
```

Save to: `apps/expatlife-web/public/images/heroes/{slug}-hero-premium-v1.png`  
Update page-model `hero.image.src` only after the file exists.

## Phase 2 — Infographics

```
make sure to generate infographics and images that are useful for users - use latest approach - use cursor rule
```

Follow `.cursor/rules/premium-infographic-generation.mdc` exactly.  
Generate section visuals **one by one** (not a same-composition batch).  
Save under: `apps/expatlife-web/public/images/infographics/`  
Update model `src` only after each asset exists.

## Phase 3 — Section usefulness

```
make sure each section has relevant info that is useful for user and visuals
```

Every section needs: practical expat-facing copy, at least one useful visual (or explicit reuse), and concrete checklists/tables/scenarios where the brief calls for them. No thin placeholder sections.

## Phase 4 — Latest styles

```
make sure to use latest styles and designs
```

Mirror the newest premium healthcare/life guide view (prefer Emergency Healthcare or Hospitals as chrome). Use single-column premium layout classes from `guide-premium-page-ui.ts` and `GuidePremiumVisualFigure`.

## Phase 5 — Navigation

```
make sure menu item is available and active (dont create new menu item if one exists) - put in correct menu section
```

Wire `src/lib/nav/config.ts`, `route-registry.ts`, and nav tests. Prefer reusing an existing menu row. Put health pages under Living → correct healthcare subsection (not Culture).

## Phase 6 — Build health

```
make sure that vercel will succeed
```

Fix type/lint/import/route issues that would fail production build. Prefer targeted checks (`tsc`/tests for touched files) over full rebuilds when possible; fix anything that would break Vercel.

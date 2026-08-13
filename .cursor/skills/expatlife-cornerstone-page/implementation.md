# Implementation Map — ExpatLife Cornerstone Guides

App root: `apps/expatlife-web`

## Files to create/update

| Artifact | Path pattern |
|---|---|
| Route page | `app/netherlands/{pillar}/{slug}/page.tsx` |
| Page model | `src/components/{domain}/{camel}PageModel.ts` |
| View | `src/components/{domain}/{Pascal}View.tsx` |
| Hero image | `public/images/heroes/{slug}-hero-premium-v*.png` |
| Infographics | `public/images/infographics/{slug}-{section}-premium-v*.png` |
| Nav | `src/lib/nav/config.ts` (+ prefixes / EXTRA_LIVE_PATHS as needed) |
| Route registry | `src/data/site/route-registry.ts` |
| Nav tests | `src/lib/nav/navItemModel.test.ts` |

## Best chrome templates (copy structure, not content)

1. **Healthcare**: `EmergencyHealthcareNetherlandsView.tsx` + `emergencyHealthcareNetherlandsPageModel.ts`
2. **Also good**: `HospitalsNetherlandsView.tsx` / `GpNetherlandsView.tsx` / `DentistsNetherlandsView.tsx`
3. **Layout primitives**: `GuidePremiumVisualFigure`, `lib/ui/guide-premium-page-ui.ts`
4. **Infographic rule**: `.cursor/rules/premium-infographic-generation.mdc`

## page.tsx expectations

- `metadata` from model `seo` + `hero.image`
- When the page is **scheduled** (cluster go-live date): use `buildSocialMetadata` with `publishGate: { publish: true, publishDate }` — see `.cursor/skills/expatlife-cornerstone-cluster/scheduling.md`
- When **immediate**: no production hold; omit publishGate or use a non-future editorial date
- JSON-LD: `WebPageJsonLd`, `ArticleJsonLd` / MedicalWebPage when health, `FaqPageJsonLd`, `HowToJsonLd` when brief requires HowTo
- Render the View only (content lives in model + view)

## Model expectations

- `path`, `publish`, `publishDate`, `seo`, `hero`
- If scheduled: `publishDate: scheduledPublishDateForPath(PATH) ?? "YYYY-MM-DD"` and a matching row in `src/lib/publishing/scheduledGuides.ts`
- If immediate: do **not** add a `SCHEDULED_GUIDES` row; `publishDate` is editorial/today only
- Section content arrays (cards, tables, timelines, checklists, FAQ)
- Visual keys with `src`, `alt`, `caption` for every premium figure
- Related guides / hub / explore-next cards with real existing routes when possible

## View expectations

- Single-column premium sections (intro → full-width infographic → detail)
- Reuse shared guide UI: `PremiumGuideSection`, `SectionIntro`, tables, checklists, FAQ, feature/mistake cards
- No thin “coming soon” sections for shipped pages

## Nav rules

- Do **not** create a duplicate menu item if one already exists for the href
- Health operational guides → Living menu, correct healthcare subsection
- Keep `LIVING_OWNED_HEALTH_FAMILY_PREFIXES` in sync when adding Living-owned health/family paths
- Add/adjust `navItemModel.test.ts` active-state coverage

## Verification checklist

- [ ] Route loads via `page.tsx` → View → model
- [ ] Every referenced image path exists on disk
- [ ] Menu item present once, correct section, active state works
- [ ] Route registry updated
- [ ] No new lint/type errors in touched files
- [ ] Content differentiation vs sibling guides is clear

# Health & Education hubs — IA-P2-MISSING-HUBS

**Phase:** Architecture remediation (HEALTHCARE + EDUCATION only)  
**Date:** 2026-09-06  
**Audit refs:** [`03-INTERNAL-LINKING-AND-ARCHITECTURE.md`](../seo-audit/03-INTERNAL-LINKING-AND-ARCHITECTURE.md), [`topic-clusters.csv`](../seo-audit/topic-clusters.csv)  
**Production base:** https://www.expatcopilot.com

---

## Decision summary

| Cluster | Declared audit hub (stale) | Decision | Selected/created hub |
|---------|----------------------------|----------|----------------------|
| Healthcare | `/netherlands/health/health-insurance-netherlands/` (not a real path; insurance is top-level) | **Create** dedicated hub — no existing live page answered cluster-level intent | `/netherlands/health/` |
| Education | `/netherlands/services/international-schools/` (**scheduled** until 2026-11-07) | **Create** dedicated hub — services directory is not an education IA hub | `/netherlands/education/` |

**Why not promote an existing page?**

- **Health insurance** (`/netherlands/health-insurance-netherlands/`) is a deep insurance pillar, not a journey map across GP, emergency, hospitals, mental care, maternity, and children’s healthcare.
- **Healthcare basics** (`/netherlands/living/healthcare-basics/`) is orientation under Living, not the `/health/*` cluster parent already referenced in breadcrumbs.
- **International schools** education guide is one track among five live education children — not the cluster root.
- **Services international-schools** is staged and must not be the hub.

Breadcrumbs on live children already pointed at `/netherlands/health` and `/netherlands/education` while those URLs were **hidden** (no `page.tsx`). Creating the hubs repairs broken parent crumbs and cluster architecture together.

---

## Hub selected / created

### Healthcare — `/netherlands/health/` (created)

- **H1:** Healthcare in the Netherlands  
- **Intent:** Cluster map — get insured → everyday care → urgent/specialist → family care → orientation  
- **Not** a bare link list: overview + journey sections + FAQ  
- Registered in `EXTRA_LIVE_PATHS` → `getRouteStatus` = **live**

### Education — `/netherlands/education/` (created)

- **H1:** Education & childcare in the Netherlands  
- **Intent:** Choose school track → early years / wraparound care → money, language & family setup  
- Coming-soon university / Dutch education system labelled, not linked as live children  
- Registered in `EXTRA_LIVE_PATHS` → **live**

---

## Child URLs (hub → children)

### Healthcare hub outbound (live only; filtered with `filterLiveInternalLinks`)

| Section | Child / adjacent URLs |
|---------|------------------------|
| Get covered | `/netherlands/health-insurance-netherlands/`, `/netherlands/health/health-insurance-comparison-netherlands/`, `/netherlands/taxes/healthcare-allowance-netherlands/`, `/netherlands/taxes/tools/healthcare-allowance-estimator/` |
| Everyday care | `/netherlands/health/gp-netherlands/`, `…/pharmacies-netherlands/`, `…/prescriptions-netherlands/`, `…/dentists-netherlands/`, `…/physiotherapy-netherlands/` |
| Urgent & specialist | `…/emergency-healthcare-netherlands/`, `…/hospitals-netherlands/`, `…/mental-healthcare-netherlands/`, `/netherlands/living/emergencies-safety/` |
| Family care | `…/maternity-care-netherlands/`, `/netherlands/family/healthcare-for-children-netherlands/`, `/netherlands/family/pregnancy-netherlands/`, `/netherlands/family/giving-birth-netherlands/` |
| Orientation | `/netherlands/living/healthcare-basics/`, `/netherlands/culture/health-system-culture-basics/`, `/netherlands/official-figures/`, `/netherlands/health/tools/`, `/netherlands/services/health-insurance/` |

**Core `/health/*` cornerstone children (also breadcrumb → hub):**

- `/netherlands/health/gp-netherlands/`
- `/netherlands/health/dentists-netherlands/`
- `/netherlands/health/hospitals-netherlands/`
- `/netherlands/health/emergency-healthcare-netherlands/`
- `/netherlands/health/mental-healthcare-netherlands/`
- `/netherlands/health/pharmacies-netherlands/`
- `/netherlands/health/prescriptions-netherlands/`
- `/netherlands/health/physiotherapy-netherlands/`
- `/netherlands/health/maternity-care-netherlands/`
- `/netherlands/health/health-insurance-comparison-netherlands/`

### Education hub outbound

| Section | Live children / adjacent |
|---------|---------------------------|
| School track | `/netherlands/education/dutch-schools-netherlands/`, `/netherlands/education/international-schools-netherlands/` |
| Early years | `/netherlands/education/daycare-netherlands/`, `…/after-school-care-netherlands/`, `…/before-school-care-netherlands/`, `/netherlands/family/tools/childcare-cost-estimator/` |
| Money / language / family | childcare allowance, child benefits, learning Dutch, moving with kids, best cities for families, housing hub |

**Coming soon (shown, not live links):** Dutch education system, universities.

---

## Before / after internal linking

### Before

| Signal | Healthcare | Education |
|--------|------------|-----------|
| Hub URL | Missing (`hidden`) | Missing (`hidden`) |
| Breadcrumb parent | Pointed at missing hub | Pointed at missing hub |
| Hub → children | 0 | 0 |
| Child → hub (contextual) | ~0 (hub cards `comingSoon` where present) | TOC `#education-hub` anchors only |
| Explore cluster | Children only | Children only |
| Nav | No Health hub row; Education hub = Soon | |

### After

| Signal | Healthcare | Education |
|--------|------------|-----------|
| Hub | Live CollectionPage + journey sections | Live CollectionPage + journey sections |
| Hub → children | Journey cards to live guides only | Same |
| Child → hub | `relatedGuides` prepend “Healthcare hub” on all 10 health cornerstone models; hospitals/mental `healthcareHubCards` Health Hub → **live** | “Education & childcare hub” in `relatedGuides` + `educationHubCards`; TOC uses `EDUCATION_HUB_PATH` |
| Breadcrumbs | Parent resolves | Parent resolves |
| Explore NL | Hub first in `health` / `education` clusters | Same |
| Nav | “Healthcare hub” + “Education hub” live items | |

---

## Staged content deliberately excluded

| Path | Status (2026-09-06) | Action |
|------|---------------------|--------|
| `/netherlands/services/international-schools/` | scheduled **2026-11-07** | Excluded from education hub cards; education models flipped `status: "live"` → **`comingSoon`** so views do not leak clickable staged links |
| `/netherlands/services/daycare-providers/` | scheduled **2026-11-07** | Same |
| `/netherlands/education/dutch-education-system/` | no page / hidden | Hub lists as coming soon only |
| `/netherlands/education/universities-netherlands/` | no page / hidden | Hub lists as coming soon only |
| `/netherlands/health/tools/[slug]/` placeholders | coming-soon | Not featured as live hub children |
| `/netherlands/money/insurance/health/` | hidden | Not used |

Hub views also call `filterLiveInternalLinks` / `isRouteLive` so future schedule changes do not silently promote non-live routes.

---

## Sibling linking

- Health children already mesh siblings via `healthcareHubCards` / `relatedGuides` (GP ↔ hospitals ↔ emergency ↔ insurance, etc.).
- Education children mesh Dutch ↔ international ↔ daycare ↔ BSO/VSO; hub reinforces that map.
- Cross-hub: health hub footer → education hub (when live); education hub footer → health hub.

---

## Remaining architecture gaps

1. **Health insurance pillar** (`GuideBySlugPage` / contentlayer) does not yet have a first-class “Healthcare hub” related card in MDX — discovery is via Explore cluster + hub outbound. Optional follow-up: add hub to that guide’s related block.
2. **Living healthcare-basics** / culture health-system pages are adjacent, not `/health/*` children — linked from hub orientation section; reciprocal hub cards on those pages not required for IA-P2 close.
3. **Family healthcare-for-children** sits in family IA; hub links it; reciprocal hub link optional.
4. **Universities / Dutch education system** still missing pages — hub correctly marks coming soon.
5. **Services directories** remain the right place for provider directories after 2026-11-07 — then re-promote to live status in education models and optionally add hub cards.
6. Other `missing_hub` clusters (outside this ticket) unchanged.

---

## Key files

```
apps/expatlife-web/app/netherlands/health/page.tsx
apps/expatlife-web/app/netherlands/education/page.tsx
apps/expatlife-web/src/components/health/healthNetherlandsHubPageModel.ts
apps/expatlife-web/src/components/health/HealthNetherlandsHubView.tsx
apps/expatlife-web/src/components/education/educationNetherlandsHubPageModel.ts
apps/expatlife-web/src/components/education/EducationNetherlandsHubView.tsx
apps/expatlife-web/src/data/site/route-registry.ts          # EXTRA_LIVE_PATHS hubs
apps/expatlife-web/lib/seo/exploreNetherlandsClusters.ts
apps/expatlife-web/src/lib/nav/config.ts
apps/expatlife-web/src/components/health/*PageModel.ts      # relatedGuides → hub
apps/expatlife-web/src/components/education/*PageModel.ts   # hub + staged demotion
```

---

## Verification

- [x] `getRouteStatus('/netherlands/health')` → live  
- [x] `getRouteStatus('/netherlands/education')` → live  
- [x] Services intl schools / daycare providers → coming-soon  
- [x] No staged services as live hub children  
- [x] IDE lints clean on new hub surfaces  

# Netherlands hub — Choose your entry route module

**Page:** `/netherlands/`  
**Date:** 13 September 2026  
**Scope:** One high-value research/consideration module; no full-page redesign.

---

## Reasoning

First-time movers land on `/netherlands` for orientation. Before this change, the hub jumped from origin-country personalization into settling “quick start” and popular living guides — immigration path choice was buried in Move/visa pages.

The new **Choose your entry route** block sits early for RESEARCH / CONSIDERATION without displacing the hero, origin picker, or existing strongest settling content.

Soft card copy uses “Often relevant for…” / “Explore this route if…” — no conclusive eligibility claims. `CardLink` still gates non-live hrefs.

---

## Before hierarchy

1. Hero (Move to the Netherlands + origin chips)  
2. Personalized entry (pick origin country)  
3. Quick start  
4. Popular guides  
5. Moving cluster  
6. Living cluster  
7. Execution tools  
8. Country routes  
9. Next steps  
10. About  

---

## After hierarchy

1. Hero  
2. Personalized entry  
3. **Choose your entry route** ← new (`#choose-entry-route`)  
4. Quick start  
5. Popular guides  
6. Moving cluster  
7. Living cluster  
8. Execution tools  
9. Country routes  
10. Next steps  
11. About  

**Placement rationale:** Immediately after origin personalization (who you are) and before quick-start settling cards (what to do day-to-day). Preserves hero + origin flow and does not push moving/living clusters down past the fold of the whole page.

---

## Routes included (live)

| Card | Destination |
| --- | --- |
| EU / EEA / Swiss | `/netherlands/eu-vs-non-eu-moving-to-netherlands/` |
| Highly Skilled Migrant | `/netherlands/visa/highly-skilled-migrant/` |
| EU Blue Card | `/netherlands/visa/eu-blue-card/` |
| Partner / family | `/netherlands/visa/partner-family-visa/` |
| Student | `/netherlands/visa/student-visa/` |
| Orientation Year (zoekjaar) | `/netherlands/visa/orientation-year/` |
| Self-employed | `/netherlands/visa/self-employed-visa/` |
| DAFT (US entrepreneurs) | `/netherlands/visa/dutch-american-friendship-treaty/` |
| Visa checker | `/netherlands/visa-checker/` |
| Compare visas | `/netherlands/visa/compare-visas/` |
| Visas & residency hub | `/netherlands/moving/visas-residency/` |

Also added `/netherlands/eu-vs-non-eu-moving-to-netherlands/` to `EXTRA_LIVE_PATHS` so hub `CardLink` treats it as live (page already existed in App Router).

---

## Routes excluded

| Candidate | Why excluded |
| --- | --- |
| Startup visa / startup advisors | Staged or service directory — not a verified residence-purpose guide in this module |
| TWV work permit | Secondary authorization topic, not a primary entry route |
| Permanent residence / citizenship | Longer-term stay, not first-entry research |
| Move without a job (pillar) | Adjacent planning page; not a discrete visa route card |
| Any comingSoon hub cards | Module is live-only |

---

## Links added

### Hub → visa IA
- New `entryRoutes` content in `packages/content/src/nl-portal.ts`
- Rendered in `PortalNetherlandsTemplate` after personalized entry

### Reciprocal (where appropriate)
- Compare visas related guides → Netherlands hub + visas-residency hub  
- Visa checker related guides → Netherlands hub + visas-residency + orientation year  
- Visas & residency continue cards → Netherlands hub  

---

## Implementation files

- `packages/content/src/types.ts` — `entryRoutes` type  
- `packages/content/src/nl-portal.ts` — module content  
- `apps/expatlife-web/src/components/content/PortalNetherlandsTemplate.tsx` — UI  
- `apps/expatlife-web/src/data/site/route-registry.ts` — EU vs non-EU live  
- `apps/expatlife-web/app/netherlands/visa/compare-visas/page.tsx`  
- `apps/expatlife-web/src/lib/tools/shared/toolInternalLinks.ts`  
- `apps/expatlife-web/src/components/moving/visas-residency/config/moveVisaResidency.config.ts`  

---

## Regression notes

- No staged URLs in the module list  
- No duplicate homepage marketing block — NL hub only  
- Single additional section; no new heavy assets or client islands beyond existing `CardLink`  
- Eligibility language remains non-conclusive  

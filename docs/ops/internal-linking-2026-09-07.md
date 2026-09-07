# Internal linking plan — 7 September 2026

Journey + discovery graph. Prefer hub modules over orphan URLs.

---

## Matrix

| FROM | TO | Context | Status |
|------|-----|---------|--------|
| `/netherlands/` | permanent-residence, dutch-citizenship, inburgering, leaving | Longer-term / next steps | **Done** — popularGuides + movingCluster body + nextSteps |
| `/netherlands/` | ns-trains, ov-chipkaart, ovpay, lease-cars | Settling / Getting around | **Done** — popularGuides (trio); **lease-cars restored** this pass |
| `/netherlands/living/survival-guide` | transit trio + vehicle cluster | `#getting-around` | **Done** — module + continue cards; **buying-a-car added** to module |
| Transit guides ↔ vehicle guides | buying-a-car, car-sharing, lease (+ reverse OV links) | Related mobility | **Done** — relatedGuides bridges (prior tickets) |
| `/netherlands/integration/` | `/netherlands/integration/inburgering/` | Consolidation | **Done** — permanent 308 in `next.config.js` |

---

## Suggested modules (IA labels)

| Module | Surface | Links |
|--------|---------|--------|
| **After you arrive** | NL `livingCluster` (eyebrow) | Survival → Getting around → transit trio / lease |
| **Getting around** | Survival `#getting-around` | NS, OV-chipkaart, OVpay, car sharing, lease, buying a car |
| **Related mobility** | Leaf `relatedGuides` | Transit ↔ vehicle both ways |

---

## Out of scope

- New URLs / other-country hubs
- Fake sitemap lastmods
- Expanding origin×tool matrix

---

## Checklist

- [x] Plan this doc
- [x] NL → longer-term four (prior)
- [x] NL → transit trio (prior) + lease-cars (this pass)
- [x] Survival Getting around → transit + vehicle (buying-a-car this pass)
- [x] Transit ↔ vehicle relatedGuides (prior)
- [x] Integration hub 308 (prior)
- [ ] Deploy for production link graph

**Related:** [content-journey-gaps-2026-09-07.md](./content-journey-gaps-2026-09-07.md) · [seo-opportunities-2026-09-07.md](./seo-opportunities-2026-09-07.md)

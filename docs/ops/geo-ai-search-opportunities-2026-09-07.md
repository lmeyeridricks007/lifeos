# GEO / AI search opportunities — 7 September 2026

Citability for answer engines and human desks. Prefer dated tables + official URLs over more prose.

---

## 1. Official-figures moat — keep

| Field | Value |
|-------|--------|
| Asset | `/netherlands/official-figures/` |
| Why it wins | Dated citation table competitors lack: HSM floors, IND fees, 30% norms/cap, min wage, eigen risico, premium band — with primary URLs + JSON/CSV |
| ATF | `GuideHeroTrustMeta` + as-of / last-reviewed (**7 Sep 2026** in worktree) |
| Trust links | Sources + Methodology related; **Editorial policy** added for full policy triad |
| Refresh rule | Post-Prinsjesdag as-of bump ([content-refresh](./content-refresh-2026-09-07.md) / [Prinsjesdag playbook](./prinsjesdag-official-figures-response-playbook.md)) — never invent figures |
| Priority | **Defend / amplify** (ACCESS soft outreach already points here) |

---

## 2. Mobility guides — review stamps for citability parity

| Set | Status |
|-----|--------|
| Getting around, OV-chipkaart, OVpay, NS trains, cycling, licence exchange, buying a car, car insurance | **Done** — Last reviewed **7 Sep 2026** + hero official sources |
| Lease cars, car sharing (vehicle set / RDW) | **Add stamps** this pass — same pattern as buying-a-car |
| Official outbound already present | ns.nl, ov-chipkaart.nl, ovpay.nl, RDW, Belastingdienst, Government.nl, CJIB where relevant |

| Action | Show last-reviewed ATF + short official-source strip (`GuideHeroTrustMeta`) — parity with immigration/money pillars (D2) |
| Priority | **P2** (core 8 done; vehicle siblings completing) |

---

## 3. Methodology / sources / editorial-policy on figure-bearing pages

| Rule | When refreshing any page that states statutory or indexed figures, keep outbound trust links to `/methodology/`, `/sources/`, and `/editorial-policy/`. |
| Official-figures | RelatedTrustLinks includes all three |
| Mobility stamped guides | Shared `GUIDE_CITABILITY_POLICY_LINKS` appended to `relatedGuides` |
| Do not | Strip FAQs, dated tables, or ATF stamps when editing |

Shared constant: `apps/expatlife-web/src/components/guides/guideCitabilityPolicyLinks.ts`

---

## Execution checklist

- [x] Plan this doc
- [x] Official-figures → editorial-policy in related guides
- [x] Shared citability policy links constant
- [x] Lease cars + car sharing ATF stamps
- [x] Policy triad on stamped mobility `relatedGuides` (+ Getting around)
- [ ] Deploy so production GEO surfaces match worktree
- [ ] Prinsjesdag: re-verify official-figures; keep policy triad

**Related:** [seo-opportunities-2026-09-07.md](./seo-opportunities-2026-09-07.md) · `.cursor/rules/d2-statutory-citability-atf.mdc`

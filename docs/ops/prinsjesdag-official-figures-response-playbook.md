# Prinsjesdag → Official figures response playbook (EC-20260907-003)

Defend the **official-figures moat** within **24 hours** of the Belastingplan / Prinsjesdag package.

**Calendar anchor (2026):** Prinsjesdag is **Tuesday 15 September 2026**. Expect Belastingplan **2027** proposals that day (amounts are proposals until parliamentary adoption — usually late year).

**Scheduled P1:** post-Prinsjesdag **“as of” bump** on `/netherlands/official-figures/` (see [content-refresh-2026-09-07.md](./content-refresh-2026-09-07.md)). Current worktree stamp is **7 September 2026** — after 15 Sep, re-verify and set as-of / last-reviewed to Prinsjesdag day (or next calendar day if you ship T+1), even when row amounts are unchanged.

**Canonical citation surface:** `/netherlands/official-figures/`  
**Source of truth modules:**

| Domain | Code |
|--------|------|
| Citation table + as-of / last-reviewed | `apps/expatlife-web/src/components/official-figures/officialFigures2026.ts` |
| API JSON/CSV | `apps/expatlife-web/app/api/authority/official-figures/route.ts` + `src/lib/authority/officialFiguresDataset.ts` |
| HSM / Blue Card floors | `src/lib/tools/hsm-salary-checker/thresholds.ts` |
| 30% / 27% preview | `src/lib/tools/thirty-percent-ruling/assumptions.ts` |
| Min wage / eigen risico / premium band | `src/components/jobs/minimumWageNetherlandsRates.ts` |
| HSM reform copy | `src/content/visas/hsmProposedReforms2027.ts` |
| HSM guide stamp (WATCH — bump only if figures/status change) | `src/content/visas/hsmJobSearchWindow.ts` → `HSM_CONTENT_LAST_REVIEWED` |

---

## T−7 to T−1 (prep)

1. Bookmark official English/Dutch landing pages:
   - [Rijksoverheid Belastingplan](https://www.rijksoverheid.nl/themas/belastingen-uitkeringen-en-toeslagen/belastingplan)
   - [Business.gov.nl Prinsjesdag](https://business.gov.nl/prinsjesdag/)
   - Belastingdienst 30% ruling / work-related costs pages
   - IND required amounts / HSM pages
   - Government.nl health insurance / minimum wage pages
2. Confirm production still serves `/netherlands/official-figures/` and `/api/authority/official-figures?format=json|csv` (deploy gate if APIs are still latent).
3. Draft a changelog stub dated **Prinsjesdag day** (do not publish speculative numbers).
4. Assign owner + backup; keep a 2-hour “figures desk” window on the day.

---

## T+0 → T+24h (same-day defence)

### Hour 0–2 — triage

1. Skim Miljoenennota / Belastingplan headlines for anything that touches:
   - 30% ruling % / norms / salary cap / duration
   - Income tax brackets / heffingskortingen that change **net salary** messaging (note only; full calculator sync can wait)
   - Minimum wage indexing language
   - Health insurance eigen risico / basic package
   - Immigration salary thresholds (usually IND, not Belastingplan — still check same-day press for confusion)
2. Classify each hit:
   - **A — Hard figure change** with an official URL + effective date → update same day
   - **B — Proposal / not yet final** → surface as preview with “not yet final” wording (same pattern as `THIRTY_PCT_RULES_2027_PREVIEW` / HSM tightening)
   - **C — Out of scope** for official-figures → optional guide note only

### Hour 2–8 — update official-figures

1. Edit `officialFigures2026.ts` (or successor year file):
   - Update `OFFICIAL_FIGURES_AS_OF_LABEL` and `OFFICIAL_FIGURES_LAST_REVIEWED`
   - Patch affected `officialFiguresRows`
   - Append `officialFiguresChangelog` entry with date + one-sentence summary
2. Sync domain constants **first**, then re-export into the citation table (do not hardcode divergent amounts).
3. Smoke-check:
   - Official figures page renders new as-of
   - JSON/CSV download includes new rows
   - HSM checker / 30% calculator / min-wage guide still match the table
4. Ship a **narrow** PR titled like `chore(official-figures): Prinsjesdag 2026 response` — figures + changelog only if possible.

### Hour 8–24 — amplify citability

1. Touch FAQs / hero trust strips on HSM, 30%, min wage, PR only if amounts or “not yet final” status changed.
2. **HSM WATCH:** `/netherlands/visa/highly-skilled-migrant/` stays on **Last reviewed: 26 August 2026** unless IND floors/fees or tightening status moved — then bump `HSM_CONTENT_LAST_REVIEWED` in the same PR as thresholds.
3. Optional short LinkedIn / newsletter: link **only** to `/netherlands/official-figures/` (not affiliate pages).
4. Soft-ping ACCESS (prospect #126) if figures they care about moved — see `docs/backlinks/outreaches/additional-prospects-123-137.md`.

---

## Wording rules (moat protection)

- Prefer **dated citation** over hot takes.
- Never invent IND floors from fiscal headlines.
- Use **“not yet final / not yet known”** for proposals until primary sources publish definitive amounts.
- Keep disclaimer: orientation table, not advice, verify live official pages.
- Do **not** claim ExpatCopilot is faster than Belastingdienst — claim **one linkable dated table** with provenance.

---

## Done checklist

- [ ] As-of + last-reviewed updated to Prinsjesdag response day
- [ ] Changelog entry added (unchanged figures still get a “re-verified on Prinsjesdag” note)
- [ ] Domain modules ↔ citation table match
- [ ] API dataset regenerated via same module
- [ ] Production URL returns 200 with new date (after deploy)
- [ ] No speculative “effective 1 Jan” claims without source
- [ ] HSM stamp left alone **or** bumped only because IND/figures actually changed
- [ ] City hub `publishDate` / sitemap lastmods **not** touched in this PR

**Ticket:** EC-20260907-003  
**Related plan:** [content-refresh-2026-09-07.md](./content-refresh-2026-09-07.md)  
**Owner:** editorial + engineering on call for Prinsjesdag week

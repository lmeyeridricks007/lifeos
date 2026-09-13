# Tax Cluster Consolidation — ExpatCopilot

**Reviewed:** 13 September 2026  
**App:** `apps/expatlife-web`  
**Principle:** Map first. Do not redirect or delete live long-tail until intent and value are proven.

---

## Executive verdict

`/netherlands/taxes` is already the specialist **topic IA** (guides + tools). Money pillar pages are **foundation / scenario / filing** long-tail with distinct jobs. Overlap with the hub is real but intentional — not audience clones.

**No live content merge was warranted.** Safe work completed:

1. Clarified taxes hub role and linked Money foundations + official figures  
2. Retargeted internal links that pointed at redirect aliases / dead Money tax URLs  
3. Hardened legacy App Router shells to `permanentRedirect`  
4. Pointed planned income-tax / box hub cards to live explainers until pages ship  

GSC clicks/impressions and Ahrefs backlink volumes were **not available** in-repo for per-URL decisions.

---

## Target IA (reuse existing URLs)

```
/netherlands/taxes                          ← TAX_HUB (cluster root)
  /30-percent-ruling                        ← SPECIFIC_TAX_TOPIC
  /taxes-after-moving-netherlands
  /leaving-netherlands-tax
  /foreign-income-netherlands
  /double-taxation-netherlands
  /net-salary-netherlands
  /gross-vs-net-salary
  /payroll-tax-netherlands
  /bonus-tax-netherlands
  /average-salary-netherlands
  /healthcare-allowance-netherlands
  /rent-allowance-netherlands
  /childcare-allowance-netherlands
  /property-tax-netherlands
  /tools/                                   ← TOOL hub
    /30-ruling-calculator
    /dutch-salary-net-calculator
    /healthcare-allowance-estimator
    /double-tax-awareness-tool
  (planned, keep comingSoon until built)
    /income-tax-netherlands
    /box-tax-system-netherlands
    /freelancer-zzp-taxes
    /vat-btw-netherlands
    /business-taxes-netherlands

Money foundations (KEEP — not migrated for aesthetics)
  /netherlands/money/tax-guide-for-expats
  /netherlands/money/how-taxes-work-in-the-netherlands
  /netherlands/money/expat-taxes-netherlands
  /netherlands/money/tax-residency-netherlands
  /netherlands/money/tax-return-netherlands
  /netherlands/money/taxes/tax-advisors

Adjacent
  /netherlands/work/tools/payslip-decoder
  /netherlands/services/tax-advisors
  /netherlands/official-figures             ← statutory citation SoT
```

---

## Overlap decisions (key pairs)

| Pair | Decision | Rationale |
| --- | --- | --- |
| Taxes hub vs Money tax-guide-for-expats | **KEEP_DISTINCT** + hub **REPOSITION** | Hub = topic map; guide = learning path / depth. Hub now surfaces the guide explicitly. |
| Taxes hub vs how-taxes-work | **KEEP_DISTINCT** | Beginner system vocabulary; hub cards for income-tax/boxes temporarily route here. |
| tax-guide vs expat-taxes (Money) | **KEEP_DISTINCT** | Flagship path vs scenario-led companion. |
| taxes/expat-taxes vs money/expat-taxes | **301_TO_CANONICAL** (already) | Money is canonical; taxes shell → redirect only. |
| money/taxes/30% vs taxes/30% | **301_TO_CANONICAL** (already) | Taxes is canonical facility guide. |
| Money tax-advisors vs services/tax-advisors | **KEEP_DISTINCT** | Editorial “when to hire” vs provider directory. |
| net-salary vs gross-vs-net | **KEEP_DISTINCT** | Deep calculator companion vs beginner terminology. |
| Short allowance URLs | **301_TO_CANONICAL** (already) | Preserve legacy/nav; long `*-netherlands` URLs index. |
| income-tax / box-tax planned pages | **REPOSITION** (interim) | Do not invent pages; link live explainers until built. |
| Mass Money→Taxes URL migration | **NO_ACTION** | Aesthetic rename would destroy long-tail without GSC proof. |

Full row inventory: [`tax-cluster-matrix.csv`](./tax-cluster-matrix.csv).

---

## Safe implementation completed (this pass)

| Change | Why |
| --- | --- |
| `taxesHubPageModel.ts` hub copy + foundation topics + official-figures | Make `/netherlands/taxes` the clear IA root |
| Hub income-tax / box cards → `how-taxes-work` (live) | Avoid comingSoon dead-ends where overlap exists |
| Net salary / services tax-advisors / orphaned models → Money canonicals | Stop internal links to redirect aliases |
| `config/nav.ts` remove `/money/taxes` + readiness-score; point to taxes hub | Dead nav targets |
| `lib/nav/config.ts` replace employment-overview with payroll/net salary | Missing page |
| `categories.json` / `registry.json` retarget bare `/money/taxes/` and employment-overview | Tool relatedGuides hygiene |
| `taxes/expat-taxes` + `money/taxes/30-percent` App Router → `permanentRedirect` | Defense in depth with next.config 301s |
| `taxGuideRoutes.officialFigures` + 30% explore/references | Freshness: cite shared official-figures table |

**Not done (intentionally):** content merge of Money guides into taxes hub; new income-tax / box pages; mass URL moves; deleting orphaned view components (dead code cleanup later).

---

## Freshness

| Area | Shared module / SoT | Hub / guide linkage |
| --- | --- | --- |
| 30% 2026 norms + 2027 preview | `THIRTY_PCT_RULES_2026` in `src/lib/tools/thirty-percent-ruling/assumptions.ts` | Official-figures rows + 30% guide/calculator |
| Salary-net bands | `dutch-salary-net/constants.ts` (indicative) | Calculator disclaimer; not a second SoT |
| Zorgtoeslag | `healthcareAllowanceRulesByYear.ts` | Estimator + healthcare allowance guide |
| Kinderopvang | `childcareAllowanceReference2026.ts` | Childcare allowance guide |
| IND / visa amounts | `indRequiredAmounts.ts` | Official-figures (visa; adjacent) |

**Rule:** do not invent a third tax-figures table. Prefer `/netherlands/official-figures` for citation UX.

---

## Regression checks

| Check | Result |
| --- | --- |
| Redirect chains (tax-related next.config) | **0** (38 single-hop tax-related redirects) |
| Sitemap includes redirect aliases | **No** — listed in `sitemap-redirect-aliases.ts` |
| Canonical → redirect | Destinations are self-canonical live pages |
| Internal links to old redirect URLs (content/nav, excl. alias maps/tests) | **0** after retarget |
| Tool routes lost | **No** — all four taxes calculators + payslip retained |
| 404 from hub comingSoon cards | Reduced for income-tax/boxes via interim live targets; ZZP/VAT/business still comingSoon |

Nav short allowance paths remain as **active-state aliases** (`navItemModel`) with next.config 301 to long URLs — acceptable; not content links in page models.

---

## Gaps / follow-ups

1. **GSC export** — confirm which Money vs Taxes URLs earn queries before any future merge.  
2. Build **income-tax** and **box-tax-system** under `/netherlands/taxes/*` when ready; then restore dedicated hub cards.  
3. Optional: delete unused `ExpatTaxesNetherlandsView` / `ThirtyPercentRulingView` orphan components after search-index audit.  
4. Allowance pages still hold local 2026 tables — longer-term fold citeable rows into official-figures where practical.

---

## Scorecard

TAX CLUSTER STATUS:  
**PARTIAL**

URLs MERGED:  
**0**

URLs RETAINED WITH DISTINCT INTENT:  
**28**  
*(taxes hub + tools hub + 6 Money tax guides + 14 taxes specialist guides + 4 taxes calculators + payslip + services tax-advisors + official-figures; excludes living road-tax and planned comingSoon)*

REDIRECT CHAINS:  
**0**

INTERNAL LINKS TO OLD URLS:  
**0**  
*(post-fix in content/nav/registry; alias maps and next.config intentionally keep legacy sources)*

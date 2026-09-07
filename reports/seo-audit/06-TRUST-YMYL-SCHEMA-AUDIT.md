# Trust, YMYL & Structured Data Audit — ExpatCopilot

**Phase:** Audit only (no fixes)  
**Date:** 2026-09-06  
**Production samples:** 27 URLs (trust stack + HIGH/MEDIUM exemplars)  
**Inventory:** all **452** sitemap URLs classified in `ymyl-pages.csv`

### Deliverables

| File | Rows / role |
|------|-------------|
| [`ymyl-pages.csv`](./ymyl-pages.csv) | 452 — risk LOW/MEDIUM/HIGH per indexable URL |
| [`source-quality.csv`](./source-quality.csv) | 29 — sampled pages + portfolio notes |
| [`schema-audit.csv`](./schema-audit.csv) | 28 — JSON-LD validation on samples + sitewide |

---

## 1. Executive verdict

ExpatCopilot has a **strong institutional trust stack** (about, editorial policy, methodology, sources, affiliate disclosure, ranking transparency, legal pages, corrections via contact) and generally **honest “not professional advice” framing**. Structured data is **syntactically clean** on samples, uses **Organization** authorship (not fake Person experts), and **does not fabricate ratings**.

Gaps for YMYL / E-E-A-T are structural, not deceptive:

- **No named authors, reviewers, or Person schema** (by design in `siteMeta.ts` — do not invent credentials)
- **`SITE_SAME_AS` empty** — Organization schema lacks corroborating profiles
- **Large HIGH/MEDIUM YMYL surface** (immigration, tax, employment, health, housing) relies on org-level trust + official links rather than expert attribution
- **Uneven citation depth** and **legal pages stamped March 2025** vs **2026 figure modules**
- Some Article `dateModified` values can be **request-time** (weak freshness)

**Do not** recommend inventing lawyer/doctor/tax-adviser personas. Prefer stronger official sourcing, clearer non-advice UX on HIGH pages, and real org corroboration if/when it exists.

---

## 2. Author / ownership / disclosures

| Asset | Status |
|-------|--------|
| About | Live — mission, limits (“what we don’t replace”), trust links |
| Editorial policy | Live — creation approach, **updates**, **corrections** |
| Methodology | Live — inputs, structure, limits |
| How this site works | Live |
| How we rank services | Live — featured vs editorial independence |
| Affiliate disclosure | Live (+ `/about/affiliate-disclosure` short alias) |
| Sources | Live — IND, Government.nl, DigiD, RVO, etc. categories |
| Contact | Live — Formspree; topic includes **Correction or update**; states no personalized advice |
| Disclaimer / Terms / Privacy / Cookies | Live — informational-only; legal stamp **March 2025** |
| Author pages / bylines | **None** |
| Named experts / reviewedBy | **None** |
| Corrections process | **Documented** (editorial policy + contact) |
| Update policy | **Documented** (non-guaranteed; verify with authorities) |

**Affiliate:** Default monetization disclosure + multiple UI components (`AffiliateDisclosure`, `AffiliateSection`, service `EditorialDisclosureBlock`, etc.). Present on many YMYL-adjacent money/service/tool pages — acceptable if clearly labeled; ensure HIGH immigration/tax pages never imply paid placement = official advice.

---

## 3. YMYL risk portfolio

Classification is path/domain-based over the sitemap (see `ymyl-pages.csv`). Risk reflects **potential material harm if wrong**, not page quality.

| Risk | Count | Typical domains |
|------|------:|-----------------|
| **HIGH** | **110** | Visas/immigration, tax/rulings/allowances, PR/citizenship, employment contracts/rights, health care topics, health insurance, rental-contract/legal housing, official figures |
| **MEDIUM** | **240** | Banking/COL/finance tools, housing search/costs, jobs/career, city hubs, admin (BSN/DigiD), service directories, relocation planning tools |
| **LOW** | **102** | Culture/lifestyle, many living/transport pages, trust/hub chrome |

### HIGH domains (examples)

- Immigration: visa pillars, visa tools, HSM, residence permits  
- Tax: 30% ruling, tax guides, salary net calculator, allowances  
- Healthcare: hospitals, GP, mental health, maternity, etc.  
- Insurance: health insurance comparison / services  
- Employment law: contracts, rights, TWV, layoffs  
- Housing legal: rental contracts & deposits  
- Official figures hub (orientation table of rates/thresholds)

### Where expert review or official-source strength matters most

| Area | Prefer |
|------|--------|
| Immigration / PR | Strong IND / Government.nl citation + non-advice; **not** “our immigration lawyer says” unless true |
| Tax / 30% / payroll | Belastingdienst primacy; dated figures; calculator limits |
| Healthcare | Strict non-medical framing; emergency (112) where relevant |
| Employment contracts | Gov/UWV-style sources; not “legal advice” |
| Official figures | Keep single source-of-truth module; periodic review |

Spot-check: **health insurance comparison** sample extract did not clearly match “not medical/tax/legal advice” phrases (gov links present). Treat as **investigate on-page disclaimer coverage** (P2), not proof of missing legal pages.

---

## 4. Source quality

### Strengths

- `/sources/` hub + per-category official source registries (`src/data/services/official-sources/`, visa official sources, money `*OfficialSources.ts`)
- Many guides/tools expose `officialSources` lists (IND, Belastingdienst, Government.nl, SVB, municipalities)
- `/netherlands/official-figures/` — **2026** tax year, **As of August 2026**, last reviewed **30 August 2026**, with Dataset-oriented schema and multiple gov domains
- HSM salary floors & 30% ruling norms centralized in dated 2026 modules
- Sampled HIGH pages often link **ind.nl** / **belastingdienst.nl** / **government.nl**

### Gaps / risks

| Issue | Severity |
|-------|----------|
| No named expert authors for HIGH YMYL | E-E-A-T gap (honest; don’t fake) |
| Citation depth uneven (e.g. some city/lifestyle thin; some tools stronger) | P2–P3 |
| Legal page “last updated” **March 2025** vs figure modules **Aug 2026** | P3 freshness inconsistency |
| Full broken-link crawl of citations **not** completed this phase | Limitation |
| Claims/rates can go stale (thresholds, fees, min wage, ruling %) | Ongoing — official-figures helps |
| Affiliate CTAs beside YMYL guidance | OK with disclosure; watch proximity on HIGH pages |

**Unsupported claims:** No full fact-audit. Centralized thresholds reduce scatter-risk; still verify any page that restates amounts outside official-figures / assumptions modules.

---

## 5. Structured data audit

### Implemented types (code + samples)

| Type | Role |
|------|------|
| Organization | Sitewide (`SiteWideStructuredData`) |
| WebSite | Sitewide |
| AboutPage | About |
| BreadcrumbList | Many guides/tools |
| Article | Many cornerstone guides; author = **Organization ExpatCopilot** |
| FAQPage | Common on guides/tools |
| HowTo | Tools + some guides |
| SoftwareApplication + Offer (price 0) | Tool pages |
| WebPage / CollectionPage / ItemList | Hubs/tools |
| Dataset | Official figures |
| ContactPoint | Via Organization → `/contact/` |

**Not found:** `Person`, `BlogPosting` (Article used instead), `AggregateRating` / Review (**good — no fabricated stars**).

### Validation (27 production samples)

| Check | Result |
|-------|--------|
| JSON-LD parse errors | **0** on samples |
| Fake ratings | **None** |
| Schema hosts | **www.expatcopilot.com** only |
| Author misleading as licensed professional | **No** — Organization name only |
| Schema URL form | Trailing-slash absolute URLs (aligns with canonical helpers; still conflicts with non-slash **served** URLs — see technical audit) |
| SoftwareApplication Offer | Free `price: 0`, currency often **USD** in builder default — minor inconsistency for NL site (P3) |
| HowTo on HIGH YMYL | Present on some health/housing pages — ensure steps match visible **orientation** copy, not clinical/legal instructions |
| **MedicalWebPage / MedicalSpecialty** | Observed on health-insurance comparison sample (plus PeopleAudience) — **policy-sensitive**; visible non-advice extract was weak while medical schema is strong (P2 investigate) |
| Thin schema | e.g. Amsterdam city sample ≈ Org+WebSite only — missed Article/FAQ opportunity (P3), not a violation |

### Entity consistency

- Organization name/description match `siteMeta`  
- Article `mainEntityOfPage` / tool `url` use SEO public origin  
- Empty `sameAs` is **intentional honesty**, but weakens org corroboration in Knowledge/E-E-A-T signals  

---

## 6. Trust vs YMYL interaction

| Signal | Assessment |
|--------|------------|
| Sitewide disclaimer language | Strong |
| Page-level not-advice on many YMYL models | Strong pattern |
| Official figures + dated modules | Strong for rates |
| Expert credentials | Absent (correctly not invented) |
| Author E-E-A-T | Org-only |
| Affiliate transparency | Documented; components exist |
| Corrections | Documented path |

Overall: **credible as a practical orientation publisher**, not as a regulated advisory firm. Schema and copy largely **support** that positioning.

---

## 7. Quantification

| Metric | Value |
|--------|------:|
| Indexable URLs YMYL-classified | 452 |
| HIGH | 110 |
| MEDIUM | 240 |
| LOW | 102 |
| Named human authors | 0 |
| AggregateRating schemas | 0 |
| Sampled JSON-LD parse failures | 0 |
| Trust pages in stack | Complete set listed in §2 |

---

## 8. Limitations

- Source-quality CSV is **sample + portfolio**, not every URL’s citation graph  
- No exhaustive outbound link checker for 404.gov references  
- Disclaimer detection is HTML-text heuristic (may miss component-only or image text)  
- Risk labels are architectural, not legal determinations  

---

## 9. Progress

Trust/YMYL/schema evidence base written. **No code, schema, or content changes made.**  
Next optional audit steps: full citation link-check; GSC-informed priority for HIGH pages with weak CTR/engagement.

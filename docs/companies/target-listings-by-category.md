# Target listings by category (Expat Copilot)

Editorial and commercial **checklist**: which **providers and service types** you should cover for Netherlands-focused expats, whether they are **already on the site**, and how they rank for **affiliate / publisher partnerships**.

**Companion:** live inventory in [promoted-services.md](./promoted-services.md) (repo-aligned). This page adds **gaps** (not yet listed) and **sort order** for planning.

**Row rule:** **One row per provider** (no comma-separated brands in a single cell). Repo-backed entries include the **`slug`** in backticks — the matching identifier in `apps/expatlife-web/src/data/companies-registry.ts` or `src/content/affiliates/providers/<slug>.json`. Generic “add this category” gaps stay one row each.

---

## How to read the tables

| Column | Meaning |
|--------|---------|
| **Sort** | **A** = highest priority row in the section (listed first). Within each category, order is: **tracked affiliate** → **publisher programme available but not tracked in JSON** → **on site, no common publisher affiliate** → **not on site yet** (gaps). |
| **Provider / service** | Brand, product, or **service type** (for gaps). Repo providers: **Name** (`slug`). |
| **Website** | Primary site when applicable; **—** for generic service types. |
| **Affiliate partnership** | **Tracked** = in `apps/expatlife-web/src/content/affiliates/providers/*.json`. **Programme (not tracked)** = common publisher/network programme per [promoted-services.md](./promoted-services.md), not necessarily enrolled. **None known** = no standard open publisher CPA found. **B2B** = corporate or broker model. |
| **Partnership / how to engage** | Link to **join an affiliate programme**, **publisher network merchant page**, or **public B2B/partner** entry point. **—** if none known or engagement is direct sales only. |
| **Typical affiliate pay (indicative)** | **Rough** commission shape for planning only: fixed **CPA** (per signup/sale), **%** revenue share, **per lead**, etc. Sourced from **public programme pages**, network blurbs, or common publisher reports where the brand does **not** publish a rate. **Your** rate is whatever is in **your signed network agreement** — tiers, caps, and VAT differ. **—** = no standard publisher CPA or not applicable. |
| **On website now?** | **Yes** = in provider data and/or guides as in promoted-services inventory. **Partial** = only in a guide/tool, no dedicated services card row. **No** = recommended addition. |
| **Target placement** | Where it should live when you add or expand it. |

**“Official affiliate partnerships”** in your ask is mapped here as **Tracked** first, then **Programme (not tracked)** where you can still sign up via Awin, Daisycon, etc.

**Money column:** Treat every figure as a **hint**, not a promise. Confirm in **Awin / Daisycon / Impact / Everflow / brand partner portal** after login.

---

## 1. Banking, payments & FX

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | Wise (`wise`) | https://wise.com/ | Tracked | https://wise.com/gb/affiliate-program/ | Often quoted **~£10** personal / **~£50** business per qualifying signup; thresholds in portal — **confirm in Wise partner terms** | Yes | `/netherlands/services/banks/`; affiliates; Eindhoven; tools |
| A | bunq (`bunq`) | https://www.bunq.com/ | Tracked | https://www.bunq.com/lp/affiliate-program | Often quoted **~€40–€50 CPA** per verified customer — **confirm in Everflow / bunq affiliate dashboard** | Yes | `/netherlands/services/banks/`; affiliates; Eindhoven; tools |
| A | ABN AMRO (`abn-amro`) | https://www.abnamro.nl/ | Tracked | https://www.adtraction.com/nl · https://www.awin.com/ (search merchant **ABN AMRO**) | **Product/campaign-specific** (account, mortgage, etc.) — **see Adtraction/Awin merchant** | Yes | `/netherlands/services/banks/`; affiliates; Eindhoven; tools |
| B | Revolut (`revolut`) | https://www.revolut.com/ | Programme (not tracked) | https://www.revolut.com/legal/affiliate-influencer-promotion-2023/ (terms; join via **Impact** / regional programme) | **Impact**: fixed **CPA** per product/geo; **varies by campaign** — **see Impact merchant** | Yes | `/netherlands/services/banks/` |
| C | ING (`ing`) | https://www.ing.nl/en/personal/expats | Programme (not tracked) — verify | https://www.financeads.com/ (search **ING**; region/product varies) | **Network-dependent** (account/card products) — **see FinanceAds / programme terms** | Yes | `/netherlands/services/banks/` |
| C | Knab (`knab`) | https://www.knab.nl/ | None known | — | — | Yes | `/netherlands/services/banks/` |
| C | Rabobank (`rabobank`) | https://www.rabobank.nl/ | None known | — | — | Yes | `/netherlands/services/banks/` |
| C | SNS Bank (`sns-bank`) | https://www.snsbank.nl/ | None known | — | — | Yes | `/netherlands/services/banks/` |
| C | ASN Bank (`asn-bank`) | https://www.asnbank.nl/ | None known | — | — | Yes | `/netherlands/services/banks/` |
| C | Triodos Bank (`triodos-bank`) | https://www.triodos.nl/ | None known | — | — | Yes | `/netherlands/services/banks/` |
| D | **N26 / other EU e-money** (optional compare) | — | Varies | Check each brand’s **Affiliate** / **Partners** footer | Varies — **per brand programme** | No | Banks hub or “alternatives” box |
| D | **Traditional expat onboarding packs** (paid services) | — | B2B | Contact providers directly | **Custom B2B** (fee per package) — not CPA | No | Relocation or banks explainer only |

---

## 2. Mobile & connectivity

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | Simyo (`simyo`) | https://www.simyo.nl/ | Tracked | https://www.awin.com/ · https://www.linkpizza.com/ (search **Simyo**) | NL telecom: often **fixed CPA** per subscription (tens of € typical for MVNO) — **see Awin/LinkPizza campaign** | Yes | Affiliates; tools/guides |
| A | Lebara (`lebara`) | https://www.lebara.nl/ | Tracked | https://www.daisycon.com/nl/campagnes/13222-lebara/ · https://www.awin.com/ (search **Lebara**) | Similar **fixed CPA** / bundle offers — **see Daisycon 13222 / Awin** | Yes | Affiliates; tools/guides |
| D | **KPN** | https://www.kpn.com/ | B2B / partnerships | https://www.kpn.com/zakelijk (business / partner routes; no standard publisher CPA) | **No common publisher CPA** — wholesale / partner deals | No | New “Mobile & internet” callout or services hub |
| D | **Odido** (T-Mobile / Tele2 NL) | https://www.odido.nl/ | B2B / partnerships | https://www.odido.nl/zakelijk | **No common publisher CPA** — wholesale / partner deals | No | New “Mobile & internet” callout or services hub |
| D | **Vodafone Ziggo** | https://www.vodafoneziggo.nl/ | B2B / partnerships | https://www.vodafoneziggo.nl/zakelijk | **No common publisher CPA** — wholesale / partner deals | No | New “Mobile & internet” callout or services hub |
| D | **Prepaid vs contract explainer** (no single brand) | — | — | — | — | Partial | Strengthen in moving / first-30-days guides |

---

## 3. Insurance — comparison, zorg, international, pet

### 3a. Comparison & switching

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | Independer (`independer`) | https://www.independer.nl/ | Tracked | https://www.awin.com/ · https://www.linkpizza.com/ (search **Independer** — Zorg, Auto, Energie, etc.) | **Per vertical** on Awin (Zorg / Auto / Energie / …): often **per lead** or **per sale**; third-party summaries cite **~US$20–40 per lead** for Zorg — **currency & model vary** — **see Awin merchant profile** | Yes | Affiliates; `/netherlands/services/health-insurance/` |
| B | **Pricewise** | https://www.pricewise.nl/ | Programme — verify | Search **Pricewise** on https://www.awin.com/, https://www.linkpizza.com/, https://www.daisycon.com/nl/ (network varies) | **Per campaign** (lead/sale) — **see network after signup** | No | Health-insurance hub or comparison sidebar |

### 3b. Dutch basic health (zorg)

Each insurer is a **separate** row (matches `slug` in `health-insurance.ts` and [promoted-services.md](./promoted-services.md)). Monetisation is still usually via **Independer**, not a direct insurer CPA.

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Zilveren Kruis (`zilveren-kruis`) | https://www.zilverenkruis.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | CZ (`cz`) | https://www.cz.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | Menzis (`menzis`) | https://www.menzis.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | VGZ (`vgz`) | https://www.vgz.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | OHRA (`ohra`) | https://www.ohra.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | Ditzo (`ditzo`) | https://www.ditzo.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | FBTO (`fbto`) | https://www.fbto.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | DSW (`dsw`) | https://www.dsw.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | ONVZ (`onvz`) | https://www.onvz.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | Unive (`unive`) | https://www.unive.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |
| C | HollandZorg (`hollandzorg`) | https://www.hollandzorg.nl/ | None known | No open publisher CPA found — point readers to **Independer** row | **Via Independer** — **see §3a Independer row** | Yes | `/netherlands/services/health-insurance/` |

### 3c. International / expat health

Each insurer is a **separate** row (matches `slug` in `international-health-insurance.ts`).

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Cigna Healthcare / Cigna Global (`cigna-global`) | https://www.cigna.com/international/ | B2B / broker | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site | **Broker commission / overrides** — not open publisher CPA for most sites | Yes | `/netherlands/services/health-insurance/`; detail `/netherlands/services/insurance/cigna-global/` |
| C | Allianz Care (`allianz-care`) | https://www.allianzcare.com/ | B2B / broker | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site | **Broker commission / overrides** — not open publisher CPA for most sites | Yes | `/netherlands/services/health-insurance/`; detail `/netherlands/services/insurance/allianz-care/` |
| C | Bupa Global (`bupa-global`) | https://www.bupaglobal.com/ | B2B / broker | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site | **Broker commission / overrides** — not open publisher CPA for most sites | Yes | `/netherlands/services/health-insurance/`; detail `/netherlands/services/insurance/bupa-global/` |
| C | Aetna International (`aetna-international`) | https://www.aetnainternational.com/ | B2B / broker | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site | **Broker commission / overrides** — not open publisher CPA for most sites | Yes | `/netherlands/services/health-insurance/`; detail `/netherlands/services/insurance/aetna-international/` |
| C | Now Health International (`now-health`) | https://www.nowhealth.com/ | B2B / broker | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site | **Broker commission / overrides** — not open publisher CPA for most sites | Yes | `/netherlands/services/health-insurance/`; detail `/netherlands/services/insurance/now-health/` |
| D | **Additional global insurers** (optional) | — | B2B | **Broker / corporate sales** — “Brokers”, “Partners”, or equivalent on brand site on each brand’s site | **Broker commission / overrides** — not open publisher CPA for most sites | No | With other international insurers in §3c, if editorially justified |

### 3d. Pet, travel, liability (ancillary)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| B | zooplus NL | https://www.zooplus.nl/ | Programme (not tracked) | https://partner.zooplus.com/en/ | Usually **% of order** (category-dependent) — **see zooplus partner portal** | Partial | Pets guide; optional retail sidebar |
| C | Petplan NL | https://www.petplan.nl/ | None known | Search **Petplan** on https://www.awin.com/ / https://www.linkpizza.com/ (verify current programmes) | If on network: **CPA or lead** — **see merchant** | Partial | Pets guide |
| D | **Allianz Assistance** (NL travel / assistance) | https://www.allianz-assistance.nl/ | Varies | Search **Allianz Assistance** + **affiliate** or check https://www.awin.com/ / https://www.daisycon.com/nl/ | **Per brand** (lead or % premium) — **see network** | No | Visa / first-trip guides |
| D | **Europ Assistance** (NL) | https://www.europ-assistance.nl/ | Varies | Corporate **Partners** / broker routes; verify publisher programmes | **Per brand** (lead or % premium) | No | Visa / first-trip guides |
| D | **Unigarant** (ANWB travel insurance) | https://www.unigarant.nl/ | Varies | Search **Unigarant** / **ANWB** on publisher networks | **Per campaign** — verify | No | Visa / first-trip guides |
| D | **Travel insurance** (other brands + comparators) | — | Varies | Search brand + **affiliate** or join https://www.awin.com/ / https://www.daisycon.com/nl/ | **Per brand** (lead or % premium) | No | Visa / first-trip guides |
| D | **Liability (aansprakelijkheid)** — generic explainer + Independer path | — | Often via comparator | Enrol via **Awin** / **LinkPizza** and search **Independer** for the liability / household verticals (often listed with Zorg, Auto, Energie bundles) | **Per vertical** on Awin: often **per lead** or **per sale** — **see Awin merchant profile** for that product line | No | Health-insurance or “living” pillar |

---

## 4. Housing & rentals

### 4a. Platforms & operators

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | HousingAnywhere (`housinganywhere`) | https://housinganywhere.com/ | Tracked | https://info.housinganywhere.com/partnerships | **Not public**; often **CPA or revenue share** on completed bookings — **negotiate / see partnership agreement** | Yes | Affiliates; housing hub; Eindhoven |
| B | Kamernet (`kamernet`) | https://www.kamernet.nl/ | Programme (not tracked) | https://www.daisycon.com/nl/campagnes/447-kamernet/ | Daisycon campaign historically **~€2–€5 per paid transaction** — **confirm on campaign 447** | Yes | `/netherlands/services/housing-platforms/` |
| C | Funda (`funda`) | https://www.funda.nl/en/ | B2B (listings) | https://www.funda.nl/en/business/ (listings / business) | **Listing subscriptions** for pros — **not** typical publisher rev share | Yes | Housing hub |
| C | Pararius (`pararius`) | https://www.pararius.com/ | None known | Contact via corporate **Marketing** / **Partners** (no stable public publisher link found) | — | Yes | Housing hub |
| C | Holland2Stay (`holland2stay`) | https://www.holland2stay.com/ | Mixed | Search **affiliate** / **partner** on site — verify | **Per brand** (CPA, % booking, or none) | Yes | `/netherlands/services/housing-platforms/` |
| C | Flatio (`flatio`) | https://flatio.com/ | Mixed | Search **affiliate** / **partner** on site — verify | **Per brand** (CPA, % booking, or none) | Yes | `/netherlands/services/housing-platforms/` |
| C | Nestpick (`nestpick`) | https://www.nestpick.com/ | Mixed | Search **affiliate** / **partner** on site — verify | **Per brand** (CPA, % booking, or none) | Yes | `/netherlands/services/housing-platforms/` |
| C | Student Experience (`student-experience`) | https://www.studentexperience.com/ | Mixed | Search **affiliate** / **partner** on site — verify | **Per brand** (CPA, % booking, or none) | Yes | `/netherlands/services/housing-platforms/` |
| C | Short Stay Group (`short-stay-group`) | https://www.shortstaygroup.com/ | Mixed | Search **affiliate** / **partner** on site — verify | **Per brand** (CPA, % booking, or none) | Yes | `/netherlands/services/housing-platforms/` |
| D | **The Social Hub** (and similar student / hybrid operators) | e.g. https://www.thesocialhub.co/ | B2B | https://www.thesocialhub.co/ → corporate **Partners** / **Contact** | **Corporate / group sales** — custom | No | Housing or city guides |

### 4b. Expat-centre rental & broker listings

One row per listing in `rental-agencies.ts` (`providerUrl` is usually the expat-centre partner page; `!WOON` also has `websiteUrl`).

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | MVA Certified Expat Brokers (`mva-certified-expat-broker`) | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker | Nonprofit / editorial | I amsterdam partner listing — **not** CPA | — | Yes | `/netherlands/services/rental-agencies/` |
| C | Corporate Housing Living (`corporate-housing-living`) | https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living | Nonprofit / editorial | THIC partner listing | — | Yes | `/netherlands/services/rental-agencies/` |
| C | Serviced Apartments by Preferred (`serviced-apartments-by-preferred`) | https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred | Nonprofit / editorial | THIC partner listing | — | Yes | `/netherlands/services/rental-agencies/` |
| C | Corporate Housing Factory (`corporate-housing-factory`) | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory | Nonprofit / editorial | I amsterdam partner listing | — | Yes | `/netherlands/services/rental-agencies/` |
| C | City Retreat (`city-retreat`) | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat | Nonprofit / editorial | I amsterdam partner listing | — | Yes | `/netherlands/services/rental-agencies/` |
| C | !WOON (`woon`) | https://www.woon.nl | Nonprofit / editorial | I amsterdam partner: https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/woon | — | Yes | `/netherlands/services/rental-agencies/` |
| C | RSH Relocation and Immigration Services (`rsh-relocation`) | https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services | Nonprofit / editorial | THIC relocation partner (also full agency row under §6) | — | Yes | `/netherlands/services/rental-agencies/` |
| C | RelocAid (`relocaid`) | https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid | Nonprofit / editorial | THIC relocation partner | — | Yes | `/netherlands/services/rental-agencies/` |
| C | PASBMS Immigration and Relocation Services (`pasbms`) | https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/ | Nonprofit / editorial | Rotterdam Expat Centre partner | — | Yes | `/netherlands/services/rental-agencies/` |
| C | HR Expat Services (`hr-expat-services`) | https://rotterdamexpatcentre.nl/location/hr-expat-services/ | Nonprofit / editorial | Rotterdam Expat Centre partner | — | Yes | `/netherlands/services/rental-agencies/` |

---

## 5. Immigration, legal & visa services

### 5a. Immigration lawyers (`immigration-lawyers.ts`)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Fragomen (`fragomen`) | https://www.fragomen.com/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Everaert Advocaten (`everaert`) | https://www.everaert.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Orion Immigration (`orion-immigration`) | https://www.orion-immigration.com/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Franssen Advocaten (`franssen-advocaten`) | https://www.franssenadvocaten.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Pathway Partners (`pathway-partners`) | https://www.pathwaypartners.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Adam & Wolf Immigration Lawyers (`adam-wolf`) | https://www.adamwolf.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Kroes Advocaten (`kroes-advocaten`) | https://www.kroesadvocaten.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Singh Raaijmakers Lawyers (`singh-raaijmakers`) | https://www.singhraaijmakers.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Law & More Advocaten (`law-more`) | https://www.lawandmore.nl/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| C | Baker McKenzie Amsterdam (`baker-mckenzie`) | https://www.bakermckenzie.com/ | B2B | **Commercial / referral** — contact firm; corporate **Partners** routes where published | **Referral / retainer** — bespoke; **not** open CPA | Yes | `/netherlands/services/immigration-lawyers/` |
| D | **Additional boutique firms** (city-specific) | — | B2B | Direct outreach | **Referral / retainer** — bespoke; **not** open CPA | No | Optional city hubs or long-tail guides |

### 5b. Visa consultants (`visa-consultants.ts`)

Some slugs also appear under §5a (different hub). **Everaert** uses `everaert` on lawyers and `everaert-advocaten` on visa consultants in data.

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Fragomen (`fragomen`) | https://www.fragomen.com/offices/amsterdam.html | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Pathway Partners (`pathway-partners`) | https://pathwaypartners.nl/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Immigration Advise NL (`immigration-advise-nl`) | https://immigrationadvise.nl/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Lex Braxis (`lex-braxis`) | https://www.lexbraxis.com/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Kroes Advocaten (`kroes-advocaten`) | https://www.kroesadvocaten.nl/en/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Everaert Advocaten (`everaert-advocaten`) | https://www.everaert.nl/en/home/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Newland Chase (`newland-chase`) | https://www.newlandchase.com/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |
| C | Crown Relocations (`crown-relocations`) | https://www.crownrelo.com/ | B2B | **Commercial / referral** | **Referral / retainer** — bespoke | Yes | `/netherlands/services/visa-consultants/` |

---

## 6. Relocation, moving & practical setup

One row per provider in `relocation-services.ts` (core list = `relocation-agencies.ts` **plus** Packimpex, Eurohome, Royal De Gruijter, Utility Direct).

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Expat2Holland (`expat2holland`) | https://www.expat2holland.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Jimble (`jimble`) | https://www.jimble.nl | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | RSH Relocation and Immigration Services (`rsh-relocation-and-immigration-services`) | https://www.rsh.nl | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | RelocAid (`relocaid`) | https://www.relocaid.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | ACCESS (`access`) | https://www.access-nl.org | Nonprofit | Membership / volunteer / partnership — **not** affiliate CPA | — | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Altair Global (`altair-global`) | https://www.altairglobal.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | PASBMS Immigration and Relocation Services (`pasbms-immigration-and-relocation-services`) | https://www.pasbms.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | HR Expat Services (`hr-expat-services`) | https://www.hrexpatservices.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Packimpex (`packimpex`) | https://www.packimpex.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Eurohome Relocation Services (`eurohome-relocation-services`) | https://www.eurohome.nl | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Royal De Gruijter & Co. (`royal-de-gruijter-co`) | https://www.royaldegruijter.com | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Utility Direct (`utility-direct`) | https://www.utilitydirect.nl | B2B | **B2B partnerships** — **Corporate** / **Relocation** | **Invoice / contract** — not publisher CPA | Yes | `/netherlands/services/relocation-services/`; `/relocation-agencies/` |
| C | Santa Fe Relocation (`santa-fe-relocation`) | https://www.santaferelo.com/ | B2B | **Corporate** / **Partners**; assignee and private moves | **Commercial quote** — not publisher CPA | No | Moving / shipping guides; optional `/relocation-services/` cross-link |
| C | AGS Movers Netherlands (`ags-movers-nl`) | https://www.ags-movers.nl/ | B2B | **Corporate** / **Partners**; assignee and private moves | **Commercial quote** — not publisher CPA | No | Moving / shipping guides; optional `/relocation-services/` cross-link |
| C | De Haan Relocation (`de-haan-relocation`) | https://www.dehaanrelocation.com/ | B2B | **Corporate** / **Partners**; assignee and private moves | **Commercial quote** — not publisher CPA | No | Moving / shipping guides; optional `/relocation-services/` cross-link |
| C | Gosselin (`gosselin`) | https://www.gosselin.nl/ | B2B | **Corporate** / **Partners**; assignee and private moves | **Commercial quote** — not publisher CPA | No | Moving / shipping guides; optional `/relocation-services/` cross-link |
| D | **Other international movers** (Atlas, Schmitz, etc.) | — | B2B | Per brand: **Corporate** or **Partners** pages | **Referral fees** sometimes — **per brand** | Partial | Moving / shipping guides |

---

## 7. Energy & utilities (household)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Utility Direct (`utility-direct`) | https://www.utilitydirect.nl | B2B | Contact via website (B2B / expat packages); also §6 | **Commercial agreement** | Yes | `/netherlands/services/relocation-services/` |
| D | Essent (not in `providers/` yet) | https://www.essent.nl/ | Programme / B2B — verify | **Zakelijk** / **Partners**; may appear on **Awin** / **Tradetracker** — search brand | **Switch/lead CPA** on some comparator campaigns — **see network** | No | New subsection: “Energy contract after rental” |
| D | Eneco (not in `providers/` yet) | https://www.eneco.nl/ | Programme / B2B — verify | **Zakelijk** / **Partners**; may appear on **Awin** / **Tradetracker** — search brand | **Switch/lead CPA** on some comparator campaigns — **see network** | No | New subsection: “Energy contract after rental” |
| D | Vattenfall (not in `providers/` yet) | https://www.vattenfall.nl/ | Programme / B2B — verify | **Zakelijk** / **Partners**; may appear on **Awin** / **Tradetracker** — search brand | **Switch/lead CPA** on some comparator campaigns — **see network** | No | New subsection: “Energy contract after rental” |
| D | **Energy comparison** (e.g. Independer Energie path) | — | Often via comparator | https://www.awin.com/ · https://www.linkpizza.com/ (search **Independer** + **Energie** / energy vertical) | **Per vertical** on Awin: often **per lead** or **per sale** for energy — **see Awin merchant profile** | No | Link from §3a Independer row or dedicated line in checklist |

---

## 8. Recruitment & work

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| B | Indeed NL | https://www.indeed.nl/ | Programme (not tracked) | https://publisher.indeed.com/ | **Indeed Publisher**: performance model (**CPC / CPA / hybrid** by geography & product) — **see publisher terms** | Partial | Move-without-job guides |
| C | LinkedIn Jobs | https://www.linkedin.com/jobs/ | B2B | https://business.linkedin.com/marketing-solutions/linkedin-ads (advertising; not classic CPA affiliate) | **Ad spend** — not rev share to editorial | Partial | Move-without-job guides |
| C | Undutchables (`undutchables`) | https://www.undutchables.nl/ | None known | **B2B** — **Marketing** / **Partnerships** | — | Partial | Move-without-job guides |
| C | Randstad NL (`randstad-nl`) | https://www.randstad.nl/ | None known | **B2B** — **Marketing** / **Partnerships** | — | Partial | Move-without-job guides |
| C | Michael Page Netherlands (`michael-page-nl`) | https://www.michaelpage.nl/ | B2B | **Marketing** / **Partnerships**; regional recruiter programme | **Custom** — not open publisher CPA for most | No | Move-without-job guides; work pillar |
| C | Robert Half Netherlands (`robert-half-nl`) | https://www.roberthalf.nl/ | B2B | **Marketing** / **Partnerships**; regional recruiter programme | **Custom** — not open publisher CPA for most | No | Move-without-job guides; work pillar |
| C | Hays Netherlands (`hays-nl`) | https://www.hays.nl/ | B2B | **Marketing** / **Partnerships**; regional recruiter programme | **Custom** — not open publisher CPA for most | No | Move-without-job guides; work pillar |
| C | Tempo-Team (`tempo-team-nl`) | https://www.tempo-team.nl/ | B2B | **Marketing** / **Partnerships**; regional recruiter programme | **Custom** — not open publisher CPA for most | No | Move-without-job guides; work pillar |
| C | Experis Netherlands (`experis-nl`) | https://www.experis.nl/ | B2B | **Marketing** / **Partnerships**; regional recruiter programme | **Custom** — not open publisher CPA for most | No | Move-without-job guides; work pillar |
| D | **Expat-focused recruiters** (additional boutiques) | — | B2B | Direct outreach | — | No | Work pillar or city pages |

---

## 9. Education & childcare

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | British School in the Netherlands (`british-school-netherlands`) | https://www.britams.nl/ | B2B | **Admissions** / **Community** partnerships — no standard affiliate | — | Partial | Kids / family guides |
| C | International School of Amsterdam (`international-school-amsterdam`) | https://www.isa.nl/ | B2B | **Admissions** / **Community** partnerships — no standard affiliate | — | Partial | Kids / family guides |
| C | Partou (`partou`) | https://www.partou.nl/ | B2B | Corporate contact — no standard publisher CPA | — | Partial | Kids / family guides |
| C | Kinderopvang.nl (`kinderopvang-nl`) | https://www.kinderopvang.nl/ | — | Official childcare portal — institutional **Contact** | — | Partial | Kids / family guides |
| C | International School Rotterdam (`international-school-rotterdam`) | https://www.isr.nl/ | B2B | **Admissions** / **Community** partnerships | — | No | Rotterdam / family guides |
| C | International School of The Hague (`international-school-the-hague`) | https://www.ishthehague.nl/ | B2B | **Admissions** / **Community** partnerships — no standard affiliate | — | No | The Hague / family guides |
| C | European School The Hague (`european-school-the-hague`) | https://www.europeanschoolthehague.nl/ | B2B | Official / institutional **Contact** | — | No | The Hague / family guides |
| C | International School Utrecht (`international-school-utrecht`) | https://www.isutrecht.nl/ | B2B | **Admissions** / **Community** | — | No | Utrecht / family guides |
| D | **Other international schools** (Eindhoven region, primary-only, etc.) | — | B2B | Per school admissions office | — | No | City or family guides |

---

## 10. Tax & accounting

Planning list for a future **`/netherlands/services/tax-accounting/`** hub (already linked from the banks category copy). **No endorsement** — verify each firm’s scope (income tax, payroll, VAT, DAFT, 30% ruling, etc.) before listing. Slugs are **editorial / proposed** until added to `providers/*.ts` and [promoted-services.md](./promoted-services.md).

### 10a. Expat & cross-border tax (boutiques & specialists)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | Blue Umbrella (`blue-umbrella`) | https://www.blueumbrella.nl/ | B2B | Contact for B2B / referral (no public publisher link in inventory) | **Referral / introducer** — negotiate | Partial | DAFT / self-employed visa modules; future tax hub |
| B | OrangeTax (`orangetax`) | https://www.orangetax.com/ | B2B | **Marketing** / **Partnerships**; tax content collaborations | **Custom** — not publisher CPA | No | Tax hub; `/netherlands/money/taxes/` cross-links |
| B | Holla Advocaten & Tax (`holla`) | https://www.holla.nl/ | B2B | Combined legal + tax — **Contact** / corporate | **Retainer / project** — bespoke | No | Tax hub; immigration-adjacent content |
| B | Taxperience (`taxperience`) | https://www.taxperience.nl/ | B2B | Expat-focused tax advisory — direct **Contact** | **Retainer / fixed fee** — bespoke | No | Tax hub |
| B | Waterman Legal (`waterman-legal`) | https://waterman-legal.com/ | B2B | Legal + tax for internationals — **Contact** | **Retainer / project** — bespoke | No | Tax hub; visa-related pages |
| C | MFFA Belastingadvies (`mffa`) | https://www.mffa.nl/ | B2B | Cross-border / expat tax — **Contact** | **Custom** | No | Tax hub |
| C | TaxAble (`taxable`) | https://www.taxable.nl/ | B2B | Personal & business tax; 30% ruling; Naarden/Amsterdam area — **Contact** | **Custom** | No | Tax hub |
| C | Expatax (`expatax`) | https://www.expatax.nl/ | B2B | Payroll, 30% ruling, expat returns — **Contact** | **Custom** | No | Tax hub |

### 10b. Mid-tier firms & networks (often have expat desks)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Azets (`azets-nl`) | https://www.azets.nl/ | B2B | **Corporate** tax & accounting — **Contact** | **Commercial agreement** | No | Tax hub |
| C | BDO Nederland (`bdo-nl`) | https://www.bdo.nl/ | B2B | Big mid-tier; global mobility / tax — **Contact** | **Commercial agreement** | No | Tax hub |
| C | Grant Thornton Nederland (`grant-thornton-nl`) | https://www.grantthornton.nl/ | B2B | Tax & advisory — **Contact** | **Commercial agreement** | No | Tax hub |
| C | Baker Tilly Netherlands (`baker-tilly-nl`) | https://www.bakertilly.nl/ | B2B | Tax & accountancy network — **Contact** | **Commercial agreement** | No | Tax hub |
| C | Crowe Foederer (`crowe-foederer`) | https://www.crowe.nl/ | B2B | Audit & advisory — **Contact** | **Commercial agreement** | No | Tax hub |

### 10c. Big Four (global mobility & corporate expat tax)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Deloitte Netherlands (`deloitte-nl`) | https://www.deloitte.com/nl/nl.html | B2B | Global employer services / tax — **Contact** | **Enterprise** — bespoke | No | Tax hub (corporate audience); rarely consumer CPA |
| C | EY Netherlands (`ey-nl`) | https://www.ey.com/nl_nl | B2B | People advisory / tax — **Contact** | **Enterprise** — bespoke | No | Tax hub (corporate audience); rarely consumer CPA |
| C | KPMG Netherlands (`kpmg-nl`) | https://home.kpmg/nl | B2B | Global mobility / tax — **Contact** | **Enterprise** — bespoke | No | Tax hub (corporate audience); rarely consumer CPA |
| C | PwC Netherlands (`pwc-nl`) | https://www.pwc.nl/ | B2B | Tax & legal — **Contact** | **Enterprise** — bespoke | No | Tax hub (corporate audience); rarely consumer CPA |

### 10d. Payroll, umbrella & employer-of-record

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| B | Octagon Professionals (`octagon-professionals`) | https://www.octagon.nl/ | B2B | Payroll / contractor solutions for internationals — **Contact** | **Commercial fee** per employee — not publisher CPA | No | Tax hub; “working in NL” guides |
| B | Payingit International (`payingit-international`) | https://www.payingit-international.nl/ | B2B | Payroll & HR for expats — **Contact** | **Commercial agreement** | No | Tax hub; “working in NL” guides |
| B | Tentoo (`tentoo`) | https://www.tentoo.nl/ | B2B | Payroll / flexible employment — **Zakelijk** **Contact** | **Commercial agreement** | No | Tax hub; “working in NL” guides |
| C | ADP Nederland (`adp-nl`) | https://www.adp.nl/ | B2B | Employer payroll services — **Partners** / **Zakelijk** | **Enterprise** | No | Tax hub; “working in NL” guides |

### 10e. SME accounting software & bookkeeping platforms

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| B | Exact (`exact-nl`) | https://www.exact.com/nl | Programme — verify | Search **Exact** on https://www.awin.com/ / partner portals (accounting software often has **partner** not consumer CPA) | **Partner / rev share** — verify programme | No | Tax hub; self-employed / ZZP guides |
| B | e-Boekhouden.nl (`e-boekhouden`) | https://www.e-boekhouden.nl/ | Programme — verify | Search brand + **partner** / **affiliate** | **Per signup** or **rev share** — verify | No | Tax hub; self-employed / ZZP guides |
| C | MoneyMonk (`moneymonk`) | https://www.moneymonk.nl/ | None known | Direct **Contact** | — | No | Tax hub; self-employed / ZZP guides |
| C | SnelStart (`snelstart`) | https://www.snelstart.nl/ | Programme — verify | Partner / reseller routes | **Varies** | No | Tax hub; self-employed / ZZP guides |
| C | Yuki (`yuki`) | https://www.yuki.nl/ | Programme — verify | Partner programme (often accountant-led) | **Varies** | No | Tax hub; self-employed / ZZP guides |

### 10f. Official sources (no affiliate)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| A | Belastingdienst (`belastingdienst`) | https://www.belastingdienst.nl/ | — | Official guidance only — link for readers | — | Partial | All tax content; tools disclaimers |
| B | Business.gov.nl (`business-gov-nl`) | https://business.gov.nl/ | — | Official starter / SME guidance | — | Partial | Self-employed / business setup guides |

### 10g. Topic gaps (not single brands)

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| D | **30% ruling** explainer + calculator (tool-first) | — | — | Cross-link internal tools; cite Belastingdienst | — | Partial | `/netherlands/money/tools/` |
| D | **M-form / non-resident filing** explainer | — | — | Educational; point to advisors in §10a–c | — | No | Tax hub |
| D | **ZZP / sole trader** (KVK + VAT + income tax path) | — | — | Official + §10e software + accountant row | — | Partial | Money pillar |

---

## 11. Pets & travel

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Pet Relocation (`pet-relocation`) | https://www.petrelocation.com | B2B | Quote / **Partners** on site | **Service fees** — not publisher rev share | Partial | Pets guide |
| C | Starwood Animal Transport (`starwood-animal-transport`) | https://www.starwoodpet.com | B2B | Quote / **Partners** on site | **Service fees** — not publisher rev share | Partial | Pets guide |
| C | PetAir UK (`petair-uk`) | https://www.petairuk.com | B2B | Quote / **Partners** on site | **Service fees** — not publisher rev share | Partial | Pets guide |
| C | KLM (`klm`) | https://www.klm.com/ | B2B | Airline commercial — not classic publisher CPA | — | Partial | Pets guide |

---

## 12. Startup visa facilitators

One row per RVO-listed facilitator in `startup-visa-advisors.ts` (`startupFacilitators`).

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | 42workspace (`42workspace`) | https://www.42workspace.com/startup-visa-application/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Antler (`antler`) | https://www.antler.co/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Brightlands Campus Heerlen Management & Development B.V. (`brightlands-campus-heerlen`) | https://www.brightlands.com/brightlands-smart-services-campus | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Brightlands Chemelot Campus (`brightlands-chemelot-campus`) | https://www.brightlands.com/en/brightlands-chemelot-campus/startup-support | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Builders (`builders`) | https://www.builders.studio/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | CIC (`cic`) | https://innovation.cic.com/cic-rotterdam-startup-visa | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Crosspring (`crosspring`) | https://www.uglobally.com/startup-visa | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Dockwize (`dockwize`) | https://www.dockwize.nl/programmas/the-startup-visa-program | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | DutchBasecamp (`dutchbasecamp`) | https://dutchbasecamp.org/startup-visa | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Erasmus Centre for Entrepreneurship (`erasmus-centre-for-entrepreneurship`) | https://www.ece.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Frank & the Backs (`frank-and-the-backs`) | https://www.frankandthebacks.com/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Glass Frog Ventures (`glass-frog-ventures`) | https://glassfrogventures.com/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | HighTechXL (`hightechxl`) | https://hightechxl.com/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | HSD Campus (`hsd-campus`) | https://hsdcampus.nl/en/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | IMK - Instituut voor Midden- en Kleinbedrijf (`imk`) | https://imk.nl/innovative-startups/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Inqubator Leeuwarden (`inqubator-leeuwarden`) | https://www.startupvisa.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | NOM - Investerings- en ontwikkelingsmaatschappij Noord-Nederland (`nom`) | https://www.nom.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Novel-T (`novel-t`) | https://www.startupvisa.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Orange Sports Forum (`orange-sports-forum`) | https://www.orangesportsforum.com/startup-facilitator/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Planet B.io (`planet-b-io`) | https://www.planet-b.io/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | PortXL (`portxl`) | https://portxl.org/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Rockstart (`rockstart`) | https://www.rockstart.com/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Space Business Innovation Centre Noordwijk (`space-business-innovation-centre-noordwijk`) | https://www.sbicnoordwijk.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Startdock (`startdock`) | https://startdock.nl/en/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | StartLife (`startlife`) | https://start-life.nl/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Stichting Aerospace Innovation Hub (`stichting-aerospace-innovation-hub`) | https://aerospaceinnovationhub.nl/rvo-facilitator/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | TNW Amsterdam (`tnw-amsterdam`) | https://thenextweb.com/spaces/startup-visa | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Unusual Space (`unusual-space`) | https://theunusualspace.com/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | UtrechtInc (`utrechtinc`) | https://utrechtinc.nl/?lang=en | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | VU StartHub B.V. (`vu-starthub`) | https://vu-ondernemend.nl/en/startup-visa-facilitator/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | Water Alliance (`water-alliance`) | https://www.wateralliance.nl/en | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | We are changemakers (`we-are-changemakers`) | https://wearechangemakers.org/ | No (facilitator fees) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups · apply via **Website** | **Fees to founder** (programme / equity) — **not affiliate** | Yes | `/netherlands/services/startup-visa-advisors/` |
| C | **RVO official list** (authority) | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups | — | https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups | — | Linked from hub | Startup visa content |

---

## 13. Settlement, cities & official touchpoints

| Sort | Provider / service | Website | Affiliate partnership | Partnership / how to engage | Typical affiliate pay (indicative) | On website now? | Target placement |
|------|-------------------|---------|----------------------|----------------------------|-------------------------------------|-----------------|------------------|
| C | Holland Expat Center South | https://www.hollandexpatcenter.com/ | B2B | https://www.hollandexpatcenter.com/ — **Contact** / partnership (public sector–style; not CPA) | — | Yes | `/netherlands/eindhoven/` |
| C | I amsterdam | https://www.iamsterdam.com/ | None known | https://www.iamsterdam.com/ — **Partner** / **Press** routes for co-marketing | **Co-marketing** — not CPA | Partial | Visa / EU vs non-EU content |
| C | Study in Holland | https://www.studyinholland.nl/ | — | Official portal — **Contact** for institutional partnerships | — | Partial | Student visa |
| D | The Hague International Centre (not in `providers/` as own row) | https://www.thehagueinternationalcentre.nl/ | Nonprofit / gov-adjacent | Partner via centre **partner programmes** (rental listings sourced here) | — | Partial | Rental partner pages; city / settlement guides |
| D | Rotterdam Expat Centre (not in `providers/` as own row) | https://rotterdamexpatcentre.nl/ | Nonprofit / gov-adjacent | Partner via centre **partner programmes** (rental listings sourced here) | — | Partial | Rental partner pages; city / settlement guides |
| D | WeWork (not in `providers/` yet) | https://www.wework.com/ | B2B | **Business** / **Partners** ([complementary products](../backlinks/05-complementary-products.md)) | **Corporate memberships** — custom | No | Freelancer / DAFT guides |
| D | Spaces (not in `providers/` yet) | https://www.spacesworks.com/ | B2B | **Business** / **Partners** ([complementary products](../backlinks/05-complementary-products.md)) | **Corporate memberships** — custom | No | Freelancer / DAFT guides |

---

## Suggested hub coverage (services directory)

These **category pages** on Expat Copilot are the main “should list” shells; fill gaps above into the closest hub or a new hub when volume justifies it.

| Hub route | On site | Obvious gaps to add |
|-----------|---------|---------------------|
| `/netherlands/services/banks/` | Yes | — |
| `/netherlands/services/health-insurance/` | Yes | Pricewise; liability; travel insurance explainer |
| `/netherlands/services/housing-platforms/` | Yes | The Social Hub–type operators (optional) |
| `/netherlands/services/rental-agencies/` | Yes | — |
| `/netherlands/services/immigration-lawyers/` | Yes | Optional regional firms |
| `/netherlands/services/visa-consultants/` | Yes | — |
| `/netherlands/services/relocation-agencies/` | Yes | — |
| `/netherlands/services/relocation-services/` | Yes | — |
| `/netherlands/services/startup-visa-advisors/` | Yes | — |
| `/netherlands/services/tax-accounting/` | Planned | See **§10** (full candidate list); align with `/netherlands/money/taxes/` |
| **Mobile / telco** | No | KPN, Odido, Vodafone Ziggo |
| **Energy / utilities** | Partial | Large suppliers + comparison path |
| **Recruitment** | Partial | See **§8** (Michael Page, Hays, Robert Half, Tempo-Team, Experis, etc.) |
| **International movers** | Partial | See **§6** (Santa Fe, AGS, De Haan, Gosselin, …) |
| **International schools** | Partial | See **§9** (ISR, ISH, ESH, ISU, …) |

---

## Disclaimer

Planning doc only — not legal or financial advice. Affiliate availability and **your** enrolment status change; reconcile with [promoted-services.md](./promoted-services.md) after every provider data update. **Partnership / how to engage** URLs and network placements change — verify before signing contracts or publishing tracking links. **Typical affiliate pay** is **non-binding** and may be wrong for your account tier, country, tax treatment, or product line — use your **network dashboard and contracts** only for revenue forecasting.

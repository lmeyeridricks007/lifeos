# Government / DigiD / address consolidation map

**Site:** https://www.expatcopilot.com  
**Date:** 13 September 2026  
**Scope:** DigiD pair, address/municipality pair, government-services hub, staged BSN links.

**Method:** Read page models + route status + production link-graph inbound + local GSC dumps (no URL hits for these paths) + backlink outreach docs. **No redirects issued** where both pages remain valuable.

---

## 1. DigiD role map

| URL | Primary intent | Unique value | Inbound (prod link-graph) |
|-----|----------------|--------------|---------------------------:|
| `/netherlands/digid-awareness` | Arrival awareness — *when/why* to activate DigiD after BSN | Moving-funnel planning, tools CTAs, first-weeks sequencing | 24 |
| `/netherlands/practical-life/digid-netherlands` | Operational DigiD cornerstone — eligibility, security, portals, mistakes | Premium multi-section DigiD deep dive | 11 |

**Classification:** `GUIDE_VS_AWARENESS` (complementary, overlapping intro copy historically)

**Evidence against redirect:**
- Both live + indexable; no local GSC/Ahrefs URL evidence favoring a single winner
- digid-awareness has higher internal equity + Move nav + backlink promotions
- digid-netherlands is the substantial practical-life cornerstone used by hub/footer

**Decision:** `KEEP_BOTH_WITH_DISTINCT_ROLES`

| Action | Detail |
|--------|--------|
| Keep A (awareness) | Arrival timing / planning role; sharpened meta title/H1 framing |
| Keep B (digid-netherlands) | Complete DigiD operational guide; hub primary DigiD card |
| Cross-link | Awareness → DigiD cornerstone; DigiD → awareness for timing |
| Do not redirect | Insufficient traffic evidence |

---

## 2. Address registration role map

| URL | Primary intent | Unique value | Inbound |
|-----|----------------|--------------|--------:|
| `/netherlands/municipality-registration-netherlands` | BRP / gemeente registration obligation + process | Who must register, 5-day rule, BRP↔BSN, special cases, RNI note | 155 |
| `/netherlands/practical-life/registering-your-address-netherlands` | Address registration mechanics | Appointments, documents, temporary housing, DigiD post, city cards, mistakes | 13 |

**Classification:** `COMPLEMENTARY_INTENT`

**Distinction preserved:**
- Municipality/BRP registration = legal/process overview
- Address registration mechanics = practical how-to
- BSN consequences → live `/netherlands/bsn-registration`
- Temporary / RNI concepts remain on municipality guide (FAQ) + temporary housing on registering-address

**Decision:** `KEEP_BOTH_WITH_DISTINCT_ROLES`

| Action | Detail |
|--------|--------|
| Keep both | Distinct roles; metadata sharpened to reduce cannibalization |
| Cross-link | Each points to the other with role-specific anchor text |
| Preferred arrival link for “BRP obligation” | municipality-registration (high equity) |
| Preferred for “book appointment / documents” | registering-your-address |
| Do not redirect | Legacy redirects already point *into* registering-your-address for older aliases |

---

## 3. Government services hub

**Path:** `/netherlands/government-services`

### Journey sequence (implemented)

1. Registering Your Address  
2. Municipality Registration (BRP)  
3. BSN Registration ← **was Coming soon; now live `/bsn-registration`**  
4. DigiD in the Netherlands  
5. Government Portals (covers MijnOverheid / communication)  
6. Municipality Services  
7. Healthcare Allowance (benefits orientation)  
8. Health Insurance  
9. Property Tax (WOZ / local charges orientation)  
10. Taxes Hub  

### Card classifications

| Card | Classification | Destination |
|------|----------------|-------------|
| Registering Your Address | LIVE_EXISTING_PAGE | registering-your-address |
| Municipality Registration (BRP) | LIVE_EXISTING_PAGE | municipality-registration |
| BSN Registration | LIVE_BETTER_DESTINATION | bsn-registration (replaces staged bsn-netherlands) |
| DigiD in the Netherlands | LIVE_EXISTING_PAGE | digid-netherlands |
| Government Portals | LIVE_EXISTING_PAGE | government-portals |
| Municipality Services | LIVE_EXISTING_PAGE | municipality-services |
| Healthcare Allowance | LIVE_BETTER_DESTINATION | taxes/healthcare-allowance-netherlands |
| Health Insurance | LIVE_EXISTING_PAGE | health-insurance-netherlands |
| Property Tax | LIVE_BETTER_DESTINATION | taxes/property-tax-netherlands (for staged local-taxes) |
| Taxes Hub | LIVE_EXISTING_PAGE | /netherlands/taxes |
| ~~Local Taxes~~ | STAGED_DO_NOT_LINK | removed from hub |
| ~~Government Benefits~~ | STAGED_DO_NOT_LINK | removed; benefits → healthcare allowance |
| ~~Dutch Government Communication~~ | STAGED_DO_NOT_LINK | removed; covered by portals |
| ~~BSN Netherlands~~ | STAGED_DO_NOT_LINK | removed; retargeted to bsn-registration |

**Hub staged clickable cards after fix:** **0**

---

## 4. Internal links updated

| Area | Change |
|------|--------|
| digid-awareness.json | BSN labels → `/bsn-registration`; Register address → registering-your-address; related DigiD cornerstone |
| municipality-registration.json | Related → registering-address, bsn-registration, digid-awareness |
| digiDNetherlandsPageModel | BSN comingSoon → bsn-registration; link DigiD awareness |
| registeringYourAddress* | DigiD/BSN comingSoon → live digid-netherlands + bsn-registration |
| municipalityServices* | BSN/DigiD/local-taxes staged → live destinations |
| nav config Registration + Living | Retarget BSN/DigiD/local-taxes; distinct DigiD role copy |
| City hubs (AMS/RTM/UTR/Hague/EHV) | `/bsn-netherlands` → `/bsn-registration` |

**Preserved:** existing next.config / middleware redirects for legacy DigiD living path and register-address aliases (external traffic).

---

## 5. Metadata / copy

| Page | Change |
|------|--------|
| digid-awareness | Meta/subtitle emphasize arrival timing vs cornerstone |
| digid-netherlands | Title/subtitle emphasize security/portals operational guide |
| registering-your-address | Title/subtitle emphasize appointments/mechanics |
| municipality-registration | Subtitle/description emphasize BRP obligation overview |
| government-services hub | Intro + cards ordered as arrival journey |

No full page rewrites where roles were already clear beyond metadata + linking.

---

## 6. Evidence notes

| Source | Finding |
|--------|---------|
| `reports/seo-audit/gsc-*.csv` | No rows for these six URLs |
| `reports/final-production-review/production-link-graph.csv` | Inbounds above |
| `docs/backlinks/**` | Promotes digid-awareness, municipality-registration, bsn-registration |
| Route status | All six core URLs live; `bsn-netherlands` / `local-taxes` still coming-soon (unlinked) |

---

## Scorecard

DIGID DUPLICATION:  
DISTINCT_ROLES_CONFIRMED

ADDRESS DUPLICATION:  
DISTINCT_ROLES_CONFIRMED

GOVERNMENT SERVICES HUB:  
CLEAN

STAGED LINKS:  
0

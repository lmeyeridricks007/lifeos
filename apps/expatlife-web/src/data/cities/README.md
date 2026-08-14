# Netherlands cities & towns — coverage catalog

Local editorial inventory for ExpatLife city guides.  
Last reviewed: **2026-08-13**.

This is **not** a full CBS municipality list (340+). It catalogs places that matter for expat SEO / product coverage: dedicated city hubs we already ship, plus high-priority towns we do **not** have yet.

**Full Yes/No list of all Dutch municipalities:** [`NETHERLANDS-CITIES.md`](./NETHERLANDS-CITIES.md)

---

## How to read this doc

| Column | Meaning |
| --- | --- |
| **Status** | `Covered` = live App Router guide at `/netherlands/{slug}/` + data file in this folder. `Gap` = no dedicated city page yet. |
| **Popularity** | Editorial **expat interest** rank (1 = highest), not raw population alone. Factors: search demand, international jobs, housing interest, hub/commute role. |
| **Area** | Geographic / labour-market cluster (see groupings below). |
| **Transport** | Expat-relevant mobility role (NS hub, metro, airport corridor, regional). |

**Covered = 15 city hubs** (+ Randstad region guide + cities overview / compare / shortlist guides).

---

## Area groupings

Use these when planning clusters, nav, or related links (same idea as splitting Living → Public transport / Driving / etc.).

| Area | Focus | Covered now | Notable gaps |
| --- | --- | --- | --- |
| **Amsterdam Area (North Holland)** | Capital region, Schiphol corridor, suburban alternatives | Amsterdam, Haarlem, Amstelveen | Haarlemmermeer, Zaanstad, Hilversum, Alkmaar, Purmerend, Hoofddorp (town) |
| **South Holland — Rotterdam–The Hague** | Port, government/NGOs, university belt | Rotterdam, The Hague, Delft, Leiden | Dordrecht, Zoetermeer, Gouda, Delft suburbs, Scheveningen (district only) |
| **Utrecht region** | National rail hub, knowledge economy | Utrecht | Amersfoort, Nieuwegein, Zeist, Hilversum (border NH/UT) |
| **Brainport / North Brabant** | Tech manufacturing, student cities | Eindhoven, Tilburg, Breda | ’s-Hertogenbosch (Den Bosch), Helmond, ’s-Hertogenbosch area towns |
| **Gelderland — Arnhem–Nijmegen** | Lifeport / green east | Arnhem, Nijmegen | Apeldoorn, Wageningen, Ede |
| **Limburg** | Cross-border south | Maastricht | Heerlen, Venlo, Sittard-Geleen |
| **North Netherlands** | Student / research north | Groningen | Leeuwarden, Assen, Emmen |
| **Overijssel / Twente** | East industrial + mid-size cities | — | Enschede, Zwolle, Deventer |
| **Flevoland** | New-town / Amsterdam overflow | — | **Almere**, Lelystad |
| **Zeeland / Friesland / Drenthe (lighter)** | Lifestyle / remote | — | Middelburg, Leeuwarden (also North), Assen |

**Region guide (not a single town):** [Randstad Guide](/netherlands/randstad/) — Amsterdam, Rotterdam, The Hague, Utrecht as one connected region.

---

## Popularity ranking (expat interest)

Rough priority for content / SEO. Lower number = higher priority.

### Covered

| Rank | City / town | Area | Transport role | Route | Data file |
| ---: | --- | --- | --- | --- | --- |
| 1 | Amsterdam | Amsterdam Area | National + Schiphol; GVB metro/tram | `/netherlands/amsterdam/` | `amsterdam.ts` |
| 2 | Rotterdam | South Holland | Port + RET metro; NS Intercity | `/netherlands/rotterdam/` | `rotterdam.ts` |
| 3 | The Hague | South Holland | HTM tram; gov/NGO corridor | `/netherlands/the-hague/` | `the-hague.ts` |
| 4 | Utrecht | Utrecht region | **#1 NS interchange** (national hub) | `/netherlands/utrecht/` | `utrecht.ts` |
| 5 | Eindhoven | Brainport / N. Brabant | Airport + NS; Brainport commute | `/netherlands/eindhoven/` | `eindhoven.ts` |
| 6 | Haarlem | Amsterdam Area | Frequent rail to Amsterdam; coast | `/netherlands/haarlem/` | `haarlem.ts` |
| 7 | Amstelveen | Amsterdam Area | Tram/bus; Schiphol / Amsterdam south | `/netherlands/amstelveen/` | `amstelveen.ts` |
| 8 | Delft | South Holland | Rail between Den Haag–Rotterdam; TU | `/netherlands/delft/` | `delft.ts` |
| 9 | Leiden | South Holland | Rail on Amsterdam–Den Haag line; Bio Science | `/netherlands/leiden/` | `leiden.ts` |
| 10 | Groningen | North Netherlands | Regional hub; north rail | `/netherlands/groningen/` | `groningen.ts` |
| 11 | Maastricht | Limburg | South rail + cross-border | `/netherlands/maastricht/` | `maastricht.ts` |
| 12 | Breda | Brainport / N. Brabant | Intercity to Randstad / Belgium | `/netherlands/breda/` | `breda.ts` |
| 13 | Tilburg | Brainport / N. Brabant | Rail Brabant corridor | `/netherlands/tilburg/` | `tilburg.ts` |
| 14 | Nijmegen | Gelderland | Waal / Lifeport; regional rail | `/netherlands/nijmegen/` | `nijmegen.ts` |
| 15 | Arnhem | Gelderland | East rail hub; Arnhem–Nijmegen | `/netherlands/arnhem/` | `arnhem.ts` |

### Gaps (suggested next builds, by popularity)

| Rank | City / town | Area | Why it ranks | Suggested slug |
| ---: | --- | --- | --- | --- |
| 16 | **Almere** | Flevoland | Largest uncovered city; Amsterdam overflow housing | `almere` |
| 17 | **Amersfoort** | Utrecht region | Strong rail to Utrecht/Amsterdam; families | `amersfoort` |
| 18 | **’s-Hertogenbosch (Den Bosch)** | North Brabant | Provincial capital; Brabant triangle with Eindhoven/Tilburg | `den-bosch` |
| 19 | **Enschede** | Twente / Overijssel | University + tech east; underserved region | `enschede` |
| 20 | **Zwolle** | Overijssel | North–east rail node; growing mid-size | `zwolle` |
| 21 | **Haarlemmermeer** (incl. Hoofddorp) | Amsterdam Area | Schiphol municipality; airport workers | `haarlemmermeer` or `hoofddorp` |
| 22 | **Hilversum** | Amsterdam Area / Gooi | Media / Gooi; Amsterdam commute | `hilversum` |
| 23 | **Zaanstad** (Zaandam) | Amsterdam Area | Cheaper Amsterdam-north alternative | `zaanstad` |
| 24 | **Apeldoorn** | Gelderland | Large inland city; families | `apeldoorn` |
| 25 | **Zoetermeer** | South Holland | Den Haag overflow; rail | `zoetermeer` |
| 26 | **Dordrecht** | South Holland | South of Rotterdam; value + rail | `dordrecht` |
| 27 | **Alkmaar** | North Holland | North of Amsterdam; regional | `alkmaar` |
| 28 | **Leeuwarden** | Friesland / North | Provincial capital; north coverage | `leeuwarden` |
| 29 | **Wageningen** | Gelderland | Food / agri / university niche | `wageningen` |
| 30 | **Helmond** | Brainport | Eindhoven region manufacturing | `helmond` |
| 31 | **Venlo** | Limburg | Logistics / Germany border | `venlo` |
| 32 | **Heerlen** | Limburg | Parkstad; cheaper south | `heerlen` |
| 33 | **Deventer** | Overijssel | Mid-size IJssel city | `deventer` |
| 34 | **Gouda** | South Holland | Between Utrecht–Rotterdam | `gouda` |
| 35 | **Lelystad** | Flevoland | Flevoland pair with Almere | `lelystad` |
| 36 | **Nieuwegein** | Utrecht region | Utrecht south suburb | `nieuwegein` |
| 37 | **Zeist** | Utrecht region | Green / family Utrecht east | `zeist` |
| 38 | **Purmerend** | Amsterdam Area | North of Amsterdam | `purmerend` |
| 39 | **Ede** | Gelderland | Food valley / Wageningen corridor | `ede` |
| 40 | **Assen** | Drenthe | Light north coverage | `assen` |
| 41 | **Emmen** | Drenthe | Large northern municipality | `emmen` |
| 42 | **Middelburg** | Zeeland | Zeeland foothold | `middelburg` |
| 43 | **Sittard-Geleen** | Limburg | Chemelot / industry | `sittard-geleen` |
| 44 | **Westland** | South Holland | Greenhouse / Den Haag west | `westland` |
| 45 | **Roermond** | Limburg | Outlet / Meuse | `roermond` |

Ranks **16–25** are the practical build queue if we expand city hubs next.

---

## Catalog by area (covered + gaps)

### Amsterdam Area (North Holland)

| Place | Status | Pop. rank (approx.) | Popularity | Transport |
| --- | --- | ---: | ---: | --- |
| Amsterdam | Covered | 1 | 1 | Schiphol + GVB + NS |
| Haarlem | Covered | ~13 | 6 | Rail to AMS |
| Amstelveen | Covered | ~30 | 7 | Tram/bus; Schiphol south |
| Haarlemmermeer / Hoofddorp | Gap | ~17 | 21 | **Schiphol** municipality |
| Zaanstad | Gap | ~16 | 23 | Rail north of AMS |
| Hilversum | Gap | ~40 | 22 | Gooi rail to AMS |
| Alkmaar | Gap | ~27 | 27 | North Holland rail |
| Purmerend | Gap | ~50 | 38 | North of AMS |

### South Holland — Rotterdam / The Hague belt

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Rotterdam | Covered | 2 | RET metro + NS |
| The Hague | Covered | 3 | HTM + NS |
| Delft | Covered | 8 | NS (Den Haag–RTM) |
| Leiden | Covered | 9 | NS (AMS–Den Haag) |
| Zoetermeer | Gap | 25 | Rail to Den Haag |
| Dordrecht | Gap | 26 | South of RTM |
| Gouda | Gap | 34 | Between UT–RTM |
| Westland | Gap | 44 | Coastal / agri |

### Utrecht region

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Utrecht | Covered | 4 | **National NS hub** |
| Amersfoort | Gap | 17 | Strong Intercity |
| Nieuwegein | Gap | 36 | Utrecht south |
| Zeist | Gap | 37 | East of Utrecht |

### Brainport / North Brabant

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Eindhoven | Covered | 5 | Airport + NS |
| Tilburg | Covered | 13 | Brabant rail |
| Breda | Covered | 12 | Intercity / Belgium |
| Den Bosch | Gap | 18 | Provincial capital rail |
| Helmond | Gap | 30 | Eindhoven east |

### Gelderland

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Nijmegen | Covered | 14 | Regional / Lifeport |
| Arnhem | Covered | 15 | East rail hub |
| Apeldoorn | Gap | 24 | Inland |
| Wageningen | Gap | 29 | Niche university |
| Ede | Gap | 39 | Food valley |

### Limburg

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Maastricht | Covered | 11 | Cross-border south |
| Venlo | Gap | 31 | Logistics / DE |
| Heerlen | Gap | 32 | Parkstad |
| Sittard-Geleen | Gap | 43 | Chemelot |
| Roermond | Gap | 45 | Meuse |

### North + east (lighter coverage)

| Place | Status | Popularity | Transport |
| --- | --- | ---: | --- |
| Groningen | Covered | 10 | North hub |
| Almere | Gap | **16** | AMS overflow + rail |
| Enschede | Gap | 19 | Twente university |
| Zwolle | Gap | 20 | North–east node |
| Leeuwarden | Gap | 28 | Friesland capital |
| Deventer | Gap | 33 | IJssel |
| Lelystad | Gap | 35 | Flevoland |
| Assen / Emmen / Middelburg | Gap | 40–42 | Regional footholds |

---

## Related (non-city) pages already live

These are **not** town hubs but sit in the Cities pillar:

| Page | Path |
| --- | --- |
| Cities hub / overview | `/netherlands/cities/` |
| Randstad guide | `/netherlands/randstad/` |
| Best cities for expats | `/netherlands/cities/best-cities-for-expats/` |
| Cheapest cities for expats | `/netherlands/cities/cheapest-cities-for-expats/` |
| Best cities for families | `/netherlands/cities/best-cities-for-families/` |
| Best cities for international professionals | `/netherlands/cities/best-cities-for-international-professionals/` |
| Compare Dutch cities | `/netherlands/cities/compare/` |
| Amsterdam vs Rotterdam | `/netherlands/cities/amsterdam-vs-rotterdam/` |
| City comparison tool | `/netherlands/tools/city-comparison/` |

Nav source of truth: `src/lib/nav/config.ts` → `MEGA_MENUS.cities`.

---

## Implementation checklist (when adding a city)

1. Add `src/data/cities/{slug}.ts` (+ `cityStats` entry if used).
2. Add `app/netherlands/{slug}/page.tsx` (same pattern as existing hubs).
3. Register route in `src/data/site/route-registry.ts`.
4. Wire Cities mega menu (`Popular cities` vs `More Cities`).
5. Add comparison row / persona cards in `src/data/cities-overview/netherlands-cities.ts`.
6. Update **this README** (status → Covered, adjust gap ranks).

---

## Coverage snapshot

```
Covered city hubs:     15
Priority gaps (16–25): Almere, Amersfoort, Den Bosch, Enschede, Zwolle,
                       Haarlemmermeer, Hilversum, Zaanstad, Apeldoorn, Zoetermeer
Region guides:         Randstad + cities hub/shortlists
```

Population figures in this doc are approximate (CBS order-of-magnitude) for prioritisation only — use official sources on live pages.

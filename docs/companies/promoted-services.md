# Promoted services & companies (Expat Copilot)

Inventory of **commercial and partner brands** the site links to. **If this doc and the repo disagree, the repo wins** — refresh when you change `src/data/companies-registry.ts` or `src/content/affiliates/providers/*.json`.

**App root:** `apps/expatlife-web/` (paths below are relative to that tree).

**On-site disclosure:** [Affiliate disclosure](https://www.expatcopilot.com/affiliate-disclosure/) (`/affiliate-disclosure/`).

## Columns

| Column | Meaning |
|--------|---------|
| **Provider ID** | Slug in provider TypeScript, `content/affiliates/providers/<id>.json` for tracked affiliates, or editorial ID for guide-only brands. |
| **Website** | Primary outbound URL (or partner listing URL when data has no separate site). |
| **Priority** | *(Empty for now — fill for your own ranking.)* |
| **Categories** | Short topical label. |
| **Where used on Expat Copilot** | Source file + public path on [expatcopilot.com](https://www.expatcopilot.com). |
| **Affiliate program?** | **Yes** / **No** / **Unknown** / **B2B only** / **Nonprofit** / **No (facilitator programme)** — snapshot only. |
| **Affiliate program link** | Join or info URL, or **—**. |

Official references (IND, KvK, etc.) from `official-sources` are not listed here.

---

## Master table

| Provider ID | Website | Priority | Categories | Where used on Expat Copilot | Affiliate program? | Affiliate program link |
|-------------|---------|----------|------------|------------------------------|--------------------|------------------------|
| `42workspace` | https://www.42workspace.com/startup-visa-application/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `abn-amro` | https://www.abnamro.nl/ | | Banking & payments | `src/content/affiliates/providers/abn-amro.json`; tools & guides; `/netherlands/services/banks/`; `/netherlands/eindhoven/` | Yes | https://www.adtraction.com/nl · https://www.awin.com/ (search ABN AMRO) |
| `access` | https://www.access-nl.org | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/` | Nonprofit | — |
| `adam-wolf` | https://www.adamwolf.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `aetna-international` | https://www.aetnainternational.com/ | | International health insurance | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | B2B only | — |
| `allianz-care` | https://www.allianzcare.com/ | | International health insurance | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | B2B only | — |
| `altair-global` | https://www.altairglobal.com | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/` | B2B only | — |
| `antler` | https://www.antler.co/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `asn-bank` | https://www.asnbank.nl/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | No | — |
| `baker-mckenzie` | https://www.bakermckenzie.com/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `blue-umbrella` | https://www.blueumbrella.nl/ | | Tax | Guides / visa modules / tools — DAFT / self-employed visa content | B2B only | — |
| `brightlands-campus-heerlen` | https://www.brightlands.com/brightlands-smart-services-campus | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `brightlands-chemelot-campus` | https://www.brightlands.com/en/brightlands-chemelot-campus/startup-support | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `british-school-netherlands` | https://www.britams.nl/ | | Education | Guides / visa modules / tools — Moving with kids guides | No | — |
| `builders` | https://www.builders.studio/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `bunq` | https://www.bunq.com/ | | Banking & payments | `src/content/affiliates/providers/bunq.json`; tools & guides; `/netherlands/services/banks/`; `/netherlands/eindhoven/` | Yes | https://www.bunq.com/lp/affiliate-program |
| `bupa-global` | https://www.bupaglobal.com/ | | International health insurance | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | B2B only | — |
| `cic` | https://innovation.cic.com/cic-rotterdam-startup-visa | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `cigna-global` | https://www.cigna.com/international/ | | International health insurance | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | B2B only | — |
| `city-retreat` | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | No | — |
| `corporate-housing-factory` | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | No | — |
| `corporate-housing-living` | https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | No | — |
| `crosspring` | https://www.uglobally.com/startup-visa | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `crown-relocations` | https://www.crownrelo.com/ | | Visa consultants & related | `src/data/companies-registry.ts`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `cz` | https://www.cz.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `ditzo` | https://www.ditzo.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `dockwize` | https://www.dockwize.nl/programmas/the-startup-visa-program | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `dsw` | https://www.dsw.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `dutchbasecamp` | https://dutchbasecamp.org/startup-visa | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `erasmus-centre-for-entrepreneurship` | https://www.ece.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `eurohome-relocation-services` | https://www.eurohome.nl | | Relocation & moving | `src/data/companies-registry.ts` (additional); `/netherlands/services/relocation-services/` | B2B only | — |
| `everaert` | https://www.everaert.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/`; `/netherlands/services/visa-consultants/` (visa hub: `everaert-advocaten` URL variant) | B2B only | — |
| `expat2holland` | https://www.expat2holland.com | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/` | B2B only | — |
| `fbto` | https://www.fbto.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `flatio` | https://flatio.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | Unknown | — |
| `fragomen` | https://www.fragomen.com/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `frank-and-the-backs` | https://www.frankandthebacks.com/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `franssen-advocaten` | https://www.franssenadvocaten.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `funda` | https://www.funda.nl/en/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | B2B only | https://www.funda.nl/en/business/ |
| `glass-frog-ventures` | https://glassfrogventures.com/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `hightechxl` | https://hightechxl.com/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `holland-expat-center-south` | https://www.hollandexpatcenter.com/ | | Settlement & city | `src/data/services/eindhoven.ts`; `/netherlands/eindhoven/` | B2B only | — |
| `holland2stay` | https://www.holland2stay.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | No | — |
| `hollandzorg` | https://www.hollandzorg.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `housinganywhere` | https://housinganywhere.com/ | | Housing | `src/content/affiliates/providers/housinganywhere.json`; tools & guides; `/netherlands/services/housing-platforms/`; `/netherlands/eindhoven/`; `/netherlands/services/housing-platforms/` | Yes | https://info.housinganywhere.com/partnerships |
| `hr-expat-services` | https://www.hrexpatservices.com | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/`; `/netherlands/services/rental-agencies/` (partner profile); `/netherlands/services/rental-agencies/` (`hr-expat-services`) | B2B only | — |
| `hsd-campus` | https://hsdcampus.nl/en/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `iamsterdam` | https://www.iamsterdam.com/ | | Settlement | Guides / visa modules / tools — EU vs non-EU / visa pages | No | — |
| `imk` | https://imk.nl/innovative-startups/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `immigration-advise-nl` | https://immigrationadvise.nl/ | | Visa consultants & related | `src/data/companies-registry.ts`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `indeed-nl` | https://www.indeed.nl/ | | Recruitment | Guides / visa modules / tools — Move without job guides | Yes | https://publisher.indeed.com/ |
| `independer` | https://www.independer.nl/ | | Insurance comparison | `src/content/affiliates/providers/independer.json`; tools & guides; `/netherlands/services/health-insurance/` (comparison) | Yes | https://www.awin.com/ · https://www.linkpizza.com/ (search Independer) |
| `ing` | https://www.ing.nl/en/personal/expats | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | Unknown | https://www.financeads.com/ (search ING) |
| `inqubator-leeuwarden` | https://www.startupvisa.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `international-school-amsterdam` | https://www.isa.nl/ | | Education | Guides / visa modules / tools — Kids / family guides | No | — |
| `jimble` | https://www.jimble.nl | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/` | B2B only | — |
| `kamernet` | https://www.kamernet.nl/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | Yes | https://www.daisycon.com/nl/campagnes/447-kamernet/ |
| `kinderopvang-nl` | https://www.kinderopvang.nl/ | | Childcare; official | Guides / visa modules / tools — Kids guide | No | — |
| `klm` | https://www.klm.com/ | | Travel; pets | Guides / visa modules / tools — Pets guide | No | — |
| `knab` | https://www.knab.nl/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | Unknown | — |
| `kroes-advocaten` | https://www.kroesadvocaten.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `law-more` | https://www.lawandmore.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `lebara` | https://www.lebara.nl/ | | Mobile | `src/content/affiliates/providers/lebara.json`; tools & guides | Yes | https://www.daisycon.com/nl/campagnes/13222-lebara/ |
| `lex-braxis` | https://www.lexbraxis.com/ | | Visa consultants & related | `src/data/companies-registry.ts`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `linkedin-jobs` | https://www.linkedin.com/jobs/ | | Recruitment | Guides / visa modules / tools — Move without job guides | B2B only | — |
| `menzis` | https://www.menzis.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `mva-certified-expat-broker` | https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | No | — |
| `nestpick` | https://www.nestpick.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | Unknown | — |
| `newland-chase` | https://www.newlandchase.com/ | | Visa consultants & related | `src/data/companies-registry.ts`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `nom` | https://www.nom.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `novel-t` | https://www.startupvisa.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `now-health` | https://www.nowhealth.com/ | | International health insurance | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | Unknown | — |
| `ohra` | https://www.ohra.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `onvz` | https://www.onvz.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `orange-sports-forum` | https://www.orangesportsforum.com/startup-facilitator/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `orion-immigration` | https://www.orion-immigration.com/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `packimpex` | https://www.packimpex.com | | Relocation & moving | `src/data/companies-registry.ts` (additional); `/netherlands/services/relocation-services/` | B2B only | — |
| `pararius` | https://www.pararius.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | No | — |
| `partou` | https://www.partou.nl/ | | Childcare | Guides / visa modules / tools — Kids / family guides | No | — |
| `pasbms-immigration-and-relocation-services` | https://www.pasbms.com | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/`; `/netherlands/services/rental-agencies/` (partner profile); `/netherlands/services/rental-agencies/` (`pasbms`) | B2B only | — |
| `pathway-partners` | https://www.pathwaypartners.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/`; `/netherlands/services/visa-consultants/` | B2B only | — |
| `pet-relocation` | https://www.petrelocation.com | | Pets | Guides / visa modules / tools — Pets guide | B2B only | — |
| `petair-uk` | https://www.petairuk.com | | Pets | Guides / visa modules / tools — Pets guide | B2B only | — |
| `petplan-nl` | https://www.petplan.nl/ | | Pet insurance | Guides / visa modules / tools — Pets guide | Unknown | — |
| `planet-b-io` | https://www.planet-b.io/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `portxl` | https://portxl.org/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `rabobank` | https://www.rabobank.nl/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | No | — |
| `randstad-nl` | https://www.randstad.nl/ | | Recruitment | Guides / visa modules / tools — Move without job guides | No | — |
| `relocaid` | https://www.relocaid.com | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/`; `/netherlands/services/rental-agencies/` (partner profile); `/netherlands/services/rental-agencies/` (`relocaid`) | B2B only | — |
| `revolut` | https://www.revolut.com/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | Yes | https://www.revolut.com/legal/affiliate-influencer-promotion-2023/ |
| `rockstart` | https://www.rockstart.com/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `royal-de-gruijter-co` | https://www.royaldegruijter.com | | Relocation & moving | `src/data/companies-registry.ts` (additional); `/netherlands/services/relocation-services/` | B2B only | — |
| `rsh-relocation-and-immigration-services` | https://www.rsh.nl | | Relocation & moving | `src/data/companies-registry.ts`; `/netherlands/services/relocation-agencies/`; `/netherlands/services/relocation-services/`; `/netherlands/services/rental-agencies/` (partner profile); `/netherlands/services/rental-agencies/` (`rsh-relocation`) | B2B only | — |
| `serviced-apartments-by-preferred` | https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | No | — |
| `short-stay-group` | https://www.shortstaygroup.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | No | — |
| `simyo` | https://www.simyo.nl/ | | Mobile | `src/content/affiliates/providers/simyo.json`; tools & guides | Yes | https://www.awin.com/ · https://www.linkpizza.com/ (search Simyo) |
| `singh-raaijmakers` | https://www.singhraaijmakers.nl/ | | Immigration & legal | `src/data/companies-registry.ts`; `/netherlands/services/immigration-lawyers/` | B2B only | — |
| `sns-bank` | https://www.snsbank.nl/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | No | — |
| `space-business-innovation-centre-noordwijk` | https://www.sbicnoordwijk.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `startdock` | https://startdock.nl/en/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `startlife` | https://start-life.nl/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `starwood-animal-transport` | https://www.starwoodpet.com | | Pets | Guides / visa modules / tools — Pets guide | B2B only | — |
| `stichting-aerospace-innovation-hub` | https://aerospaceinnovationhub.nl/rvo-facilitator/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `student-experience` | https://www.studentexperience.com/ | | Housing platforms & search | `src/data/companies-registry.ts`; `/netherlands/services/housing-platforms/` | No | — |
| `study-in-holland` | https://www.studyinholland.nl/ | | Study; official | Guides / visa modules / tools — Student visa content | No | — |
| `tnw-amsterdam` | https://thenextweb.com/spaces/startup-visa | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `triodos-bank` | https://www.triodos.nl/ | | Banking / money services | `src/data/companies-registry.ts`; `/netherlands/services/banks/` | No | — |
| `undutchables` | https://www.undutchables.nl/ | | Recruitment | Guides / visa modules / tools — Move without job guides | No | — |
| `unive` | https://www.unive.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `unusual-space` | https://theunusualspace.com/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `utility-direct` | https://www.utilitydirect.nl | | Relocation & moving | `src/data/companies-registry.ts` (additional); `/netherlands/services/relocation-services/` | B2B only | — |
| `utrechtinc` | https://utrechtinc.nl/?lang=en | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `vgz` | https://www.vgz.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `vu-starthub` | https://vu-ondernemend.nl/en/startup-visa-facilitator/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `water-alliance` | https://www.wateralliance.nl/en | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `we-are-changemakers` | https://wearechangemakers.org/ | | Startup visa facilitator (RVO) | `src/data/companies-registry.ts`; `/netherlands/services/startup-visa-advisors/` | No (facilitator programme) | — |
| `wise` | https://wise.com/ | | Banking & payments; FX | `src/content/affiliates/providers/wise.json`; tools & guides; `/netherlands/services/banks/`; `/netherlands/eindhoven/` | Yes | https://wise.com/gb/affiliate-program/ |
| `woon` | https://www.woon.nl | | Rental & housing partners (expat-centre listings) | `src/data/companies-registry.ts`; `/netherlands/services/rental-agencies/` | Nonprofit | — |
| `zilveren-kruis` | https://www.zilverenkruis.nl/ | | Dutch basic health (zorg) | `src/data/companies-registry.ts`; `/netherlands/services/health-insurance/` | No | — |
| `zooplus-nl` | https://www.zooplus.nl/ | | Pet retail | Guides / visa modules / tools — Pets guide | Yes | https://partner.zooplus.com/en/ |

---

## Disclaimer

Internal tracking only. Affiliate and partner rules change — confirm on each brand or network before commercial use.

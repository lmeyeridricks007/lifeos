export type DaycareProviderRecord = {
  provider: string;
  cities: string;
  type: string;
  ageGroups: string;
  languages: string;
  website: string;
  notes: string;
};

export const daycareProviderTypes = [
  "Daycare (kinderdagverblijf)",
  "Childminder (gastouder)",
  "After-school (BSO)",
  "Preschool (peuterspeelzaal)",
  "Mixed",
] as const;

export const daycareProviderCities = [
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Utrecht",
  "Eindhoven",
  "Haarlem",
  "Leiden",
  "Groningen",
  "Nationwide",
] as const;

/** National and regional childcare providers — orientation only, not rankings. */
export const daycareProvidersDirectory: DaycareProviderRecord[] = [
  {
    provider: "Partou",
    cities: "Nationwide (100+ locations)",
    type: "Daycare, BSO, preschool",
    ageGroups: "0–12",
    languages: "Dutch; English at select locations",
    website: "https://www.partou.nl/",
    notes: "Large national chain; verify English-medium groups per location on LRK listing.",
  },
  {
    provider: "Kindergarden",
    cities: "Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven",
    type: "Daycare, BSO",
    ageGroups: "0–12",
    languages: "Dutch; English at many locations",
    website: "https://www.kindergarden.nl/",
    notes: "Premium positioning; popular with expat families in Randstad — waiting lists common.",
  },
  {
    provider: "CompaNanny",
    cities: "Amsterdam, Rotterdam, The Hague, Utrecht, Haarlem",
    type: "Daycare, BSO",
    ageGroups: "0–12",
    languages: "Dutch; English at select sites",
    website: "https://www.compananny.nl/",
    notes: "Corporate and expat-heavy locations; confirm contract hours for toeslag eligibility.",
  },
  {
    provider: "Zein International Childcare",
    cities: "The Hague, Amsterdam, Leiden",
    type: "Daycare, BSO, holiday care",
    ageGroups: "0–12",
    languages: "English, Dutch",
    website: "https://www.zeinchildcare.nl/",
    notes: "Explicitly international; English-medium groups — verify LRK registration per location.",
  },
  {
    provider: "KindeRdam",
    cities: "Rotterdam, surrounding region",
    type: "Daycare, BSO, preschool",
    ageGroups: "0–12",
    languages: "Dutch; English at some locations",
    website: "https://www.kinderdam.nl/",
    notes: "Rotterdam-focused; check port-area and suburban availability separately.",
  },
  {
    provider: "Smallsteps",
    cities: "Amsterdam, Haarlem, Utrecht, Leiden",
    type: "Daycare, BSO",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.smallsteps.nl/",
    notes: "Growing chain; Dutch-medium with integration focus — ask about ELL-style support.",
  },
  {
    provider: "KidsFoundation",
    cities: "Amsterdam, Haarlem, Almere corridor",
    type: "Daycare, BSO",
    ageGroups: "0–12",
    languages: "Dutch; English at select locations",
    website: "https://www.kidsfoundation.nl/",
    notes: "Multiple brands under one foundation; check individual location LRK numbers.",
  },
  {
    provider: "Humankind",
    cities: "Nationwide (non-profit)",
    type: "Daycare, BSO, gastouder, preschool",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.humankind.nl/",
    notes: "Non-profit umbrella; municipality partnerships — often shorter lists in smaller cities.",
  },
  {
    provider: "Impuls",
    cities: "Rotterdam, The Hague region",
    type: "Daycare, BSO",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.impuls-kinderopvang.nl/",
    notes: "Regional provider; compare with KindeRdam and municipal options in Rotterdam.",
  },
  {
    provider: "Ludens",
    cities: "Utrecht, Amersfoort region",
    type: "Daycare, BSO, preschool",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.ludens.nl/",
    notes: "Central Netherlands focus; university-city demand can tighten infant places.",
  },
  {
    provider: "Junis",
    cities: "Groningen, northern Netherlands",
    type: "Daycare, BSO, preschool",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.junis.nl/",
    notes: "Main regional option in Groningen; generally shorter waits than Randstad hubs.",
  },
  {
    provider: "Municipal childcare (gemeente)",
    cities: "All municipalities",
    type: "Daycare, BSO, preschool (varies)",
    ageGroups: "0–12",
    languages: "Dutch",
    website: "https://www.government.nl/topics/childcare",
    notes: "Each gemeente lists local providers and sometimes priority rules — start at your municipality site.",
  },
  {
    provider: "Gastouderbureau (childminder agencies)",
    cities: "Nationwide",
    type: "Childminder (gastouder)",
    ageGroups: "0–12",
    languages: "Varies by host family",
    website: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang/gastouderopvang",
    notes: "Flexible hours; lower statutory cap (€8.49/h 2026) — agency must be LRK-registered.",
  },
  {
    provider: "Peuterspeelzaal / preschool",
    cities: "All municipalities",
    type: "Preschool",
    ageGroups: "2–4",
    languages: "Dutch",
    website: "https://www.government.nl/topics/childcare",
    notes: "Often 2–3 half-days per week; separate from full daycare — municipal lists show local options.",
  },
];

export function getDaycareDirectoryMetadata() {
  return {
    sourceModel: "National provider orientation list — verify LRK registration per location",
    lastChecked: "June 2026",
    totalRecords: daycareProvidersDirectory.length,
  };
}

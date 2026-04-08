/** Short helper copy for info icons — planning context, not legal advice. */

export const UTILITIES_FIELD_TOOLTIPS = {
  utilitiesIncluded:
    "Many Dutch rentals list rent “exclusive” (excl.) or “inclusive” (incl.) of certain utilities. If something is included, you may not contract it yourself — but always confirm in writing what that covers (energy only vs internet, etc.).",

  landlordBuildingIncludes:
    "Some buildings negotiate bulk energy or internet, or pass gemeente-style charges through service costs. This is separate from your headline rent — still ask what you pay directly vs via landlord.",

  localFixedCharges:
    "“Local / fixed” means little or no consumer market to shop: regional water companies and gemeente assessments follow rules and your situation, not promo pricing.",

  activationSetup:
    "First-month setup is one-off style cash: supplier activation, installation visits, SIM admin, insurance start, overlapping leases, and odd invoice timing — not your rent deposit.",

  internetTier:
    "Tiers are planning bands. Real price depends on address technology (fiber vs DSL/cable), promos, and whether you need symmetric upload for video calls.",

  energyQuality:
    "Insulation and draughts often move the bill more than city choice. “Low” assumes higher heating demand; use “unknown” if you have not seen the home yet.",

  districtHeating:
    "District (block) heat is often billed or allocated differently from gas — you may still choose an electricity supplier. Confirm how heat is metered and whether you can switch.",

  heatingUnknown:
    "Mixed or unknown heating adds a safety margin in the model. Update after viewing the home or asking the landlord which system you pay for.",

  contentsInsurance:
    "Contents (inboedel) covers your belongings — compare limits for bikes, electronics, and away-from-home theft, not teaser premium alone.",

  liabilityInsurance:
    "Liability (aansprakelijkheid) covers damage you cause to others — cheap but exclusions differ; often bought next to contents cover.",

  municipalityLocal:
    "Waste collection, sewer, and similar lines are set by your gemeente and household situation. The tool shows a monthly planning band, not your assessment letter.",
} as const;

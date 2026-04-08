import type {
  UsHousingProfile,
  UsHouseholdProfile,
  UsServiceCategoryId,
  UsServiceClassification,
  UsUsageProfile,
  UtilitiesServicesInput,
  UsClassificationResult,
} from "./types";

function baseOptionalDisabled(
  categoryId: UsServiceCategoryId,
  usage: UsUsageProfile
): UsClassificationResult | null {
  if (categoryId === "internet" && !usage.includeInternet) {
    return {
      classification: "optional",
      maybeIncluded: false,
      compareNote: "Excluded from your scenario — turn on internet to model this line.",
      rulesApplied: ["toggle_internet_off"],
    };
  }
  if (categoryId === "mobile" && !usage.includeMobile) {
    return {
      classification: "optional",
      maybeIncluded: false,
      compareNote: "Excluded from your scenario — turn on mobile to model lines.",
      rulesApplied: ["toggle_mobile_off"],
    };
  }
  if (categoryId === "media_bundle" && !usage.includeTvMedia) {
    return {
      classification: "optional",
      maybeIncluded: false,
      compareNote: "Not included in your monthly total.",
      rulesApplied: ["toggle_media_off"],
    };
  }
  if (categoryId === "contents_insurance" && !usage.includeContentsInsurance) {
    return {
      classification: "optional",
      maybeIncluded: false,
      compareNote: "Not included in your monthly total.",
      rulesApplied: ["toggle_contents_off"],
    };
  }
  if (categoryId === "liability_insurance" && !usage.includeLiabilityInsurance) {
    return {
      classification: "optional",
      maybeIncluded: false,
      compareNote: "Not included in your monthly total.",
      rulesApplied: ["toggle_liability_off"],
    };
  }
  return null;
}

function inclusionFlags(input: UtilitiesServicesInput) {
  const rentYes = input.utilitiesIncludedInRent === "yes";
  const rentUnsure = input.utilitiesIncludedInRent === "unsure";
  const landlordYes = input.landlordBuildingIncludesServices === "yes";
  const landlordUnsure = input.landlordBuildingIncludesServices === "unsure";
  const strong = rentYes || landlordYes;
  const weak = rentUnsure || landlordUnsure;
  return { strong, weak, rentYes, rentUnsure, landlordYes, landlordUnsure };
}

/**
 * Deterministic classification for compare-vs-fixed UI and checklist tone.
 * Uses category, tenure, inclusion flags, housing/heating archetype, and move stage.
 */
export function classifyUtilitiesService(
  categoryId: UsServiceCategoryId,
  input: UtilitiesServicesInput,
  housing: UsHousingProfile,
  household: UsHouseholdProfile,
  usage: UsUsageProfile,
  monthlyEur: number
): UsClassificationResult {
  const opt = baseOptionalDisabled(categoryId, usage);
  if (opt) return opt;

  const { strong, weak, rentYes } = inclusionFlags(input);
  const sharedOrSmall =
    housing.housingType === "student_room" ||
    housing.housingType === "studio" ||
    household.householdType === "house_share";

  const rulesApplied: string[] = [];
  if (input.moveStage === "researching") rulesApplied.push("move_stage_researching");
  if (input.moveStage === "moving_soon") rulesApplied.push("move_stage_moving_soon");
  if (input.moveStage === "already_moved") rulesApplied.push("move_stage_already_moved");
  if (household.renterOrOwner === "owner") rulesApplied.push("tenure_owner");
  else rulesApplied.push("tenure_renter");

  const districtMulti =
    housing.heating === "district" &&
    (housing.housingType === "apartment" || housing.housingType === "studio" || housing.housingType === "student_room");
  if (districtMulti) rulesApplied.push("heating_district_multifamily");

  const olderGasHome =
    housing.heating === "gas" && housing.energyQuality === "low" && housing.housingType !== "student_room";
  if (olderGasHome) rulesApplied.push("archetype_older_gas_home");

  let classification: UsServiceClassification;
  let maybeIncluded = false;
  let compareNote = "";

  if (categoryId === "water" || categoryId === "municipality") {
    classification = "usually_local_fixed";
    compareNote =
      categoryId === "water"
        ? "Regional water company and connection rules dominate — not a classic competitive market like energy retail."
        : "Gemeente-linked charges (e.g. waste, sewer) follow local tariffs and your situation — compare policies, not “providers”.";
    if (strong && categoryId === "water") {
      maybeIncluded = true;
      compareNote =
        "Water is usually a fixed regional regime; your lease may allocate it via rent or service costs — confirm how you are billed.";
      rulesApplied.push("water_check_landlord_allocation");
    }
    if (weak && categoryId === "water") {
      maybeIncluded = true;
      rulesApplied.push("water_unsure_inclusion");
    }
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  if (categoryId === "energy") {
    if (strong || (weak && sharedOrSmall)) {
      classification = "may_already_be_included";
      maybeIncluded = true;
      compareNote =
        strong
          ? "Many bundled rentals include energy or bulk-buy — you may still choose a supplier for electricity in some setups; confirm the lease."
          : "You were unsure about inclusions; energy is often the largest swing line until the contract is clear.";
      rulesApplied.push(strong ? "inclusion_strong_energy" : "inclusion_weak_energy_shared_or_small");
    } else if (weak) {
      classification = "may_already_be_included";
      maybeIncluded = true;
      compareNote = "Inclusion unclear — keep a provisional line and confirm whether you sign power (and possibly gas) yourself.";
      rulesApplied.push("inclusion_weak_energy");
    } else {
      classification = "actively_compare";
      compareNote = "Retail energy (and often gas) is comparison-friendly — weigh tariff type, term, and green mix.";
      rulesApplied.push("energy_retail_compare");
    }
    if (districtMulti) {
      compareNote +=
        " District / block heat is often billed separately or allocated — electricity supplier may still be yours to choose.";
    }
    if (household.renterOrOwner === "owner") {
      compareNote += " As owner, align switch dates with meter handover and notary timing.";
      rulesApplied.push("owner_handover_note");
    }
    if (monthlyEur === 0) {
      maybeIncluded = true;
      rulesApplied.push("zero_monthly_after_inclusion_model");
    }
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  if (categoryId === "internet") {
    if (strong && rentYes) {
      classification = "may_already_be_included";
      maybeIncluded = true;
      compareNote =
        "Internet is sometimes bundled in student or serviced housing — if not, compare by address availability and install lead time.";
      rulesApplied.push("internet_possible_bundle");
    } else if (weak) {
      classification = "actively_compare";
      maybeIncluded = true;
      compareNote =
        "You were unsure if connectivity is included — assume you may still contract yourself; check fiber/DSL/cable at the address.";
      rulesApplied.push("internet_unsure");
    } else {
      classification = "actively_compare";
      maybeIncluded = false;
      compareNote =
        "Broadband compares on speed, install timing, and contract — address availability matters more than city averages.";
      rulesApplied.push("internet_retail_compare");
    }
    if (usage.wfhHeavy && usage.internetTier === "fast") {
      compareNote += " WFH + high tier: prioritize stability and upload, not headline promo price.";
      rulesApplied.push("wfh_fast_internet_priority");
    }
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  if (categoryId === "mobile") {
    classification = "actively_compare";
    maybeIncluded = false;
    compareNote = "SIM-only and bundles both compete — scale by lines and roaming needs.";
    rulesApplied.push("mobile_retail_compare");
    if (household.householdType === "family" && household.childrenCount > 0) {
      compareNote += " Families often add extra lines or data caps for kids’ devices — revisit after the first month.";
      rulesApplied.push("mobile_family_sensitivity");
    }
    if (household.householdType === "house_share") {
      compareNote += " In house shares, decide whether lines are individual or a shared household plan.";
      rulesApplied.push("mobile_house_share");
    }
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  if (categoryId === "media_bundle") {
    classification = usage.includeTvMedia ? "actively_compare" : "optional";
    maybeIncluded = false;
    compareNote = usage.includeTvMedia
      ? "TV/sport bundles are optional and compare separately from bare broadband."
      : "Not modeled.";
    rulesApplied.push("media_optional_compare");
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  if (categoryId === "contents_insurance" || categoryId === "liability_insurance") {
    classification = "actively_compare";
    maybeIncluded = false;
    compareNote =
      categoryId === "contents_insurance"
        ? "Compare cover limits, bikes, and electronics — not the cheapest teaser alone."
        : "Cheap but terms differ; often paired with contents cover.";
    rulesApplied.push("insurance_compare");
    if (household.renterOrOwner === "owner") {
      compareNote += " Owners should align contents cover with mortgage/condo requirements if any.";
      rulesApplied.push("insurance_owner_note");
    }
    return { classification, maybeIncluded, compareNote, rulesApplied };
  }

  return {
    classification: "actively_compare",
    maybeIncluded: false,
    compareNote: "",
    rulesApplied: ["fallback"],
  };
}

/**
 * Netherlands visa checker recommendation engine.
 * Returns primary/secondary route suggestions and explanations based on user answers.
 * Do not hardcode recommendation logic in UI components.
 */

import type {
  VisaCheckerAnswers,
  VisaCheckerRecommendation,
  VisaRecommendationItem,
  VisaRouteSlug,
} from "./types";

const SLUGS: VisaRouteSlug[] = [
  "no-visa-needed",
  "highly-skilled-migrant",
  "eu-blue-card",
  "dutch-american-friendship-treaty",
  "self-employed-visa",
  "student-visa",
  "partner-family-visa",
];

function primary(slug: VisaRouteSlug, reason?: string): VisaRecommendationItem {
  return { slug, reason, priority: "primary" };
}

function secondary(
  slug: VisaRouteSlug,
  reason?: string,
  gapsToQualify?: string[]
): VisaRecommendationItem {
  return { slug, reason, priority: "secondary", gapsToQualify };
}

/**
 * Returns what the user still needs (vs their inputs) to qualify for this route.
 * Used to show "What you need" on secondary recommendation cards.
 */
export function getGapsForRoute(slug: VisaRouteSlug, answers: VisaCheckerAnswers): string[] {
  const gaps: string[] = [];
  const isEU = isEUEEA(answers);
  const isUSCitizen = isUS(answers);

  switch (slug) {
    case "no-visa-needed":
      if (!isEU) gaps.push("EU/EEA or Swiss citizenship (or you may qualify via another route)");
      break;
    case "highly-skilled-migrant":
      if (isEU) {
        gaps.push("You appear to have free movement; this route is for non-EU citizens.");
      } else {
        if (answers.hasDutchJobOffer !== "yes")
          gaps.push("A job offer from a Dutch employer");
        if (answers.hasDutchJobOffer === "yes" && answers.employerSponsorKnown !== "yes")
          gaps.push("Employer must be or become a recognized IND sponsor");
        if (
          answers.salaryRange &&
          ["under-45k", "45k-60k"].includes(answers.salaryRange) &&
          answers.salaryRange !== "not-sure"
        )
          gaps.push("Salary meeting the HSM threshold (varies by age; check IND required amounts)");
        if (!answers.hasDutchJobOffer) gaps.push("Salary meeting HSM threshold");
      }
      break;
    case "eu-blue-card":
      if (isEU) {
        gaps.push("You appear to have free movement; this route is for non-EU citizens.");
      } else {
        if (answers.hasDutchJobOffer !== "yes")
          gaps.push("A qualifying job offer from a Dutch employer");
        if (
          answers.salaryRange &&
          ["under-45k", "45k-60k"].includes(answers.salaryRange) &&
          answers.salaryRange !== "not-sure"
        )
          gaps.push("Salary meeting the EU Blue Card threshold (check IND)");
        if (!answers.hasDutchJobOffer) gaps.push("Higher education or equivalent professional experience");
      }
      break;
    case "dutch-american-friendship-treaty":
      if (!isUSCitizen) gaps.push("US citizenship (DAFT is only for US nationals)");
      if (answers.movePurpose !== "business" && answers.movePurpose !== "exploring")
        gaps.push("Intent to run a business or work as self-employed in the Netherlands");
      gaps.push("Business plan and minimum investment (e.g. €4,500 for common business forms)");
      break;
    case "self-employed-visa":
      if (isUSCitizen)
        gaps.push("Consider DAFT first if you are US citizen; self-employed permit is the alternative");
      gaps.push("Business plan and evidence of viability");
      gaps.push("Meeting the profit and added-value criteria (IND assessment)");
      break;
    case "student-visa": {
      const hasAdmission = answers.studyIntent === "yes-admission" || answers.studyIntent === "possibly";
      if (!hasAdmission)
        gaps.push("Admission (or expected admission) to a qualifying Dutch educational institution");
      gaps.push("Proof of sufficient funds for study and living costs");
      gaps.push("Your institution will act as sponsor for the residence permit");
      break;
    }
    case "partner-family-visa": {
      const hasPartner = answers.hasPartnerInNL === "partner-spouse" || answers.hasPartnerInNL === "family-member";
      if (!hasPartner)
        gaps.push("Partner or family member already legally resident in the Netherlands");
      gaps.push("Relationship documentation (e.g. marriage or registered partnership if applicable)");
      gaps.push("Sponsor must meet IND income requirement");
      break;
    }
  }
  return gaps;
}

function isEUEEA(answers: VisaCheckerAnswers): boolean {
  return answers.citizenshipCategory === "eu-eea-ch";
}

function isUS(answers: VisaCheckerAnswers): boolean {
  return answers.citizenshipCategory === "united-states" || answers.isUSCitizen;
}

function wantsWork(answers: VisaCheckerAnswers): boolean {
  return answers.movePurpose === "work";
}

function wantsBusiness(answers: VisaCheckerAnswers): boolean {
  return answers.movePurpose === "business";
}

function wantsStudy(answers: VisaCheckerAnswers): boolean {
  return answers.movePurpose === "study";
}

function wantsPartnerFamily(answers: VisaCheckerAnswers): boolean {
  return answers.movePurpose === "partner-family";
}

function hasPartnerInNL(answers: VisaCheckerAnswers): boolean {
  return (
    answers.hasPartnerInNL === "partner-spouse" || answers.hasPartnerInNL === "family-member"
  );
}

export function getRecommendations(answers: VisaCheckerAnswers): VisaCheckerRecommendation {
  const explanation: string[] = [];
  const nextSteps: string[] = [];
  const excluded: VisaRouteSlug[] = [];
  const primaryRecs: VisaRecommendationItem[] = [];
  const secondaryRecs: VisaRecommendationItem[] = [];

  // --- EU/EEA/Swiss: no visa needed ---
  if (isEUEEA(answers)) {
    primaryRecs.push(primary("no-visa-needed", "You have free movement rights."));
    explanation.push("You are an EU/EEA or Swiss citizen.");
    explanation.push("You generally do not need a visa or work permit to live and work in the Netherlands.");
    nextSteps.push("Check registration requirements for EU citizens (e.g. municipality, proof of address).");
    nextSteps.push("Plan housing, BSN, and first 90 days.");
    return {
      primaryRecommendations: primaryRecs,
      secondaryRecommendations: [],
      excludedRoutes: SLUGS.filter((s) => s !== "no-visa-needed"),
      explanation,
      nextSteps,
      confidence: "high",
    };
  }

  // --- Study as main purpose ---
  if (wantsStudy(answers) && (answers.studyIntent === "yes-admission" || answers.studyIntent === "possibly")) {
    primaryRecs.push(primary("student-visa", "Your main purpose is study."));
    explanation.push("You are moving mainly for study.");
    explanation.push("The student residence permit is the typical route for non-EU students admitted to qualifying Dutch education.");
    if (hasPartnerInNL(answers)) {
      secondaryRecs.push(secondary("partner-family-visa", "You could also explore joining a partner in the Netherlands if that fits your situation.", getGapsForRoute("partner-family-visa", answers)));
    }
    nextSteps.push("Confirm admission and that your institution is recognized.");
    nextSteps.push("Check financial proof and study amount requirements.");
    nextSteps.push("Prepare documents and apply via your institution.");
    nextSteps.push("Plan housing and arrival.");
    return {
      primaryRecommendations: primaryRecs,
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: SLUGS.filter((s) => s !== "student-visa" && s !== "partner-family-visa"),
      explanation,
      nextSteps,
      confidence: answers.studyIntent === "yes-admission" ? "high" : "medium",
    };
  }

  // --- Partner / family as main purpose ---
  if (wantsPartnerFamily(answers) || hasPartnerInNL(answers)) {
    primaryRecs.push(primary("partner-family-visa", "You have a partner or family member in the Netherlands."));
    explanation.push("You indicated a partner or family member already living in the Netherlands.");
    explanation.push("The partner or family residence permit is the typical route when joining them.");
    nextSteps.push("Confirm relationship and sponsor requirements with IND.");
    nextSteps.push("Gather civil documents (passport, marriage/partnership proof if applicable).");
    nextSteps.push("Check income conditions for the sponsor.");
    nextSteps.push("Plan first 90 days and housing.");
    if (wantsWork(answers)) {
      secondaryRecs.push(secondary("highly-skilled-migrant", "If you also have a job offer from a recognized sponsor, you could compare with the work route.", getGapsForRoute("highly-skilled-migrant", answers)));
      secondaryRecs.push(secondary("eu-blue-card", "EU Blue Card is another work-based alternative if you have a qualifying offer.", getGapsForRoute("eu-blue-card", answers)));
    }
    return {
      primaryRecommendations: primaryRecs,
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: SLUGS.filter((s) => s !== "partner-family-visa" && s !== "highly-skilled-migrant" && s !== "eu-blue-card"),
      explanation,
      nextSteps,
      confidence: "high",
    };
  }

  // --- Work: job offer + salary context ---
  if (wantsWork(answers) && answers.hasDutchJobOffer === "yes") {
    explanation.push("You are a non-EU citizen.");
    explanation.push("You already have a Dutch job offer.");
    if (answers.employerSponsorKnown === "yes") {
      explanation.push("Your employer is or can become a recognized sponsor.");
    } else {
      explanation.push("Confirm with your employer whether they are a recognized IND sponsor.");
    }
    const salaryFitsHSM =
      answers.salaryRange === "60k-80k" ||
      answers.salaryRange === "80k-plus" ||
      answers.salaryRange === "not-sure";
    const salaryFitsBlueCard = answers.salaryRange === "80k-plus" || answers.salaryRange === "60k-80k" || answers.salaryRange === "not-sure";
    if (salaryFitsHSM) {
      primaryRecs.push(primary("highly-skilled-migrant", "Job offer + recognized sponsor + salary often fit the HSM route."));
    }
    if (salaryFitsBlueCard) {
      if (primaryRecs.length > 0) {
        secondaryRecs.push(secondary("eu-blue-card", "Compare with EU Blue Card if you value EU-wide mobility.", getGapsForRoute("eu-blue-card", answers)));
      } else {
        primaryRecs.push(primary("eu-blue-card", "Job offer + qualifying salary can fit the EU Blue Card route."));
      }
    }
    if (primaryRecs.length === 0) {
      primaryRecs.push(primary("highly-skilled-migrant", "Most common route with a job offer from a recognized sponsor."));
      secondaryRecs.push(secondary("eu-blue-card", "Alternative work route; compare salary and employer requirements.", getGapsForRoute("eu-blue-card", answers)));
    }
    nextSteps.push("Confirm visa route with employer or sponsor.");
    nextSteps.push("Check salary and qualification fit (HSM/Blue Card thresholds).");
    nextSteps.push("Prepare documents and application with sponsor.");
    nextSteps.push("Estimate relocation cost and plan arrival.");
    const recommendedSlugs = new Set([...primaryRecs.map((p) => p.slug), ...secondaryRecs.map((r) => r.slug)]);
    return {
      primaryRecommendations: primaryRecs,
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: SLUGS.filter((s) => !recommendedSlugs.has(s)),
      explanation,
      nextSteps,
      confidence: answers.employerSponsorKnown === "yes" ? "high" : "medium",
    };
  }

  // --- Work but no job offer ---
  if (wantsWork(answers) && (answers.hasDutchJobOffer === "no" || answers.hasDutchJobOffer === "unsure")) {
    explanation.push("You are a non-EU citizen planning to work for a company.");
    explanation.push("You do not yet have a job offer (or are not sure).");
    explanation.push("The strongest work routes (Highly Skilled Migrant, EU Blue Card) usually require a job offer from a recognized or qualifying employer.");
    secondaryRecs.push(secondary("highly-skilled-migrant", "Once you have a job offer from a recognized sponsor, this is the most common route.", getGapsForRoute("highly-skilled-migrant", answers)));
    secondaryRecs.push(secondary("eu-blue-card", "Another option once you have a qualifying job offer.", getGapsForRoute("eu-blue-card", answers)));
    nextSteps.push("Focus on finding a job with a recognized IND sponsor.");
    nextSteps.push("Compare HSM and EU Blue Card salary and requirements.");
    nextSteps.push("If you consider self-employment, use the visa checker again and select business.");
    nextSteps.push("Plan documents and relocation budget once you have an offer.");
    return {
      primaryRecommendations: [],
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: ["no-visa-needed", "student-visa", "dutch-american-friendship-treaty"],
      explanation,
      nextSteps,
      confidence: "low",
    };
  }

  // --- Business / entrepreneur ---
  if (wantsBusiness(answers)) {
    if (isUS(answers) && (answers.exploringDAFT === "yes" || answers.entrepreneurType)) {
      primaryRecs.push(primary("dutch-american-friendship-treaty", "US citizens can use the DAFT route for self-employment."));
      explanation.push("You are a US citizen planning to move for business or self-employment.");
      explanation.push("The Dutch-American Friendship Treaty (DAFT) route is designed for eligible US citizens who want to run a business or work as self-employed in the Netherlands.");
      secondaryRecs.push(secondary("self-employed-visa", "If DAFT does not fit, the general self-employed permit is the alternative (stricter viability criteria).", getGapsForRoute("self-employed-visa", answers)));
      nextSteps.push("Compare DAFT vs general self-employed route (requirements and timeline).");
      nextSteps.push("Prepare business plan and investment (e.g. €4,500 for common business forms).");
      nextSteps.push("Plan housing and first 90 days.");
      nextSteps.push("Estimate relocation budget.");
    } else if (!isUS(answers) && (answers.entrepreneurType || answers.workProfile)) {
      primaryRecs.push(primary("self-employed-visa", "Non-US entrepreneurs use the self-employed residence permit."));
      explanation.push("You are not a US citizen and are planning to move for business or self-employment.");
      explanation.push("The self-employed residence permit is the main route; it has viability and profit requirements.");
      secondaryRecs.push(secondary("dutch-american-friendship-treaty", "DAFT is only for US citizens.", getGapsForRoute("dutch-american-friendship-treaty", answers)));
      nextSteps.push("Prepare business plan and viability evidence.");
      nextSteps.push("Check KVK registration and IND requirements.");
      nextSteps.push("Plan housing and relocation budget.");
    } else {
      primaryRecs.push(primary(isUS(answers) ? "dutch-american-friendship-treaty" : "self-employed-visa", isUS(answers) ? "DAFT is the main route for US entrepreneurs." : "Self-employed permit is the main route for non-US entrepreneurs."));
      if (isUS(answers)) {
        secondaryRecs.push(secondary("self-employed-visa", "Alternative if DAFT does not apply.", getGapsForRoute("self-employed-visa", answers)));
      }
      explanation.push("You are planning to move for business or self-employment.");
      nextSteps.push("Confirm your business form and eligibility (US → DAFT; others → self-employed permit).");
      nextSteps.push("Gather business documentation and plan relocation.");
    }
    const recommendedSlugs = new Set([...primaryRecs.map((p) => p.slug), ...secondaryRecs.map((r) => r.slug)]);
    return {
      primaryRecommendations: primaryRecs,
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: SLUGS.filter((s) => !recommendedSlugs.has(s)),
      explanation,
      nextSteps,
      confidence: isUS(answers) ? "high" : "medium",
    };
  }

  // --- Exploring ---
  if (answers.movePurpose === "exploring") {
    explanation.push("You are still exploring your options.");
    explanation.push("Below are routes that often fit different situations; compare them based on your citizenship, job offer, study plans, or family situation.");
    if (isUS(answers)) {
      secondaryRecs.push(secondary("dutch-american-friendship-treaty", "US citizens can consider DAFT for self-employment.", getGapsForRoute("dutch-american-friendship-treaty", answers)));
    }
    secondaryRecs.push(secondary("highly-skilled-migrant", "Common if you have or expect a job offer from a recognized sponsor.", getGapsForRoute("highly-skilled-migrant", answers)));
    secondaryRecs.push(secondary("eu-blue-card", "Alternative work route with qualifying job and salary.", getGapsForRoute("eu-blue-card", answers)));
    secondaryRecs.push(secondary("self-employed-visa", "Relevant if you plan to work as self-employed (non-US).", getGapsForRoute("self-employed-visa", answers)));
    secondaryRecs.push(secondary("student-visa", "Relevant if you plan to study in the Netherlands.", getGapsForRoute("student-visa", answers)));
    secondaryRecs.push(secondary("partner-family-visa", "Relevant if you have a partner or family member in the Netherlands.", getGapsForRoute("partner-family-visa", answers)));
    nextSteps.push("Decide your main purpose: work, business, study, or family.");
    nextSteps.push("Use this tool again with your chosen purpose for clearer recommendations.");
    nextSteps.push("Read the full guides for each route that might fit.");
    return {
      primaryRecommendations: [],
      secondaryRecommendations: secondaryRecs,
      excludedRoutes: ["no-visa-needed"],
      explanation,
      nextSteps,
      confidence: "low",
    };
  }

  // Fallback: suggest comparing main routes
  explanation.push("Based on your answers, compare the following routes that may fit your situation.");
  secondaryRecs.push(secondary("highly-skilled-migrant", "If you have or expect a job offer from a recognized sponsor.", getGapsForRoute("highly-skilled-migrant", answers)));
  secondaryRecs.push(secondary("eu-blue-card", "If you have a qualifying job and salary.", getGapsForRoute("eu-blue-card", answers)));
  secondaryRecs.push(secondary("partner-family-visa", "If you have a partner or family member in the Netherlands.", getGapsForRoute("partner-family-visa", answers)));
  secondaryRecs.push(secondary("student-visa", "If you plan to study.", getGapsForRoute("student-visa", answers)));
  if (isUS(answers)) {
    secondaryRecs.push(secondary("dutch-american-friendship-treaty", "If you plan to be self-employed.", getGapsForRoute("dutch-american-friendship-treaty", answers)));
  } else {
    secondaryRecs.push(secondary("self-employed-visa", "If you plan to be self-employed.", getGapsForRoute("self-employed-visa", answers)));
  }
  nextSteps.push("Refine your answers (e.g. job offer, study, partner) for more specific recommendations.");
  nextSteps.push("Read the full visa guides for routes that might fit.");
  return {
    primaryRecommendations: [],
    secondaryRecommendations: secondaryRecs,
    excludedRoutes: ["no-visa-needed"],
    explanation,
    nextSteps,
    confidence: "low",
  };
}

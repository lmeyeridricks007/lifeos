import {
  CV_NETHERLANDS_PATH,
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
  EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
  DUTCH_WORKPLACE_CULTURE_PATH,
  DUTCH_DIRECTNESS_AT_WORK_PATH,
  FREELANCING_NETHERLANDS_PATH,
  CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
  MOVING_HUB_PATH,
  HSM_VISA_PATH,
  CAREER_COACHES_PATH,
  RELOCATION_SERVICES_PATH,
  IMMIGRATION_LAWYERS_PATH,
  TAX_ADVISORS_PATH,
} from "./cvNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const COVER_LETTER_NETHERLANDS_PATH = "/netherlands/jobs/cover-letter-netherlands/" as const;
export const LINKEDIN_NETHERLANDS_PATH = "/netherlands/jobs/linkedin-netherlands/" as const;
export const NETWORKING_NETHERLANDS_PATH = "/netherlands/jobs/networking-netherlands/" as const;

export {
  CV_NETHERLANDS_PATH,
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
};

export const COVER_LETTER_NETHERLANDS_AFFILIATE_PLACEMENT_ID = "nl-jobs-cover-letter-support-providers" as const;

export type CoverLetterNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type CoverLetterCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type StructureRow = { section: string; include: string; tip: string };
export type WhenRequiredRow = { situation: string; letterNeeded: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "cover-letter-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const coverLetterNetherlandsPage = {
  slug: "cover-letter-netherlands",
  path: COVER_LETTER_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(COVER_LETTER_NETHERLANDS_PATH) ?? "2026-10-04",
  affiliatePlacementId: COVER_LETTER_NETHERLANDS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Cover Letter in the Netherlands | Dutch Motivation Letter Guide for Expats",
    description:
      "Learn how Dutch cover letters and motivation letters (motivatiebrief / sollicitatiebrief) work for expats: when required, length, tone, structure, language choice and common mistakes.",
    keywords: [
      "cover letter Netherlands",
      "motivation letter Netherlands",
      "motivatiebrief",
      "sollicitatiebrief",
      "Dutch cover letter",
      "application letter Netherlands",
      "cover letter for Netherlands job",
      "Dutch motivation letter structure",
      "expat cover letter Netherlands",
      "when to write Dutch cover letter",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Cover letter & motivatiebrief",
    pageTitle: "Cover Letter in the Netherlands",
    subtitle:
      "Learn how Dutch motivation letters (motivatiebrief / sollicitatiebrief) work for expats — including when they are required, length, tone, structure and how to tailor without rewriting your CV.",
    primaryCta: { label: "Draft Your Motivatiebrief", href: "#structure" },
    secondaryCta: { label: "Browse Jobs Guides", href: JOBS_HUB_PATH },
    chips: ["When required", "Length & tone", "Letter structure", "EN vs NL"],
    image: {
      src: `/images/heroes/cover-letter-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international professional drafting a concise Dutch motivation letter on a laptop at a bright Amsterdam café desk, with canal houses and bicycles visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining how a Dutch cover letter (motivatiebrief) complements a CV with role fit, employer research and concise closing — without repeating every CV bullet.",
      "A specific Dutch motivation letter usually outperforms a generic international cover-letter template."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six Dutch cover-letter facts for expats: when required, typical length, direct tone, structure blocks, language choice and tailoring habits.",
      "Use this overview before drafting a sollicitatiebrief for a live Dutch vacancy."
    ),
    whenRequired: visual(
      "when-required",
      "Infographic decision map showing when Dutch employers expect a motivation letter versus CV-only or LinkedIn Easy Apply paths.",
      "Read the vacancy first — letter expectations differ by employer, sector and application channel."
    ),
    lengthTone: visual(
      "length-tone",
      "Infographic comparing Dutch motivatiebrief length and tone norms: half to one page, factual warmth, concrete proof and limited fluff.",
      "Dutch letters reward clarity and evidence — not theatrical sales copy."
    ),
    structure: visual(
      "structure",
      "Infographic showing typical Dutch motivation-letter sections: opening, proof, employer fit, authorization note and close.",
      "A clear four-part structure keeps the letter short and scannable for Dutch hiring managers."
    ),
    openings: visual(
      "openings",
      "Infographic of strong versus weak Dutch cover-letter openings and closings with role title, research cue and interview invitation.",
      "Name the role and employer early — then close with availability and a clear invitation to talk."
    ),
    proofPoints: visual(
      "proof-points",
      "Infographic showing how to pick two or three CV achievements that map to vacancy requirements without rewriting the full CV.",
      "Proof points belong in the letter; the full career story belongs on the CV."
    ),
    language: visual(
      "language",
      "Infographic comparing English versus Dutch motivation letters for Netherlands vacancies, with quality thresholds and vacancy-language cues.",
      "Match the vacancy language — and only write Dutch when quality is genuinely strong."
    ),
    tailoring: visual(
      "tailoring",
      "Infographic workflow for tailoring a Dutch cover letter: vacancy scan, employer research, proof selection, draft and honesty pass.",
      "Tailoring beats templates — even a short letter should show you researched this employer."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of common expat cover-letter mistakes in the Netherlands including generic templates, CV dumps, inflated claims and wrong language choice.",
      "Fixing these issues improves clarity — it still does not guarantee interviews."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist for a Dutch motivation-letter package: vacancy match, structure, tone, language, CV alignment and file naming.",
      "Treat the letter as part of an application package — not a standalone essay."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic map of expat cover-letter scenarios: sponsored roles, career switchers, graduates, remote applicants and Dutch-language vacancies.",
      "Your letter emphasis changes depending on how you enter the Dutch labour market."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting cover-letter drafting to CV localisation, finding jobs, interview tips, salary negotiation and workplace culture.",
      "The motivatiebrief sits between a localised CV and live interview preparation."
    ),
    services: visual(
      "services",
      "Infographic showing professional support that may help during applications: career coaches, relocation, immigration and tax planning after offers.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common Dutch cover-letter FAQ topics: length, when required, English letters, Dutch quality, salary mentions and visa wording.",
      "FAQ answers should lead to a concrete edit on your next sollicitatiebrief."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing trusted orientation sources for Dutch work and applications: Government.nl, UWV, Werk.nl, Business.gov.nl and IND for permit context.",
      "Verify labour market and permit rules on official sites — not recruiter marketing alone."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting cover-letter preparation to CV, finding jobs, interview tips, salary negotiation and Dutch workplace culture guides.",
      "After the letter is ready, move into channels, interviews and offer talks."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#when-required", label: "When required" },
    { href: "#length-tone", label: "Length & tone" },
    { href: "#structure", label: "Structure" },
    { href: "#openings", label: "Openings" },
    { href: "#proof-points", label: "Proof points" },
    { href: "#language", label: "Language" },
    { href: "#tailoring", label: "Tailoring" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "How Dutch Cover Letters Work for Expats",
    paragraphs: [
      "In the Netherlands, a cover letter is usually called a motivatiebrief or sollicitatiebrief. It is a short letter explaining why you want this role at this employer and how your profile fits — complementary to the CV, not a rewrite of it.",
      "Dutch hiring managers often expect a specific, factual letter when the vacancy asks for one, or when applying by email or company portal. Generic international templates that could fit any employer are easy to spot and easy to reject.",
      "This guide owns motivation-letter norms: when required, length, tone, structure, language choice and tailoring. Use the CV Netherlands guide for the document itself, Interview Tips for live interviews, and Finding Jobs for multi-channel search strategy.",
    ],
    keyPoints: [
      { title: "Keep it short", body: "Half to one page is the usual expectation — clarity beats literary flourish." },
      { title: "Show employer fit", body: "Name the role, reference something real about the team or product, and connect two or three proof points." },
      { title: "Complement the CV", body: "Do not paste your CV into letter form. Point to outcomes; leave the full timeline on the CV." },
      { title: "Match language honestly", body: "Write in the vacancy language — and only use Dutch when quality is genuinely strong." },
    ],
    scenarios: [
      {
        situation: "Vacancy says 'CV and motivation letter'",
        approach: "Always attach a tailored one-page sollicitatiebrief",
        firstStep: "Draft opening with exact role title and one researched reason",
      },
      {
        situation: "LinkedIn Easy Apply only",
        approach: "Follow the form; strengthen LinkedIn About if no letter upload exists",
        firstStep: "Check whether the posting still invites a short note or email",
      },
      {
        situation: "Dutch-language vacancy",
        approach: "Prefer a strong Dutch letter — or apply in English only if the ad allows it",
        firstStep: "Read language requirements before drafting",
      },
      {
        situation: "Recruiter outreach already warm",
        approach: "Send a concise note plus CV; full letter if they request documents",
        firstStep: "Ask what format the hiring manager prefers",
      },
    ] satisfies ScenarioRow[],
  },
  introPlanningSteps: [
    "Open one live Dutch vacancy and underline must-have skills and language requirements.",
    "List two or three CV achievements that map to those requirements.",
    "Draft a half-page letter naming the employer — not a reusable template.",
  ],
  snapshotCards: [
    { label: "Typical length", value: "½–1 page", note: "Most Dutch motivation letters stay short and scannable." },
    { label: "When required", value: "Often yes", note: "Follow the vacancy; many portals still expect a letter." },
    { label: "Tone", value: "Direct & warm", note: "Factual evidence over marketing fluff." },
    { label: "Language", value: "Match vacancy", note: "English is fine for English ads; Dutch only if strong." },
    { label: "Structure", value: "4 clear parts", note: "Opening, proof, fit, close — then stop." },
    { label: "Goal", value: "Earn a talk", note: "Invite an interview — do not negotiate salary here." },
  ] satisfies SnapshotSignal[],
  snapshotNextSteps: [
    "Confirm whether this vacancy expects a letter, CV-only or portal fields.",
    "Pick the structure blocks you will use before writing sentences.",
    "Rewrite one letter for a real employer — not a fictional company.",
  ],
  whenRequiredHeading: "When Dutch Employers Expect a Cover Letter",
  whenRequiredParagraphs: [
    "There is no single national rule that every Dutch application must include a motivatiebrief. Practice depends on the employer, sector, seniority and channel.",
    "Many corporate, public-sector and mid-market vacancies still ask for a CV and motivation letter. Some tech and international teams rely on LinkedIn, recruiter screens or short portal questions instead.",
    "When in doubt, a concise tailored letter rarely hurts — a long generic one often does. Always follow explicit vacancy instructions first.",
  ],
  whenRequiredPoints: [
    "If the vacancy lists a motivation letter or sollicitatiebrief, attach one.",
    "Company career portals often have a dedicated letter upload field even when the ad is brief.",
    "Email applications to HR or hiring managers usually include a short letter in the body or as PDF.",
    "LinkedIn Easy Apply may not accept a letter — strengthen your profile and any optional note field.",
    "Agency recruiters may ask for CV first, then a letter later for the client shortlist.",
  ],
  whenRequiredRows: [
    {
      situation: "Vacancy explicitly requests letter",
      letterNeeded: "Yes — tailored PDF or portal text",
      tip: "Name the exact role title in the first sentence.",
    },
    {
      situation: "Corporate / public-sector portal",
      letterNeeded: "Usually yes",
      tip: "Check mandatory fields before submitting.",
    },
    {
      situation: "LinkedIn Easy Apply",
      letterNeeded: "Often optional or unavailable",
      tip: "Use any note field; otherwise rely on profile + CV.",
    },
    {
      situation: "Recruiter-led process",
      letterNeeded: "Ask — often CV first",
      tip: "Prepare a letter ready for the client pack.",
    },
    {
      situation: "Internal referral",
      letterNeeded: "Short note + CV common",
      tip: "Thank the referrer and state role fit clearly.",
    },
    {
      situation: "Speculative open application",
      letterNeeded: "Yes — explain target team",
      tip: "Be specific about the function you want.",
    },
  ] satisfies WhenRequiredRow[],
  lengthToneHeading: "Length and Tone of a Dutch Motivatiebrief",
  lengthToneParagraphs: [
    "Dutch motivation letters are usually half a page to one page. Hiring managers prefer concrete reasons and proof over long personal essays.",
    "Tone is typically direct, warm and factual — aligned with Dutch workplace communication. Enthusiasm helps when it is specific; vague flattery about 'your prestigious company' does not.",
    "Avoid hard-sell marketing language, exaggerated claims or salary negotiation inside the letter. Save compensation talks for later stages and the Salary Negotiation guide.",
  ],
  lengthTonePoints: [
    "Aim for roughly 250–400 words unless the portal sets a stricter limit.",
    "Write like a clear professional email — not a literary memoir.",
    "Prefer concrete phrases ('I led a 6-person migration to AWS') over adjectives ('passionate self-starter').",
    "Show interest in this employer with one researched detail.",
    "Keep paragraphs short so a busy screener can skim.",
  ],
  lengthToneCards: [
    { title: "Direct", body: "State why you applied and what you offer without burying the point in storytelling." },
    { title: "Specific", body: "Reference the team, product, city or mission — something a template cannot invent." },
    { title: "Evidence-led", body: "Two or three outcomes beat ten soft skills adjectives." },
    { title: "Calm confidence", body: "Dutch readers often distrust hype; quiet clarity reads as professional." },
  ] satisfies CoverLetterCard[],
  structureHeading: "Dutch Motivation Letter Structure",
  structureParagraphs: [
    "A practical Dutch structure is: opening (role + reason), proof (2–3 achievements), employer fit (why this organisation), and close (availability + invitation to talk). Add a brief authorization or start-date note only when relevant.",
    "Address the letter to a named hiring manager or recruiter when the vacancy provides one. If not, 'Dear hiring manager' or the Dutch equivalent is acceptable — better than inventing a name.",
    "Keep formatting simple: readable font, clear paragraphs, professional PDF file name. Fancy templates rarely help.",
  ],
  structurePoints: [
    "Open with the exact role title and how you found the vacancy.",
    "Pick proof points that map to must-have requirements.",
    "Show you researched beyond the company logo.",
    "Close with availability and a polite invitation to interview.",
    "Leave salary expectations out unless the vacancy demands them.",
  ],
  structureRows: [
    {
      section: "Opening",
      include: "Role title, vacancy source, one clear reason for this employer",
      tip: "Avoid 'I am writing to apply…' filler — go straight to fit.",
    },
    {
      section: "Proof",
      include: "Two or three outcomes, tools or scope tied to the job ad",
      tip: "Point to CV detail; do not repeat every bullet.",
    },
    {
      section: "Employer fit",
      include: "Team, product, city, mission or recent initiative you researched",
      tip: "One concrete sentence beats three generic compliments.",
    },
    {
      section: "Practical note",
      include: "Start date, relocation city or authorization status if relevant",
      tip: "Be honest — never imply permit certainty.",
    },
    {
      section: "Close",
      include: "Thanks, availability for interview, contact details",
      tip: "Invite a conversation; do not beg or overpromise.",
    },
  ] satisfies StructureRow[],
  structureChecklist: [
    "Letter fits on one page at readable font size.",
    "First paragraph names the role and employer.",
    "Proof section maps to vacancy must-haves.",
    "At least one sentence shows company-specific research.",
    "Closing invites an interview and lists how to reach you.",
  ],
  openingsHeading: "Openings and Closings That Work",
  openingsParagraphs: [
    "Strong openings name the role, show intent and signal research within two sentences. Weak openings apologise, ramble or could be pasted onto any vacancy in Europe.",
    "Strong closings thank the reader, state availability and invite a conversation. Weak closings demand a reply, negotiate salary or trail off without a clear ask.",
  ],
  openingsExamples: [
    {
      title: "Strong opening pattern",
      body: "I am applying for the [Role] in [City] because [specific product/team reason]. In my current role at [Employer], I [proof outcome that matches a must-have].",
    },
    {
      title: "Weak opening pattern",
      body: "I am a passionate hard worker seeking new challenges in your prestigious organisation and believe I would be a great fit for any role.",
    },
    {
      title: "Strong closing pattern",
      body: "Thank you for considering my application. I am available for an interview from [date window] and can be reached at [email / phone]. I would welcome the chance to discuss how my experience supports this team.",
    },
    {
      title: "Weak closing pattern",
      body: "I expect a competitive package and look forward to your positive response at your earliest convenience.",
    },
  ] satisfies CoverLetterCard[],
  openingsTips: [
    "Use the vacancy's exact job title spelling.",
    "Mention a named contact only if the posting lists them.",
    "If relocating, state city target early without oversharing personal logistics.",
    "Keep the close shorter than the proof section.",
  ],
  proofHeading: "Choosing Proof Points from Your CV",
  proofParagraphs: [
    "The letter's job is selection and framing — not biography. Choose two or three achievements that best match the vacancy's must-haves, then leave the full timeline on the CV.",
    "Good proof points include scope, tools, stakeholders and outcomes you can discuss in a Dutch-style direct interview. Inflated metrics you cannot defend will hurt later.",
    "For career switchers and graduates, projects, internships and transferable outcomes can carry the proof section when paid role titles do not yet match.",
  ],
  proofPoints: [
    "Map each proof point to a vacancy keyword or requirement.",
    "Prefer recent examples over decade-old wins.",
    "Quantify honestly (users, revenue, efficiency, team size, budget).",
    "Name tools or methods only if you can discuss them live.",
    "Cross-link mentally to CV bullets — keep titles and dates consistent.",
  ],
  proofCards: [
    { title: "Must-have match", body: "Pick the requirement the employer cannot compromise on — then prove you have done adjacent work." },
    { title: "Transferable bridge", body: "For switchers, translate past outcomes into the language of the target role family." },
    { title: "Team signal", body: "Show collaboration with product, customers or cross-functional partners — Dutch teams value clear ownership." },
    { title: "Learning edge", body: "If you lack one tool, show adjacent mastery and a concrete plan — without overclaiming fluency." },
  ] satisfies CoverLetterCard[],
  proofChecklist: [
    "Every proof sentence could be discussed in an interview.",
    "No proof point invents experience not on the CV or LinkedIn.",
    "At least one proof point mirrors a vacancy must-have phrase honestly.",
    "The letter does not restate the entire employment history.",
  ],
  languageHeading: "English or Dutch Motivation Letters",
  languageParagraphs: [
    "English letters are standard for English-language vacancies and many international teams in the Randstad and Eindhoven ecosystems. Dutch letters can help for Dutch-language roles — only when grammar and tone are strong.",
    "A weak Dutch letter can hurt more than a clear English letter when the vacancy allows English. Conversely, ignoring a clearly Dutch-required process wastes everyone's time.",
    "If you are learning Dutch, you can mention language study briefly — without overstating fluency. Keep CEFR-style honesty consistent with your CV.",
  ],
  languagePoints: [
    "Match the language of the vacancy and application portal.",
    "Use Dutch only if a native or advanced reviewer would find the letter polished.",
    "Do not mix languages randomly inside one letter.",
    "Ask a trusted Dutch speaker to review if you submit in Dutch.",
    "Keep role titles consistent with how Dutch employers search (English titles are common in tech).",
  ],
  languageScenarios: [
    {
      situation: "English vacancy at international scale-up",
      approach: "Write a clear English letter; optional Dutch greeting only if natural",
      firstStep: "Confirm portal language and required documents",
    },
    {
      situation: "Dutch-language municipal or corporate role",
      approach: "Submit a strong Dutch letter or decline until quality is ready",
      firstStep: "Have a fluent reviewer check tone and register",
    },
    {
      situation: "Bilingual posting (NL/EN)",
      approach: "Prefer the language of the hiring manager if known; otherwise follow the ad's primary language",
      firstStep: "Check which language the job description uses most",
    },
    {
      situation: "Learning Dutch at A2/B1",
      approach: "Usually keep the letter in English if allowed; state study honestly on CV",
      firstStep: "Do not draft the letter in shaky Dutch to 'impress'",
    },
  ] satisfies ScenarioRow[],
  tailoringHeading: "Tailoring Without Starting from Scratch",
  tailoringParagraphs: [
    "You do not need a wholly unique essay for every application. You do need a unique opening, employer-fit sentence and proof selection for each serious vacancy.",
    "A practical workflow: scan the vacancy, research one concrete employer detail, select proof points, draft, then run an honesty pass for language levels and authorization wording.",
    "Batch-applying the same generic paragraph to twenty employers is a common expat failure mode — Dutch screeners notice.",
  ],
  tailoringSteps: [
    {
      name: "Scan the vacancy",
      text: "Underline must-haves, language requirements and whether a letter is requested.",
    },
    {
      name: "Research one detail",
      text: "Find a product, team, city hub or recent initiative you can mention honestly.",
    },
    {
      name: "Select proof points",
      text: "Choose two or three CV achievements that map to the underlined requirements.",
    },
    {
      name: "Draft the four parts",
      text: "Write opening, proof, fit and close — then cut anything that repeats the CV timeline.",
    },
    {
      name: "Honesty pass",
      text: "Check claims, language level, authorization wording, file name and contact details.",
    },
  ] satisfies HowToStep[],
  tailoringChecklist: [
    "Employer name and role title are correct and spelled as in the vacancy.",
    "At least one sentence would not make sense for a different company.",
    "Proof points changed if the must-haves changed.",
    "No leftover placeholders like [Company] or wrong city names.",
  ],
  mistakesHeading: "Common Expat Cover Letter Mistakes",
  mistakes: [
    {
      title: "Generic template letter",
      body: "Copy-paste text that could fit any employer signals low effort.",
      advice: "Name the employer, role and one researched reason every time.",
    },
    {
      title: "CV dump in prose",
      body: "Rewriting every job as paragraphs wastes the letter's purpose.",
      advice: "Select two or three proof points; leave the timeline on the CV.",
    },
    {
      title: "Wrong language choice",
      body: "Weak Dutch or ignoring a Dutch-required process both hurt.",
      advice: "Match vacancy language; use Dutch only when quality is strong.",
    },
    {
      title: "Salary negotiation too early",
      body: "Leading with package demands can feel misaligned in many Dutch processes.",
      advice: "Invite the interview; use Salary Negotiation after an offer.",
    },
    {
      title: "Overclaiming visa or Dutch fluency",
      body: "Inflated claims collapse in direct interviews.",
      advice: "State authorization and language levels honestly.",
    },
    {
      title: "No clear ask",
      body: "Letters that trail off without inviting a conversation feel unfinished.",
      advice: "Close with availability and a polite interview invitation.",
    },
    {
      title: "Ignoring vacancy instructions",
      body: "Missing a requested letter — or attaching one when told not to — creates friction.",
      advice: "Follow the vacancy and portal fields exactly.",
    },
    {
      title: "Unprofessional file or formatting",
      body: "Odd file names, tiny fonts or decorative templates distract from content.",
      advice: "Use a clean PDF named Firstname-Lastname-motivatiebrief.pdf.",
    },
  ] satisfies MistakeCard[],
  checklistHeading: "Motivation Letter Checklist",
  checklistIntro:
    "Treat each letter as part of an application package with your CV and LinkedIn. Completing this checklist does not guarantee an interview.",
  howTo: {
    steps: [
      {
        name: "Confirm letter expectations",
        text: "Read the vacancy and portal for motivation-letter requirements and language.",
      },
      {
        name: "Localise your CV first",
        text: "Ensure the CV is concise and consistent — the letter will point to it, not replace it.",
      },
      {
        name: "Research and select proof",
        text: "Pick one employer-specific detail and two or three matching achievements.",
      },
      {
        name: "Draft the four-part letter",
        text: "Write opening, proof, fit and close within half to one page.",
      },
      {
        name: "Match language and tone",
        text: "Use vacancy language, direct factual tone and honest authorization wording.",
      },
      {
        name: "Final package check",
        text: "Align names, dates and claims with CV/LinkedIn; save a professional PDF file name.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to write a Dutch motivation letter (cover letter)",
    description:
      "Step-by-step orientation for drafting a tailored Dutch motivatiebrief / sollicitatiebrief for expat job applications.",
    anchor: "#checklist",
  },
  applicationChecklist: [
    "Vacancy letter requirement and language confirmed.",
    "Opening names exact role and employer.",
    "Two or three proof points map to must-haves.",
    "One researched employer-fit sentence included.",
    "Tone is direct, warm and factual — not salesy.",
    "Authorization and start-date notes are honest if included.",
    "Claims match CV and LinkedIn.",
    "PDF file name is professional and easy to find.",
  ],
  scenariosHeading: "Expat Cover Letter Scenarios",
  scenarios: [
    {
      situation: "Sponsorship-dependent application",
      approach: "State authorization status clearly; emphasise scarce skills and employer-relevant outcomes",
      firstStep: "Add one honest line on permit context without implying certainty",
    },
    {
      situation: "Career switcher",
      approach: "Lead with transferable proof and learning edge tied to the new role title",
      firstStep: "Rewrite proof section around target-role language before polishing style",
    },
    {
      situation: "Graduate / early career",
      approach: "Use projects, internships and coursework outcomes as proof",
      firstStep: "Pick two projects with tools and results the vacancy mentions",
    },
    {
      situation: "Senior specialist",
      approach: "Emphasise scope, stakeholders and decision impact — keep the letter short",
      firstStep: "Cut biography; keep two high-signal leadership outcomes",
    },
    {
      situation: "Applying while still abroad",
      approach: "Show relocation target, interview availability and realistic start window",
      firstStep: "Add city preference and timezone-friendly interview note",
    },
    {
      situation: "Dutch-language corporate role",
      approach: "Submit polished Dutch letter or wait until quality is review-ready",
      firstStep: "Book a fluent review before sending",
    },
  ] satisfies ScenarioRow[],
  relatedGuides: [
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV document this letter complements — length, photo and structure.",
    },
    { label: "Recruitment Agencies Netherlands", href: "/netherlands/jobs/recruitment-agencies-netherlands/", status: "live", description: "Agency channel for Dutch roles." },
    { label: "English Speaking Jobs Netherlands", href: "/netherlands/jobs/english-speaking-jobs-netherlands/", status: "live", description: "English-friendly market lane." },
    { label: "Remote Work Netherlands", href: "/netherlands/jobs/remote-work-netherlands/", status: "live", description: "Remote and hybrid employment norms." },

    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Where and how expats search: platforms, recruiters, sponsorship and city demand.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after your motivation letter and CV get a response.",
    },
    {
      label: "Salary Negotiation Netherlands",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "How to evaluate and negotiate Dutch offers beyond headline gross salary.",
    },
    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Profile positioning and recruiter visibility for Dutch job search.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Broader networking beyond the written application package.",
    },
    {
      label: "Expat Salary Netherlands",
      href: EXPAT_SALARY_NETHERLANDS_PATH,
      status: "live",
      description: "Salary expectations for international professionals by city and industry.",
    },
    {
      label: "Employment Contracts",
      href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch employment contract orientation once an offer is drafted.",
    },
    {
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "How Dutch teams collaborate — useful context for letter tone.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape written applications and interviews.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_NETHERLANDS_PATH,
      status: "live",
      description: "ZZP and freelance routes when employment is not the only path.",
    },
    {
      label: "Employee Benefits",
      href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
      status: "live",
      description: "Package components to understand after interviews — not inside the letter.",
    },
  ] satisfies CoverLetterNetherlandsLink[],
  relatedGuideReadingOrder: [
    "Localise your CV, then draft the motivatiebrief with this guide.",
    "Open Finding Jobs to choose channels and sponsorship-aware employers.",
    "Use Interview Tips once screeners reply.",
    "Move to Salary Negotiation and contract guides after an offer.",
  ],
  relatedGuideScenarios: [
    {
      situation: "Letter ready, weak CV",
      approach: "Fix CV Netherlands localisation before sending more letters",
      firstStep: "Open CV guide and rewrite the top third",
    },
    {
      situation: "Documents ready, no pipeline",
      approach: "Shift time into Finding Jobs channels",
      firstStep: "Shortlist three platforms and two target employers",
    },
    {
      situation: "First interview invite",
      approach: "Switch focus to Interview Tips and workplace culture",
      firstStep: "Prepare examples that match letter proof points",
    },
    {
      situation: "Offer received",
      approach: "Use Salary Negotiation plus contract and benefits guides",
      firstStep: "Model gross-to-net before countering",
    },
  ] satisfies ScenarioRow[],
  hubCards: [
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "The document your motivatiebrief complements.",
    },
    {
      label: "Finding Jobs",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Job search channels, recruiters and sponsorship orientation.",
    },
    {
      label: "Interview Tips",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Next step after a strong Dutch application package.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Events, communities and warm intros beyond written applications.",
    },
    {
      label: "Working in the Netherlands",
      href: JOBS_HUB_PATH,
      status: "live",
      description: "Jobs hub for broader work and relocation context.",
    },
  ] satisfies CoverLetterNetherlandsLink[],
  serviceCategories: [
    {
      label: "Career coaches",
      href: CAREER_COACHES_PATH,
      status: "live",
      description: "Application strategy and interview coaching discovery — not a ranking of letter writers.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Move logistics when interviews turn into a start date.",
    },
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Permit questions when sponsorship is part of your search.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Offer modelling, 30% ruling and payroll context after interviews.",
    },
  ],
  servicesWhenToUse: [
    "Career coaches: when positioning or interview practice needs structured feedback alongside your letters.",
    "Relocation services: when city, housing and family timing follow a successful application.",
    "Immigration lawyers: when permit routes or recognised-sponsor questions remain unclear.",
    "Tax advisors: when offer packages, rulings or cross-border income need modelling.",
  ],
  serviceScenarios: [
    {
      situation: "Strong experience, generic letters",
      approach: "Career coach for positioning and proof selection — not ghostwritten hype",
      firstStep: "Book a scoped review of one target-role letter + CV",
    },
    {
      situation: "Offer with relocation package",
      approach: "Relocation support plus housing search",
      firstStep: "Confirm what HR covers before signing",
    },
    {
      situation: "Sponsorship-dependent applications",
      approach: "Immigration orientation alongside employer HR",
      firstStep: "Verify recognised-sponsor status before relying on a verbal offer",
    },
    {
      situation: "Complex offer + 30% ruling questions",
      approach: "Tax adviser after Salary Negotiation reading",
      firstStep: "Collect gross package details before the call",
    },
  ] satisfies ScenarioRow[],
  servicesNote:
    "Some links may be affiliate or referral links. Professional services may help with specific steps — they do not replace honest applications, official IND guidance or qualified advice. This page does not rank cover-letter writers or guarantee interviews.",
  faq: [
    {
      q: "Do I always need a cover letter in the Netherlands?",
      a: "Not always — follow the vacancy and portal. Many employers still expect a motivatiebrief, especially outside pure Easy Apply flows. When requested, attach a tailored letter.",
    },
    {
      q: "How long should a Dutch motivation letter be?",
      a: "Usually half a page to one page. Aim for clear proof and employer fit rather than a long essay.",
    },
    {
      q: "What is a motivatiebrief or sollicitatiebrief?",
      a: "They are Dutch terms for a motivation / application letter — the cover letter that explains role fit and interest alongside your CV.",
    },
    {
      q: "Can my cover letter be in English?",
      a: "Yes for English-language vacancies. For Dutch-language roles, a strong Dutch letter can help — only if quality is high.",
    },
    {
      q: "Should the letter repeat my CV?",
      a: "No. Select two or three proof points that match the vacancy and leave the full timeline on the CV.",
    },
    {
      q: "Should I mention salary in the cover letter?",
      a: "Usually no, unless the vacancy asks for salary expectations. Save negotiation for later stages.",
    },
    {
      q: "How do I mention visa sponsorship?",
      a: "State your authorization status honestly in a short practical note. Do not imply permit certainty — confirm IND rules separately.",
    },
    {
      q: "Is a Europass cover letter required?",
      a: "Usually not for private-sector roles. A clear, tailored letter generally works better than a generic template unless an employer requests a specific format.",
    },
  ],
  faqNextSteps: [
    "Draft one employer-specific motivatiebrief for a live vacancy.",
    "Align proof points with your localised CV.",
    "Prepare interview examples that match the letter's claims.",
  ],
  officialSources: [
    {
      label: "Government.nl — Working",
      href: "https://www.government.nl/",
      description: "Central government orientation on living and working in the Netherlands.",
    },
    {
      label: "UWV",
      href: "https://www.uwv.nl/",
      description: "Employee insurance and labour market orientation.",
    },
    {
      label: "Werk.nl",
      href: "https://www.werk.nl/",
      description: "Public employment services and vacancy orientation.",
    },
    {
      label: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Practical government information for working and doing business in the Netherlands.",
    },
    {
      label: "IND",
      href: "https://ind.nl/",
      description: "Immigration and permit rules when sponsorship intersects with your applications.",
    },
    {
      label: "Highly Skilled Migrant guide",
      href: HSM_VISA_PATH,
      description: "ExpatLife orientation on HSM routes when authorization is part of your search.",
    },
  ],
  officialSourcesNote:
    "Labour market practices and permit rules change. Verify current requirements through official resources — this page is orientation only, not career or immigration advice.",
  sourceVerificationTips: [
    "Government.nl / Business.gov.nl — working and living orientation.",
    "UWV / Werk.nl — labour market and public employment context.",
    "IND — permit and sponsorship rules when applying from abroad.",
    "Employer vacancy text — final authority on language and document expectations.",
  ],
  exploreNextTips: [
    "Open CV Netherlands if the document still needs localisation.",
    "Open Finding Jobs when your letter and CV are ready for channels.",
    "Open Interview Tips when screeners reply.",
    "Open Salary Negotiation when an offer arrives.",
  ],
  exploreNextCards: [
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV your letter points to.",
    },
    {
      label: "Finding Jobs Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Channels, recruiters, sponsorship and city demand.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after applications get a response.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Events, communities, referrals and offline networking habits.",
    },
    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Profile and platform tactics that complement written applications.",
    },
    {
      label: "Salary Negotiation",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "Evaluate and negotiate Dutch job offers.",
    },
    {
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "Team norms that shape letter tone and interviews.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_HUB_PATH,
      status: "live",
      description: "Relocation hub once interviews turn into a move.",
    },
    {
      label: "Contractor vs Employee",
      href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
      status: "live",
      description: "Compare models before you position employment vs freelance applications.",
    },
    {
      label: "Expat Salary",
      href: EXPAT_SALARY_NETHERLANDS_PATH,
      status: "live",
      description: "Salary context while you target roles.",
    },
  ] satisfies CoverLetterNetherlandsLink[],
} as const;

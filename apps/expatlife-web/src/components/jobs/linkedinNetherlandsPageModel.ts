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
import { COVER_LETTER_NETHERLANDS_PATH } from "./coverLetterNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const LINKEDIN_NETHERLANDS_PATH = "/netherlands/jobs/linkedin-netherlands/" as const;
export const NETWORKING_NETHERLANDS_PATH = "/netherlands/jobs/networking-netherlands/" as const;
/** Job-board channel stub (Money menu) — separate from this profile/use guide. */
export const LINKEDIN_JOBS_STUB_PATH = "/netherlands/work/linkedin-jobs-netherlands/" as const;

export {
  CV_NETHERLANDS_PATH,
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  COVER_LETTER_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
};

export const LINKEDIN_NETHERLANDS_AFFILIATE_PLACEMENT_ID = "nl-jobs-linkedin-netherlands-support-providers" as const;

export type LinkedInNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type LinkedInCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type StructureRow = { section: string; include: string; tip: string };
export type NormsRow = { topic: string; dutchNorm: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "linkedin-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const linkedInNetherlandsPage = {
  slug: "linkedin-netherlands",
  path: LINKEDIN_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(LINKEDIN_NETHERLANDS_PATH) ?? "2026-10-04",
  affiliatePlacementId: LINKEDIN_NETHERLANDS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "LinkedIn Netherlands | Profile & Job-Search Guide for Expats",
    description:
      "Learn how to use LinkedIn for Dutch job search as an expat: profile, headline, About, Open to Work, messaging recruiters, Easy Apply and Dutch hiring norms on the platform.",
    keywords: [
      "LinkedIn Netherlands",
      "LinkedIn for Dutch job search",
      "LinkedIn profile Netherlands",
      "Open to Work Netherlands",
      "LinkedIn headline Netherlands",
      "message recruiters Netherlands",
      "LinkedIn Easy Apply Netherlands",
      "Dutch LinkedIn norms",
      "expat LinkedIn Netherlands",
      "LinkedIn networking Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · LinkedIn profile & outreach",
    pageTitle: "LinkedIn in the Netherlands",
    subtitle:
      "Learn how to use LinkedIn for Dutch job search as an expat — profile, headline, Open to Work, messaging recruiters and Dutch hiring norms on the platform.",
    primaryCta: { label: "Upgrade Your Profile", href: "#profile" },
    secondaryCta: { label: "Browse Jobs Guides", href: JOBS_HUB_PATH },
    chips: ["Headline & About", "Open to Work", "Recruiter messages", "Dutch norms"],
    image: {
      src: `/images/heroes/linkedin-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international professional refining a LinkedIn profile on a laptop at a bright Amsterdam canal-side café desk, with canal houses and bicycles visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining how LinkedIn supports Dutch job search for expats: searchable profile, Open to Work signals, recruiter outreach and Easy Apply — complementary to CV and motivation letter.",
      "A clear Dutch-market LinkedIn profile usually outperforms a generic international template."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six LinkedIn facts for Netherlands job search: headline, About, Open to Work, language, messaging and CV alignment.",
      "Use this overview before rewriting headline, About and Open to Work settings."
    ),
    profile: visual(
      "profile",
      "Infographic checklist for a Dutch-market LinkedIn profile foundation: photo, name, location, custom URL, contact options and banner context.",
      "Recruiters scan identity and location signals in seconds — keep them clear and honest."
    ),
    headlineAbout: visual(
      "headline-about",
      "Infographic comparing strong versus weak LinkedIn headlines and About sections for Dutch roles, with role keywords and proof outcomes.",
      "Headline gets the click; About earns the conversation — both should match vacancy language."
    ),
    experience: visual(
      "experience",
      "Infographic showing LinkedIn Experience and Featured blocks aligned with a localised Dutch CV — outcomes, tools and consistent dates.",
      "Experience should mirror your CV story without dumping every bullet as marketing copy."
    ),
    openToWork: visual(
      "open-to-work",
      "Infographic decision map for LinkedIn Open to Work and job preferences in the Netherlands: visibility, titles, locations and start timing.",
      "Open to Work helps recruiters find you — configure titles and cities carefully."
    ),
    dutchNorms: visual(
      "dutch-norms",
      "Infographic of Dutch LinkedIn communication norms: direct tone, honest language levels, limited hype and clear authorization wording.",
      "Dutch recruiters often prefer factual profiles over theatrical personal branding."
    ),
    messaging: visual(
      "messaging",
      "Infographic of recruiter messaging patterns for Netherlands LinkedIn outreach: short intro, role fit, CV offer and clear ask.",
      "A concise, specific message beats a long pitch or copy-paste template."
    ),
    applying: visual(
      "applying",
      "Infographic comparing LinkedIn Easy Apply, company career sites and recruiter-led paths for Dutch vacancies.",
      "Follow the channel the vacancy and recruiter actually use — Easy Apply is not always enough."
    ),
    networkingOnLi: visual(
      "networking",
      "Infographic of LinkedIn networking moves for Dutch job search: connections, comments, groups and warm intros — separate from offline community networking.",
      "Platform networking supports visibility; offline networking has its own guide."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of common expat LinkedIn mistakes in the Netherlands: keyword soup, overclaiming Dutch, spammy DMs and CV mismatch.",
      "Fixing these issues improves clarity — it still does not guarantee interviews."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist for a Dutch LinkedIn job-search package: profile, Open to Work, messaging templates, CV alignment and honesty pass.",
      "Treat LinkedIn as part of an application package — not a standalone brand campaign."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic map of expat LinkedIn scenarios: sponsored roles, career switchers, graduates, remote applicants and Dutch-language vacancies.",
      "Your profile emphasis changes depending on how you enter the Dutch labour market."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting LinkedIn profile work to CV localisation, cover letters, finding jobs, interviews, salary negotiation and workplace culture.",
      "LinkedIn sits between a localised CV and live interview preparation."
    ),
    services: visual(
      "services",
      "Infographic showing professional support that may help during LinkedIn-led search: career coaches, relocation, immigration and tax planning after offers.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common LinkedIn Netherlands FAQ topics: Open to Work, Premium, English profiles, photos, messaging and Easy Apply.",
      "FAQ answers should lead to a concrete edit on your next profile or message."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing trusted orientation sources for Dutch work and applications: Government.nl, UWV, Werk.nl, Business.gov.nl and IND for permit context.",
      "Verify labour market and permit rules on official sites — not recruiter marketing alone."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting LinkedIn preparation to CV, cover letter, finding jobs, interview tips, salary negotiation and Dutch workplace culture guides.",
      "After the profile is ready, move into channels, letters, interviews and offer talks."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#profile", label: "Profile" },
    { href: "#headline-about", label: "Headline" },
    { href: "#experience", label: "Experience" },
    { href: "#open-to-work", label: "Open to Work" },
    { href: "#dutch-norms", label: "Dutch norms" },
    { href: "#messaging", label: "Messaging" },
    { href: "#applying", label: "Applying" },
    { href: "#networking", label: "Networking" },
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
    heading: "How LinkedIn Works for Dutch Job Search",
    paragraphs: [
      "In the Netherlands, LinkedIn is often the default professional network for international hiring — especially in tech, finance, consulting, life sciences and Randstad / Eindhoven ecosystems. Recruiters search by title, skills, location and keywords; hiring managers check profiles after they receive a CV.",
      "This guide owns LinkedIn profile and platform use for Dutch job search: headline, About, Experience, Open to Work, messaging recruiters and Dutch communication norms on the platform. It does not replace multi-channel search strategy, offline networking, motivation letters or the CV document itself.",
      "Use Finding Jobs for where and how to search across channels, CV Netherlands for the document, Cover Letter for motivatiebrief norms, Interview Tips for live interviews, and Networking Netherlands for broader offline and community networking.",
    ],
    keyPoints: [
      { title: "Be searchable", body: "Use role titles and skills Dutch recruiters actually type — not only creative personal branding." },
      { title: "Stay consistent", body: "Align LinkedIn dates, titles and claims with your localised CV and cover letter." },
      { title: "Signal readiness carefully", body: "Configure Open to Work and preferences so the right people see you — including city and title filters." },
      { title: "Message like a professional email", body: "Short, specific, factual outreach fits Dutch hiring culture better than long pitches." },
    ],
    scenarios: [
      {
        situation: "Recruiter InMail arrives",
        approach: "Reply with role fit, location and authorization honesty — then offer CV",
        firstStep: "Confirm the role title and city before scheduling a call",
      },
      {
        situation: "Applying while still abroad",
        approach: "Set location target, interview availability and realistic start window on profile",
        firstStep: "Update headline/About with target city or open-to-relocate note",
      },
      {
        situation: "Dutch-language vacancy",
        approach: "Match profile language where possible; be honest about CEFR levels",
        firstStep: "Check whether English profile + Dutch note is acceptable",
      },
      {
        situation: "Career switcher",
        approach: "Rewrite headline and About around target role language, not only past titles",
        firstStep: "Map two transferable outcomes to the new role family",
      },
    ] satisfies ScenarioRow[],
  },
  introPlanningSteps: [
    "Open one live Dutch vacancy and underline must-have skills and titles.",
    "Rewrite your LinkedIn headline so a recruiter searching those titles can find you.",
    "Align Experience bullets with your localised CV — then draft one recruiter reply template.",
  ],
  snapshotCards: [
    { label: "Headline", value: "Role + niche", note: "Searchable titles beat vague personal slogans." },
    { label: "About", value: "Short & factual", note: "Proof and target roles — not a life essay." },
    { label: "Open to Work", value: "Configure it", note: "Titles, cities and visibility matter." },
    { label: "Language", value: "Match market", note: "English common; Dutch when strong." },
    { label: "Messages", value: "Concise", note: "Direct Dutch-style notes outperform hype." },
    { label: "Goal", value: "Earn a talk", note: "Profile + outreach invite a conversation." },
  ] satisfies SnapshotSignal[],
  snapshotNextSteps: [
    "Rewrite headline and About for one target role family.",
    "Turn on or refine Open to Work with realistic titles and locations.",
    "Send one tailored recruiter message — not a batch blast.",
  ],
  profileHeading: "LinkedIn Profile Foundations for the Netherlands",
  profileParagraphs: [
    "Recruiters often decide in seconds whether your profile is worth opening. Photo, name, location, headline and custom URL are the first trust signals — before anyone reads Experience.",
    "Use a clear professional photo, a location that matches where you want to work (or an honest open-to-relocate note), and a custom URL that is easy to put on your CV. Contact options should be reachable during Dutch business hours when possible.",
    "Banner images and creative branding are optional. Clarity beats decoration for Dutch hiring screens.",
  ],
  profilePoints: [
    "Use a recent, professional headshot with a simple background.",
    "Set location to your target Dutch city or region when that is accurate.",
    "Customise your LinkedIn URL for CV and email signatures.",
    "Keep your legal name readable; add a preferred name only if helpful.",
    "Enable a contact path recruiters can use (email or Open profile messaging).",
  ],
  profileRows: [
    {
      section: "Photo",
      include: "Clear face, professional attire, neutral or soft background",
      tip: "Avoid group shots, logos or heavy filters.",
    },
    {
      section: "Location",
      include: "City / metro you target (Amsterdam, Utrecht, Eindhoven, remote NL…)",
      tip: "If abroad, state relocation intent in About or Open to Work.",
    },
    {
      section: "Custom URL",
      include: "linkedin.com/in/yourname style",
      tip: "Put the same URL on your Dutch CV.",
    },
    {
      section: "Contact",
      include: "Email or Open Profile path that you monitor",
      tip: "Reply windows matter — Dutch processes move quickly.",
    },
    {
      section: "Banner",
      include: "Optional calm visual; avoid cluttered slogan walls",
      tip: "Never invent awards, logos or official seals.",
    },
  ] satisfies StructureRow[],
  profileChecklist: [
    "Photo is clear and professional.",
    "Location matches job-search geography honestly.",
    "Custom URL is on CV and email signature.",
    "Contact options work during interview weeks.",
  ],
  headlineAboutHeading: "Headline and About That Recruiters Can Use",
  headlineAboutParagraphs: [
    "Your headline is a search field, not a poetry line. Include the role titles and niche keywords Dutch recruiters type (for example 'Product Manager | B2B SaaS' or 'Data Engineer | Python, Spark'). Creative slogans alone are hard to find.",
    "The About section should state who you help, what you have delivered, which roles you are targeting and any practical notes (relocation city, language levels, authorization status). Keep it scannable with short paragraphs.",
    "Mirror the language of the vacancies you want. Inflated buzzwords without outcomes often hurt more than they help in Dutch hiring culture.",
  ],
  headlineAboutPoints: [
    "Lead with role title(s) recruiters search, then niche or stack.",
    "Put 2–3 proof outcomes in About — scope, tools, results.",
    "State target roles and geography when switching or relocating.",
    "Keep language-level claims honest and consistent with your CV.",
    "Leave salary negotiation out of About — save it for offer stages.",
  ],
  headlineAboutCards: [
    { title: "Strong headline pattern", body: "[Target role] | [domain/stack] | [city or open to NL relocation] — searchable and specific." },
    { title: "Weak headline pattern", body: "'Passionate change-maker seeking opportunities' — hard to find and hard to trust." },
    { title: "Strong About pattern", body: "Who you are → proof outcomes → what you want next → practical notes (city, languages, authorization)." },
    { title: "Weak About pattern", body: "Long biography, buzzword lists, or copy that contradicts your CV dates." },
  ] satisfies LinkedInCard[],
  headlineAboutTips: [
    "Reuse vacancy keywords only when they honestly describe your work.",
    "Update headline when you change target role family.",
    "Keep About shorter than a motivation letter — point to CV for detail.",
    "If bilingual, prefer one primary language and a short secondary note.",
  ],
  experienceHeading: "Experience, Featured and Skills Alignment",
  experienceParagraphs: [
    "LinkedIn Experience should tell the same career story as your Dutch CV: consistent titles, dates, employers and outcomes. Recruiters notice mismatches quickly.",
    "Write outcome-led bullets, not marketing essays. Featured can hold a portfolio link, talk or project — only if you can discuss it live. Skills should match vacancy language without keyword stuffing.",
    "Recommendations and endorsements are optional signals. A few credible recommendations often beat dozens of generic endorsements.",
  ],
  experiencePoints: [
    "Match employer names and date ranges to your CV.",
    "Lead each role with scope and 2–4 outcomes.",
    "Feature only assets you can defend in an interview.",
    "Pin skills that appear in target vacancies.",
    "Ask for recommendations from people who saw your work.",
  ],
  experienceRows: [
    {
      section: "Experience",
      include: "Title, employer, dates, city, outcome bullets",
      tip: "Keep chronology consistent with the CV PDF.",
    },
    {
      section: "Featured",
      include: "Portfolio, case study or talk link (optional)",
      tip: "Avoid paywalled or broken links.",
    },
    {
      section: "Skills",
      include: "Tools and methods from live vacancies",
      tip: "Quality over a 50-skill dump.",
    },
    {
      section: "Education / certs",
      include: "Relevant degrees and current certifications",
      tip: "Do not invent credentials.",
    },
  ] satisfies StructureRow[],
  experienceChecklist: [
    "Every LinkedIn role title matches the CV (or has a clear explanation).",
    "Dates and employers are consistent across documents.",
    "Featured items open and are interview-ready.",
    "Top skills reflect your real day-to-day work.",
  ],
  openToWorkHeading: "Open to Work and Job Preferences",
  openToWorkParagraphs: [
    "Open to Work and job preferences help recruiters and LinkedIn's job matching find you. Configure job titles, locations, start timing and visibility carefully — especially if your current employer should not see a green banner.",
    "Choose titles that match roles you would actually accept. Listing every adjacent title can attract noise. For Netherlands search, include relevant cities and remote preferences honestly.",
    "Open to Work is a signal, not a strategy by itself. Pair it with a strong profile, targeted applications and thoughtful outreach.",
  ],
  openToWorkPoints: [
    "Pick 3–6 realistic job titles recruiters search.",
    "Set locations to Dutch cities or regions you can join.",
    "Choose visibility (recruiters only vs all LinkedIn) based on your risk.",
    "Update start date and work type (full-time, contract) honestly.",
    "Review preferences monthly as your search evolves.",
  ],
  openToWorkRows: [
    {
      situation: "Employed and discreet",
      letterNeeded: "Recruiters only visibility",
      tip: "Strengthen headline/About even if banner is off.",
    },
    {
      situation: "Actively between roles",
      letterNeeded: "Broader visibility can help",
      tip: "Keep titles specific to avoid irrelevant InMails.",
    },
    {
      situation: "Relocation from abroad",
      letterNeeded: "Include target NL cities + start window",
      tip: "Say timezone-friendly interview availability in About.",
    },
    {
      situation: "Contract / freelance bridge",
      letterNeeded: "Reflect contract interest accurately",
      tip: "Cross-check Freelancing / contractor guides for positioning.",
    },
    {
      situation: "Sponsorship needed",
      letterNeeded: "Honest authorization note elsewhere on profile",
      tip: "Do not imply permit certainty in Open to Work fields.",
    },
    {
      situation: "Career switch",
      letterNeeded: "Target new titles + proof in About",
      tip: "Old titles alone will keep attracting the wrong roles.",
    },
  ] satisfies Array<{ situation: string; letterNeeded: string; tip: string }>,
  dutchNormsHeading: "Dutch Hiring Norms on LinkedIn",
  dutchNormsParagraphs: [
    "Dutch professional communication tends to be direct, factual and low on theatrical self-promotion. On LinkedIn that usually means clear role titles, concrete outcomes and modest claims — aligned with workplace directness culture.",
    "English profiles are common for international teams. Dutch-language profiles can help for Dutch-required roles — only when quality is strong. Overstating Dutch fluency is a frequent expat failure mode.",
    "Authorization and start-date notes should be honest and brief. Save salary negotiation for later stages; LinkedIn is for earning a conversation, not closing a package in the first message.",
  ],
  dutchNormsPoints: [
    "Prefer concrete achievements over adjective stacks.",
    "Match vacancy language; keep CEFR claims honest.",
    "Keep messages short — like a clear professional email.",
    "Avoid fake awards, inflated titles or invented metrics.",
    "Align tone with Dutch Workplace Culture and Directness guides.",
  ],
  dutchNormsRows: [
    {
      topic: "Tone",
      dutchNorm: "Direct, warm, evidence-led",
      tip: "Cut hype adjectives; keep proof.",
    },
    {
      topic: "Language",
      dutchNorm: "English common; Dutch when strong",
      tip: "Weak Dutch can hurt more than clear English.",
    },
    {
      topic: "Self-promotion",
      dutchNorm: "Modest clarity beats hard sell",
      tip: "Let outcomes speak; invite a talk.",
    },
    {
      topic: "Authorization",
      dutchNorm: "Honest short status note",
      tip: "Never imply IND certainty.",
    },
    {
      topic: "Follow-ups",
      dutchNorm: "Polite, spaced, specific",
      tip: "One reminder with new value beats daily pings.",
    },
  ] satisfies NormsRow[],
  messagingHeading: "Messaging Recruiters and Hiring Managers",
  messagingParagraphs: [
    "Recruiter messages on LinkedIn should read like a short professional note: who you are, why this role or company, one proof point and a clear ask (call, CV review or next step). Long autobiographical pitches rarely help.",
    "When a recruiter reaches out first, confirm the role, location, language and authorization context before investing hours. When you outreach, research the person and vacancy — generic connection spam damages trust.",
    "Attach or offer your localised CV when appropriate. Point to Cover Letter only when a letter is requested; do not paste a full motivatiebrief into a LinkedIn DM.",
  ],
  messagingPoints: [
    "Open with the role title and a specific reason.",
    "Add one proof outcome tied to a must-have.",
    "State location / relocation and authorization honestly.",
    "Ask for one clear next step.",
    "Keep follow-ups polite and spaced.",
  ],
  messagingCards: [
    { title: "Strong outreach pattern", body: "Hi [Name] — applying/interested in [Role] in [City]. I [proof]. Open to a short call this week?" },
    { title: "Weak outreach pattern", body: "Hi, I saw your profile and would love to connect and explore synergies / opportunities." },
    { title: "Strong reply pattern", body: "Thanks for reaching out about [Role]. My background is [fit]. I can share a CV and am available [windows]." },
    { title: "Weak reply pattern", body: "Interested! What is the salary? Can you also refer me to other roles immediately?" },
  ] satisfies LinkedInCard[],
  messagingTips: [
    "Personalise one line — company, product or vacancy ID.",
    "Do not mass-message identical text to twenty recruiters.",
    "Save compensation depth for Salary Negotiation stages.",
    "If they ask for documents, send CV + letter per vacancy rules.",
  ],
  applyingHeading: "Easy Apply, Career Sites and Recruiter Paths",
  applyingParagraphs: [
    "LinkedIn Easy Apply can speed submissions, but many Dutch employers still prefer company career portals, email applications or recruiter-managed packs with CV and motivatiebrief. Read each vacancy's instructions.",
    "A strong profile helps Easy Apply screens — it does not replace a localised CV or a tailored letter when those are requested. After applying, track conversations and interview invites in one place.",
    "For channel strategy across platforms and cities, use the Finding Jobs guide. This section covers LinkedIn-specific application behaviour only.",
  ],
  applyingPoints: [
    "Follow vacancy instructions over habit.",
    "Keep CV PDF ready for Easy Apply uploads.",
    "Use optional note fields with a short tailored line.",
    "Switch to portal + letter when the ad requires it.",
    "Confirm recruiter next steps after screening chats.",
  ],
  applyingRows: [
    {
      situation: "Easy Apply only",
      approach: "Submit with strong profile + CV; use note field if present",
      firstStep: "Confirm profile headline matches the role family",
    },
    {
      situation: "Company portal + letter",
      approach: "Leave LinkedIn as discovery; apply with CV + motivatiebrief",
      firstStep: "Open Cover Letter guide and draft a tailored letter",
    },
    {
      situation: "Recruiter InMail first",
      approach: "Clarify role pack; send CV when requested",
      firstStep: "Ask which documents the client expects",
    },
    {
      situation: "Internal referral",
      approach: "Thank referrer; keep LinkedIn consistent with referred story",
      firstStep: "Align headline with the referred role title",
    },
  ] satisfies ScenarioRow[],
  networkingOnLiHeading: "Networking on LinkedIn (Platform Layer)",
  networkingOnLiParagraphs: [
    "LinkedIn networking for Dutch job search includes thoughtful connections, commenting on relevant posts, joining professional groups and asking for warm intros — always with a clear professional reason.",
    "This page owns the platform layer. Broader offline networking — meetups, communities, alumni events and in-person relationship building — belongs to the Networking Netherlands guide.",
    "Quality beats volume. A few relevant conversations usually outperform hundreds of unanswered connection requests.",
  ],
  networkingOnLiPoints: [
    "Personalise connection notes with a concrete reason.",
    "Engage on posts in your target domain before pitching.",
    "Ask for intros only when there is a clear mutual context.",
    "Keep alumni and expat community outreach respectful and specific.",
    "Move serious process talk to email or scheduled calls when needed.",
  ],
  networkingOnLiScenarios: [
    {
      situation: "Cold connection to a hiring manager",
      approach: "Short note naming the role and one fit reason — no CV dump",
      firstStep: "Confirm they own hiring for that team",
    },
    {
      situation: "Alumni warm intro",
      approach: "Ask for advice or intro with a specific ask and timeline",
      firstStep: "Draft a forwardable 4-line blurb",
    },
    {
      situation: "Commenting for visibility",
      approach: "Add a useful insight on domain posts — not 'Great post!'",
      firstStep: "Pick three target-company leaders to follow",
    },
    {
      situation: "Offline meetup next",
      approach: "Use LinkedIn to confirm attendance; deepen offline later",
      firstStep: "See Networking Netherlands for community and offline tactics",
    },
  ] satisfies ScenarioRow[],
  mistakesHeading: "Common Expat LinkedIn Mistakes",
  mistakes: [
    {
      title: "Unsearchable headline",
      body: "Creative slogans without role titles hide you from recruiter search.",
      advice: "Lead with titles and niche keywords from live vacancies.",
    },
    {
      title: "CV / LinkedIn mismatch",
      body: "Different dates, titles or claims destroy trust fast.",
      advice: "Reconcile documents before the next application wave.",
    },
    {
      title: "Overclaiming Dutch or permits",
      body: "Inflated fluency or authorization collapses in direct interviews.",
      advice: "State CEFR and authorization status honestly.",
    },
    {
      title: "Spammy outreach",
      body: "Identical DMs to dozens of recruiters signal low effort.",
      advice: "Personalise one line and keep messages short.",
    },
    {
      title: "Open to Work misconfigured",
      body: "Wrong titles or cities attract noise — or surprise your employer.",
      advice: "Review visibility, titles and locations carefully.",
    },
    {
      title: "Keyword stuffing skills",
      body: "Fifty unrelated skills look like gaming, not expertise.",
      advice: "Pin skills you can discuss live.",
    },
    {
      title: "Ignoring letter requirements",
      body: "Easy Apply alone when a motivatiebrief is required wastes the vacancy.",
      advice: "Follow portal instructions; use the Cover Letter guide.",
    },
    {
      title: "Negotiating salary too early",
      body: "Leading every chat with package demands can feel misaligned.",
      advice: "Earn the interview; use Salary Negotiation after an offer.",
    },
  ] satisfies MistakeCard[],
  checklistHeading: "LinkedIn Job-Search Checklist",
  checklistIntro:
    "Treat LinkedIn as part of an application package with your CV and (when required) motivatiebrief. Completing this checklist does not guarantee interviews.",
  howTo: {
    steps: [
      {
        name: "Audit profile foundations",
        text: "Fix photo, location, custom URL and contact options for Dutch-market search.",
      },
      {
        name: "Rewrite headline and About",
        text: "Use searchable role titles, niche keywords, proof outcomes and honest practical notes.",
      },
      {
        name: "Align Experience with your CV",
        text: "Match titles, dates and outcomes; feature only interview-ready assets.",
      },
      {
        name: "Configure Open to Work",
        text: "Set realistic titles, cities, work types and visibility for your situation.",
      },
      {
        name: "Prepare messaging templates",
        text: "Draft short recruiter reply and outreach notes with one proof point and a clear ask.",
      },
      {
        name: "Apply through the right channel",
        text: "Use Easy Apply, portals or recruiter packs as the vacancy requires — keep CV/letter ready.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to optimise LinkedIn for Dutch job search",
    description:
      "Step-by-step orientation for expats using LinkedIn profiles, Open to Work and recruiter messaging for Netherlands roles.",
    anchor: "#checklist",
  },
  applicationChecklist: [
    "Headline includes searchable role titles.",
    "About states proof, target roles and practical notes.",
    "Experience matches localised CV.",
    "Open to Work titles and cities are realistic.",
    "Language and authorization claims are honest.",
    "One recruiter message template is ready.",
    "CV PDF (and letter if needed) are application-ready.",
    "Follow-up cadence is polite and spaced.",
  ],
  scenariosHeading: "Expat LinkedIn Scenarios",
  scenarios: [
    {
      situation: "Sponsorship-dependent search",
      approach: "Honest authorization note; emphasise scarce skills and recognised-sponsor employers",
      firstStep: "Add a clear status line in About without implying certainty",
    },
    {
      situation: "Career switcher",
      approach: "Rewrite headline/About around target role language and transferable proof",
      firstStep: "Replace old-title-only headline this week",
    },
    {
      situation: "Graduate / early career",
      approach: "Lead with projects, internships and tools; keep About short",
      firstStep: "Feature one project with outcomes",
    },
    {
      situation: "Senior specialist",
      approach: "Emphasise scope, stakeholders and decision impact — keep About concise",
      firstStep: "Cut biography; keep two high-signal outcomes",
    },
    {
      situation: "Applying while still abroad",
      approach: "Show relocation city, interview availability and start window",
      firstStep: "Update location preferences and About note",
    },
    {
      situation: "Dutch-language corporate role",
      approach: "Polish Dutch profile sections or keep English with honest language levels",
      firstStep: "Have a fluent reviewer check any Dutch text",
    },
  ] satisfies ScenarioRow[],
  relatedGuides: [
    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-channel search strategy: platforms, recruiters, sponsorship and city demand.",
    },
    { label: "Recruitment Agencies Netherlands", href: "/netherlands/jobs/recruitment-agencies-netherlands/", status: "live", description: "Agency channel for Dutch roles." },
    { label: "English Speaking Jobs Netherlands", href: "/netherlands/jobs/english-speaking-jobs-netherlands/", status: "live", description: "English-friendly market lane." },
    { label: "Remote Work Netherlands", href: "/netherlands/jobs/remote-work-netherlands/", status: "live", description: "Remote and hybrid employment norms." },

    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV document your LinkedIn profile must match.",
    },
    {
      label: "Cover Letter Netherlands",
      href: COVER_LETTER_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch motivatiebrief norms when portals require a letter beyond Easy Apply.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after LinkedIn outreach gets a response.",
    },
    {
      label: "Salary Negotiation Netherlands",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "How to evaluate and negotiate Dutch offers beyond headline gross salary.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Broader offline and community networking beyond LinkedIn platform tactics.",
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
      description: "How Dutch teams collaborate — useful context for profile tone.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape LinkedIn messages and interviews.",
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
      description: "Package components to understand after interviews — not in first DMs.",
    },
  ] satisfies LinkedInNetherlandsLink[],
  relatedGuideReadingOrder: [
    "Localise your CV, then align LinkedIn Experience and headline.",
    "Draft motivatiebrief when vacancies require letters (Cover Letter guide).",
    "Open Finding Jobs for multi-channel strategy beyond LinkedIn.",
    "Use Interview Tips once screeners reply; Salary Negotiation after offers.",
  ],
  relatedGuideScenarios: [
    {
      situation: "Strong LinkedIn, weak CV",
      approach: "Fix CV Netherlands localisation before more Easy Apply bursts",
      firstStep: "Open CV guide and rewrite the top third",
    },
    {
      situation: "Profile ready, no pipeline",
      approach: "Shift time into Finding Jobs channels and targeted outreach",
      firstStep: "Shortlist three platforms and ten target employers",
    },
    {
      situation: "Portal asks for letter",
      approach: "Use Cover Letter guide; keep LinkedIn as discovery",
      firstStep: "Draft one employer-specific motivatiebrief",
    },
    {
      situation: "First interview invite",
      approach: "Switch focus to Interview Tips and workplace culture",
      firstStep: "Prepare examples that match LinkedIn proof points",
    },
  ] satisfies ScenarioRow[],
  hubCards: [
    {
      label: "Finding Jobs",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Job search channels, recruiters and sponsorship orientation.",
    },
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "The document your LinkedIn profile must match.",
    },
    {
      label: "Cover Letter",
      href: COVER_LETTER_NETHERLANDS_PATH,
      status: "live",
      description: "Motivation letters when Easy Apply is not enough.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Offline communities, events and warm intros beyond the platform.",
    },
    {
      label: "Working in the Netherlands",
      href: JOBS_HUB_PATH,
      status: "live",
      description: "Jobs hub for broader work and relocation context.",
    },
  ] satisfies LinkedInNetherlandsLink[],
  serviceCategories: [
    {
      label: "Career coaches",
      href: CAREER_COACHES_PATH,
      status: "live",
      description: "Positioning and interview coaching discovery — not a ranking of LinkedIn coaches.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Move logistics when LinkedIn conversations turn into a start date.",
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
    "Career coaches: when positioning or interview practice needs structured feedback alongside profile work.",
    "Relocation services: when city, housing and family timing follow a successful LinkedIn-led process.",
    "Immigration lawyers: when permit routes or recognised-sponsor questions remain unclear.",
    "Tax advisors: when offer packages, rulings or cross-border income need modelling.",
  ],
  serviceScenarios: [
    {
      situation: "Strong experience, weak positioning",
      approach: "Career coach for headline/About and proof selection — not ghostwritten hype",
      firstStep: "Book a scoped review of profile + one target role",
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
    "Some links may be affiliate or referral links. Professional services may help with specific steps — they do not replace honest profiles, official IND guidance or qualified advice. This page does not rank LinkedIn coaches, Premium sellers or recruiters — and does not guarantee interviews.",
  faq: [
    {
      q: "Do I need LinkedIn to find a job in the Netherlands?",
      a: "It is not legally required, but many international and Dutch employers use LinkedIn heavily for sourcing and screening. Treat it as a core channel alongside company sites and recruiters.",
    },
    {
      q: "Should my LinkedIn be in English or Dutch?",
      a: "English is common for international roles. Use Dutch when applying to Dutch-language roles and quality is strong. Keep language-level claims honest either way.",
    },
    {
      q: "Should I turn on Open to Work?",
      a: "Often yes if you are searching — but choose visibility carefully if you are employed. Configure realistic titles and cities.",
    },
    {
      q: "Do I need LinkedIn Premium?",
      a: "Not required. Premium can add features for some searchers, but a clear free profile, strong CV and targeted outreach matter more than paying for tools.",
    },
    {
      q: "How long should my About section be?",
      a: "Short and scannable — enough for proof, target roles and practical notes. Leave full timelines on the CV.",
    },
    {
      q: "Should I put a photo on LinkedIn?",
      a: "A clear professional photo is expected on LinkedIn in the Netherlands. Photo norms for the CV document are covered separately in the CV guide.",
    },
    {
      q: "How do I mention visa sponsorship on LinkedIn?",
      a: "Add a brief honest authorization note in About or messages. Do not imply permit certainty — confirm IND rules separately.",
    },
    {
      q: "Is Easy Apply enough?",
      a: "Sometimes. Many vacancies still expect company portals, CV uploads or a motivatiebrief. Follow each vacancy's instructions.",
    },
  ],
  faqNextSteps: [
    "Rewrite headline and About for one target role family.",
    "Align Experience with your localised CV.",
    "Send one tailored recruiter message this week.",
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
      description: "Immigration and permit rules when sponsorship intersects with your search.",
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
    "Open Cover Letter when portals require a motivatiebrief.",
    "Open Finding Jobs for multi-channel strategy beyond LinkedIn.",
    "Open Interview Tips when screeners reply.",
  ],
  exploreNextCards: [
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV your LinkedIn profile must match.",
    },
    {
      label: "Cover Letter Netherlands",
      href: COVER_LETTER_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch motivatiebrief when Easy Apply is not enough.",
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
      description: "Live interview process after outreach gets a response.",
    },
    {
      label: "Networking Netherlands",
      href: NETWORKING_NETHERLANDS_PATH,
      status: "live",
      description: "Events, communities, referrals and offline networking habits.",
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
      description: "Team norms that shape profile tone and interviews.",
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
      description: "Compare models before you position employment vs freelance search.",
    },
    {
      label: "Expat Salary",
      href: EXPAT_SALARY_NETHERLANDS_PATH,
      status: "live",
      description: "Salary context while you target roles.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_NETHERLANDS_PATH,
      status: "live",
      description: "ZZP routes when LinkedIn search includes contract work.",
    },
  ] satisfies LinkedInNetherlandsLink[],
} as const;

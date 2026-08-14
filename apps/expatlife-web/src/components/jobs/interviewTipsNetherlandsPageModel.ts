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

export {
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  CV_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
};

export const INTERVIEW_TIPS_NETHERLANDS_AFFILIATE_PLACEMENT_ID = "nl-jobs-interview-tips-support-providers" as const;

export type InterviewTipsNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type InterviewCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type QuestionRow = { question: string; whatTheyProbe: string; howToAnswer: string };
export type FormatRow = { format: string; expectations: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "interview-tips-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const interviewTipsNetherlandsPage = {
  slug: "interview-tips-netherlands",
  path: INTERVIEW_TIPS_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INTERVIEW_TIPS_NETHERLANDS_PATH) ?? "2026-10-01",
  affiliatePlacementId: INTERVIEW_TIPS_NETHERLANDS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Interview Tips in the Netherlands | Dutch Job Interview Guide for Expats",
    description:
      "Learn how Dutch job interviews work for expats: interview culture, directness, preparation, common questions, remote vs onsite norms and follow-up etiquette.",
    keywords: [
      "interview tips Netherlands",
      "Dutch job interview",
      "interview Netherlands expats",
      "Dutch interview questions",
      "job interview Netherlands",
      "Dutch interview culture",
      "remote interview Netherlands",
      "interview follow-up Netherlands",
      "Dutch directness interview",
      "expat interview tips Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Interviews",
    pageTitle: "Interview Tips in the Netherlands",
    subtitle:
      "Learn how Dutch job interviews work for expats — including interview culture, directness, preparation, common questions, remote vs onsite norms and follow-up etiquette.",
    primaryCta: { label: "Prepare for Dutch Interviews", href: "#prepare" },
    secondaryCta: { label: "Browse Jobs Guides", href: JOBS_HUB_PATH },
    chips: ["Dutch directness", "Prep checklist", "Common questions", "Follow-up etiquette"],
    image: {
      src: `/images/heroes/interview-tips-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international professional in a bright Amsterdam office meeting room preparing for a Dutch job interview, notebook and laptop on the table, canal houses visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining how Dutch job interviews differ for expats: direct questions, role-fit evidence, calm professionalism and honest authorization context.",
      "Dutch interviews reward clear evidence and calm directness — not theatrical sales pitches."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six Dutch interview facts for expats: directness, multi-stage loops, evidence over charm, remote norms, follow-up etiquette and authorization honesty.",
      "Use this overview before your first Dutch screening call."
    ),
    culture: visual(
      "culture",
      "Infographic of Dutch interview culture: direct feedback, egalitarian panels, substance over small talk and honest gaps discussion.",
      "Expect candid questions — treat them as clarity, not hostility."
    ),
    prepare: visual(
      "prepare",
      "Infographic preparation checklist for Dutch interviews: vacancy mapping, STAR examples, company research, logistics and authorization notes.",
      "Strong preparation makes direct questions easier to answer calmly."
    ),
    questions: visual(
      "questions",
      "Infographic of common Dutch interview question themes: motivation, impact, collaboration, conflict, learning and work authorization.",
      "Hiring managers probe evidence — rehearse stories that match your CV."
    ),
    formats: visual(
      "formats",
      "Infographic comparing remote, onsite and hybrid Dutch interview formats with logistics and professional norms.",
      "Match energy and professionalism to the format — not only the content."
    ),
    followUp: visual(
      "follow-up",
      "Infographic of Dutch interview follow-up etiquette: brief thank-you, timeline checks and when salary talks begin.",
      "A short, specific follow-up usually works better than frequent chasing."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of common expat interview mistakes in the Netherlands including overselling, dodging direct questions and premature salary debates.",
      "Fixing these issues improves clarity — it still does not guarantee an offer."
    ),
    checklist: visual(
      "checklist",
      "Infographic how-to checklist for Dutch interview loops from invite to follow-up.",
      "Treat each interview stage as a package: research, stories, logistics and honest next steps."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic map of expat interview scenarios: abroad applicants, sponsored roles, career switchers, senior hires and graduate loops.",
      "Your prep emphasis changes depending on how you enter the Dutch labour market."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting interview prep to CV localisation, finding jobs, salary negotiation, workplace culture and Dutch directness.",
      "Interviews sit between application materials and offer talks."
    ),
    services: visual(
      "services",
      "Infographic showing professional support that may help during interview weeks: career coaches, relocation, immigration and tax planning after offers.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common Dutch interview FAQ topics: dress code, Dutch language, salary timing, panels and follow-up.",
      "FAQ answers should lead to a concrete prep action before your next call."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing trusted orientation sources for Dutch work and interviews: Government.nl, UWV, Werk.nl, Business.gov.nl and IND for permit context.",
      "Verify labour market and permit rules on official sites — not recruiter marketing alone."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting interview preparation to CV, finding jobs, salary negotiation and Dutch workplace culture guides.",
      "After interviews progress, move into offer talks, contracts and culture onboarding."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Culture" },
    { href: "#prepare", label: "Prepare" },
    { href: "#questions", label: "Questions" },
    { href: "#formats", label: "Formats" },
    { href: "#follow-up", label: "Follow-up" },
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
    heading: "How Dutch Job Interviews Work for Expats",
    paragraphs: [
      "Dutch employers often run structured interview loops that mix recruiter screens, hiring-manager conversations, team fit talks and sometimes a case or technical exercise. Many international candidates arrive expecting polished sales performances — and are surprised by calm, direct questions about evidence, gaps and collaboration.",
      "This guide covers Dutch interview culture and directness, preparation checklists, common question themes, remote vs onsite norms, follow-up etiquette and frequent expat mistakes. It does not rank interview coaches, guarantee offers or replace immigration advice.",
      "Use CV Netherlands for application documents, Finding Jobs for channels and sponsorship strategy, and Salary Negotiation once offer talks begin.",
    ],
    keyPoints: [
      { title: "Be direct and evidence-led", body: "Answer clearly with examples from your CV — soft deflection often reads as vagueness." },
      { title: "Prepare concrete stories", body: "Map vacancy requirements to STAR-style examples you can discuss calmly under pressure." },
      { title: "Match the format", body: "Remote, hybrid and onsite loops each have logistics and presence norms — plan them deliberately." },
      { title: "Follow up lightly", body: "A short thank-you and timeline check usually beats frequent chasing." },
    ],
    scenarios: [
      {
        situation: "First Dutch screening call",
        approach: "Lead with role fit, recent impact and honest authorization/start-date context",
        firstStep: "Write a 60-second intro tied to the vacancy title",
      },
      {
        situation: "Panel with Dutch direct questions",
        approach: "Treat blunt probes as clarity requests; answer with evidence, then invite follow-ups",
        firstStep: "Rehearse two conflict and two impact stories aloud",
      },
      {
        situation: "Interviewing from abroad",
        approach: "Show relocation readiness, timezone reliability and clear permit status",
        firstStep: "Confirm camera setup, quiet room and start-date window",
      },
      {
        situation: "Late-stage offer signals",
        approach: "Keep interview focus on role fit; move compensation into Salary Negotiation once an offer is real",
        firstStep: "Ask process/timeline questions before salary debates",
      },
    ] satisfies ScenarioRow[],
  },
  introPlanningSteps: [
    "Re-read the vacancy and mark five requirements you can prove with CV examples.",
    "Prepare a calm 60-second introduction and three STAR stories.",
    "Decide authorization and start-date wording you can say honestly.",
  ],
  snapshotCards: [
    { label: "Tone", value: "Direct & calm", note: "Clear answers beat theatrical enthusiasm." },
    { label: "Evidence", value: "CV-linked stories", note: "Hiring managers probe outcomes you claimed on paper." },
    { label: "Stages", value: "Often multi-step", note: "Screen → manager → team/case is common." },
    { label: "Formats", value: "Remote + onsite", note: "Hybrid loops are normal for international hires." },
    { label: "Follow-up", value: "Short & specific", note: "One thank-you note usually suffices." },
    { label: "Authorization", value: "State honestly", note: "Do not imply visa certainty you do not have." },
  ] satisfies SnapshotSignal[],
  snapshotNextSteps: [
    "Map vacancy requirements to three proof stories.",
    "Read the culture and questions sections before mock practice.",
    "Confirm logistics for remote or onsite formats.",
  ],
  cultureHeading: "Dutch Interview Culture and Directness",
  cultureParagraphs: [
    "Dutch interview culture often feels more direct and less theatrical than some US or Southern European norms. Interviewers may ask blunt questions about weaknesses, gaps, seniority fit or why you left a role — usually to reduce ambiguity, not to trap you.",
    "Egalitarian tone is common: junior panel members may ask substantive questions, and candidates who only perform for the most senior person can miss the room. Substance, collaboration examples and honest trade-offs usually beat charm-heavy answers.",
    "For deeper workplace communication context, see Dutch Directness at Work and Dutch Workplace Culture after you understand the interview loop itself.",
  ],
  culturePoints: [
    "Direct questions are often a clarity tool — answer them, then add context.",
    "Interruptions and short follow-ups can be normal; stay calm and precise.",
    "Overly polished marketing language can reduce trust.",
    "Show how you disagree professionally — Dutch teams value constructive pushback.",
    "Humility with evidence lands better than exaggerated self-promotion.",
  ],
  cultureCards: [
    { title: "What directness sounds like", body: "Why did that project fail? What would you do differently? Are you overqualified? — answered with facts, not defensiveness." },
    { title: "What interviewers often value", body: "Role fit, measurable impact, teamwork under pressure, learning speed and realistic motivation for the Netherlands." },
    { title: "What can feel different", body: "Less small talk, faster pivots to substance, and feedback that sounds blunt if you expect soft praise first." },
    { title: "How to respond well", body: "Acknowledge the question, give a concrete example, state the lesson, invite a follow-up." },
  ] satisfies InterviewCard[],
  prepareHeading: "Interview Preparation Checklist",
  prepareParagraphs: [
    "Preparation for Dutch interviews is less about memorising scripts and more about mapping evidence. Interviewers often cross-check what you claimed on your CV and motivation letter.",
    "Build a short prep pack: vacancy requirement map, three to five STAR stories, company and team research notes, logistics checklist, and honest authorization/start-date lines.",
  ],
  preparePoints: [
    "Re-read your CV and be ready to discuss every bullet.",
    "Research the employer’s products, cities and recent news beyond the About page.",
    "Prepare questions that show role curiosity — not only salary curiosity.",
    "Align examples with the vacancy language without copying the job ad.",
    "Plan tech setup for remote stages and travel/arrival buffer for onsite stages.",
  ],
  prepareChecklist: [
    "Vacancy printed or open with five must-prove requirements highlighted.",
    "60-second introduction tailored to this employer and role title.",
    "Three impact stories and one conflict/collaboration story rehearsed aloud.",
    "Honest answer ready for Dutch language level and work authorization.",
    "Questions prepared for hiring manager, recruiter and team stages.",
    "Quiet room, camera, lighting and backup network tested for remote rounds.",
  ],
  questionsHeading: "Common Questions Dutch Hiring Managers Probe",
  questionsParagraphs: [
    "Themes recur across Dutch professional interviews even when exact wording varies: motivation for the role and Netherlands, recent impact, collaboration and conflict, learning from mistakes, seniority fit and practical constraints like start date or sponsorship.",
    "Use STAR (Situation, Task, Action, Result) lightly — keep answers structured and concise rather than theatrical. If you do not know something, say so and explain how you would find out.",
  ],
  questionRows: [
    {
      question: "Why this role / this employer?",
      whatTheyProbe: "Specific motivation vs generic job hunt",
      howToAnswer: "Name product, team or city reasons + how your recent work maps",
    },
    {
      question: "Tell us about a recent achievement",
      whatTheyProbe: "Evidence behind CV claims",
      howToAnswer: "One STAR story with scope, tools, your actions and outcome",
    },
    {
      question: "Describe a conflict or disagreement",
      whatTheyProbe: "Direct communication and collaboration",
      howToAnswer: "Show respectful challenge, listening and resolution — not blame",
    },
    {
      question: "What are your weaknesses / gaps?",
      whatTheyProbe: "Self-awareness and honesty",
      howToAnswer: "Pick a real gap, mitigation steps and current progress",
    },
    {
      question: "Why the Netherlands / this city?",
      whatTheyProbe: "Relocation seriousness",
      howToAnswer: "Concrete pull factors and realistic timeline — avoid vague lifestyle clichés only",
    },
    {
      question: "Do you need sponsorship / when can you start?",
      whatTheyProbe: "Feasibility and planning",
      howToAnswer: "State status honestly; never invent permit certainty",
    },
  ] satisfies QuestionRow[],
  questionsTips: [
    "Keep answers roughly 1–2 minutes unless asked to go deeper.",
    "If interrupted, pause, answer the new question, then finish if invited.",
    "Mirror vacancy keywords only when your experience truly supports them.",
    "Bring one thoughtful question about team priorities or success metrics.",
  ],
  formatsHeading: "Remote, Onsite and Hybrid Interview Norms",
  formatsParagraphs: [
    "International candidates often face mixed formats: video screens, remote technical exercises, then onsite or hybrid finals. Professionalism expectations stay high across formats.",
    "For remote: stable connection, neutral background, eye contact via camera and concise audio matter. For onsite: arrive early, greet the whole panel and treat informal coffee chats as part of the evaluation.",
  ],
  formatRows: [
    {
      format: "Recruiter screen (often remote)",
      expectations: "Role fit, motivation, salary band orientation, authorization basics",
      tip: "Be clear and concise; save deep technical detail for later stages",
    },
    {
      format: "Hiring manager (remote or onsite)",
      expectations: "Evidence, seniority fit, problem-solving approach",
      tip: "Bring two strong examples tied to the vacancy’s hardest requirements",
    },
    {
      format: "Team / culture conversation",
      expectations: "Collaboration style, direct communication, day-to-day fit",
      tip: "Ask how the team gives feedback and makes decisions",
    },
    {
      format: "Case / technical exercise",
      expectations: "Structured thinking under time pressure",
      tip: "Narrate assumptions; ask clarifying questions early",
    },
    {
      format: "Onsite final / office visit",
      expectations: "Presence, energy and informal interactions",
      tip: "Plan travel buffer; treat every hallway chat as evaluative",
    },
  ] satisfies FormatRow[],
  formatsChecklist: [
    "Remote: camera at eye level, headphones tested, phone as hotspot backup.",
    "Onsite: route, building entry and ID requirements confirmed.",
    "Hybrid: same story consistency across panelists who may not share notes fully.",
    "Always: water, notepad, vacancy + CV open but not read aloud.",
  ],
  followUpHeading: "Follow-up Etiquette After Dutch Interviews",
  followUpParagraphs: [
    "After a Dutch interview, a short thank-you message within one business day is usually enough. Mention one specific discussion point and restate interest. Long emotional follow-ups or daily check-ins can feel pushy.",
    "If the recruiter gave a timeline, wait until that window passes before a polite status check. Salary negotiation usually belongs after a concrete offer — use the Salary Negotiation guide when talks turn to package details.",
  ],
  followUpPoints: [
    "Email or LinkedIn note to the recruiter (and interviewer if appropriate) within 24 hours.",
    "Reference one concrete topic from the conversation.",
    "Ask about next steps only if the timeline was unclear.",
    "Keep compensation questions process-oriented until an offer appears.",
    "Update Finding Jobs pipeline notes so you do not lose track of parallel processes.",
  ],
  followUpScenarios: [
    {
      situation: "No reply after the stated decision date",
      approach: "One polite timeline check to the recruiter",
      firstStep: "Send a three-sentence email referencing the interview date",
    },
    {
      situation: "Verbal positive signal, no offer yet",
      approach: "Stay available; prepare documents; avoid aggressive chasing",
      firstStep: "Ask what remains in the process and expected timing",
    },
    {
      situation: "Offer arrives",
      approach: "Switch to Salary Negotiation + contract/benefits reading",
      firstStep: "Request the offer in writing before negotiating",
    },
    {
      situation: "Rejection with brief feedback",
      approach: "Thank them; extract one improvement for the next loop",
      firstStep: "Update your STAR stories or CV bullets based on the gap named",
    },
  ] satisfies ScenarioRow[],
  mistakesHeading: "Common Expat Interview Mistakes",
  mistakes: [
    {
      title: "Overselling and buzzword fog",
      body: "Heavy marketing language can clash with Dutch preference for concrete evidence.",
      advice: "Replace slogans with one clear example and result.",
    },
    {
      title: "Dodging direct questions",
      body: "Long detours around weaknesses or gaps reduce trust.",
      advice: "Answer first, then add context and mitigation.",
    },
    {
      title: "CV–interview mismatch",
      body: "Cannot explain a bullet you wrote for ATS keywords.",
      advice: "Only claim what you can discuss for 2–3 minutes.",
    },
    {
      title: "Premature hard salary fights",
      body: "Aggressive package debates before mutual fit are often poorly timed.",
      advice: "Share bands if asked; deep negotiation after a written offer.",
    },
    {
      title: "Overclaiming Dutch or visa status",
      body: "Inflated language levels or implied permit certainty damage credibility.",
      advice: "State levels and authorization honestly; verify IND rules separately.",
    },
    {
      title: "Ignoring the panel",
      body: "Speaking only to the most senior person misses egalitarian dynamics.",
      advice: "Make eye contact with everyone who asks a question.",
    },
    {
      title: "Weak remote presence",
      body: "Chaotic audio, dark lighting or reading a script undermines strong content.",
      advice: "Do a tech rehearsal the day before.",
    },
    {
      title: "No thoughtful questions",
      body: "Only asking about holiday days signals low role curiosity.",
      advice: "Ask about priorities, success metrics or team collaboration norms.",
    },
  ] satisfies MistakeCard[],
  checklistHeading: "Interview Loop Checklist",
  checklistIntro:
    "Treat each Dutch interview stage as a package: research, stories, logistics and follow-up. Completing this checklist does not guarantee an offer.",
  howTo: {
    steps: [
      {
        name: "Confirm stage and logistics",
        text: "Clarify format, interviewers, duration and any case exercise so you can prepare the right materials.",
      },
      {
        name: "Map vacancy to evidence",
        text: "Highlight five requirements and attach a CV-linked example to each.",
      },
      {
        name: "Rehearse core stories",
        text: "Practice a 60-second intro plus impact, conflict and learning examples aloud.",
      },
      {
        name: "Prepare honesty lines",
        text: "Write clear wording for Dutch level, authorization status and start-date reality.",
      },
      {
        name: "Run the interview calmly",
        text: "Answer directly, invite follow-ups and take brief notes on process timing.",
      },
      {
        name: "Follow up once",
        text: "Send a short thank-you within one business day, then wait for the stated timeline before checking in.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to prepare for a Dutch job interview as an expat",
    description: "Step-by-step orientation for preparing, delivering and following up on Dutch job interviews.",
    anchor: "#checklist",
  },
  applicationChecklist: [
    "Stage format, panel and timing confirmed with the recruiter.",
    "Five vacancy requirements mapped to CV examples.",
    "Intro and STAR stories rehearsed aloud.",
    "Authorization and language wording are honest.",
    "Remote/onsite logistics tested or booked with buffer.",
    "Thank-you note drafted for sending within 24 hours.",
  ],
  scenariosHeading: "Expat Interview Scenarios",
  scenarios: [
    {
      situation: "Applying from abroad with sponsorship needs",
      approach: "Lead with scarce skills and clear authorization status; show relocation readiness",
      firstStep: "Prepare a one-line sponsorship status and realistic start window",
    },
    {
      situation: "Graduate / early career loop",
      approach: "Lean on projects, internships and learning speed; keep answers concrete",
      firstStep: "Pick two project stories with tools and outcomes",
    },
    {
      situation: "Senior specialist / leadership",
      approach: "Emphasise scope, stakeholder management and team outcomes",
      firstStep: "Prepare one strategy example and one people-conflict example",
    },
    {
      situation: "Career switcher",
      approach: "Translate transferable wins into the target role language",
      firstStep: "Rewrite your intro around the new role title, not the old one",
    },
    {
      situation: "Remote-first international team",
      approach: "Demonstrate async communication and timezone reliability",
      firstStep: "Ask how the team runs meetings and written decisions",
    },
    {
      situation: "Freelancer moving toward employment",
      approach: "Show collaboration inside client systems and employer-ready examples",
      firstStep: "Pick three client stories that map to job requirements",
    },
  ] satisfies ScenarioRow[],
  relatedGuides: [
    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Where and how expats search: platforms, recruiters, sponsorship and city demand.",
    },
    { label: "Recruitment Agencies Netherlands", href: "/netherlands/jobs/recruitment-agencies-netherlands/", status: "live", description: "Agency channel for Dutch roles." },
    { label: "English Speaking Jobs Netherlands", href: "/netherlands/jobs/english-speaking-jobs-netherlands/", status: "live", description: "English-friendly market lane." },
    { label: "Remote Work Netherlands", href: "/netherlands/jobs/remote-work-netherlands/", status: "live", description: "Remote and hybrid employment norms." },

    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch CV, motivation letter and LinkedIn alignment before interviews begin.",
    },
    {
      label: "Cover Letter Netherlands",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief norms when portals still require a letter.",
    },
    {
      label: "LinkedIn Netherlands",
      href: "/netherlands/jobs/linkedin-netherlands/",
      status: "live",
      description: "Profile positioning and recruiter messaging that lead into interviews.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Events, communities, referrals and Dutch directness that feed interview pipelines.",
    },
    {
      label: "Salary Negotiation Netherlands",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "How to evaluate and negotiate Dutch offers beyond headline gross salary.",
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
      label: "Employee Benefits",
      href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
      status: "live",
      description: "Pension, holiday allowance, leave and package components after interviews.",
    },
    {
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "How Dutch teams collaborate — useful context for interview tone.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape interviews and workplace feedback.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_NETHERLANDS_PATH,
      status: "live",
      description: "ZZP and freelance routes when employment is not the only path.",
    },
    {
      label: "Contractor vs Employee",
      href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
      status: "live",
      description: "Compare employment and contractor models before you position your search.",
    },
  ] satisfies InterviewTipsNetherlandsLink[],
  relatedGuideReadingOrder: [
    "Localise CV and LinkedIn with CV Netherlands if documents still need work.",
    "Open Finding Jobs to keep channels and pipeline warm while interviewing.",
    "Use this Interview Tips guide for live loop preparation.",
    "Move to Salary Negotiation and contract/benefits guides after an offer.",
  ],
  relatedGuideScenarios: [
    {
      situation: "Invite arrived, documents weak",
      approach: "Quick CV/LinkedIn fix, then interview prep",
      firstStep: "Open CV Netherlands and align the top third with the vacancy",
    },
    {
      situation: "Multiple interviews, thin pipeline",
      approach: "Keep Finding Jobs channels active in parallel",
      firstStep: "Schedule two outreach blocks this week",
    },
    {
      situation: "Offer received",
      approach: "Use Salary Negotiation plus contract and benefits guides",
      firstStep: "Model gross-to-net before countering",
    },
    {
      situation: "Culture shock in the panel",
      approach: "Read Dutch Directness and Workplace Culture",
      firstStep: "Reframe blunt questions as clarity requests in practice",
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
      description: "Application documents that get you into the interview room.",
    },
    {
      label: "Cover Letter",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief when portals still require a letter.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Referrals and communities that feed interview pipelines.",
    },
  ] satisfies InterviewTipsNetherlandsLink[],
  serviceCategories: [
    {
      label: "Career coaches",
      href: CAREER_COACHES_PATH,
      status: "live",
      description: "Interview practice and positioning discovery — not a ranking of coaches.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Move logistics when late-stage interviews turn into a start date.",
    },
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Permit questions when sponsorship is part of your interview loop.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Offer modelling, 30% ruling and payroll context after interviews.",
    },
  ],
  servicesWhenToUse: [
    "Career coaches: when mock interviews, positioning or confidence need structured feedback.",
    "Relocation services: when city, housing and family timing follow a likely offer.",
    "Immigration lawyers: when permit routes or recognised-sponsor questions remain unclear.",
    "Tax advisors: when offer packages, rulings or cross-border income need modelling.",
  ],
  serviceScenarios: [
    {
      situation: "Strong CV, shaky live answers",
      approach: "Career coach for mock interviews and story structure",
      firstStep: "Book a scoped practice session for one target role",
    },
    {
      situation: "Final round with relocation package signals",
      approach: "Relocation support plus housing search",
      firstStep: "Confirm what HR covers before signing",
    },
    {
      situation: "Sponsorship-dependent process",
      approach: "Immigration orientation alongside employer HR",
      firstStep: "Verify recognised-sponsor status before relying on a verbal offer",
    },
    {
      situation: "Complex offer after interviews",
      approach: "Tax adviser after Salary Negotiation reading",
      firstStep: "Collect gross package details before the call",
    },
  ] satisfies ScenarioRow[],
  servicesNote:
    "Some links may be affiliate or referral links. Professional services may help with specific steps — they do not replace honest preparation, official IND guidance or qualified advice. This page does not rank interview coaches or guarantee offers.",
  faq: [
    {
      q: "Are Dutch interviews more direct than elsewhere?",
      a: "Often yes. Interviewers may ask blunt questions about gaps, weaknesses or fit. Treat them as clarity requests and answer with evidence.",
    },
    {
      q: "Should I speak Dutch in the interview?",
      a: "Follow the vacancy language. For English roles, strong English is usually enough. Be honest about Dutch level — do not overclaim.",
    },
    {
      q: "When should I discuss salary?",
      a: "Share expectations if asked early, but deep negotiation usually belongs after a written offer. Use the Salary Negotiation guide for package talks.",
    },
    {
      q: "How soon should I follow up?",
      a: "A short thank-you within one business day is typical. If a timeline was given, wait until it passes before a polite status check.",
    },
    {
      q: "What should I wear?",
      a: "Match the employer’s culture: business casual is common for many professional roles. When unsure, ask the recruiter.",
    },
    {
      q: "How do remote interviews differ?",
      a: "Expectations for substance stay the same; logistics matter more — camera, audio, lighting and a quiet space.",
    },
    {
      q: "How do I talk about visa sponsorship?",
      a: "State your authorization status honestly and avoid implying permit certainty. Confirm IND rules and employer sponsor capacity separately.",
    },
    {
      q: "Is a case interview common?",
      a: "It depends on the employer and function. Ask the recruiter what to expect and practice structuring assumptions out loud.",
    },
  ],
  faqNextSteps: [
    "Map five vacancy requirements to CV proof points.",
    "Rehearse intro + three STAR stories aloud.",
    "Draft a one-paragraph thank-you note template.",
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
      description: "Immigration and permit rules when sponsorship intersects with your interview process.",
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
    "IND — permit and sponsorship rules when interviewing from abroad.",
    "Recruiter / hiring manager — final authority on process stages and format.",
  ],
  exploreNextTips: [
    "Open CV Netherlands if application materials still need work.",
    "Open Finding Jobs to keep channels warm between interviews.",
    "Open Salary Negotiation when an offer arrives.",
  ],
  exploreNextCards: [
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise CV, motivation letter and LinkedIn before the next loop.",
    },
    {
      label: "Cover Letter Netherlands",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief when portals still require a letter.",
    },
    {
      label: "LinkedIn Netherlands",
      href: "/netherlands/jobs/linkedin-netherlands/",
      status: "live",
      description: "Profile and recruiter messaging that lead into interviews.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Keep referrals and communities warm between interview loops.",
    },
    {
      label: "Finding Jobs Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Channels, recruiters, sponsorship and city demand.",
    },
    {
      label: "Salary Negotiation",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "Evaluate and negotiate Dutch job offers.",
    },
  ] satisfies InterviewTipsNetherlandsLink[],
} as const;

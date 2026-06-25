export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;

export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const PROBATION_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/probation-period-netherlands/" as const;
export const EMPLOYEE_RIGHTS_NETHERLANDS_PATH = "/netherlands/jobs/employee-rights-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export type WorkplaceCultureLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type CultureCard = {
  title: string;
  body: string;
};

export type IndustryCard = {
  industry: string;
  cultureNote: string;
  expatTip: string;
};

export type SituationCard = {
  situation: string;
  whatHappens: string;
  howToAdapt: string;
};

export type MythCard = {
  myth: string;
  reality: string;
};

export type OfficialSource = {
  name: string;
  href: string;
  description: string;
};

export type MistakeFixRow = {
  mistake: string;
  fix: string;
};

export type TimelineStep = {
  phase: string;
  detail: string;
};

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v4";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-dutch-workplace-culture-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchWorkplaceCulturePage = {
  slug: "dutch-workplace-culture",
  path: DUTCH_WORKPLACE_CULTURE_PATH,
  publish: true,
  publishDate: "2026-11-16",
  seo: {
    title: "Dutch Workplace Culture | Complete Expat Career Guide",
    description:
      "Learn how Dutch workplace culture works, including communication styles, feedback, hierarchy, work-life balance, meetings and professional expectations.",
    keywords: [
      "dutch workplace culture",
      "working in netherlands culture",
      "expat work culture netherlands",
      "dutch business culture",
      "work culture netherlands",
      "dutch communication style",
      "dutch meetings",
      "work life balance netherlands",
      "dutch management style",
      "working in the netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Workplace culture",
    pageTitle: "Dutch Workplace Culture",
    subtitle:
      "Understand communication styles, work-life balance, management expectations and professional culture in the Netherlands.",
    primaryCta: { label: "Learn How Dutch Workplaces Operate", href: "#intro" },
    secondaryCta: { label: "Explore Career Guides", href: JOBS_HUB_PATH },
    chips: ["Direct communication", "Flat hierarchies", "Work-life balance", "Expat adaptation"],
    disclaimer:
      "Orientation only — workplace culture varies by company, team and sector. Confirm day-to-day norms with your manager and colleagues.",
    image: {
      src: `/images/heroes/netherlands-dutch-workplace-culture-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of a diverse international team in a relaxed hybrid meeting — colleagues on a sofa cluster with laptops and coffee while a remote teammate joins on a wall screen — in a bright Amsterdam office with canal houses and bicycles visible through floor-to-ceiling windows.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium record-file builder infographic with five Dutch workplace traits — open communication, flat hierarchy, collaborative decisions, direct feedback and work-life balance — plus a week 1–4 expat orientation checklist.",
      "Use the checklist rail: observe in week 1, ask manager norms in week 2, join a retro by week 4."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot with practical labels — feedback on the task, protected evenings, ask directors questions, discuss before deciding, feedback in week 2, join meetings 2 min early.",
      "Six signals to verify with your team — not universal rules for every employer."
    ),
    businessCulture: visual(
      "business-culture",
      "Premium desk-scene infographic with three company examples — scale-up stand-up blockers, corporate same-day notes, SME owner round-robin — around transparency, efficiency and ownership pillars.",
      "Ask how your team documents decisions and shares priorities."
    ),
    directCommunication: visual(
      "direct-communication",
      "Premium conversation-bridge infographic on Dutch directness — benefits, three workplace phrase examples (design review, delay, meeting) and adaptation tips.",
      "When feedback feels blunt, ask for a concrete example and the requested change."
    ),
    hierarchy: visual(
      "hierarchy",
      "Premium flat-org diagram with examples — junior presents to partner, engineer challenges with data, open Slack with lead — and note that final owners still document decisions.",
      "Flat communication does not mean no authority — confirm who decides."
    ),
    feedback: visual(
      "feedback",
      "Premium feedback cycle timeline covering performance reviews, project retros and peer discussions with actionable next-step prompts.",
      "Normalise feedback as improvement dialogue — always confirm what changes next."
    ),
    meetings: visual(
      "meetings",
      "Premium five-step meeting flow — read agenda, join on time, contribute one point, confirm owners, send recap — with sample agenda topics.",
      "Prepare one structured contribution before every recurring meeting."
    ),
    workLifeBalance: visual(
      "work-life-balance",
      "Premium weekly calendar showing 9–17 core hours, optional Friday early finish, 25 vacation days note, August slow period and urgent-only evening messages.",
      "Confirm contracted hours and after-hours expectations in writing."
    ),
    remoteHybrid: visual(
      "remote-hybrid",
      "Premium hybrid split-scene — home desk, Tue–Thu office pattern, Teams remote colleague — with equipment and abroad-work reminder labels.",
      "Get hybrid rhythm and equipment policy confirmed before assuming remote days."
    ),
    professionalCommunication: visual(
      "professional-communication",
      "Premium email and chat format board — decision-by-Thursday subject line, Slack thread with owner mention, five-line weekly status update.",
      "Short structured updates usually land better than long indirect emails."
    ),
    punctuality: visual(
      "punctuality",
      "Premium clock timeline — join 2 min early, flag delays 24h ahead, calendar invites with agenda, respect lunch block — credibility checklist rail.",
      "Punctuality is a low-effort signal of reliability in most Dutch teams."
    ),
    diversity: visual(
      "diversity",
      "Premium Randstad map pinning Amsterdam tech English HQ, Rotterdam corporate, Eindhoven engineering and Hague government with multicultural team notes.",
      "English is common in international teams — Dutch still helps beyond the office."
    ),
    networking: visual(
      "networking",
      "Premium network ecosystem map — meetup, conference, LinkedIn follow-up, project collaboration path from event to referral.",
      "Build credibility through shared work before cold outreach."
    ),
    workplaceSituations: visual(
      "workplace-situations",
      "Premium six scenario cards — direct feedback week 2, opinion request in group, long debate, CEO in stand-up, flexible Friday, independent vendor choice.",
      "Recognise the pattern so you can respond instead of guessing intent."
    ),
    industryDifferences: visual(
      "industry-differences",
      "Premium six-row industry comparison — tech, finance, retail, healthcare, education, government — with culture notes and expat tips per sector.",
      "Adjust expectations when moving between startup and government pace."
    ),
    expatChallenges: visual(
      "expat-challenges",
      "Premium challenge-and-fix board — misread feedback, waiting for instructions, avoiding disagreement, under-participating, hierarchy assumptions, long emails, cold networking, balance shock.",
      "Most friction is adaptation gap — use the fix column as a weekly check."
    ),
    successChecklist: visual(
      "success-checklist",
      "Premium clipboard checklist with eight success habits and timing hints from week 1 through month 2+.",
      "Run through this list during your first months in a Dutch team."
    ),
    myths: visual(
      "myths",
      "Premium myth-vs-reality board debunking six stereotypes — rudeness, solo managers, Dutch-only, part-time-only, identical companies, feedback as attack.",
      "Replace stereotypes with questions about your specific employer."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight orientation answers on directness, hierarchy, balance, meetings, English, feedback, managers and adaptation speed.",
      "Use FAQ to know what to observe — confirm specifics with colleagues."
    ),
    officialSources: visual(
      "official-sources",
      "Premium resource map pinning Government.nl, Business.gov.nl and UWV with what-to-verify-where checklist rail.",
      "Official sources cover frameworks — day-to-day culture still varies by team."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered route map linking culture guide to finding jobs, contracts, probation, employee rights, expat salary and community basics.",
      "Suggested order: jobs search → contract review → rights orientation."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium next-step journey cards — finding jobs, employment contracts, employee rights, expat salary, community basics — with when-to-use labels.",
      "Pick the card that matches whether you are searching, signing or settling in."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#business-culture", label: "How companies operate" },
    { href: "#direct-communication", label: "Directness" },
    { href: "#hierarchy", label: "Hierarchy" },
    { href: "#feedback", label: "Feedback" },
    { href: "#meetings", label: "Meetings" },
    { href: "#work-life-balance", label: "Balance" },
    { href: "#remote-hybrid", label: "Hybrid work" },
    { href: "#professional-communication", label: "Communication" },
    { href: "#punctuality", label: "Punctuality" },
    { href: "#diversity", label: "International teams" },
    { href: "#networking", label: "Networking" },
    { href: "#workplace-situations", label: "Situations" },
    { href: "#industry-differences", label: "Industries" },
    { href: "#expat-challenges", label: "Challenges" },
    { href: "#success-checklist", label: "Success" },
    { href: "#myths", label: "Myths" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#related-guides", label: "Guides" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    summary:
      "Before your first weeks in a Dutch workplace, expect open communication, relatively flat hierarchies, collaborative decisions, direct feedback and strong work-life balance — but verify norms with your team.",
    bullets: [
      "Direct feedback usually targets the task — ask for examples if tone feels personal.",
      "Many managers expect proactive updates and early escalation of blockers.",
      "Meetings often need preparation — agendas, on-time starts and written follow-ups.",
      "Hybrid patterns and core hours vary — confirm expectations in writing.",
    ],
    note: "Observe team rituals in week one, then ask your manager how feedback, meetings and after-hours contact work on this team.",
  },
  snapshotSignals: [
    { label: "Directness", value: "Common", note: "Plain task feedback" },
    { label: "Hierarchy", value: "Often flat", note: "Questions welcomed" },
    { label: "Balance", value: "Valued", note: "Core hours vary" },
    { label: "Meetings", value: "Prepared", note: "Agenda + recap" },
  ],
  orientationFlowSteps: [
    "Observe how your team runs stand-ups, feedback and decision meetings in week one.",
    "Ask your manager about communication channels, core hours and escalation norms.",
    "Join one meeting prepared with a concise point — confirm outcomes in writing.",
  ],
  expatQuestions: [
    {
      q: "Are Dutch colleagues really that direct?",
      a: "Many teams favour straightforward communication about tasks and quality. It is often practical rather than personal — but styles vary by person and company.",
    },
    {
      q: "Can I succeed in English only?",
      a: "Yes in many international companies and expat-heavy teams, especially in larger cities. Client-facing or public-sector roles may require Dutch over time.",
    },
    {
      q: "How flat are Dutch hierarchies?",
      a: "Day-to-day communication may feel accessible, but formal authority and titles still exist. Confirm who makes final decisions on your projects.",
    },
    {
      q: "What should I do in my first month?",
      a: "Observe rituals, ask about feedback preferences, participate in meetings with prepared points and pair culture orientation with contract and employee-rights guides.",
    },
  ],
  adaptationTimeline: [
    { phase: "Week 1 — observe", detail: "Watch meeting style, Slack norms, who speaks first and how disagreements are handled." },
    { phase: "Week 2 — align", detail: "Ask your manager about core hours, hybrid rhythm, feedback cadence and escalation paths." },
    { phase: "Week 3 — contribute", detail: "Prepare one structured talking point for a recurring meeting; confirm owners after decisions." },
    { phase: "Week 4 — refine", detail: "Request brief feedback on communication style; adjust written updates and meeting participation." },
  ] satisfies TimelineStep[],
  visualTextDetails: {
    intro: {
      title: "What this guide covers",
      items: [
        "Communication style and direct feedback orientation",
        "Hierarchy, meetings and decision-making patterns",
        "Work-life balance and hybrid work expectations",
        "Industry differences and common expat friction points",
        "Practical checklists — not HR policy or legal advice",
      ],
    },
    snapshot: {
      title: "How to use the snapshot",
      items: [
        "Compare signals to your team — not every employer matches every pattern",
        "Use week-one to week-four milestones as a first-month checklist",
        "Pair culture notes with employment contract and rights guides",
        "Ask colleagues when a scenario feels unclear",
      ],
    },
    businessCulture: {
      title: "What to observe in week one",
      items: [
        "How blockers and risks are raised in stand-ups or team channels",
        "Whether decisions are documented the same day or left verbal",
        "How cross-team requests are prioritised and tracked",
        "Whether managers expect you to drive tasks or wait for tasks",
      ],
    },
    directCommunication: {
      title: "When directness lands badly",
      items: [
        "Ask which part of the deliverable needs to change — not whether you are valued",
        "Mirror short updates: fact, impact, next step, owner",
        "Treat debate in meetings as normal — verify data, then move on",
        "Request one example if feedback feels personal",
      ],
    },
    hierarchy: {
      title: "Flat vs authority — what to clarify",
      items: [
        "Who makes the final call on your project or sprint scope",
        "Whether open Slack with leadership is encouraged or exception-only",
        "How to escalate respectfully when consensus stalls",
        "When titles matter for client-facing or compliance sign-off",
      ],
    },
    feedback: {
      title: "Make feedback actionable",
      items: [
        "Confirm what changes by when after any review or retro",
        "Separate performance reviews from day-to-day project comments",
        "Give feedback on work product — specific, observable, improvable",
        "Thank colleagues for clarity — then propose your next step",
      ],
    },
    meetings: {
      title: "Meeting habits that help",
      items: [
        "Read the agenda and linked docs before joining",
        "Prepare one structured point — question, proposal or risk",
        "Confirm owners and deadlines before leaving the room",
        "Send a brief recap when you facilitated or own outcomes",
      ],
    },
    workLifeBalance: {
      title: "Balance questions for your manager",
      items: [
        "Contracted hours, core availability and on-call expectations",
        "Vacation booking norms and quiet periods (e.g. August)",
        "Flexible start/end times and parental leave culture on the team",
        "After-hours chat or email — urgent-only or same-day reply",
      ],
    },
    remoteHybrid: {
      title: "Hybrid setup to confirm early",
      items: [
        "Fixed office days vs team choice — and how holidays affect rhythm",
        "Equipment budget: laptop, monitor, chair, internet stipend",
        "Rules for working abroad — tax, permit and security policies",
        "How async updates replace or supplement live meetings",
      ],
    },
    professionalCommunication: {
      title: "Message formats that work",
      items: [
        "Email subject with decision deadline and three bullet options",
        "Chat threads with context link, @owner and clear ask",
        "Weekly manager update: done, next, blocked — five lines max",
        "Same-day chat reply vs focus blocks — ask team preference",
      ],
    },
    punctuality: {
      title: "Reliability signals",
      items: [
        "Join video calls two minutes early with agenda open",
        "Flag deadline risks 24 hours ahead with scope options",
        "Respect lunch blocks and focus time on calendars",
        "Reschedule proactively — do not arrive late without notice",
      ],
    },
    diversity: {
      title: "International team alignment",
      items: [
        "Agree working language and when Dutch is expected with clients",
        "Document feedback and meeting norms for multicultural teams",
        "Plan around Dutch school holidays and public holiday rhythm",
        "English-heavy teams in Randstad differ from regional SMEs",
      ],
    },
    networking: {
      title: "Build trust before asking favours",
      items: [
        "Start with project collaborators and meetup co-attendees",
        "Follow up with one specific note — not generic LinkedIn spam",
        "Share expertise in communities before requesting referrals",
        "Align CV and LinkedIn with Dutch-style clarity and dates",
      ],
    },
    workplaceSituations: {
      title: "Pattern → response",
      items: [
        "Direct feedback in week two → ask for example and next step",
        "Opinion request in group → one concise view with trade-offs",
        "Long debate → contribute early; confirm decision owner at end",
        "Flexible Friday → confirm team norm before leaving early",
      ],
    },
    industryDifferences: {
      title: "Sector pace and formality",
      items: [
        "Tech: async docs and demo-driven decisions — move fast with written trail",
        "Finance and government: approval chains and formal process maps",
        "Healthcare: clinical hierarchy overrides flat chat norms where safety applies",
        "Retail and logistics: reliability and handovers beat long consensus meetings",
      ],
    },
    expatChallenges: {
      title: "When friction appears",
      items: [
        "Misread directness — ask for a concrete example and requested change",
        "Waiting for instructions — share blockers before being asked",
        "Under-participating — prepare one point per recurring meeting",
        "Assuming hierarchy — confirm who decides while staying respectful",
      ],
    },
    successChecklist: {
      title: "First-month success rhythm",
      items: [
        "Week 1: observe rituals and communication channels",
        "Week 2: align with manager on hours, feedback and escalation",
        "Week 3–4: contribute in meetings and confirm decisions in writing",
        "Month 2+: build relationships through reliable delivery",
      ],
    },
    myths: {
      title: "Replace stereotypes with questions",
      items: [
        "Ask how feedback is usually delivered on this team",
        "Ask who decides and who must be consulted on your work",
        "Ask whether Dutch is required for clients or internal work",
        "Ask about core hours — do not assume national averages",
      ],
    },
    faq: {
      title: "How to use these answers",
      items: [
        "Treat FAQ as orientation — confirm specifics with colleagues",
        "Pair culture questions with contract and rights guides",
        "Revisit after probation when team norms become clearer",
        "Document working agreements when teams are multicultural",
      ],
    },
    officialSources: {
      title: "What official sources cover",
      items: [
        "Employment frameworks and labour-market orientation",
        "Business setup and worker rights overview — not team culture",
        "Day-to-day meeting style still comes from your employer",
        "Use HR and manager for policy; use this guide for adaptation",
      ],
    },
    relatedGuides: {
      title: "Suggested career guide order",
      items: [
        "Finding jobs — search, recruiters and sponsorship context",
        "Employment contracts — types, probation and notice",
        "Employee rights — leave, sick pay and protections",
        "Expat salary and community basics — compensation and life outside work",
      ],
    },
    exploreNext: {
      title: "Pick your next step",
      items: [
        "Still job hunting → finding jobs guide",
        "Reviewing an offer → employment contracts and probation",
        "Starting a role → employee rights and this culture guide",
        "Settling in → community basics beyond the office",
      ],
    },
  },
  intro: {
    heading: "What Is Dutch Workplace Culture Like?",
    paragraphs: [
      "Many Dutch workplaces are often characterized by open communication, relatively flat hierarchies, collaborative decision making, direct feedback and strong work-life balance. These patterns are common enough that newcomers notice them quickly — but they are not universal rules.",
      "Culture varies significantly by industry, company size, leadership style and international exposure. A scale-up product team in Amsterdam may feel very different from a regional government office or a family-owned logistics firm.",
      "This guide helps expats and international professionals adapt faster with practical expectations and balanced examples. It is orientation only — not HR policy, legal advice or a guarantee about any specific employer.",
    ],
    summaryPoints: [
      "Open communication is common in many teams — questions and clarity are often welcomed.",
      "Hierarchy may exist on paper, but managers are frequently accessible and input from colleagues is valued.",
      "Meetings can involve broad discussion before decisions — preparation and participation matter.",
      "Work-life balance is often respected, though intensity still varies by role and sector.",
    ],
  },
  snapshotMilestones: [
    { label: "Week 1", value: "Observe", note: "Meetings, Slack, feedback tone" },
    { label: "Week 2", value: "Align", note: "Core hours + escalation" },
    { label: "Week 3", value: "Contribute", note: "One prepared talking point" },
    { label: "Week 4", value: "Refine", note: "Ask for communication feedback" },
  ],
  snapshotCards: [
    { title: "Direct communication", body: "Feedback and opinions are often shared plainly — usually aimed at the task, not the person." },
    { title: "Work-life balance", body: "Protected evenings, vacation culture and flexible arrangements appear in many employers." },
    { title: "Flat hierarchies", body: "Titles exist, but many teams encourage questions and respectful challenge." },
    { title: "Collaborative decisions", body: "Consensus and discussion may precede final calls — especially in cross-functional teams." },
    { title: "Feedback culture", body: "Performance and project feedback may arrive earlier and more directly than some expats expect." },
    { title: "Punctuality", body: "On-time meetings and reliable deadlines signal professionalism in most environments." },
  ] satisfies CultureCard[],
  snapshotUseTips: [
    "Compare each signal to your team — scale-ups, government and SMEs differ sharply.",
    "Run the week-one to week-four milestones during your first month.",
    "When feedback feels blunt, ask for a concrete example and next step.",
    "Confirm hybrid days, core hours and after-hours expectations in writing.",
    "Pair this guide with employment contracts and employee-rights orientation.",
  ],
  businessCultureHeading: "How Dutch Companies Operate",
  businessCultureParagraphs: [
    "Many Dutch organizations value transparency, efficiency, practicality, collaboration and personal responsibility. Teams often prefer clear priorities, documented decisions and colleagues who follow through without micromanagement.",
    "International companies with Dutch offices may blend global corporate culture with local norms — English may be the working language while meeting style still reflects Dutch directness and planning habits.",
    "Observing how your team handles disagreements, deadlines and cross-department requests usually tells you more than any general article — including this one.",
  ],
  businessCulturePoints: [
    "Transparency: project status and blockers are often discussed openly in stand-ups or team channels.",
    "Efficiency: long meetings without agendas frustrate many Dutch teams — send a prep note when you can.",
    "Practicality: proposals that include cost, timeline and owner tend to gain traction faster.",
    "Personal responsibility: managers may expect you to flag risks early rather than wait for instructions.",
  ],
  businessCultureExamples: [
    { title: "Scale-up product team", body: "Engineer raises a launch risk in Slack before stand-up; manager thanks them and reschedules — directness seen as helpful." },
    { title: "Corporate HQ", body: "Quarterly plan reviewed in a structured workshop; notes circulated same day — written follow-up reinforces verbal agreements." },
    { title: "Regional SME", body: "Small team shares customer feedback weekly; owner asks each person for one improvement idea — flat input despite formal title." },
  ] satisfies CultureCard[],
  businessCultureAskManager: [
    "How does the team share priorities and document decisions?",
    "When should I escalate blockers — immediately or at stand-up?",
    "What does good ownership look like in the first 90 days?",
    "Which channels are for urgent vs non-urgent questions?",
  ],
  directCommunicationHeading: "The Famous Dutch Directness",
  directCommunicationParagraphs: [
    "Many newcomers notice that workplace communication is often straightforward, honest and efficient. Colleagues may say what they mean with fewer softening phrases than in some other cultures.",
    "Directness can speed up projects and reduce ambiguity — but it can also feel blunt if you are used to indirect feedback. Context, tone and relationship still matter.",
  ],
  directCommunicationBenefits: [
    "Faster clarity on priorities and quality standards.",
    "Less time decoding implied criticism or praise.",
    "Easier to ask follow-up questions without losing face.",
  ],
  directCommunicationMisunderstandings: [
    "Plain language mistaken for personal hostility.",
    "Silence interpreted as agreement when colleagues are still thinking.",
    "Email brevity read as rudeness rather than efficiency.",
  ],
  directCommunicationTips: [
    "Separate content from tone — ask what specific change is requested.",
    "Mirror clarity: short updates with facts, impact and next step.",
    "If feedback stings, request an example and a suggested improvement path.",
  ],
  directCommunicationExamples: [
    { situation: "Design review", whatHappens: "Colleague says the dashboard layout is confusing — not your effort.", howToAdapt: "Ask which user flow fails and propose one revision." },
    { situation: "Project delay", whatHappens: "Manager states the deadline will be missed unless scope drops.", howToAdapt: "Reply with two scope options and trade-offs — not apologies alone." },
    { situation: "Meeting comment", whatHappens: "Peer interrupts to disagree with a data point.", howToAdapt: "Verify the figure, thank them if correct, move on — debate is often normal." },
  ] satisfies SituationCard[],
  hierarchyHeading: "Flat Hierarchies",
  hierarchyParagraphs: [
    "Many organizations encourage employees to ask questions, challenge ideas respectfully and contribute opinions regardless of seniority. Accessibility of managers varies, but open-door cultures are common in knowledge-work environments.",
    "Decision making may still rest with a director or product owner — flatness describes communication more than absence of authority.",
  ],
  hierarchyPoints: [
    "Management accessibility: short 1:1s and open Slack channels are common in tech and corporate roles.",
    "Decision making: input from many stakeholders, final call often documented.",
    "Ownership: individual contributors expected to drive tasks end-to-end once aligned.",
  ],
  hierarchyScenarios: [
    { profile: "Junior analyst — Big Four", scenario: "Asked to present findings to partner in client meeting", whatToCheck: "Prepare concise slides; expect direct questions — participation is a growth signal." },
    { profile: "Senior engineer — scale-up", scenario: "Disagrees with CTO architecture choice in architecture review", whatToCheck: "Bring data and alternatives; respectful challenge is often welcome if evidence-based." },
    { profile: "Project coordinator — government", scenario: "Must route decision through formal committee despite flat team chat", whatToCheck: "Follow process map; informal Slack agreement still needs written approval trail." },
  ],
  hierarchyAskManager: [
    "Who makes the final decision on my project scope and deadlines?",
    "When is it appropriate to skip levels or message leadership directly?",
    "How are disagreements escalated when the team cannot reach consensus?",
  ],
  feedbackHeading: "Giving and Receiving Feedback",
  feedbackParagraphs: [
    "Feedback is often viewed as normal, constructive and part of improvement — not as an exceptional event. You may receive project comments in meetings, async docs or short 1:1s.",
    "Receiving feedback positively does not mean agreeing silently — ask clarifying questions and confirm next steps.",
  ],
  feedbackExamples: [
    { title: "Performance review", body: "Annual review lists strengths and two development areas with measurable goals — often documented in HR system." },
    { title: "Project retro", body: "Team discusses what worked after a release; action items assigned openly." },
    { title: "Peer discussion", body: "Colleague suggests tighter slide titles before client demo — treat as collaboration." },
  ] satisfies CultureCard[],
  feedbackTips: [
    "Thank colleagues for specific feedback — then confirm what you will change.",
    "Give feedback on work product, not personality.",
    "If feedback feels unclear, ask for one concrete example.",
  ],
  feedbackPhrases: [
    { situation: "After blunt design comment", whatHappens: "Colleague says the layout is confusing — not your effort.", howToAdapt: "Ask which user flow fails; propose one revision by agreed date." },
    { situation: "After retro action item", whatHappens: "Team assigns you an improvement task in open meeting.", howToAdapt: "Confirm owner and deadline: \"I'll own item 2 by Friday — correct priority?\"" },
    { situation: "Giving peer feedback", whatHappens: "You notice a deliverable is hard to use before client demo.", howToAdapt: "Comment on the work: \"Table needs column headers — can we add before Thursday?\"" },
  ] satisfies SituationCard[],
  meetingsHeading: "How Meetings Typically Work",
  meetingsParagraphs: [
    "Meetings often rely on agendas, preparation and active participation. Broad discussion before consensus is common — especially when multiple departments are involved.",
    "Decisions may be deferred until everyone has spoken; written summaries help lock outcomes.",
  ],
  meetingsPoints: [
    "Preparation: read materials and prepare one question or proposal.",
    "Agendas: missing agendas frustrate many teams — offer to draft one if absent.",
    "Participation: silence can be read as lack of engagement.",
    "Consensus: aim for alignment; escalate only when trade-offs are documented.",
  ],
  meetingsChecklist: [
    "Read the agenda and linked docs before joining.",
    "Arrive on time — join video calls two minutes early.",
    "Contribute at least one constructive point.",
    "Confirm action items and owners before leaving.",
    "Send a brief recap if you owned the meeting.",
  ],
  meetingsByType: [
    { type: "Daily stand-up", purpose: "Blockers, priorities, quick sync", expatTip: "Keep updates under 60 seconds; flag risks early." },
    { type: "Planning / refinement", purpose: "Scope, estimates, ownership", expatTip: "Bring written options if scope is contested." },
    { type: "Decision workshop", purpose: "Cross-team alignment", expatTip: "Prepare one trade-off slide; confirm owner at end." },
    { type: "1:1 with manager", purpose: "Feedback, career, escalation", expatTip: "Bring your done/next/blocked list every time." },
  ],
  workLifeBalanceHeading: "Work-Life Balance",
  workLifeBalanceParagraphs: [
    "Working hours, flexible schedules, family time, vacation culture and hybrid arrangements are frequently discussed topics in Dutch employment. Many employees value protected evenings and full vacation weeks.",
    "Demanding roles still exist — especially in consulting, startups or client-facing jobs — so read your contract and team norms, not only national stereotypes.",
  ],
  workLifeBalancePoints: [
    "Standard full-time often ranges around 36–40 hours — confirm your contract.",
    "Vacation days and vakantiegeld are standard topics — see employee benefits guides.",
    "Parents may use flexible start times — policies vary by employer.",
    "August and holiday periods can slow external responses — plan accordingly.",
  ],
  workLifeBalanceExamples: [
    { title: "Core hours team", body: "Team aligns on 9–17 availability; Slack quiet after 18:00 except on-call rotation." },
    { title: "Flexible parents", body: "Colleagues shift start times for school runs — still hit sprint commitments and meeting blocks." },
    { title: "August slowdown", body: "External vendors and some internal approvers respond slowly — plan launches before or after summer." },
  ] satisfies CultureCard[],
  workLifeBalanceChecklist: [
    "Read contracted hours and overtime rules in your employment agreement.",
    "Ask how vacation is booked during peak periods and team handovers.",
    "Confirm after-hours chat and email expectations with your manager.",
    "Note Dutch public holidays and school vacation weeks affecting clients.",
    "Clarify part-time or compressed hours if you need flexibility.",
  ],
  workLifeBalanceAskManager: [
    "What are core hours and when is same-day reply expected?",
    "How does the team handle August, Christmas and holiday coverage?",
    "What is normal for evening or weekend messages on this team?",
  ],
  remoteHybridHeading: "Modern Dutch Workplaces",
  remoteHybridParagraphs: [
    "Remote work, hybrid schedules, home office setups and digital collaboration tools expanded rapidly in many Dutch employers. Policies range from office-first to remote-friendly.",
    "Confirm equipment budgets, office-day expectations and rules about working abroad — tax and permit issues may apply for cross-border remote work.",
  ],
  remoteHybridPoints: [
    "Hybrid: common pattern of 2–3 office days in corporate and tech roles.",
    "Home office: employers may provide laptop; chair or desk stipends vary.",
    "Digital collaboration: Teams, Slack, Google Workspace widely used.",
    "Async updates: written status posts complement live meetings.",
  ],
  remoteHybridExamples: [
    { title: "Tue–Thu office", body: "Team meets in office mid-week; Mon/Fri home for focus work and fewer commutes." },
    { title: "Equipment stipend", body: "Employer provides laptop; €300 one-off for desk chair — confirm in onboarding pack." },
    { title: "Abroad work week", body: "HR requires tax check before working from home country — not automatic even if remote-friendly." },
  ] satisfies CultureCard[],
  remoteHybridChecklist: [
    "Confirm fixed office days vs flexible choice with your team.",
    "Ask about monitor, chair, internet and phone stipends.",
    "Get written policy on working from outside the Netherlands.",
    "Agree how async updates replace stand-ups when people are remote.",
    "Test video setup and calendar time zones for international colleagues.",
  ],
  remoteHybridPolicyRows: [
    { topic: "Office days", typical: "2–3 days/week in many corporates", ask: "Which days are mandatory vs team choice?" },
    { topic: "Equipment", typical: "Laptop standard; extras vary", ask: "Is there a home-office budget or approval process?" },
    { topic: "Working abroad", typical: "Often restricted", ask: "How many days per year and which countries are allowed?" },
    { topic: "Core availability", typical: "Overlap hours for meetings", ask: "Which hours must I be online regardless of location?" },
  ],
  professionalCommunicationHeading: "Email, Chat and Communication Expectations",
  professionalCommunicationParagraphs: [
    "Email and chat tools carry most day-to-day coordination. Many teams prefer short, structured messages with clear asks and deadlines.",
    "Responsiveness expectations differ — some teams expect same-day chat replies; others protect focus blocks.",
  ],
  professionalCommunicationExamples: [
    { title: "Email", body: "Subject: Q3 forecast — decision needed by Thursday. Three bullet options with recommendation." },
    { title: "Teams/Slack", body: "Thread with context link, @mention owner, emoji ack for non-urgent items." },
    { title: "Manager update", body: "Weekly five-line status: done, next, blocked — no lengthy essays required." },
  ] satisfies CultureCard[],
  professionalCommunicationChecklist: [
    "Lead with the ask or decision needed — not background paragraphs.",
    "Use subject lines with deadline and topic for email.",
    "Thread related chat messages; avoid duplicate DMs.",
    "Confirm verbal agreements in writing after meetings.",
    "Match response speed to team norms — ask if unclear.",
  ],
  professionalCommunicationTemplates: [
    {
      channel: "Email",
      whenToUse: "Decision or approval needed",
      example: "Subject: Q3 forecast — decision by Thursday. Three bullet options with recommendation.",
    },
    {
      channel: "Teams / Slack",
      whenToUse: "Quick coordination or blocker",
      example: "Thread with context link, @owner, clear ask and emoji ack for non-urgent items.",
    },
    {
      channel: "Manager update",
      whenToUse: "Weekly or sprint status",
      example: "Done / next / blocked — five lines max, no lengthy background essays.",
    },
    {
      channel: "Escalation",
      whenToUse: "Deadline or scope at risk",
      example: "Flag 24h+ ahead with two scope options, impact and recommended path.",
    },
  ],
  punctualityHeading: "Time and Commitments",
  punctualityParagraphs: [
    "Punctuality for meetings, reliable deadlines and clear scheduling are professional expectations in most Dutch workplaces. Being late without notice can erode trust quickly.",
    "If delays happen, communicate early with a revised time and impact assessment.",
  ],
  punctualityChecklist: [
    "Join meetings on time — video or in person.",
    "Flag deadline risks at least 24 hours ahead when possible.",
    "Use calendar invites with agenda links.",
    "Respect colleagues' focus time and lunch breaks.",
  ],
  punctualityScenarios: [
    { situation: "Running 5 minutes late", whatHappens: "Colleagues start without you; trust dips if repeated.", howToAdapt: "Message in chat immediately with ETA; join muted and catch up async." },
    { situation: "Deadline at risk", whatHappens: "Manager expects early warning with scope options.", howToAdapt: "Flag 24h+ ahead with two trade-off paths — not last-minute surprise." },
    { situation: "Calendar invite without agenda", whatHappens: "Some teams decline or reschedule.", howToAdapt: "Offer a three-bullet agenda when sending or accepting invites." },
  ] satisfies SituationCard[],
  diversityHeading: "Working in International Environments",
  diversityParagraphs: [
    "Global companies, English-speaking workplaces, multicultural teams and cross-cultural collaboration are common — especially in Randstad cities and international sectors.",
    "Working in English is normal in many expat-heavy teams; learning Dutch still helps for broader integration and some client-facing roles.",
  ],
  diversityPoints: [
    "English often serves as working language in tech, finance and corporate HQs.",
    "Multicultural teams require explicit alignment on feedback and meeting norms.",
    "Public holidays and school calendars still follow Dutch rhythm.",
    "Cross-cultural misunderstandings reduce when teams document working agreements.",
  ],
  diversityCityCards: [
    { title: "Amsterdam — tech & startups", body: "English common; diverse teams; fast pace and flat stand-ups typical in many product companies." },
    { title: "Rotterdam — corporate & port", body: "International HQs and logistics; mix of Dutch and English; more formal client communication in some sectors." },
    { title: "Eindhoven — engineering", body: "High-tech and manufacturing; English in R&D teams; practical, data-driven meeting culture." },
    { title: "The Hague — government & NGOs", body: "More formal process; Dutch often important for public-facing roles; longer decision cycles." },
  ] satisfies CultureCard[],
  networkingHeading: "Building Professional Relationships",
  networkingParagraphs: [
    "Professional relationships grow through meetups, industry events, conferences, LinkedIn and sector communities — not only formal networking drinks.",
    "Many expats build credibility by sharing expertise in communities and collaborating on visible projects first.",
  ],
  networkingTips: [
    "Attend one industry meetup per month in your city.",
    "Follow up with one concrete note after events — not generic connection spam.",
    "Offer help on small tasks before asking for referrals.",
    "Keep LinkedIn profile aligned with Dutch-style CV conventions.",
  ],
  networkingRoutes: [
    { route: "Meetup or industry event", example: "Amsterdam Product Tank or sector-specific NL meetup", firstStep: "Attend one session; ask one thoughtful question." },
    { route: "Project collaboration", example: "Cross-team initiative or open-source contribution", firstStep: "Deliver reliably; mention interest in similar work." },
    { route: "LinkedIn follow-up", example: "Speaker or hiring manager from conference", firstStep: "Reference one talk point; suggest a 15-minute coffee chat." },
    { route: "Professional association", example: "Sector body or expat professional network", firstStep: "Join mailing list; volunteer for one small committee task." },
  ],
  workplaceSituationsHeading: "What New Expats Often Experience",
  workplaceSituationsCards: [
    { title: "Receiving direct feedback", body: "Project comment feels blunt in week two — usually about deliverable quality, not personal rejection." },
    { title: "Being asked for opinions", body: "Manager solicits your view in a group — participation signals engagement, not risk." },
    { title: "Participating in discussions", body: "Meetings run long with debate — prepare one structured point rather than waiting to be called on." },
    { title: "Flat hierarchy surprises", body: "CEO joins stand-up and asks juniors for input — respond with concise facts." },
    { title: "Flexible arrangements", body: "Team leaves early on Friday after delivering sprint — confirm norms rather than copying silently." },
    { title: "Independent decisions", body: "Expected to choose vendor after brief alignment — document rationale and share." },
  ] satisfies CultureCard[],
  workplaceSituationRows: [
    {
      situation: "Receiving direct feedback",
      whatHappens: "Plain comment on your deliverable in week two — usually about the task, not personal rejection.",
      howToAdapt: "Ask which part needs to change; propose one revision by an agreed date.",
    },
    {
      situation: "Being asked for opinions",
      whatHappens: "Manager or lead asks your view in a group while others are listening.",
      howToAdapt: "Offer one concise view with trade-offs — silence can read as disengagement.",
    },
    {
      situation: "Long meeting debate",
      whatHappens: "Discussion runs past the scheduled end while options are still weighed.",
      howToAdapt: "Contribute one structured point early; confirm the decision owner before leaving.",
    },
    {
      situation: "CEO in stand-up",
      whatHappens: "Senior leader joins daily sync and asks junior colleagues directly.",
      howToAdapt: "Answer with concise facts — participation signals engagement, not overstepping.",
    },
    {
      situation: "Flexible Friday",
      whatHappens: "Colleagues leave earlier after sprint delivery while you are unsure of the norm.",
      howToAdapt: "Confirm team rhythm with your manager before copying the pattern.",
    },
    {
      situation: "Independent vendor choice",
      whatHappens: "Expected to select a vendor after brief alignment, not step-by-step instructions.",
      howToAdapt: "Document rationale, cost and timeline; share the decision in writing with your lead.",
    },
  ] satisfies SituationCard[],
  industryDifferencesHeading: "Culture Varies by Industry",
  industryCards: [
    { industry: "Technology", cultureNote: "Fast iteration, async docs, flat teams common.", expatTip: "Default to written proposals and demo-driven decisions." },
    { industry: "Finance", cultureNote: "More formal process, compliance gates, structured meetings.", expatTip: "Prepare data-heavy materials and respect approval chains." },
    { industry: "Retail & logistics", cultureNote: "Operational pace, shift work, practical communication.", expatTip: "Prioritise reliability and clear handovers." },
    { industry: "Healthcare", cultureNote: "Protocol-driven, multidisciplinary coordination.", expatTip: "Respect clinical hierarchy where patient safety is involved." },
    { industry: "Education", cultureNote: "Consensus culture, academic calendars, committee work.", expatTip: "Allow longer decision cycles — build alliances early." },
    { industry: "Government", cultureNote: "Formal procedures, documentation, stakeholder alignment.", expatTip: "Master process maps and official communication channels." },
  ] satisfies IndustryCard[],
  industryCompareTips: [
    "Before joining, ask two people in that sector about meeting length and formality.",
    "Carry written summaries into finance and government meetings.",
    "In tech, default to async doc + demo; in ops, default to reliability metrics.",
    "Switching sectors? Re-learn escalation paths — do not assume startup pace.",
  ],
  expatChallengesHeading: "Common Workplace Culture Challenges",
  expatChallengeCards: [
    { title: "Misinterpreting direct feedback", body: "Plain language feels personal — ask for examples and intended outcome." },
    { title: "Waiting for instructions", body: "Managers expect proactive updates — share blockers before being asked." },
    { title: "Avoiding disagreement", body: "Respectful dissent can be valued — bring alternatives, not silence." },
    { title: "Under-participating in meetings", body: "Prepare one talking point; contribute early to show engagement." },
    { title: "Overestimating hierarchy", body: "Skip excessive formalities with accessible managers — stay respectful." },
    { title: "Communication misunderstandings", body: "Confirm decisions in writing after verbal meetings." },
    { title: "Networking challenges", body: "Start with project collaborators before cold outreach." },
    { title: "Work-life balance adjustment", body: "Clarify core hours — some teams still expect evening availability." },
  ] satisfies CultureCard[],
  challengeFixRows: [
    { mistake: "Misinterpreting direct feedback", fix: "Ask for a concrete example, the requested change and whether timing is urgent." },
    { mistake: "Waiting for instructions", fix: "Send a short status update with blockers before your manager asks." },
    { mistake: "Avoiding disagreement", fix: "Offer one alternative with trade-offs instead of silent agreement." },
    { mistake: "Under-participating in meetings", fix: "Prepare one structured point before every recurring meeting." },
    { mistake: "Overestimating hierarchy", fix: "Ask accessible managers direct questions — stay respectful of final decision owners." },
    { mistake: "Communication misunderstandings", fix: "Confirm verbal decisions in a brief email or Slack recap." },
    { mistake: "Networking challenges", fix: "Build credibility through project collaboration before cold LinkedIn outreach." },
    { mistake: "Work-life balance adjustment", fix: "Confirm core hours, on-call expectations and vacation norms in writing." },
  ] satisfies MistakeFixRow[],
  successChecklistHeading: "How to Succeed in a Dutch Workplace",
  successChecklist: [
    "Communicate openly — share status, risks and questions early.",
    "Ask questions when priorities or feedback are unclear.",
    "Participate in discussions with prepared, concise points.",
    "Accept feedback positively and confirm next steps.",
    "Respect deadlines — flag delays proactively.",
    "Be punctual for meetings and video calls.",
    "Take ownership of tasks after alignment.",
    "Build relationships through reliable collaboration.",
  ],
  mythsHeading: "Common Myths",
  myths: [
    { myth: "Dutch people are rude", reality: "Directness is often informational. Tone and relationship context still matter — many colleagues are warm outside formal feedback." },
    { myth: "Managers make all decisions alone", reality: "Input from teams is common; final authority may still sit with a leader or committee." },
    { myth: "You must speak fluent Dutch", reality: "Many international teams operate in English — Dutch helps for integration and some client roles." },
    { myth: "Everyone works part-time", reality: "Part-time is common and legally supported — full-time roles remain standard in many sectors." },
    { myth: "All companies are the same", reality: "Scale-ups, multinationals, SMEs and government bodies differ sharply." },
    { myth: "Feedback means criticism", reality: "Feedback often targets improvement and clarity — ask how to action it." },
  ] satisfies MythCard[],
  mythsVerificationTips: [
    "Replace \"Dutch people are rude\" with \"How does this team give feedback?\"",
    "Replace \"No hierarchy\" with \"Who signs off on my deliverables?\"",
    "Replace \"English is enough forever\" with \"When is Dutch needed for clients?\"",
    "Replace \"Everyone leaves at 17:00\" with \"What are core hours here?\"",
  ],
  faq: [
    {
      q: "Are Dutch people really direct?",
      a: "Many workplaces favour straightforward communication, especially about tasks and quality. It is often practical rather than personal — but styles vary by person and company.",
    },
    {
      q: "How hierarchical are Dutch companies?",
      a: "Many knowledge-work teams feel relatively flat in day-to-day communication, though formal authority and titles still exist. Regulated or traditional sectors may feel more structured.",
    },
    {
      q: "Is work-life balance important?",
      a: "It is a common cultural value and appears in many employment policies. Demanding roles and global clients can still create pressure — check your team norms.",
    },
    {
      q: "How do meetings work?",
      a: "Agendas, preparation and discussion are typical. Decisions may follow consensus-building; written summaries help confirm outcomes.",
    },
    {
      q: "Can I work in English?",
      a: "Yes in many international companies and expat-heavy teams, especially in larger cities. Client-facing or public-sector roles may require Dutch over time.",
    },
    {
      q: "How does feedback culture work?",
      a: "Feedback may arrive frequently and directly. Treat it as normal dialogue — ask for examples and agreed next steps.",
    },
    {
      q: "What should I expect from managers?",
      a: "Many managers expect ownership, early escalation of blockers and concise updates. Accessibility varies — schedule regular 1:1s to align expectations.",
    },
    {
      q: "How can I adapt faster?",
      a: "Observe team rituals, ask about communication preferences, participate in meetings and pair this guide with contracts and employee-rights orientation.",
    },
  ],
  faqNextSteps: [
    "Treat FAQ answers as orientation — confirm specifics with colleagues.",
    "Pair culture questions with employment contract and employee-rights guides.",
    "Revisit after probation when team norms become clearer.",
    "Document working agreements when teams are multicultural.",
  ],
  officialSources: [
    {
      name: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official information on working, living and employment frameworks in the Netherlands.",
    },
    {
      name: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Practical business and employment orientation for companies and workers.",
    },
    {
      name: "UWV",
      href: "https://www.uwv.nl/",
      description: "Employee and labour-market information — useful alongside HR and contract guides.",
    },
  ] satisfies OfficialSource[],
  officialSourcesDisclaimer:
    "Workplace culture varies significantly between companies, industries and teams. Use official sources for employment frameworks — observe your employer for day-to-day norms.",
  officialSourcesVerifyList: [
    "Employment rights and working conditions — pair with employee-rights guide",
    "Business registration and employer obligations — not your team meeting style",
    "Labour-market and benefits orientation — confirm specifics in your contract",
    "HR policy beats general articles for leave, sick pay and probation",
  ],
  relatedGuidesOrder: [
    { phase: "Before you apply", detail: "Finding jobs — market, recruiters and visa sponsorship context." },
    { phase: "Offer in hand", detail: "Employment contracts and probation — review before signing." },
    { phase: "First weeks", detail: "This culture guide plus employee rights for leave and protections." },
    { phase: "Settling in", detail: "Expat salary guide and community basics for life beyond the office." },
  ] satisfies TimelineStep[],
  relatedGuides: [
    { label: "Dutch directness at work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, status: "live", description: "Deep dive into direct feedback, meeting debate and expat adaptation strategies." },
    { label: "Finding jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search, recruiters and visa sponsorship context." },
    { label: "Employment contracts", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Contract types, probation and notice periods." },
    { label: "Probation period", href: PROBATION_PERIOD_NETHERLANDS_PATH, status: "live", description: "Proeftijd expectations and onboarding culture." },
    { label: "Employee rights", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, status: "live", description: "Leave, sick pay and workplace protections." },
    { label: "Expat salary guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations, tax context and compensation." },
    { label: "Community basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, status: "live", description: "Social integration beyond the office." },
  ] satisfies WorkplaceCultureLink[],
  relatedGuidesReadingOrder: [
    "Finding jobs — search, recruiters and visa sponsorship context",
    "Employment contracts — types, probation and notice periods",
    "Employee rights — leave, sick pay and workplace protections",
    "Expat salary — compensation, tax context and negotiation",
    "Community basics — integration beyond the office",
  ],
  exploreNextTips: [
    "Still job hunting → finding jobs guide",
    "Reviewing an offer → employment contracts and probation",
    "Starting a role → employee rights and this culture guide",
    "Settling in → community basics beyond the office",
  ],
  exploreNextCards: [
    { label: "Dutch directness at work", href: DUTCH_DIRECTNESS_AT_WORK_PATH, description: "Deep dive into direct communication and feedback culture." },
    { label: "Finding jobs", href: FINDING_JOBS_NETHERLANDS_PATH, description: "Search strategy and market orientation." },
    { label: "Employment contracts", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, description: "Review offers and contract clauses." },
    { label: "Employee rights", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, description: "Protections and leave frameworks." },
    { label: "Expat salary guide", href: EXPAT_SALARY_NETHERLANDS_PATH, description: "Compensation and tax context." },
    { label: "Community basics", href: COMMUNITY_BASICS_NETHERLANDS_PATH, description: "Life outside work in the Netherlands." },
  ] satisfies WorkplaceCultureLink[],
} as const;

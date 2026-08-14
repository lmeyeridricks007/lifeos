export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;

export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const EMPLOYEE_RIGHTS_NETHERLANDS_PATH = "/netherlands/jobs/employee-rights-netherlands/" as const;
export const COMMUNITY_BASICS_NETHERLANDS_PATH = "/netherlands/life/community-basics-netherlands/" as const;
export const LANGUAGE_LEARNING_PATH = "/netherlands/language-learning/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;

export type DirectnessLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type DirectnessCard = { title: string; body: string };

export type ScenarioRow = {
  situation: string;
  expatMayThink: string;
  dutchColleaguesOftenMean: string;
};

export type CultureReactionRow = {
  region: string;
  commonReaction: string;
  adaptationTip: string;
};

export type SuccessStory = {
  profile: string;
  challenge: string;
  outcome: string;
};

export type MythCard = { myth: string; reality: string };

export type ComparisonRow = {
  directCommunication: string;
  personalAttack: string;
};

export type TimelineStep = {
  phase: string;
  detail: string;
};

export type MistakeFixRow = {
  mistake: string;
  fix: string;
};

export type FeedbackPhraseRow = {
  situation: string;
  whatHappens: string;
  howToAdapt: string;
};

export type MeetingTypeRow = {
  type: string;
  purpose: string;
  expatTip: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v2";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-dutch-directness-at-work-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchDirectnessAtWorkPage = {
  slug: "dutch-directness-at-work",
  path: DUTCH_DIRECTNESS_AT_WORK_PATH,
  publish: true,
  publishDate: "2026-11-18",
  seo: {
    title: "Dutch Directness at Work | Understanding Dutch Workplace Communication",
    description:
      "Learn why Dutch workplace communication is often described as direct, how feedback works and how expats can successfully adapt to Dutch professional culture.",
    keywords: [
      "dutch directness",
      "dutch direct communication",
      "dutch workplace communication",
      "dutch feedback culture",
      "dutch communication style",
      "working with dutch colleagues",
      "dutch business culture",
      "dutch workplace culture",
      "communication in netherlands",
      "dutch work environment",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Workplace culture",
    pageTitle: "Dutch Directness at Work",
    subtitle:
      "Learn how direct communication works in Dutch workplaces, why it is valued and how to navigate feedback, meetings and professional discussions with confidence.",
    primaryCta: { label: "Understand Dutch Communication", href: "#intro" },
    secondaryCta: { label: "Explore Workplace Culture", href: DUTCH_WORKPLACE_CULTURE_PATH },
    chips: ["Honest feedback", "Clear expectations", "Open debate", "Expat adaptation"],
    disclaimer:
      "Orientation only — communication styles vary by person, team and sector. Confirm norms with colleagues rather than assuming one national style fits everyone.",
    image: {
      src: `/images/heroes/netherlands-dutch-directness-at-work-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of constructive direct feedback in a Dutch workplace — a manager and expat colleague review a project deck at a canal-side Amsterdam office while teammates debate ideas at a whiteboard behind glass, calm professional body language, warm natural light.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium record-file builder with four directness pillars and first-week action checklist — observe tone, ask about feedback, request examples, confirm decisions in writing.",
      "Run the first-week checklist rail before assuming feedback is personal."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six signal cards — ideas not people, efficiency-first, common feedback, questions encouraged, flat hierarchy, debate normal — each with expat verification tip.",
      "Compare signals to your team; these are orientation hints not universal rules."
    ),
    culturalContext: visual(
      "cultural-context",
      "Premium timeline from Dutch trading pragmatism to modern office — equality, consensus and efficiency nodes explaining why clarity is often seen as respectful.",
      "Directness usually reduces ambiguity — ask how your team expresses it."
    ),
    workplaceExamples: visual(
      "workplace-examples",
      "Premium four-scenario table — manager feedback, colleague challenge, meeting debate, open risk call-out — with expat interpretation vs likely Dutch intent columns.",
      "When surprised, ask: what change is requested and by when?"
    ),
    directnessVsRudeness: visual(
      "directness-vs-rudeness",
      "Premium side-by-side comparison of direct task feedback vs personal attacks with four readable workplace phrase examples and HR escalation rail.",
      "Task critique is normal; insults and repeated targeting are not."
    ),
    feedback: visual(
      "feedback",
      "Premium feedback cycle — performance reviews, project retros, peer and manager 1:1s with two-way flow, example questions and calendar timing hints.",
      "Ask for one example and one requested change after feedback conversations."
    ),
    meetings: visual(
      "meetings",
      "Premium five-step meeting flow — pre-read, punctuality, challenge with data, summarise options, confirm owner — with sample agenda topics.",
      "Prepare one structured point; confirm outcomes in writing after debate."
    ),
    culturalReactions: visual(
      "cultural-reactions",
      "Premium six-region expat reaction panel — North America, UK, Asia, Latin America, Middle East, Africa — with respectful adaptation tips per background.",
      "Your home culture shapes first impressions — use tips to respond, not stereotype."
    ),
    adaptation: visual(
      "adaptation",
      "Premium week-by-week adaptation clipboard — observe, align with manager, contribute in meetings, refine communication with example script prompts.",
      "Adapt clarity and participation — you do not need to copy every tone."
    ),
    benefits: visual(
      "benefits",
      "Premium six advantage cards — clear expectations, faster problem solving, transparency, less politics, open feedback, shared responsibility.",
      "Many expats value directness once norms and benefits are understood."
    ),
    challenges: visual(
      "challenges",
      "Premium six challenge-fix pairs — culture shock, feeling criticised, meeting participation, confidence, email tone, mixed team norms.",
      "Most friction is an adaptation gap — use the fix column weekly."
    ),
    situations: visual(
      "situations",
      "Premium six scenario path — interviews, reviews, meetings, projects, salary talks, conflict resolution — each with one actionable prep tip.",
      "Recognise the pattern so you can prepare before the conversation."
    ),
    expectations: visual(
      "expectations",
      "Premium five professional expectation pillars — ownership, honesty, participation, reliability, constructive feedback — with manager checklist prompt.",
      "Ask which expectations matter most on your specific team."
    ),
    remote: visual(
      "remote",
      "Premium three-channel digital panel — email, Teams and Slack — with readable direct-tone examples and hybrid desk scene.",
      "Written directness can feel sharper — read for task intent first."
    ),
    myths: visual(
      "myths",
      "Premium six myth-vs-reality pairs debunking rudeness, sameness, feedback-as-failure, no-disagreement, no-empathy and must-be-blunt stereotypes.",
      "Replace myths with questions about your employer and team."
    ),
    successStories: visual(
      "success-stories",
      "Premium five expat journey cards — tech, manager, designer, consultant, engineer — with challenge, adaptation step and positive outcome.",
      "Most professionals adjust within a few months with small communication experiments."
    ),
    mistakes: visual(
      "mistakes",
      "Premium eight mistake-fix board — personalising feedback, silence, avoiding disagreement, hostility assumptions, permission-waiting, over-interpreting.",
      "Use as a weekly self-check during your first months."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight orientation answers on why Dutch workplaces feel direct, rudeness, feedback response, company variation and discomfort.",
      "Confirm FAQ takeaways with colleagues — norms vary by sector."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered career route map — workplace culture, finding jobs, employee rights, contracts, community basics, language learning.",
      "Suggested order: culture overview → job search or contracts → rights."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next-step cards — workplace culture, finding jobs, employee rights, community basics, learning Dutch — with when-to-use labels.",
      "Pick the card matching whether you are searching, starting or settling in."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#cultural-context", label: "Context" },
    { href: "#workplace-examples", label: "Examples" },
    { href: "#directness-vs-rudeness", label: "Direct vs rude" },
    { href: "#feedback", label: "Feedback" },
    { href: "#meetings", label: "Meetings" },
    { href: "#cultural-reactions", label: "Expat reactions" },
    { href: "#adaptation", label: "Adapt" },
    { href: "#benefits", label: "Benefits" },
    { href: "#challenges", label: "Challenges" },
    { href: "#situations", label: "Scenarios" },
    { href: "#expectations", label: "Expectations" },
    { href: "#remote", label: "Digital" },
    { href: "#myths", label: "Myths" },
    { href: "#success-stories", label: "Stories" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "What Is Dutch Directness?",
    summary:
      "Many Dutch professionals value honesty, transparency, efficiency and clarity. Feedback is often intended to improve outcomes rather than criticise individuals — which can initially surprise newcomers from more indirect cultures.",
    bullets: [
      "Feedback usually targets the task, idea or process — not your worth as a person.",
      "Questions and challenges in meetings are often encouraged, not disrespectful.",
      "Clarity is frequently seen as respectful because it reduces ambiguity.",
      "Styles still vary by person, team and sector — observe before assuming.",
    ],
    note: "If feedback feels blunt, ask for a concrete example and what success looks like next time.",
  },
  snapshotSignals: [
    { label: "Focus", value: "Ideas", note: "Not personal attacks" },
    { label: "Intent", value: "Efficiency", note: "Save time & rework" },
    { label: "Feedback", value: "Common", note: "Two-way flow" },
    { label: "Debate", value: "Normal", note: "Before decisions" },
  ],
  intro: {
    heading: "Why this guide matters for expats",
    paragraphs: [
      "International professionals often arrive in the Netherlands with strong technical skills but unexpected friction in day-to-day communication. Dutch directness is one of the most discussed cultural differences — and one of the most misunderstood.",
      "This guide explains what direct communication often looks like in Dutch workplaces, why many colleagues value it, how feedback and meetings typically work, and how you can respond professionally without changing your personality.",
      "Pair this deep dive with our broader Dutch workplace culture guide for hierarchy, balance and industry context.",
    ],
    summaryPoints: [
      "Directness is frequently practical — aimed at clarity and better outcomes.",
      "Many teams welcome questions, disagreement and peer feedback.",
      "Misreading tone is a common early expat challenge — context helps.",
      "Adaptation is a skill: observe, ask, participate, refine.",
    ],
  },
  snapshotCards: [
    { title: "Focused on ideas", body: "Comments often address the work product, timeline or approach — not your character." },
    { title: "Efficiency-driven", body: "Plain language can reduce rework, misaligned expectations and long email chains." },
    { title: "Feedback is common", body: "Performance, project and peer feedback may arrive frequently and specifically." },
    { title: "Questions encouraged", body: "Asking why or how is often seen as engagement, not insubordination." },
    { title: "Hierarchy often lighter", body: "Junior colleagues may challenge ideas in meetings — final authority still exists." },
    { title: "Debate is normal", body: "Open discussion before a decision is frequently part of consensus-building." },
  ] satisfies DirectnessCard[],
  snapshotMilestones: [
    { label: "Week 1", value: "Observe", note: "Feedback tone in meetings" },
    { label: "Week 2", value: "Align", note: "Ask manager feedback style" },
    { label: "Week 3", value: "Contribute", note: "One prepared meeting point" },
    { label: "Week 4", value: "Refine", note: "Request communication feedback" },
  ],
  snapshotUseTips: [
    "Compare each signal to your team — scale-ups, government and SMEs differ.",
    "Run the week-one to week-four milestones during your first month.",
    "When feedback feels blunt, ask for a concrete example and next step.",
    "Pair this guide with the broader Dutch workplace culture overview.",
    "Confirm whether directness in writing matches spoken norms on your team.",
  ],
  orientationFlowSteps: [
    "Observe how your team gives feedback and handles disagreement in week one.",
    "Ask your manager how direct communication is expected in meetings and email.",
    "Practice one clarifying question after feedback — confirm the requested change in writing.",
  ],
  expatQuestions: [
    {
      q: "Is Dutch directness the same as being rude?",
      a: "Often not — many colleagues aim feedback at tasks and outcomes. Personal insults or exclusion are different from professional directness.",
    },
    {
      q: "Should I push back in meetings?",
      a: "In many teams, respectful challenge with data is welcome. Confirm whether your manager prefers debate in plenary or in 1:1s first.",
    },
    {
      q: "What if feedback feels too blunt?",
      a: "Ask for one example and what success looks like next time. Many managers adjust once they know your preferred format.",
    },
    {
      q: "How fast can I adapt?",
      a: "Most professionals notice patterns within a few weeks. Small experiments — prepared meeting points, written recaps — beat changing your personality.",
    },
  ],
  adaptationTimeline: [
    { phase: "Week 1 — observe", detail: "Watch how feedback is delivered, who speaks first in meetings and how disagreements close." },
    { phase: "Week 2 — align", detail: "Ask your manager about feedback cadence, escalation and preferred channels for direct questions." },
    { phase: "Week 3 — contribute", detail: "Prepare one structured talking point per recurring meeting; summarise decisions afterward." },
    { phase: "Week 4 — refine", detail: "Request brief feedback on your communication style; adjust email tone and meeting participation." },
  ] satisfies TimelineStep[],
  culturalContextHeading: "Understanding the Cultural Context",
  culturalContextParagraphs: [
    "Dutch directness did not appear overnight. Historically, the Netherlands built wealth through trade, negotiation and pragmatic cooperation — environments where unclear terms cost money and time.",
    "Cultural values such as equality, consensus and straightforward dealing still influence many workplaces. In that frame, directness is often interpreted as respect: you are trusted enough to hear the truth and contribute to a better outcome.",
    "This does not mean every Dutch person communicates identically, or that all companies are informal. Multinationals, startups, government bodies and client-facing teams can feel very different.",
  ],
  culturalContextPoints: [
    "Trading and merchant culture rewarded clear terms and fast correction of errors.",
    "Pragmatism favours workable solutions over elaborate politeness rituals.",
    "Egalitarian norms can make it acceptable to question ideas regardless of seniority.",
    "Consensus-oriented decision making may require open disagreement before alignment.",
    "Directness is often situational — stronger in task feedback than in personal topics.",
  ],
  culturalContextExamples: [
    { title: "Scale-up product team", body: "Engineer flags a launch risk in Slack before stand-up — manager thanks them; directness read as responsible." },
    { title: "Corporate HQ", body: "Workshop ends with same-day written summary of decisions — verbal debate followed by clear documented outcomes." },
    { title: "Government agency", body: "Formal titles remain, but project leads still invite written comments before sign-off — directness within process." },
  ] satisfies DirectnessCard[],
  culturalContextAskManager: [
    "How does this team prefer to receive pushback — in meetings or 1:1s?",
    "When feedback feels blunt, who should I ask for clarification?",
    "Are there topics where indirect communication is expected (personal vs task)?",
    "How are disagreements usually closed — consensus, manager decision or committee?",
  ],
  workplaceExamplesHeading: "Real Workplace Examples",
  workplaceExamplesIntro:
    "These scenarios appear often in expat conversations. The Dutch intent column describes what many colleagues mean — not a universal rule for every person.",
  workplaceScenarios: [
    {
      situation: "Manager gives blunt feedback",
      expatMayThink: "I am being criticised or singled out.",
      dutchColleaguesOftenMean: "Here is a specific issue to fix so the project succeeds — please adjust X by Friday.",
    },
    {
      situation: "Colleague challenges your idea",
      expatMayThink: "They dislike me or want to block progress.",
      dutchColleaguesOftenMean: "I see a risk or alternative — let's stress-test the plan before we commit.",
    },
    {
      situation: "Meeting discussion becomes debate",
      expatMayThink: "The team is conflicted or angry.",
      dutchColleaguesOftenMean: "We are exploring options openly before documenting a decision.",
    },
    {
      situation: "Project risks raised openly",
      expatMayThink: "Someone is being negative or disloyal.",
      dutchColleaguesOftenMean: "Early visibility prevents bigger problems — escalation is responsible.",
    },
  ] satisfies ScenarioRow[],
  workplaceResponseScripts: [
    {
      situation: "After blunt feedback",
      whatHappens: "You feel singled out in the moment.",
      howToAdapt: "Try: \"Thanks — could you share one example and what good looks like by Friday?\"",
    },
    {
      situation: "When a colleague challenges your idea",
      whatHappens: "Debate starts in a group setting.",
      howToAdapt: "Try: \"What risk do you see? I can adjust scope or timeline if we agree on the trade-off.\"",
    },
    {
      situation: "When a meeting feels intense",
      whatHappens: "Multiple people disagree before a decision.",
      howToAdapt: "Try: \"Can we summarise options A and B and confirm who decides today?\"",
    },
    {
      situation: "When written feedback stings",
      whatHappens: "Short email or Slack message feels harsh.",
      howToAdapt: "Try: \"Quick call to align? I want to make sure I understand the requested change.\"",
    },
  ] satisfies FeedbackPhraseRow[],
  directnessVsRudenessHeading: "Understanding the Difference",
  directnessVsRudenessParagraphs: [
    "Direct communication and rudeness can sound similar if you come from a more indirect culture — especially under stress. The difference is usually intent, target and professionalism.",
    "Feedback on work quality, timelines or ideas is widely accepted in many Dutch teams. Personal insults, exclusion, harassment or deliberate humiliation are not part of professional directness.",
  ],
  directnessVsRudenessRows: [
    {
      directCommunication: "The draft needs restructuring before client review.",
      personalAttack: "You clearly cannot write.",
    },
    {
      directCommunication: "I disagree — the data does not support that timeline.",
      personalAttack: "That is a stupid plan.",
    },
    {
      directCommunication: "Can we move on? We need a decision in ten minutes.",
      personalAttack: "Nobody here knows what they are doing.",
    },
    {
      directCommunication: "Your update missed the budget impact — please add it.",
      personalAttack: "You always forget important details.",
    },
  ] satisfies ComparisonRow[],
  directnessVsRudenessTips: [
    "Ask whether feedback refers to the task or to you personally.",
    "Request one concrete example and one requested change.",
    "If language feels personal or repeated despite clarification, escalate to HR.",
    "Document patterns if behaviour crosses into bullying or discrimination.",
  ],
  feedbackHeading: "How Feedback Works",
  feedbackParagraphs: [
    "Feedback in many Dutch workplaces is woven into performance cycles, project retrospectives and day-to-day collaboration. It may arrive sooner and more specifically than you expect — especially in knowledge-work teams.",
    "Many managers expect you to receive feedback, ask clarifying questions and propose next steps. Peer feedback can flow upward as well — particularly in flat or agile environments.",
  ],
  feedbackTypes: [
    { title: "Performance reviews", body: "Structured cycles with goals, examples and development plans — often documented." },
    { title: "Project reviews", body: "Retrospectives or post-mortems focusing on what worked, what did not and process improvements." },
    { title: "Peer feedback", body: "Colleagues may share observations in reviews or informally after deliverables." },
    { title: "Manager feedback", body: "Regular 1:1s with direct comments on priorities, quality and communication style." },
  ] satisfies DirectnessCard[],
  feedbackTips: [
    "Thank the person, then ask for one example and one desired change.",
    "Summarise agreed actions in writing after important feedback conversations.",
    "Offer constructive peer feedback when invited — stay specific and task-focused.",
    "Separate tone from content on first hearing — clarify before reacting emotionally.",
    "Link to the broader workplace culture guide for meetings and hierarchy context.",
  ],
  meetingsHeading: "Why People Disagree Openly",
  meetingsParagraphs: [
    "In many Dutch teams, meetings are not only for status updates — they are spaces to test ideas, surface risks and align before committing resources.",
    "Disagreement during discussion is often expected. Silence can sometimes be read as lack of preparation or engagement, especially in recurring project meetings.",
  ],
  meetingsPoints: [
    "Agendas and pre-reads help structure open debate.",
    "Challenging an idea is frequently separated from challenging the person.",
    "Facilitators may summarise positions before seeking consensus.",
    "Decisions may still require a final owner — confirm who decides.",
    "Written follow-ups reduce ambiguity after verbal debate.",
  ],
  meetingsChecklist: [
    "Read the agenda and pre-reads before joining.",
    "Arrive on time — join two minutes early for video calls.",
    "Prepare one structured contribution or question.",
    "Challenge ideas with data, not personal comments.",
    "Confirm decision owners and deadlines before leaving.",
    "Send a brief recap when outcomes affect your deliverables.",
  ],
  meetingsByType: [
    { type: "Stand-up / daily", purpose: "Blockers and priorities", expatTip: "Keep updates factual — flag delays early, not after the call." },
    { type: "Project review", purpose: "Stress-test plan and scope", expatTip: "Expect open challenge; bring data and one alternative." },
    { type: "Retrospective", purpose: "Process improvement", expatTip: "Peer feedback is often task-focused — contribute one constructive point." },
    { type: "Steering / decision", purpose: "Confirm owner and deadline", expatTip: "Summarise options before leaving; write recap same day." },
  ] satisfies MeetingTypeRow[],
  feedbackPhrases: [
    {
      situation: "Manager says the report needs work",
      whatHappens: "Plain comment without much cushioning.",
      howToAdapt: "Ask which sections to change and by when — thank them and confirm next steps in writing.",
    },
    {
      situation: "Peer says your approach won't scale",
      whatHappens: "Direct challenge in a group review.",
      howToAdapt: "Treat as stress-testing — ask for the risk they see and propose an alternative.",
    },
    {
      situation: "1:1 feedback on communication style",
      whatHappens: "Specific comment on email length or meeting participation.",
      howToAdapt: "Request one example message and agree a format that works for the team.",
    },
  ] satisfies FeedbackPhraseRow[],
  culturalReactionsHeading: "Common Reactions From Expats",
  culturalReactionsIntro:
    "Your home culture shapes first impressions. These patterns are general tendencies — individuals and companies always vary. Use them to build empathy, not stereotypes.",
  culturalReactions: [
    {
      region: "North America",
      commonReaction: "Directness may feel normal in task feedback but surprising in peer settings.",
      adaptationTip: "Mirror concise updates; ask whether feedback is exploratory or final.",
    },
    {
      region: "United Kingdom",
      commonReaction: "Dutch plain speech can feel sharper than indirect British workplace norms.",
      adaptationTip: "Focus on content; avoid over-interpreting softened subtext that may not be present.",
    },
    {
      region: "Asia (varied)",
      commonReaction: "Public challenge or blunt upward feedback may feel disrespectful at first.",
      adaptationTip: "Observe when debate is welcome; prepare written points if speaking up feels difficult.",
    },
    {
      region: "Latin America",
      commonReaction: "Relationship warmth and direct task feedback may feel disconnected initially.",
      adaptationTip: "Build rapport in 1:1s while adapting to direct group discussions.",
    },
    {
      region: "Middle East",
      commonReaction: "Hierarchy expectations may clash with flat debate cultures in some teams.",
      adaptationTip: "Confirm titles and decision rights while participating in idea discussion.",
    },
    {
      region: "Africa (varied)",
      commonReaction: "Communication norms differ widely — some teams feel familiar, others very direct.",
      adaptationTip: "Ask colleagues how feedback is usually delivered in this department.",
    },
  ] satisfies CultureReactionRow[],
  adaptationHeading: "Adapting Successfully",
  adaptationParagraphs: [
    "Adaptation does not mean becoming someone else. It means learning when directness is informational, how to respond calmly, and how to participate in the communication culture your team expects.",
  ],
  adaptationChecklist: [
    "Ask clarifying questions when feedback feels vague or personal.",
    "Focus on facts, timelines and deliverables in your response.",
    "Do not assume every blunt comment is hostility — seek context first.",
    "Share your opinion in meetings — prepared points beat long silence.",
    "Participate actively in retros and project reviews.",
    "Seek context from a trusted colleague or mentor.",
    "Ask for examples: What would good look like next time?",
    "Communicate openly with your manager about style preferences.",
  ],
  adaptationScripts: [
    {
      situation: "After unexpected feedback",
      whatHappens: "Comment feels blunt in the moment.",
      howToAdapt: "\"Could you share one example and what success looks like next time?\"",
    },
    {
      situation: "Before disagreeing in a meeting",
      whatHappens: "You see a risk others have not raised.",
      howToAdapt: "\"I see a risk on timeline — can I share an alternative with trade-offs?\"",
    },
    {
      situation: "When email tone stings",
      whatHappens: "Short message feels personal.",
      howToAdapt: "\"Happy to fix — can we do a 10-min call so I understand the priority?\"",
    },
    {
      situation: "Aligning with your manager",
      whatHappens: "Unclear how direct to be.",
      howToAdapt: "\"How do you prefer I raise concerns — in stand-up, Slack or 1:1?\"",
    },
  ] satisfies FeedbackPhraseRow[],
  benefitsHeading: "Potential Advantages",
  benefits: [
    { title: "Clear expectations", body: "Less guessing about priorities, quality standards and deadlines." },
    { title: "Faster problem solving", body: "Issues surface early instead of festering through indirect signals." },
    { title: "Transparent communication", body: "Decisions and trade-offs may be discussed openly." },
    { title: "Less office politics", body: "Plain speech can reduce hidden agendas — though politics still exists." },
    { title: "Open feedback", body: "Growth-oriented comments may arrive regularly with actionable detail." },
    { title: "Shared responsibility", body: "Team members may feel empowered to raise risks and ideas." },
  ] satisfies DirectnessCard[],
  benefitsInPractice: [
    "Less time decoding vague hints — ask directly if a priority is unclear.",
    "Faster course correction when you request examples after feedback.",
    "Clearer ownership after meetings when you confirm decisions in writing.",
    "Stronger trust when you pair direct questions with reliable follow-through.",
    "Easier onboarding when you observe and mirror team communication norms.",
  ],
  challengesHeading: "Common Challenges",
  challenges: [
    { title: "Culture shock", body: "First weeks can feel emotionally intense until patterns become familiar." },
    { title: "Feeling criticised", body: "Frequent feedback may trigger defensiveness if misread as personal." },
    { title: "Meeting participation", body: "Expectation to speak up may conflict with habits from previous workplaces." },
    { title: "Confidence issues", body: "Language barriers can make direct debate feel harder in English or Dutch." },
    { title: "Communication misunderstandings", body: "Email and chat lack tone — written directness can sting." },
    { title: "Different expectations", body: "Hybrid politeness norms across multicultural teams create mixed signals." },
  ] satisfies DirectnessCard[],
  challengeFixRows: [
    { mistake: "Misreading blunt tone as personal attack", fix: "Ask for one example and the requested change before reacting." },
    { mistake: "Staying silent in debates", fix: "Prepare one data-backed point or clarifying question per meeting." },
    { mistake: "Long indirect emails", fix: "Use bullets, deadline and owner — match team brevity." },
    { mistake: "Avoiding upward feedback", fix: "Share risks early; many teams value escalation over surprises." },
    { mistake: "Assuming all Dutch teams are identical", fix: "Observe your department — multinationals and SMEs differ." },
    { mistake: "Not asking for format preferences", fix: "Tell your manager how you prefer to receive critique (1:1 vs written)." },
  ] satisfies MistakeFixRow[],
  situationsHeading: "Common Workplace Scenarios",
  situationCards: [
    {
      title: "Job interviews",
      body: "Interviewers may ask direct questions about skills gaps or salary expectations — prepare honest, concise answers.",
    },
    {
      title: "Performance reviews",
      body: "Reviews may include specific improvement areas without much cushioning — bring examples and ask for goals.",
    },
    {
      title: "Team meetings",
      body: "Expect agenda items, time boxes and open challenge — prepare one contribution per meeting.",
    },
    {
      title: "Project discussions",
      body: "Risk call-outs and scope debates are often welcome — frame concerns with data.",
    },
    {
      title: "Salary conversations",
      body: "Negotiation may be factual rather than relational — research ranges and state your case clearly.",
    },
    {
      title: "Conflict resolution",
      body: "Many teams prefer early direct conversation before escalation — document facts and request a mediated talk if needed.",
    },
  ] satisfies DirectnessCard[],
  situationDetailRows: [
    {
      situation: "Job interview direct question",
      whatHappens: "Interviewer asks about a skill gap or salary expectation plainly.",
      howToAdapt: "Answer honestly with one example of how you are closing the gap; research salary ranges beforehand.",
    },
    {
      situation: "Performance review",
      whatHappens: "Manager lists improvement areas without much softening language.",
      howToAdapt: "Bring your own goal examples; ask which priority matters most this quarter.",
    },
    {
      situation: "Team meeting debate",
      whatHappens: "Colleagues challenge timelines or scope openly.",
      howToAdapt: "Contribute one structured point; confirm decision owner before leaving.",
    },
    {
      situation: "Salary negotiation",
      whatHappens: "Discussion stays factual — ranges, role scope, market data.",
      howToAdapt: "State your case with research; avoid taking factual tone as rejection.",
    },
    {
      situation: "Peer gives blunt Slack feedback",
      whatHappens: "Short message about missing detail in your deliverable.",
      howToAdapt: "Fix the task, confirm in thread, ask if format expectations differ.",
    },
    {
      situation: "Conflict with colleague",
      whatHappens: "Direct conversation expected before involving HR.",
      howToAdapt: "Document facts, request a short sync, focus on behaviour and tasks — escalate if personal.",
    },
  ] satisfies FeedbackPhraseRow[],
  expectationsHeading: "Professional Expectations",
  expectationsParagraphs: [
    "Beyond communication style, many Dutch colleagues expect reliability, ownership and constructive participation. Directness works best when paired with follow-through.",
  ],
  expectations: [
    "Ownership — deliver on commitments and flag blockers early.",
    "Honesty — share status truthfully; surprises erode trust quickly.",
    "Participation — contribute in meetings and written channels.",
    "Reliability — punctuality and clear updates signal professionalism.",
    "Constructive feedback — give and receive task-focused comments respectfully.",
  ],
  expectationsAskManager: [
    "What does good communication look like in the first 90 days?",
    "How direct should my emails and meeting contributions be?",
    "Who decides after open debate on this team?",
    "When should I escalate blockers — immediately or at stand-up?",
  ],
  expectationsExamples: [
    { title: "Ownership in practice", body: "Send a Tuesday status with blockers before being asked — direct teams often value early visibility." },
    { title: "Participation in practice", body: "Prepare one question or alternative per recurring meeting — silence may read as disengagement." },
    { title: "Reliability in practice", body: "Join calls two minutes early; recap verbal decisions in writing the same day." },
  ] satisfies DirectnessCard[],
  remoteHeading: "Digital Communication",
  remoteParagraphs: [
    "Directness does not disappear online — if anything, missing facial cues can make short messages feel sharper. Many teams rely on email, Teams or Slack for decisions, feedback and follow-ups.",
  ],
  remoteExamples: [
    { title: "Email", body: "Subject lines like Decision needed by Thursday and bullet-point feedback are common." },
    { title: "Teams / video", body: "Cameras may be optional; direct chat questions during presentations are normal in some teams." },
    { title: "Slack / chat", body: "Threaded debates and @mentions for owners — tone is often brief and task-focused." },
  ] satisfies DirectnessCard[],
  remoteTips: [
    "Read messages for task intent before assuming emotional subtext.",
    "Use bullet points and clear asks in your own writing.",
    "Confirm verbal decisions in a short written recap.",
    "If a message stings, ask for a quick call before escalating.",
  ],
  remoteTemplateRows: [
    {
      channel: "Email",
      whenToUse: "Decisions, feedback summaries, external stakeholders",
      example: "Subject: Decision needed by Thu 14:00 — 4 bullets, owner, deadline",
    },
    {
      channel: "Teams / Slack",
      whenToUse: "Quick clarifications, async debate, owner mentions",
      example: "@owner Budget line missing — can you add before stand-up?",
    },
    {
      channel: "Video call",
      whenToUse: "Sensitive feedback, complex disagreement, tone repair",
      example: "15-min sync to align on scope after blunt thread",
    },
  ],
  mythsHeading: "Common Misconceptions",
  myths: [
    {
      myth: "Dutch people are rude",
      reality: "Many colleagues separate direct task feedback from personal warmth — context and relationship still matter.",
    },
    {
      myth: "Everyone communicates the same way",
      reality: "Regional, generational and company cultures differ widely across the Netherlands.",
    },
    {
      myth: "Feedback means you are failing",
      reality: "Frequent feedback often signals investment in improvement — ask for priorities.",
    },
    {
      myth: "You should never disagree",
      reality: "Respectful disagreement on ideas is often expected before decisions stick.",
    },
    {
      myth: "Directness means no empathy",
      reality: "Empathy may show through fairness, clarity and follow-up support rather than soft language.",
    },
    {
      myth: "You must become equally blunt",
      reality: "Adapt participation and clarity — you do not need to copy every tone or phrase.",
    },
  ] satisfies MythCard[],
  mythsVerificationTips: [
    "Replace \"Dutch people are rude\" with \"How does this team give feedback?\"",
    "Replace \"Feedback means failing\" with \"What should I change next?\"",
    "Replace \"Never disagree\" with \"Who decides after we debate?\"",
    "Replace \"Must become blunt\" with \"How direct should my emails be here?\"",
  ],
  successStoriesHeading: "How Expats Successfully Adapt",
  successStories: [
    {
      profile: "Tech professional (India → Amsterdam)",
      challenge: "Felt attacked when seniors critiqued code in group reviews.",
      outcome: "Asked for 1:1 feedback format; learned public comments targeted quality, not status — now leads retros.",
    },
    {
      profile: "Manager (Brazil → Rotterdam)",
      challenge: "Team interpreted relational check-ins as micromanagement.",
      outcome: "Balanced brief personal warmth with agenda-driven meetings; trust scores improved in quarterly survey.",
    },
    {
      profile: "Designer (UK → Utrecht)",
      challenge: "British indirect style clashed with blunt client feedback loops.",
      outcome: "Documented revision requests literally; reduced rework and shortened approval cycles.",
    },
    {
      profile: "Consultant (US → The Hague)",
      challenge: "Expected fast top-down decisions; frustrated by consensus pace.",
      outcome: "Mapped decision owners; learned debate shortened rework — now facilitates client workshops.",
    },
    {
      profile: "Engineer (Japan → Eindhoven)",
      challenge: "Uncomfortable challenging senior ideas in plenary meetings.",
      outcome: "Prepared written questions pre-meeting; manager invited them first — participation became a strength.",
    },
  ] satisfies SuccessStory[],
  successStoryTakeaways: [
    "Ask for feedback format preferences early — 1:1 vs group review.",
    "Document revision requests literally instead of inferring subtext.",
    "Prepare written points before meetings if speaking up feels difficult.",
    "Map decision owners so debate feels purposeful, not endless.",
    "Small experiments beat trying to change your personality overnight.",
  ],
  mistakesHeading: "Mistakes to Avoid",
  mistakeFixRows: [
    { mistake: "Taking all feedback personally", fix: "Ask for one example and one requested change." },
    { mistake: "Staying silent in meetings", fix: "Prepare one structured point before each recurring meeting." },
    { mistake: "Avoiding disagreement", fix: "Frame risks with data — ask who decides after debate." },
    { mistake: "Assuming criticism is hostility", fix: "Clarify intent before reacting; confirm next steps in writing." },
    { mistake: "Waiting for permission to speak up", fix: "Share relevant concerns early — escalation is often valued." },
    { mistake: "Over-interpreting through home-culture lens", fix: "Ask a trusted colleague how they read the same comment." },
    { mistake: "Not asking questions", fix: "Use scripts: \"Could you share one example?\"" },
    { mistake: "Withdrawing from discussions", fix: "Tell your manager which formats help you participate." },
  ] satisfies MistakeFixRow[],
  mistakes: [
    "Taking all feedback personally without asking for examples.",
    "Staying silent in meetings when input is expected.",
    "Avoiding disagreement even when you see a material risk.",
    "Assuming criticism is hostility rather than task focus.",
    "Waiting for permission to share a relevant concern.",
    "Over-interpreting direct comments through your home-culture lens.",
    "Not asking questions when priorities are unclear.",
    "Withdrawing from discussions instead of clarifying style preferences.",
  ],
  faq: [
    {
      q: "Why are Dutch people so direct?",
      a: "Many workplaces value clarity, efficiency and honest feedback. Historical trade culture and egalitarian norms influence this — but individuals and companies vary.",
    },
    {
      q: "Are Dutch people rude?",
      a: "Direct task feedback can feel rude if you expect indirect cues. Often the intent is practical. Personal insults or exclusion are not acceptable professionalism.",
    },
    {
      q: "How should I respond to feedback?",
      a: "Listen, ask for one example, confirm the requested change and follow up in writing. Thank the person if the feedback is constructive.",
    },
    {
      q: "Is directness normal in all companies?",
      a: "No. Startups, multinationals, government and client-facing teams differ. Observe your team and ask your manager.",
    },
    {
      q: "Can I disagree with my manager?",
      a: "In many knowledge-work teams, respectful disagreement on ideas is welcome. Confirm how your manager prefers challenges — in meetings or 1:1s.",
    },
    {
      q: "Why do meetings feel like debates?",
      a: "Open discussion before decisions is common in consensus-oriented cultures. Summarise outcomes and owners afterward.",
    },
    {
      q: "How can I adapt faster?",
      a: "Observe, ask clarifying questions, participate with prepared points and pair this guide with workplace culture and employee-rights orientation.",
    },
    {
      q: "What if I feel uncomfortable?",
      a: "Talk to your manager or HR if behaviour is personal, repeated or discriminatory. Directness should not cross into bullying.",
    },
  ],
  faqNextSteps: [
    "Use FAQ answers as orientation — confirm with colleagues.",
    "Pair communication questions with employment contract and rights guides.",
    "Revisit after probation when team norms become clearer.",
  ],
  relatedGuides: [
    {
      label: "Dutch workplace culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "Broad overview — hierarchy, balance, meetings and professional norms.",
    },
    {
      label: "Finding jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Job search, recruiters and interview context.",
    },
    {
      label: "Interview tips Netherlands",
      href: "/netherlands/jobs/interview-tips-netherlands/",
      status: "live",
      description: "Dutch interview culture where directness shows up in hiring conversations.",
    },
    {
      label: "CV Netherlands",
      href: "/netherlands/jobs/cv-netherlands/",
      status: "live",
      description: "Dutch CV and application norms before interviews begin.",
    },
    {
      label: "Employee rights",
      href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
      status: "live",
      description: "Leave, sick pay and workplace protections.",
    },
    {
      label: "Employment contracts",
      href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
      status: "live",
      description: "Contract types, probation and notice periods.",
    },
    {
      label: "Community basics",
      href: COMMUNITY_BASICS_NETHERLANDS_PATH,
      status: "live",
      description: "Social integration beyond the office.",
    },
    {
      label: "Language learning",
      href: LANGUAGE_LEARNING_PATH,
      status: "comingSoon",
      description: "Planned hub for courses, apps and municipal programs.",
    },
  ] satisfies DirectnessLink[],
  relatedGuidesOrder: [
    { phase: "Parent guide", detail: "Dutch workplace culture — hierarchy, balance, meetings and industry context." },
    { phase: "Job search", detail: "Finding jobs — interviews often include direct skill and salary questions." },
    { phase: "Starting a role", detail: "Employment contracts and employee rights — pair culture with legal orientation." },
    { phase: "Settling in", detail: "Community basics and language learning — integration beyond the office." },
  ] satisfies TimelineStep[],
  relatedGuidesReadingOrder: [
    "Dutch workplace culture — broad overview first",
    "Finding jobs — search and interview directness",
    "Employment contracts — review before signing",
    "Employee rights — protections alongside culture adaptation",
    "Community basics — life outside work",
  ],
  exploreNextCards: [
    {
      label: "Dutch workplace culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      description: "Full workplace culture overview.",
    },
    {
      label: "Finding jobs",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      description: "Search strategy and market orientation.",
    },
    {
      label: "Employee rights",
      href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
      description: "Protections and leave frameworks.",
    },
    {
      label: "Community basics",
      href: COMMUNITY_BASICS_NETHERLANDS_PATH,
      description: "Life outside work in the Netherlands.",
    },
    {
      label: "Learning Dutch",
      href: LANGUAGE_LEARNING_PATH,
      description: "Language resources for professional integration.",
      status: "comingSoon" as const,
    },
  ] satisfies DirectnessLink[],
  exploreNextTips: [
    "New to Dutch workplaces → start with workplace culture overview",
    "Still interviewing → finding jobs guide",
    "Starting a role → employee rights and contracts",
    "Settling in → community basics and language learning",
  ],
  visualTextDetails: {
    intro: {
      title: "What this guide covers",
      items: [
        "Why many Dutch workplaces value direct communication",
        "Real examples, feedback culture and meeting debate",
        "How different expat backgrounds may experience directness",
        "Practical adaptation strategies and common mistakes",
        "Orientation only — not HR policy or legal advice",
      ],
    },
    snapshot: {
      title: "How to use the snapshot",
      items: [
        "Compare signals to your team — not every employer matches every pattern",
        "Ask colleagues how feedback is usually delivered here",
        "Treat debate as idea-testing unless behaviour becomes personal",
        "Link to workplace culture guide for broader context",
      ],
    },
    culturalContext: {
      title: "Context reminders",
      items: [
        "Directness is often about clarity, not dominance",
        "Trading and pragmatic culture still influence business norms",
        "Consensus may require open disagreement first",
        "Individual personalities vary as much as national trends",
      ],
    },
    workplaceExamples: {
      title: "When scenarios surprise you",
      items: [
        "Pause before reacting — ask what change is requested",
        "Separate tone from task content on first hearing",
        "Request a 1:1 if public feedback feels uncomfortable",
        "Document agreed next steps after the conversation",
      ],
    },
    directnessVsRudeness: {
      title: "Red flags vs directness",
      items: [
        "Task-focused critique with examples → usually directness",
        "Personal insults, slurs or exclusion → not acceptable",
        "Repeated targeting despite clarification → escalate to HR",
        "Discrimination concerns → employee rights guide and HR",
      ],
    },
    feedback: {
      title: "Feedback habits",
      items: [
        "Ask for examples and success criteria",
        "Summarise actions in writing after key conversations",
        "Peer feedback may flow upward in flat teams",
        "Pair with performance review cycle from your contract",
      ],
    },
    meetings: {
      title: "Meeting participation",
      items: [
        "Prepare one structured point before recurring meetings",
        "Challenge ideas with data, not personal comments",
        "Confirm decision owners after debate ends",
        "Send a brief recap when outcomes affect your work",
      ],
    },
    culturalReactions: {
      title: "Cross-cultural empathy",
      items: [
        "Your first reaction is valid — context helps you respond",
        "Avoid stereotyping colleagues or entire regions",
        "Multicultural teams blend multiple communication norms",
        "Ask how this team prefers disagreement and feedback",
      ],
    },
    adaptation: {
      title: "First-month actions",
      items: [
        "Schedule a style conversation with your manager",
        "Find a peer mentor who navigated a similar transition",
        "Practice one clarifying question per feedback episode",
        "Join meetings with a prepared contribution",
      ],
    },
    benefits: {
      title: "Reframe directness",
      items: [
        "Clarity can reduce anxiety once expectations are explicit",
        "Open feedback may accelerate your learning curve",
        "Less guessing about what good looks like",
        "Transparency can build trust when paired with reliability",
      ],
    },
    challenges: {
      title: "When to seek support",
      items: [
        "Persistent discomfort → talk to manager or mentor",
        "Personal targeting → HR and employee rights resources",
        "Language barriers → request written follow-ups",
        "Isolation → community basics and colleague coffee chats",
      ],
    },
    situations: {
      title: "Scenario preparation",
      items: [
        "Interviews — prepare honest skill and salary framing",
        "Reviews — bring your own examples and goals",
        "Conflicts — facts first, mediated talk if needed",
        "Salary — research ranges; state case clearly",
      ],
    },
    expectations: {
      title: "Show reliability",
      items: [
        "Flag blockers early — surprises erode trust",
        "Deliver on small commitments consistently",
        "Match directness with follow-through",
        "Ask when unsure rather than guessing silently",
      ],
    },
    remote: {
      title: "Digital tone tips",
      items: [
        "Bullet points beat long indirect emails",
        "Confirm video decisions in writing",
        "Ask for a call if chat feels sharp",
        "Use clear subject lines with deadlines",
      ],
    },
    myths: {
      title: "Replace myths with questions",
      items: [
        "Ask how this team gives feedback",
        "Ask who decides after debate",
        "Ask whether Dutch is needed for clients",
        "Ask about core hours and after-hours norms",
      ],
    },
    successStories: {
      title: "Learning curve is normal",
      items: [
        "Most professionals adjust within a few months",
        "Small communication experiments beat wholesale personality change",
        "Managers often appreciate proactive clarification questions",
        "Share what formats help you receive feedback best",
      ],
    },
    mistakes: {
      title: "Weekly self-check",
      items: [
        "Did I ask for examples when feedback stung?",
        "Did I contribute at least once in team meetings?",
        "Did I confirm decisions in writing?",
        "Did I escalate personal behaviour appropriately?",
      ],
    },
    faq: {
      title: "After reading FAQ",
      items: [
        "Confirm answers with your manager and team",
        "Pair with workplace culture and employee rights guides",
        "Revisit when changing teams or companies",
      ],
    },
    relatedGuides: {
      title: "Suggested reading order",
      items: [
        "Workplace culture overview first",
        "Contracts and rights when starting a role",
        "Finding jobs if still searching",
        "Community basics for life beyond work",
      ],
    },
    exploreNext: {
      title: "Pick your next step",
      items: [
        "Searching → finding jobs",
        "Starting → contracts and employee rights",
        "Settling → community basics",
        "Integrating → language learning when live",
      ],
    },
  },
} as const;

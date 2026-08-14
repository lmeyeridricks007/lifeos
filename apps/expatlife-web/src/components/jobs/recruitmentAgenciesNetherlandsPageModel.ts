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
import { LINKEDIN_NETHERLANDS_PATH } from "./linkedinNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const RECRUITMENT_AGENCIES_NETHERLANDS_PATH = "/netherlands/jobs/recruitment-agencies-netherlands/" as const;

export const ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/english-speaking-jobs-netherlands/" as const;
export const REMOTE_WORK_NETHERLANDS_PATH = "/netherlands/jobs/remote-work-netherlands/" as const;


export {
  CV_NETHERLANDS_PATH,
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  COVER_LETTER_NETHERLANDS_PATH,
  LINKEDIN_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
};

export const RECRUITMENT_AGENCIES_AFFILIATE_PLACEMENT_ID = "nl-jobs-recruitment-agencies-support-providers" as const;

export type RecruitmentAgenciesNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type RecruitmentCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type StructureRow = { section: string; include: string; tip: string };
export type NormsRow = { topic: string; dutchNorm: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "recruitment-agencies-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const recruitmentAgenciesNetherlandsPage = {
  slug: "recruitment-agencies-netherlands",
  path: RECRUITMENT_AGENCIES_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(RECRUITMENT_AGENCIES_NETHERLANDS_PATH) ?? "2026-10-07",
  affiliatePlacementId: RECRUITMENT_AGENCIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Recruitment Agencies Netherlands | Expat Guide to Dutch Recruiters",
    description:
      "Learn how Dutch recruitment agencies, uitzendbureaus and intermediars work for expats: when to use them, fees, how to partner with recruiters and what to prepare — without fake agency rankings.",
    keywords: [
      "recruitment agencies netherlands",
      "dutch recruiters for expats",
      "uitzendbureau netherlands",
      "intermediair netherlands jobs",
      "dutch recruitment agencies",
      "working with recruiters netherlands",
      "agency jobs netherlands expats",
      "meetup recruitment agencies netherlands",
      "recruitment process netherlands",
      "career recruitment agencies netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Recruitment agencies",
    pageTitle: "Recruitment Agencies in the Netherlands",
    subtitle:
      "Use Dutch recruiters and uitzendbureaus wisely as an expat — when agencies help, what they charge (usually employer-paid), how to work with them and how they fit beside platforms and networking.",
    primaryCta: { label: "Work With Recruiters", href: "#habits" },
    secondaryCta: { label: "Browse Jobs Guides", href: JOBS_HUB_PATH },
    chips: ["Agency types", "Fees & process", "Recruiter partnership", "Vs direct apply"],
    image: {
      src: `/images/heroes/networking-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of international professionals networking at a bright Amsterdam canal-side coworking meetup, name badges and coffee cups on a communal table, canal houses visible through tall windows.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining professional networking for expats in the Netherlands: events, communities, referrals and warm intros alongside applications — complementary to LinkedIn platform tactics.",
      "Relationships open doors that cold applications alone often miss — especially for international hires."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six networking facts for Netherlands job search: events, communities, referrals, outreach tone, follow-up and LinkedIn as one channel.",
      "Use this overview before you pick your first event or ask for an intro."
    ),
    communities: visual(
      "communities",
      "Infographic map of community types for Dutch professional networking: industry groups, alumni, expat professional circles, coworking and sector associations.",
      "Pick communities that match your target roles — not every Meetup is a hiring channel."
    ),
    events: visual(
      "events",
      "Infographic of event formats in the Netherlands: meetups, conferences, open offices, alumni nights and sector evenings — with prep and follow-up rails.",
      "Show up with one clear ask and one clear offer — then follow up within 48 hours."
    ),
    referrals: visual(
      "referrals",
      "Infographic of referral and warm-intro paths for Dutch roles: alumni, colleagues, community leads and hiring-manager intros with forwardable blurbs.",
      "A specific, forwardable ask is easier for busy Dutch contacts to act on."
    ),
    directness: visual(
      "directness",
      "Infographic of Dutch-direct outreach norms for networking: short context, clear ask, honest status and polite spaced follow-ups.",
      "Direct does not mean rude — it means clear purpose without theatrical small talk."
    ),
    linkedinChannel: visual(
      "linkedin-channel",
      "Infographic showing LinkedIn as one networking channel for Dutch job search — profile visibility and DMs — with a clear handoff to the LinkedIn Netherlands guide.",
      "Use LinkedIn for discovery and async outreach; deepen relationships offline and by email."
    ),
    habits: visual(
      "habits",
      "Infographic of weekly networking habits for expats in the Netherlands: one event, two follow-ups, one intro ask and a relationship tracker.",
      "Small consistent habits beat occasional conference marathons."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of common expat networking mistakes in the Netherlands: pitch-slapping, no follow-up, LinkedIn-only strategy and vague intro asks.",
      "Fixing these habits improves trust — it still does not guarantee interviews."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist for a Dutch networking package: community shortlist, event prep, intro blurb, follow-up cadence and LinkedIn alignment.",
      "Treat networking as a system alongside CV, LinkedIn and applications."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic map of expat networking scenarios: newly arrived, still abroad, career switchers, sponsorship-dependent and freelance bridge.",
      "Your outreach emphasis changes depending on how you enter the Dutch labour market."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting networking habits to LinkedIn tactics, finding jobs, CV, cover letters, interviews, salary negotiation and workplace culture.",
      "Networking sits between channels strategy and live interview preparation."
    ),
    services: visual(
      "services",
      "Infographic showing professional support that may help during networking-led search: career coaches, relocation, immigration and tax planning after offers.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common Networking Netherlands FAQ topics: events vs LinkedIn, Dutch language, intro asks, follow-ups and sponsorship.",
      "FAQ answers should lead to one concrete outreach or event action this week."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing trusted orientation sources for Dutch work and applications: Government.nl, UWV, Werk.nl, Business.gov.nl and IND for permit context.",
      "Verify labour market and permit rules on official sites — not event marketing alone."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting networking preparation to LinkedIn, finding jobs, CV, interview tips, salary negotiation and Dutch workplace culture guides.",
      "After relationships open doors, move into applications, interviews and offer talks."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#communities", label: "Agency types" },
    { href: "#events", label: "When to use" },
    { href: "#referrals", label: "Fees" },
    { href: "#directness", label: "Working together" },
    { href: "#linkedin-channel", label: "Other channels" },
    { href: "#habits", label: "Cadence" },
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
    heading: "How Recruitment Agencies Work in the Netherlands",
    paragraphs: [
      "Dutch employers often hire through recruitment agencies (werving & selectie), uitzendbureaus (temporary staffing) and specialist intermediars or headhunters. For expats, agencies can surface roles that never appear on public boards — and they can also waste time if you treat every recruiter message as a sure path to sponsorship.",
      "This guide owns the agency channel: when to use recruiters, how fees usually work (typically employer-paid), how to partner productively and how to spot mismatches. Finding Jobs owns multi-channel overview; English Speaking Jobs and Remote Work own those market lanes; LinkedIn and Networking own profile and relationship tactics; CV, Cover Letter and Interview Tips own documents and live interviews.",
      "Use agencies as one channel inside a wider search — not as a ranking of best agencies and not as a substitute for honest authorization and salary planning.",
    ],
    keyPoints: [
      { title: "Employer usually pays", body: "Legitimate Dutch recruiters are typically paid by the hiring company — candidates should not pay placement fees for standard employment search." },
      { title: "Match the agency type", body: "Uitzend, specialist search and executive search solve different problems — pick the fit." },
      { title: "Be clear on sponsorship", body: "Tell recruiters your authorization needs early; do not imply permit certainty." },
      { title: "Keep multi-channel search", body: "Pair agencies with LinkedIn, applications and networking — Finding Jobs owns the overview." },
    ],

    scenarios: [
      {
        situation: "Just arrived in a Dutch city",
        approach: "Join two relevant communities and one recurring meetup this month",
        firstStep: "Shortlist industry + alumni groups that match your target roles",
      },
      {
        situation: "Still abroad, targeting NL roles",
        approach: "Async outreach + virtual events; plan one trip for in-person meetups",
        firstStep: "Draft a relocation-window note and one forwardable intro blurb",
      },
      {
        situation: "Strong CV, weak pipeline",
        approach: "Shift time from mass applications into warm intros and events",
        firstStep: "Ask three trusted contacts for one targeted intro each",
      },
      {
        situation: "Career switcher",
        approach: "Network into the new domain before rewriting every application",
        firstStep: "Attend one domain meetup and collect three role-language phrases",
      },
    ] satisfies ScenarioRow[],
  },
  introPlanningSteps: [
    "Write a one-sentence target: city + role family + why you are valuable.",
    "Shortlist two communities and one recurring event you can actually attend.",
    "Draft a four-line forwardable intro blurb for warm referrals.",
  ],
  snapshotCards: [
    { label: "Communities", value: "Role-fit first", note: "Industry and alumni beat generic expat hangouts for hiring." },
    { label: "Events", value: "Prep + follow-up", note: "Show up with one ask and follow up in 48 hours." },
    { label: "Fees", value: "Employer-paid", note: "Candidates usually do not pay placement fees for standard mediation." },
    { label: "Tone", value: "Dutch-direct", note: "Clear purpose beats long rapport theatre." },
    { label: "LinkedIn", value: "One channel", note: "Platform tactics live on the LinkedIn guide." },
    { label: "Goal", value: "Earn trust", note: "Conversations and intros — not card collections." },
  ] satisfies SnapshotSignal[],
  snapshotNextSteps: [
    "Pick one community and one event for the next two weeks.",
    "Rewrite your intro blurb so a busy contact can forward it.",
    "Schedule two follow-ups from last month's conversations.",
  ],
  communitiesHeading: "Types of Dutch Recruitment Agencies Expats Meet",
  communitiesParagraphs: [
    "Dutch 'recruitment' is not one product. Uitzendbureaus focus on temporary and flexible staffing. Werving & selectie / intermediars recruit for permanent or fixed-term employer roles. Specialist and executive search firms focus on scarce profiles. Detachering (secondment) places you with a client while employed by the agency or partner.",
    "Expats often meet international desks or English-speaking consultants inside larger agencies — useful when sponsorship and relocation are part of the brief. That still does not make every agency a fit for Highly Skilled Migrant routes.",
    "This page explains types and how to choose — it does not rank agencies, sell placements or invent affiliate programmes for named recruiters.",
  ],
  communitiesPoints: [
    "Match your goal: temp bridge, permanent search or executive search.",
    "Ask whether roles are with recognised sponsors when you need a permit.",
    "Prefer specialists in your industry over generic mass mailers.",
    "Keep your own pipeline — agencies are one channel, not the whole market.",
    "Never pay candidate placement fees for standard employment mediation.",
  ],
  communitiesRows: [
    {
      section: "Industry meetups",
      include: "Role-family talks, demos, hiring AMAs",
      tip: "Arrive early; talk to organisers and speakers.",
    },
    {
      section: "Alumni chapters",
      include: "University / company alumni in NL cities",
      tip: "Ask for advice or intro with a forwardable blurb.",
    },
    {
      section: "Professional associations",
      include: "Sector bodies, chambers, specialist networks",
      tip: "Useful for regulated fields and senior peers.",
    },
    {
      section: "Coworking nights",
      include: "Open desks, founder evenings, skill swaps",
      tip: "Great for recurring weak-tie relationships.",
    },
    {
      section: "Expat professional circles",
      include: "International career clubs, city professional nights",
      tip: "Pair with industry groups for hiring density.",
    },
  ] satisfies StructureRow[],
  communitiesChecklist: [
    "Two communities match your target role family.",
    "You know the next event date for each.",
    "You have a short self-intro that fits Dutch-direct norms.",
    "You are not relying only on social expat hangouts.",
  ],
  eventsHeading: "When Agencies Help — and When They Do Not",
  eventsParagraphs: [
    "Dutch professional events range from small meetups and open offices to conferences, alumni nights and sector evenings. The format matters less than your prep and follow-up.",
    "Before you go: know who hosts, why you are attending and what one useful thing you can offer. During the event: listen more than you pitch. After: send a short thank-you with a specific next step within 48 hours.",
    "Collecting business cards without follow-up is not networking. Neither is monopolising speakers with a full career story.",
  ],
  eventsPoints: [
    "Read the agenda and speaker list before you arrive.",
    "Prepare a 20-second intro: role, niche, what you are exploring.",
    "Ask curious questions; avoid immediate hard pitches.",
    "Exchange contacts only when there is a real next step.",
    "Follow up within 48 hours with a concrete, short note.",
  ],
  eventsCards: [
    { title: "Strong event pattern", body: "Arrive with one learning goal + one ask; leave with two follow-ups scheduled." },
    { title: "Weak event pattern", body: "Show up late, pitch everyone, never message again." },
    { title: "Strong follow-up", body: "Thanks for [specific topic]. Here is [useful link]. Open to a 15-min call next week?" },
    { title: "Weak follow-up", body: "Nice meeting you! Let's stay in touch! (no context, no ask)." },
  ] satisfies RecruitmentCard[],
  eventsTips: [
    "Prefer recurring meetups over one-off mega-conferences when possible.",
    "Volunteer or help organisers if you want faster trust.",
    "Bring a localised CV only if someone asks — do not force handouts.",
    "Virtual events count — still follow up like in-person.",
  ],
  referralsHeading: "Fees, Contracts and Who Pays",
  referralsParagraphs: [
    "Warm intros and employee referrals are among the highest-trust paths into Dutch teams. Make it easy: give your contact a short forwardable blurb, the target role or team and why the fit is real.",
    "Ask for advice or an introduction — not a job guarantee. Busy Dutch professionals often help when the ask is specific and respectful of their time.",
    "Never invent mutual connections or exaggerate how well you know someone. Trust collapses fast when intros feel manufactured.",
  ],
  referralsPoints: [
    "Write a four-line forwardable blurb before you ask.",
    "Name the company, team or role family when you can.",
    "Offer an easy out: 'If not the right person, no worries.'",
    "Thank referrers whether or not a process starts.",
    "Keep LinkedIn and CV consistent with the referred story.",
  ],
  referralsRows: [
    {
      situation: "Alumni contact",
      approach: "Ask for advice first; then a targeted intro if fit emerges",
      firstStep: "Send blurb + one specific company or team",
    },
    {
      situation: "Former colleague abroad",
      approach: "Reconnect with context; ask who they know in NL hiring",
      firstStep: "Share your target cities and role family",
    },
    {
      situation: "Meetup organiser",
      approach: "Volunteer value; ask for intros to speakers or hiring peers",
      firstStep: "Offer to help with a session or welcome desk",
    },
    {
      situation: "Employee referral programme",
      approach: "Follow company referral rules; keep documents ready",
      firstStep: "Ask what the referrer needs from you this week",
    },
  ] satisfies ScenarioRow[],
  referralsTips: [
    "One strong intro beats ten vague 'anyone hiring?' blasts.",
    "Update your contact when you land interviews — close the loop.",
    "Do not CC strangers without consent.",
    "If sponsorship is needed, say so honestly in the blurb.",
  ],
  directnessHeading: "How to Work Productively With Recruiters",
  directnessParagraphs: [
    "Dutch professional culture often prefers clear purpose over long rapport theatre. In networking that means: state who you are, why you are writing and what you are asking — politely and briefly.",
    "Direct does not mean cold. Warmth plus clarity works well: thank someone for their time, be honest about relocation or authorization status and propose a concrete next step.",
    "For deeper workplace communication norms, use the Dutch Directness at Work and Dutch Workplace Culture guides. This section focuses on outreach patterns for networking.",
  ],
  directnessPoints: [
    "Lead with context and a specific ask in the first short paragraph.",
    "Keep messages scannable — like a clear professional email.",
    "Be honest about languages, location and authorization.",
    "Space follow-ups; one reminder with new value beats daily pings.",
    "Accept 'no' or silence without escalating pressure.",
  ],
  directnessRows: [
    {
      topic: "Opening",
      dutchNorm: "Context + purpose quickly",
      tip: "Skip long life stories in the first note.",
    },
    {
      topic: "Ask",
      dutchNorm: "One clear request",
      tip: "Advice, intro or 15-min call — pick one.",
    },
    {
      topic: "Honesty",
      dutchNorm: "Straightforward status notes",
      tip: "Relocation window and authorization without drama.",
    },
    {
      topic: "Follow-up",
      dutchNorm: "Polite, spaced, specific",
      tip: "Add one new detail; do not guilt-trip.",
    },
    {
      topic: "Tone",
      dutchNorm: "Warm + factual",
      tip: "Cut hype adjectives; keep proof.",
    },
  ] satisfies NormsRow[],
  linkedinChannelHeading: "Agencies Beside LinkedIn, Boards and Networking",
  linkedinChannelParagraphs: [
    "LinkedIn is a major professional network in the Netherlands for discovery, async outreach and staying visible to recruiters. It is not a substitute for offline communities, events and warm intros.",
    "This page owns networking habits across channels. For profile, headline, About, Open to Work, Easy Apply and recruiter messaging on the platform, use the LinkedIn Netherlands guide.",
    "A practical split: use LinkedIn to find people and confirm attendance; use events and email to deepen trust; keep your CV and LinkedIn story consistent when intros turn into applications.",
  ],
  linkedinChannelPoints: [
    "Personalise connection notes with a concrete networking reason.",
    "Do not paste a full motivatiebrief into a LinkedIn DM.",
    "Move serious process talk to email or scheduled calls when needed.",
    "Align LinkedIn claims with your localised CV before intros.",
    "Open the LinkedIn guide for platform-specific tactics.",
  ],
  linkedinChannelCards: [
    { title: "On this page", body: "Events, communities, referrals, Dutch-direct outreach and offline habits." },
    { title: "On LinkedIn Netherlands", body: "Profile, headline, About, Open to Work, Easy Apply and recruiter DMs." },
    { title: "On Finding Jobs", body: "Multi-channel search strategy across platforms, recruiters and cities." },
    { title: "Hand-off rule", body: "If the question is 'how do I edit my profile?', open LinkedIn — not this page." },
  ] satisfies RecruitmentCard[],
  habitsHeading: "A Practical Cadence With Recruiters",
  habitsParagraphs: [
    "Networking works when it is a habit, not a panic mode before applications. A simple weekly rhythm beats occasional intensity.",
    "Aim for: one community touch (event or meaningful online engagement), two follow-ups from prior conversations, one clear intro ask when you have a forwardable blurb and a light tracker of people and next steps.",
    "Protect energy. Two quality conversations outweigh twenty shallow pitches — especially in Dutch culture where trust builds through consistency.",
  ],
  habitsPoints: [
    "Block one recurring meetup on your calendar.",
    "Keep a simple tracker: name, context, next step, date.",
    "Send follow-ups within 48 hours while context is fresh.",
    "Review your intro blurb monthly as your target roles evolve.",
    "Pair networking weeks with CV and LinkedIn alignment checks.",
  ],
  habitsRows: [
    {
      section: "Weekly",
      include: "1 event or deep community touch + 2 follow-ups",
      tip: "Put them on the calendar like interviews.",
    },
    {
      section: "Monthly",
      include: "1 intro ask + tracker clean-up",
      tip: "Close loops with people who helped you.",
    },
    {
      section: "Per conversation",
      include: "Note + next step within 48 hours",
      tip: "No next step means the thread dies.",
    },
    {
      section: "Per application wave",
      include: "Align CV, LinkedIn and referred story",
      tip: "Mismatches kill trust after warm intros.",
    },
  ] satisfies StructureRow[],
  habitsChecklist: [
    "Next event is on the calendar.",
    "Tracker has open next steps only.",
    "Forwardable blurb is current.",
    "Two follow-ups are queued this week.",
  ],
  mistakesHeading: "Common Expat Mistakes With Dutch Agencies",
  mistakes: [
    {
      title: "Pitch-slapping at events",
      body: "Launching into a full job ask before listening destroys goodwill.",
      advice: "Ask curious questions first; share a short intro when invited.",
    },
    {
      title: "No follow-up",
      body: "Great conversations evaporate without a 48-hour note.",
      advice: "Send a short thank-you with one concrete next step.",
    },
    {
      title: "LinkedIn-only strategy",
      body: "Platform DMs without communities or intros limit warm paths.",
      advice: "Add one offline or community habit this month.",
    },
    {
      title: "Vague intro asks",
      body: "'Know anyone hiring?' is hard for busy contacts to act on.",
      advice: "Provide a forwardable blurb and a target role or company.",
    },
    {
      title: "Overclaiming Dutch or permits",
      body: "Inflated fluency or authorization collapses in direct conversations.",
      advice: "State language and authorization status honestly.",
    },
    {
      title: "Ignoring Recruiter partnership",
      body: "Long rapport theatre can feel evasive to Dutch professionals.",
      advice: "Be warm and get to the point quickly.",
    },
    {
      title: "Only social expat groups",
      body: "Belonging helps — but hiring density often lives in industry circles.",
      advice: "Pair social communities with role-family meetups.",
    },
    {
      title: "Inconsistent story across channels",
      body: "Different titles on CV, LinkedIn and intro blurbs break trust.",
      advice: "Reconcile documents before asking for referrals.",
    },
  ] satisfies MistakeCard[],
  checklistHeading: "Agency Channel Checklist",
  checklistIntro:
    "Treat networking as part of an application package with your CV, LinkedIn and (when required) motivatiebrief. Completing this checklist does not guarantee interviews.",
  howTo: {
    steps: [
      {
        name: "Define your networking target",
        text: "Write city, role family and a one-sentence value line you can say in 20 seconds.",
      },
      {
        name: "Shortlist communities and events",
        text: "Pick two role-fit communities and one recurring event you can attend.",
      },
      {
        name: "Draft a forwardable intro blurb",
        text: "Four lines: who you are, proof, what you seek and honest practical notes.",
      },
      {
        name: "Practise Dutch-direct outreach",
        text: "Send short, clear notes with one ask; space follow-ups politely.",
      },
      {
        name: "Align LinkedIn and CV",
        text: "Keep titles and claims consistent before warm intros turn into applications.",
      },
      {
        name: "Run a weekly habit loop",
        text: "One community touch, two follow-ups, tracker update — then apply where doors open.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to work with recruitment agencies in the Netherlands",
    description:
      "Step-by-step orientation for expats using Dutch recruitment agencies, uitzendbureaus and intermediars.",
    anchor: "#checklist",
  },
  applicationChecklist: [
    "Target role family and city are clear.",
    "Two communities and one event are shortlisted.",
    "Forwardable intro blurb is ready.",
    "Follow-up notes are short and specific.",
    "Language and authorization claims are honest.",
    "LinkedIn and CV stories match.",
    "Tracker has next steps with dates.",
    "Warm intros are thanked whether or not a process starts.",
  ],
  scenariosHeading: "Expat Agency-Search Scenarios",
  scenarios: [
    {
      situation: "Newly arrived in Amsterdam / Randstad",
      approach: "Prioritise recurring meetups and coworking nights for weak ties",
      firstStep: "Book one industry meetup this fortnight",
    },
    {
      situation: "Still abroad, targeting NL roles",
      approach: "Virtual events + async intros; plan one in-person trip",
      firstStep: "Update blurb with relocation window and interview availability",
    },
    {
      situation: "Sponsorship-dependent search",
      approach: "Honest status in blurbs; network toward recognised-sponsor employers",
      firstStep: "Ask contacts who has sponsored internationals recently",
    },
    {
      situation: "Career switcher",
      approach: "Domain communities first; collect role language before mass applying",
      firstStep: "Attend one target-domain meetup and rewrite your 20-second intro",
    },
    {
      situation: "Graduate / early career",
      approach: "Alumni + junior meetups; ask for advice more than referrals at first",
      firstStep: "Prepare two project stories you can discuss casually",
    },
    {
      situation: "Freelance / contract bridge",
      approach: "Network for both employment and project leads; stay clear on model",
      firstStep: "Open Freelancing / contractor guides for positioning clarity",
    },
  ] satisfies ScenarioRow[],
  relatedGuides: [
    {
      label: "Recruitment Agencies Directory",
      href: "/netherlands/services/recruitment-agencies/",
      status: "live",
      description: "Services directory: compare agency provider types, models and fit — not the job-seeker channel how-to.",
    },
    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-channel search strategy: platforms, recruiters, sponsorship and city demand.",
    },
    {
      label: "English Speaking Jobs Netherlands",
      href: ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "English-friendly sectors, cities and language reality checks.",
    },
    {
      label: "Remote Work Netherlands",
      href: REMOTE_WORK_NETHERLANDS_PATH,
      status: "live",
      description: "Remote and hybrid employment norms for Dutch roles.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Events, communities and warm intros beyond agency pipelines.",
    },

    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Platform profile, Open to Work and recruiter messaging tactics.",
    },
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV document warm intros will point to.",
    },
    {
      label: "Cover Letter Netherlands",
      href: COVER_LETTER_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch motivatiebrief norms when portals require a letter.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after networking opens a door.",
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
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "How Dutch teams collaborate — useful context for networking tone.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape outreach and conversations.",
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
      description: "Package components to understand after interviews — not in first hellos.",
    },
  ] satisfies RecruitmentAgenciesNetherlandsLink[],
  relatedGuideReadingOrder: [
    "Build networking habits here, then align LinkedIn platform tactics.",
    "Localise CV (and Cover Letter when required) before warm intros convert.",
    "Open Finding Jobs for multi-channel strategy beyond relationships alone.",
    "Use Interview Tips once intros become screeners; Salary Negotiation after offers.",
  ],
  relatedGuideScenarios: [
    {
      situation: "Strong network, weak documents",
      approach: "Fix CV / LinkedIn consistency before more intro asks",
      firstStep: "Open CV and LinkedIn guides this week",
    },
    {
      situation: "Great LinkedIn, no offline habits",
      approach: "Add one community event and two follow-ups",
      firstStep: "Book a meetup and draft a follow-up template",
    },
    {
      situation: "Portal asks for letter after referral",
      approach: "Use Cover Letter guide; keep networking thank-yous going",
      firstStep: "Draft one employer-specific motivatiebrief",
    },
    {
      situation: "First interview from a warm intro",
      approach: "Switch focus to Interview Tips and workplace culture",
      firstStep: "Prepare examples that match your referred story",
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
      label: "English Speaking Jobs",
      href: ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "English-friendly market lane and language reality checks.",
    },
    {
      label: "Remote Work",
      href: REMOTE_WORK_NETHERLANDS_PATH,
      status: "live",
      description: "Remote and hybrid employment norms.",
    },

    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Platform tactics that complement offline networking.",
    },
    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "The document your intros and applications must match.",
    },
    {
      label: "Working in the Netherlands",
      href: JOBS_HUB_PATH,
      status: "live",
      description: "Jobs hub for broader work and relocation context.",
    },
  ] satisfies RecruitmentAgenciesNetherlandsLink[],
  serviceCategories: [
    {
      label: "Career coaches",
      href: CAREER_COACHES_PATH,
      status: "live",
      description: "Positioning and outreach coaching discovery — not a ranking of networking coaches.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Move logistics when networking conversations turn into a start date.",
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
    "Career coaches: when positioning or outreach practice needs structured feedback alongside networking.",
    "Relocation services: when city, housing and family timing follow a successful relationship-led process.",
    "Immigration lawyers: when permit routes or recognised-sponsor questions remain unclear.",
    "Tax advisors: when offer packages, rulings or cross-border income need modelling.",
  ],
  serviceScenarios: [
    {
      situation: "Strong experience, weak outreach",
      approach: "Career coach for intro blurbs and event practice — not fake awards",
      firstStep: "Book a scoped review of blurb + one target role",
    },
    {
      situation: "Offer with relocation package",
      approach: "Relocation support plus housing search",
      firstStep: "Confirm what HR covers before signing",
    },
    {
      situation: "Sponsorship-dependent intros",
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
    "Some links may be affiliate or referral links. Professional services may help with specific steps — they do not replace honest outreach, official IND guidance or qualified advice. This page does not rank recruitment agencies, uitzendbureaus or intermediars — and does not guarantee interviews or permits.",
  faq: [
    {
      q: "Do I need a recruitment agency to find a job in the Netherlands?",
      a: "No. Agencies are one channel. Many expats succeed via LinkedIn, direct applications and networking. Agencies help most when your profile matches scarce roles or when employers outsource hiring.",
    },
    {
      q: "Is LinkedIn enough for networking?",
      a: "LinkedIn is important but incomplete. Offline events, communities and warm intros build trust that DMs alone rarely create. Use the LinkedIn guide for platform tactics.",
    },
    {
      q: "How direct should my outreach be?",
      a: "Be clear and polite: context, reason and one ask. Dutch professionals often prefer that over long small-talk openings. See Dutch Directness at Work for deeper norms.",
    },
    {
      q: "Do I need Dutch to network?",
      a: "English works in many international circles. For Dutch-language teams, basic Dutch helps socially — but honesty about language level matters more than overclaiming.",
    },
    {
      q: "How do I ask for an introduction?",
      a: "Send a short forwardable blurb, name the target role or company when possible and offer an easy out. Make it simple for your contact to help.",
    },
    {
      q: "How soon should I follow up after an event?",
      a: "Within about 48 hours while the conversation is fresh. Keep the note short and specific.",
    },
    {
      q: "Should I mention visa sponsorship when networking?",
      a: "Yes — briefly and honestly when relevant. Do not imply permit certainty. Confirm IND rules separately.",
    },
    {
      q: "Are paid networking events worth it?",
      a: "Sometimes — if speakers and attendees match your target roles. Prefer recurring free or low-cost meetups first; expensive events are not automatically better.",
    },
  ],
  faqNextSteps: [
    "Shortlist two communities and one event.",
    "Rewrite your forwardable intro blurb.",
    "Send two follow-ups from recent conversations this week.",
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
    "Employer and community organisers — final authority on event and referral processes.",
  ],
  exploreNextTips: [
    "Open LinkedIn Netherlands for platform profile and messaging tactics.",
    "Open Finding Jobs for multi-channel strategy beyond relationships.",
    "Open CV Netherlands if the document still needs localisation.",
    "Open Interview Tips when warm intros become screeners.",
  ],
  exploreNextCards: [
    {
      label: "Recruitment Agencies Directory",
      href: "/netherlands/services/recruitment-agencies/",
      status: "live",
      description: "Compare recruitment agency providers as a services directory.",
    },
    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Profile, Open to Work and recruiter messaging on the platform.",
    },
    {
      label: "Finding Jobs Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Channels, recruiters, sponsorship and city demand.",
    },
    {
      label: "English Speaking Jobs Netherlands",
      href: ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Language and market reality for English-friendly roles.",
    },
    {
      label: "Remote Work Netherlands",
      href: REMOTE_WORK_NETHERLANDS_PATH,
      status: "live",
      description: "Remote and hybrid employment expectations.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Relationship habits beyond recruiter pipelines.",
    },

    {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      status: "live",
      description: "Localise the CV warm intros will point to.",
    },
    {
      label: "Cover Letter Netherlands",
      href: COVER_LETTER_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch motivatiebrief when portals require a letter.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after networking opens a door.",
    },
    {
      label: "Salary Negotiation",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "Evaluate and negotiate Dutch job offers.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape outreach.",
    },
    {
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "Team norms that shape networking tone.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_HUB_PATH,
      status: "live",
      description: "Relocation hub once interviews turn into a move.",
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
      description: "ZZP routes when networking includes contract work.",
    },
    {
      label: "Contractor vs Employee",
      href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
      status: "live",
      description: "Compare models before you position employment vs freelance search.",
    },
  ] satisfies RecruitmentAgenciesNetherlandsLink[],
} as const;

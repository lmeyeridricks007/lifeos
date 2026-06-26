import { Accordion } from "@/components/ui/accordion";
import {
  COMMUNITY_BASICS_NETHERLANDS_PATH,
  DUTCH_DIRECTNESS_AT_WORK_PATH,
  DUTCH_HOLIDAYS_TRADITIONS_PATH,
  DUTCH_SOCIAL_NORMS_PATH,
  DUTCH_WORKPLACE_CULTURE_PATH,
  dutchCulturePage as page,
  FAMILY_LIFE_PATH,
  GETTING_AROUND_PATH,
} from "./dutchCulturePageModel";
import {
  BulletList,
  BulletPanel,
  ChecklistBlock,
  FeatureGrid,
  GuideCrossLink,
  LinkCard,
  MilestoneStatGrid,
  MythCardGrid,
  OrientationFlowBand,
  PremiumGuideSection,
  QuickAnswerBox,
  RegionalCardGrid,
  SectionIntro,
  SectionTable,
  SituationCardGrid,
  TimelineGrid,
  TopicsTable,
  ValueCardGrid,
} from "./DutchCultureViewShared";

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function DutchCultureSections() {
  return (
    <>
      <PremiumGuideSection
        id="intro"
        tipsKey="intro"
        intro={
          <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
            {page.introParagraphs.map((p) => <p key={p}>{p}</p>)}
          </SectionIntro>
        }
        visual={page.visuals.intro}
      >
        <QuickAnswerBox />
        <FeatureGrid items={page.introExpatQuestions} />
        <OrientationFlowBand />
        <div className="grid gap-4 md:grid-cols-2">
          <GuideCrossLink href={DUTCH_SOCIAL_NORMS_PATH} title="Dutch Social Norms" description="Everyday etiquette, greetings and neighbour culture." linkLabel="Open Social Norms" />
          <GuideCrossLink href={DUTCH_WORKPLACE_CULTURE_PATH} title="Dutch Workplace Culture" description="Meetings, feedback and work-life balance." linkLabel="Open Workplace Culture" />
        </div>
      </PremiumGuideSection>

      <PremiumGuideSection
        id="snapshot"
        tipsKey="snapshot"
        intro={
          <SectionIntro eyebrow="At a glance" title="Dutch Culture at a Glance" fullWidth>
            <p>Six orientation signals expats notice first — equality, direct talk, cycling, work-life balance, community and practicality.</p>
            <p>Experiences still vary by city, age and workplace — use this snapshot to pick which deep-dive guide to open next.</p>
          </SectionIntro>
        }
        visual={page.visuals.snapshot}
      >
        <MilestoneStatGrid items={page.snapshotMilestones} />
        <FeatureGrid items={page.snapshotCards} />
        <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="core-values"
        tipsKey="coreValues"
        intro={
          <SectionIntro title="Core Dutch Values" fullWidth>
            <p>Values appear in meetings, neighbourhoods and calendars — not as slogans on walls.</p>
            <p>Each card below pairs a value with a practical example you may see in Dutch workplaces and daily life.</p>
          </SectionIntro>
        }
        visual={page.visuals.coreValues}
      >
        <ValueCardGrid items={page.coreValues} />
        <ChecklistBlock title="Values in practice" items={page.coreValuesTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="daily-life"
        tipsKey="dailyLife"
        intro={
          <SectionIntro title="What Everyday Life Looks Like" fullWidth>
            <p>Daily routines blend work, family, cycling and planned social time — calendars structure much of the week.</p>
            <p>Thursday shopping peaks, Saturday sport and Sunday quieter residential pace are common patterns nationwide.</p>
          </SectionIntro>
        }
        visual={page.visuals.dailyLife}
      >
        <TopicsTable rows={page.dailyLifeTopics} />
        <ChecklistBlock title="Daily life tips" items={page.dailyLifeTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="social-norms"
        tipsKey="socialNorms"
        intro={
          <SectionIntro title="Social Norms Overview" fullWidth>
            <p>Brief orientation on greetings, punctuality, neighbours and paying — etiquette detail lives in the Social Norms guide.</p>
            <p>Observe your building and workplace first; norms shift between cities, generations and international teams.</p>
          </SectionIntro>
        }
        visual={page.visuals.socialNorms}
      >
        <SectionTable
          title="Everyday situations expats notice"
          description="Common settings where unwritten rules show up — open the full guide for birthdays, visiting and transport etiquette."
          rows={page.socialNormsExamples.map((row) => ({
            setting: row.setting,
            norm: row.norm,
            expatTip: row.expatTip,
          }))}
          columns={[
            { key: "setting", label: "Situation" },
            { key: "norm", label: "Typical norm" },
            { key: "expatTip", label: "Expat tip" },
          ]}
        />
        <BulletList items={page.socialNormsSummary} />
        <GuideCrossLink href={DUTCH_SOCIAL_NORMS_PATH} title="Dutch Social Norms" description="Greetings, birthdays, neighbours, punctuality and visiting customs." linkLabel="Read the full guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="communication"
        tipsKey="communication"
        intro={
          <SectionIntro title="Communication Style" fullWidth>
            <p>Directness prioritises clarity — feedback, debate and questions are often issue-focused rather than personal.</p>
            <p>When tone feels sharp, ask for examples and next steps before assuming hostility.</p>
          </SectionIntro>
        }
        visual={page.visuals.communication}
      >
        <TopicsTable rows={page.communicationTopics} />
        <SituationCardGrid items={page.communicationScenarios} />
        <GuideCrossLink href={DUTCH_DIRECTNESS_AT_WORK_PATH} title="Dutch Directness at Work" description="Professional feedback, meetings and adaptation tips." linkLabel="Open directness guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="work-culture"
        tipsKey="workCulture"
        intro={
          <SectionIntro title="Dutch Work Culture" fullWidth>
            <p>Flat dialogue, structured meetings and explicit work-life boundaries are common — sector and employer still matter.</p>
            <p>Confirm holiday policy, hybrid rules and who owns decisions even when titles feel informal.</p>
          </SectionIntro>
        }
        visual={page.visuals.workCulture}
      >
        <TopicsTable rows={page.workCultureTopics} />
        <ChecklistBlock title="New job checklist" items={page.workCultureChecklist} columns={2} />
        <SituationCardGrid items={page.workCultureScenarios} />
        <GuideCrossLink href={DUTCH_WORKPLACE_CULTURE_PATH} title="Dutch Workplace Culture" description="Hierarchy, meetings, hybrid work and sector differences." linkLabel="Open workplace guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="family-life"
        tipsKey="familyLife"
        intro={
          <SectionIntro title="Family Life" fullWidth>
            <p>School calendars, sports clubs and weekend rhythms shape family logistics more than many expats expect.</p>
            <p>Regional school holiday PDFs and Saturday club matches often drive the household calendar.</p>
          </SectionIntro>
        }
        visual={page.visuals.familyLife}
      >
        <SectionTable
          title="Typical family week rhythm"
          description="Patterns vary by school and club — sync schedules early after relocation."
          rows={page.familyWeeklyRhythm.map((row) => ({
            day: row.day,
            rhythm: row.rhythm,
            note: row.note,
          }))}
          columns={[
            { key: "day", label: "When" },
            { key: "rhythm", label: "What happens" },
            { key: "note", label: "Expat note" },
          ]}
        />
        <TopicsTable rows={page.familyLifeTopics} />
        <ChecklistBlock title="Family settling checklist" items={page.familyLifeChecklist} columns={2} />
        <GuideCrossLink href={FAMILY_LIFE_PATH} title="Family Life in the Netherlands" description="Schools, parenting and family weekends — guide coming soon." linkLabel="Family life guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="food-culture"
        tipsKey="foodCulture"
        intro={
          <SectionIntro title="Dutch Food & Eating Habits" fullWidth>
            <p>Simple lunches, office coffee rituals and seasonal markets reveal real habits better than cheese-and-tulip stereotypes.</p>
            <p>Meal timing and borrel snacks differ from many home countries — markets show regional variety.</p>
          </SectionIntro>
        }
        visual={page.visuals.foodCulture}
      >
        <SectionTable
          title="Meals and daily rhythm"
          description="When and where people eat — useful for office and family planning."
          rows={page.foodCultureTopics.map((row) => ({
            meal: row.topic,
            detail: row.detail,
          }))}
          columns={[
            { key: "meal", label: "Meal / ritual" },
            { key: "detail", label: "What to expect" },
          ]}
        />
        <SectionTable
          title="Foods expats notice first"
          description="Seasonal treats and party snacks — timing matters more than assuming daily habits."
          rows={page.foodCultureFoods.map((food) => ({
            name: food.name,
            season: food.season,
            note: food.note,
          }))}
          columns={[
            { key: "name", label: "Food" },
            { key: "season", label: "When" },
            { key: "note", label: "What to expect" },
          ]}
        />
        <ChecklistBlock title="Food culture tips" items={page.foodCultureTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="holidays"
        tipsKey="holidays"
        intro={
          <SectionIntro title="Holidays & Traditions" fullWidth>
            <p>The annual calendar shapes shop hours, school conversations and neighbourhood events.</p>
            <p>King's Day, Sinterklaas and remembrance traditions catch newcomers by surprise if not planned early.</p>
          </SectionIntro>
        }
        visual={page.visuals.holidays}
      >
        <SectionTable
          title="Key dates expats should know"
          description="Confirm exact dates yearly — Easter, Ascension and Pentecost move; Carnival is regional."
          rows={page.holidaysKeyDates.map((row) => ({
            holiday: row.holiday,
            timing: row.timing,
            expatNote: row.expatNote,
          }))}
          columns={[
            { key: "holiday", label: "Tradition" },
            { key: "timing", label: "When" },
            { key: "expatNote", label: "Expat note" },
          ]}
        />
        <BulletList items={page.holidaysSummary} />
        <GuideCrossLink href={DUTCH_HOLIDAYS_TRADITIONS_PATH} title="Dutch Holidays & Traditions" description="King's Day, Sinterklaas, Christmas, Carnival and public holidays." linkLabel="Open holidays guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="cycling"
        tipsKey="cycling"
        intro={
          <SectionIntro title="Cycling Culture" fullWidth>
            <p>Bikes are everyday transport for students, parents and professionals — infrastructure and etiquette vary by city.</p>
            <p>Rain, lights, locks and lane rules matter for safety and fitting in on commuter routes.</p>
          </SectionIntro>
        }
        visual={page.visuals.cycling}
      >
        <SectionTable
          title="Cycling etiquette by situation"
          description="Rules and habits that reduce friction on busy lanes."
          rows={page.cyclingEtiquetteRows.map((row) => ({
            situation: row.situation,
            rule: row.rule,
            tip: row.tip,
          }))}
          columns={[
            { key: "situation", label: "Situation" },
            { key: "rule", label: "Local habit" },
            { key: "tip", label: "Expat tip" },
          ]}
        />
        <TopicsTable rows={page.cyclingTopics} />
        <ChecklistBlock title="Cycling setup checklist" items={page.cyclingChecklist} columns={2} />
        <GuideCrossLink href={GETTING_AROUND_PATH} title="Getting Around" description="OV, cycling and multimodal commuting in the Netherlands." linkLabel="Open transport guide" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="sports-outdoor"
        tipsKey="sportsOutdoor"
        intro={
          <SectionIntro title="Sports & Outdoor Life" fullWidth>
            <p>Clubs and outdoor activities are common social routes — especially for families and weekend rhythm.</p>
            <p>One full season in a vereniging often builds more connection than occasional networking events.</p>
          </SectionIntro>
        }
        visual={page.visuals.sportsOutdoor}
      >
        <FeatureGrid items={page.sportsClubRoutes} />
        <TopicsTable rows={page.sportsOutdoorTopics} />
        <ChecklistBlock title="Get moving locally" items={page.sportsOutdoorTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="community-life"
        tipsKey="communityLife"
        intro={
          <SectionIntro title="Community Life" fullWidth>
            <p>Neighbours, associations and volunteering accelerate belonging when you show up repeatedly.</p>
            <p>Street events, clubs and gemeente listings offer low-pressure entry points for newcomers.</p>
          </SectionIntro>
        }
        visual={page.visuals.communityLife}
      >
        <TopicsTable rows={page.communityTopics} />
        <ChecklistBlock title="Community integration checklist" items={page.communityChecklist} columns={2} />
        <SituationCardGrid items={page.communityScenarioCards} />
        <GuideCrossLink href={COMMUNITY_BASICS_NETHERLANDS_PATH} title="Community Basics" description="Friends, neighbours, clubs and integration routes." linkLabel="Open Community Basics" />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="regional-differences"
        tipsKey="regionalDifferences"
        intro={
          <SectionIntro title="The Netherlands Is Not All the Same" fullWidth>
            <p>Regional pace, dialects and traditions differ more than stereotypes suggest — Randstad, south and north feel distinct.</p>
            <p>Visit another province before generalising national culture from one city or workplace.</p>
          </SectionIntro>
        }
        visual={page.visuals.regionalDifferences}
      >
        <SectionTable
          title="Regional comparison at a glance"
          description="Use this table to sanity-check generalisations — local gemeente and city guides add detail."
          rows={page.regionalComparisonRows.map((row) => ({
            region: row.region,
            pace: row.pace,
            highlight: row.highlight,
            expatTip: row.expatTip,
          }))}
          columns={[
            { key: "region", label: "Region" },
            { key: "pace", label: "Pace" },
            { key: "highlight", label: "Traits" },
            { key: "expatTip", label: "Expat tip" },
          ]}
        />
        <RegionalCardGrid items={page.regionalCards} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="integration"
        tipsKey="integration"
        intro={
          <SectionIntro title="Integrating Into Dutch Life" fullWidth>
            <p>Participation and patience beat performing stereotypes — integration is gradual and practical.</p>
            <p>Language basics, one recurring club and neighbour introductions compound over months.</p>
          </SectionIntro>
        }
        visual={page.visuals.integration}
      >
        <ChecklistBlock title="Integration checklist" items={page.integrationChecklist} columns={2} />
        <SituationCardGrid items={page.expatScenarioCards} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="culture-shocks"
        tipsKey="cultureShocks"
        intro={
          <SectionIntro title="Common Culture Shocks" fullWidth>
            <p>Most friction eases once you understand the logic behind the habit — direct talk, planning, bills and admin systems.</p>
            <p>Each card pairs a common shock with a practical response tip.</p>
          </SectionIntro>
        }
        visual={page.visuals.cultureShocks}
      >
        <SituationCardGrid items={page.cultureShockCards} />
        <ChecklistBlock title="When culture shock hits" items={page.cultureShockRecoveryChecklist} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="myths"
        tipsKey="myths"
        intro={
          <SectionIntro title="Myths About Dutch Culture" fullWidth>
            <p>Replace stereotypes with questions about your specific city, workplace and neighbours.</p>
            <p>These myths are common online — reality is more varied and regional.</p>
          </SectionIntro>
        }
        visual={page.visuals.myths}
      >
        <MythCardGrid items={page.myths} />
        <ChecklistBlock title="Reflect before you generalise" items={page.mythsReflectionTips} columns={2} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="timeline"
        tipsKey="timeline"
        intro={
          <SectionIntro title="Dutch Culture Timeline" fullWidth>
            <p>High-level history explains pragmatism, water management and international outlook — not daily etiquette rules.</p>
            <p>See how past eras still echo in planning culture, trade openness and multicultural cities today.</p>
          </SectionIntro>
        }
        visual={page.visuals.timeline}
      >
        <TimelineGrid items={page.timeline} />
        <BulletPanel title="How history shows up today" items={page.timelineTodayLinks} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="faq"
        tipsKey="faq"
        intro={
          <SectionIntro title="Frequently Asked Questions" fullWidth>
            <p>Balanced orientation on friendliness, directness, values, integration and regional variation.</p>
            <p>Confirm specifics with neighbours, employers and gemeente sources when decisions matter.</p>
          </SectionIntro>
        }
        visual={page.visuals.faq}
      >
        <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
        <BulletPanel title="After the FAQ" items={page.faqNextSteps} />
      </PremiumGuideSection>

      <PremiumGuideSection
        id="related-guides"
        tipsKey="relatedGuides"
        intro={
          <SectionIntro title="Related Guides" fullWidth>
            <p>Continue from this hub into etiquette, work, community and holiday guides.</p>
            <p>Follow the reading order below if you are unsure which deep dive to open first.</p>
          </SectionIntro>
        }
        visual={page.visuals.relatedGuides}
      >
        <BulletPanel title="Suggested reading order" items={page.relatedGuidesReadingOrder} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {page.relatedGuides.map((item, index) => (
            <LinkCard key={item.label} item={item} iconIndex={index} />
          ))}
        </div>
      </PremiumGuideSection>

      <PremiumGuideSection
        id="culture-hub"
        tipsKey="cultureHub"
        intro={
          <SectionIntro title={page.cultureHubHeading} fullWidth>
            <p>{page.cultureHubIntro}</p>
            <p>Live guides cover etiquette, work, holidays and community — coming-soon cards show planned cluster depth.</p>
          </SectionIntro>
        }
        visual={page.visuals.cultureHub}
      >
        <BulletPanel title="How to navigate this cluster" items={page.cultureHubTips} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {page.cultureHubCards.map((item, index) => (
            <LinkCard key={item.label} item={item} iconIndex={index} />
          ))}
        </div>
      </PremiumGuideSection>
    </>
  );
}

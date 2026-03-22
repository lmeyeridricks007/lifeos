/**
 * Reusable types for visa pillar pages. Use for Highly Skilled Migrant,
 * EU Blue Card, DAFT, partner/family, student, etc.
 */

export type VisaSeo = {
  title: string;
  description: string;
};

export type VisaKeyFacts = {
  routeType: string;
  sponsorRequirement?: string;
  indFee: string;
  commonUsers: string;
};

export type VisaInvestmentRequirement = {
  label: string;
  amount: string;
  note?: string;
};

export type VisaSalaryThreshold = {
  label: string;
  amountMonthly: string;
  note?: string;
};

export type VisaFees = {
  applicationFee: string;
  note?: string;
};

export type VisaProcessStep = {
  step: number;
  title: string;
  detail?: string;
};

export type VisaDocument = {
  name: string;
  note?: string;
};

export type VisaAlternative = {
  route: string;
  bestFor: string;
  mainDifference: string;
  href?: string;
};

export type VisaService = {
  name: string;
  description: string;
  url: string;
  indicativeCost?: string;
  reason?: string;
  logo?: { src: string; alt: string };
};

export type VisaExampleScenario = {
  title: string;
  summary: string;
  href: string;
  ctaLabel?: string;
};

export type VisaFaqItem = {
  q: string;
  a: string;
};

export type VisaRelatedGuide = {
  label: string;
  href: string;
};

export type VisaRelatedCountryPage = {
  label: string;
  href: string;
};

export type VisaPageData = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  seo: VisaSeo;
  keyFacts: VisaKeyFacts;
  eligibility: string[];
  salaryThresholds?: VisaSalaryThreshold[];
  fees: VisaFees;
  employerRequirements?: string[];
  /** For entrepreneur/DAFT routes: minimum capital investment by business form. */
  investmentRequirements?: VisaInvestmentRequirement[];
  /** For entrepreneur/DAFT routes: business setup and registration requirements. */
  businessSetupRequirements?: string[];
  /** For student route: proof-of-funds / study amounts by education type. */
  studyAmounts?: VisaInvestmentRequirement[];
  /** For student route: role of the educational institution. */
  institutionRequirements?: string[];
  processSteps: VisaProcessStep[];
  documents: VisaDocument[];
  alternatives: VisaAlternative[];
  services: VisaService[];
  faq: VisaFaqItem[];
  relatedGuides: VisaRelatedGuide[];
  relatedCountryPages: VisaRelatedCountryPage[];
  exampleScenarios?: VisaExampleScenario[];
  /** Optional tool CTAs (Document Readiness, Cost Estimator, etc.) */
  toolCtas?: Array<{ key: string; label: string; href: string; description?: string }>;
  /** For partner/family route: income requirement rows. */
  incomeRequirements?: VisaInvestmentRequirement[];
  /** For partner/family route: cost breakdown rows (e.g. adult fee, child fee, MVV). */
  costBreakdown?: Array<{ label: string; amount: string; note?: string }>;
  /** For partner/family route: processing time phases. */
  processingTimePhases?: Array<{ phase: string; duration: string }>;
  /** For partner/family route: work rights summary. */
  workRightsSummary?: string;
  /** For partner/family route: types of permit (cards). */
  typesOfPermit?: Array<{ name: string; description: string }>;
  /** For partner/family route: who can apply (cards). */
  whoCanApplyCards?: Array<{ name: string; description: string }>;
  /** Optional official source links (IND, government). */
  officialSources?: Array<{ label: string; href: string }>;
  /** For partner/family route: general eligibility/requirements list. */
  requirementsBullets?: string[];
}

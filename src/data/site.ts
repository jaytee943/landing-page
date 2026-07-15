export interface Service {
  title: string;
  desc: string;
  meta: string;
  tint: string;
  iconColor: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  unit: string;
  desc: string;
  featured: boolean;
}

export interface SiteConfig {
  businessName: string;
  practitionerName: string;
  credential: string;
  location: string;
  schedulerUrl: string;
  email: string;
  phone: string;
}

/**
 * PLACEHOLDER CONTENT. Copied verbatim from the imported design
 * (claude.ai/design project c37d0a93-1c72-446e-a79f-4f152591265b).
 * "Margaret Aldous" / "Wren & Hollow" / the email, phone, and scheduler
 * link below are fictional example content, not a real business. See
 * NOTES.md before deploying this publicly.
 */
export const siteConfig: SiteConfig = {
  businessName: 'Wren & Hollow',
  practitionerName: 'Margaret Aldous',
  credential: 'LMFT, 12 yrs practice',
  location: 'Asheville, NC',
  schedulerUrl: 'https://calendly.com/example',
  email: 'margaret@wrenandhollow.com',
  phone: '(828) 555-0148',
};

export const services: Service[] = [
  {
    title: 'Individual Therapy',
    desc: 'Weekly or biweekly sessions addressing anxiety, depression, grief, and relationship patterns.',
    meta: '50 min · in-person or virtual',
    tint: '#ffe1d0',
    iconColor: '#c67139',
  },
  {
    title: 'Life Coaching',
    desc: 'Goal-focused sessions for career direction, big decisions, and building sustainable habits.',
    meta: '50 min · virtual friendly',
    tint: '#e1eecc',
    iconColor: '#728157',
  },
  {
    title: 'Single Sessions',
    desc: 'One-off sessions for a specific issue or a second opinion, no ongoing commitment required.',
    meta: '50 min · as needed',
    tint: '#ffc6a5',
    iconColor: '#8c491a',
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Free consult',
    desc: "A 20-minute call to talk through what's bringing you in and see if we're a fit.",
  },
  {
    num: '02',
    title: 'First session',
    desc: 'We slow down, get the full picture, and set a loose direction together.',
  },
  {
    num: '03',
    title: 'Ongoing work',
    desc: 'Regular sessions, paced to you — weekly, biweekly, or as life allows.',
  },
  {
    num: '04',
    title: 'Check-ins',
    desc: 'We revisit goals every few months and adjust the approach as needed.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Single Session',
    price: '$165',
    unit: '/ session',
    desc: "Full 50-minute session, billed per visit. Ideal if you're just starting out.",
    featured: false,
  },
  {
    title: 'Ongoing Care',
    price: '$150',
    unit: '/ session',
    desc: 'Weekly or biweekly commitment, billed monthly. Our most common plan.',
    featured: true,
  },
  {
    title: 'Coaching Package',
    price: '$540',
    unit: '/ 4 sessions',
    desc: 'A focused 4-session coaching arc for a specific goal or transition.',
    featured: false,
  },
];

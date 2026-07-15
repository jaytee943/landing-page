/**
 * Structural / locale-independent data only. All translatable copy
 * (titles, descriptions, labels) lives in src/i18n/messages.json, keyed
 * by the `id` fields below.
 */

export interface Service {
  id: 'therapy' | 'coaching' | 'single';
  tint: string;
  iconColor: string;
}

export interface ProcessStep {
  id: 'consult' | 'first' | 'ongoing' | 'checkins';
  num: string;
}

export interface PricingPlan {
  id: 'single' | 'ongoing' | 'coaching';
  price: string;
  featured: boolean;
}

export interface SiteConfig {
  businessName: string;
  practitionerName: string;
  /** Untranslated professional designation, e.g. "LMFT" — kept separate from the
   * translatable "N yrs practice" phrase (see i18n `hero.yearsPractice`). */
  credentialAbbr: string;
  yearsInPractice: number;
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
  credentialAbbr: 'LMFT',
  yearsInPractice: 12,
  location: 'Asheville, NC',
  schedulerUrl: 'https://calendly.com/example',
  email: 'margaret@wrenandhollow.com',
  phone: '(828) 555-0148',
};

export const services: Service[] = [
  { id: 'therapy', tint: '#ffe1d0', iconColor: '#c67139' },
  { id: 'coaching', tint: '#e1eecc', iconColor: '#728157' },
  { id: 'single', tint: '#ffc6a5', iconColor: '#8c491a' },
];

export const processSteps: ProcessStep[] = [
  { id: 'consult', num: '01' },
  { id: 'first', num: '02' },
  { id: 'ongoing', num: '03' },
  { id: 'checkins', num: '04' },
];

export const pricingPlans: PricingPlan[] = [
  { id: 'single', price: '$165', featured: false },
  { id: 'ongoing', price: '$150', featured: true },
  { id: 'coaching', price: '$540', featured: false },
];

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription?: string;
  icon: string;
}

export const services: Service[] = [
  {
    name: "Asphalt Paving",
    slug: "paving",
    shortDescription: "New asphalt installation for driveways, parking lots, and roadways.",
    longDescription: "Full-service asphalt installation done right the first time. We handle prep, grading, base work, and paving for residential driveways, commercial lots, and private roads.",
    icon: "paving",
  },
  {
    name: "Repair & Patching",
    slug: "repair-patching",
    shortDescription: "Pothole repair, crack filling, and full-depth patching to extend pavement life.",
    longDescription: "From small cracks to full pothole reconstruction, we restore damaged asphalt before it gets worse. Properly patched pavement lasts years longer and looks clean doing it.",
    icon: "wrench",
  },
  {
    name: "Sealcoating",
    slug: "sealcoating",
    shortDescription: "Protective sealcoat application to shield asphalt from UV, water, and oxidation.",
    longDescription: "Sealcoating is the single best thing you can do to extend the life of your asphalt. We apply commercial-grade sealer that protects against sun, rain, oil, and chemicals.",
    icon: "drop",
  },
  {
    name: "Line Striping",
    slug: "striping",
    shortDescription: "Crisp parking lot striping, lane markings, fire lanes, and stencils.",
    longDescription: "Sharp, durable line striping for parking lots, fire lanes, loading zones, and custom stencil work. Fresh paint instantly elevates the look of any property.",
    icon: "roller",
  },
  {
    name: "ADA Upgrades",
    slug: "ada",
    shortDescription: "Handicap stalls, ramps, signage, and full ADA compliance work.",
    longDescription: "We bring lots into ADA compliance — accessible parking stalls, access aisles, ramps, truncated domes, and required signage. Stay compliant and avoid costly violations.",
    icon: "wheelchair",
  },
  {
    name: "Signs, Posts & Bollards",
    slug: "signs",
    shortDescription: "Installation and removal of parking signs, posts, and protective bollards.",
    longDescription: "Parking signs, stop signs, handicap signs, sign posts, and steel bollards — installed, replaced, or removed. We handle the concrete, the hardware, and the cleanup.",
    icon: "sign",
  },
];

export const companyInfo = {
  name: "Polcyn's Paving Co.",
  tagline: "Full Service Asphalt Paving and Maintenance",
  phone: "(760) 880-0189",
  phoneRaw: "7608800189",
  email: "C.Polcyn@yahoo.com",
  address: "Southern California",
  serviceAreas: "San Bernardino, the High Desert, and the Inland Empire",
  hours: {
    weekdays: "Mon – Fri: 7:00 AM – 5:00 PM",
    weekend: "Sat – Sun: 7:00 AM – 12:00 PM",
  },
  // TODO: fill these in once the friend confirms — leave as null to hide in footer/header
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
  },
  // TODO: confirm with friend
  license: null as string | null,
  yearsInBusiness: null as number | null,
};

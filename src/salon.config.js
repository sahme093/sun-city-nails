// ─────────────────────────────────────────────────────────────────────────────
//  SALON SETTINGS
//  Everything specific to one salon lives in this file. Edit the values below,
//  replace the photos in public/img/, and the whole site updates.
//
//  After changing `name`, `seo` or `theme`, restart `npm run dev`
//  so the browser-tab title and icon pick up the change.
// ─────────────────────────────────────────────────────────────────────────────

const salon = {
  // Shown in the header, footer, browser tab and the text message.
  name: 'Sun City Nails',

  // Big headline at the top. `accent` is shown in italics.
  heroTitle: { lead: 'Sun City', accent: 'Nails' },

  // Small line above the headline.
  eyebrow: 'Nail salon · Menifee, CA',

  // One-sentence description under the headline.
  tagline: 'Established nail salon providing professional manicure and pedicure services. Walk-ins welcome.',

  // Short quote beside the hero photos (desktop only). Use a real review line.
  heroQuote: '“My nails have never looked this good.” — Billie S.',

  phone: {
    display: '(951) 679-5428',
    // Same number in international format: + country code, then digits only.
    e164: '+19516795428',
  },

  address: {
    street: '27388 Sun City Blvd, Suite F',
    cityLine: 'Menifee, CA 92586',
    // Shorter version used in the hero facts row.
    short: '27388 Sun City Blvd, Menifee',
  },

  // Exactly 7 days, Monday first. Mark closed days with `closed: true`
  // (the booking form warns customers who pick one).
  hours: [
    { day: 'Monday', time: '9am – 6pm' },
    { day: 'Tuesday', time: '9am – 6pm' },
    { day: 'Wednesday', time: '9am – 6pm' },
    { day: 'Thursday', time: '9am – 6pm' },
    { day: 'Friday', time: '9am – 6pm' },
    { day: 'Saturday', time: '9am – 5pm' },
    { day: 'Sunday', time: 'Closed', closed: true },
  ],

  // One-line summaries used in the hero, footer and mobile "Visit" section.
  hoursSummary: {
    open: 'Mon–Fri 9–6 · Sat 9–5',
    closed: 'Sunday',
  },

  // Browser tab title and Google description.
  seo: {
    title: 'Sun City Nails · Nail Salon in Menifee, CA',
    description:
      'Sun City Nails — established nail salon in Menifee, CA providing professional manicure, pedicure, acrylic, gel, dip powder and waxing services.',
  },

  // Brand colors. `primary` is the dark background; `accent` is buttons, highlights
  // and the logo's nail rays; `sun` is the logo's sun and sparkle.
  theme: {
    primary: '#3d1d3f',
    accent: '#f7a8c4',
    accentHover: '#fbc4d8',
    accentDeep: '#a8366b', // darker accent for small labels on light backgrounds
    sun: '#ffc48f',
  },

  // Photos live in public/img/. Swap the files, or change the paths here.
  images: {
    heroArch: { src: '/img/glitter-stiletto.jpg', alt: 'Glitter stiletto nails done at Sun City Nails' },
    heroSide: { src: '/img/mauve-glitter-flower.jpg', alt: 'Mauve nails with a glitter accent and flower art' },
  },

  // Optional `position` on an item picks which part of a wide photo stays in frame.
  gallery: {
    note: 'Gel, acrylic, chrome and hand-painted art from our tables.',
    items: [
      { src: '/img/pastel-swirl.jpg', label: 'Pastel swirl almonds', position: '88% 50%' },
      { src: '/img/green-chrome.jpg', label: 'Emerald chrome' },
      { src: '/img/glitter-stiletto.jpg', label: 'Glitter stilettos' },
      { src: '/img/mauve-glitter-flower.jpg', label: 'Mauve & flower accent' },
      { src: '/img/color-swatches.jpg', label: 'Hundreds of colors' },
    ],
  },

  services: {
    note: "Not sure what to book? Text us a photo of what you have in mind and we'll point you to the right service.",
    groups: [
      {
        name: 'Manicure & pedicure',
        items: [
          'Manicure',
          'Gel manicure',
          'French manicure',
          'Pedicure',
          'Callus removal',
          'Buff shine',
          'Nail cut & filing',
          'Polish change',
          'Gel color change',
          'Polish removal',
        ],
      },
      {
        name: 'Full sets & nail art',
        items: [
          'Acrylic nails',
          'Full set with gel color',
          'Full pink & white powder set',
          'Dip powder',
          'Nail designs',
          'Nail repair',
        ],
      },
      {
        name: 'Waxing',
        items: ['Eyebrow waxing', 'Facial waxing', 'Full arm waxing', 'Full leg waxing', 'Brazilian waxing'],
      },
    ],
  },

  reviews: {
    note: 'From Google reviews',
    // Paste real reviews (with permission). 3–6 works best.
    items: [
      {
        name: 'Billie S.',
        when: '9 months ago',
        text: 'Just had my nails done by Philip at Sun City Nails—amazing! Got a full set, right on time, and my nails have never looked this good. He’s fast, precise, and really knows his stuff. Made the whole appointment easy and actually enjoyable. Definitely going back.',
      },
      {
        name: 'Jackie C.',
        when: '2 months ago',
        text: 'Cute, they were sweet and nailed it lol. I showed him what I wanted and he added his twist and I love them.',
      },
      {
        name: 'Mercedes F.',
        when: '6 months ago',
        text: 'I have been going there for quite some time and very pleased with the work they do. I always ask for Phillip because he does a great job and is gentle and polite. I recommend him in the shop highly.',
      },
      {
        name: 'Lorraine A.',
        when: '8 months ago',
        text: 'I was a walk in for a fill. They did a great job. I would come back.',
      },
      {
        name: 'Nikki A.',
        when: '3 years ago',
        text: 'This was my 1st time and I love it. My nails came out as expected. It was quick and everyone there was so nice. I called to see if I needed to make an appt and they said come in so I did. Thank you to my new nail technician, she was so sweet.',
      },
    ],
  },

  booking: {
    notesPlaceholder: 'e.g. Gel fill, almond shape, pastel swirl design like the photo',
  },
};

export default salon;

// ── Derived values (no need to edit) ─────────────────────────────────────────
export const mapsUrl =
  'https://maps.google.com/?q=' +
  encodeURIComponent(`${salon.address.street} ${salon.address.cityLine}`).replace(/%20/g, '+');

export const serviceOptions = ['Not sure yet', ...salon.services.groups.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];

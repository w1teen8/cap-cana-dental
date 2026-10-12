import type { IconKey } from "@/components/icons";

const phone = "(555) 420-7788";

export const en = {
  lang: "en" as "en" | "es",
  langName: "English",

  clinic: {
    name: "Cap Cana Dental Clinic",
    short: "Cap Cana",
    byline: "By Dr. George Hernández",
    tagline: "Gentle, Modern Family Dentistry",
    description:
      "Calm, modern dental care for the whole family. Clear prices, direct insurance billing, same-day emergencies and online booking.",
    phone,
    phoneHref: "tel:+15554207788",
    email: "hello@havendental.care",
    address: "88 Harbour Street, Suite 2",
    addressShort: "88 Harbour Street",
    hours: "Mon–Fri 8–6 · Sat 9–2",
    footerBlurb:
      "Gentle, modern dentistry for the whole family. Accepting new patients.",
    copyright: "© 2026 Cap Cana Dental Clinic. All rights reserved.",
    footerNote: "Same-day emergency appointments available",
  },

  nav: [
    { label: "Treatments", href: "/treatments" },
    { label: "About", href: "/about" },
    { label: "Patients", href: "/patients" },
    { label: "Contact", href: "/book" },
  ],

  ui: {
    book: "Book Appointment",
    ourTreatments: "Our Treatments",
    allTreatments: "All Treatments",
    aboutUs: "About Us",
    claimOffer: "Claim Offer",
    call: "Call",
    bookThis: "Book This Treatment",
    backToTreatments: "All treatments",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Language",
    home: "Home",
  },

  home: {
    badge: "Accepting new patients",
    title: "Gentle dentistry, without the nerves.",
    lead: "Modern, unhurried dental care for the whole family — with clear prices, direct insurance billing and a team that actually listens.",
    rating: "4.9 from 520+ Google reviews",
    heroAlt: "Smiling patient",
    cardTitle: "Same-day emergency care",
    cardBody: "Call before 11am, seen today",
    info: [
      { icon: "clock", label: "Open today", value: "8:00am – 6:00pm" },
      { icon: "phone", label: "Call us", value: phone },
      { icon: "pin", label: "Find us", value: "88 Harbour Street" },
      { icon: "shield", label: "Insurance", value: "Direct billing to most plans" },
    ] as { icon: IconKey; label: string; value: string }[],
    treatmentsEyebrow: "Treatments",
    treatmentsTitle: ["Everything your smile", "needs, under one roof."],
    whyEyebrow: "Why Cap Cana",
    whyTitle: "A calmer kind of dental visit.",
    whyAlt: "Treatment room at the clinic",
    why: [
      {
        icon: "heart",
        title: "Gentle by design",
        body: "Unhurried appointments, numbing that works, and breaks whenever you need them.",
      },
      {
        icon: "clock",
        title: "Same-day emergencies",
        body: "In pain? Call before 11am and we’ll see you today.",
      },
      {
        icon: "scan",
        title: "Modern technology",
        body: "Low-dose digital x-rays and 3D scans — no goopy impressions.",
      },
      {
        icon: "chat",
        title: "Clear, fair pricing",
        body: "Costs explained up front, direct billing and 0% payment plans.",
      },
    ] as { icon: IconKey; title: string; body: string }[],
    offerEyebrow: "New patient special",
    offerPrice: "$99",
    offerWas: "usually $260",
    offerBody:
      "Comprehensive exam, digital x-rays and a gentle hygiene clean for new patients without insurance.",
    teamEyebrow: "Meet the team",
    teamTitle: "Friendly faces, expert hands.",
    reviewsEyebrow: "Patient reviews",
    reviewsTitle: ["Nervous patients", "welcome. Just ask them."],
    faqEyebrow: "FAQ",
    faqTitle: ["Good questions,", "honest answers."],
    faqLead:
      "Still wondering about something? Give us a call — we’re happy to chat.",
    ctaTitle: "Your calmest dental visit starts here.",
    ctaLead:
      "Book online in under two minutes, or call and speak to a real person.",
  },

  treatments: [
    {
      slug: "check-ups-cleaning",
      category: "Preventive",
      title: "Check-ups & Cleaning",
      excerpt:
        "Thorough exams, gentle hygiene cleans and digital x-rays to keep your smile healthy for life.",
      from: "From $129",
      duration: "60 min",
      image: "/img/treatment-check-ups-cleaning.jpg",
    },
    {
      slug: "teeth-whitening",
      category: "Cosmetic",
      title: "Teeth Whitening",
      excerpt:
        "Professional in-chair and take-home whitening for a brighter smile — safely, and without the sensitivity.",
      from: "From $349",
      duration: "90 min",
      image: "/img/treatment-teeth-whitening.jpg",
    },
    {
      slug: "clear-aligners",
      category: "Orthodontic",
      title: "Clear Aligners",
      excerpt:
        "Straighten your teeth discreetly with custom clear aligners and regular check-ins with our team.",
      from: "From $3,900",
      duration: "6–18 months",
      image: "/img/treatment-clear-aligners.jpg",
    },
    {
      slug: "dental-implants",
      category: "Restorative",
      title: "Dental Implants",
      excerpt:
        "Natural-looking, permanent replacements for missing teeth, planned with 3D imaging.",
      from: "From $2,800",
      duration: "2–3 visits",
      image: "/img/treatment-dental-implants.jpg",
    },
    {
      slug: "childrens-dentistry",
      category: "Family",
      title: "Children’s Dentistry",
      excerpt:
        "Fun, friendly visits that help little ones build healthy habits — and actually enjoy the dentist.",
      from: "From $89",
      duration: "30 min",
      image: "/img/treatment-childrens-dentistry.jpg",
    },
    {
      slug: "emergency-care",
      category: "Urgent",
      title: "Emergency Care",
      excerpt:
        "Toothache, chipped tooth or lost filling? Same-day appointments to get you out of pain fast.",
      from: "From $149",
      duration: "Same day",
      image: "/img/treatment-emergency-care.jpg",
    },
  ],

  team: [
    {
      name: "Dr. Amelia Hart",
      role: "Principal Dentist",
      credential: "DDS, University of Toronto",
      photo: "/img/team-amelia-hart.jpg",
    },
    {
      name: "Dr. Marcus Lee",
      role: "Implant & Restorative Dentist",
      credential: "DMD, Fellow ICOI",
      photo: "/img/team-marcus-lee.jpg",
    },
    {
      name: "Dr. Samuel Price",
      role: "Family & Children’s Dentist",
      credential: "DDS, Paediatric Certificate",
      photo: "/img/team-samuel-price.jpg",
    },
  ],

  reviews: [
    {
      quote:
        "I’ve been nervous about dentists my whole life. The team at Cap Cana explained everything, checked in constantly and made it genuinely painless.",
      name: "Hannah W.",
      context: "Check-up & cleaning",
    },
    {
      quote:
        "Booked online on a Sunday night, seen first thing Monday for a cracked tooth. Calm, quick and really kind.",
      name: "James O.",
      context: "Emergency care",
    },
    {
      quote: "Our kids actually ask when they’re going back. That says it all.",
      name: "Leah & family",
      context: "Children’s dentistry",
    },
    {
      quote:
        "My aligners were done three months early and I can’t stop smiling. Worth every penny.",
      name: "Tom R.",
      context: "Clear aligners",
    },
  ],

  faq: [
    {
      q: "Are you accepting new patients?",
      a: "Yes! We welcome new patients of all ages. You can book online in under two minutes or give us a call.",
    },
    {
      q: "Do you bill my insurance directly?",
      a: "We bill most major insurers directly, so you only pay any portion your plan doesn’t cover. We’ll check your coverage before treatment.",
    },
    {
      q: "I’m really nervous. Can you help?",
      a: "Absolutely — most of our patients are. We go at your pace, explain everything first, and offer headphones, blankets and sedation options.",
    },
    {
      q: "What if I have a dental emergency?",
      a: "Call us before 11am on a weekday and we’ll do our best to see you the same day.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes. Interest-free payment plans are available for treatments over $500.",
    },
  ],

  footer: {
    treatmentsTitle: "Treatments",
    treatments: [
      { label: "General Dentistry", href: "/treatments/check-ups-cleaning" },
      { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
      { label: "Clear Aligners", href: "/treatments/clear-aligners" },
      { label: "Dental Implants", href: "/treatments/dental-implants" },
    ],
    clinicTitle: "Clinic",
    clinic: [
      { label: "About Us", href: "/about" },
      { label: "New Patients", href: "/patients" },
      { label: "Insurance & Pricing", href: "/patients" },
      { label: "Book Online", href: "/book" },
    ],
    visitTitle: "Visit",
  },

  treatmentsPage: {
    metaTitle: "Treatments",
    eyebrow: "Treatments",
    title: "Care for every smile.",
    lead: "From routine check-ups to complete smile makeovers — all with clear prices and the same gentle approach.",
  },

  detail: {
    expectTitle: "What to expect",
    intro: (title: string) =>
      `Your ${title.toLowerCase()} appointment starts with a relaxed chat about your goals and any worries you have. We’ll explain every step before we begin, and you can raise a hand to pause at any time.`,
    blocks: [
      {
        title: "Your comfort comes first",
        body: "Noise-cancelling headphones, warm blankets and a ceiling TV are all on offer. If you feel anxious, let us know — we’ll go at your pace.",
      },
      {
        title: "Costs & insurance",
        body: "You’ll get a clear treatment plan with costs before anything starts. We bill most insurers directly and offer interest-free payment plans.",
      },
    ],
  },

  aboutPage: {
    metaTitle: "About",
    eyebrow: "About Cap Cana",
    title: "Dentistry that feels different.",
    lead: "We opened Cap Cana in 2016 with one simple idea: a trip to the dentist should feel calm, clear and kind.",
    imageAlt: "Treatment chair at the clinic",
    storyTitle: "Built for people who don’t love the dentist.",
    story: [
      "Dr. Amelia Hart spent years watching patients grip the armrests. So she designed Cap Cana differently: longer appointments, softer rooms, honest conversations and no surprise bills.",
      "Today our team of 14 cares for thousands of families across the city — and we still block out extra time for anyone who tells us they’re nervous.",
    ],
    stats: [
      { value: "4,800+", label: "Happy patients" },
      { value: "10 yrs", label: "Caring for the city" },
      { value: "4.9 ★", label: "Google rating" },
      { value: "Same day", label: "Emergency care" },
    ],
  },

  patientsPage: {
    metaTitle: "Patients",
    eyebrow: "For patients",
    title: "Everything you need before your visit.",
    lead: "What to expect at your first appointment, how insurance works, and what things cost — no fine print.",
    stepsEyebrow: "Your first visit",
    stepsTitle: "Here’s how it works.",
    stepLabel: "Step",
    steps: [
      {
        icon: "calendar",
        title: "Book online",
        body: "Pick a time that suits you — it takes under two minutes.",
      },
      {
        icon: "clipboard",
        title: "Quick forms",
        body: "Fill in your health history online before you arrive.",
      },
      {
        icon: "cup",
        title: "Relax & meet us",
        body: "A chat about your goals and worries, then a gentle exam.",
      },
      {
        icon: "smile",
        title: "Your plan",
        body: "Clear next steps and costs — no pressure, ever.",
      },
    ] as { icon: IconKey; title: string; body: string }[],
    pricingEyebrow: "Insurance & pricing",
    pricingTitle: "Clear prices. Direct billing.",
    pricingLead:
      "We bill most major insurers directly and offer interest-free payment plans on treatments over $500. Uninsured? Ask about our membership plan.",
    prices: [
      { item: "New patient exam, x-rays & clean", price: "$99" },
      { item: "Check-up & hygiene clean", price: "$129" },
      { item: "Tooth-coloured filling", price: "from $180" },
      { item: "Professional whitening", price: "from $349" },
      { item: "Emergency appointment", price: "from $149" },
      { item: "Single dental implant", price: "from $2,800" },
      { item: "Clear aligners (full treatment)", price: "from $3,900" },
    ],
  },

  bookPage: {
    metaTitle: "Book an Appointment",
    eyebrow: "Book an appointment",
    title: "Let’s find a time that suits you.",
    lead: "Send a request and we’ll confirm your appointment by phone or email within a few business hours. In pain right now? Call us.",
    contacts: { call: "Call us", email: "Email", visit: "Visit", hours: "Hours" },
    form: {
      name: "Full name",
      namePh: "Your name",
      phone: "Phone",
      phonePh: "(555) 000-0000",
      email: "Email",
      emailPh: "you@email.com",
      patientType: "Patient type",
      patientTypes: ["New patient", "Existing patient"],
      reason: "Reason for visit",
      reasons: [
        "Check-up & cleaning",
        "Teeth whitening",
        "Clear aligners",
        "Dental implants",
        "Children’s dentistry",
        "Emergency / pain",
        "Something else",
      ],
      date: "Preferred date",
      time: "Preferred time",
      times: [
        "Morning (8–12)",
        "Afternoon (12–4)",
        "Evening (4–6)",
        "Saturday morning",
      ],
      notes: "Anything we should know?",
      notesPh: "Insurance provider, worries, accessibility needs…",
      submit: "Request Appointment",
      note: "This form isn’t for emergencies — please call us.",
      sentTitle: "Request received.",
      sentBody:
        "Thanks — we’ll confirm your appointment by phone or email within a few business hours.",
      sentAgain: "Send another request",
    },
  },
};

export type Content = typeof en;

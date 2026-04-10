export const servicesData = [
  {
    id: 'acne-blemish-control',
    title: 'Acne & Blemish Control',
    slug: 'acne-blemish-control',
    icon: 'ph:sun-dim-light',
    menuDescription: 'Extractions, Chemical Peels, LED Therapy',
    shortDescription: 'Advanced clinical solutions to clear breakouts and restore skin clarity.',
    fullDescription: 'Our comprehensive acne protocols combine medical-grade extractions, targeted chemical peels, and customized home-care regimens to address the root cause of breakouts. We do not just treat the surface; we restore your skin barrier for long-term clarity and confidence.',
    image: '/images/home/services/s1.webp', 
    heroImage: '/images/home/services/hero-acne.webp',
    stats: [
      { value: "45 Min", label: "Duration" },
      { value: "£150", label: "Starting From" },
      { value: "None", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Skin Audit", desc: "A comprehensive digital analysis of your pore health, sebum levels, and active inflammation." },
      { step: "02", title: "Targeted Extraction", desc: "Medical-grade clearing of congested pores to immediately reduce active breakouts." },
      { step: "03", title: "Calming Therapy", desc: "Application of anti-inflammatory serums and blue-light therapy to kill acne-causing bacteria." }
    ],
    whoIsItFor: [
      "Adults struggling with hormonal acne",
      "Teens with persistent breakouts",
      "Patients with severe maskne or congestion",
      "Those looking to fade post-acne marks"
    ],
    treatmentAreas: ["Face", "Neck", "Chest", "Back"],
  },
  {
    id: 'anti-aging-treatments',
    title: 'Anti-Aging Treatments',
    slug: 'anti-aging-treatments',
    icon: 'ph:sparkle-light',
    menuDescription: 'Botox, Dermal Fillers, Microneedling',
    shortDescription: 'Bespoke injectables and collagen-stimulating therapies for a youthful glow.',
    fullDescription: 'Turn back the clock with our highly precise anti-aging treatments. From neuromodulators to dermal fillers and advanced microneedling, our board-certified specialists focus on natural, undetectable enhancements that restore volume and smooth fine lines.',
    image: '/images/home/services/s2.webp',
    heroImage: '/images/home/services/hero-anti-aging.webp',
    stats: [
      { value: "30 Min", label: "Duration" },
      { value: "£250", label: "Starting From" },
      { value: "1-2 Days", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Facial Mapping", desc: "A detailed analysis of your facial anatomy and volume loss." },
      { step: "02", title: "Precision Treatment", desc: "Targeted delivery of FDA-approved injectables or collagen stimulators." },
      { step: "03", title: "Refinement", desc: "A follow-up review to ensure optimal, natural-looking results." }
    ],
    whoIsItFor: [
      "Individuals experiencing volume loss",
      "Those with dynamic wrinkles and fine lines",
      "Patients seeking preventative aging treatments"
    ],
    treatmentAreas: ["Forehead", "Under Eyes", "Cheeks", "Jawline", "Lips"],
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    slug: 'laser-hair-removal',
    icon: 'ph:waves-light',
    menuDescription: 'Full Body, Facial Hair, Nd:YAG Lasers',
    shortDescription: 'Painless, permanent hair reduction using state-of-the-art laser technology.',
    fullDescription: 'Experience the freedom of smooth skin with our advanced laser hair removal. Safe for all skin types, our medical-grade lasers target the hair follicle with precision, offering a virtually painless experience and permanent reduction over a customized session plan.',
    image: '/images/home/services/s3.webp',
    heroImage: '/images/home/services/hero-laser.webp',
    stats: [
      { value: "20-60 Min", label: "Duration" },
      { value: "£80", label: "Starting From" },
      { value: "None", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Patch Test", desc: "Ensuring the laser settings are perfectly calibrated for your skin tone." },
      { step: "02", title: "Active Session", desc: "Quick, efficient targeting of active hair follicles with advanced cooling." },
      { step: "03", title: "Maintenance", desc: "Scheduled intervals to catch hair in all growth phases." }
    ],
    whoIsItFor: [
      "Anyone tired of shaving or waxing",
      "Patients prone to ingrown hairs",
      "All skin tones (using specialized Nd:YAG and Alexandrite lasers)"
    ],
    treatmentAreas: ["Legs", "Underarms", "Bikini/Brazilian", "Face", "Back"],
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    slug: 'skin-rejuvenation',
    icon: 'ph:drop-light',
    menuDescription: 'HydraFacial, IPL Therapy, Resurfacing',
    shortDescription: 'Revitalize dull, tired skin with our signature glow-inducing treatments.',
    fullDescription: 'Bring your skin back to life. Our rejuvenation therapies include advanced IPL (Intense Pulsed Light), HydraFacials, and customized resurfacing treatments designed to lift away dead cells, reduce redness, and leave you with a luminous, glass-skin finish.',
    image: '/images/home/services/s4.webp',
    heroImage: '/images/home/services/hero-rejuvenation.webp',
    stats: [
      { value: "60 Min", label: "Duration" },
      { value: "£180", label: "Starting From" },
      { value: "1 Day", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Deep Cleanse", desc: "Removing surface impurities and opening the pores." },
      { step: "02", title: "Resurfacing", desc: "Gentle exfoliation or light therapy to promote cellular turnover." },
      { step: "03", title: "Infusion", desc: "Bathing the fresh skin in custom, medical-grade hydrating serums." }
    ],
    whoIsItFor: [
      "Patients with dull or uneven skin tone",
      "Those looking for a pre-event glow",
      "Individuals with mild sun damage or pigmentation"
    ],
    treatmentAreas: ["Face", "Neck", "Décolletage", "Hands"],
  },
  {
    id: 'hair-restoration',
    title: 'Hair Restoration',
    slug: 'hair-restoration',
    icon: 'ph:flower-lotus-light',
    menuDescription: 'PRP Therapy, Scalp Micro-needling',
    shortDescription: 'Clinically proven therapies to stimulate follicles and promote thicker, fuller hair.',
    fullDescription: 'Tackle hair thinning at the source. We utilize the latest in regenerative medicine, including PRP (Platelet-Rich Plasma) therapy and targeted topical treatments, to awaken dormant follicles, increase hair density, and improve overall scalp health.',
    image: '/images/home/services/s5.webp',
    heroImage: '/images/home/services/hero-hair.webp',
    stats: [
      { value: "45 Min", label: "Duration" },
      { value: "£300", label: "Starting From" },
      { value: "Minimal", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Scalp Analysis", desc: "Microscopic evaluation of follicular density and scalp health." },
      { step: "02", title: "Preparation", desc: "Extracting and purifying platelet-rich plasma from your own blood." },
      { step: "03", title: "Micro-Injection", desc: "Delivering the growth factors directly into the dormant follicles." }
    ],
    whoIsItFor: [
      "Men and women experiencing early hair thinning",
      "Patients with postpartum hair loss",
      "Those looking to improve overall hair density"
    ],
    treatmentAreas: ["Scalp", "Hairline", "Crown"],
  },
  {
    id: 'medical-dermatology',
    title: 'Medical Dermatology',
    slug: 'medical-dermatology',
    icon: 'ph:stethoscope-light',
    menuDescription: 'Eczema, Rosacea, Psoriasis relief',
    shortDescription: 'Expert diagnosis and treatment for complex clinical skin conditions.',
    fullDescription: 'Skin health is healthcare. Our expert dermatologists provide comprehensive screenings and targeted treatments for medical conditions including rosacea, eczema, psoriasis, and precise mole mapping for skin cancer prevention.',
    image: '/images/home/services/s6.webp',
    heroImage: '/images/home/services/hero-medical.webp',
    stats: [
      { value: "30 Min", label: "Duration" },
      { value: "£120", label: "Starting From" },
      { value: "Varies", label: "Recovery" }
    ],
    process: [
      { step: "01", title: "Clinical Exam", desc: "A thorough head-to-toe examination by a board-certified dermatologist." },
      { step: "02", title: "Diagnosis", desc: "Accurate identification of chronic or acute skin conditions." },
      { step: "03", title: "Treatment Plan", desc: "A customized prescription or therapeutic approach for long-term relief." }
    ],
    whoIsItFor: [
      "Patients needing annual skin cancer screenings",
      "Individuals suffering from chronic eczema or psoriasis",
      "Those seeking relief from severe rosacea"
    ],
    treatmentAreas: ["Full Body", "Face", "Localized Flare-ups"],
  }
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}
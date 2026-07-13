import { I } from "../components/Icon";

export type ServiceItem = { name: string; desc: string };
export type ServiceCategory = { icon: string; title: string; blurb: string; slug: string; intro: string; items: ServiceItem[] };

export const serviceCategories: ServiceCategory[] = [
  {
    icon: I.syringe,
    title: "IV Therapy (Premium Drips)",
    slug: "iv-therapy",
    blurb: "Clinically formulated IV infusions for wellness, recovery and vitality.",
    intro: "Our IV therapy drips deliver vitamins, minerals and hydration directly into the bloodstream for faster absorption and noticeable results. Whether you need an immune boost, recovery support or a glowing complexion, each drip is prepared under strict clinical standards.",
    items: [
      { name: "Vitamin Drip (Cocktail)", desc: "A powerful blend of essential vitamins delivered directly into the bloodstream." },
      { name: "Jet Fuel", desc: "Premium formula with Vitamin C, Vitamin B Complex and Collagen for energy, skin health and revitalisation." },
      { name: "Neurobion (Vitamin C)", desc: "Targeted infusion supporting nerve health, immunity and overall wellbeing." },
      { name: "Glow Drip", desc: "Skin-brightening formula enriched with glutathione and antioxidants for a radiant complexion." },
      { name: "Immune Booster Drip", desc: "High-dose vitamin and mineral infusion designed to fortify the immune system." },
      { name: "Biotin / Vitamin B7", desc: "Promotes growth and strengthens hair, nails and skin metabolism from within." },
      { name: "Weight Loss Drip", desc: "Metabolic-boosting infusion that enhances fat burning and energy." },
      { name: "Sports Endurance & Recovery", desc: "Professional-grade hydration formula to accelerate muscle recovery and optimise performance." },
      { name: "Energy Booster Drip", desc: "Combats fatigue and restores vitality using B vitamins and essential cofactors." },
      { name: "Hangover Booster", desc: "Fast-acting rehydration and detox drip to restore balance." },
    ],
  },
  {
    icon: I.female,
    title: "Reproductive Health",
    slug: "reproductive-health",
    blurb: "Confidential, respectful care across all family planning needs.",
    intro: "We provide a private, judgement-free environment for contraception, sexual health and family planning. Our team explains every option so you can make informed decisions about your body and your future.",
    items: [
      { name: "All Family Planning Services", desc: "Comprehensive contraception counselling and planning." },
      { name: "IUD Insertion & Removal", desc: "Sterile and professional intrauterine device placement and removal." },
      { name: "Implanon Insertion & Removal", desc: "Precision placement and removal of subdermal contraceptive implants." },
      { name: "Morning After Pill", desc: "Emergency contraception paired with professional counselling." },
      { name: "Pregnancy Testing", desc: "Accurate and confidential testing with professional guidance." },
      { name: "Pap Smear (Cervical Screening)", desc: "Private and respectful cervical cancer screenings." },
    ],
  },
  {
    icon: I.baby,
    title: "Maternity & Neonatal Care",
    slug: "maternity-care",
    blurb: "Supporting mothers and babies through every milestone.",
    intro: "From your first antenatal visit to postnatal support and baby immunisations, we walk with you through every stage of motherhood. Our care is gentle, personalised and focused on the health of both mother and child.",
    items: [
      { name: "ANC First Visit & Follow-up", desc: "Comprehensive antenatal care to monitor mother and baby throughout pregnancy." },
      { name: "Birth Options", desc: "Flexible planning for delivery at our centre or an assisted home birth with qualified midwives." },
      { name: "3-Day Postnatal Care", desc: "Dedicated monitoring, support and education for mother and baby over the critical first three days post-birth." },
      { name: "Baby Wellness & Immunizations", desc: "Growth tracking, developmental checks and scheduled childhood immunizations." },
    ],
  },
  {
    icon: I.stethoscope,
    title: "General Healthcare",
    slug: "general-healthcare",
    blurb: "Everyday medical care with continuity you can trust.",
    intro: "Our general consultations cover acute illnesses, chronic disease management, sexual health and preventive screening. We focus on building long-term relationships so your care is consistent and tailored to you.",
    items: [
      { name: "General Consultation", desc: "Medical consultations with flexible options to include or exclude medication." },
      { name: "Follow-up Consultations", desc: "Continuity of care to track medical progress and adjust treatments." },
      { name: "STI Treatment", desc: "Confidential diagnosis and treatment for sexually transmitted infections (medication included)." },
      { name: "HIV Counselling, Testing & Management", desc: "Compassionate testing, counselling and long-term health management plans." },
    ],
  },
  {
    icon: I.clipboard,
    title: "Screenings & Procedures",
    slug: "screenings",
    blurb: "Preventive screening and minor procedures in a sterile setting.",
    intro: "Early detection saves lives. We offer routine health monitoring, facilitated DNA testing and sterile wound care — all performed with attention to accuracy, hygiene and your comfort.",
    items: [
      { name: "Health Monitoring", desc: "Blood Pressure (BP), Glucose (Blood Sugar) and Cholesterol testing." },
      { name: "DNA Testing", desc: "Facilitated DNA testing with professional guidance (laboratory fees are separate)." },
      { name: "Procedures & Wound Care", desc: "Sterile wound dressing, wound care follow-ups and hygienic suture (stitch) removal." },
    ],
  },
];

export const allServiceNames = serviceCategories.flatMap((c) => c.items.map((i) => i.name));

export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import "../site.css";

const CLINIC = {
  name: "Meridian Health Centre",
  tagline: "Compassionate care for every stage of life",
  phone: "083 727 5737",
  phoneHref: "tel:+27837275737",
  whatsapp: "27837275737",
  email: "none",
  address: "Imbuia Crescent, Noordwyk, Midrand",
  hoursMonFri: "07:30 – 18:00",
  hoursSat: "08:00 – 14:00",
  hoursSun: "Closed",
  url: "https://meridianhealth.example",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CLINIC.name} — Trusted Family Doctors & Medical Care` },
      {
        name: "description",
        content:
          "Meridian Health Centre offers IV therapy drips, reproductive & maternity care, general healthcare, screenings and procedures. Book today.",
      },
      {
        name: "keywords",
        content:
          "healthcare centre, IV therapy, vitamin drip, family planning, maternity care, antenatal, HIV testing, health screening, Midrand clinic",
      },
      { property: "og:title", content: `${CLINIC.name} — Trusted Family Doctors` },
      {
        property: "og:description",
        content:
          "Modern, patient-first medical practice offering IV drips, reproductive & maternity care, and general healthcare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${CLINIC.name}` },
      {
        name: "twitter:description",
        content: "Compassionate, professional healthcare for the whole family.",
      },
      { name: "theme-color", content: "#10b1a6" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: CLINIC.name,
          url: CLINIC.url,
          telephone: "+27837275737",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Imbuia Crescent",
            addressLocality: "Noordwyk, Midrand",
            addressCountry: "ZA",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:30",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "14:00",
            },
          ],
          medicalSpecialty: [
            "FamilyPractice",
            "Obstetric",
            "PreventiveMedicine",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------- Small icon set (inline SVG) ---------- */
const Icon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);
const I = {
  heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  stethoscope: "M6 3v6a4 4 0 0 0 8 0V3M10 15a5 5 0 0 0 10 0v-1M20 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
  syringe: "M18 2l4 4M15 5l4 4M11.5 8.5L2 18v4h4l9.5-9.5M15 12l-3-3",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  baby: "M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5M17 21a5 5 0 0 0-10 0M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  female: "M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 12v10M9 19h6",
  clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5v2h6V5",
  check: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  arrowUp: "M12 19V5M5 12l7-7 7 7",
  plus: "M12 5v14M5 12h14",
  whatsapp: "M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.8 1.5C18.6 24 24 18.6 24 12c0-3.2-1.2-6.2-3.5-8.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 22 12c0 5.5-4.5 10-10 10zm5.4-7.5l-2-1c-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5.3-.5c0-.2 0-.4-.1-.5l-.9-2.2c-.2-.5-.4-.4-.5-.4h-.5c-.1 0-.4 0-.6.3-.2.3-.9.8-.9 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.7 4.3 3.8l1.4.6c.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.1z",
  clock: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
};

/* ---------- Data ---------- */
type ServiceItem = { name: string; desc: string };
type ServiceCategory = { icon: string; title: string; blurb: string; items: ServiceItem[] };

const serviceCategories: ServiceCategory[] = [
  {
    icon: I.syringe,
    title: "IV Therapy (Premium Drips)",
    blurb: "Clinically formulated IV infusions for wellness, recovery and vitality.",
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
    blurb: "Confidential, respectful care across all family planning needs.",
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
    blurb: "Supporting mothers and babies through every milestone.",
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
    blurb: "Everyday medical care with continuity you can trust.",
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
    blurb: "Preventive screening and minor procedures in a sterile setting.",
    items: [
      { name: "Health Monitoring", desc: "Blood Pressure (BP), Glucose (Blood Sugar) and Cholesterol testing." },
      { name: "DNA Testing", desc: "Facilitated DNA testing with professional guidance (laboratory fees are separate)." },
      { name: "Procedures & Wound Care", desc: "Sterile wound dressing, wound care follow-ups and hygienic suture (stitch) removal." },
    ],
  },
];

const allServiceNames = serviceCategories.flatMap((c) => c.items.map((i) => i.name));

const faqs = [
  { q: "Do I need to book an appointment?", a: "We recommend booking in advance to secure your preferred time, but walk-ins are welcome during regular hours based on availability." },
  { q: "Which medical aids do you accept?", a: "We accept all major medical aid schemes. Private patients are also welcome with transparent pricing before every consultation." },
  { q: "Do you offer telehealth consultations?", a: "Yes. Virtual consultations are available for follow-ups, script renewals and select conditions. Book online and choose 'Telehealth'." },
  { q: "What should I bring to my first visit?", a: "Please bring a valid ID, your medical aid card (if applicable), a list of current medications and any previous medical records." },
  { q: "Is parking available on site?", a: "Yes, secure covered parking is provided for all patients free of charge." },
];

/* ---------- Page ---------- */
function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className={`hc-loader ${loading ? "" : "hidden"}`} aria-hidden={!loading}>
        <div className="hc-loader-ring" role="progressbar" aria-label="Loading" />
      </div>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Hours />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

/* ---------- Sections ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Hours", "#hours"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="hc-nav">
      <div className="hc-container hc-nav-inner">
        <a href="#top" className="hc-logo" aria-label={CLINIC.name}>
          <span className="hc-logo-mark" aria-hidden="true">
            <Icon d={I.heart} size={18} />
          </span>
          Meridian Health
        </a>
        <nav className="hc-nav-links mobile-hidden" aria-label="Primary">
          {links.map(([l, h]) => (
            <a key={h} href={h}>{l}</a>
          ))}
          <a href="#appointment" className="hc-btn hc-btn-primary hc-nav-cta">
            Book Appointment
          </a>
        </nav>
        <button className="hc-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="hc-nav-mobile">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#appointment" className="hc-btn hc-btn-primary" onClick={() => setOpen(false)}>
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hc-hero" id="top">
      <div className="hc-container hc-hero-grid">
        <div>
          <span className="hc-eyebrow">
            <span className="hc-eyebrow-dot" /> Open today · Accepting new patients
          </span>
          <h1>
            Modern healthcare, <br />
            <span>with heart.</span>
          </h1>
          <p>
            Trusted family doctors delivering personalised, evidence-based care.
            From IV wellness drips to maternity care — Meridian Health is here for
            every stage of your life.
          </p>
          <div className="hc-hero-actions">
            <a href="#appointment" className="hc-btn hc-btn-primary">
              <Icon d={I.plus} size={18} /> Book Appointment
            </a>
            <a href={CLINIC.phoneHref} className="hc-btn hc-btn-ghost">
              <Icon d={I.phone} size={18} /> Call Now
            </a>
          </div>
        </div>
        <div className="hc-hero-visual">
          <div className="hc-hero-panel" aria-hidden="true">
            <div className="hc-hero-panel-inner">
              <div className="hc-hero-badge"><Icon d={I.heart} size={28} /></div>
              <div className="hc-hero-panel-title">Trusted care, every visit</div>
              <div className="hc-hero-panel-sub">IV Therapy · Maternity · Family Medicine</div>
              <div className="hc-hero-chips">
                <span><Icon d={I.syringe} size={14} /> IV Drips</span>
                <span><Icon d={I.baby} size={14} /> Maternity</span>
                <span><Icon d={I.stethoscope} size={14} /> General</span>
              </div>
            </div>
          </div>
          <div className="hc-hero-card">
            <div className="hc-hero-card-icon"><Icon d={I.shield} size={20} /></div>
            <div className="hc-hero-card-text">
              <strong>HPCSA registered practice</strong>
              <span>Safe, ethical, professional care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: I.heart, title: "Our Mission", desc: "To deliver accessible, respectful and evidence-based healthcare that empowers every patient." },
    { icon: I.activity, title: "Our Vision", desc: "A community where preventive medicine and lasting doctor-patient relationships are the norm." },
    { icon: I.check, title: "Why Choose Us", desc: "Same-day appointments, transparent pricing, and doctors who genuinely listen — every visit." },
  ];
  return (
    <section className="hc-section" id="about">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> About Us</span>
          <h2>Care that treats you like a person, not a chart</h2>
          <p>Meridian Health Centre combines modern medicine with the kind of personal attention every patient deserves.</p>
        </Reveal>
        <div className="hc-about-grid">
          {cards.map((c, i) => (
            <Reveal key={i} className="hc-about-card" delay={i * 80}>
              <div className="hc-about-icon"><Icon d={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="hc-section hc-section-alt" id="services">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Our Services</span>
          <h2>Comprehensive care under one roof</h2>
          <p>From premium IV therapy to maternity and general healthcare — everything
            you need in one trusted practice.</p>
        </Reveal>
        <div className="hc-service-cats">
          {serviceCategories.map((cat, i) => (
            <Reveal key={cat.title} className="hc-service-cat" delay={i * 60}>
              <div className="hc-service-cat-head">
                <div className="hc-service-cat-icon"><Icon d={cat.icon} /></div>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.blurb}</p>
                </div>
              </div>
              <ul className="hc-service-list">
                {cat.items.map((it) => (
                  <li key={it.name}>
                    <strong>{it.name}</strong>
                    <span>{it.desc}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const rows = [
    ["Monday – Friday", CLINIC.hoursMonFri, false],
    ["Saturday", CLINIC.hoursSat, false],
    ["Sunday", CLINIC.hoursSun, true],
  ] as const;
  return (
    <section className="hc-section hc-section-alt" id="hours">
      <div className="hc-container hc-hours-wrap">
        <Reveal>
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Opening Hours</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", margin: "14px 0 12px" }}>
            When we're here for you
          </h2>
          <p style={{ color: "var(--hc-muted)", marginBottom: 24 }}>
            Emergency support is available 24/7 by phone. For life-threatening
            emergencies please dial your local emergency number.
          </p>
          <a href={CLINIC.phoneHref} className="hc-btn hc-btn-outline">
            <Icon d={I.phone} size={18} /> {CLINIC.phone}
          </a>
        </Reveal>
        <Reveal className="hc-hours-table" delay={100}>
          {rows.map(([day, time, closed]) => (
            <div className="hc-hours-row" key={day}>
              <strong>{day}</strong>
              <span className={`time ${closed ? "closed" : ""}`}>
                <Icon d={I.clock} size={14} /> &nbsp;{time}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section className="hc-section" id="appointment">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Book Appointment</span>
          <h2>Schedule a visit in under a minute</h2>
          <p>Fill in your details and our team will confirm your appointment shortly.</p>
        </Reveal>
        <Reveal>
          <form
            id="booking-form"
            className="hc-form"
            action="https://formspree.io/f/xykdqrky"
            method="POST"
            noValidate
          >
            <div className="hc-form-grid">
              <div className="hc-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="hc-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="083 727 5737" required />
              </div>
              <div className="hc-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="hc-field">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" required>
                  <option value="">Select a service…</option>
                  {serviceCategories.map((cat) => (
                    <optgroup key={cat.title} label={cat.title}>
                      {cat.items.map((it) => (
                        <option key={it.name} value={it.name}>{it.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="hc-field">
                <label htmlFor="date">Preferred Date</label>
                <input id="date" name="date" type="date" required />
              </div>
              <div className="hc-field">
                <label htmlFor="time">Preferred Time</label>
                <input id="time" name="time" type="time" required />
              </div>
              <div className="hc-field full">
                <label htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" placeholder="Anything we should know before your visit…" />
              </div>
            </div>
            <div className="hc-form-actions">
              <button type="submit" className="hc-btn hc-btn-primary">
                <Icon d={I.check} size={18} /> Request Appointment
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="hc-section" id="faq">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> FAQ</span>
          <h2>Answers to common questions</h2>
        </Reveal>
        <div className="hc-faq">
          {faqs.map((f, idx) => (
            <div className={`hc-faq-item ${open === idx ? "open" : ""}`} key={f.q}>
              <button className="hc-faq-q" onClick={() => setOpen(open === idx ? null : idx)} aria-expanded={open === idx}>
                {f.q}
                <span className="hc-faq-icon"><Icon d={I.plus} size={18} /></span>
              </button>
              <div className="hc-faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="hc-section hc-section-alt" id="contact">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Contact</span>
          <h2>We'd love to hear from you</h2>
          <p>Reach out by phone or WhatsApp — or drop by during opening hours.</p>
        </Reveal>
        <div className="hc-contact-grid">
          <Reveal className="hc-contact-card">
            <div className="hc-contact-item">
              <div className="hc-contact-icon"><Icon d={I.phone} /></div>
              <div><strong>Call us</strong><a href={CLINIC.phoneHref}>{CLINIC.phone}</a></div>
            </div>
            <div className="hc-contact-item">
              <div className="hc-contact-icon"><Icon d={I.mail} /></div>
              <div><strong>Email us</strong><span>{CLINIC.email}</span></div>
            </div>
            <div className="hc-contact-item">
              <div className="hc-contact-icon"><Icon d={I.pin} /></div>
              <div><strong>Visit us</strong><span>{CLINIC.address}</span></div>
            </div>
            <div className="hc-contact-item">
              <div className="hc-contact-icon"><Icon d={I.whatsapp} /></div>
              <div>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with us</a>
              </div>
            </div>
          </Reveal>
          <Reveal className="hc-map" delay={100}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7204455624767!2d28.015!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sImbuia+Crescent%2C+Noordwyk%2C+Midrand!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elegant Healthcare Centre location - Noordwyk, Midrand"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hc-footer">
      <div className="hc-container">
        <div className="hc-footer-grid">
          <div className="hc-footer-brand">
            <div className="hc-logo" style={{ color: "#fff" }}>
              <span className="hc-logo-mark" aria-hidden="true"><Icon d={I.heart} size={18} /></span>
              Meridian Health
            </div>
            <p style={{ marginTop: 16 }}>Compassionate healthcare for every stage of life. Serving our community with modern, patient-first medicine.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#appointment">Book Appointment</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Services</h4>
            {allServiceNames.slice(0, 5).map((n) => <a key={n} href="#services">{n}</a>)}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
            <span style={{ color: "#c5d3e0", display: "block", padding: "5px 0", fontSize: 14 }}>{CLINIC.email}</span>
            <a href="#contact">{CLINIC.address}</a>
          </div>
        </div>
        <div className="hc-footer-bottom">
          <span>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</span>
          <span>Developed by <a href="https://NKOgallardo.link" target="_blank" rel="noopener noreferrer" style={{ color: "#8fa2b6" }}>NKO</a></span>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href={`https://wa.me/${CLINIC.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hc-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <Icon d={I.whatsapp} size={24} />
      </a>
      <button
        className={`hc-scrolltop ${visible ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <Icon d={I.arrowUp} size={18} />
      </button>
    </>
  );
}

/* ---------- Reveal on scroll ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  const style = useMemo(() => ({ transitionDelay: `${delay}ms` }), [delay]);
  return (
    <div ref={setRef} className={`hc-reveal ${seen ? "in" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

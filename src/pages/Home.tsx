import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CLINIC } from "../lib/clinic";
import { serviceCategories } from "../lib/services";
import { Icon, I } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CLINIC.name} — Trusted Family Doctors & Medical Care` },
      {
        name: "description",
        content:
          "Elegant Healthcare Centre offers IV therapy drips, reproductive & maternity care, general healthcare, screenings and procedures. Book today.",
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

const faqs = [
  { q: "Do I need to book an appointment?", a: "We recommend booking in advance to secure your preferred time, but walk-ins are welcome during regular hours based on availability." },
  { q: "Which medical aids do you accept?", a: "We accept all major medical aid schemes. Private patients are also welcome with transparent pricing before every consultation." },
  { q: "Do you offer telehealth consultations?", a: "Yes. Virtual consultations are available for follow-ups, script renewals and select conditions. Book online and choose 'Telehealth'." },
  { q: "What should I bring to my first visit?", a: "Please bring a valid ID, your medical aid card (if applicable), a list of current medications and any previous medical records." },
  { q: "Is parking available on site?", a: "Yes, secure covered parking is provided for all patients free of charge." },
];

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

      <Layout>
        <Hero />
        <About />
        <Services />
        <MedicalAid />
        <Hours />
        <Appointment />
        <FAQ />
        <Contact />
      </Layout>
    </>
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
            From IV wellness drips to maternity care — Elegant Healthcare is here for
            every stage of your life.
          </p>
          <div className="hc-hero-actions">
            <Link to="/" hash="appointment" className="hc-btn hc-btn-primary">
              <Icon d={I.plus} size={18} /> Book Appointment
            </Link>
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
          <p>Elegant Healthcare Centre combines modern medicine with the kind of personal attention every patient deserves.</p>
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
              <Link to={`/services/${cat.slug}`} className="hc-service-cat-link">
                <span>Learn more</span>
                <Icon d={I.chevronRight} size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MedicalAid() {
  const partners = ["Discovery Health", "Bonitas", "Momentum", "Medshield", "Fedhealth", "Profmed", "BestMed", "GEMS"];
  const accreditations = [
    { icon: I.shield, title: "HPCSA Registered", desc: "All practitioners are registered with the Health Professions Council of South Africa." },
    { icon: I.award, title: "BHF Accredited", desc: "Our practice is accredited by the Board of Healthcare Funders." },
    { icon: I.check, title: "Medical Aid Friendly", desc: "We accept all major medical aid schemes and process claims on your behalf." },
  ];
  return (
    <section className="hc-section" id="medical-aid">
      <div className="hc-container">
        <Reveal className="hc-section-head">
          <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Medical Aid & Accreditation</span>
          <h2>Trusted care, recognised standards</h2>
          <p>We are an accredited practice that works with all major medical aid schemes in South Africa.</p>
        </Reveal>
        <div className="hc-medicalaid-grid">
          <Reveal className="hc-medicalaid-partners" delay={60}>
            <h3>Accepted medical aids</h3>
            <div className="hc-medicalaid-tags">
              {partners.map((p) => (
                <span key={p} className="hc-medicalaid-tag">{p}</span>
              ))}
            </div>
            <p className="hc-medicalaid-note">Don't see your scheme? Contact us — we likely accept it too.</p>
          </Reveal>
          <div className="hc-medicalaid-accreds">
            {accreditations.map((a, i) => (
              <Reveal key={a.title} className="hc-medicalaid-card" delay={i * 80}>
                <div className="hc-medicalaid-icon"><Icon d={a.icon} size={24} /></div>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

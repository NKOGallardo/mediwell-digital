import { createFileRoute, Link } from "@tanstack/react-router";
import { CLINIC } from "../lib/clinic";
import { team } from "../lib/team";
import { Icon, I } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: `Meet the Team — ${CLINIC.name}` },
      { name: "description", content: `Meet the doctors, midwives and healthcare professionals at ${CLINIC.name} in Noordwyk, Midrand.` },
      { property: "og:title", content: `Meet the Team — ${CLINIC.name}` },
      { property: "og:description", content: "Experienced, compassionate healthcare professionals dedicated to your family." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

function TeamPage() {
  return (
    <Layout>
      <section className="hc-hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="hc-container">
          <Reveal>
            <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Meet the Team</span>
            <h1 style={{ marginTop: 18 }}>Experienced doctors, familiar faces</h1>
            <p style={{ maxWidth: 720, fontSize: "1.1rem", color: "var(--hc-ink-2)" }}>
              Our board-certified practitioners and midwives are committed to respectful, patient-first care for every member of your family.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hc-section">
        <div className="hc-container">
          <div className="hc-doctors-grid">
            {team.map((member, i) => (
              <Reveal key={member.name} className="hc-doctor" delay={i * 80}>
                <div className="hc-doctor-photo hc-doctor-initials" aria-hidden="true">
                  <span>{member.initials}</span>
                </div>
                <div className="hc-doctor-body">
                  <h3>{member.name}</h3>
                  <div className="hc-doctor-role">{member.role}</div>
                  <div className="hc-doctor-meta">
                    <span>{member.qual}</span>
                    <span>{member.exp} experience</span>
                  </div>
                  {member.reg && <div className="hc-doctor-reg">HPCSA: {member.reg}</div>}
                  <p>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="hc-cta-box" delay={100}>
            <div className="hc-cta-box-inner">
              <div>
                <h3>Book an appointment with our team</h3>
                <p>Choose a convenient time and we'll confirm your visit.</p>
              </div>
              <div className="hc-cta-box-actions">
                <a href={CLINIC.phoneHref} className="hc-btn hc-btn-outline">
                  <Icon d={I.phone} size={18} /> {CLINIC.phone}
                </a>
                <Link to="/#appointment" className="hc-btn hc-btn-primary">
                  <Icon d={I.plus} size={18} /> Book online
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

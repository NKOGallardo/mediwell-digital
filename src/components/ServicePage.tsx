import { Link } from "react-router-dom";
import { CLINIC } from "../lib/clinic";
import { type ServiceCategory } from "../lib/services";
import { Icon, I } from "./Icon";
import { Reveal } from "./Reveal";
import { Layout } from "./Layout";

export function ServicePage({ category }: { category: ServiceCategory }) {
  return (
    <Layout>
      <section className="hc-hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="hc-container">
          <Reveal>
            <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> {category.title}</span>
            <h1 style={{ marginTop: 18 }}>{category.title}</h1>
            <p style={{ maxWidth: 720, fontSize: "1.1rem", color: "var(--hc-ink-2)" }}>
              {category.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hc-section">
        <div className="hc-container">
          <div className="hc-service-cats" style={{ gridTemplateColumns: "minmax(320px, 1fr)" }}>
            <Reveal className="hc-service-cat">
              <div className="hc-service-cat-head">
                <div className="hc-service-cat-icon"><Icon d={category.icon} /></div>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.blurb}</p>
                </div>
              </div>
              <ul className="hc-service-list">
                {category.items.map((it) => (
                  <li key={it.name}>
                    <strong>{it.name}</strong>
                    <span>{it.desc}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="hc-cta-box" delay={100}>
            <div className="hc-cta-box-inner">
              <div>
                <h3>Book your {category.title.toLowerCase()} appointment</h3>
                <p>Our team is ready to help. Call us or book online and we'll confirm your appointment.</p>
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

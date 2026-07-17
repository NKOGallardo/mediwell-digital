import { createFileRoute, Link } from "@tanstack/react-router";
import { CLINIC } from "../lib/clinic";
import { priceCategories } from "../lib/pricing";
import { Icon, I } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: `Pricing — ${CLINIC.name}` },
      { name: "description", content: `Transparent pricing for IV therapy, reproductive health, maternity care, general healthcare and screenings at ${CLINIC.name} in Noordwyk, Midrand.` },
      { property: "og:title", content: `Pricing — ${CLINIC.name}` },
      { property: "og:description", content: "Transparent pricing for IV drips, family planning, maternity care, general healthcare and screenings." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

function PricingPage() {
  return (
    <Layout>
      <section className="hc-hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="hc-container">
          <Reveal>
            <span className="hc-eyebrow"><span className="hc-eyebrow-dot" /> Pricing</span>
            <h1 style={{ marginTop: 18 }}>Transparent pricing</h1>
            <p style={{ maxWidth: 720, fontSize: "1.1rem", color: "var(--hc-ink-2)" }}>
              No surprises. Below are guide prices for our most common services.
              Final costs may vary based on medication, tests or individual treatment plans.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hc-section">
        <div className="hc-container">
          <div className="hc-pricing-grid">
            {priceCategories.map((cat, i) => (
              <Reveal key={cat.title} className="hc-pricing-card" delay={i * 60}>
                <h2>{cat.title}</h2>
                <ul className="hc-pricing-list">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <span className="hc-pricing-name">{item.name}</span>
                      <span className="hc-pricing-price">{item.price}</span>
                      {item.note && <span className="hc-pricing-note">{item.note}</span>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="hc-pricing-disclaimer" delay={100}>
            <Icon d={I.shield} size={24} />
            <div>
              <strong>Medical aid accepted</strong>
              <span>We accept all major medical aid schemes. Prices shown are cash estimates for patients without medical aid or where a scheme does not cover the full amount.</span>
            </div>
          </Reveal>

          <Reveal className="hc-cta-box" delay={150}>
            <div className="hc-cta-box-inner">
              <div>
                <h3>Ready to book?</h3>
                <p>Get a personalised quote or confirm your appointment today.</p>
              </div>
              <div className="hc-cta-box-actions">
                <a href={CLINIC.phoneHref} className="hc-btn hc-btn-outline">
                  <Icon d={I.phone} size={18} /> {CLINIC.phone}
                </a>
                <Link to="/" hash="appointment" className="hc-btn hc-btn-primary">
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

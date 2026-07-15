import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CLINIC } from "../lib/clinic";
import { Icon, I } from "./Icon";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links: { label: string; to: string; hash?: string }[] = [
    { label: "Home", to: "/" },
    { label: "About", to: "/", hash: "about" },
    { label: "Services", to: "/", hash: "services" },
    { label: "Pricing", to: "/pricing" },
    { label: "Team", to: "/team" },
    { label: "Hours", to: "/", hash: "hours" },
    { label: "FAQ", to: "/", hash: "faq" },
    { label: "Contact", to: "/", hash: "contact" },
  ];

  return (
    <header className="hc-nav">
      <div className="hc-container hc-nav-inner">
        <Link to="/" className="hc-logo" aria-label={CLINIC.name}>
          <span className="hc-logo-mark" aria-hidden="true">
            <Icon d={I.heart} size={18} />
          </span>
          Elegant Healthcare
        </Link>
        <nav className="hc-nav-links mobile-hidden" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              activeProps={{ className: "active" }}
              activeOptions={{ exact: false, includeHash: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/" hash="appointment" className="hc-btn hc-btn-primary hc-nav-cta">
            Book Appointment
          </Link>
        </nav>
        <button
          className="hc-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="hc-nav-mobile">
          {links.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/" hash="appointment" className="hc-btn hc-btn-primary" onClick={() => setOpen(false)}>
            Book Appointment
          </Link>
        </div>
      )}
    </header>
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
              Elegant Healthcare
            </div>
            <p style={{ marginTop: 16 }}>Compassionate healthcare for every stage of life. Serving our community with modern, patient-first medicine.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/" hash="about">About</Link>
            <Link to="/" hash="services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/team">Team</Link>
            <Link to="/" hash="appointment">Book Appointment</Link>
            <Link to="/" hash="faq">FAQ</Link>
          </div>
          <div>
            <h4>Services</h4>
            {["IV Therapy", "Reproductive Health", "Maternity Care", "General Healthcare", "Screenings"].map((n) => (
              <Link key={n} to="/" hash="services">{n}</Link>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
            <span style={{ color: "#c5d3e0", display: "block", padding: "5px 0", fontSize: 14 }}>{CLINIC.email}</span>
            <Link to="/" hash="contact">{CLINIC.address}</Link>
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

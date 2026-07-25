Plan: Add high-value features to the healthcare website to justify the R1,700 price point

Current state
- Single-page React + Vite site with vanilla CSS.
- Sections: Hero, About, Services (5 categories), Opening Hours, Appointment form (Formspree), FAQ, Contact, Footer.
- No backend or database.

Goal
Add four value-add features that increase perceived value for the buyer and improve the site's usefulness for the medical practice, without requiring a backend.

Features to build

1. Dedicated service pages (SEO + content depth)
   - Create 5 new route files under src/routes/ for each service category:
     - services/iv-therapy.tsx
     - services/reproductive-health.tsx
     - services/maternity-care.tsx
     - services/general-healthcare.tsx
     - services/screenings.tsx
   - Each page gets a unique title, meta description, canonical link, and H1.
   - Reuse the existing card/list styling from site.css.
   - Add a short intro paragraph, the full list of services, and a clear CTA to the booking form.
   - Link the category cards on the home page to these pages.

2. Pricing page
   - Create src/routes/pricing.tsx.
   - Display a clean, scannable price list for the services.
   - Group prices by category (IV drips, reproductive health, maternity, general healthcare, screenings).
   - Add a note about medical aid and that exact prices may vary.
   - Add SEO meta (title, description, canonical).
   - Add "Pricing" to the navbar and footer.

3. Medical aid & accreditation section on the home page
   - Add a new section between Services and Hours.
   - Show accepted medical aid partners as text/logos and accreditation badges (e.g., HPCSA registered, BHF accredited).
   - Use CSS-only icons to keep it image-free.
   - Add a reassuring note: "We accept all major medical aid schemes."

4. Team page
   - Create src/routes/team.tsx.
   - Add practitioner profiles (name, role, qualifications, bio, initials-based avatar).
   - Keep the design clean and consistent with the rest of the site.
   - Add SEO meta.
   - Link "Team" in the navbar and footer.

Additional polish
- Update the navbar on the home page to include the new pages: About, Services, Pricing, Team, Hours, FAQ, Contact.
- Update the footer quick links to include Pricing, Team, and Services.
- Ensure all new pages remain responsive and follow the existing vanilla CSS design system.
- No backend changes; the booking form stays on Formspree.

Technical details
- Use TanStack Start file-based routing (src/routes/*.tsx).
- Reuse existing components and CSS classes where possible.
- Add JSON-LD MedicalClinic markup to the new pages where appropriate.
- Keep the build TypeScript-strict and avoid Tailwind.

Deliverables
- 5 new service detail pages
- 1 pricing page
- 1 team page
- Updated home page with medical aid/accreditation section
- Updated navigation and footer
- All pages responsive and SEO-ready

Out of scope
- No backend/database
- No payment processing
- No patient portal or authentication
- No CMS integration
## Changes to `src/routes/index.tsx` (and related files)

1. **Remove all images**
   - Delete imports for `heroImg`, `doc1`, `doc2`, `doc3`.
   - Remove `<img>` usages in the hero section, doctor cards, and any about/gallery sections. Replace visual areas with clean CSS-only alternatives (gradient panels, initials avatars for doctors) so layout stays intact.
   - Delete the asset files: `src/assets/hero.jpg`, `doctor1.jpg`, `doctor2.jpg`, `doctor3.jpg`.
   - Remove the `og:image`/`twitter:image` meta entries if present.

2. **Update phone number to `83 727 5737`**
   - `CLINIC.phone` → `"083 727 5737"`
   - `CLINIC.phoneHref` → `"tel:+27837275737"`
   - `CLINIC.whatsapp` → `"27837275737"`
   - Update JSON-LD `telephone` accordingly.

3. **Remove Public Holidays row**
   - Delete `hoursHoliday` from `CLINIC`.
   - Remove the "Public Holidays — Emergency Only" row from the opening hours table.

4. **Replace the Services section** with the 5 categories provided:
   - Restructure services from a flat 10-card grid into 5 grouped category sections, each with its sub-services list:
     1. IV Therapy (Premium Drips) — 10 drips
     2. Reproductive Health — 6 services
     3. Maternity & Neonatal Care — 4 services
     4. General Healthcare — 4 services
     5. Screenings & Procedures — 3 grouped items
   - Each category rendered as a card with a heading and a list of services (name + short description). Add matching CSS in `src/site.css` for the grouped layout.
   - Update the JSON-LD `availableService` array (if present) to reflect new services.

5. **Copy cleanup**
   - Update any hero/about text that references imagery ("see our clinic", etc.) so nothing dangles.

No routing, backend, or dependency changes.
export type PriceItem = { name: string; price: string; note?: string };
export type PriceCategory = { title: string; items: PriceItem[] };

export const priceCategories: PriceCategory[] = [
  {
    title: "IV Therapy (Premium Drips)",
    items: [
      { name: "Vitamin Drip (Cocktail)", price: "R850" },
      { name: "Jet Fuel", price: "R950" },
      { name: "Neurobion (Vitamin C)", price: "R750" },
      { name: "Glow Drip", price: "R1,100" },
      { name: "Immune Booster Drip", price: "R950" },
      { name: "Biotin / Vitamin B7", price: "R700" },
      { name: "Weight Loss Drip", price: "R900" },
      { name: "Sports Endurance & Recovery", price: "R1,050" },
      { name: "Energy Booster Drip", price: "R800" },
      { name: "Hangover Booster", price: "R850" },
    ],
  },
  {
    title: "Reproductive Health",
    items: [
      { name: "Family Planning Consultation", price: "R450" },
      { name: "IUD Insertion", price: "R1,800" },
      { name: "IUD Removal", price: "R850" },
      { name: "Implanon Insertion", price: "R1,500" },
      { name: "Implanon Removal", price: "R750" },
      { name: "Morning After Pill", price: "R250" },
      { name: "Pregnancy Test", price: "R150" },
      { name: "Pap Smear", price: "R550" },
    ],
  },
  {
    title: "Maternity & Neonatal Care",
    items: [
      { name: "ANC First Visit", price: "R850" },
      { name: "ANC Follow-up Visit", price: "R550" },
      { name: "Birth Options Consultation", price: "R700" },
      { name: "3-Day Postnatal Care Package", price: "R2,500" },
      { name: "Baby Wellness Visit", price: "R450" },
      { name: "Immunisation (per vaccine)", price: "R180 – R450", note: "Price depends on vaccine" },
    ],
  },
  {
    title: "General Healthcare",
    items: [
      { name: "General Consultation (excl. medication)", price: "R500" },
      { name: "General Consultation (incl. medication)", price: "R700" },
      { name: "Follow-up Consultation", price: "R350" },
      { name: "STI Treatment (incl. medication)", price: "R650" },
      { name: "HIV Counselling & Testing", price: "R250" },
      { name: "HIV Management Consultation", price: "R500" },
    ],
  },
  {
    title: "Screenings & Procedures",
    items: [
      { name: "Blood Pressure Check", price: "R80" },
      { name: "Glucose (Blood Sugar) Test", price: "R120" },
      { name: "Cholesterol Test", price: "R250" },
      { name: "DNA Testing (facilitated)", price: "R1,200", note: "Laboratory fees billed separately" },
      { name: "Wound Dressing (initial)", price: "R350" },
      { name: "Wound Dressing Follow-up", price: "R200" },
      { name: "Suture (Stitch) Removal", price: "R300" },
    ],
  },
];

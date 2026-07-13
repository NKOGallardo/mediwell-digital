export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  qual: string;
  exp: string;
  bio: string;
  reg?: string;
};

export const team: TeamMember[] = [
  {
    initials: "AN",
    name: "Dr. Amara Nkosi",
    role: "Family Medicine",
    qual: "MBChB, MMed (Fam Med)",
    exp: "12 yrs",
    reg: "MP0581234",
    bio: "Amara focuses on holistic family care with a special interest in women's wellness, preventive medicine and chronic disease management.",
  },
  {
    initials: "ER",
    name: "Dr. Ethan Reyes",
    role: "Internal Medicine",
    qual: "MBChB, FCP (SA)",
    exp: "15 yrs",
    reg: "MP0398765",
    bio: "Ethan brings evidence-based care to chronic disease management, executive health screening and complex adult medical conditions.",
  },
  {
    initials: "LM",
    name: "Dr. Lena Marais",
    role: "Paediatrics",
    qual: "MBChB, DCH, FCPaed",
    exp: "9 yrs",
    reg: "MP0723456",
    bio: "Lena is passionate about child development, immunisation and supporting new parents through every milestone.",
  },
  {
    initials: "TM",
    name: "Thandi Molefe",
    role: "Registered Midwife",
    qual: "BCur, Adv Midwifery",
    exp: "8 yrs",
    bio: "Thandi provides compassionate antenatal, birth and postnatal care, with a calm, family-centred approach.",
  },
];

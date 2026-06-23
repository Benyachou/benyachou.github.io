/**
 * Formation, affichée du plus récent au plus ancien.
 */
export interface EducationItem {
  title: string;
  school: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    title: 'BTS Systèmes Numériques — Réseaux & Télécoms',
    school: 'OFIAQ, Montpellier',
    period: '2026',
  },
  {
    title: 'Titre Développeur Web & Mobile',
    school: 'EPITECH, Montpellier',
    period: '2019',
  },
  {
    title: 'DUT Informatique',
    school: 'IUT de Montpellier',
    period: '2017 – 2018',
  },
  {
    title: 'Baccalauréat Scientifique',
    school: 'Université de Montpellier',
    period: '2016',
  },
];

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
    title: 'Technicien Supérieur Systèmes & Réseaux',
    school: 'OFIAQ',
    period: '2026',
  },
  {
    title: 'Développeur Web & Mobile',
    school: 'EPITECH',
    period: '2019',
  },
  {
    title: 'DUT Informatique',
    school: 'IUT Montpellier',
    period: '2017 – 2018',
  },
  {
    title: 'Baccalauréat Scientifique',
    school: '',
    period: '',
  },
];

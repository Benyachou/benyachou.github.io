/**
 * Formation, affichée du plus récent au plus ancien (alignée sur le CV 2026).
 */
export interface EducationItem {
  title: string;
  school: string;
  period: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    title: 'Technicien Systèmes et Réseaux (Bac+2)',
    school: 'OFIAQ, Montpellier',
    period: '2026',
    note: 'Diplôme validé',
  },
  {
    title: 'Concepteur Développeur d’Applications (Bac+3)',
    school: 'En alternance chez Décipro, Montpellier',
    period: '2021',
  },
  {
    title: 'Développeur Web et Web Mobile (Bac+2)',
    school: 'EPITECH, Montpellier',
    period: '2020',
  },
];

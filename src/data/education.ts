/**
 * Formation, affichée du plus récent au plus ancien (alignée sur le CV).
 */
export interface EducationItem {
  title: string;
  school: string;
  period: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    title: 'Technicien Systèmes et Réseaux, Bac+2',
    school: 'OFIAQ, Montpellier',
    period: '2026',
    note: 'Validé',
  },
  {
    title: 'Concepteur Développeur d’Applications, Bac+3',
    school: 'Alternance chez Décipro, Montpellier',
    period: '2021',
  },
  {
    title: 'Développeur Web et Web Mobile, Bac+2',
    school: 'EPITECH, Montpellier',
    period: '2020',
  },
];

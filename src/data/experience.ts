/**
 * Parcours professionnel, affiché en timeline verticale.
 * Ordre : du plus récent au plus ancien.
 */
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Développeur — Outil de traduction automatisée par IA',
    company: 'Projet personnel',
    period: '2024 – 2025',
    description:
      'Conception d’un outil de traduction automatisée s’appuyant sur des modèles de langage.',
  },
  {
    role: 'Développeur Web Junior',
    company: 'VTR Voyage',
    period: '2022 – 2024',
  },
  {
    role: 'Alternant Développeur Web',
    company: 'Docipro',
    period: '2020 – 2021',
  },
  {
    role: 'Stagiaire Symfony',
    company: 'Mooven',
    period: '2019',
  },
  {
    role: 'Gestionnaire de parc',
    company: 'Lycée CCI Gard',
    period: '2017 – 2018',
  },
];

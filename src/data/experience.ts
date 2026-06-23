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
    role: 'Développeur Freelance — Application de gestion de flotte',
    company: 'Canoë Montana · Ganges (34)',
    period: '2025 – 2026',
    description:
      'PWA de gestion des réservations canoë/kayak, utilisée quotidiennement sur le terrain. Architecture offline-first (Service Worker + synchronisation Supabase multi-appareils), tarification dynamique, dashboard analytics et empaquetage Android via Capacitor.',
  },
  {
    role: 'Développeur Python — Automatisation & IA',
    company: 'Projet indépendant · Télétravail',
    period: '2024 – 2025',
    description:
      'Bot de traduction automatisée par LLM (Gemini) sur 300 000+ termes, en production 24/7. Filtres anti-erreurs (~40 % d’erreurs en moins) et architecture Python modulaire multi-threading avec pipeline de validation.',
  },
  {
    role: 'Développeur Web Junior',
    company: 'VTR Voyage · Montpellier',
    period: '2022 – 2024',
  },
  {
    role: 'Alternant Développeur Web',
    company: 'Docipro · Montpellier',
    period: '2020 – 2021',
  },
  {
    role: 'Stagiaire Développeur Symfony',
    company: 'Mooven · Montpellier',
    period: '2019',
  },
  {
    role: 'Gestionnaire de parc informatique',
    company: 'Lycée CCI Gard · Nîmes',
    period: '2017 – 2018',
  },
];

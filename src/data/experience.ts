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
    role: 'Développeur Freelance — Applications métier',
    company: 'Canoë Montana & Canoë Horizon · Ganges (34)',
    period: '2025 – 2026',
    description:
      'Deux plateformes de réservation livrées à des clients réels et en production : site vitrine, réservation en ligne et back-office (planning, calendrier, suivi du CA). Sécurité de bout en bout (policies RLS Supabase, serverless, captcha), PWA offline-first et déploiement Cloudflare Pages — 0 € d’infrastructure pour le client.',
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
    description:
      'Développement et maintenance d’applications web PHP / JavaScript en e-tourisme : résolution de bugs critiques en production, optimisation des performances front-end, livraisons en cycle court.',
  },
  {
    role: 'Alternant Développeur Web',
    company: 'Décipro · Montpellier',
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
    description:
      'Maintenance d’un parc de 200+ postes, support utilisateurs N1/N2, câblage et brassage RJ45.',
  },
];

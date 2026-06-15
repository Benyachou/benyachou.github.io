/**
 * Liste des projets affichés dans la section « Projets ».
 *
 * Pour ajouter un projet : ajouter une entrée à ce tableau. Aucun autre
 * fichier n'a besoin d'être modifié.
 */
export interface Project {
  /** Titre affiché sur la carte. */
  title: string;
  /** Description courte (1 à 3 phrases). */
  description: string;
  /** Badges de stack technique. */
  stack: string[];
  /** Lien vers le dépôt GitHub. */
  repo: string;
  /** Lien optionnel vers une démo en ligne. */
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Al-awqat',
    description:
      'Application Flutter d’horaires de prière, multi-plateforme (Android/Windows) et 100 % hors-ligne. Architecture en couches, tests unitaires, CI/CD publiant l’APK à chaque release.',
    stack: ['Dart', 'Flutter', 'GitHub Actions'],
    repo: 'https://github.com/Benyachou/al-awqat',
  },
  {
    title: 'job-bot',
    description:
      'Assistant de recherche d’emploi automatisé. Pipeline modulaire (recherche → scoring → génération → candidature), 7 connecteurs de sources à interface commune, intégration LLM et logique résiliente non bloquante.',
    stack: ['Python', 'Pydantic', 'API REST', 'LLM'],
    repo: 'https://github.com/Benyachou/job-bot',
  },
  {
    title: 'Canoë Montana²',
    description:
      'Application web de réservation full-stack. Interface hébergée sur Cloudflare Pages, données et authentification via Supabase (base partagée entre tous les appareils). Logique métier complète : tarifs, réductions de groupe, contraintes.',
    stack: ['Cloudflare Pages', 'Supabase', 'PostgreSQL', 'Auth'],
    repo: 'https://github.com/Benyachou/canoe-montana',
  },
];

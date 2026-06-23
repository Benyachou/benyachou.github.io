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
    title: 'Festino',
    description:
      'ERP de gestion d’agence événementielle : CRM, module de devis, gestion des partenaires et audit de sécurité documenté. Architecture Django modulaire, containerisation Docker (dev + prod) et tests automatisés pytest.',
    stack: ['Django', 'Python', 'Docker', 'PostgreSQL', 'pytest'],
    repo: 'https://github.com/Benyachou/Festino',
  },
  {
    title: 'Al-awqat',
    description:
      'Application Flutter d’horaires de prière, multi-plateforme (Android/Windows) et 100 % hors-ligne. Architecture en couches, tests unitaires, CI/CD publiant l’APK à chaque release.',
    stack: ['Dart', 'Flutter', 'GitHub Actions'],
    repo: 'https://github.com/Benyachou/al-awqat',
  },
  {
    title: 'bot-job',
    description:
      'Pipeline de recherche d’emploi automatisé : scraping → scoring LLM → génération de candidature. 7 connecteurs de sources à interface commune et gestion d’erreurs résiliente non bloquante.',
    stack: ['Python', 'Pydantic', 'API REST', 'LLM'],
    repo: 'https://github.com/Benyachou/bot-job',
  },
  {
    title: 'Canoë Montana²',
    description:
      'Application web de réservation full-stack. Interface hébergée sur Cloudflare Pages, données et authentification via Supabase (base partagée entre tous les appareils). Logique métier complète : tarifs, réductions de groupe, contraintes.',
    stack: ['Cloudflare Pages', 'Supabase', 'PostgreSQL', 'Auth'],
    repo: 'https://github.com/Benyachou/canoe-montana',
  },
];

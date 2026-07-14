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
  /** Lien vers le dépôt GitHub (absent si le dépôt est privé). */
  repo?: string;
  /** Lien optionnel vers une démo en ligne. */
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Canoë Horizon',
    description:
      'Plateforme complète livrée à un client réel et en production : site vitrine, réservation en ligne et back-office de gestion (planning, calendrier, suivi du CA). Sécurité de bout en bout (policies RLS Supabase, clé service en serverless, captcha) et e-mails de confirmation automatiques.',
    stack: ['JavaScript', 'Supabase', 'Cloudflare Pages', 'Serverless'],
    demo: 'https://canoe-horizon.pages.dev',
  },
  {
    title: 'Canoë Montana',
    description:
      'PWA de gestion des réservations canoë/kayak, utilisée quotidiennement sur le terrain. Architecture offline-first (Service Worker + synchronisation Supabase multi-appareils), tarification dynamique et logique métier complète : tarifs, réductions de groupe, contraintes.',
    stack: ['Cloudflare Pages', 'Supabase', 'PostgreSQL', 'PWA'],
    repo: 'https://github.com/Benyachou/canoe-montana',
    demo: 'https://canoe-montana.pages.dev',
  },
  {
    title: 'Bot de traduction LLM',
    description:
      'Bot de traduction automatisée par LLM sur une base de 300 000+ termes, en production continue 24/7. Pipeline de validation des sorties (~40 % d’erreurs en moins) et architecture Python modulaire multi-threading.',
    stack: ['Python', 'Gemini API', 'Multi-threading'],
    repo: 'https://github.com/Benyachou/WoW-Translator-Bot',
  },
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
];

/**
 * Liste des projets affichés dans la section « Services en production ».
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
  /** Statut du service, affiché avec une LED. */
  status: 'en prod' | 'en ligne' | 'open source';
  /** Chaîne d'architecture affichée en mini-schéma (client → … → données). */
  archi?: string[];
  /** Lien vers le dépôt GitHub (absent si le dépôt est privé). */
  repo?: string;
  /** Lien optionnel vers une démo en ligne. */
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Canoë Horizon',
    description:
      'Plateforme complète livrée à un client réel : site vitrine, réservation en ligne et back-office de gestion (planning, calendrier, suivi du CA). Sécurité de bout en bout : policies RLS, clé service côté serverless, captcha Turnstile, e-mails de confirmation automatiques.',
    stack: ['JavaScript', 'Supabase', 'Cloudflare Pages', 'Serverless', 'Brevo'],
    status: 'en prod',
    archi: ['Client', 'Cloudflare Pages', 'Fonction serverless', 'Supabase · RLS'],
    demo: 'https://canoe-horizon.pages.dev',
  },
  {
    title: 'Canoë Montana',
    description:
      'PWA de gestion des réservations canoë/kayak, utilisée quotidiennement sur le terrain. Architecture offline-first (Service Worker + synchronisation multi-appareils), tarification dynamique et logique métier complète : tarifs, réductions de groupe, contraintes.',
    stack: ['PWA', 'Service Worker', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'],
    status: 'en prod',
    archi: ['Terrain (offline)', 'Service Worker', 'Sync', 'Supabase'],
    demo: 'https://canoe-montana.pages.dev',
  },
  {
    title: 'Bot de traduction LLM',
    description:
      'Traduction automatisée d’un jeu complet (dialogues, quêtes, sorts) vers cinq langues. Base de 300 000 termes traitée en production continue 24h/24, 99,95 % de réussite en sortie grâce à un pipeline de validation multi-threading.',
    stack: ['Python', 'LLM', 'Multi-threading'],
    status: 'en prod',
    archi: ['Base 300 k termes', 'Pipeline Python', 'LLM', 'Filtres de validation'],
    repo: 'https://github.com/Benyachou/WoW-Translator-Bot',
  },
  {
    title: 'Festino',
    description:
      'ERP de gestion d’agence événementielle : CRM, module de devis, gestion des partenaires et audit de sécurité documenté. Architecture Django modulaire, containerisation Docker (dev + prod) et tests automatisés pytest.',
    stack: ['Django', 'Python', 'Docker', 'PostgreSQL', 'pytest'],
    status: 'open source',
    repo: 'https://github.com/Benyachou/Festino',
  },
  {
    title: 'Al-awqat',
    description:
      'Application Flutter d’horaires de prière, multi-plateforme (Android/Windows) et 100 % hors-ligne. Architecture en couches, tests unitaires, CI/CD publiant l’APK à chaque release.',
    stack: ['Dart', 'Flutter', 'GitHub Actions'],
    status: 'open source',
    repo: 'https://github.com/Benyachou/al-awqat',
  },
];

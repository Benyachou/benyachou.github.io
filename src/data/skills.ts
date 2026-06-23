/**
 * Compétences regroupées en deux familles, affichées sous forme de tags.
 */
export interface SkillGroup {
  title: string;
  /** Identifiant d'icône (voir src/components/Skills.astro). */
  icon: 'code' | 'server';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Développement & automatisation',
    icon: 'code',
    items: [
      'Python (LLM, threading, pytest)',
      'Django',
      'Dart / Flutter',
      'PHP / Symfony',
      'JavaScript (ES2017+)',
      'HTML / CSS',
      'SQL / API REST',
      'Docker',
      'PWA / Service Worker',
      'Capacitor',
      'Supabase / PostgreSQL',
      'GitHub Actions / CI/CD',
    ],
  },
  {
    title: 'Systèmes & réseaux',
    icon: 'server',
    items: [
      'Windows Server',
      'Active Directory',
      'Linux (Debian / Ubuntu)',
      'Virtualisation (Hyper-V, VMware)',
      'PowerShell',
      'Bash',
      'Audit sécurité',
      'Gestion de parc',
    ],
  },
];

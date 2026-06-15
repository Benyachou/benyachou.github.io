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
      'Python (LLM, Selenium, Requests, threading)',
      'Dart / Flutter',
      'PHP / Symfony',
      'JavaScript',
      'HTML',
      'CSS',
      'API REST',
      'Git / GitHub',
      'CI/CD',
      'Packaging (PyInstaller, PyArmor)',
    ],
  },
  {
    title: 'Systèmes & réseaux',
    icon: 'server',
    items: [
      'Windows Server',
      'Active Directory',
      'Linux',
      'Virtualisation (Hyper-V, VMware)',
      'PowerShell',
      'Bash',
      'Sécurité',
      'Sauvegardes',
      'Gestion de parc',
      'MySQL',
    ],
  },
];

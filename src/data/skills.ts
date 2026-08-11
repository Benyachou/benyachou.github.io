/**
 * Compétences regroupées en « VLANs », suivant les familles du CV 2026.
 * Chaque groupe indique où la compétence a été pratiquée (source).
 */
export interface SkillGroup {
  /** Numéro de VLAN affiché sur le panneau (cohérence visuelle réseau). */
  vlan: number;
  title: string;
  /** Contexte de pratique, tel qu'énoncé sur le CV. */
  source: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    vlan: 10,
    title: 'Systèmes & parc',
    source: 'Pratiqué en entreprise',
    items: [
      'Windows Server',
      'Active Directory',
      'Linux (Debian / Ubuntu)',
      'Gestion de parc 200+ postes',
      'Support N1 / N2',
      'Câblage & brassage RJ45',
      'PowerShell',
      'Bash',
    ],
  },
  {
    vlan: 20,
    title: 'Développement',
    source: 'Pratiqué en entreprise',
    items: [
      'PHP / Symfony',
      'Python',
      'JavaScript',
      'React',
      'Express.js',
      'SQL',
      'Django',
      'Java',
      'Dart / Flutter',
      'Supabase / PostgreSQL',
    ],
  },
  {
    vlan: 30,
    title: 'Réseau & sécurité',
    source: 'BTS Systèmes Numériques + laboratoire personnel',
    items: [
      'TCP/IP',
      'VLAN',
      'Routage & commutation L2 / L3',
      'VPN / NAT',
      'pfSense',
      'Stormshield',
      'Wireshark',
    ],
  },
  {
    vlan: 40,
    title: 'Virtualisation & supervision',
    source: 'BTS Systèmes Numériques + laboratoire personnel',
    items: ['VMware', 'Proxmox', 'Hyper-V', 'GLPI', 'Zabbix'],
  },
  {
    vlan: 99,
    title: 'Outils',
    source: 'Transverse',
    items: ['Git', 'Docker', 'Intégration continue', 'PowerShell', 'Bash'],
  },
];

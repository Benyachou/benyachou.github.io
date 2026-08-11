/**
 * Compétences regroupées en « VLANs », suivant les quatre familles du CV.
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
      'Linux',
      'Gestion de parc',
      'Support N1 / N2',
      'Câblage RJ45',
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
      'Express JS',
      'SQL',
      'Django',
      'Java',
    ],
  },
  {
    vlan: 30,
    title: 'Réseau & sécurité',
    source: 'BTS Systèmes Numériques et laboratoire',
    items: [
      'TCP/IP',
      'VLAN',
      'Routage & commutation L2 / L3',
      'VPN',
      'NAT',
      'pfSense',
      'Stormshield',
      'Wireshark',
    ],
  },
  {
    vlan: 40,
    title: 'Virtualisation & outils',
    source: 'Laboratoire et pratique',
    items: [
      'VMware',
      'Proxmox',
      'Hyper-V',
      'GLPI',
      'Zabbix',
      'Git',
      'Docker',
      'PowerShell',
      'Bash',
    ],
  },
];

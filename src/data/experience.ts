/**
 * Parcours affiché en « traceroute » : du point de départ (terrain, 2008)
 * jusqu'à aujourd'hui. Ordre chronologique — chaque entrée est un saut (hop).
 */
export interface Hop {
  period: string;
  /** Nom de l'étape façon nom d'hôte (affiché en monospace). */
  host: string;
  role: string;
  company: string;
  /** Points clefs (issus du CV). */
  facts: string[];
  /** Étape « terrain » (avant / pendant la reconversion) ou informatique. */
  kind: 'terrain' | 'it';
}

export const hops: Hop[] = [
  {
    period: '2008 – 2016',
    host: 'terrain.interim',
    role: 'Missions d’intérim, secteurs variés',
    company: 'Bâtiment, transport, restauration, événementiel, vie scolaire',
    facts: [
      'Poids lourd, engins de chantier, tailleur de pierre, menuiserie, couverture.',
      'Surveillant d’internat, skiman, cuisine, livraison, montage de stands.',
      'C’est là que j’ai appris à accueillir, expliquer, gérer les imprévus et tenir un engagement.',
    ],
    kind: 'terrain',
  },
  {
    period: '2017 – 2018',
    host: 'lycee-cci.nimes',
    role: 'Gestionnaire de parc informatique',
    company: 'Lycée CCI Gard, Nîmes',
    facts: [
      'Parc de 200+ postes : maintenance, déploiement des machines, suivi du matériel.',
      'Support de proximité N1 et N2, câblage et brassage RJ45.',
    ],
    kind: 'it',
  },
  {
    period: '2019',
    host: 'mooven.montpellier',
    role: 'Développeur web, stage',
    company: 'Mooven, Montpellier (2 mois)',
    facts: [
      'Refonte CSS complète en respectant la charte UX de l’entreprise.',
      'Ajout de modules santé en PHP Symfony 3.5.',
    ],
    kind: 'it',
  },
  {
    period: '2020 – 2021',
    host: 'decipro.montpellier',
    role: 'Concepteur développeur d’applications, alternance',
    company: 'Décipro, Montpellier (installateur de salles de cinéma)',
    facts: [
      'Applications métier en PHP et Symfony, intégration d’API, revues de code en équipe.',
    ],
    kind: 'it',
  },
  {
    period: '2022 – 2024',
    host: 'vtr-voyage.montpellier',
    role: 'Développeur web junior',
    company: 'VTR Voyage, Montpellier',
    facts: [
      'Développement React, Express JS, PHP et Python sur les sites du groupe.',
      'Scripts de récupération automatique des données hébergeurs vers la base SQL.',
      'Réseau et support interne : tickets des collègues, diagnostic, résolution de bugs.',
    ],
    kind: 'it',
  },
  {
    period: '2024 – 2025',
    host: 'ascension-wow.remote',
    role: 'Développeur Python, automatisation et IA',
    company: 'Ascension WoW, à distance',
    facts: [
      'Traduction automatisée du jeu (dialogues, quêtes, sorts) vers cinq langues.',
      'Base de 300 000 termes en production continue 24h/24, 99,95 % de réussite.',
      'Filtres de validation, support aux utilisateurs, correctifs sans interruption de service.',
    ],
    kind: 'it',
  },
  {
    period: '2025 – 2026',
    host: 'freelance.ganges',
    role: 'Développeur freelance, applications métier',
    company: 'Canoë Montana & Canoë Horizon, Ganges (34)',
    facts: [
      'Deux applications livrées : vitrine, réservation en ligne, back-office (planning, CA).',
      'Sécurité complète : droits en base (RLS), clé serveur, antispam, rôles séparés.',
      'Recueil du besoin, formation du gérant, suivi après livraison. Utilisées tous les jours.',
    ],
    kind: 'it',
  },
];

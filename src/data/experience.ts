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
      'C’est là que j’ai appris à accueillir, expliquer et gérer les imprévus.',
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
    role: 'Développeur web, stage de 2 mois',
    company: 'Mooven, Montpellier',
    facts: [
      'Refonte CSS complète en respectant la charte UX imposée, modules santé en PHP Symfony 3.5.',
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
    period: 'Déc. 2025 – Mai 2026',
    host: 'ascension-wow.remote',
    role: 'Développeur Python, automatisation et IA',
    company: 'Ascension WoW, à distance',
    facts: [
      'Traduction du jeu (dialogues, quêtes, sorts) vers cinq langues : mandarin, allemand, espagnol, français, russe.',
      'Base de 300 000 termes en production continue 24h/24, avec 99,95 % de réussite en sortie.',
      'Filtres de validation, support aux utilisateurs, correctifs sans interruption de service.',
    ],
    kind: 'it',
  },
  {
    period: 'Été 2026',
    host: 'freelance.ganges',
    role: 'Développeur freelance, applications métier',
    company: 'Canoë Montana et Canoë Horizon, Ganges (34)',
    facts: [
      'Deux applications livrées : site vitrine, réservation en ligne, back-office de gestion.',
      'Sécurité complète : droits imposés en base, clé serveur, anti-spam, rôles patron et employé séparés.',
      'Hébergement Cloudflare : DNS, certificats, anti-bot, confirmations par email.',
      'Recueil du besoin, formation du gérant, suivi après livraison.',
    ],
    kind: 'it',
  },
];

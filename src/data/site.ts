/**
 * Données globales du site (identité, coordonnées, méta).
 * Centralisé ici pour préparer une future internationalisation (fr/en).
 */
export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  cvPath: string;
  description: string;
  /** URL absolue du site, utilisée pour l'Open Graph et le JSON-LD. */
  siteUrl: string;
}

export const site: SiteConfig = {
  name: 'Yassine Benyachou',
  role: 'Technicien Systèmes & Réseaux · Développeur',
  tagline:
    'Six ans en informatique, du support de parc au développement d’applications livrées en production. Un passé de terrain qui m’a appris la relation client.',
  email: 'ben.yachou@yahoo.com',
  phone: '06 01 00 04 62',
  location: 'Grabels — Montpellier (34)',
  github: 'Benyachou',
  githubUrl: 'https://github.com/Benyachou',
  linkedinUrl: 'https://www.linkedin.com/in/benyachou/',
  cvPath: 'cv.pdf',
  description:
    'Portfolio de Yassine Benyachou, technicien systèmes & réseaux et développeur (web, Python, Flutter). Applications livrées en production, laboratoire réseau, parcours et contact.',
  siteUrl: 'https://benyachou.github.io',
};

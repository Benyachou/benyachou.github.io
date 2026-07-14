/**
 * Données globales du site (identité, coordonnées, méta).
 * Centralisé ici pour préparer une future internationalisation (fr/en).
 */
export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  githubUrl: string;
  cvPath: string;
  description: string;
  /** URL absolue du site, utilisée pour l'Open Graph et le JSON-LD. */
  siteUrl: string;
}

export const site: SiteConfig = {
  name: 'Yassine Benyachou',
  role: 'Technicien Systèmes & Réseaux · Développeur Full-Stack',
  tagline:
    'Double profil : j’administre des systèmes et des réseaux, et je livre des applications web & mobiles utilisées en production par de vrais clients.',
  email: 'ben.yachou@yahoo.com',
  github: 'Benyachou',
  githubUrl: 'https://github.com/Benyachou',
  cvPath: 'cv.pdf',
  description:
    'Portfolio de Yassine Benyachou, développeur full-stack (web, mobile Flutter, Python/IA) et technicien systèmes & réseaux. Découvrez mes projets, mon expérience et mes compétences.',
  siteUrl: 'https://benyachou.github.io',
};

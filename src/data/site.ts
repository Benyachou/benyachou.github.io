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
  role: 'Développeur · Technicien Systèmes & Réseaux',
  tagline:
    'Je conçois des solutions complètes — du code testé et déployé en CI/CD jusqu’au support et à la maintenance en production.',
  email: 'ben.yachou@yahoo.com',
  github: 'Benyachou',
  githubUrl: 'https://github.com/Benyachou',
  cvPath: 'cv.pdf',
  description:
    'Portfolio de Yassine Benyachou, développeur polyvalent (web, mobile, Python/IA) et technicien systèmes & réseaux. Découvrez mes projets, mon expérience et mes compétences.',
  siteUrl: 'https://benyachou.github.io',
};

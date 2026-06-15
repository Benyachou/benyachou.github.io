// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// Déploiement GitHub Pages
// ---------------------------------------------------------------------------
// Deux cas de figure, à choisir selon le nom du dépôt :
//
//   1. Dépôt "portfolio" (page de projet)  → site servi sur
//      https://benyachou.github.io/portfolio/
//      → SITE = 'https://benyachou.github.io'  /  BASE = '/portfolio'
//
//   2. Dépôt "benyachou.github.io" (page utilisateur, racine du domaine) →
//      https://benyachou.github.io/
//      → SITE = 'https://benyachou.github.io'  /  BASE = '/'
//
// Configuration par défaut : cas n°2 (dépôt "benyachou.github.io", racine).
// Pour le cas n°1 (dépôt "portfolio"), remplacer BASE par '/portfolio'.
// ---------------------------------------------------------------------------
const SITE = 'https://benyachou.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  // URL sans slash final → évite les doublons dans le sitemap.
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

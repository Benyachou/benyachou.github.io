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
// Configuration par défaut : cas n°1 (dépôt "portfolio").
// Pour le cas n°2, remplacer BASE par '/'.
// ---------------------------------------------------------------------------
const SITE = 'https://benyachou.github.io';
const BASE = '/portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

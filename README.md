# Portfolio — Yassine Benyachou

Site portfolio personnel statique : **Développeur · Technicien Systèmes & Réseaux**.

Construit avec [Astro](https://astro.build) + [TypeScript](https://www.typescriptlang.org/) et stylé avec [Tailwind CSS v4](https://tailwindcss.com). Site 100 % statique, sans backend, optimisé pour le SEO et la performance (objectif Lighthouse ~100).

## ✨ Fonctionnalités

- Single-page avec navigation sticky et ancres
- Mode sombre (toggle + `prefers-color-scheme`, sans flash au chargement)
- Responsive mobile/desktop, animations discrètes au scroll
- Données structurées JSON-LD `Person`, Open Graph, sitemap, favicon
- Contenu et projets centralisés dans `src/data/` (typés)

## 🚀 Démarrer en local

Prérequis : [Node.js](https://nodejs.org) 18+ (testé avec Node 24).

```bash
npm install      # installe les dépendances
npm run dev      # serveur de dev → http://localhost:4321
```

> ℹ️ Avec un `base` configuré (voir ci-dessous), l'URL locale est
> `http://localhost:4321/portfolio/`.

Autres commandes :

```bash
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build de production en local
```

## 📁 Structure

```
src/
├── components/   # Composants .astro (Nav, Hero, Projects, Contact, …)
├── data/         # Contenu typé : projets, compétences, expérience, formation
├── layouts/      # Layout de base (SEO, méta, thème)
├── pages/        # index.astro (page unique)
└── styles/       # global.css (Tailwind + thème + animations)
public/           # Fichiers statiques (favicon, cv.pdf, robots.txt)
```

## ➕ Ajouter un projet

Édite **uniquement** `src/data/projects.ts` et ajoute une entrée :

```ts
{
  title: 'Mon projet',
  description: 'Description courte.',
  stack: ['Stack', 'Tech'],
  repo: 'https://github.com/Benyachou/mon-projet',
  demo: 'https://…', // optionnel
}
```

Le contenu des autres sections se modifie de la même façon dans
`src/data/` (`skills.ts`, `experience.ts`, `education.ts`, `site.ts`).

## 📄 CV

Dépose ton CV au format PDF dans `public/cv.pdf`. Il est lié depuis le hero
et la barre de navigation.

## ✉️ Formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io) (gratuit, sans backend) :

1. Crée un formulaire sur Formspree et récupère ton identifiant.
2. Remplace `FORMSPREE_ID` dans `src/components/Contact.astro`.

Tant que ce n'est pas fait, le lien `mailto:` reste pleinement fonctionnel.

## 🌐 Déploiement sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement à
chaque push sur `main`.

### 1. Configurer le chemin de base

Dans `astro.config.mjs`, ajuste `SITE` et `BASE` selon le **nom du dépôt** :

| Dépôt GitHub              | URL publique                          | `BASE`        |
| ------------------------- | ------------------------------------- | ------------- |
| `portfolio` (par défaut)  | `benyachou.github.io/portfolio/`      | `'/portfolio'`|
| `benyachou.github.io`     | `benyachou.github.io/`                | `'/'`         |

> Si tu changes `BASE`, pense à mettre à jour l'URL dans
> `public/robots.txt` et `siteUrl` dans `src/data/site.ts`.

### 2. Pousser le code

```bash
git remote add origin https://github.com/Benyachou/portfolio.git
git push -u origin main
```

### 3. Activer GitHub Pages

Dans le dépôt GitHub → **Settings → Pages → Build and deployment → Source =
GitHub Actions**.

Le prochain push (ou un lancement manuel via l'onglet **Actions**) publiera le
site. L'URL apparaît ensuite dans Settings → Pages.

### 4. Déposer le CV

Place `public/cv.pdf`, commit et push : il sera inclus au prochain déploiement.

## 🌍 Internationalisation (à venir)

Le contenu est isolé dans `src/data/` pour faciliter l'ajout de l'anglais
ultérieurement (fichiers i18n séparés ou variantes par langue). Le site est
actuellement en français (`lang="fr"`).

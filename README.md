# Little Astro Blog

Personal blog built with [Astro](https://astro.build), deployed to GitHub Pages at
**https://bobby-jordan.github.io/little-astro-blog/**

## First-time setup

1. Push this folder to `https://github.com/bobby-jordan/little-astro-blog`:
   ```bash
   git init
   git add .
   git commit -m "Initial blog"
   git branch -M main
   git remote add origin https://github.com/bobby-jordan/little-astro-blog.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Watch the **Actions** tab. When the run is green, the site is live.

## Writing a post

Add a Markdown file to `src/content/blog/`:

```markdown
---
title: 'My post'
description: 'One-line summary'
pubDate: 2026-10-20
tags: [notes]
---

Content here.
```

Commit and push. The site rebuilds automatically.

Set `draft: true` in the frontmatter to keep a post off the live site.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321/little-astro-blog/
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/blog/` | Blog posts (Markdown) |
| `src/pages/about.md` | About page |
| `src/consts.ts` | Site title, description, author, GitHub link |
| `src/styles/global.css` | Colors, fonts, typography |
| `public/` | Static files (images go in `public/images/`) |
| `.github/workflows/deploy.yml` | Build & deploy to GitHub Pages |

Also included: RSS feed (`/rss.xml`), sitemap, tag pages, dark mode, 404 page.

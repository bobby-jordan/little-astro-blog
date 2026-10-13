---
title: 'How to write a post on this blog'
description: 'A cheat sheet for frontmatter, Markdown and the publish workflow.'
pubDate: 2026-10-13
tags: [meta, guide]
---

Every post is a Markdown file in `src/content/blog/`. The file name becomes the
URL, so `my-first-writeup.md` is published at `/blog/my-first-writeup/`.

## Frontmatter

```yaml
---
title: 'My first writeup'
description: 'One line shown in the post list and in search results'
pubDate: 2026-10-20
updatedDate: 2026-10-22   # optional
tags: [ctf, web]          # optional
draft: true               # optional; drafts only show in `npm run dev`
---
```

## Markdown you can use

**Bold**, *italic*, `inline code`, [links](https://astro.build) and lists all
work as you'd expect.

> Blockquotes are good for callouts or quoting a source.

Code blocks get syntax highlighting:

```bash
nmap -sC -sV -oA scans/initial 10.10.10.10
```

```python
def greet(name: str) -> str:
    return f"hello, {name}"
```

| Column | Another |
| ------ | ------- |
| Tables | work    |

Images go in `public/images/` and are referenced with the base path included:
`![alt text](/little-astro-blog/images/screenshot.png)`.

## Publishing

```bash
git add .
git commit -m "New post: my first writeup"
git push
```

GitHub Actions builds the site and it's live a minute or two later.

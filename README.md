# meethybrid.github.io

Personal website of **Michael Philip** (Meethybrid) — Software Engineer, Product Builder, Cybersecurity Enthusiast, and Author based in Nigeria.

Built with Jekyll. Deployed to GitHub Pages.

---

## Local Development

### Prerequisites
- Ruby 3.x
- Bundler

### Setup

```bash
# Clone the repo (source branch)
git clone https://github.com/meethybrid/meethybrid.github.io
cd meethybrid.github.io
git checkout source

# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Open in browser
open http://localhost:4000
```

---

## Repository Structure

```
meethybrid.github.io/
├── _layouts/          # Page templates (default, post)
├── _includes/         # Reusable partials (navbar, footer)
├── _posts/            # Blog posts (YYYY-MM-DD-title.md)
├── _projects/         # Project case studies
├── assets/
│   ├── css/           # main.css (all styles)
│   ├── js/            # main.js (all scripts)
│   └── imgs/          # Images and favicon
├── _config.yml        # Site configuration
├── index.md           # Homepage
├── about.md
├── experience.md
├── projects.md
├── skills.md
├── cybersecurity.md
├── books.md
├── blog.md
├── resume.md
└── contact.md
```

---

## Branch Strategy

| Branch   | Purpose                          |
|----------|----------------------------------|
| `source` | Development — make changes here  |
| `main`   | Built site — deployed by CI/CD   |

GitHub Actions automatically builds `source` → `main` on every push.

**Never push directly to `main`.**

---

## Adding a Blog Post

Create a new file in `_posts/`:

```
_posts/YYYY-MM-DD-post-title.md
```

With frontmatter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-06-01
categories: [Engineering]  # or: Cybersecurity, Product, Psychology, etc.
read_time: 5
description: "Brief description for SEO and previews."
---

Your markdown content here.
```

---

## Customization

### Personal Details
Update `_config.yml` with your real email, GitHub handle, LinkedIn URL, Twitter handle, etc.

### Contact Form
Update the form action URL in `contact.md` with your Formspree endpoint:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Resume PDF
Place your resume at `assets/resume/michael-philip-resume.pdf`.

### Profile Photo
Add your photo at `assets/imgs/michael-philip.jpg` and update the profile avatar in `index.md`.

### Google Analytics
Add your GA4 tag in `_includes/head.html` (create this if needed).

---

## Deployment

Push to the `source` branch. GitHub Actions builds and deploys automatically.

```bash
git add .
git commit -m "Update content"
git push origin source
```

---

## License

MIT — feel free to fork and adapt for your own site.

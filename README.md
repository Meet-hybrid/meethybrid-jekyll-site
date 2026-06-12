# Michael Philip — Premium Developer Portfolio 🚀

A high-performance, premium developer portfolio engineered with **Jekyll**, **Vanilla JavaScript**, and **GitHub Actions**. This site is designed to bridge the gap between software engineering, cybersecurity, and product design.

**Live Site:** [https://Meet-hybrid.github.io](https://Meet-hybrid.github.io)

---

## ✨ Features

- **Premium UI/UX:** Sophisticated glassmorphism, Bento-grid architecture, and fluid typography using the **Geist** font family.
- **Interactive Micro-interactions:** Custom-coded magnetic buttons, smooth-follow cursor, and scroll-reveal animations.
- **Cyber Terminal:** An interactive terminal simulation showcasing cybersecurity skills and technical depth.
- **Dark/Light Mode:** Robust theme engine with persistent state management.
- **Automated CI/CD:** Zero-overhead deployment using GitHub Actions.

---

## 🛠️ Customization

### Personal Details
Update `_config.yml` with your professional details. This file controls the site-wide metadata, SEO, and social links:
```yaml
author:
  name: Michael Philip
  email: philipmichaelonyekachi@gmail.com
  github: Meet-hybrid
  twitter: Meethybrid_
  # ...
```

### Contact Form
The contact form is powered by **Formspree**. To receive messages, update the `action` URL in `contact.md`:
```html
<form action="https://formspree.io/f/philipmichaelonyekachi@gmail.com" method="POST">
```

### Resume PDF
Your professional resume should be placed at:
`assets/resume/michael-philip-resume.pdf`

### Profile Photo
Your official profile picture should be placed at:
`assets/imgs/michael-philip.jpg`

---

## 🚀 Deployment

This project uses a dual-branch automated workflow. All development happens on the `source` branch, and the built site is served from the `main` branch.

### Local Development
```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve
```

### Pushing to Production
GitHub Actions automatically builds and deploys the site whenever you push to the `source` branch.

```bash
git add .
git commit -m "Update content"
git push origin source
```

---

## 📂 Repository Structure

```text
Meet-hybrid.github.io/
├── _layouts/          # Premium glassmorphism templates
├── _includes/         # Reusable components (Navbar, Footer)
├── _posts/            # Blog content
├── assets/
│   ├── css/           # main.css (Advanced tokens & Bento grid)
│   ├── js/            # main.js (Interactions & Terminal engine)
│   ├── resume/        # Professional CV (PDF)
│   └── imgs/          # Optimized images
├── _config.yml        # Global metadata & SEO config
├── .github/           # CI/CD (GitHub Actions workflow)
└── index.md           # Bento-grid Homepage
```

---

## 📄 License
MIT — Created by **Michael Philip** (Meethybrid).

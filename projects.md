---
layout: default
title: "Projects — Michael Philip"
description: "Software projects built by Michael Philip — HybridChat, Retail Analytics Dashboard, Customer Feedback App, and more."
permalink: /projects/
---

<section class="page-header">
  <div class="container">
    <p class="section-label">Portfolio</p>
    <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.25rem);">Things I've Built</h1>
    <p class="section-subtitle">Case studies, architecture overviews, and lessons learned from real projects.</p>
  </div>
</section>

<section class="section">
  <div class="container">

    <!-- Filter tabs -->
    <div class="filter-tabs" id="filterTabs">
      <button class="filter-tab active" data-filter="all">All Projects</button>
      <button class="filter-tab" data-filter="fullstack">Full-Stack</button>
      <button class="filter-tab" data-filter="frontend">Frontend</button>
      <button class="filter-tab" data-filter="backend">Backend</button>
      <button class="filter-tab" data-filter="analytics">Analytics</button>
    </div>

    <!-- POS System — Featured -->
    <div class="card" style="margin-bottom:32px;border-left:3px solid var(--gold);" data-category="fullstack backend">
      <div style="display:grid;grid-template-columns:1fr 240px;gap:40px;align-items:start;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span class="badge badge--gold">Featured</span>
            <span class="badge badge--green">Live</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:12px;">Point of Sale (POS) System</h2>
          <p style="color:var(--grey-2);line-height:1.7;margin-bottom:20px;font-size:0.9375rem;">
            A comprehensive retail management system designed to streamline business operations. Features include inventory tracking, automated sales calculations, real-time transaction recording, and business reporting.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Architecture</h3>
          <p style="color:var(--grey-2);font-size:0.875rem;line-height:1.7;margin-bottom:16px;">
            Built with a robust React frontend and a scalable Node.js backend. Data is persisted in a PostgreSQL database, managed through an optimized ORM layer. The system implements secure JWT authentication and role-based access control for staff and administrators.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Test Information</h3>
          <div style="font-family:var(--font-mono);font-size:0.8125rem;color:var(--gold);margin-bottom:20px;padding:12px;background:var(--bg-2);border:1px solid var(--border-gold);border-radius:var(--radius);">
            <strong>Sample Barcodes:</strong> 111111, 222222, 333333, 444444, 555555 <br>
            <span style="font-size:0.75rem;color:var(--grey-3);">// Enter these in the POS interface to simulate items.</span>
          </div>

          <div class="skill-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">REST API</span>
          </div>

          <div style="display:flex;gap:10px;">
            <a href="https://pos-system-nine-coral.vercel.app/" target="_blank" rel="noopener" class="btn btn--primary btn--sm">Live Demo →</a>
          </div>
        </div>

        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-3);margin-bottom:12px;">// System Overview</div>
          <pre style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-2);line-height:1.8;margin:0;white-space:pre-wrap;">Backend (Node.js)
  ├── Auth Controller
  ├── Product Service
  └── Order Repository

Database
  └── PostgreSQL
       ├── Products
       ├── Transactions
       └── Users

Frontend
  └── React Dashboard</pre>
        </div>
      </div>
    </div>

    <!-- Habit Tracker -->
    <div class="card" style="margin-bottom:32px;" data-category="fullstack frontend">
      <div style="display:grid;grid-template-columns:1fr 240px;gap:40px;align-items:start;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span class="badge badge--green">Live</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:12px;">Habit Tracker</h2>
          <p style="color:var(--grey-2);line-height:1.7;margin-bottom:20px;font-size:0.9375rem;">
            A productivity-focused application that helps users build and maintain positive routines. It provides visual feedback on consistency and allows users to track multiple habits with personalized targets.
          </p>

          <div class="skill-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">Cloud Firestore</span>
            <span class="tech-tag">CSS3</span>
          </div>

          <div style="display:flex;gap:10px;">
            <a href="https://habit-tracker-olive-psi.vercel.app/" target="_blank" rel="noopener" class="btn btn--primary btn--sm">Live Demo →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- HybridChat — Featured -->
    <div class="card" style="margin-bottom:32px;border-left:3px solid var(--gold);" data-category="fullstack frontend">
      <div style="display:grid;grid-template-columns:1fr 240px;gap:40px;align-items:start;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span class="badge badge--gold">Featured</span>
            <span class="badge badge--green">Live</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:12px;">HybridChat</h2>
          <p style="color:var(--grey-2);line-height:1.7;margin-bottom:20px;font-size:0.9375rem;">
            A real-time messaging application built with Vue.js and Firebase Firestore. HybridChat supports multi-user conversations, live authentication, protected routes, online status indicators, and a fully responsive design that works across all device sizes.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Architecture</h3>
          <p style="color:var(--grey-2);font-size:0.875rem;line-height:1.7;margin-bottom:16px;">
            Firebase Firestore handles real-time data synchronization via snapshot listeners — messages appear instantly across all connected clients without polling. Firebase Authentication manages user sessions and guards private routes. Pinia serves as the state management layer, keeping auth state, user presence, and message threads in sync across components. The app is deployed to Vercel with automatic CI/CD on push.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Key Challenges</h3>
          <ul class="timeline-item__list" style="margin-bottom:20px;">
            <li>Implementing real-time presence — tracking who is online and updating it reliably without memory leaks</li>
            <li>Managing Firestore security rules to protect user data while allowing real-time reads</li>
            <li>Designing component architecture so the chat UI stays responsive at all message volumes</li>
          </ul>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Lessons Learned</h3>
          <ul class="timeline-item__list" style="margin-bottom:24px;">
            <li>Real-time systems require careful lifecycle management — every listener must be cleaned up</li>
            <li>Firestore's document model encourages you to think about data access patterns upfront</li>
            <li>Optimistic UI updates dramatically improve perceived performance</li>
          </ul>

          <div class="skill-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Firebase Firestore</span>
            <span class="tech-tag">Firebase Auth</span>
            <span class="tech-tag">Tailwind CSS</span>
            <span class="tech-tag">Pinia</span>
            <span class="tech-tag">Vercel</span>
          </div>

          <div style="display:flex;gap:10px;">
            <a href="#" target="_blank" rel="noopener" class="btn btn--primary btn--sm">Live Demo →</a>
            <a href="#" target="_blank" rel="noopener" class="btn btn--outline btn--sm">GitHub Repo</a>
          </div>
        </div>

        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-3);margin-bottom:12px;">// HybridChat architecture</div>
          <pre style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-2);line-height:1.8;margin:0;white-space:pre-wrap;">Vue.js (Composition API)
  └── Pinia Store
       ├── authStore
       ├── chatStore
       └── presenceStore

Firebase
  ├── Firestore (realtime)
  ├── Auth (sessions)
  └── Security Rules

Deployment
  └── Vercel (auto CI/CD)</pre>
        </div>
      </div>
    </div>

    <!-- Retail Analytics -->
    <div class="card" style="margin-bottom:32px;" data-category="analytics frontend">
      <div style="display:grid;grid-template-columns:1fr 240px;gap:40px;align-items:start;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span class="badge badge--blue">Analytics</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:12px;">Retail Analytics Dashboard</h2>
          <p style="color:var(--grey-2);line-height:1.7;margin-bottom:20px;font-size:0.9375rem;">
            A business intelligence dashboard built for retail partner performance tracking. The system surfaces KPIs, revenue trends, growth metrics, and partner rankings through data visualizations built in React with a Python-powered API backend.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Features</h3>
          <ul class="timeline-item__list" style="margin-bottom:16px;">
            <li>Live KPI tracking — activations, revenue, churn, growth rate</li>
            <li>Interactive charts for trend analysis across time periods</li>
            <li>Partner performance leaderboard with exportable reports</li>
            <li>Filterable tables with search and regional segmentation</li>
          </ul>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Lessons Learned</h3>
          <ul class="timeline-item__list" style="margin-bottom:24px;">
            <li>Redux shines for complex dashboards where many components share global filter state</li>
            <li>Data normalization on the API layer saves significant frontend processing time</li>
            <li>Chart accessibility matters — color choices should work for colorblind users</li>
          </ul>

          <div class="skill-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Redux</span>
            <span class="tech-tag">Python API</span>
            <span class="tech-tag">Data Visualization</span>
            <span class="tech-tag">Recharts</span>
          </div>
        </div>

        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-3);margin-bottom:12px;">// Stack overview</div>
          <pre style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-2);line-height:1.8;margin:0;white-space:pre-wrap;">React (Frontend)
  └── Redux
       ├── metricsSlice
       ├── filterSlice
       └── uiSlice

Python (Backend)
  ├── FastAPI / Flask
  ├── Data processing
  └── REST endpoints

Visualization
  └── Recharts / D3</pre>
        </div>
      </div>
    </div>

    <!-- Customer Feedback -->
    <div class="card" style="margin-bottom:32px;" data-category="fullstack backend">
      <div style="display:grid;grid-template-columns:1fr 240px;gap:40px;align-items:start;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span class="badge badge--blue">Full-Stack</span>
            <span class="badge badge--green">Tested</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:12px;">Customer Feedback App</h2>
          <p style="color:var(--grey-2);line-height:1.7;margin-bottom:20px;font-size:0.9375rem;">
            A full-stack feedback collection application with a React frontend, Node.js/Express API, persistent database storage, and a comprehensive Jest test suite. Built with production-level validation and error handling throughout.
          </p>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Testing Strategy</h3>
          <ul class="timeline-item__list" style="margin-bottom:16px;">
            <li>Unit tests for all utility functions and API route handlers</li>
            <li>Integration tests for API endpoints using Supertest</li>
            <li>React Testing Library tests for form components and user flows</li>
            <li>Validation tests covering edge cases for all input fields</li>
          </ul>

          <h3 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--grey-1);margin-bottom:10px;">Lessons Learned</h3>
          <ul class="timeline-item__list" style="margin-bottom:24px;">
            <li>Writing tests first changes how you design functions — they become smaller and more predictable</li>
            <li>Validation at the API layer is non-negotiable — never trust client-side data alone</li>
            <li>Error messages are a product feature — they should guide users, not confuse them</li>
          </ul>

          <div class="skill-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">Jest</span>
            <span class="tech-tag">Supertest</span>
            <span class="tech-tag">React Testing Library</span>
          </div>
        </div>

        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-3);margin-bottom:12px;">// Test coverage</div>
          <pre style="font-family:var(--font-mono);font-size:0.7rem;color:var(--grey-2);line-height:1.8;margin:0;white-space:pre-wrap;">Tests
  ├── Unit (Jest)
  │    ├── validation.test.js
  │    └── utils.test.js
  ├── Integration
  │    └── api.test.js
  └── Component
       ├── Form.test.jsx
       └── List.test.jsx

Coverage: ~85%+</pre>
        </div>
      </div>
    </div>

    <div style="text-align:center;margin-top:48px;">
      <p style="color:var(--grey-3);font-family:var(--font-mono);font-size:0.8125rem;">More projects being built. Follow along on GitHub.</p>
      <a href="https://github.com/meethybrid" target="_blank" rel="noopener" class="btn btn--outline" style="margin-top:16px;">View GitHub Profile →</a>
    </div>
  </div>
</section>

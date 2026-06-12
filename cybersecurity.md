---
layout: default
title: "Cybersecurity — Michael Philip"
description: "Michael Philip's cybersecurity learning journey — roadmap, labs, tools, Linux mastery, and ethical hacking notes."
permalink: /cybersecurity/
---

<section class="page-header">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
      <div>
        <p class="section-label">Cybersecurity</p>
        <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.25rem);">Learning to Hack<br>(Ethically)</h1>
        <p class="section-subtitle">A structured journey into cybersecurity — because building software and securing it are two sides of the same skill.</p>
      </div>
      <div class="terminal-wrapper" style="max-width: 500px;">
        <div class="terminal">
          <div class="terminal__header">
            <div class="terminal__dot terminal__dot--red"></div>
            <div class="terminal__dot terminal__dot--yellow"></div>
            <div class="terminal__dot terminal__dot--green"></div>
            <div class="terminal__title">michael@kali: ~</div>
          </div>
          <div class="terminal__body">
            <div id="terminal-content"></div>
            <span class="terminal__cursor"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">

    <!-- Why section -->
    <div class="card" style="margin-bottom:48px;border-left:3px solid var(--gold);max-width:760px;">
      <p class="section-label" style="margin-bottom:8px;">The Why</p>
      <p style="color:var(--grey-1);font-size:1.0625rem;line-height:1.8;">
        Every API I build raises the question: <em style="color:var(--gold);">how would someone attack this?</em> Every system I work on makes me wonder about its weak points. Cybersecurity isn't a separate career — it's a deeper understanding of the systems engineers build every day. My goal is to earn professional competency in security, complementing my engineering work and eventually contributing to the protection of African digital infrastructure.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 320px;gap:48px;align-items:start;">
      <div>

        <!-- Learning Roadmap -->
        <p class="section-label" style="margin-bottom:20px;">Learning Roadmap</p>
        <div class="cyber-roadmap" style="margin-bottom:48px;">

          <div class="cyber-item">
            <div class="cyber-item__icon">🐧</div>
            <div>
              <div class="cyber-item__label">Linux Fundamentals</div>
              <div class="cyber-item__sub">File system, permissions, bash scripting, processes</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">65%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:65%"></div>
              </div>
            </div>
          </div>

          <div class="cyber-item">
            <div class="cyber-item__icon">🌐</div>
            <div>
              <div class="cyber-item__label">Networking Fundamentals</div>
              <div class="cyber-item__sub">TCP/IP, DNS, HTTP, OSI model, Wireshark</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">50%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:50%"></div>
              </div>
            </div>
          </div>

          <div class="cyber-item">
            <div class="cyber-item__icon">🔍</div>
            <div>
              <div class="cyber-item__label">Reconnaissance & OSINT</div>
              <div class="cyber-item__sub">Information gathering, passive recon techniques</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">40%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:40%"></div>
              </div>
            </div>
          </div>

          <div class="cyber-item">
            <div class="cyber-item__icon">🔓</div>
            <div>
              <div class="cyber-item__label">Ethical Hacking Basics</div>
              <div class="cyber-item__sub">Vulnerability scanning, exploit methodology</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">25%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:25%"></div>
              </div>
            </div>
          </div>

          <div class="cyber-item">
            <div class="cyber-item__icon">🌍</div>
            <div>
              <div class="cyber-item__label">Web Application Security</div>
              <div class="cyber-item__sub">OWASP Top 10, SQL injection, XSS, CSRF</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">35%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:35%"></div>
              </div>
            </div>
          </div>

          <div class="cyber-item">
            <div class="cyber-item__icon">🏆</div>
            <div>
              <div class="cyber-item__label">CompTIA Security+</div>
              <div class="cyber-item__sub">Target certification — 2025/2026</div>
            </div>
            <div class="cyber-item__progress">
              <div class="progress-label">10%</div>
              <div class="progress-bar-wrap">
                <div class="progress-bar" style="width:10%"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- Tools -->
        <p class="section-label" style="margin-bottom:20px;">Security Tools I'm Learning</p>
        <div class="skills-grid" style="margin-bottom:48px;">
          <div class="skill-category">
            <div class="skill-category__label">🐧 Linux Tools</div>
            <div class="skill-tags">
              <span class="skill-tag">Bash</span>
              <span class="skill-tag">grep / awk / sed</span>
              <span class="skill-tag">netstat</span>
              <span class="skill-tag">ss</span>
              <span class="skill-tag">cron</span>
              <span class="skill-tag">chmod / chown</span>
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-category__label">🔍 Recon & Scanning</div>
            <div class="skill-tags">
              <span class="skill-tag">Nmap</span>
              <span class="skill-tag">Wireshark</span>
              <span class="skill-tag">Shodan</span>
              <span class="skill-tag">theHarvester</span>
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-category__label">💻 Practice Platforms</div>
            <div class="skill-tags">
              <span class="skill-tag">TryHackMe</span>
              <span class="skill-tag">HackTheBox</span>
              <span class="skill-tag">OverTheWire</span>
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-category__label">🌍 Web Security</div>
            <div class="skill-tags">
              <span class="skill-tag">Burp Suite</span>
              <span class="skill-tag">OWASP ZAP</span>
              <span class="skill-tag">SQLmap (learning)</span>
            </div>
          </div>
        </div>

        <!-- Notes section -->
        <p class="section-label" style="margin-bottom:20px;">Field Notes</p>
        <div class="posts-grid">
          <div class="post-card">
            <div class="post-card__category">Linux</div>
            <div class="post-card__title">File permissions demystified: chmod, chown, and the meaning of 777</div>
            <p class="post-card__excerpt">Why everyone telling you to chmod 777 everything is giving you terrible advice.</p>
            <div class="post-card__meta"><span>Coming soon</span></div>
          </div>
          <div class="post-card">
            <div class="post-card__category">Networking</div>
            <div class="post-card__title">What happens when you type a URL — from a security perspective</div>
            <p class="post-card__excerpt">DNS poisoning, SSL stripping, and why HTTPS isn't always enough.</p>
            <div class="post-card__meta"><span>Coming soon</span></div>
          </div>
          <div class="post-card">
            <div class="post-card__category">Web Security</div>
            <div class="post-card__title">The OWASP Top 10 explained for developers who actually build things</div>
            <p class="post-card__excerpt">Real examples, real code, real consequences. Not theory.</p>
            <div class="post-card__meta"><span>Coming soon</span></div>
          </div>
        </div>

      </div>

      <!-- Sidebar -->
      <div style="display:flex;flex-direction:column;gap:20px;position:sticky;top:88px;">
        <div class="card">
          <div class="section-label" style="margin-bottom:12px;">Target Certifications</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="padding:12px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius);">
              <div style="font-size:0.875rem;font-weight:600;margin-bottom:4px;">CompTIA Security+</div>
              <div class="badge badge--gold" style="font-size:0.7rem;">In Progress</div>
            </div>
            <div style="padding:12px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius);">
              <div style="font-size:0.875rem;font-weight:600;margin-bottom:4px;">CEH — Certified Ethical Hacker</div>
              <div class="badge badge--blue" style="font-size:0.7rem;">Planned 2026</div>
            </div>
            <div style="padding:12px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius);">
              <div style="font-size:0.875rem;font-weight:600;margin-bottom:4px;">eJPT (Junior Pentester)</div>
              <div class="badge badge--blue" style="font-size:0.7rem;">Planned 2026</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="section-label" style="margin-bottom:12px;">Philosophy</div>
          <p style="font-size:0.875rem;color:var(--grey-2);line-height:1.7;font-style:italic;">
            "To break into a system ethically, you must first understand it completely. Security knowledge makes you a better builder."
          </p>
        </div>

        <div class="card">
          <div class="section-label" style="margin-bottom:12px;">Currently Practicing</div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius);">
            <span>🎯</span>
            <div>
              <div style="font-size:0.8rem;font-weight:600;">TryHackMe</div>
              <div style="font-size:0.7rem;color:var(--grey-3);font-family:var(--font-mono);">Pre-Security Path</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

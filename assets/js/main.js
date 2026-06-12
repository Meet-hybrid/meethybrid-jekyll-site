// ===================================================
// MEETHYBRID — Main JavaScript (Premium Upgrade)
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Initialize Body ---
  document.body.classList.remove('loading');

  // --- Theme toggle ---
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', stored);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // --- Custom Cursor ---
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');

  if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    });

    const animateCursor = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;

      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effect on links/buttons
    document.querySelectorAll('a, button, .clickable').forEach(el => {
      el.addEventListener('mouseenter', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)');
      el.addEventListener('mouseleave', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)');
    });
  }

  // --- Magnetic Buttons ---
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // --- Mobile nav ---
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // --- Scroll Reveal ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay based on index if needed, or use CSS
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, index * 50);
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section, .card, .project-card, .skill-category, .cyber-item, .timeline-item, .hero__content > *').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

  // --- Terminal Simulation ---
  const terminal = document.getElementById('terminal-content');
  if (terminal) {
    const lines = [
      'MichaelPhilip@Meethybrid:~$ whoami',
      'Software Engineer | Product Builder',
      'MichaelPhilip@Meethybrid:~$ ls capabilities/',
      'FullStack.js  CyberSecurity.sh  ProductDesign.fig',
      'MichaelPhilip@Meethybrid:~$ ./check_availability.py',
      'Status: [OPEN] to international opportunities...'
    ];

    let lineIndex = 0;
    let charIndex = 0;

    const typeLine = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          terminal.innerHTML += lines[lineIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeLine, 30);
        } else {
          terminal.innerHTML += '<br>';
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, 500);
        }
      }
    };
    typeLine();
  }
});

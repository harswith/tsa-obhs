/**
 * TSA OBHS — Main Script
 * Handles announcements rendering, scroll animations, navbar behavior, and mobile menu.
 */

/* ============================================================
   ANNOUNCEMENTS DATA
   Add new posts here — newest first. They render automatically.
   ============================================================ */
const announcements = [
  {
    date: '2026-07-26',
    title: 'Upcoming First Chapter Meeting',
    body: 'Our inaugural meeting date and location will be announced shortly. Join our GroupMe to get notified first!',
    tag: 'Meeting',
  },
];

/* ============================================================
   ANNOUNCEMENTS RENDERING
   ============================================================ */
function renderAnnouncements() {
  const grid = document.getElementById('announcements-grid');
  if (!grid) return;

  // Sort newest first (already ordered, but enforce)
  const sorted = [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  grid.innerHTML = sorted
    .map((item, index) => {
      const parsed = new Date(item.date + 'T00:00:00');
      const month = parsed.toLocaleString('en-US', { month: 'short' });
      const day = parsed.getDate();
      const year = parsed.getFullYear();
      const tagClass = item.tag.toLowerCase().replace(/\s+/g, '-');
      const tagIcon = getTagIcon(item.tag);

      return `
        <article
          class="announcement-card announcement-card--${tagClass}"
          data-reveal
          style="transition-delay: ${index * 0.1}s"
        >
          <div class="announcement-card__date">
            <span class="announcement-card__month">${month}</span>
            <span class="announcement-card__day">${day}</span>
            <span class="announcement-card__year">${year}</span>
          </div>
          <div class="announcement-card__body">
            <span class="announcement-card__tag announcement-card__tag--${tagClass}">
              <i class="${tagIcon}" aria-hidden="true"></i>
              ${item.tag}
            </span>
            <h3 class="announcement-card__title">${item.title}</h3>
            <p class="announcement-card__text">${item.body}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function getTagIcon(tag) {
  const icons = {
    Meeting: 'fa-solid fa-users',
    Deadline: 'fa-solid fa-clock',
    Event: 'fa-solid fa-star',
  };
  return icons[tag] || 'fa-solid fa-bullhorn';
}

/* ============================================================
   INTERSECTION OBSERVER — Scroll-triggered reveal animations
   ============================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, [data-reveal]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================================
   NAVBAR — Shrink on scroll + active link highlighting
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Shrink navbar on scroll
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Highlight active nav link based on scroll position
  function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;

    let currentSection = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    highlightActiveLink();
  }, { passive: true });

  handleNavbarScroll();
  highlightActiveLink();
}

/* ============================================================
   MOBILE MENU — Hamburger toggle with smooth open/close
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('.nav-link');

  function closeMenu() {
    toggle.classList.remove('open');
    navMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('open');
    navMenu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && toggle.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ============================================================
   SMOOTH SCROLL — Enhanced anchor navigation
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   PLACEHOLDER LINKS — Prevent navigation on placeholder hrefs
   ============================================================ */
function initPlaceholderLinks() {
  document.querySelectorAll('[data-placeholder="true"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
        console.info(
          'TSA OBHS: This is a placeholder link. Update the href in index.html when you have the real URL.'
        );
      }
    });
  });
}

/* ============================================================
   STAGGER HERO REVEAL — Sequential fade-in on page load
   ============================================================ */
function initHeroStagger() {
  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    // Trigger immediately on load for hero
    requestAnimationFrame(() => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderAnnouncements();
  initHeroStagger();
  initScrollReveal();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initPlaceholderLinks();
});

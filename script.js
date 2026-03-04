// ─── CUSTOM CURSOR ─────────────────────────
const cursor = document.getElementById('cur');
const cursorRing = document.getElementById('curR');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    cursorRing.style.width = '28px';
    cursorRing.style.height = '28px';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
  });
}

// ─── NAVBAR STICK ─────────────────────────
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('stuck');
    } else {
      nav.classList.remove('stuck');
    }
  });
}

// ─── MOBILE MENU ─────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ─── SMOOTH SCROLL ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#' && href !== '#signup') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ─── TOUCH DEVICE DETECTION ─────────────────────────
if (window.matchMedia('(hover: none)').matches) {
  document.body.classList.add('touch');
}

// ─── PAGE LOAD ANIMATION ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[class*="animate"]');
  elements.forEach(el => {
    el.style.animation = `fadeUp 0.6s ease-out forwards`;
  });
});

console.log('%c✨ Aibapay - Transferts d\'argent simplifiés ✨', 'color: #F5C000; font-size: 16px; font-weight:bold');

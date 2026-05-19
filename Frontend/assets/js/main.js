/*====================================================
   JASARA — ENHANCED main.js
   Custom Cursor · Page Loader · Hero Particles ·
   Counter Animation · GSAP ScrollTrigger ·
   Magnetic Hover · Ripple Effects
====================================================*/

/*=============== PAGE LOADER ===============*/
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  setTimeout(() => {
    loader.classList.add('loaded');
    setTimeout(() => loader.remove(), 700);
  }, 1800);
});

/*=============== MOBILE MENU TOGGLE ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Show Menu */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Hide Menu */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Hide Menu Automatically When a Link is Clicked */
const navLinks = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CUSTOM CURSOR ===============*/
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

// Smooth ring position (lerp)
let ringX = 0, ringY = 0;
let dotX  = 0, dotY  = 0;
let targetX = 0, targetY = 0;

window.addEventListener('mousemove', e => {
  targetX = e.clientX;
  targetY = e.clientY;

  // Dot follows instantly
  dotX = targetX;
  dotY = targetY;
  cursorDot.style.left = `${dotX}px`;
  cursorDot.style.top  = `${dotY}px`;
});

// Ring follows with lerp for smooth lag
const lerpRing = () => {
  ringX += (targetX - ringX) * 0.12;
  ringY += (targetY - ringY) * 0.12;
  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top  = `${ringY}px`;
  requestAnimationFrame(lerpRing);
};
lerpRing();

// Hover state on interactive elements
const hoverTargets = document.querySelectorAll(
  'a, button, .modern-card, .spotlight__panel, .home__aside-tag, .footer__social-link, .nav__login-btn, .scrollup, .nav__search, .nav__theme, input'
);

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor--hover');
  });
  el.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor--hover');
  });
});

// Click state
window.addEventListener('mousedown', () => document.body.classList.add('cursor--click'));
window.addEventListener('mouseup', () => document.body.classList.remove('cursor--click'));

// Hide cursor when leaving window
document.documentElement.addEventListener('mouseleave', () => {
  cursorDot.style.opacity  = '0';
  cursorRing.style.opacity = '0';
});
document.documentElement.addEventListener('mouseenter', () => {
  cursorDot.style.opacity  = '1';
  cursorRing.style.opacity = '0.6';
});

/*=============== HERO PARTICLES ===============*/
const particleContainer = document.getElementById('hero-particles');
if (particleContainer) {
  const COUNT = 20;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'hero__particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      --dur:   ${2.5 + Math.random() * 4}s;
      --delay: ${Math.random() * 6}s;
      width:   ${2 + Math.random() * 3}px;
      height:  ${2 + Math.random() * 3}px;
    `;
    particleContainer.appendChild(p);
  }
}

/*=============== SEARCH ===============*/
const searchButton  = document.getElementById('search-button');
const searchClose   = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

if (searchButton) {
  searchButton.addEventListener('click', () => searchContent.classList.add('show-search'));
}
if (searchClose) {
  searchClose.addEventListener('click', () => searchContent.classList.remove('show-search'));
}

/*=============== LOGIN ===============*/
const loginButton  = document.getElementById('login-button');
const loginClose   = document.getElementById('login-close');
const loginContent = document.getElementById('login-content');

if (loginButton) {
  loginButton.addEventListener('click', () => loginContent.classList.add('show-login'));
}
if (loginClose) {
  loginClose.addEventListener('click', () => loginContent.classList.remove('show-login'));
}

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let Swiperhome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  breakpoints: {
    1220: { spaceBetween: -32 }
  }
});

/*=============== FEATURED SWIPER ===============*/
let SwiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1150: { slidesPerView: 4, centeredSlides: false }
  }
});

/*=============== NEW SWIPER ===============*/
let SwiperNew = new Swiper('.new-swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  breakpoints: { 1150: { slidesPerView: 3 } }
});

/*=============== TESTIMONIAL SWIPER ===============*/
try {
  new Swiper('.testimonial-swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    slidesPerView: 'auto', // Lets your CSS widths dictate the size perfectly
    centeredSlides: true,  // ALWAYS centers the active card on every screen size
    autoplay: { 
      delay: 4000, 
      disableOnInteraction: false, 
      pauseOnMouseEnter: true 
    }
    // We removed the breakpoints because 'auto' and 'centeredSlides' 
    // handle responsiveness flawlessly on their own now!
  });
} catch (e) {
  console.warn('Testimonial Swiper error:', e);
}

/*=============== SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpEl = document.getElementById('scroll-up');
  if (!scrollUpEl) return;
  window.scrollY >= 350
    ? scrollUpEl.classList.add('show-scroll')
    : scrollUpEl.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop    = current.offsetTop - 58;
    const sectionId     = current.getAttribute('id');
    const sectionLink   = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
    if (!sectionLink) return;

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionLink.classList.add('active-link');
    } else {
      sectionLink.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== DARK / LIGHT THEME ===============*/
const themeButton   = document.getElementById('theme-button');
const darkTheme     = 'dark-theme';
const iconTheme     = 'ri-sun-line';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon  = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

sr.reveal(`.featured__container`);
sr.reveal(`.discount__data`, { origin: 'left' });
sr.reveal(`.discount__images`, { origin: 'right' });

/*=============== GSAP + SCROLL TRIGGER ===============*/
gsap.registerPlugin(ScrollTrigger);

/* -- Featured cards cascade -- */
gsap.from('.modern-card', {
  scrollTrigger: {
    trigger: '.featured__modern-grid',
    start: 'top 85%'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out'
});

/* -- Modern Author Cards Entrance -- */
gsap.from('.author-card', {
  scrollTrigger: { 
    trigger: '.authors__container', 
    start: 'top 85%' 
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15, // Cascades them in beautifully
  ease: 'power3.out'
});

/* -- Newsletter scale-in -- */
gsap.from('.newsletter__container', {
  scrollTrigger: { trigger: '.newsletter.section', start: 'top 85%' },
  scale: 0.92,
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

/* -- Nav entrance -- */
gsap.from('.nav__logo, .nav__item, .nav__actions', {
  opacity: 0,
  y: -20,
  duration: 1,
  delay: 1.8,
  stagger: 0.1,
  ease: 'power3.out'
});

/* -- Discount section parallax -- */
gsap.to('.discount__img1', {
  scrollTrigger: {
    trigger: '.discount.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  },
  y: -30,
  rotate: -5,
  ease: 'none'
});

gsap.to('.discount__img2', {
  scrollTrigger: {
    trigger: '.discount.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  },
  y: -50,
  rotate: 5,
  ease: 'none'
});

/* -- Footer redesign animations -- */
gsap.from('.footer__tagline', {
  scrollTrigger: { trigger: '.footer__tagline-band', start: 'top 85%' },
  opacity: 0,
  y: 50,
  duration: 1.1,
  ease: 'power3.out'
});

gsap.from('.footer__tagline-sub', {
  scrollTrigger: { trigger: '.footer__tagline-band', start: 'top 85%' },
  opacity: 0,
  y: 20,
  delay: 0.35,
  duration: 0.9,
  ease: 'power3.out'
});

gsap.from('.footer__mini-stats .footer__mini-stat', {
  scrollTrigger: { trigger: '.footer__brand', start: 'top 88%' },
  opacity: 0,
  y: 20,
  stagger: 0.15,
  duration: 0.7,
  ease: 'power2.out'
});

gsap.from('.footer__title', {
  scrollTrigger: { trigger: '.footer__data', start: 'top 88%' },
  opacity: 0,
  y: 15,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out'
});

gsap.from('.footer__link', {
  scrollTrigger: { trigger: '.footer__data', start: 'top 88%' },
  opacity: 0,
  x: -10,
  stagger: 0.04,
  duration: 0.5,
  delay: 0.2,
  ease: 'power2.out'
});

gsap.from('.footer__social-link', {
  scrollTrigger: { trigger: '.footer__social', start: 'top 88%' },
  opacity: 0,
  x: -15,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out'
});

gsap.from('.footer__bottom', {
  scrollTrigger: { trigger: '.footer__bottom', start: 'top 95%' },
  opacity: 0,
  y: 15,
  duration: 0.7,
  ease: 'power2.out'
});

/* -- Footer brand -- */
gsap.from('.footer__brand, .footer__description', {
  scrollTrigger: { trigger: '.footer__brand', start: 'top 88%' },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.9,
  ease: 'power2.out'
});

/* -- Testimonial entrance (Fixed for Swiper loop) -- */
gsap.from('.testimonial-swiper', {
  scrollTrigger: { 
    trigger: '#testimonial', 
    start: 'top 85%' 
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: 'power3.out',
  clearProps: 'all' /* This ensures Swiper regains full control after the animation finishes */
});

/*=============== HERO STATS COUNTER ANIMATION ===============*/
const animateCounter = (el, target) => {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // Easing: easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.home__stat-num');
      nums.forEach(num => {
        const target = parseInt(num.dataset.target, 10);
        animateCounter(num, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.home__stats');
if (statsEl) statsObserver.observe(statsEl);

/*=============== MAGNETIC HOVER EFFECT ===============*/
const magneticEls = document.querySelectorAll('.home__btn-primary, .home__btn-ghost-play, .footer__social-link, .nav__login-btn');

magneticEls.forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

/*=============== RIPPLE EFFECT ON BUTTONS ===============*/
const rippleButtons = document.querySelectorAll('.button');
rippleButtons.forEach(btn => {
  btn.classList.add('ripple-wrapper');
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${e.clientX - rect.left  - size / 2}px;
      top:    ${e.clientY - rect.top   - size / 2}px;
    `;
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

/*=============== HERO BOOK STACK — MOUSE-AWARE ROTATION (handled below) ===============*/
// Replaced by improved version at end of file

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/*=============== SECTION TITLES — SCROLL REVEAL ===============*/
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      titleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.section__title').forEach(el => titleObserver.observe(el));

/*=============== HERO SUBTLE MOUSE PARALLAX ON ORBS ===============*/
const orbs = document.querySelectorAll('.hero__orb');
const heroSection = document.querySelector('.home.section');

if (heroSection && orbs.length) {
  heroSection.addEventListener('mousemove', e => {
    const rect = heroSection.getBoundingClientRect();
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const dx = (e.clientX - rect.left - cx) / cx;
    const dy = (e.clientY - rect.top  - cy) / cy;

    orbs.forEach((orb, i) => {
      const depth = 0.015 + i * 0.008;
      orb.style.transform = `translate(${dx * 30 * depth * 100}px, ${dy * 20 * depth * 100}px)`;
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    orbs.forEach(orb => { orb.style.transform = ''; });
  });
}

/*=============== HERO BOOK STACK — MOUSE-AWARE ROTATION ===============*/
const heroBooks = document.getElementById('home-books');
if (heroBooks) {
  let tiltX = 0, tiltY = 0;
  let rafTilt;

  document.addEventListener('mousemove', e => {
    const rect = heroBooks.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    tiltX = dx * 10;
    tiltY = -dy * 7;
  });

  const animateTilt = () => {
    heroBooks.style.transform = `perspective(800px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
    rafTilt = requestAnimationFrame(animateTilt);
  };
  animateTilt();
}

/*=============== FOOTER GRID MOUSE PARALLAX ===============*/
const footerEl = document.querySelector('.footer');
if (footerEl) {
  footerEl.addEventListener('mousemove', e => {
    const rect = footerEl.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / rect.width;
    const dy = (e.clientY - rect.top  - rect.height / 2) / rect.height;
    footerEl.style.backgroundPosition = `${50 + dx * 3}% ${50 + dy * 3}%`;
  });
  footerEl.addEventListener('mouseleave', () => {
    footerEl.style.backgroundPosition = '';
  });
}

/*=============== FEATURED CARD 3D TILT ===============*/
document.querySelectorAll('.modern-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
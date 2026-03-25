import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Define elements and their animation styles dynamically
  const animationMap = [
    { selector: '#hero h1', class: 'animate-on-scroll', stagger: false },
    { selector: '#hero p', class: 'animate-on-scroll', delay: 'delay-100', stagger: false },
    { selector: '#hero .flex-col', class: 'animate-on-scroll', delay: 'delay-200', stagger: false },
    { selector: '#advantages .mb-20', class: 'animate-on-scroll', stagger: false },
    { selector: '#advantages > div.grid > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#programs .max-w-2xl', class: 'animate-on-scroll', stagger: false },
    { selector: '#programs .grid > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#trainers header', class: 'animate-on-scroll', stagger: false },
    { selector: '#trainers .grid > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#schedule .mb-16', class: 'animate-on-scroll', stagger: false },
    { selector: '#schedule .grid-cols-1.md\\:grid-cols-7 > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#schedule .grid-cols-1.md\\:grid-cols-3 > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#pricing .mb-20', class: 'animate-on-scroll', stagger: false },
    { selector: '#pricing .grid > div', class: 'animate-on-scroll', stagger: true },
    { selector: '#faq .col-span-12.lg\\:col-span-4', class: 'animate-on-scroll', stagger: false },
    { selector: '#faq .col-span-12.lg\\:col-span-8 > div', class: 'animate-fade-in', stagger: true },
    { selector: '#cta > div', class: 'animate-on-scroll', stagger: false }
  ];

  animationMap.forEach(config => {
    const elements = document.querySelectorAll(config.selector);
    elements.forEach((el, index) => {
      el.classList.add(config.class);
      if (config.delay) {
        el.classList.add(config.delay);
      } else if (config.stagger) {
        // Apply staggered delay based on index
        const delayClass = `delay-${(index % 4) * 100 + 100}`;
        el.classList.add(delayClass);
      }
      observer.observe(el);
    });
  });

  // Parallax Hero Effect
  const heroImg = document.querySelector('#hero .absolute.inset-0 img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // move image slightly down as user scrolls down
      heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
    }, { passive: true });
  }

  // Navbar dynamic transparency
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-neutral-950/90', 'shadow-2xl');
        nav.classList.remove('bg-neutral-950/60');
      } else {
        nav.classList.remove('bg-neutral-950/90', 'shadow-2xl');
        nav.classList.add('bg-neutral-950/60');
      }
    }, { passive: true });
  }
});

'use client';

import { useEffect } from 'react';

export function ScrollRevealObserver() {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const cards = document.querySelectorAll<HTMLElement>(
      '.feature-grid > .card, .project-grid > .card, .skills-grid > .card, .education-grid > .card'
    );

    if (!cards.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;

          if (entry.isIntersecting) {
            card.classList.remove('reveal-pending');
            card.classList.add('reveal-visible');
            observer.unobserve(card);
          } else {
            card.classList.add('reveal-pending');
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return null;
}

'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const links = [
  { label: 'Projects', href: '/projects', sectionId: 'projects' },
  { label: 'Experience', href: '/experience', sectionId: 'experience' },
  { label: 'Skills', href: '/skills', sectionId: 'skills' },
  { label: 'Education', href: '/education', sectionId: 'education' },
  { label: 'Contact', href: '/contact', sectionId: 'contact' },
];

const resumeHref = '/M_Athar_Ehsan_s_Resume.pdf';
const resumeFilename = 'M_Athar_Ehsan_s_Resume.pdf';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0 ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1) : 0
      );
      setIsCompact(window.scrollY > 40);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const sections = links
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);
    const visibleSections = new Map<Element, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target, entry);
          } else {
            visibleSections.delete(entry.target);
          }
        });

        const currentSection = [...visibleSections.values()].sort(
          (first, second) => second.intersectionRatio - first.intersectionRatio
        )[0];

        setActiveSection(currentSection ? `/${currentSection.target.id}` : null);
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollToCurrentPath = () => {
      const sectionId = window.location.pathname.slice(1);
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    if (window.location.pathname !== '/') {
      requestAnimationFrame(scrollToCurrentPath);
    }

    window.addEventListener('popstate', scrollToCurrentPath);
    return () => window.removeEventListener('popstate', scrollToCurrentPath);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnDesktopResize = () => {
      if (window.matchMedia('(min-width: 960px)').matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktopResize);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktopResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const hoveredIndex = links.findIndex((link) => link.href === hoveredLink);
  const activeIndex = links.findIndex((link) => link.href === activeSection);
  const indicatorIndex = hoveredIndex >= 0 ? hoveredIndex : activeIndex;

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    event.preventDefault();
    closeMenu();
    window.history.pushState(null, '', href);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <header className={`site-header${isCompact ? ' is-compact' : ''}`}>
        <div className="scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollProgress})` }} />
        </div>
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="/" onClick={scrollToTop}>
            <span>Athar Ehsan</span>
            <svg
              className="brand-qa-underline"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 2 4 L 10 11 L 24 1 H 198" />
            </svg>
          </a>
          <span className="nav-divider" aria-hidden="true" />

          <div className="nav-actions">
            <div className="nav-links">
              {links.map((link) => (
                <a
                  aria-current={activeSection === link.href ? 'location' : undefined}
                  className={`nav-link${activeSection === link.href ? ' is-active' : ''}`}
                  href={link.href}
                  key={link.href}
                  onClick={(event) => scrollToSection(event, link.href, link.sectionId)}
                  onBlur={() => setHoveredLink(null)}
                  onFocus={() => setHoveredLink(link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </a>
              ))}
              <span
                className="nav-indicator"
                aria-hidden="true"
                style={{
                  opacity: indicatorIndex >= 0 ? 1 : 0,
                  transform: `translate(${Math.max(indicatorIndex, 0) * 96}px, -50%)`,
                }}
              />
            </div>

            <button
              type="button"
              className="theme-toggle"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              <span className="theme-toggle-icon">
                {isDark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
              </span>
            </button>

            <a className="button button-primary navbar-resume" href={resumeHref} download={resumeFilename}>
              Resume
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="hamburger-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

          <div
            className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
            id="mobile-navigation"
            aria-hidden={!menuOpen}
          >
            {links.map((link) => (
              <a
                aria-current={activeSection === link.href ? 'location' : undefined}
                className={`nav-link mobile-menu-link${activeSection === link.href ? ' is-active' : ''}`}
                href={link.href}
                key={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(event) => scrollToSection(event, link.href, link.sectionId)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="button button-primary mobile-menu-resume"
              href={resumeHref}
              download={resumeFilename}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </div>
        </nav>
      </header>
      {menuOpen && (
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close navigation menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}
    </>
  );
}

import Image from 'next/image';
import { Check, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/MAtharEhsan', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadatharehsan', icon: Linkedin },
  { label: 'Email', href: 'mailto:muhammadatharehsan2@gmail.com', icon: Mail },
];

export function HeroSection() {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-dot-grid" />
        <div className="hero-glow hero-glow--first" />
        <div className="hero-glow hero-glow--second" />
        <div className="hero-waves">
          <svg className="hero-wave hero-wave--first" viewBox="0 0 2400 160" preserveAspectRatio="none">
            <path
              d="M0 80Q150 30 300 80T600 80T900 80T1200 80T1500 80T1800 80T2100 80T2400 80"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg className="hero-wave hero-wave--second" viewBox="0 0 2400 160" preserveAspectRatio="none">
            <path
              d="M0 105Q150 65 300 105T600 105T900 105T1200 105T1500 105T1800 105T2100 105T2400 105"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg className="hero-wave hero-wave--third" viewBox="0 0 2400 160" preserveAspectRatio="none">
            <path
              d="M0 125Q150 95 300 125T600 125T900 125T1200 125T1500 125T1800 125T2100 125T2400 125"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <div className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">SQA Engineer · Islamabad, Pakistan</span>
          <h1 className="hero-title">Hi, I&apos;m Muhammad Athar Ehsan.</h1>
          <p>
            I test and automate web applications using Playwright, Cypress, and Selenium, backed by MERN Stack
            development skills.
          </p>

          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="/M_Athar_Ehsan_s_Resume.pdf" download>
              Download Resume
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                className="text-link"
                href={href}
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon size={17} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-entrance">
            <div className="hero-photo-float">
              <div className="hero-photo-hover">
                <div className="hero-photo-ring">
                  <div className="hero-photo-ring-spin" aria-hidden="true" />
                  <div className="hero-photo-frame">
                    <Image
                      src="/profile_placeholder.png"
                      alt="Muhammad Athar Ehsan"
                      fill
                      priority
                      sizes="(max-width: 700px) 320px, 320px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="test-window" aria-hidden="true">
            <div className="test-window-title">sample-test.spec.ts</div>
            <ul className="test-window-list">
              {['User can log in', 'Search returns results', 'Checkout completes'].map((test) => (
                <li className="test-check" key={test}>
                  <Check size={14} aria-hidden="true" />
                  <span>{test}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

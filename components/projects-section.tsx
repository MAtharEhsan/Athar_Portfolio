import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Darussalam Automation',
    description:
      'End-to-end framework covering authentication, search, cart, and checkout, with API mocking and cross-browser runs.',
    technologies: 'Cypress · Selenium',
    href: 'https://github.com/MAtharEhsan/Cypress_testing_Darusslam-website',
    visual: 'testing',
    image: '/projects/darussalam-test.svg',
    imageAlt: 'Darussalam automation testing framework',
  },
  {
    title: 'HarfZaar · FYP, 2nd Position',
    description:
      'Urdu poetry platform with AI-powered text, voice, and image search, plus gamified community features.',
    technologies: 'React · Node.js · TensorFlow · Python',
    href: 'https://github.com/MAtharEhsan/HarfZaar',
    liveDemo: 'https://harfzaad.vercel.app/',
    visual: 'poetry',
    image: '/projects/harfzaar-landing.jpg',
    imageAlt: 'Harfzaar website landing-page artwork',
  },
  {
    title: 'Travel Website',
    description:
      'Responsive site with ticket booking, services, contact sections, and a mobile-friendly layout.',
    technologies: 'HTML · CSS · JavaScript · Bootstrap',
    href: 'https://github.com/MAtharEhsan/Travel-website',
    visual: 'travel',
    image: '/projects/travel-website.jpg',
    imageAlt: 'Illustrative travel destination for the Travel Website project',
  },
];

function ProjectPreview({ kind, image, imageAlt, isLive }: {
  kind: string;
  image: string;
  imageAlt: string;
  isLive: boolean;
}) {
  return (
    <div className={`project-preview project-preview--${kind}`}>
      <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" />
      {isLive && (
        <span className="live-badge">
          <span className="live-status-dot" aria-hidden="true" />
          Live
        </span>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <ProjectPreview
                kind={project.visual}
                image={project.image}
                imageAlt={project.imageAlt}
                isLive={Boolean(project.liveDemo)}
              />
              <div className="project-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-copy">{project.description}</p>
                <p className="project-tech">{project.technologies}</p>
                {project.liveDemo ? (
                  <div className="project-actions">
                    <a
                      className="button harfzaar-live-button"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open HarfZaar live demo"
                    >
                      Live Demo
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <a
                      className="button project-github-button"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View HarfZaar code on GitHub"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      View on GitHub
                    </a>
                  </div>
                ) : (
                  <a
                    className="button project-github-button"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    View on GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Code2, TestTube2, Users } from 'lucide-react';

const features = [
  {
    title: 'Quality Assurance',
    description: 'Manual, functional, and regression testing with clear defect tracking.',
    icon: CheckCircle2,
  },
  {
    title: 'Test Automation',
    description: 'End-to-end suites with Playwright, Cypress, and Selenium.',
    icon: TestTube2,
  },
  {
    title: 'Full Stack Development',
    description: 'Web applications with MongoDB, Express.js, React, and Node.js.',
    icon: Code2,
  },
  {
    title: 'Agile Delivery',
    description: 'Backlog management, risk mitigation, and team coordination.',
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section className="section section-band" id="what-i-do">
      <div className="container">
        <h2 className="section-title">What I do</h2>
        <div className="feature-grid">
          {features.map(({ title, description, icon: Icon }) => (
            <article className="card" key={title}>
              <div className="feature-icon">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="card-title">{title}</h3>
              <p className="card-copy">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    date: 'Oct 2026 – Present',
    role: 'SQA Engineer',
    company: 'Oak Street Technologies',
    companyUrl: 'https://9ostech.com/',
    description:
      'Functional, regression, and API testing, with defect tracking alongside developers.',
  },
  {
    date: 'Feb – Sep 2026',
    role: 'Jr. Software Engineer',
    company: 'RapidLabs.ai',
    description:
      'Coordinated engineering workstreams, Agile ceremonies, risk mitigation, and KPI reporting.',
  },
  {
    date: 'Feb – Apr 2026',
    role: 'SQA Automation Engineer',
    company: 'Techfy (Remote)',
    companyUrl: 'https://techfy.io/',
    description:
      'Built a Playwright and TypeScript end-to-end suite for the Click2Deploy platform.',
  },
  {
    date: 'Oct – Dec 2025',
    role: 'Software Quality Assurance Intern',
    company: 'Easykaam',
    description:
      'Manual testing of a live mobile app, test case design, and defect verification.',
  },
];

const skillGroups = [
  {
    title: 'Testing',
    skills: ['Playwright', 'Cypress', 'Selenium', 'Postman', 'API Testing', 'Manual Testing', 'Cross-Browser Testing'],
  },
  {
    title: 'Development',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'HTML5',
      'CSS3',
      'REST APIs',
    ],
  },
  {
    title: 'Delivery',
    skills: ['Agile/Scrum', 'Jira', 'Trello', 'ClickUp', 'Sprint Planning', 'Risk Management', 'KPI Reporting'],
  },
];

export function ExperienceSection() {
  return (
    <section className="section section-band" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.company}>
              <div className="experience-date">{item.date}</div>
              <div>
                <h3 className="experience-role">
                  {item.role} ·{' '}
                  {item.companyUrl ? (
                    <a
                      className="experience-company"
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="experience-company">{item.company}</span>
                  )}
                </h3>
                <p className="experience-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card" key={group.title}>
              <h3 className="card-title">{group.title}</h3>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

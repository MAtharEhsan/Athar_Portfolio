import { ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'HarfZaar',
    description:
      'AI-powered poetry platform allowing readers and poets to discover, share, and learn poetry. Includes voice/image/text search, interactive learning games, and poetry tips.',
    technologies: ['React', 'Node.js', 'Express', 'TensorFlow', 'Python'],
    features: [
      'User registration (reader/poet)',
      'AI-based multi-modal search',
      'Interactive poetry learning games',
      'Admin dashboard for user management',
      'Poet biography management',
    ],
    github: 'https://github.com/MAtharEhsan/HarfZaar.git',
    live: 'https://harfzaad.vercel.app/',
    award: '🏆 Scored 2nd Position - Final Year Project',
  },
  {
    title: 'Darussalam Website',
    description:
      'Comprehensive automated testing suite for Darussalam web application using modern testing tools.',
    technologies: ['Cypress', 'Selenium', 'JavaScript'],
    features: [
      'End-to-end test automation',
      'Cross-browser testing',
      'CI/CD integration',
    ],
    github: 'https://github.com/MAtharEhsan/Cypress_testing_Darusslam-website.git',
    award: 'Automation Testing',
  },
  {
    title: 'Travel Website',
    description:
      'Responsive travel booking platform with comprehensive service packages and booking functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design',
      'Service & package listings',
      'Booking system',
      'Contact management',
    ],
    github: 'https://github.com/MAtharEhsan/Travel-website.git',
    award: 'Responsive Web Design',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block text-base uppercase tracking-widest text-[#38BDF8] font-semibold mb-2">
            Check these out on my GitHub
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            My Projects
          </h2>

          <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto">
            Showcasing my work in full-stack development, QA automation, and innovative solutions.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-8 hover:border-[#38BDF8] transition-colors"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">

                  {/* TITLE + AWARD */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-bold text-[#E5E7EB]">
                      {project.title}
                    </h3>

                    {project.award && (
                      <span className="text-base bg-[#2563EB]/20 text-[#38BDF8] px-3 py-1 rounded-full">
                        {project.award}
                      </span>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mb-4">
                    <p className="text-base font-semibold text-[#E5E7EB] mb-2">
                      Key Features:
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-[#9CA3AF] text-base flex items-start gap-2"
                        >
                          <span className="text-[#38BDF8] mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#2563EB]/20 text-[#38BDF8] px-3 py-1 rounded-full text-base"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#38BDF8] text-[#0B0F19] rounded-lg hover:bg-[#2563EB] transition-colors font-semibold"
                      >
                        <Globe size={18} />
                        View Live
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-[#E5E7EB] rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
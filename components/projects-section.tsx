import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'HarfZaar - FYP (2nd Position)',
    description:
      'HarfZaar is a full-stack MERN web application for Urdu poetry enthusiasts. Users can submit, discover, and engage with poetry. The platform features an AI-powered multi-modal search supporting text, voice, and image queries, interactive gamified learning modules, and real-time community engagement to boost retention.',
    technologies: ['React', 'Node.js', 'Express', 'TensorFlow', 'JavaScript', 'Python'],
    github: 'https://github.com/MAtharEhsan/HarfZaar.git',
    live: 'https://harfzaad.vercel.app/',
  },
  {
    title: 'Darussalam Website - Automation Testing',
    description:
      'Developed a comprehensive automation testing suite for the Darussalam web application. Implemented end-to-end test automation, cross-browser testing, and CI/CD integration, significantly reducing manual regression efforts and improving defect detection coverage across environments.',
    technologies: ['Cypress', 'Selenium'],
    github: 'https://github.com/MAtharEhsan/Cypress_testing_Darusslam-website.git',
  },
  {
    title: 'Travel Website - Responsive Frontend Design',
    description:
      'Built a fully responsive travel booking website with dynamic UI components, smooth navigation, and optimized layouts for desktop, tablet, and mobile. Users can explore services, book tickets, and contact support seamlessly.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/MAtharEhsan/Travel-website.git',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-base uppercase tracking-widest text-[#4C1D95] font-semibold mb-2">
            Check these out on my GitHub
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            My Projects
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto">
            Showcasing my work in full-stack development, QA automation, and innovative solutions.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-8 hover:border-[#4C1D95] transition-colors"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#E5E7EB] mb-3">{project.title}</h3>

                  <p className="text-[#9CA3AF] mb-4 leading-relaxed text-lg">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-base font-semibold text-[#E5E7EB] mb-2">Built using:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#4C1D95]/20 text-[#E5E7EB] px-3 py-1 rounded-full text-base"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#4C1D95] text-[#E5E7EB] rounded-lg hover:bg-[#371875] transition-colors font-semibold"
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
import { TestTube2, Code2, GitBranch, Users, Zap, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: TestTube2,
    title: 'Software Quality Assurance',
    description: 'Expertise in manual and automated testing to ensure highest software quality standards.',
  },
  {
    icon: Zap,
    title: 'Test Automation',
    description: 'Building scalable Playwright, Cypress, and Selenium suites for reliable regression testing.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'MERN stack expertise with proficiency in React, Node, Express, and databases.',
  },
  {
    icon: GitBranch,
    title: 'API & Cross-Browser Testing',
    description: 'Validating REST APIs with Postman and ensuring consistent behavior across browsers.',
  },
  {
    icon: Users,
    title: 'Project Management',
    description: 'Experienced in leading projects, planning, and coordinating team efforts effectively.',
  },
  {
    icon: CheckCircle2,
    title: 'Software Testing',
    description: 'Comprehensive knowledge of SQE, testing methodologies, and quality assurance frameworks.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-base uppercase tracking-widest text-[#38BDF8] font-semibold mb-3">
          Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            What I Do
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto">
            Combining technical expertise with a passion for delivering excellence across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-6 hover:border-[#38BDF8] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Icon className="text-[#38BDF8]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

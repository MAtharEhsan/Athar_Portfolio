'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            Resume
          </h2>
          <p className="text-[#9CA3AF] text-xl mb-6">
            Comprehensive overview of my education, skills, and professional background.
          </p>
          <a
            href="/M_Athar_Ehsan_s_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-[#E5E7EB] rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold"
          >
            <Download size={20} />
            Download Full Resume
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors text-lg ${activeTab === tab.id
                ? 'bg-[#2563EB] text-[#E5E7EB]'
                : 'bg-[#1F2937] text-[#9CA3AF] hover:text-[#E5E7EB]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    BS Software Engineering
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    Sep 2021 – Jan 2026
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  COMSATS University Islamabad
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Relevant Coursework:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Software Quality Engineering',
                      'Software Testing',
                      'Software Project Management',
                      'SRE',
                      'Data Structures & Algorithms',
                      'OOP',
                      'MERN Development',
                      'DevOps',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    FSc. Pre Engineering
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2019 – 2021
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  Punjab Group of Colleges, Sargodha
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Courses:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Physics',
                      'Chemistry',
                      'Mathematics',
                      'English',
                      'Islamic Studies',
                      'Urdu',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    Matric in Science
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2017 – 2019
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  Govt. High School # 01, Sillanwali (Sargodha)
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Courses:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Physics',
                      'Chemistry',
                      'Biology',
                      'Mathematics',
                      'English',
                      'Islamic Studies',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {[
                {
                  category: 'Languages',
                  items: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Python',
                    'Java',
                    'C++',
                  ],
                },
                {
                  category: 'QA & Testing',
                  items: ['Cypress', 'Selenium', 'Manual Testing', 'Test Automation'],
                },
                {
                  category: 'Full Stack',
                  items: [
                    'React',
                    'Node.js',
                    'Express',
                    'MongoDB',
                    'MERN Stack',
                  ],
                },
                {
                  category: 'Tools & Platforms',
                  items: ['Git', 'GitHub', 'DevOps Basics', 'CI/CD'],
                },
                {
                  category: 'Soft Skills',
                  items: [
                    'Problem Solving',
                    'Team Collaboration',
                    'Project Management',
                    'Communication',
                  ],
                },
              ].map((skillGroup, idx) => (
                <div key={idx} className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#38BDF8] mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[#2563EB]/20 text-[#E5E7EB] px-4 py-2 rounded-lg text-base border border-[#2563EB]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">

              {/* Associate Project Manager */}
              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                      Associate Project Manager
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">
                      Rapidlabs.ai
                    </p>
                  </div>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    feb 2026 - Present
                  </span>
                </div>

                <ul className="space-y-2">
                  {[
                    'Managing multiple project workstreams, ensuring timely delivery',
                    'Coordinating cross-functional teams for smooth execution',
                    'Monitoring timelines, deliverables, and dependencies',
                    'Leading planning, scheduling, and resource coordination',
                    'Reporting project progress and KPIs to stakeholders',
                  ].map((item, idx) => (
                    <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SQA Intern */}
              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                      SQA Intern
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">
                      Easykaam (Startup)
                    </p>
                  </div>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    Nov 2025 – Jan 2026
                  </span>
                </div>

                <ul className="space-y-2">
                  {[
                    'Conducted manual testing of mobile application',
                    'Identified and tracked bugs for quality releases',
                    'Collaborated with developers to verify fixes',
                    'Improved application stability and performance',
                  ].map((item, idx) => (
                    <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Stack Developer */}
              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                      Full Stack Developer
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">
                      Remote (Part time)
                    </p>
                  </div>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2023 – Present
                  </span>
                </div>

                <ul className="space-y-2">
                  {[
                    'Built responsive web applications using React',
                    'Developed backend services with Node.js & Express',
                    'Designed and managed MongoDB databases',
                    'Integrated AI/ML features using Python',
                  ].map((item, idx) => (
                    <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
import { Check } from 'lucide-react';

const education = [
  {
    date: 'Sep 2021 – Jan 2026',
    program: 'BS Software Engineering',
    institution: 'COMSATS University Islamabad',
    coursework: [
      'Quality Engineering',
      'Software Testing',
      'Software Project Management',
      'SRE',
      'Data Structures and Algorithms',
      'OOP',
      'MERN Stack',
      'DevOps',
    ],
  },
  {
    date: '2019 – 2021',
    program: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges, Sargodha',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Islamic Studies', 'Urdu'],
  },
  {
    date: '2017 – 2019',
    program: 'Matric in Science',
    institution: 'Govt. High School #01, Sillanwali (Sargodha)',
    coursework: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Islamic Studies'],
  },
];

export function EducationSection() {
  return (
    <section className="section section-band" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="card education-item" key={item.program}>
              <span className="education-date-pill">{item.date}</span>
              <h3 className="education-program">{item.program}</h3>
              <p className="education-institution">{item.institution}</p>
              <div className="education-coursework">
                <h4>Coursework</h4>
                <div className="education-course-list">
                  {item.coursework.map((course) => (
                    <span className="education-course-chip" key={course}>
                      <Check size={14} aria-hidden="true" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

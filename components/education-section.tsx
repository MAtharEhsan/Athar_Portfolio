import { Check } from 'lucide-react';

const education = [
  {
    date: 'Sep 2021 – Jan 2026',
    program: 'BS Software Engineering',
    institution: 'COMSATS University Islamabad',
    coursework: [
      'Software Quality Engineering',
      'Software Testing',
      'Software Project Management',
      'Software Design and Architecture',
      'Software Requirement Engineering',
      'Data Structures and Algorithms',
      'Object Oriented Programming',
      'Mobile Application and Development',
      'Topic in Software Engineering I - MERN Stack',
      'Topic in Software Engineering II - DevOps',
      'Entrepreneurship',
    ],
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

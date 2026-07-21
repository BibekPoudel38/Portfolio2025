import React from 'react';

const EDUCATION = [
  {
    period: 'Aug 2024 - May 2026',
    school: 'California State University, Dominguez Hills',
    degree: 'Master of Science in Computer Science',
    location: 'Carson, California',
  },
  {
    period: 'Aug 2018 - Dec 2021',
    school: 'London Metropolitan University / Informatics College Pokhara',
    degree: 'Bachelor of Science in Computing',
    location: 'Pokhara, Nepal',
  },
];

export function Education() {
  return (
    <section id="education" className="section section-light education-section">
      <div className="container education-layout">
        <div className="section-heading">
          <span className="section-number">06 / Education</span>
          <h2>Built on computer science.<br />Sharpened by shipping.</h2>
        </div>
        <div className="education-list">
          {EDUCATION.map((item) => (
            <article className="education-row" key={item.school}>
              <time>{item.period}</time>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.location}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

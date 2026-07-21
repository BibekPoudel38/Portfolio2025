import React from 'react';

const EXPERIENCES = [
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Full-Stack Software Engineer - Graduate Internship, Applied AI & Banking Automation',
    period: 'Jan 2026 - Present',
    location: 'United States',
    current: true,
    highlights: [
      'Built summary-generation and case-retrieval services for an AI fraud investigation platform, helping analysts compare historical cases and draft investigation notes faster.',
      'Developed AI chatbot services across web and mobile support flows using RAG, semantic retrieval, and validated prompts - contributing to about 40% less manual support effort.',
      'Designed secure backend and data-access patterns for fraud events, customer profiles, transaction intelligence, and support knowledge.',
      'Hardened AI workflows with OAuth2/JWT, RBAC, prompt-validation guardrails, and rigorous architecture and API contract reviews.',
    ],
    tech: ['Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'RAG', 'RBAC'],
  },
  {
    company: 'TatvaSoft',
    role: 'Full-Stack Software Engineer - Platform Engineering',
    period: 'Jan 2020 - Jul 2023',
    location: 'Nepal / Remote',
    highlights: [
      'Improved platform throughput by 35% across high-volume checkout, order, inventory, payment, and fulfillment workflows.',
      'Reduced API response time by 28% by designing secure REST services with robust validation and error handling.',
      'Strengthened Stripe and shipping integrations and hardened order-processing edge cases to reduce transaction failures.',
      'Delivered responsive interfaces and optimized data flows through Dockerized services on AWS EC2/S3.',
    ],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST', 'Stripe', 'Docker', 'AWS', 'OAuth2/JWT'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">02 / Experience</span>
          <h2>Production work,<br />measured in outcomes.</h2>
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-meta">
                <p>{experience.period}</p>
                <span>{experience.location}</span>
                {experience.current && <i>Current</i>}
              </div>
              <div className="experience-body">
                <div className="experience-title">
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <ul className="outcome-list">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <ul className="chip-list" aria-label={`${experience.company} technologies`}>
                  {experience.tech.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

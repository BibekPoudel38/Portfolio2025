import { Boxes, BrainCircuit, CloudCog, CodeXml, Database, Gauge } from 'lucide-react';
import React from 'react';

const CATEGORIES = [
  {
    icon: BrainCircuit,
    title: 'AI / LLM Systems',
    skills: ['OpenAI API', 'LangChain', 'LangGraph', 'RAG', 'Embeddings', 'Semantic search', 'FAISS', 'Pinecone', 'Qdrant'],
  },
  {
    icon: Boxes,
    title: 'Agent Platforms',
    skills: ['MCP', 'OpenAPI-to-MCP', 'LLM routing', 'Tool gating', 'Workflow automation', 'Plugin marketplaces'],
  },
  {
    icon: CodeXml,
    title: 'Full-Stack',
    skills: ['TypeScript', 'Java', 'Python', 'JavaScript', 'Next.js', 'React', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'REST', 'GraphQL', 'WebSockets'],
  },
  {
    icon: Gauge,
    title: 'Architecture',
    skills: ['Multi-tenant SaaS', 'RBAC', 'Tenant-scoped workflows', 'Modular app systems', 'Typed API clients', 'Distributed systems'],
  },
  {
    icon: Database,
    title: 'Data / Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Kafka', 'Snowflake', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
  },
  {
    icon: CloudCog,
    title: 'Engineering Quality',
    skills: ['Code reviews', 'Architecture reviews', 'API design reviews', 'Test planning', 'CI/CD', 'Release readiness', 'Agile / Scrum'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section section-dark skills-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="section-number">04 / Capabilities</span>
            <h2>One stack.<br />No handoff gaps.</h2>
          </div>
          <p>My strongest work crosses model behavior, product architecture, interface quality, data, and operations.</p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map(({ icon: Icon, title, skills }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-title"><Icon size={21} strokeWidth={1.5} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

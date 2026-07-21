import { ArrowUpRight, Box, DatabaseZap, GitBranch, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const EESA_FEATURES = [
  { icon: GitBranch, label: '4-layer model routing', detail: 'Master, conversation, orchestration, workflow' },
  { icon: ShieldCheck, label: 'Centralized permissions', detail: 'RBAC, approvals, limits, protected routes' },
  { icon: Box, label: 'API-to-agent tooling', detail: 'OpenAPI 3.0 specifications converted to MCP' },
  { icon: DatabaseZap, label: 'Live platform operations', detail: 'Billing, plugins, dashboards, deployment' },
];

const PROJECTS = [
  {
    icon: DatabaseZap,
    number: '02',
    title: 'Enterprise AI Contract Intelligence',
    body: 'An AI system for clause extraction, semantic search, and legal knowledge retrieval, supported by large-scale ingestion and enterprise reporting pipelines.',
    tech: ['Spring Boot', 'FastAPI', 'OpenAI', 'LangChain', 'FAISS', 'Airflow', 'Spark', 'Snowflake'],
  },
  {
    icon: Truck,
    number: '03',
    title: 'Real-Time Logistics Visibility',
    body: 'An event-driven shipment tracking platform with asynchronous services for inventory sync, monitoring, and real-time logistics updates.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MongoDB', 'WebSockets', 'GitHub Actions'],
  },
];

export function Project() {
  return (
    <section id="projects" className="section section-work">
      <div className="container">
        <div className="section-heading split-heading work-heading">
          <div>
            <span className="section-number">03 / Selected work</span>
            <h2>Systems with<br />real operational weight.</h2>
          </div>
          <p>From a live multi-tenant AI platform to event-driven enterprise systems, every project is shaped around the architecture behind the interface.</p>
        </div>

        <article className="featured-project">
          <div className="featured-copy">
            <div className="project-label"><span>01</span> Flagship platform <i>Live</i></div>
            <h3>EESA.AI</h3>
            <p className="featured-subtitle">The control plane for multi-tenant AI agents and automation.</p>
            <p className="featured-description">
              Architected and operate a tenant-aware AI agent SaaS with protected workflows, plan-aware
              features, tenant-specific configuration, controlled tool publishing, and per-layer cost attribution.
            </p>
            <a className="text-link" href="https://eesa.ai" target="_blank" rel="noreferrer">
              Visit live platform <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="feature-list">
            {EESA_FEATURES.map(({ icon: Icon, label, detail }) => (
              <div className="feature-row" key={label}>
                <Icon size={20} strokeWidth={1.5} />
                <div><strong>{label}</strong><span>{detail}</span></div>
              </div>
            ))}
          </div>
          <div className="featured-tech">
            {['Next.js', 'TypeScript', 'MCP', 'OpenAPI 3.0', 'Qdrant', 'Stripe', 'Docker', 'Coolify'].map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </article>

        <div className="project-grid">
          {PROJECTS.map(({ icon: Icon, number, title, body, tech }) => (
            <article className="project-card" key={title}>
              <div className="project-card-head"><span>{number}</span><Icon size={24} strokeWidth={1.4} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
              <ul className="chip-list">
                {tech.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

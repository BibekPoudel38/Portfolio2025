import { Boxes, Braces, KeyRound, Route } from 'lucide-react';
import React from 'react';

const SYSTEMS = [
  {
    icon: Route,
    title: 'Agent systems',
    body: 'Layered LLM routing, tool-capability gating, RAG, semantic retrieval, and workflow automation.',
  },
  {
    icon: Boxes,
    title: 'Product architecture',
    body: 'Multi-tenant SaaS, modular app systems, typed clients, plan-aware features, and distributed services.',
  },
  {
    icon: KeyRound,
    title: 'Trust boundaries',
    body: 'Tenant-scoped workflows, OAuth2/JWT, centralized RBAC, approvals, and prompt-validation guardrails.',
  },
  {
    icon: Braces,
    title: 'End-to-end craft',
    body: 'React and Next.js interfaces backed by TypeScript, Java, Python, secure APIs, data, and cloud delivery.',
  },
];

export function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="section-number">01 / Profile</span>
            <h2>Architecture depth.<br />Product instinct.</h2>
          </div>
          <p>
            I am a full-stack AI product engineer with 3.5 years of full-time platform engineering
            plus enterprise applied-AI experience at JPMorgan Chase. I care about the difficult part:
            turning a compelling AI demo into a secure, observable, maintainable product.
          </p>
        </div>

        <div className="principle-grid">
          {SYSTEMS.map(({ icon: Icon, title, body }, index) => (
            <article className="principle-card" key={title}>
              <div className="card-index">0{index + 1}</div>
              <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const STATS = [
  { value: '3.5', suffix: 'yrs', label: 'Full-time platform engineering' },
  { value: '40', suffix: '%', label: 'Less manual support effort' },
  { value: '4', suffix: 'layers', label: 'Purpose-built LLM routing' },
  { value: '2', suffix: 'papers', label: 'Peer-reviewed ML research' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span /> Available for full-time opportunities</div>
          <p className="hero-kicker">Bibek Poudel / Full-Stack AI Product Engineer</p>
          <h1 id="hero-title">AI products engineered to operate.</h1>
          <p className="hero-lede">
            I build multi-tenant agent platforms, RAG-backed workflows, secure APIs, and cloud-native
            products - from enterprise banking automation to my own live AI SaaS.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://eesa.ai" target="_blank" rel="noreferrer">
              Explore EESA.AI <ArrowUpRight size={17} />
            </a>
            <a className="button button-secondary" href="#projects">
              Selected work <ArrowDown size={16} />
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            <a href="mailto:bibekpoudel2056@gmail.com"><Mail size={17} /> Email</a>
            <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://github.com/BibekPoudel38" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
        </div>

        <aside className="system-card" aria-label="EESA.AI platform overview">
          <div className="system-card-head">
            <div>
              <span className="eyebrow">Now shipping</span>
              <h2>EESA.AI</h2>
            </div>
            <a href="https://eesa.ai" target="_blank" rel="noreferrer" aria-label="Visit EESA.AI">
              eesa.ai <ArrowUpRight size={15} />
            </a>
          </div>
          <p className="system-intro">A live, multi-tenant AI agent and automation platform.</p>
          <div className="architecture-stack" aria-label="Four-layer LLM routing architecture">
            {['Master routing', 'Conversation layer', 'Agent orchestration', 'Workflow execution'].map((layer, index) => (
              <div className="architecture-row" key={layer}>
                <span>0{index + 1}</span>
                <strong>{layer}</strong>
                <i>{index === 0 ? 'select' : index === 3 ? 'execute' : 'route'}</i>
              </div>
            ))}
          </div>
          <div className="system-footer">
            <span>MCP</span><span>OpenAPI 3.0</span><span>Qdrant</span><span>RBAC</span>
          </div>
        </aside>
      </div>

      <div className="stat-strip container" aria-label="Career highlights">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <p><strong>{stat.value}</strong><span>{stat.suffix}</span></p>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

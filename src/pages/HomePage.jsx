import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CloudCog,
  Code2,
  Database,
  Linkedin,
  Mail,
  Network,
} from 'lucide-react';
import React from 'react';
import { PageShell } from '../components/PageShell.jsx';

const DOMAINS = [
  {
    icon: Bot,
    name: 'AI products and agents',
    description: 'Agents that retrieve knowledge, use tools, run workflows, and wait for approval when a person should decide.',
    skills: ['OpenAI API', 'LangChain', 'LangGraph', 'RAG', 'Embeddings', 'Semantic search', 'FAISS', 'Pinecone', 'Qdrant', 'MCP', 'LLM routing', 'Tool gating'],
  },
  {
    icon: Building2,
    name: 'Enterprise software',
    description: 'Secure services for banking, fraud operations, support systems, approvals, and role-based access.',
    skills: ['OAuth2/JWT', 'RBAC', 'Multi-tenant SaaS', 'Tenant workflows', 'REST', 'GraphQL', 'API design', 'Distributed systems'],
  },
  {
    icon: Code2,
    name: 'Full-stack platforms',
    description: 'Web products built from the interface through APIs, data models, billing, deployment, and operations.',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'WebSockets'],
  },
  {
    icon: CloudCog,
    name: 'Cloud and data systems',
    description: 'Event-driven services, data pipelines, containers, and cloud releases built for reliability and growth.',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Kafka', 'Snowflake', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: BrainCircuit,
    name: 'Applied ML research',
    description: 'Published work in low-resource medical translation and camera-LiDAR perception for autonomous vehicles.',
    skills: ['Transformers', 'NLP', 'Sensor fusion', 'PyTorch', 'Evaluation', 'Test planning', 'Code reviews', 'CI/CD', 'Release readiness'],
  },
];

const EXPERIENCES = [
  {
    company: 'JPMorgan Chase & Co.',
    period: 'Jan 2026 - Present',
    role: 'Full-Stack Software Engineer - Graduate Internship, Applied AI & Banking Automation',
    intro: 'Building applied-AI services for fraud investigation and customer support.',
    bullets: [
      'Built summary-generation and case-retrieval services that help fraud analysts compare past cases and prepare investigation notes faster.',
      'Developed RAG and semantic-retrieval services across web and mobile support flows, contributing to about 40% less manual support work.',
      'Designed services for fraud events, customer profiles, transaction intelligence, and support knowledge using Node.js, TypeScript, Python, PostgreSQL, Redis, and GraphQL.',
      'Added OAuth2/JWT, RBAC, and prompt validation to block malformed queries before retrieval and protect sensitive workflows.',
    ],
  },
  {
    company: 'TatvaSoft',
    period: 'Jan 2020 - Jul 2023',
    role: 'Full-Stack Software Engineer - Platform Engineering',
    intro: 'Built high-volume e-commerce workflows across the customer and operations lifecycle.',
    bullets: [
      'Improved platform throughput by 35% across checkout, orders, inventory, payments, and fulfillment using React, Node.js, and PostgreSQL.',
      'Reduced API response time by 28% across payment, order, shipping, and fulfillment integrations.',
      'Reduced transaction failures by strengthening Stripe and shipping integrations and handling checkout edge cases.',
      'Built accessible interfaces and data flows delivered through OAuth2/JWT, Docker, AWS EC2/S3, Agile sprints, and code review.',
    ],
  },
];

export function HomePage() {
  return (
    <PageShell>
      <main id="main">
        <section className="home-hero">
          <div className="hero-signal" aria-hidden="true">ENGINEER / BUILDER / RESEARCHER</div>
          <div className="layout-container home-hero-grid">
            <div className="home-hero-copy">
              <p className="plain-eyebrow">Bibek Poudel / Full-Stack AI Product Engineer</p>
              <h1>I build AI software that does real work.</h1>
              <p className="home-hero-lede">
                I build secure AI services, full-stack platforms, and data systems. My work spans
                enterprise banking at JPMorgan Chase, a live multi-tenant agent platform, and two
                peer-reviewed machine-learning papers.
              </p>
              <div className="home-hero-actions">
                <a className="primary-action" href="#work">See the work <ArrowDown size={17} /></a>
                <a className="secondary-action" href="/BibekPoudelResume.pdf" download>Download resume <ArrowDown size={17} /></a>
              </div>
              <div className="hero-contact-links">
                <a href="mailto:bibekpoudel2056@gmail.com"><Mail size={16} /> Email</a>
                <a href="https://www.linkedin.com/in/bibpou" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>

            <aside className="hero-proof-card" aria-label="Career summary">
              <p className="proof-card-label">What I bring</p>
              <div className="proof-card-row"><strong>4+ years</strong><span>Full-time platform engineering</span></div>
              <div className="proof-card-row"><strong>Enterprise AI</strong><span>Applied work at JPMorgan Chase</span></div>
              <div className="proof-card-row"><strong>Full ownership</strong><span>Interface, API, data, cloud, release</span></div>
              <div className="proof-card-row"><strong>2 papers</strong><span>NLP and autonomous perception</span></div>
              <div className="proof-card-status"><span /> Open to full-time engineering roles</div>
            </aside>
          </div>

          <div className="outcome-rail layout-container" aria-label="Measured outcomes">
            <div><strong>40%</strong><span>less manual support work</span></div>
            <div><strong>35%</strong><span>more platform throughput</span></div>
            <div><strong>28%</strong><span>faster API responses</span></div>
            <div><strong>2</strong><span>peer-reviewed ML papers</span></div>
          </div>
        </section>

        <section id="domains" className="content-section domain-section">
          <div className="layout-container">
            <div className="section-intro two-column-intro">
              <div><span className="section-kicker">01 / Domains + skills</span><h2>Where I do my best work—and the skills I use</h2></div>
              <p>Each domain is paired with the tools I use there, so you can see both what I build and how I build it.</p>
            </div>
            <div id="skills" className="domain-grid">
              {DOMAINS.map(({ icon: Icon, name, description, skills }, index) => (
                <article className="domain-card" key={name}>
                  <div className="domain-card-top"><span>0{index + 1}</span><Icon size={23} strokeWidth={1.5} /></div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="content-section work-section">
          <div className="layout-container">
            <div className="section-intro two-column-intro light-intro">
              <div><span className="section-kicker">02 / Selected work</span><h2>What I built and why it matters</h2></div>
              <p>Each project starts with a real operating problem, not a technology demo.</p>
            </div>

            <a className="work-feature" href="/eesa/">
              <div className="work-feature-main">
                <span className="work-type">1 / Product case study / Live</span>
                <h3>EESA.AI</h3>
                <p className="work-big-line">An AI agent that lets small businesses run work from chat.</p>
                <p>It turns requests into actions across invoices, orders, approvals, status updates, and connected tools—without making staff learn another dashboard.</p>
                <span className="case-link">Read the full case study <ArrowRight size={17} /></span>
              </div>
              <div className="work-feature-side">
                <div><span>Problem</span><strong>Work is split across chat, dashboards, and manual handoffs.</strong></div>
                <div><span>Solution</span><strong>One agent connects requests, tools, workflows, and approvals.</strong></div>
                <div><span>My work</span><strong>Multi-tenant platform, routing, RBAC, MCP tools, billing, dashboards, deployment.</strong></div>
              </div>
            </a>

            <div className="project-pair">
              <article className="compact-project">
                <Database size={23} />
                <span className="work-type">2 / Enterprise AI / Contracts</span>
                <h3>Contract Intelligence Platform</h3>
                <p>Extracts clauses, searches legal knowledge by meaning, and supports large-scale ingestion and reporting.</p>
                <div className="project-tech">Spring Boot / FastAPI / OpenAI / FAISS / Airflow / Spark / Snowflake</div>
              </article>
              <article className="compact-project">
                <Network size={23} />
                <span className="work-type">3 / Distributed systems / Logistics</span>
                <h3>Real-Time Logistics Visibility</h3>
                <p>Streams shipment changes to operations teams with event-driven services, live updates, inventory sync, and monitoring.</p>
                <div className="project-tech">Java / Spring Boot / Kafka / Redis / MongoDB / WebSockets</div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section experience-section-new">
          <div className="layout-container">
            <div className="section-intro"><span className="section-kicker">03 / Experience</span><h2>Professional experience</h2></div>
            <div className="new-experience-list">
              {EXPERIENCES.map((experience, index) => (
                <article className="new-experience" key={experience.company}>
                  <div className="experience-number">0{index + 1}</div>
                  <div className="experience-company">
                    <time>{experience.period}</time>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <div className="experience-results">
                    <strong>{experience.intro}</strong>
                    <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section research-preview">
          <div className="layout-container">
            <div className="section-intro two-column-intro">
              <div><span className="section-kicker">04 / Research</span><h2>Research tied to real problems</h2></div>
              <p>Two peer-reviewed papers: one improves how autonomous vehicles combine camera and depth data; the other tests safer medical translation for Nepali.</p>
            </div>

            <div className="research-preview-grid">
              <a className="research-preview-card research-card-blue" href="/research/mst/">
                <span className="paper-label">Autonomous perception / 2025</span>
                <h3>Helping a vehicle see depth and meaning at the same time</h3>
                <p>The Modified Sparse Transformer combines camera semantics with LiDAR geometry while reducing wasted attention on irrelevant data.</p>
                <div className="paper-metric"><strong>82.98%</strong><span>overall 3D mAP reported on KITTI</span></div>
                <span className="case-link">Read the paper breakdown <ArrowRight size={17} /></span>
              </a>
              <a className="research-preview-card research-card-orange" href="/research/clinical-translation/">
                <span className="paper-label">Medical NLP / RANLP 2025</span>
                <h3>Making English-Nepali medical translation more reliable</h3>
                <p>The study fine-tunes and tests multilingual models on clinical language, including terminology errors and hallucinations.</p>
                <div className="paper-metric"><strong>65.70</strong><span>BLEU for NLLB-200 vs 60.12 for mBART</span></div>
                <span className="case-link">Read the paper breakdown <ArrowRight size={17} /></span>
              </a>
            </div>
            <a className="view-all-link" href="/research/">View all research details <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="content-section education-section-new">
          <div className="layout-container">
            <div className="section-intro"><span className="section-kicker">05 / Education</span><h2>Education</h2></div>
            <div className="education-table">
              <article>
                <time>Aug 2024 - May 2026</time>
                <div><h3>California State University, Dominguez Hills</h3><p>Master of Science in Computer Science</p><span>Carson, California</span></div>
              </article>
              <article>
                <time>Aug 2018 - Dec 2021</time>
                <div><h3>London Metropolitan University / Informatics College Pokhara</h3><p>Bachelor of Science in Computing</p><span>Pokhara, Nepal</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="home-contact">
          <div className="layout-container contact-layout">
            <div>
              <span className="section-kicker">06 / Contact</span>
              <h2>Need an engineer who can own the whole product?</h2>
            </div>
            <div>
              <p>I am open to full-time software engineering and AI product roles in the United States.</p>
              <a className="contact-mail" href="mailto:bibekpoudel2056@gmail.com">bibekpoudel2056@gmail.com <ArrowUpRight size={21} /></a>
              <div className="contact-meta"><BriefcaseBusiness size={16} /> Full-stack / AI / Platform engineering</div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

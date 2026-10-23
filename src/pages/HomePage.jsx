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
    description: 'Multi-provider agent architectures that route across models, compile OpenAPI specs into MCP tools, and enforce prompt guardrails.',
    skills: [
      'Multi-Provider LLM Routing (Anthropic, OpenAI, Gemini, Moonshot, Ollama)',
      'Model Context Protocol (MCP)',
      'OpenAPI 3.1-to-MCP Compilation',
      'Prompt-Prefix Caching',
      'RAG & Semantic Retrieval',
      'LangGraph',
      'LangChain',
      'Qdrant',
      'FAISS',
    ],
  },
  {
    icon: Building2,
    name: 'Enterprise software',
    description: 'Secure services for banking fraud operations, request-scoped permission caching, multi-tenant SaaS isolation, and API gateways.',
    skills: [
      'OAuth2/JWT',
      'Centralized RBAC',
      'Multi-Tenant SaaS',
      'Request-Scoped Permission Caching',
      'Pre-Retrieval Prompt Guardrails',
      'REST',
      'GraphQL',
      'Distributed Systems',
    ],
  },
  {
    icon: Code2,
    name: 'Full-stack platforms',
    description: 'End-to-end product surfaces spanning web, mobile, and embedded IDE tooling with real-time streaming state.',
    skills: [
      'Python',
      'Django',
      'FastAPI',
      'TypeScript',
      'JavaScript',
      'Java',
      'Spring Boot',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Flutter',
      'WebSockets',
      'Monaco Editor',
    ],
  },
  {
    icon: CloudCog,
    name: 'Cloud and data systems',
    description: 'Event-driven telemetry pipelines, distributed ETL, caching topologies, and automated container deployments.',
    skills: [
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'Apache Kafka',
      'Apache Spark',
      'Apache Airflow',
      'Snowflake',
      'AWS (EC2/S3)',
      'Docker',
      'GitHub Actions (CI/CD)',
      'Coolify',
    ],
  },
  {
    icon: BrainCircuit,
    name: 'Applied ML research',
    description: 'Published research in sparse 3D attention and clinical LLM hallucination mitigation, backed by high-volume automated test suites.',
    skills: [
      'Sparse Transformers (MST)',
      'Multilingual Fine-Tuning (NLLB-200, mBART)',
      'Hallucination Mitigation',
      'Camera-LiDAR Sensor Fusion',
      'PyTorch',
      '7,600+ Automated Backend Tests',
    ],
  },
];

const EXPERIENCES = [
  {
    company: 'JPMorgan Chase & Co.',
    period: 'Jan 2026 – Present',
    role: 'Full-Stack Software Engineer — Applied AI & Banking Automation (Graduate Intern)',
    location: 'United States',
    intro: 'Building and shipping production RAG, semantic retrieval, and fraud investigation services.',
    bullets: [
      'Built and shipped summary-generation and case-retrieval services within an enterprise AI fraud investigation platform, enabling analysts to review suspicious activity, compare historical cases, and draft investigation notes faster.',
      'Developed production RAG and semantic-retrieval chatbot services across web and mobile support flows with validated prompt workflows, contributing to a ~40% reduction in manual support effort.',
      'Designed backend services and secure data-access patterns for fraud events, customer profiles, transaction intelligence, and support knowledge using Node.js, TypeScript, Python, PostgreSQL, Redis, and GraphQL.',
      'Hardened AI workflows with OAuth2/JWT, RBAC, and pre-retrieval prompt-validation guardrails that filtered malformed queries before vector lookup.',
    ],
  },
  {
    company: 'California State University, Dominguez Hills',
    period: 'Feb 2025 – May 2025',
    role: 'Graduate AI Research Assistant — Department of Computer Science',
    location: 'Carson, CA',
    intro: 'Fine-tuned multilingual foundation models and co-developed sparse camera-LiDAR fusion networks.',
    bullets: [
      'Fine-tuned and evaluated multilingual foundation models on clinical terminology to mitigate translation drift and generative hallucinations, with NLLB-200 reaching 65.70 BLEU vs. 60.12 for mBART (published in RANLP 2025).',
      'Co-developed the Modified Sparse Transformer (MST) with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles, pruning wasted attention compute on empty spatial data to reach 82.98% 3D mAP on KITTI (published in Transportation Research Interdisciplinary Perspectives, Vol. 34, 2025).',
    ],
  },
  {
    company: 'Independent Software Consultant',
    period: 'Jul 2023 – Aug 2024',
    role: 'Full-Stack & AI Systems Engineer (Commercial Client Engagements — NDA)',
    location: 'Remote',
    intro: 'Engineered commercial legal AI and real-time event-driven logistics visibility platforms.',
    bullets: [
      'Built and delivered an Enterprise AI Contract Intelligence Platform (Spring Boot, FastAPI, OpenAI, LangChain, FAISS, Airflow, Spark, Snowflake) and a Real-Time Logistics Visibility Platform (Spring Boot, Kafka, Redis, MongoDB, WebSockets, GitHub Actions) for commercial clients.',
    ],
  },
  {
    company: 'TatvaSoft',
    period: 'Jan 2020 – Jul 2023',
    role: 'Full-Stack Software Engineer — Platform Engineering',
    location: 'Remote / Nepal',
    intro: 'Engineered high-concurrency e-commerce transaction workflows and decoupled REST microservices.',
    bullets: [
      'Improved platform throughput by 35% by engineering high-volume e-commerce workflows across checkout, orders, inventory, payments, and fulfillment using React.js, Node.js, and PostgreSQL.',
      'Reduced API response time by 28% by designing secure REST services for payment, order, shipping, and fulfillment integrations with strict payload validation and error handling.',
      'Reduced transaction failures by strengthening Stripe and shipping API integrations and hardening order-processing edge cases across checkout.',
      'Built responsive, accessible UI components and optimized data-access flows; delivered via OAuth2/JWT auth, Dockerized services, and AWS (EC2/S3) within Agile sprints and code reviews.',
    ],
  },
];

const EESA_BADGES = [
  '~16:1 OpenAPI-to-MCP Compiler',
  '4-Layer 5-Provider Router',
  '7,600-Test Suite',
  '$188/mo Ledger Diagnostics',
  'Web + Flutter + MCP',
];

const EESA_PILLARS = [
  {
    label: 'LLM Unit-Cost Diagnostics & Caching Architecture',
    title: 'Diagnosed $188/mo unit cost & re-architected tier routing',
    detail: 'Instrumented provider token ledgers to diagnose a measured $188/user/month unit cost, tracing 74% of spend to prompt-prefix cache overhead and (sliced by model tier) 79% to a single over-provisioned model; re-architected model routing and tool-spec caching against that finding.',
  },
  {
    label: 'OpenAPI 3.1-to-MCP Compiler (~16:1 Compression)',
    title: 'Consolidated 923 operations into 57 agent tool definitions',
    detail: 'Built an OpenAPI 3.1 compiler that consolidated 923 API operations (737 paths, 79 categories) into 57 intent-level MCP tool definitions (~16:1 reduction), deploying 12 to production to reduce ambiguous endpoint selection by small models.',
  },
  {
    label: '4-Layer Provider-Agnostic LLM Router',
    title: '5 providers connected with zero regressions across 7,600 tests',
    detail: 'Migrated the platform off a single LLM vendor to a 4-layer router across 5 providers (Anthropic, OpenAI, Gemini, Moonshot, Ollama) using custom native adapters to preserve per-provider prompt caching, merging with zero regressions across a 7,600-test backend suite.',
  },
  {
    label: 'Agent Latency & Permission Caching',
    title: 'Eliminated redundant reads & enabled final-pass streaming',
    detail: 'Profiled ~1,300 uncached pre-token permission reads (198 tools × ~7 reads) across 6 sequential model round trips; eliminated ~200 redundant reads by wiring a request-scoped permission cache and shipped final-pass token streaming to render initial text within seconds rather than at end-of-turn.',
  },
  {
    label: 'End-to-End Multi-Tenant SaaS Execution',
    title: 'Production web, Flutter, and MCP client surfaces',
    detail: 'Engineered and operate the platform across web, Flutter, and MCP clients with centralized RBAC, tenant-scoped workflows, Stripe billing, a Monaco-based plugin marketplace, approval queues, and automated Coolify/Docker deployments.',
  },
];

const EESA_STACK = [
  'Python',
  'Django',
  'Next.js',
  'React',
  'TypeScript',
  'Flutter',
  'MCP',
  'OpenAPI 3.1',
  'LangGraph',
  'Qdrant',
  'PostgreSQL',
  'Redis',
  'Stripe',
  'Docker',
  'Coolify',
];

export function HomePage() {
  return (
    <PageShell>
      <main id="main">
        <section className="home-hero">
          <div className="hero-signal" aria-hidden="true">ENGINEER / BUILDER / RESEARCHER</div>
          <div className="layout-container home-hero-grid">
            <div className="home-hero-copy">
              <p className="plain-eyebrow">Bibek Poudel / FULL-STACK SOFTWARE ENGINEER | AI PLATFORMS, LLM INFRASTRUCTURE & DISTRIBUTED SYSTEMS</p>
              <h1>I build production AI platforms, LLM infrastructure, and distributed full-stack systems.</h1>
              <p className="home-hero-lede">
                Full-Stack Software Engineer with 4+ years of production experience across high-volume e-commerce,
                independent client platforms, and applied AI at JPMorgan Chase. Creator of EESA.AI, a multi-tenant
                agent platform featuring a 5-provider LLM router and an OpenAPI 3.1-to-MCP compiler that consolidates
                923 API operations into 57 agent tool definitions. Co-author of two peer-reviewed ML publications (2025).
              </p>
              <div className="home-hero-actions">
                <a className="primary-action" href="#work">See the work <ArrowDown size={17} /></a>
                <a className="secondary-action" href="/BibekPoudelResume.pdf" download>Download resume <ArrowDown size={17} /></a>
              </div>
              <div className="hero-contact-links">
                <a href="mailto:bibekpoudel2056@gmail.com"><Mail size={16} /> Email</a>
                <a href="https://www.linkedin.com/in/bibekpoudel38/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>

            <aside className="hero-proof-card" aria-label="Career summary">
              <p className="proof-card-label">What I bring</p>
              <div className="proof-card-row">
                <strong>~16:1 MCP Compression</strong>
                <span>923 OpenAPI 3.1 operations consolidated into 57 intent-level tool definitions (12 in production)</span>
              </div>
              <div className="proof-card-row">
                <strong>7,600+ Backend Tests</strong>
                <span>Zero-regression 4-layer LLM router across 5 model providers</span>
              </div>
              <div className="proof-card-row">
                <strong>~40% Less Manual Effort</strong>
                <span>Production RAG & banking automation workflows at JPMorgan Chase</span>
              </div>
              <div className="proof-card-row">
                <strong>2 Peer-Reviewed Papers</strong>
                <span>82.98% 3D mAP on KITTI & 65.70 BLEU clinical NLP at RANLP 2025</span>
              </div>
              <div className="proof-card-status"><span /> Open to full-time engineering & AI platform roles</div>
            </aside>
          </div>

          <div className="outcome-rail layout-container" aria-label="Measured outcomes">
            <div><strong>~16:1</strong><span>MCP compression (923 ops into 57 tools)</span></div>
            <div><strong>7,600+</strong><span>backend tests across 5 model providers</span></div>
            <div><strong>~40%</strong><span>less manual effort at JPMorgan Chase</span></div>
            <div><strong>2 Papers</strong><span>82.98% 3D mAP & 65.70 BLEU (2025)</span></div>
          </div>
        </section>

        <section id="domains" className="content-section domain-section">
          <div className="layout-container">
            <div className="section-intro two-column-intro">
              <div><span className="section-kicker">01 / Domains + skills</span><h2>Where I do my best work—and the skills I use</h2></div>
              <p>Each domain is paired with the production tools and engineering practices I use to ship resilient enterprise systems.</p>
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
              <div><span className="section-kicker">02 / Selected work</span><h2>Production systems & commercial delivery</h2></div>
              <p>Architected with hard systems constraints: slashing LLM unit economics, removing pre-token bottlenecks, and enforcing deterministic security boundaries.</p>
            </div>

            <a className="work-feature" href="/eesa/">
              <div className="work-feature-main">
                <div>
                  <span className="work-type">1 / Production AI Platform / Live (2025 – Present)</span>
                  <h3>EESA.AI</h3>
                  <p className="work-big-line">A multi-tenant AI agent and workflow automation platform engineered for production unit economics, tool accuracy, and low pre-token latency.</p>
                  <p>
                    Engineered across Web, Flutter, and MCP clients with a 5-provider LLM router, an automated OpenAPI 3.1-to-MCP
                    compiler, request-scoped permission caching, and a 7,600-test backend verification suite.
                  </p>
                  <div className="work-badge-strip">
                    {EESA_BADGES.map((badge) => (
                      <span className="work-badge" key={badge}>{badge}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <ul className="work-stack-pills">
                    {EESA_STACK.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <span className="case-link">Read the architectural deep-dive <ArrowRight size={17} /></span>
                </div>
              </div>

              <div className="work-feature-side">
                {EESA_PILLARS.map((pillar) => (
                  <div key={pillar.label}>
                    <span>{pillar.label}</span>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </a>

            <div className="project-pair">
              <article className="compact-project">
                <Database size={23} />
                <span className="work-type">2 / Commercial Client Engagement — NDA</span>
                <h3>Enterprise AI Contract Intelligence Platform</h3>
                <p>Built and delivered a commercial contract intelligence system for clause extraction, semantic search, and legal retrieval using Spring Boot, FastAPI, OpenAI, LangChain, and FAISS, backed by distributed Airflow, Spark, and Snowflake ingestion pipelines.</p>
                <div className="project-tech">Java / Spring Boot / FastAPI / OpenAI / LangChain / FAISS / Airflow / Spark / Snowflake</div>
              </article>
              <article className="compact-project">
                <Network size={23} />
                <span className="work-type">3 / Commercial Client Engagement — NDA</span>
                <h3>Real-Time Logistics Visibility Platform</h3>
                <p>Engineered and handed over an event-driven shipment tracking platform using Java, Spring Boot, Kafka, Redis, MongoDB, and WebSockets for sub-second telemetry updates, asynchronous inventory sync, and automated CI/CD releases via GitHub Actions.</p>
                <div className="project-tech">Java / Spring Boot / Apache Kafka / Redis / MongoDB / WebSockets / GitHub Actions</div>
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
                    <span className="experience-location">{experience.location}</span>
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

        <section id="research" className="content-section research-preview">
          <div className="layout-container">
            <div className="section-intro two-column-intro">
              <div><span className="section-kicker">04 / Research</span><h2>Peer-reviewed research tied to real systems</h2></div>
              <p>Two published papers: one prunes quadratic transformer attention for camera-LiDAR fusion in autonomous vehicles; the other evaluates foundation models and terminology drift for clinical translation.</p>
            </div>

            <div className="research-preview-grid">
              <a className="research-preview-card research-card-blue" href="/research/mst/">
                <span className="paper-label">Autonomous perception / Transportation Research 2025</span>
                <h3>MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles</h3>
                <p>Transportation Research Interdisciplinary Perspectives, Vol. 34, Article 101571 (2025). Co-developed Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion.</p>
                <div className="paper-metric"><strong>82.98%</strong><span>3D mAP achieved on KITTI benchmark</span></div>
                <span className="case-link">Read the paper breakdown <ArrowRight size={17} /></span>
              </a>
              <a className="research-preview-card research-card-orange" href="/research/clinical-translation/">
                <span className="paper-label">Clinical NLP / RANLP 2025</span>
                <h3>Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models</h3>
                <p>Proceedings of RANLP 2025, pp. 48–56, Varna, Bulgaria (2025). Fine-tuned multilingual foundation models on clinical terminology to mitigate translation drift and generative hallucinations.</p>
                <div className="paper-metric"><strong>65.70</strong><span>BLEU for NLLB-200 vs 60.12 for mBART</span></div>
                <span className="case-link">Read the paper breakdown <ArrowRight size={17} /></span>
              </a>
            </div>
            <a className="view-all-link" href="/research/">View all research details <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section id="education" className="content-section education-section-new">
          <div className="layout-container">
            <div className="section-intro"><span className="section-kicker">05 / Education</span><h2>Education</h2></div>
            <div className="education-table">
              <article>
                <time>Aug 2024 – May 2026</time>
                <div><h3>California State University, Dominguez Hills</h3><p>Master of Science in Computer Science</p><span>Carson, California</span></div>
              </article>
              <article>
                <time>Aug 2018 – Dec 2021</time>
                <div><h3>London Metropolitan University</h3><p>Bachelor of Science in Computing</p><span>Pokhara, Nepal</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="home-contact">
          <div className="layout-container contact-layout">
            <div>
              <span className="section-kicker">06 / Contact</span>
              <h2>Looking for an engineer who can architect and ship the full platform?</h2>
            </div>
            <div>
              <p>I am open to full-time Software Engineer, AI Platform, and Distributed Systems roles in the United States.</p>
              <a className="contact-mail" href="mailto:bibekpoudel2056@gmail.com">bibekpoudel2056@gmail.com <ArrowUpRight size={21} /></a>
              <div className="contact-meta"><BriefcaseBusiness size={16} /> Full-Stack Software Engineer &bull; Artesia, CA</div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Bot,
  BrainCircuit,
  Braces,
  Cpu,
  Layers,
  KeyRound,
  Plug,
  ServerCog,
  ShoppingBag,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero.jsx';
import { PageShell } from '../components/PageShell.jsx';

const ARCHITECTURAL_METRICS = [
  { value: '~16:1', label: 'OpenAPI-to-MCP Compiler', detail: 'Consolidated 923 operations into 57 agent tool definitions' },
  { value: '7,600+', label: 'Backend Tests', detail: 'Zero regressions across 4-layer router and 5 providers' },
  { value: '$188/mo', label: 'Ledger Diagnostics', detail: '74% savings via prompt-prefix cache & tier routing' },
  { value: '~1,300 → 4', label: 'Permission Caching', detail: 'Request-scoped permission cache & sub-second streaming' },
  { value: '3 Clients', label: 'Web + Flutter + MCP', detail: 'Production multi-tenant SaaS with centralized RBAC' },
];

const ARCHITECTURAL_PILLARS = [
  {
    icon: BadgeDollarSign,
    tag: 'Pillar 01 / Unit Economics & Caching Architecture',
    title: 'LLM Unit-Cost Diagnostics & Caching Architecture',
    description:
      'Instrumented provider token ledgers to diagnose a measured $188/user/month unit cost, tracing 74% of spend to prompt-prefix cache overhead and (sliced by model tier) 79% to a single over-provisioned model; re-architected model routing and tool-spec caching against that finding.',
  },
  {
    icon: Braces,
    tag: 'Pillar 02 / Schema Compilation',
    title: 'OpenAPI 3.1-to-MCP Compiler (~16:1 Compression)',
    description:
      'Built an OpenAPI 3.1 compiler that consolidated 923 API operations (737 paths, 79 categories) into 57 intent-level MCP tool definitions (~16:1 reduction), deploying 12 to production to reduce ambiguous endpoint selection by small models.',
  },
  {
    icon: Cpu,
    tag: 'Pillar 03 / Multi-Provider Orchestration',
    title: '4-Layer Provider-Agnostic LLM Router',
    description:
      'Migrated the platform off a single LLM vendor to a 4-layer router across 5 providers (Anthropic, OpenAI, Gemini, Moonshot, Ollama) using custom native adapters to preserve per-provider prompt caching, merging with zero regressions across a 7,600-test backend suite.',
  },
  {
    icon: Zap,
    tag: 'Pillar 04 / Latency Engineering',
    title: 'Agent Latency & Permission Caching',
    description:
      'Profiled ~1,300 uncached pre-token permission reads (198 tools × ~7 reads) across 6 sequential model round trips; eliminated ~200 redundant reads by wiring a request-scoped permission cache and shipped final-pass token streaming to render initial text within seconds rather than at end-of-turn.',
  },
  {
    icon: Layers,
    tag: 'Pillar 05 / Multi-Tenant SaaS Execution',
    title: 'End-to-End Multi-Tenant SaaS Execution',
    description:
      'Engineered and operate the platform across web, Flutter, and MCP clients with centralized RBAC, tenant-scoped workflows, Stripe billing, a Monaco-based plugin marketplace, approval queues, and automated Coolify/Docker deployments.',
  },
];

const INTEGRATIONS = [
  {
    icon: Braces,
    title: 'OpenAPI 3.1 Compiler',
    text: 'Consolidates 923 API operations into 57 intent-level MCP tool definitions (~16:1 compression), reducing ambiguous endpoint selection by small models.',
  },
  {
    icon: ServerCog,
    title: 'Model Context Protocol (MCP)',
    text: 'Standardized tool integration connecting external MCP servers, filtered dynamically by tenant settings and centralized RBAC before model context injection.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & E-Commerce APIs',
    text: 'Handles live inventory locking, checkout flows, order management, and customer status updates with automated idempotency and dead-letter retries.',
  },
  {
    icon: Plug,
    title: 'Enterprise REST & WebSockets',
    text: 'Connects internal ERPs, accounting tools, and databases with streaming state synchronization and sub-second event broadcasts.',
  },
];

const STACK_ITEMS = [
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

export function EesaPage() {
  return (
    <PageShell navTone="dark">
      <main id="main" className="case-page">
        <CaseStudyHero
          eyebrow="1 / Production AI Platform / Live (2025 – Present)"
          title="A multi-tenant AI agent and workflow automation platform engineered for production unit economics, tool accuracy, and low pre-token latency."
          summary="Creator of EESA.AI, a multi-tenant agent platform featuring a 5-provider LLM router and an OpenAPI 3.1-to-MCP compiler that consolidates 923 API operations into 57 agent tool definitions. Engineered across Web, Flutter, and MCP clients."
          tags={['~16:1 OpenAPI-to-MCP Compiler', '4-Layer 5-Provider Router', '7,600-Test Suite', '$188/mo Ledger Diagnostics', 'Web + Flutter + MCP']}
          sourceUrl="https://eesa.ai"
          sourceLabel="Visit EESA.AI"
          theme="ink"
        />

        <section className="case-section" style={{ background: '#0e0f14', paddingBlock: '60px', borderBottom: '1px solid #282a35' }}>
          <div className="case-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {ARCHITECTURAL_METRICS.map((metric) => (
                <div key={metric.label} style={{ padding: '24px', background: '#161821', border: '1px solid #2c2f3d' }}>
                  <strong style={{ display: 'block', color: 'var(--orange)', fontSize: '30px', letterSpacing: '-0.04em' }}>{metric.value}</strong>
                  <span style={{ display: 'block', margin: '8px 0 4px', color: '#fff', fontSize: '12px', fontWeight: 700 }}>{metric.label}</span>
                  <p style={{ margin: 0, color: '#9699a2', fontSize: '11px', lineHeight: 1.5 }}>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-definition">
          <div className="case-container split-case">
            <div>
              <span className="case-section-label">Platform Overview</span>
              <h2>A production platform built for hard systems constraints.</h2>
            </div>
            <div className="large-body">
              <p>
                EESA.AI is a multi-tenant AI agent and workflow automation platform engineered for
                production unit economics, tool accuracy, and low pre-token latency.
              </p>
              <p>
                By building custom native provider adapters, an OpenAPI 3.1-to-MCP schema compiler, and
                request-scoped permission caching in Python, the platform achieves robust enterprise compliance
                while maintaining instant streaming response times.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section build-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Architecture Highlights</span>
              <h2>Core Systems Architecture</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {ARCHITECTURAL_PILLARS.map(({ icon: Icon, tag, title, description }) => (
                <article
                  key={tag}
                  style={{
                    padding: '32px',
                    background: '#15171f',
                    border: '1px solid #333644',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ display: 'grid', width: '38px', height: '38px', placeItems: 'center', background: 'rgba(255,91,50,0.12)', border: '1px solid var(--orange)' }}>
                      <Icon size={20} color="var(--orange)" />
                    </div>
                    <div>
                      <span style={{ color: 'var(--orange)', font: '500 10px var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
                      <h3 style={{ margin: '2px 0 0', color: '#fff', fontSize: '20px', letterSpacing: '-0.03em' }}>{title}</h3>
                    </div>
                  </div>
                  <p style={{ margin: 0, color: '#c5c7d0', fontSize: '13px', lineHeight: 1.7 }}>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section rbac-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Permission Caching</span>
              <h2>Request-Scoped Permission Caching & Latency Optimization</h2>
            </div>
            <ol className="method-list rbac-evolution">
              <li>
                <span>01</span>
                <BrainCircuit size={23} />
                <div>
                  <p className="rbac-status rbac-failed">Phase 1: Failed Badly</p>
                  <h3>LLM-Only Permission Gate</h3>
                  <p>
                    Initially fed role rules and authorization constraints directly into the prompt. The model proved
                    highly prompt-sensitive and non-deterministic: jailbreaks, indirect injection, and slight prompt
                    variations bypassed security checks.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <Bot size={23} />
                <div>
                  <p className="rbac-status">Phase 2: Improved, but Probabilistic</p>
                  <h3>Python Permissions + LLM Authorization</h3>
                  <p>
                    Python fetched user permissions and injected them as structured JSON facts into the prompt. While
                    factual accuracy improved, the model retained final execution authority, maintaining a probabilistic
                    vulnerability surface at the security boundary.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <ShieldCheck size={23} />
                <div>
                  <p className="rbac-status rbac-final">Phase 3: Current Architecture</p>
                  <h3>Deterministic Python Gate & Request-Scoped Cache</h3>
                  <p>
                    Profiled ~1,300 uncached pre-token permission reads (198 tools × ~7 reads) across 6 sequential model round trips.
                    Eliminated ~200 redundant reads by wiring a request-scoped permission cache and shipped final-pass token streaming
                    to render initial text within seconds rather than at end-of-turn.
                  </p>
                </div>
              </li>
            </ol>
            <div className="rbac-lesson">
              <KeyRound size={22} />
              <div>
                <strong>Core Architectural Principle</strong>
                <p>
                  Use LLMs exclusively for conversational comprehension and workflow synthesis. Enforce all authentication,
                  authorization, and tenant isolation strictly in deterministic application code.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section architecture-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Multi-Provider Router</span>
              <h2>4-Layer Routing Engine Across 5 Foundation Providers</h2>
            </div>
            <div className="routing-layers">
              <div>
                <span>01</span>
                <strong>Master</strong>
                <p>Governs global tenant policy, model quotas, security constraints, and fallback hierarchy.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Conversation</strong>
                <p>Maintains conversational state, streaming multiplexing, and rapid intent classification.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Orchestration</strong>
                <p>Decomposes user requests into intent-level MCP tool invocations and sub-agent workflows.</p>
              </div>
              <div>
                <span>04</span>
                <strong>Workflow</strong>
                <p>Executes deterministic tasks with cost-optimized models, enforcing token limits and retry protocols.</p>
              </div>
            </div>
            <div className="architecture-notes">
              <div>
                <KeyRound size={20} />
                <strong>Tenant-Level Overrides</strong>
                <span>Tenants can pin custom providers (e.g. self-hosted Ollama or Azure OpenAI) without codebase modification.</span>
              </div>
              <div>
                <BadgeDollarSign size={20} />
                <strong>Cost Attribution</strong>
                <span>Ledger instruments token usage per tenant, per layer, and per session, isolating prompt-cache economics.</span>
              </div>
              <div>
                <Plug size={20} />
                <strong>Capability Gating</strong>
                <span>Models are dynamically selected based on tool-calling reliability, context window, and streaming speed.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section integration-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Integrations & Protocols</span>
              <h2>Enterprise Tools, MCP Servers, and E-Commerce APIs</h2>
            </div>
            <div className="use-case-grid integration-grid">
              {INTEGRATIONS.map(({ icon: Icon, title, text }, index) => (
                <article className="use-case-card integration-card" key={title}>
                  <div>
                    <span>0{index + 1}</span>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-stack-section">
          <div className="case-container split-case">
            <div>
              <span className="case-section-label">Technology Stack</span>
              <h2>Engineered for High-Throughput Production SaaS</h2>
            </div>
            <ul className="stack-wall">
              {STACK_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-next">
          <div className="case-container">
            <p>Explore the peer-reviewed machine learning research powering my perception and NLP work.</p>
            <a href="/research/">Research and publications <ArrowUpRight size={20} /></a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

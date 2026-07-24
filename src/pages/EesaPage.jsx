import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Bot,
  BrainCircuit,
  Braces,
  CheckCircle2,
  ClipboardCheck,
  FileInput,
  Globe2,
  KeyRound,
  MessageCircle,
  PackageCheck,
  Plug,
  ServerCog,
  ShoppingBag,
  ReceiptText,
  ShieldCheck,
  Store,
  Users,
  Utensils,
  Wrench,
} from 'lucide-react';
import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero.jsx';
import { PageShell } from '../components/PageShell.jsx';

const USE_CASES = [
  {
    icon: ReceiptText,
    title: 'Accounting and finance',
    problem: 'Creating invoices or checking balances requires opening another system and entering the same information again.',
    solution: 'Ask for the invoice or report in chat. The agent collects missing details, uses the connected accounting tool, and returns the result.',
  },
  {
    icon: Utensils,
    title: 'Restaurants',
    problem: 'Orders, kitchen work, inventory checks, and purchase approvals arrive through different channels.',
    solution: 'Route an order to the right staff screen, update stock, and send large purchase orders to a manager for approval.',
  },
  {
    icon: Store,
    title: 'Retail',
    problem: 'Staff switch between customer messages, stock systems, and return workflows while customers wait.',
    solution: 'Let the agent check inventory, answer order questions, and start approved returns from the same conversation.',
  },
  {
    icon: Wrench,
    title: 'Service businesses',
    problem: 'Bookings, reminders, status updates, and invoices take time because each step is handled separately.',
    solution: 'Turn one customer request into a connected workflow that schedules work, sends updates, and creates the invoice.',
  },
];

const BUILD_AREAS = [
  {
    title: 'Tenant-aware product',
    text: 'Built admin, tenant, onboarding, and marketing surfaces around protected workflows, plans, and tenant-specific settings.',
  },
  {
    title: 'Four-layer model routing',
    text: 'Designed separate routing for master selection, conversation, orchestration, and workflow execution, including tenant overrides and cost tracking.',
  },
  {
    title: 'One permissions system',
    text: 'Built deterministic, Python-based RBAC that filters tools and data before the LLM runs, while controlling navigation, routes, approvals, and tenant limits from one source.',
  },
  {
    title: 'API-to-agent tools',
    text: 'Developed an OpenAPI 3.0-to-MCP generator that turns approved REST endpoints into tools an agent can call.',
  },
  {
    title: 'Complete product operations',
    text: 'Delivered Stripe billing, a plugin marketplace, Monaco-based authoring, drag-and-drop dashboards, approval queues, and Coolify deployment.',
  },
];

const INTEGRATIONS = [
  {
    icon: Globe2,
    title: 'WordPress',
    text: 'Connect WordPress sites to approved content, publishing, customer, and operational workflows through their available APIs.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify',
    text: 'Use Shopify APIs for product, inventory, order, customer, and fulfillment workflows while keeping actions inside role limits.',
  },
  {
    icon: Braces,
    title: 'Any REST API',
    text: 'Turn documented REST endpoints into agent tools. The OpenAPI 3.0-to-MCP generator handles tool definitions, inputs, and approved actions.',
  },
  {
    icon: ServerCog,
    title: 'Any MCP server',
    text: 'Connect tools exposed by an MCP server, then filter those tools through tenant settings and user permissions before the model sees them.',
  },
];

export function EesaPage() {
  return (
    <PageShell navTone="dark">
      <main id="main" className="case-page">
        <CaseStudyHero
          eyebrow="Product case study / EESA.AI"
          title="Run business work from a conversation."
          summary="EESA.AI connects chat, business tools, repeatable workflows, and human approvals. A person asks for work in plain language; the platform carries it out in the systems the business already uses."
          tags={['Multi-tenant SaaS', 'AI agents', 'MCP', 'Workflow automation', 'RBAC']}
          sourceUrl="https://eesa.ai"
          sourceLabel="Visit EESA.AI"
          theme="ink"
        />

        <section className="case-section case-definition">
          <div className="case-container split-case">
            <div>
              <span className="case-section-label">In one sentence</span>
              <h2>EESA.AI is an agent that completes business tasks through chat.</h2>
            </div>
            <div className="large-body">
              <p>It is not a chatbot that only answers questions. It can use connected APIs, run a workflow, ask a manager to approve a sensitive action, and return the result to the person who requested it.</p>
              <p>The goal is simple: reduce the time small teams spend moving information between messages, dashboards, and spreadsheets.</p>
            </div>
          </div>
        </section>

        <section className="case-section case-problem-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">The problem</span>
              <h2>Small teams lose time between the request and the system that can complete it.</h2>
            </div>
            <div className="problem-chain">
              <div><MessageCircle size={21} /><strong>A request arrives</strong><span>Customer message, staff question, manager instruction</span></div>
              <ArrowRight size={18} />
              <div><Users size={21} /><strong>Someone translates it</strong><span>They decide which tool, form, or person is needed</span></div>
              <ArrowRight size={18} />
              <div><FileInput size={21} /><strong>Data is entered again</strong><span>The same details move into another dashboard</span></div>
              <ArrowRight size={18} />
              <div><ClipboardCheck size={21} /><strong>Approval gets chased</strong><span>Important work waits in email or another chat</span></div>
            </div>
          </div>
        </section>

        <section className="case-section use-case-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Use cases</span>
              <h2>What a business can use it for</h2>
            </div>
            <div className="use-case-grid">
              {USE_CASES.map(({ icon: Icon, title, problem, solution }, index) => (
                <article className="use-case-card" key={title}>
                  <div><span>0{index + 1}</span><Icon size={24} strokeWidth={1.5} /></div>
                  <h3>{title}</h3>
                  <dl>
                    <div><dt>Before</dt><dd>{problem}</dd></div>
                    <div><dt>With EESA.AI</dt><dd>{solution}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section product-flow-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Product flow</span>
              <h2>From message to completed work</h2>
            </div>
            <ol className="product-flow">
              <li><span>01</span><MessageCircle size={23} /><h3>Ask</h3><p>A customer or employee sends a request in chat.</p></li>
              <li><span>02</span><Bot size={23} /><h3>Understand</h3><p>The agent identifies the task, missing details, and allowed actions.</p></li>
              <li><span>03</span><Plug size={23} /><h3>Use tools</h3><p>The platform calls an approved API, MCP tool, or workflow.</p></li>
              <li><span>04</span><ShieldCheck size={23} /><h3>Approve</h3><p>Sensitive work waits for the right person before it continues.</p></li>
              <li><span>05</span><CheckCircle2 size={23} /><h3>Finish</h3><p>The action is recorded and the result goes back to the requester.</p></li>
            </ol>
          </div>
        </section>

        <section className="case-section integration-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Supported platforms</span>
              <h2>Connect the systems a business already runs.</h2>
            </div>
            <div className="use-case-grid integration-grid">
              {INTEGRATIONS.map(({ icon: Icon, title, text }, index) => (
                <article className="use-case-card integration-card" key={title}>
                  <div><span>0{index + 1}</span><Icon size={24} strokeWidth={1.5} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section rbac-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">RBAC engineering</span>
              <h2>Three permission gates—and why the final one removed authorization from the LLM.</h2>
            </div>
            <ol className="method-list rbac-evolution">
              <li>
                <span>01</span>
                <BrainCircuit size={23} />
                <div>
                  <p className="rbac-status rbac-failed">Failed badly</p>
                  <h3>LLM-only permission gate</h3>
                  <p>The model received roles and policy instructions, then decided whether a request was allowed. The result was prompt-sensitive and inconsistent: the same policy could produce different decisions, and wording could influence authorization.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <Bot size={23} />
                <div>
                  <p className="rbac-status">Improved, but still probabilistic</p>
                  <h3>Python permissions + LLM decision</h3>
                  <p>Python loaded the user’s explicit permissions and supplied them to the model. This gave the LLM better facts, but the LLM still made the final allow-or-deny judgment, so a security boundary still depended on model interpretation.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <ShieldCheck size={23} />
                <div>
                  <p className="rbac-status rbac-final">Current design</p>
                  <h3>Deterministic Python gate before the LLM</h3>
                  <p>Python resolves the tenant, role, resource, and action first. It then exposes only the tools, schemas, and data that user is allowed to access. The LLM cannot choose a forbidden capability because that capability never enters its context.</p>
                </div>
              </li>
            </ol>
            <div className="rbac-lesson">
              <KeyRound size={22} />
              <div><strong>Engineering lesson</strong><p>Use the LLM to understand intent and plan work. Use deterministic code to enforce authorization.</p></div>
            </div>
          </div>
        </section>

        <section className="case-section build-section">
          <div className="case-container split-case build-intro">
            <div>
              <span className="case-section-label">My work on the platform</span>
              <h2>I worked across the complete product.</h2>
            </div>
            <p className="large-body">The hard part was not one AI call. It was making models, permissions, tools, billing, workflows, and tenant data work together as one product.</p>
          </div>
          <div className="case-container build-area-list">
            {BUILD_AREAS.map((area, index) => (
              <article key={area.title}>
                <span>0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section architecture-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Platform structure</span>
              <h2>Four routing layers keep model choice tied to the job.</h2>
            </div>
            <div className="routing-layers">
              <div><span>01</span><strong>Master</strong><p>Chooses the broad model policy and available capabilities.</p></div>
              <div><span>02</span><strong>Conversation</strong><p>Handles the user exchange, context, and immediate response.</p></div>
              <div><span>03</span><strong>Orchestration</strong><p>Plans which agent, tool, or workflow should handle the request.</p></div>
              <div><span>04</span><strong>Workflow</strong><p>Runs the task with the model, limits, and cost rules set for that workflow.</p></div>
            </div>
            <div className="architecture-notes">
              <div><KeyRound size={20} /><strong>Tenant overrides</strong><span>Each business can choose different models and limits without changing the whole platform.</span></div>
              <div><BadgeDollarSign size={20} /><strong>Cost attribution</strong><span>Usage can be measured at the layer where the model was used.</span></div>
              <div><PackageCheck size={20} /><strong>Capability gating</strong><span>A model is only selected when it can safely perform the required action.</span></div>
            </div>
          </div>
        </section>

        <section className="case-section case-stack-section">
          <div className="case-container split-case">
            <div><span className="case-section-label">Stack</span><h2>Built for product use, not a demo.</h2></div>
            <ul className="stack-wall">
              {['Next.js', 'React', 'TypeScript', 'WordPress', 'Shopify', 'REST APIs', 'MCP servers', 'OpenAPI 3.0', 'Qdrant', 'Stripe', 'Docker', 'Coolify', 'Python RBAC', 'Multi-tenant SaaS'].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="case-next">
          <div className="case-container">
            <p>See the research behind my machine-learning work.</p>
            <a href="/research/">Research and publications <ArrowUpRight size={20} /></a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

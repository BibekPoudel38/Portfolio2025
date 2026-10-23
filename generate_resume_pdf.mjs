import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bibek Poudel - Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap');
    
    @page {
      size: letter;
      margin: 0.38in 0.44in 0.38in 0.44in;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #111418;
      background: #ffffff;
      font-size: 8.4pt;
      line-height: 1.28;
      -webkit-font-smoothing: antialiased;
    }
    
    .header {
      text-align: center;
      margin-bottom: 6pt;
      border-bottom: 1.5pt solid #111418;
      padding-bottom: 5pt;
    }
    
    h1 {
      font-size: 18pt;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #0d1117;
      margin-bottom: 2pt;
    }
    
    .contact-line {
      font-size: 8.2pt;
      color: #3b434f;
      font-weight: 500;
      display: flex;
      justify-content: center;
      gap: 9pt;
      flex-wrap: wrap;
    }
    
    .contact-line a {
      color: #0969da;
      text-decoration: none;
    }
    
    .title-banner {
      font-size: 9.2pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-top: 3pt;
    }
    
    .summary-text {
      font-size: 8.2pt;
      color: #24292f;
      line-height: 1.30;
      text-align: justify;
      margin-top: 3pt;
      margin-bottom: 6pt;
    }
    
    .job, .project-item {
      page-break-inside: avoid;
    }
    
    .section {
      margin-bottom: 5.5pt;
    }
    
    .section-title {
      font-size: 8.8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #0f172a;
      border-bottom: 0.75pt solid #cbd5e1;
      padding-bottom: 1.2pt;
      margin-bottom: 3.5pt;
    }
    
    .skills-grid {
      display: grid;
      gap: 1.8pt;
      font-size: 8.0pt;
      line-height: 1.25;
    }
    
    .skill-row strong {
      color: #0f172a;
      font-weight: 700;
    }
    
    .skill-row span {
      color: #334155;
    }
    
    .job {
      margin-bottom: 4.8pt;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1pt;
    }
    
    .job-title-line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1.5pt;
    }
    
    .company {
      font-size: 8.9pt;
      font-weight: 800;
      color: #0f172a;
    }
    
    .job-role {
      font-size: 8.3pt;
      font-weight: 700;
      color: #1e293b;
      font-style: italic;
    }
    
    .location, .dates {
      font-size: 8.0pt;
      font-weight: 600;
      color: #475569;
    }
    
    ul.bullets {
      list-style-type: disc;
      padding-left: 11pt;
      margin: 0;
    }
    
    ul.bullets li {
      font-size: 8.0pt;
      line-height: 1.24;
      color: #1e293b;
      margin-bottom: 1.5pt;
      text-align: justify;
    }
    
    ul.bullets li strong {
      color: #0f172a;
      font-weight: 700;
    }
    
    .project-item {
      margin-bottom: 4.5pt;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1.2pt;
    }
    
    .project-name {
      font-size: 8.6pt;
      font-weight: 800;
      color: #0f172a;
    }
    
    .project-tech {
      font-size: 7.7pt;
      font-weight: 500;
      color: #475569;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .publication-item {
      font-size: 8.0pt;
      line-height: 1.25;
      color: #1e293b;
      margin-bottom: 2pt;
    }
    
    .publication-item strong {
      color: #0f172a;
    }
    
    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1.5pt;
      font-size: 8.0pt;
    }
    
    .edu-left strong {
      font-size: 8.3pt;
      color: #0f172a;
    }
    
    .edu-left span {
      color: #334155;
    }
  </style>
</head>
<body>

  <header class="header">
    <h1>BIBEK POUDEL</h1>
    <div class="contact-line">
      <span>Artesia, CA</span>
      <span>•</span>
      <span>(909) 529-2588</span>
      <span>•</span>
      <span><a href="mailto:bibekpoudel2056@gmail.com">bibekpoudel2056@gmail.com</a></span>
      <span>•</span>
      <span><a href="https://bibekpoudel.com">bibekpoudel.com</a></span>
      <span>•</span>
      <span><a href="https://linkedin.com/in/bibekpoudel38">linkedin.com/in/bibekpoudel38</a></span>
    </div>
    <div class="title-banner">FULL-STACK SOFTWARE ENGINEER | AI PLATFORMS, LLM INFRASTRUCTURE & DISTRIBUTED SYSTEMS</div>
  </header>

  <p class="summary-text">
    Full-Stack Software Engineer with 4+ years of production experience across high-volume e-commerce, independent client platforms, and applied AI at JPMorgan Chase. Creator of EESA.AI, a multi-tenant agent platform featuring a 5-provider LLM router and an OpenAPI 3.1-to-MCP compiler that consolidates 923 API operations into 57 agent tool definitions. Co-author of two peer-reviewed ML publications (2025).
  </p>

  <section class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-row">
        <strong>AI Products & Agents:</strong>
        <span>Multi-Provider LLM Routing (Anthropic, OpenAI, Gemini, Moonshot, Ollama), Model Context Protocol (MCP), OpenAPI 3.1-to-MCP Compilation, Prompt-Prefix Caching, RAG & Semantic Retrieval, LangGraph, LangChain, Qdrant, FAISS</span>
      </div>
      <div class="skill-row">
        <strong>Enterprise Software:</strong>
        <span>OAuth2/JWT, Centralized RBAC, Multi-Tenant SaaS, Request-Scoped Permission Caching, Pre-Retrieval Prompt Guardrails, REST, GraphQL, Distributed Systems</span>
      </div>
      <div class="skill-row">
        <strong>Full-Stack Platforms:</strong>
        <span>Python, Django, FastAPI, TypeScript, JavaScript, Java, Spring Boot, React.js, Next.js, Node.js, Express.js, Flutter, WebSockets, Monaco Editor</span>
      </div>
      <div class="skill-row">
        <strong>Cloud & Data Systems:</strong>
        <span>PostgreSQL, Redis, MongoDB, Apache Kafka, Apache Spark, Apache Airflow, Snowflake, AWS (EC2/S3), Docker, GitHub Actions (CI/CD), Coolify</span>
      </div>
      <div class="skill-row">
        <strong>Applied ML Research:</strong>
        <span>Sparse Transformers (MST), Multilingual Fine-Tuning (NLLB-200, mBART), Hallucination Mitigation, Camera-LiDAR Sensor Fusion, PyTorch, 7,600+ Automated Backend Tests</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-title">Professional Experience</div>

    <div class="job">
      <div class="job-header">
        <span class="company">JPMorgan Chase & Co.</span>
        <span class="location">United States</span>
      </div>
      <div class="job-title-line">
        <span class="job-role">Full-Stack Software Engineer — Applied AI & Banking Automation (Graduate Intern)</span>
        <span class="dates">Jan 2026 – Present</span>
      </div>
      <ul class="bullets">
        <li>Built and shipped summary-generation and case-retrieval services within an enterprise AI fraud investigation platform, enabling analysts to review suspicious activity, compare historical cases, and draft investigation notes faster.</li>
        <li>Developed production RAG and semantic-retrieval chatbot services across web and mobile support flows with validated prompt workflows, contributing to a ~40% reduction in manual support effort.</li>
        <li>Designed backend services and secure data-access patterns for fraud events, customer profiles, transaction intelligence, and support knowledge using Node.js, TypeScript, Python, PostgreSQL, Redis, and GraphQL.</li>
        <li>Hardened AI workflows with OAuth2/JWT, RBAC, and pre-retrieval prompt-validation guardrails that filtered malformed queries before vector lookup.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="company">California State University, Dominguez Hills</span>
        <span class="location">Carson, CA</span>
      </div>
      <div class="job-title-line">
        <span class="job-role">Graduate AI Research Assistant — Department of Computer Science</span>
        <span class="dates">Feb 2025 – May 2025</span>
      </div>
      <ul class="bullets">
        <li>Fine-tuned and evaluated multilingual foundation models on clinical terminology to mitigate translation drift and generative hallucinations, with NLLB-200 reaching 65.70 BLEU vs. 60.12 for mBART (published in RANLP 2025).</li>
        <li>Co-developed the Modified Sparse Transformer (MST) with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles, pruning wasted attention compute on empty spatial data to reach 82.98% 3D mAP on KITTI (published in <em>Transportation Research Interdisciplinary Perspectives</em>, Vol. 34, 2025).</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="company">Independent Software Consultant</span>
        <span class="location">Remote</span>
      </div>
      <div class="job-title-line">
        <span class="job-role">Full-Stack & AI Systems Engineer (Commercial Client Engagements — NDA)</span>
        <span class="dates">Jul 2023 – Aug 2024</span>
      </div>
      <ul class="bullets">
        <li>Built and delivered an Enterprise AI Contract Intelligence Platform (Spring Boot, FastAPI, OpenAI, LangChain, FAISS, Airflow, Spark, Snowflake) and a Real-Time Logistics Visibility Platform (Spring Boot, Kafka, Redis, MongoDB, WebSockets, GitHub Actions) for commercial clients.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="company">TatvaSoft</span>
        <span class="location">Remote / Nepal</span>
      </div>
      <div class="job-title-line">
        <span class="job-role">Full-Stack Software Engineer — Platform Engineering</span>
        <span class="dates">Jan 2020 – Jul 2023</span>
      </div>
      <ul class="bullets">
        <li>Improved platform throughput by 35% by engineering high-volume e-commerce workflows across checkout, orders, inventory, payments, and fulfillment using React.js, Node.js, and PostgreSQL.</li>
        <li>Reduced API response time by 28% by designing secure REST services for payment, order, shipping, and fulfillment integrations with strict payload validation and error handling.</li>
        <li>Reduced transaction failures by strengthening Stripe and shipping API integrations and hardening order-processing edge cases across checkout.</li>
        <li>Built responsive, accessible UI components and optimized data-access flows; delivered via OAuth2/JWT auth, Dockerized services, and AWS (EC2/S3) within Agile sprints and code reviews.</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="section-title">Production AI Platforms & Systems</div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-name">EESA.AI — Multi-Tenant Agent & Workflow Automation Platform (eesa.ai)</span>
        <span class="dates">Creator & Lead Systems Architect | 2025 – Present</span>
      </div>
      <div class="project-tech" style="margin-bottom: 2pt;">Python, Django, Next.js, React, TypeScript, Flutter, MCP, OpenAPI 3.1, LangGraph, Qdrant, PostgreSQL, Redis, Stripe, Docker, Coolify</div>
      <ul class="bullets">
        <li><strong>LLM Unit-Cost Diagnostics & Caching Architecture:</strong> Instrumented provider token ledgers to diagnose a measured $188/user/month unit cost, tracing 74% of spend to prompt-prefix cache overhead and (sliced by model tier) 79% to a single over-provisioned model; re-architected model routing and tool-spec caching against that finding.</li>
        <li><strong>OpenAPI 3.1-to-MCP Compiler (~16:1 Compression):</strong> Built an OpenAPI 3.1 compiler that consolidated 923 API operations (737 paths, 79 categories) into 57 intent-level MCP tool definitions (~16:1 reduction), deploying 12 to production to reduce ambiguous endpoint selection by small models.</li>
        <li><strong>4-Layer Provider-Agnostic LLM Router:</strong> Migrated the platform off a single LLM vendor to a 4-layer router across 5 providers (Anthropic, OpenAI, Gemini, Moonshot, Ollama) using custom native adapters to preserve per-provider prompt caching, merging with zero regressions across a 7,600-test backend suite.</li>
        <li><strong>Agent Latency & Permission Caching:</strong> Profiled ~1,300 uncached pre-token permission reads (198 tools × ~7 reads) across 6 sequential model round trips; eliminated ~200 redundant reads by wiring a request-scoped permission cache and shipped final-pass token streaming to render initial text within seconds rather than at end-of-turn.</li>
        <li><strong>End-to-End Multi-Tenant SaaS Execution:</strong> Engineered and operate the platform across web, Flutter, and MCP clients with centralized RBAC, tenant-scoped workflows, Stripe billing, a Monaco-based plugin marketplace, approval queues, and automated Coolify/Docker deployments.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-name">Enterprise AI Contract Intelligence Platform (Commercial Client Engagement — NDA)</span>
      </div>
      <div class="project-tech" style="margin-bottom: 2pt;">Java, Spring Boot, FastAPI, OpenAI, LangChain, FAISS, Airflow, Spark, Snowflake</div>
      <ul class="bullets">
        <li>Built and delivered a commercial contract intelligence system for clause extraction, semantic search, and legal retrieval using Spring Boot, FastAPI, OpenAI, LangChain, and FAISS, backed by distributed Airflow, Spark, and Snowflake ingestion pipelines.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-name">Real-Time Logistics Visibility Platform (Commercial Client Engagement — NDA)</span>
      </div>
      <div class="project-tech" style="margin-bottom: 2pt;">Java, Spring Boot, Apache Kafka, Redis, MongoDB, WebSockets, GitHub Actions</div>
      <ul class="bullets">
        <li>Engineered and handed over an event-driven shipment tracking platform using Java, Spring Boot, Kafka, Redis, MongoDB, and WebSockets for sub-second telemetry updates, asynchronous inventory sync, and automated CI/CD releases via GitHub Actions.</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="section-title">Publications & Peer-Reviewed Research</div>
    <div class="publication-item">
      • <strong>MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles</strong> — <em>Transportation Research Interdisciplinary Perspectives</em>, Vol. 34, Article 101571 (2025). Achieved 82.98% 3D mAP on KITTI.
    </div>
    <div class="publication-item">
      • <strong>Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models</strong> — <em>Proceedings of RANLP 2025</em>, pp. 48–56, Varna, Bulgaria (2025). Achieved 65.70 BLEU on NLLB-200 vs. 60.12 on mBART.
    </div>
  </section>

  <section class="section">
    <div class="section-title">Education</div>
    <div class="edu-item">
      <div class="edu-left">
        <strong>Master of Science in Computer Science</strong> | <span>California State University, Dominguez Hills</span> — Carson, CA
      </div>
      <span class="dates">Aug 2024 – May 2026</span>
    </div>
    <div class="edu-item">
      <div class="edu-left">
        <strong>Bachelor of Science in Computing</strong> | <span>London Metropolitan University</span> — Pokhara, Nepal
      </div>
      <span class="dates">Aug 2018 – Dec 2021</span>
    </div>
  </section>

</body>
</html>`;

const tempHtmlPath = path.resolve('public', 'resume_render.html');
fs.writeFileSync(tempHtmlPath, resumeHtml, 'utf8');

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });

const pdfBuffer = await page.pdf({
  format: 'Letter',
  printBackground: true,
  margin: {
    top: '0.34in',
    right: '0.40in',
    bottom: '0.34in',
    left: '0.40in',
  },
});

const targetPublicPdf = path.resolve('public', 'BibekPoudelResume.pdf');
fs.writeFileSync(targetPublicPdf, pdfBuffer);
console.log('Successfully generated public/BibekPoudelResume.pdf. Size:', pdfBuffer.length);

const targetDistDir = path.resolve('dist');
if (fs.existsSync(targetDistDir)) {
  fs.writeFileSync(path.resolve(targetDistDir, 'BibekPoudelResume.pdf'), pdfBuffer);
  console.log('Successfully copied to dist/BibekPoudelResume.pdf');
}

fs.unlinkSync(tempHtmlPath);
await browser.close();

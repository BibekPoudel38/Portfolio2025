# BIBEK POUDEL

Artesia, CA | (909) 529-2588 | bibekpoudel2056@gmail.com | [bibekpoudel.com](https://bibekpoudel.com) | [linkedin.com/in/bibekpoudel38](https://linkedin.com/in/bibekpoudel38)

---

## FULL-STACK SOFTWARE ENGINEER | AI PLATFORMS, LLM INFRASTRUCTURE & DISTRIBUTED SYSTEMS

Full-Stack Software Engineer with 4+ years of production experience across high-volume e-commerce, independent client platforms, and applied AI at JPMorgan Chase. Creator of EESA.AI, a multi-tenant agent platform featuring a 5-provider LLM router and an OpenAPI 3.1-to-MCP compiler that consolidates 923 API operations into 57 agent tool definitions. Co-author of two peer-reviewed ML publications (2025).

---

## TECHNICAL SKILLS

- **AI Products & Agents:** Multi-Provider LLM Routing (Anthropic, OpenAI, Gemini, Moonshot, Ollama), Model Context Protocol (MCP), OpenAPI 3.1-to-MCP Compilation, Prompt-Prefix Caching, RAG & Semantic Retrieval, LangGraph, LangChain, Qdrant, FAISS
- **Enterprise Software:** OAuth2/JWT, Centralized RBAC, Multi-Tenant SaaS, Request-Scoped Permission Caching, Pre-Retrieval Prompt Guardrails, REST, GraphQL, Distributed Systems
- **Full-Stack Platforms:** Python, Django, FastAPI, TypeScript, JavaScript, Java, Spring Boot, React.js, Next.js, Node.js, Express.js, Flutter, WebSockets, Monaco Editor
- **Cloud & Data Systems:** PostgreSQL, Redis, MongoDB, Apache Kafka, Apache Spark, Apache Airflow, Snowflake, AWS (EC2/S3), Docker, GitHub Actions (CI/CD), Coolify
- **Applied ML Research:** Sparse Transformers (MST), Multilingual Fine-Tuning (NLLB-200, mBART), Hallucination Mitigation, Camera-LiDAR Sensor Fusion, PyTorch, 7,600+ Automated Backend Tests

---

## PROFESSIONAL EXPERIENCE

### JPMorgan Chase & Co. | United States
**Full-Stack Software Engineer — Applied AI & Banking Automation (Graduate Intern)** | Jan 2026 – Present

- Built and shipped summary-generation and case-retrieval services within an enterprise AI fraud investigation platform, enabling analysts to review suspicious activity, compare historical cases, and draft investigation notes faster.
- Developed production RAG and semantic-retrieval chatbot services across web and mobile support flows with validated prompt workflows, contributing to a ~40% reduction in manual support effort.
- Designed backend services and secure data-access patterns for fraud events, customer profiles, transaction intelligence, and support knowledge using Node.js, TypeScript, Python, PostgreSQL, Redis, and GraphQL.
- Hardened AI workflows with OAuth2/JWT, RBAC, and pre-retrieval prompt-validation guardrails that filtered malformed queries before vector lookup.

### California State University, Dominguez Hills | Carson, CA
**Graduate AI Research Assistant — Department of Computer Science** | Feb 2025 – May 2025

- Fine-tuned and evaluated multilingual foundation models on clinical terminology to mitigate translation drift and generative hallucinations, with NLLB-200 reaching 65.70 BLEU vs. 60.12 for mBART (published in RANLP 2025).
- Co-developed the Modified Sparse Transformer (MST) with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles, pruning wasted attention compute on empty spatial data to reach 82.98% 3D mAP on KITTI (published in Transportation Research Interdisciplinary Perspectives, Vol. 34, 2025).

### Independent Software Consultant | Remote
**Full-Stack & AI Systems Engineer (Commercial Client Engagements — NDA)** | Jul 2023 – Aug 2024

- Built and delivered an Enterprise AI Contract Intelligence Platform (Spring Boot, FastAPI, OpenAI, LangChain, FAISS, Airflow, Spark, Snowflake) and a Real-Time Logistics Visibility Platform (Spring Boot, Kafka, Redis, MongoDB, WebSockets, GitHub Actions) for commercial clients.

### TatvaSoft | Remote / Nepal
**Full-Stack Software Engineer — Platform Engineering** | Jan 2020 – Jul 2023

- Improved platform throughput by 35% by engineering high-volume e-commerce workflows across checkout, orders, inventory, payments, and fulfillment using React.js, Node.js, and PostgreSQL.
- Reduced API response time by 28% by designing secure REST services for payment, order, shipping, and fulfillment integrations with strict payload validation and error handling.
- Reduced transaction failures by strengthening Stripe and shipping API integrations and hardening order-processing edge cases across checkout.
- Built responsive, accessible UI components and optimized data-access flows; delivered via OAuth2/JWT auth, Dockerized services, and AWS (EC2/S3) within Agile sprints and code reviews.

---

## PRODUCTION AI PLATFORMS & SYSTEMS

### EESA.AI — Multi-Tenant Agent & Workflow Automation Platform (eesa.ai)
**Creator & Lead Systems Architect** | 2025 – Present
*Python, Django, Next.js, React, TypeScript, Flutter, MCP, OpenAPI 3.1, LangGraph, Qdrant, PostgreSQL, Redis, Stripe, Docker, Coolify*

- **LLM Unit-Cost Diagnostics & Caching Architecture:** Instrumented provider token ledgers to diagnose a measured $188/user/month unit cost, tracing 74% of spend to prompt-prefix cache overhead and (sliced by model tier) 79% to a single over-provisioned model; re-architected model routing and tool-spec caching against that finding.
- **OpenAPI 3.1-to-MCP Compiler (~16:1 Compression):** Built an OpenAPI 3.1 compiler that consolidated 923 API operations (737 paths, 79 categories) into 57 intent-level MCP tool definitions (~16:1 reduction), deploying 12 to production to reduce ambiguous endpoint selection by small models.
- **4-Layer Provider-Agnostic LLM Router:** Migrated the platform off a single LLM vendor to a 4-layer router across 5 providers (Anthropic, OpenAI, Gemini, Moonshot, Ollama) using custom native adapters to preserve per-provider prompt caching, merging with zero regressions across a 7,600-test backend suite.
- **Agent Latency & Permission Caching:** Profiled ~1,300 uncached pre-token permission reads (198 tools × ~7 reads) across 6 sequential model round trips; eliminated ~200 redundant reads by wiring a request-scoped permission cache and shipped final-pass token streaming to render initial text within seconds rather than at end-of-turn.
- **End-to-End Multi-Tenant SaaS Execution:** Engineered and operate the platform across web, Flutter, and MCP clients with centralized RBAC, tenant-scoped workflows, Stripe billing, a Monaco-based plugin marketplace, approval queues, and automated Coolify/Docker deployments.

### Enterprise AI Contract Intelligence Platform (Commercial Client Engagement — NDA)
*Java, Spring Boot, FastAPI, OpenAI, LangChain, FAISS, Airflow, Spark, Snowflake*
- Built and delivered a commercial contract intelligence system for clause extraction, semantic search, and legal retrieval using Spring Boot, FastAPI, OpenAI, LangChain, and FAISS, backed by distributed Airflow, Spark, and Snowflake ingestion pipelines.

### Real-Time Logistics Visibility Platform (Commercial Client Engagement — NDA)
*Java, Spring Boot, Apache Kafka, Redis, MongoDB, WebSockets, GitHub Actions*
- Engineered and handed over an event-driven shipment tracking platform using Java, Spring Boot, Kafka, Redis, MongoDB, and WebSockets for sub-second telemetry updates, asynchronous inventory sync, and automated CI/CD releases via GitHub Actions.

---

## PUBLICATIONS & PEER-REVIEWED RESEARCH

- **MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles** — *Transportation Research Interdisciplinary Perspectives*, Vol. 34, Article 101571 (2025). Achieved 82.98% 3D mAP on KITTI.
- **Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models** — *Proceedings of RANLP 2025*, pp. 48–56, Varna, Bulgaria (2025). Achieved 65.70 BLEU on NLLB-200 vs. 60.12 on mBART.

---

## EDUCATION

- **Master of Science in Computer Science** | California State University, Dominguez Hills — Carson, CA (Aug 2024 – May 2026)
- **Bachelor of Science in Computing** | London Metropolitan University — Pokhara, Nepal (Aug 2018 – Dec 2021)

import React from 'react';

const PILLARS = [
    {
        title: 'Full Stack Engineering',
        body: 'Java, Python, TypeScript, React, Node.js, Spring Boot, and FastAPI — delivering products end to end.',
    },
    {
        title: 'AI & LLM Systems',
        body: 'OpenAI, LangChain, RAG, vector search (FAISS, Pinecone), and LLM fine-tuning — with published research.',
    },
    {
        title: 'Cloud & DevOps',
        body: 'AWS, Docker, Kubernetes, Terraform, and CI/CD — microservices built to scale reliably.',
    },
    {
        title: 'Security First',
        body: 'OAuth2, JWT, RBAC, and API security — enterprise-grade compliance from fintech experience.',
    },
];

export function About() {
    return (
        <section id="about" className="border-b border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">01 — About</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">About Me</h2>

                <p className="mt-6 max-w-3xl text-neutral-400 text-base md:text-lg leading-relaxed">
                    I'm a Full Stack Developer delivering cloud-native solutions in fintech and e-commerce. At JPMorgan Chase,
                    I led the creation of an AI-driven chatbot — integrating OpenAI and LangChain to cut manual support effort
                    by 40% — and at TatvaSoft I built a high-throughput e-commerce platform that boosted transaction throughput
                    by 35%. I hold an M.S. in Computer Science with published research in AI, and I care deeply about secure,
                    scalable design.
                </p>

                <div className="mt-10 grid gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                    {PILLARS.map((p) => (
                        <div key={p.title} className="bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors">
                            <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

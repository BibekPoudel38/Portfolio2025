import React from 'react';

const EXPERIENCES = [
    {
        company: 'JPMorgan Chase & Co.',
        role: 'Full Stack Developer - AI Chatbot Services',
        period: 'Jan 2026 — Present',
        current: true,
        summary:
            'Building AI-driven chatbot services for web and mobile banking channels in a fintech enterprise environment.',
        highlights: [
            'Integrated OpenAI API and LangChain for context-aware conversational workflows, cutting manual support effort by 40%',
            'Implemented FAISS vector search for semantic retrieval over customer queries and knowledge bases',
            'Designed secure API endpoints with OAuth2 and JWT to enterprise authentication standards',
            'Containerized microservices with Docker on AWS, reducing response latency by 25%',
        ],
        tech: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'FAISS', 'Docker', 'AWS', 'OAuth2 / JWT', 'Jenkins'],
    },
    {
        company: 'California State University, Dominguez Hills',
        role: 'Research Assistant',
        period: '2024 — 2026',
        summary:
            'Researched multilingual LLMs and NLP for underrepresented languages — work published in RANLP 2025 and Transportation Research Interdisciplinary Perspectives.',
        highlights: [
            'Fine-tuned multilingual models (mBART, NLLB-200) for English–Nepali clinical translation',
            'Co-authored a Modified Sparse Transformer for camera-LiDAR fusion in autonomous vehicles',
        ],
        tech: ['PyTorch', 'LLM Fine-tuning', 'NLP', 'Transformers'],
    },
    {
        company: 'TatvaSoft',
        role: 'Full Stack Developer',
        period: 'Jan 2020 — Jul 2023',
        summary:
            'Engineered a scalable e-commerce platform supporting high-volume transactions end to end.',
        highlights: [
            'Improved system throughput by 35% with a React.js + Node.js architecture',
            'Cut API response time by 28% via Express.js REST APIs with security best practices',
            'Optimized PostgreSQL queries and indexing, improving data retrieval by 32%',
            'Integrated Stripe and shipping APIs, reducing transaction failures by 20%',
            'Built responsive UI with React and Tailwind, lifting conversion rates by 18%',
        ],
        tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS EC2 / S3', 'OAuth2 / JWT'],
    },
];

export function Experience() {
    return (
        <section id="experience" className="border-b border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">02 — Experience</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">Work Experience</h2>

                <ol className="space-y-10">
                    {EXPERIENCES.map((exp) => (
                        <li key={exp.company + exp.role} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                            {/* Period column */}
                            <div className="pt-1">
                                <time className="block font-mono text-xs text-neutral-500">{exp.period}</time>
                                {exp.current && (
                                    <span className="mt-2 inline-block rounded border border-neutral-700 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-300">
                                        Current
                                    </span>
                                )}
                            </div>

                            {/* Detail card */}
                            <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/40 hover:border-neutral-600 transition-colors">
                                <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                                <p className="text-sm text-neutral-400">{exp.role}</p>

                                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{exp.summary}</p>

                                <ul className="mt-4 space-y-2">
                                    {exp.highlights.map((h) => (
                                        <li key={h} className="text-sm text-neutral-300 flex gap-3 leading-relaxed">
                                            <span className="text-neutral-600 select-none">—</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-5 flex flex-wrap gap-1.5">
                                    {exp.tech.map((t) => (
                                        <li key={t} className="px-2 py-0.5 rounded border border-neutral-800 font-mono text-[11px] text-neutral-400">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

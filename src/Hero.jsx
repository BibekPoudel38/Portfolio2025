import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';

const STATS = [
    { value: '40%', label: 'Support effort reduced with a production LLM chatbot' },
    { value: '35%', label: 'Transaction throughput gained on an e-commerce platform' },
    { value: '5+', label: 'Years of full stack engineering experience' },
    { value: '2', label: 'Peer-reviewed AI publications' },
];

export function Hero() {
    return (
        <section className="border-b border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">
                    Software Engineer · AI Engineer
                </p>

                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Bibek Poudel
                </h1>

                <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-400 leading-relaxed">
                    I design and ship secure, cloud-native systems — from production LLM services to
                    high-throughput commerce platforms. Java, Python, TypeScript, React, Node.js, AWS.
                </p>

                <p className="mt-5 inline-block rounded-md border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 font-mono text-xs text-neutral-300">
                    Open to Software Engineer &amp; AI Engineer roles
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href="BibekPoudelResume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                    >
                        <FileDown size={15} /> Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="border border-neutral-700 text-neutral-200 px-5 py-2.5 rounded-md text-sm font-medium hover:border-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        Contact <ArrowDown size={14} />
                    </a>
                    <span className="hidden sm:block h-5 w-px bg-neutral-800" />
                    <div className="flex items-center gap-4 text-neutral-500">
                        <a href="mailto:bibekpoudel2056@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><Mail size={18} /></a>
                        <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="https://github.com/BibekPoudel38" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={18} /></a>
                    </div>
                </div>

                {/* Impact metrics */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-neutral-800">
                    {STATS.map((s) => (
                        <div key={s.label} className="pt-6 pr-6 pb-1">
                            <p className="font-mono text-3xl md:text-4xl font-semibold text-white">{s.value}</p>
                            <p className="mt-2 text-xs text-neutral-500 leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { ExternalLink } from "lucide-react";

const PUBLICATIONS = [
    {
        title: "MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles",
        description:
            "Proposes a Modified Sparse Transformer (MST) that fuses multi-view camera images and LiDAR point clouds using sparse attention, dynamic instance interaction, and Depth-Aware Positional Encoding to align 2D and 3D features — improving 3D object detection and tracking in complex driving environments.",
        date: "November 2025",
        venue: "Transportation Research Interdisciplinary Perspectives",
        url: "https://www.sciencedirect.com/science/article/pii/S2590198225002507",
    },
    {
        title: "Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models",
        description:
            "Evaluates fine-tuned multilingual LLMs (mBART, NLLB-200) for English–Nepali medical translation, showing NLLB-200 outperforms mBART in accuracy and fluency while addressing term omissions and hallucinations — advancing medical translation for low-resource languages.",
        date: "September 2025",
        venue: "RANLP 2025",
        url: "https://acl-bg.org/proceedings/2025/RANLP%202025/pdf/2025.ranlp-1.6.pdf",
    },
];

export function Publications({ publications = PUBLICATIONS }) {
    return (
        <section id="publications" className="border-b border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">05 — Research</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Publications</h2>
                <p className="mt-2 text-sm text-neutral-500">Peer-reviewed research in AI and NLP.</p>

                <ul className="mt-10 space-y-5" role="list" aria-label="Publications list">
                    {publications.map((p) => (
                        <li key={p.title}>
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block border border-neutral-800 rounded-lg p-6 bg-neutral-900/40 hover:border-neutral-600 transition-colors"
                            >
                                <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
                                    <h3 className="text-base md:text-lg font-semibold text-white flex-1 leading-snug">
                                        {p.title}
                                    </h3>
                                    <time className="font-mono text-xs text-neutral-500 shrink-0" dateTime={p.date}>
                                        {p.date}
                                    </time>
                                </div>

                                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{p.description}</p>

                                <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
                                    <span className="px-2 py-0.5 rounded border border-neutral-800">{p.venue}</span>
                                    <span className="inline-flex items-center gap-1.5 group-hover:text-neutral-300 transition-colors">
                                        Read paper <ExternalLink size={12} />
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Publications;

import React, { useMemo, useState } from "react";


const SAMPLE_PUBLICATIONS = [
    {
        title: "MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles",
        description:
            "The paper proposes a Modified Sparse Transformer (MST) that integrates multi-view camera images and LiDAR point clouds through a fusion framework. It uses sparse attention and dynamic instance interaction to extract and refine features, while a Depth-Aware Positional Encoding (DAPE) module aligns 2D and 3D features. The model also includes feedback loops for refinement and employs multi-head self-attention and MLP for query embedding. This approach enhances 3D object detection and tracking performance in complex driving environments.",
        date: "November 2025",
        venue: "Transportation Research Interdisciplinary Perspectives",
        url: "https://www.sciencedirect.com/science/article/pii/S2590198225002507"
    },
    {
        title: "Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models",
        description: "This research explores the effectiveness of fine-tuned multilingual large language models (mBART and NLLB-200) for English-Nepali medical translation, demonstrating that NLLB-200 outperforms mBART in accuracy and fluency while addressing challenges like term omissions and hallucinations. The study emphasizes the potential of large-scale multilingual models in improving medical translation for low-resource languages with ethical and practical considerations.",
        date: "September 2025",
        venue: "RANLP 2025",
        url: "https://acl-bg.org/proceedings/2025/RANLP%202025/pdf/2025.ranlp-1.6.pdf",
    }
];

export function Publications({ publications = SAMPLE_PUBLICATIONS }) {
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("All");
    const [venue, setVenue] = useState("All");

    const years = useMemo(() => {
        const ys = new Set();
        publications.forEach((p) => {
            if (p.date) ys.add(new Date(p.date).getFullYear());
        });
        return ["All", ...Array.from(ys).sort((a, b) => b - a)];
    }, [publications]);

    const venues = useMemo(() => {
        const vs = new Set();
        publications.forEach((p) => p.venue && vs.add(p.venue));
        return ["All", ...Array.from(vs).sort()];
    }, [publications]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return publications
            .filter((p) => {
                const matchesQuery =
                    !q ||
                    p.title.toLowerCase().includes(q) ||
                    (p.description || "").toLowerCase().includes(q) ||
                    (p.venue || "").toLowerCase().includes(q) ||
                    (Array.isArray(p.authors) ? p.authors.join(", ") : "").toLowerCase().includes(q);
                const matchesYear = year === "All" || (p.date && new Date(p.date).getFullYear() === Number(year));
                const matchesVenue = venue === "All" || p.venue === venue;
                return matchesQuery && matchesYear && matchesVenue;
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [publications, query, year, venue]);

    const formatDate = (iso) => {
        if (!iso) return "";
        try {
            return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" }).format(
                new Date(iso)
            );
        } catch {
            return iso;
        }
    };

    return (
        <section id="publications" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-text-glow">
                            My Pubications
                        </h2>
                        <p className="text-sm text-gray-400 mt-2">Here are some research works i have worked upon</p>
                    </div>
                </div>


            {/* Controls */}
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search title, author, venue…"
                    className="w-full sm:max-w-md rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />

                <div className="flex gap-2">
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="rounded-xl bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    >
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                    <select
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        className="rounded-xl bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    >
                        {venues.map((v) => (
                            <option key={v} value={v}>
                                {v}
                            </option>
                        ))}
                    </select>
                </div>
            </div> */}

            {/* List */}
            <ul className="space-y-3" role="list" aria-label="Publications list">
                {filtered.map((p, idx) => (
                    <li key={p.title + idx}>
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => p.url && window.open(p.url, "_blank", "noopener,noreferrer")}
                            onKeyDown={(e) => {
                                if ((e.key === "Enter" || e.key === " ") && p.url) {
                                    e.preventDefault();
                                    window.open(p.url, "_blank", "noopener,noreferrer");
                                }
                            }}
                            className="group relative rounded-2xl bg-zinc-900/60 ring-1 ring-white/5 hover:ring-2 transition cursor-pointer"
                        >
                            {/* Left border accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-purple-500/80 to-pink-500/80" />

                            <div className="p-4 md:p-5">
                                <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
                                    <h3 className="text-base md:text-lg font-semibold text-white flex-1">
                                        <span className="underline-offset-4 decoration-transparent group-hover:decoration-purple-400">
                                            {p.title}
                                        </span>
                                    </h3>
                                    {/* Date */}
                                    {p.date && (
                                        <time className="text-xs md:text-sm text-zinc-400" dateTime={p.date}>
                                            {p.date}
                                        </time>
                                    )}
                                </div>

                                {/* Description */}
                                {p.description && (
                                    <p className="mt-2 text-sm text-zinc-300/90">{p.description}</p>
                                )}

                                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-sm text-zinc-400">
                                    {p.venue && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{p.venue}</span>}
                                    {Array.isArray(p.authors) && p.authors.length > 0 && (
                                        <span className="truncate">{p.authors.join(", ")}</span>
                                    )}
                                    {Array.isArray(p.tags) &&
                                        p.tags.map((t) => (
                                            <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="mt-10 text-center text-zinc-400">No publications match your search/filters.</div>
            )}
        </div>
        </section >
    );
}

export default Publications;

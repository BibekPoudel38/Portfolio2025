import React, { useState } from "react";

// Education — Concept Cards (no timeline)
// • Creative cards that highlight degree + "concepts learned"
// • Concept chips, optional details (courses, projects, distinctions)
// • Each card is self‑contained with its own expand/collapse

const DATA = [
  {
    school: "California State University, Dominguez Hills",
    degree: "M.S. in Computer Science",
    period: "2024 — 2026",
    location: "Carson, CA",
    summary:
      "Focused on AI, Deep Learning, Advanced Software Engineering, and Language Models for real‑world applications.",
    concepts: [
      "AI & Deep Learning",
      "Language Models",
      "Software Engineering",
      "Data Pipelines",
      "Evaluation",
      "Project Management",
      "Research",
    ],
    courses: ["Advanced SE", "Deep Learning", "NLP", "Reinforcement Learning","Cloud Computing","Big Data"],
    projects: [
      { name: "On Campus Student Resource sharing platform", url: "#" },
      { name: "Fine Tuning Large Language Models", url: "#" },
    ],
    distinctions: ["Graduate Studies"],
  },
  {
    school: "London Metropolitan University",
    degree: "BSc (Hons) Computing",
    period: "2018 — 2021",
    location: "ICP, Pokhara, Nepal",
    summary:
      "Graduated with first‑class honors degree. Specialized in software systems and mobile development.",
    concepts: [
      "Algorithms",
      "Software Systems",
      "Databases",
      "Mobile Development",
      "APIs",
      "Testing & QA",
    ],
    courses: ["Data Structures", "Databases", "Mobile Apps", "Networks","Web Development", "Algorithms","Operating Systems"],
    projects: [
      { name: "Local Food Share Platform", url: "#" },
      { name: "Libarary Management System", url: "#" },
    ],
    distinctions: ["First‑class Distinction"],
  },
];

function EduCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative rounded-2xl bg-zinc-900/60 ring-1 ring-white/5 hover:ring-2 transition overflow-hidden">
      {/* decorative corners */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-pink-500/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-purple-500/15 blur-3xl" />

      {/* top accent bar */}
      <div aria-hidden className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500" />

      <div className="relative p-5 md:p-6">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-white">
              <span className="underline-offset-4 decoration-transparent group-hover:decoration-purple-400">
                {item.school}
              </span>
            </h3>
            <p className="mt-1 text-sm text-purple-300/90">
              {item.degree}
              {item.location && <span className="text-zinc-500"> · {item.location}</span>}
            </p>
          </div>

          {/* period badge */}
          {item.period && (
            <span className="shrink-0 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300">
              {item.period}
            </span>
          )}
        </div>

        {/* summary */}
        {item.summary && (
          <p className="mt-3 text-sm text-zinc-300/90">{item.summary}</p>
        )}

        {/* concept cloud */}
        {Array.isArray(item.concepts) && item.concepts.length > 0 && (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">Concepts I worked with</p>
            <ul className="flex flex-wrap gap-2">
              {item.concepts.map((c) => (
                <li
                  key={c}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-zinc-200 hover:bg-white/10"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* actions */}
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              {open ? (
                <path d="M6 15l6-6 6 6" />
              ) : (
                <path d="M6 9l6 6 6-6" />
              )}
            </svg>
            {open ? "Hide details" : "Show details"}
          </button>

          {Array.isArray(item.distinctions) && item.distinctions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.distinctions.map((d) => (
                <span key={d} className="rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 text-xs">
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* expandable details */}
        {open && (
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {/* Courses */}
            {Array.isArray(item.courses) && item.courses.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-white">Core Courses</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.courses.map((c) => (
                    <li key={c} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-200">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {Array.isArray(item.projects) && item.projects.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-white">Representative Projects</h4>
                <ul className="mt-2 space-y-2">
                  {item.projects.map((p) => (
                    <li key={p.name} className="text-sm">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-200 underline decoration-purple-400/50 underline-offset-4 hover:decoration-purple-400"
                        >
                          {p.name}
                        </a>
                      ) : (
                        <span className="text-zinc-300">{p.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Education({ items = DATA }) {
  return (
    <section id="education" className="px-6 py-20 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Education
        </h2>
        <p className="mt-2 text-center text-zinc-400">My Academic Achievements</p>

        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 ">
          {items.map((it) => (
            <EduCard key={it.school} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

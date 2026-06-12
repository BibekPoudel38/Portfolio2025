import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DATA = [
  {
    school: "California State University, Dominguez Hills",
    degree: "M.S. in Computer Science",
    period: "2024 — 2026",
    location: "Carson, CA",
    summary:
      "Focused on AI, Deep Learning, Advanced Software Engineering, and Language Models for real-world applications.",
    concepts: [
      "AI & Deep Learning",
      "Language Models",
      "Software Engineering",
      "Data Pipelines",
      "Evaluation",
      "Project Management",
      "Research",
    ],
    courses: ["Advanced SE", "Deep Learning", "NLP", "Reinforcement Learning", "Cloud Computing", "Big Data"],
    projects: [
      { name: "BizAI — Multi-agent business AI (Final Year Project)" },
      { name: "Fine-tuning Large Language Models" },
    ],
    distinctions: ["M.S. Completed — May 2026"],
  },
  {
    school: "London Metropolitan University",
    degree: "BSc (Hons) Computing",
    period: "2018 — 2021",
    location: "ICP, Pokhara, Nepal",
    summary:
      "Graduated with first-class honors. Specialized in software systems and mobile development.",
    concepts: [
      "Algorithms",
      "Software Systems",
      "Databases",
      "Mobile Development",
      "APIs",
      "Testing & QA",
    ],
    courses: ["Data Structures", "Databases", "Mobile Apps", "Networks", "Web Development", "Algorithms", "Operating Systems"],
    projects: [
      { name: "Local Food Share Platform" },
      { name: "Library Management System" },
    ],
    distinctions: ["First-class Honors"],
  },
];

function EduCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-lg bg-neutral-900/40 hover:border-neutral-600 transition-colors p-6">
      <div className="flex flex-wrap items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white">{item.school}</h3>
          <p className="mt-1 text-sm text-neutral-400">
            {item.degree}
            {item.location && <span className="text-neutral-600"> · {item.location}</span>}
          </p>
        </div>
        <time className="shrink-0 font-mono text-xs text-neutral-500">{item.period}</time>
      </div>

      {item.summary && <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{item.summary}</p>}

      {Array.isArray(item.concepts) && item.concepts.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {item.concepts.map((c) => (
            <li key={c} className="px-2.5 py-1 rounded border border-neutral-800 text-xs text-neutral-400">
              {c}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors"
        >
          {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {open ? "Hide details" : "Show details"}
        </button>

        {Array.isArray(item.distinctions) &&
          item.distinctions.map((d) => (
            <span key={d} className="rounded border border-neutral-700 bg-neutral-900 px-2.5 py-1 font-mono text-[11px] text-neutral-300">
              {d}
            </span>
          ))}
      </div>

      {open && (
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {Array.isArray(item.courses) && item.courses.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">Core Courses</h4>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {item.courses.map((c) => (
                  <li key={c} className="px-2.5 py-1 rounded border border-neutral-800 text-xs text-neutral-400">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.projects) && item.projects.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">Representative Projects</h4>
              <ul className="mt-2 space-y-1.5">
                {item.projects.map((p) => (
                  <li key={p.name} className="text-sm text-neutral-300">{p.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function Education({ items = DATA }) {
  return (
    <section id="education" className="border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">06 — Education</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Education</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <EduCard key={it.school} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

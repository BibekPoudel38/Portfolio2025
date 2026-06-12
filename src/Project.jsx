import { BarChart3, Bot, ChefHat, ExternalLink, Lock, Share2 } from 'lucide-react';
import React from 'react';

const AI_PROJECTS = [
  {
    title: "BizAI",
    icon: Bot,
    badge: "M.S. Final Year Project",
    description: "Multi-agent AI system that performs business tasks — market research, competitor analysis, and customer support.",
    tech: "Gemini 2.5 Pro, Multi-agent, Flutter, Supabase",
  },
  {
    title: "AI Pantry to Recipe",
    icon: ChefHat,
    badge: "AI Agent",
    description: "AI agent app that turns the ingredients in your pantry into personalized recipes based on your preferences.",
    tech: "Gemini 2.5 Pro, AI Agents, Flutter, Supabase",
  },
];

const CLIENT_PROJECTS = [
  {
    title: "Real-Time Collaboration Platform",
    icon: Share2,
    badge: "Acquired · NDA",
    description: "SaaS productivity app with live document editing and synchronized updates across distributed users, offline-first via Redux + IndexedDB.",
    note: "Built as a SaaS product and acquired by a private client — proprietary under NDA.",
    tech: "Node.js, WebSockets, GraphQL, Redux",
    nda: true,
  },
  {
    title: "Data Pipeline & Analytics Platform",
    icon: BarChart3,
    badge: "Acquired · NDA",
    description: "End-to-end cloud data engineering system: Spark + Airflow ingestion, Snowflake models, and Tableau dashboards.",
    note: "Delivered to a private client — implementation details covered by NDA.",
    tech: "Apache Spark, Airflow, Snowflake, Tableau",
    nda: true,
  },
  {
    title: "Saral Patro",
    image: "https://play-lh.googleusercontent.com/MYWHCSwTiwkPhkPlh7klJ_M39Tem4bKN8yZyTL7z0wtQ9xyfYPjL4QNP9gDDLJFd2j4=w240-h480-rw",
    description: "Nepali lunisolar calendar app with festivals and reminders, published on the Play Store.",
    tech: "Flutter, Firebase, Google Calendar API",
    link: "https://play.google.com/store/apps/details?id=com.saralapps.saralpatro",
  },
  {
    title: "Clean Sudoku",
    image: "https://play-lh.googleusercontent.com/CLeouww3xjilRheYKvFvw8RipIOTLHwyXmw4LX2jQ0UcYAjNNBEFQSnhEAl0TLT4urAU=w240-h480-rw",
    description: "AI puzzle scanner, solver, and generator using the device camera, published on the Play Store.",
    tech: "Flutter, TensorFlow Lite, ML Kit",
    link: "https://play.google.com/store/apps/details?id=com.fishtailgames.sudoku",
  },
];

const toChips = (s) => (s || "").split(",").map(t => t.trim()).filter(Boolean);

function ProjectCard({ project, featured = false }) {
  const Icon = project.icon;
  return (
    <article
      className={`border rounded-lg bg-neutral-900/40 transition-colors overflow-hidden flex flex-col ${
        featured ? 'border-neutral-600 hover:border-neutral-400' : 'border-neutral-800 hover:border-neutral-600'
      }`}
    >
      {/* Compact cover */}
      <div className="relative h-20 border-b border-neutral-800 bg-neutral-900 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover grayscale opacity-80"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={26} strokeWidth={1.25} className="text-neutral-500" aria-hidden />
          </div>
        )}
        {project.badge && (
          <span className="absolute top-2.5 left-2.5 rounded border border-neutral-700 bg-neutral-950/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-300">
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-white">{project.title}</h3>
        <p className="mt-1.5 text-[13px] text-neutral-400 leading-relaxed">{project.description}</p>
        {project.note && (
          <p className="mt-1.5 text-xs text-neutral-500 italic leading-relaxed">{project.note}</p>
        )}

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {toChips(project.tech).map((chip) => (
            <li
              key={project.title + chip}
              className="px-1.5 py-0.5 rounded border border-neutral-800 font-mono text-[10px] text-neutral-400"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3">
          {project.nda ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-500">
              <Lock size={12} /> Private — under NDA
            </span>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
              aria-label={`Open ${project.title}`}
            >
              View project <ExternalLink size={12} />
            </a>
          ) : (
            <span className="font-mono text-[11px] text-neutral-500">Demo available on request</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Project() {
  return (
    <section id="projects" className="border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">03 — Projects</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Selected Work</h2>
        <p className="mt-2 text-sm text-neutral-500">Products shipped to clients, app stores, and research settings.</p>

        {/* Personal AI projects — featured */}
        <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-neutral-300">Personal AI Projects</h3>
        <p className="mt-1 text-xs text-neutral-500">Agentic AI systems I design and build end to end.</p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} featured />
          ))}
        </div>

        {/* Client & published work */}
        <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-neutral-300">Client & Published Work</h3>
        <p className="mt-1 text-xs text-neutral-500">Platforms sold to clients and apps live on the Play Store.</p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLIENT_PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

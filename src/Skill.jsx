import React, { useMemo, useState } from "react";

// Skills (no-scroll) — grid with filter chips
// Pure JSX (no TypeScript types)
// Exports BOTH named and default: `Skills`

export function Skills() {
  const skillsData = [
    { name: "Python", tag: "Backend", icon: "python.png" },
    { name: "Dart", tag: "Mobile", icon: "dart.png" },
    { name: "JavaScript", tag: "Frontend", icon: "js.png" },
    { name: "SQL", tag: "Database", icon: "sql.png" },
    { name: "No-SQL", tag: "Database", icon: "nosql.png" },
    { name: "Postgres", tag: "Database", icon: "pg.png" },
    { name: "HTML", tag: "Markup", icon: "html.png" },
    { name: "CSS", tag: "Styling", icon: "css.png" },
    { name: "Flutter", tag: "Mobile", icon: "flutter.png" },
    { name: "Django", tag: "Backend", icon: "django.png" },
    { name: "React", tag: "Frontend", icon: "react.png" },
    { name: "Supabase", tag: "Backend as a Service", icon: "supabase.png" },
    { name: "Tailwind", tag: "UI Framework", icon: "tailwind.png" },
    { name: "Firebase", tag: "Backend as a Service", icon: "firebase.png" },
    { name: "GraphQL", tag: "API Query", icon: "graphql.png" },
    { name: "Git", tag: "Version Control", icon: "git.png" },
    { name: "LLM Fine-Tuning", tag: "AI / NLP", icon: "llm.png" },
    { name: "AI Agent", tag: "AI / NLP", icon: "llm.png" },
    { name: "Agentic AI", tag: "AI / NLP", icon: "llm.png" },
    { name: "Prompt Engineering", tag: "AI / NLP", icon: "llm.png" },
    { name: "Docker", tag: "Containerization", icon: "docker.png" },
  ];

  // Category styling (text color + hover glow)
  const TAG_STYLES = {
    Backend: { text: "text-emerald-400", glow: "from-emerald-500/15 to-transparent" },
    Mobile: { text: "text-sky-400", glow: "from-sky-500/15 to-transparent" },
    Frontend: { text: "text-violet-400", glow: "from-violet-500/15 to-transparent" },
    Database: { text: "text-amber-400", glow: "from-amber-500/15 to-transparent" },
    Markup: { text: "text-rose-400", glow: "from-rose-500/15 to-transparent" },
    Styling: { text: "text-pink-400", glow: "from-pink-500/15 to-transparent" },
    "Backend as a Service": { text: "text-lime-400", glow: "from-lime-500/15 to-transparent" },
    "Realtime & Auth": { text: "text-yellow-400", glow: "from-yellow-500/15 to-transparent" },
    "API Query": { text: "text-indigo-400", glow: "from-indigo-500/15 to-transparent" },
    "Version Control": { text: "text-slate-300", glow: "from-slate-500/15 to-transparent" },
    "AI / NLP": { text: "text-fuchsia-400", glow: "from-fuchsia-500/15 to-transparent" },
    Containerization: { text: "text-cyan-400", glow: "from-cyan-500/15 to-transparent" },
    "UI Framework": { text: "text-purple-300", glow: "from-purple-500/15 to-transparent" },
  };

  const categories = useMemo(() => {
    const unique = Array.from(new Set(skillsData.map((s) => s.tag)));
    return ["All", ...unique.sort()];
  }, []);

  const counts = useMemo(() => {
    return skillsData.reduce((acc, s) => {
      acc[s.tag] = (acc[s.tag] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    return active === "All" ? skillsData : skillsData.filter((s) => s.tag === active);
  }, [active]);

  return (
    <section id="skills" className="px-6 py-20 rounded-xl p-6 bg-zinc-800/30 backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            My Tech Arsenal
          </h2>
        </div>

        {/* Legend + Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const style = TAG_STYLES[cat] || { text: "text-zinc-300", glow: "from-zinc-500/10 to-transparent" };
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full border border-white/10 px-3.5 py-1.5 text-sm transition ${isActive ? "bg-white/5 ring-1 ring-white/10" : "hover:bg-white/5"} ${style.text}`}
                aria-pressed={isActive}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-current" />
                  <span>{cat}</span>
                  {cat !== "All" && (
                    <span className="text-zinc-400">({counts[cat] || 0})</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid — no horizontal scroll; fits 4x4 on desktop */}
        <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" role="list" aria-label="Skills">
          {visible.map((skill, idx) => {
            const style = TAG_STYLES[skill.tag] || { text: "text-zinc-300", glow: "from-zinc-500/10 to-transparent" };
            return (
              <div key={skill.name} role="listitem" className="relative group rounded-2xl bg-zinc-900/60 p-4 md:p-5 ring-1 ring-white/5 hover:ring-2 transition">
                {/* Glow accent on hover */}
                <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${style.glow} opacity-0 group-hover:opacity-100 blur-xl transition`} />

                <div className="relative flex items-center gap-4">
                  <img src={skill.icon} alt={`${skill.name} logo`} loading="lazy" className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-base md:text-lg font-semibold text-white truncate">{skill.name}</p>
                    <p className={`text-xs md:text-sm ${style.text}`}>{skill.tag}</p>
                  </div>
                  {/* Tile index badge for a "periodic table" vibe */}
                  <span className="ml-auto text-[10px] text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

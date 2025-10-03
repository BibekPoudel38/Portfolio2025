import { ExternalLink } from 'lucide-react';
import React from 'react';

export function Project() {
  const projects = [
    {
      title: "Business Agentic AI [WIP]",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs1zPSAyZhahInyK0TocectUYGwaUS6uIqQ&s",
      description: "Agentic AI which uses multiple AI agents to perform business tasks like market research, competitor analysis, and customer support.",
      tech: "Gemini 2.5 pro, Flutter, Supabase, Firebase",
      link: "#",
    },
    {
      title: "AI Recipe Generator [WIP]",
      image: "https://www.foodandwine.com/thmb/WBos4rhEqcP1pH1TBt3qU7lP--4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Smoked-Salmon-Lyonnaise-Salad-FT-MAG-RECIPE-1224-81a86adbf03c421f8c3ef736795d7a7c.jpg",
      description: "AI Agent based app which generates recipes from ingredients and your preferences.",
      tech: "Gemini 2.5 pro, Flutter, Supabase, Firebase",
      link: "#",
    }, {
      title: "Saral Patro",
      image: "https://play-lh.googleusercontent.com/MYWHCSwTiwkPhkPlh7klJ_M39Tem4bKN8yZyTL7z0wtQ9xyfYPjL4QNP9gDDLJFd2j4=w240-h480-rw",
      description: "A Nepali lunisolar calendar app with festivals and reminders.",
      tech: "Flutter, Firebase, Google Calendar API",
      link: "https://play.google.com/store/apps/details?id=com.saralapps.saralpatro",
    },
    {
      title: "Clean Sudoku",
      image: "https://play-lh.googleusercontent.com/CLeouww3xjilRheYKvFvw8RipIOTLHwyXmw4LX2jQ0UcYAjNNBEFQSnhEAl0TLT4urAU=w240-h480-rw",
      description: "AI puzzle scanner, solver, and generator using camera.",
      tech: "Flutter, TensorFlow Lite, Firebase ML Kit",
      link: "https://play.google.com/store/apps/details?id=com.fishtailgames.sudoku",
    },
    {
      title: "Pokhara Rojgar",
      image: "https://play-lh.googleusercontent.com/RRvCPxtOr76KCQ1sqxzPrlX3_1Zj1UR_Tb_3uBySauU1hLMJMHU6nLDEO9t9_u8_F44=w240-h480-rw",
      description: "A local government app to regulate Businesses in Pokhara, Nepal.",
      tech: "React, Django, Supabase, Tailwind",
      link: "https://play.google.com/store/apps/details?id=com.bpc.jobapp.bpc",
    },
  ];

  const toChips = (s) => (s || "").split(",").map(t => t.trim()).filter(Boolean);

  // Text clamps (no plugin)
  const clamp2 = { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' };
  const clamp3 = { display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' };

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
            Projects & Creations
          </h2>
          <p className="text-sm text-gray-400 mt-2">Explore some of the apps and platforms I've crafted.</p>
        </div>

        {/* Equal-height tiles per breakpoint */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const isWIP = /\[WIP\]/i.test(project.title);

            return (
              <article
                key={project.title + i}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-indigo-500/30 hover:from-purple-500/50 hover:via-pink-500/40 hover:to-indigo-500/50 transition"
              >
                {/* Glass card */}
                <div className="rounded-2xl bg-zinc-900/70 ring-1 ring-white/10 shadow-lg overflow-hidden flex flex-col h-full">
                  {/* Top: perfect square image with rounded border */}
                  <div className="p-4 pb-0">
                    <div className="relative w-full aspect-[5/3] overflow-hidden rounded-xl bg-zinc-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      {isWIP && (
                        <span className="absolute top-2 left-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[11px] font-medium">
                          WIP
                        </span>
                      )}
                     
                    </div>
                  </div>

                  {/* Content area: fixed height for perfect uniformity */}
                  <div className="p-4 flex flex-col ">
                    <header>
                      <h3 className="text-base md:text-lg font-semibold text-white leading-snug" style={clamp2}>
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-300/90" style={clamp3}>
                        {project.description}
                      </p>
                    </header>

                    {/* Chips (trimmed to keep height consistent) */}
                    <div className="mt-3">
                      <ul className="flex flex-wrap gap-1.5 max-h-10 overflow-hidden">
                        {toChips(project.tech).map((chip) => (
                          <li
                            key={project.title + chip}
                            className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-200"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Open button (second location, very clear) */}
                    <div className="mt-auto pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 hover:text-white hover:bg-white/10 transition"
                        aria-label={`Open ${project.title}`}
                      >
                        Open <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Subtle outer glow on hover (consistent across all cards) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

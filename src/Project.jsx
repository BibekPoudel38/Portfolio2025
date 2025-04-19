import { ExternalLink } from 'lucide-react';
import React, { useState } from 'react';


export function Project() {
    const [activeIndex, setActiveIndex] = useState(null);

    const projects = [
        {
            title: "Saral Patro",
            image: "https://play-lh.googleusercontent.com/MYWHCSwTiwkPhkPlh7klJ_M39Tem4bKN8yZyTL7z0wtQ9xyfYPjL4QNP9gDDLJFd2j4=w240-h480-rw",
            description: "A Nepali lunisolar calendar app with festivals and reminders.",
            tech: "Flutter, Firebase, Google Calendar API",
            link: "https://play.google.com/store/apps/details?id=com.saralpatro",
        },
        {
            title: "Clean Sudoku",
            image: "https://play-lh.googleusercontent.com/CLeouww3xjilRheYKvFvw8RipIOTLHwyXmw4LX2jQ0UcYAjNNBEFQSnhEAl0TLT4urAU=w240-h480-rw",
            description: "AI puzzle scanner, solver, and generator using camera.",
            tech: "Flutter, TensorFlow Lite, Firebase ML Kit",
            link: "https://github.com/bibekpdl/clean-sudoku",
        },
        {
            title: "Pokhara Rojgar",
            image: "https://play-lh.googleusercontent.com/RRvCPxtOr76KCQ1sqxzPrlX3_1Zj1UR_Tb_3uBySauU1hLMJMHU6nLDEO9t9_u8_F44=w240-h480-rw",
            description: "A local government app to regulate Businesses in Pokhara, Nepal.",
            tech: "React, Django, Supabase, Tailwind",
            link: "https://studenthub.csudh.edu",
        },
    ];
    return (
        <>
            {/* Projects Section */}
            <section id="projects" className="px-6 py-20 rounded-xl p-6 bg-zinc-800/30 backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-text-glow">
                            Projects & Creations
                        </h2>
                        <p className="text-sm text-gray-400 mt-2">Explore some of the apps and platforms I've crafted.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-600/30 transition">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-purple-300 mb-1">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                                    <button
                                        className="text-sm text-purple-400 hover:text-white mt-2 underline"
                                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                    >
                                        {activeIndex === index ? 'Hide Details' : 'View Details'}
                                    </button>
                                    {activeIndex === index && (
                                        <div className="mt-4 border-t border-zinc-700 pt-3 text-sm text-gray-300 space-y-1">
                                            <p><span className="text-purple-400">Tech Stack:</span> {project.tech}</p>
                                            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-purple-300 hover:text-white">
                                                Project Link <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

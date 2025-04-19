import React, { useEffect, useRef } from 'react';

export function Skill() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = 0.5;
        const scroll = () => {
            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
        };
        const interval = setInterval(scroll, 10);
        return () => clearInterval(interval);
    }, []);


    const skillsData = [
        { name: "Python", tag: "Backend", icon: "python.png" },
        { name: "Dart", tag: "Mobile", icon: "dart.png" },
        { name: "JavaScript", tag: "Frontend", icon: "js.png" },
        { name: "SQL", tag: "Database", icon: "sql.png" },
        { name: "HTML", tag: "Markup", icon: "html.png" },
        { name: "CSS", tag: "Styling", icon: "css.png" },
        { name: "Flutter", tag: "Mobile", icon: "flutter.png" },
        { name: "Django", tag: "Backend", icon: "django.png" },
        { name: "React", tag: "Frontend", icon: "react.png" },
        { name: "Supabase", tag: "Backend as a Service", icon: "supabase.png" },
        { name: "Tailwind", tag: "UI Framework", icon: "tailwind.png" },
        { name: "Firebase", tag: "Realtime & Auth", icon: "firebase.png" },
        { name: "GraphQL", tag: "API Query", icon: "graphql.png" },
        { name: "Git", tag: "Version Control", icon: "git.png" },
        { name: "LLM Fine-Tuning", tag: "AI / NLP", icon: "llm.png" },
        { name: "Docker", tag: "Containerization", icon: "docker.png" },
    ];
    return (
        <>
            {/* Skills Section */}
            <section id="skills" className=" py-20  ">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">
                        My Tech Arsenal
                    </h2>
                    <div
                        ref={scrollRef}
                        className="overflow-x-auto w-full" style={{ scrollbarWidth: 'none' }}
                    >
                        <div className="grid grid-flow-col auto-cols-max gap-6 w-max no-scrollbar" style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridAutoFlow: 'column' }}>
                            {skillsData.map((skill, index) => (
                                <div
                                    key={index}
                                    className="w-64 h-28 bg-zinc-800 p-4 gap-6 rounded-xl shadow-md border border-transparent hover:border-purple-500 hover:shadow-purple-600/30 transition flex flex-row items-center justify-center text-center"
                                >
                                    <img srcSet={skill.icon} className='w-12 h-12' />
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                        <p className="text-xs text-gray-400">{skill.tag}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
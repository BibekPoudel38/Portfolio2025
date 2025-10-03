import React from 'react';
export function About() {
    return (
        <>
            {/* About Me Section */}
            <section id="about" className="relative z-10 px-6 py-20  rounded-xl p-6 bg-zinc-800/30 backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">About Me</h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        I’m a passionate software engineer focused on building fast, intuitive, and scalable applications. With a Master’s in Computer Science (in-progress at CSUDH) and a Bachelor's from London Metropolitan University, I’ve shipped 35+ real-world apps—from AI tools to student platforms.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-4">
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">Full Stack Focus</h3>
                            <p className="text-sm text-gray-400">Proficient with Flutter, Django, React, and RESTful APIs to deliver end-to-end solutions.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">AI Enthusiast</h3>
                            <p className="text-sm text-gray-400">Working on low-resource language models for medical translation and real-time NLP apps.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">Product Mindset</h3>
                            <p className="text-sm text-gray-400">Every line of code I write is user-first, performance-tuned, and built for scale.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-lg font-semibold mb-2 text-purple-300">Research Mindset</h3>
                            <p className="text-sm text-gray-400">Exploring diverse fields of research under Computer Science and AI</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

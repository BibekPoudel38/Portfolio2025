
import React from 'react';


export function Education() {
    return (
        <>
            {/* Education Section */}
            <section id="education" className="px-6 py-20  rounded-xl p-6 bg-zinc-800/30 backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-12 text-center">Education</h2>
                    <div className="space-y-10">
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-xl font-semibold text-white">California State University, Dominguez Hills</h3>
                            <p className="text-sm text-purple-400">M.S. in Computer Science (2024 – 2026)</p>
                            <p className="text-gray-400 text-sm mt-2">Focused on AI, Deep Learning, Advanced Software Engineering, and Language Models for real-world applications.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-purple-600/20 transition">
                            <h3 className="text-xl font-semibold text-white">London Metropolitan University</h3>
                            <p className="text-sm text-purple-400">BSc (Hons) Computing (2018 – 2021)</p>
                            <p className="text-gray-400 text-sm mt-2">Graduated with first-class distinction. Specialized in software systems and mobile development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

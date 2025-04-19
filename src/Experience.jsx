import React from 'react';

export function Experience() {
    return (
        <>
            {/* Experience Section - Vertical Timeline */}
            <section id="experience" className="px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-12 text-center">Work Experiences</h2>
                    <ol className="relative border-s border-zinc-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-purple-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900"></div>
                            <time className="mb-1 text-sm font-medium leading-none text-purple-400">Feb 2021 – Aug 2023</time>
                            <h3 className="text-lg font-semibold text-white">Aarambha IT Research Center</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">Developed full-stack Flutter & Django apps powering scalable internal tools and research systems.</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-purple-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900"></div>
                            <time className="mb-1 text-sm font-medium leading-none text-purple-400">May 2021 – Jan 2023</time>
                            <h3 className="text-lg font-semibold text-white">Thoplo Technologies</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">Worked remotely on production-ready apps using Flutter, Firebase, and custom backend APIs.</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-purple-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900"></div>
                            <time className="mb-1 text-sm font-medium leading-none text-purple-400">2024 – Present</time>
                            <h3 className="text-lg font-semibold text-white">CSUDH Research Assistant</h3>
                            <p className="text-base font-normal text-gray-400">Researching multilingual LLMs, NLP tools, and medical dataset optimization for underrepresented languages.</p>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    );
}

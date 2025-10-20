
import { FileDown } from 'lucide-react';
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 animate-pulse" />
                <div className="max-w-5xl mx-auto px-6 py-32 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Hi 👋, I'm <span className="text-purple-400">Bibek Poudel</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-6">
                        Software Engineer | AI/ML Researcher
                    </p>
                     <div className="flex gap-4 align-center justify-center mb-6 ">
                        <a href="mailto:poudelbibek38@gmail.com" className="hover:text-purple-400 transition"><Mail size={16} /></a>
                        <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Linkedin size={16} /></a>
                        <a href="https://github.com/BibekPoudel38" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Github size={16} /></a>
                    </div>
                    <p className="text-sm text-gray-400 max-w-lg mx-auto mb-10">
                        I build tools that scale and research that pushes boundaries. Currently exploring the intersection of AI and software development to create innovative solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="BibekPoudelResume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2 shadow-lg transition duration-200"
                        >
                            <FileDown size={16} /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="border border-purple-500 text-purple-300 px-5 py-2 rounded-lg text-sm hover:bg-purple-800 hover:text-white transition duration-200"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

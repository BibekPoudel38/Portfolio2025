import React from 'react';

const LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Publications', 'Education', 'Contact'];

export function NavBar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-800">
            <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
                <a href="#" className="font-mono text-sm text-white tracking-tight">
                    bibek<span className="text-neutral-500">.poudel</span>
                </a>
                <nav className="hidden md:flex gap-7 text-sm text-neutral-400">
                    {LINKS.map((item) => (
                        <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-white transition-colors duration-200">
                            {item}
                        </a>
                    ))}
                </nav>
                <a
                    href="BibekPoudelResume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:inline-block text-sm bg-white text-black px-4 py-1.5 rounded-md font-medium hover:bg-neutral-200 transition-colors"
                >
                    Resume
                </a>
            </div>
        </header>
    );
}

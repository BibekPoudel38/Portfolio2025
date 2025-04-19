

import React from 'react';

export function NavBar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href='#'> <h1 className="text-xl font-bold text-purple-400 tracking-tight">Bibek Poudel</h1></a>
                <nav className="hidden md:flex gap-6 text-sm text-gray-300">
                    {['About', 'Experience', 'Projects', 'Skills', 'Education', , 'Contact'].map((item) => (
                        <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-purple-400 transition-all duration-200">
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}


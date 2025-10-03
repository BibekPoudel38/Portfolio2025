
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
export function Footer() {
    return (
        <>

            {/* Footer Section */}
            <footer className="px-6 py-4 mb-4 rounded-xl p-6 bg-black backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <a href='#'><p>BIBEK POUDEL</p></a>
                    <p>&copy; {new Date().getFullYear()} Bibek Poudel. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="mailto:poudelbibek38@gmail.com" className="hover:text-purple-400 transition"><Mail size={16} /></a>
                        <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Linkedin size={16} /></a>
                        <a href="https://github.com/BibekPoudel38" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Github size={16} /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

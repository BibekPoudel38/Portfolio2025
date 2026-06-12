import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export function Footer() {
    return (
        <footer className="bg-neutral-950">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                <a href="#" className="font-mono text-xs text-neutral-400 hover:text-white transition-colors">
                    bibek<span className="text-neutral-600">.poudel</span>
                </a>
                <p className="font-mono text-xs">&copy; {new Date().getFullYear()} Bibek Poudel. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="mailto:bibekpoudel2056@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><Mail size={16} /></a>
                    <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                    <a href="https://github.com/BibekPoudel38" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={16} /></a>
                </div>
            </div>
        </footer>
    );
}

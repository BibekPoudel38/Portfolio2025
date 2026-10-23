import { ArrowDown, ArrowUpRight } from 'lucide-react';
import React from 'react';

export function SiteFooter() {
  return (
    <footer className="new-footer">
      <div className="layout-container footer-grid">
        <div>
          <span className="footer-mark">BP</span>
          <p>Bibek Poudel</p>
        </div>
        <p>Full-Stack Software Engineer building production AI platforms, LLM infrastructure, and distributed full-stack systems.</p>
        <div className="footer-links">
          <a href="/BibekPoudelResume.pdf" download className="footer-resume-link">Download resume <ArrowDown size={14} /></a>
          <a href="mailto:bibekpoudel2056@gmail.com">Email <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/bibekpoudel38/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href="https://github.com/BibekPoudel38" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
        <p className="footer-copy">Artesia, California<br />&copy; {new Date().getFullYear()} Bibek Poudel</p>
      </div>
    </footer>
  );
}

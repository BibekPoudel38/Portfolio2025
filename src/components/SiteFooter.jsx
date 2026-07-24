import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export function SiteFooter() {
  return (
    <footer className="new-footer">
      <div className="layout-container footer-grid">
        <div>
          <span className="footer-mark">BP</span>
          <p>Bibek Poudel</p>
        </div>
        <p>Full-stack engineer building AI products, platforms, and data systems.</p>
        <div className="footer-links">
          <a href="mailto:bibekpoudel2056@gmail.com">Email <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/bibpou" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href="https://github.com/BibekPoudel38" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
        <p className="footer-copy">Artesia, California<br />&copy; {new Date().getFullYear()} Bibek Poudel</p>
      </div>
    </footer>
  );
}

import { ArrowDownToLine, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const LINKS = [
  ['Work', '/#work'],
  ['Experience', '/#experience'],
  ['Domains', '/#domains'],
  ['Skills', '/#skills'],
  ['Research', '/research/'],
  ['Contact', '/#contact'],
];

export function SiteNav({ tone = 'light' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-nav site-nav-${tone}`}>
      <div className="nav-container">
        <a className="nav-identity" href="/" aria-label="Bibek Poudel home">
          <span className="nav-monogram">BP</span>
          <span className="nav-name">Bibek Poudel</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {LINKS.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="nav-end">
          <a className="nav-resume" href="/BibekPoudelResume.pdf" download>
            Resume <ArrowDownToLine size={15} />
          </a>
          <button
            className="nav-menu-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {LINKS.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a href="/BibekPoudelResume.pdf" download onClick={() => setOpen(false)}>
            <span>PDF</span>Download resume
          </a>
        </nav>
      )}
    </header>
  );
}

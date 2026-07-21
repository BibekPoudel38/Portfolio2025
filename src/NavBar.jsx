import { ArrowDownToLine, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const LINKS = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Work', 'projects'],
  ['Skills', 'skills'],
  ['Research', 'publications'],
  ['Contact', 'contact'],
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="Bibek Poudel, home">
          <span className="brand-mark">BP</span>
          <span>Bibek Poudel</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="resume-link" href="/BibekPoudelResume.pdf" download>
            Resume <ArrowDownToLine size={14} aria-hidden="true" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {LINKS.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
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

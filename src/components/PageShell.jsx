import React from 'react';
import { SiteFooter } from './SiteFooter.jsx';
import { SiteNav } from './SiteNav.jsx';

export function PageShell({ children, navTone = 'light' }) {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav tone={navTone} />
      {children}
      <SiteFooter />
    </div>
  );
}

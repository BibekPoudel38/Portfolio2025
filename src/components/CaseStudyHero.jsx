import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import React from 'react';

export function CaseStudyHero({ eyebrow, title, summary, tags, sourceUrl, sourceLabel = 'View source', theme = 'blue' }) {
  return (
    <header className={`case-hero case-hero-${theme}`}>
      <div className="layout-container">
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back to portfolio</a>
        <p className="case-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="case-summary">{summary}</p>
        <div className="case-hero-bottom">
          <ul className="case-tags" aria-label="Topics">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          {sourceUrl && (
            <a className="case-source" href={sourceUrl} target="_blank" rel="noreferrer">
              {sourceLabel} <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

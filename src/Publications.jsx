import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const PUBLICATIONS = [
  {
    title: 'MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles',
    venue: 'Transportation Research Interdisciplinary Perspectives',
    detail: 'Volume 34, Article 101571',
    year: '2025',
    url: 'https://www.sciencedirect.com/science/article/pii/S2590198225002507',
  },
  {
    title: 'Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models',
    venue: 'Proceedings of RANLP 2025',
    detail: 'Pages 48-56, Varna, Bulgaria',
    year: '2025',
    url: 'https://acl-bg.org/proceedings/2025/RANLP%202025/pdf/2025.ranlp-1.6.pdf',
  },
];

export function Publications() {
  return (
    <section id="publications" className="section section-light research-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">05 / Research</span>
          <h2>Peer-reviewed work,<br />grounded in real problems.</h2>
        </div>

        <div className="publication-list">
          {PUBLICATIONS.map((publication, index) => (
            <a className="publication-row" key={publication.title} href={publication.url} target="_blank" rel="noreferrer">
              <span className="publication-index">0{index + 1}</span>
              <div className="publication-copy">
                <h3>{publication.title}</h3>
                <p>{publication.venue} <span>/</span> {publication.detail}</p>
              </div>
              <time>{publication.year}</time>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;

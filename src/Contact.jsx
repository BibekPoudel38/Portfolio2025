import { ArrowRight, Copy, Github, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react';

const EMAIL = 'bibekpoudel2056@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <span className="section-number">07 / Contact</span>
          <h2>Have a hard<br />problem to solve?</h2>
        </div>
        <div className="contact-panel">
          <p>
            I am open to full-time software engineering and AI product engineering opportunities,
            especially where architecture, agents, and real product ownership meet.
          </p>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            <span>{EMAIL}</span><ArrowRight size={22} />
          </a>
          <div className="contact-actions">
            <button type="button" onClick={copyEmail}><Copy size={16} /> {copied ? 'Copied' : 'Copy email'}</button>
            <a href="https://linkedin.com/in/bibpou" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/BibekPoudel38" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          </div>
          <div className="location-line"><Mail size={16} /> Artesia, California / Available across the United States</div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p><span>BP</span> Bibek Poudel</p>
        <p>Full-Stack AI Product Engineer</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

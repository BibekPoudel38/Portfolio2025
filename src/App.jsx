import React from 'react';
import { About } from './About.jsx';
import { Contact } from './Contact.jsx';
import { Education } from './Education.jsx';
import { Experience } from './Experience.jsx';
import { Footer } from './Footer.jsx';
import { Hero } from './Hero.jsx';
import { NavBar } from './NavBar.jsx';
import { Project } from './Project.jsx';
import { Publications } from './Publications.jsx';
import { Skills } from './Skill.jsx';

const App = () => (
  <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <NavBar />
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Publications />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;

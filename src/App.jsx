import React from 'react';
import { About } from './About.jsx';
import { Contact } from './Contact';
import { Education } from './Education';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NavBar } from './NavBar';
import { Project } from './Project';
import { Skills } from './Skill';
import { Publications } from './Publications.jsx';

const App = () => {

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-200 font-sans antialiased scroll-smooth overflow-x-hidden selection:bg-white selection:text-black">
      <NavBar />
      <div className="h-16" />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

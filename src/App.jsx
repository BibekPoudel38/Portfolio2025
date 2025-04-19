import React from 'react';
import { About } from './About.jsx';
import { Contact } from './Contact';
import { Education } from './Education';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NavBar } from './NavBar';
import { Project } from './Project';
import { Skill } from './Skill';

const App = () => {

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-fuchsia-800 text-white font-sans scroll-smooth overflow-x-hidden">
      <NavBar />
      <div className="h-24" />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

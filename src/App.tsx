import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
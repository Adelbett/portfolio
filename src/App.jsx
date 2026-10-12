import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Architecture from './components/sections/Architecture';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import FreelanceCTA from './components/sections/FreelanceCTA';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#020712] text-slate-100 overflow-x-hidden selection:bg-accent-cyan selection:text-space-950">
      
      {/* Background Starry & Cosmic Grid Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,27,62,0.6),rgba(2,7,18,1))]" />
        
        {/* Subtle geometric digital mesh grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Distant cosmic nebula spots */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Flow with Balanced Vertical Rhythm (No Artificial Gaps) */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Experience />
        <Skills />
        <Architecture />
        <Projects />
        <Certifications />
        <FreelanceCTA />
        <Contact />
      </main>

    </div>
  );
}

export default App;

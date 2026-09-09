import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-lightBg text-slate-800 dark:bg-darkBg dark:text-slate-100 font-sans transition-colors duration-300">
        {/* Navigation */}
        <Navbar />

        {/* Content Modules */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* About Me */}
          <About />

          {/* Technical Skills */}
          <Skills />

          {/* Professional Experience */}
          <Experience />

          {/* Featured Projects */}
          <Projects />

          {/* React Native Technical Architecture Deep Dive */}
          <Expertise />

          {/* Services Checklist */}
          <Services />

          {/* Resume CTA Section */}
          <ResumeCTA />

          {/* Interactive Contact Panel */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

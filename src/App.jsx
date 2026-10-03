import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIBuild from './components/WhatIBuild';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import TechStack from './components/TechStack';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import WhoBuildFor from './components/WhoBuildFor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-content-primary bg-studio-900 min-h-screen relative">
        {/* Full-site fixed WebGL particle background */}
        <div className="site-particles-background">
          <Particles
            particleColors={['#98c3fd']}
            particleCount={300}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Existing Website Content - Unchanged */}
        <div className="site-content flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <WhatIBuild />
            <About />
            <Services />
            <FeaturedProject />
            <Projects />
            <TechStack />
            <WhyChoose />
            <Process />
            <WhoBuildFor />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

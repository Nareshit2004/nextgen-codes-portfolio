import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import TextRoll from './ui/text-roll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-studio-900 pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-studio-800 via-studio-900 to-studio-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Large subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-800 border border-white/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[11px] font-medium tracking-wide text-content-secondary uppercase">Available for Freelance Projects</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            <span className="sr-only">WE BUILD DIGITAL EXPERIENCES THAT MOVE IDEAS FORWARD.</span>
            <div aria-hidden="true" className="flex flex-col">
              <BlurText text="WE BUILD" delay={0} animateBy="words" direction="top" stepDuration={0.35} className="block" />
              <BlurText text="DIGITAL" delay={120} animateBy="words" direction="top" stepDuration={0.35} className="block text-accent-cyan" />
              <BlurText text="EXPERIENCES" delay={240} animateBy="words" direction="top" stepDuration={0.35} className="block text-gradient-cyan" />
              <BlurText text="THAT MOVE IDEAS" delay={360} animateBy="words" direction="top" stepDuration={0.35} className="block" />
              <BlurText text="FORWARD." delay={480} animateBy="words" direction="top" stepDuration={0.35} className="block" />
            </div>
          </h1>
          
          <p className="text-lg text-content-secondary max-w-xl font-light leading-relaxed">
            Websites, web applications, AI projects, and custom digital solutions built precisely around your goals.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-content-primary text-studio-900 font-medium hover:bg-white hover:scale-[1.02] transition-all duration-300">
              Start a Project →
            </a>
            <a href="#work" className="px-6 py-3 rounded-xl glass-panel text-content-primary font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              Explore Our Work <span className="text-content-muted">↓</span>
            </a>
          </div>

          <div className="flex gap-3 pt-6">
            {['Web Development', 'AI & Data', 'Custom Solutions'].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-md bg-studio-800 text-content-muted border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Visual Composition */}
        <motion.div 
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Portrait Container */}
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden glass-panel p-2 shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-transparent opacity-50 z-10 pointer-events-none rounded-[2rem]"></div>
            <img 
              src="/images/portrait.png" 
              alt="NextGen Codes Founder" 
              className="w-full h-full object-cover rounded-[1.5rem] filter contrast-125 saturate-110"
            />
            <div className="absolute bottom-4 left-4 right-4 glass-pill px-4 py-3 flex items-center justify-between z-20">
              <div>
                <p className="text-xs font-medium text-white">Naresh Kumar</p>
                <p className="text-[10px] text-accent-cyan">Software / Web Developer</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1 h-3 bg-accent-cyan rounded-full animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            className="absolute -left-8 top-1/4 glass-panel p-3 flex flex-col gap-2 shadow-xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-24 h-2 bg-studio-600 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-accent-cyan rounded-full"></div>
            </div>
            <div className="w-16 h-2 bg-studio-600 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-accent-orange rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -right-4 bottom-1/3 glass-panel p-3 rounded-full flex items-center justify-center shadow-xl border-accent-cyan/20"
            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </motion.div>

          {/* Added Professional Info Block */}
          <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-8 lg:right-0 text-center lg:text-right w-full lg:w-auto px-4 sm:px-0 z-30">
             <h3 className="text-xl sm:text-2xl font-display font-bold mb-1 sm:mb-2 tracking-wider text-white drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
                <TextRoll>
                  Naresh Kumar
                </TextRoll>
             </h3>
             <p className="text-[11px] sm:text-xs text-content-secondary leading-relaxed max-w-sm mx-auto lg:mx-0">
                Software / Web Developer | AWS | AI & Deep Learning | SQL • Web Development
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

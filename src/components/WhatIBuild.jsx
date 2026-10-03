import React from 'react';

const skills = [
  "WEB DEVELOPMENT", "AI APPLICATIONS", "DATA DASHBOARDS", 
  "CUSTOM SOFTWARE", "STUDENT PROJECTS", "DIGITAL EXPERIENCES",
  "WEB DEVELOPMENT", "AI APPLICATIONS", "DATA DASHBOARDS", 
  "CUSTOM SOFTWARE", "STUDENT PROJECTS", "DIGITAL EXPERIENCES"
];

export default function WhatIBuild() {
  return (
    <div className="w-full bg-studio-800 border-y border-white/5 py-4 overflow-hidden relative flex">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-studio-800 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-studio-800 to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <span className="text-xs font-display font-medium tracking-[0.2em] text-content-muted px-8">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/30"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

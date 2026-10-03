import React from "react";

export default function Footer() {
  return (
    <footer className="bg-studio-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="font-display text-xl font-bold text-white mb-1">NextGen Codes</h2>
          <p className="text-content-muted text-sm">Ideas → Code → Digital Reality</p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-content-secondary">
          <a href="#services" className="hover:text-accent-cyan transition-colors">Services</a>
          <a href="#work" className="hover:text-accent-cyan transition-colors">Work</a>
          <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:text-left text-content-muted text-xs">
        <p>&copy; 2026 NextGen Codes. All rights reserved.</p>
      </div>
    </footer>
  );
}

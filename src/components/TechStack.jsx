import React from "react";
import { motion } from "framer-motion";

const techs = [
  "Python", "React", "JavaScript", "Flask", "FastAPI",
  "PyTorch", "OpenCV", "Pandas", "NumPy", "MySQL", 
  "SQLite", "Git", "GitHub", "Tailwind CSS", "Framer Motion"
];

export default function TechStack() {
  return (
    <section id="skills" className="py-32 relative bg-studio-900 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-studio-800 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-sm tracking-[0.2em] text-content-muted mb-12 uppercase">Technical Arsenal</h2>
        
        {/* Constellation / Grid Hybrid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              className="px-6 py-3 rounded-full border border-white/5 bg-studio-800/50 backdrop-blur-sm text-content-secondary font-medium cursor-default hover:border-accent-cyan/50 hover:text-white hover:bg-accent-cyan/5 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

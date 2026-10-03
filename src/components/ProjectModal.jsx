import React from "react";
import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

export default function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-studio-900/90 backdrop-blur-md" onClick={onClose}></div>
      
      <motion.div
        className="bg-studio-800 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl hide-scrollbar flex flex-col md:flex-row"
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="w-full md:w-2/5 h-64 md:h-auto bg-studio-900 relative">
          <ProjectImage 
            src={project.image} 
            alt={project.title} 
            category={project.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-800 md:bg-gradient-to-r to-transparent"></div>
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-12">
          <div className="flex gap-2 mb-4 flex-wrap">
             {project.category.map((cat, i) => (
                <span key={i} className="text-[10px] uppercase tracking-widest font-display text-accent-cyan border border-accent-cyan/20 px-2 py-1 rounded-full">
                  {cat}
                </span>
             ))}
          </div>

          <h3 className="font-display text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-content-secondary leading-relaxed mb-8">{project.description}</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-display uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span> Problem
              </h4>
              <p className="text-sm text-content-muted leading-relaxed">{project.problem}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-display uppercase tracking-widest text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm text-content-muted flex items-start gap-2">
                    <span className="text-accent-cyan mt-1">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-display uppercase tracking-widest text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-xs text-content-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

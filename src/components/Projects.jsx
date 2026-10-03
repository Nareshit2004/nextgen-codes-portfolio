import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web Application", "AI", "Data Analytics", "IoT"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = projects.filter(p =>
    filter === "All" ? true : p.category.some(cat => cat.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section id="projects" className="py-24 bg-studio-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4">Selected Works.</h2>
            <p className="text-content-secondary max-w-md">Explore our portfolio of applications, AI implementations, and digital platforms.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-content-primary text-studio-900" 
                    : "bg-studio-800 text-content-muted hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[350px]">
          {filtered.map((project, index) => {
            // Create asymmetric layout
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "lg:col-span-8" : "lg:col-span-4";
            
            return (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                className={`group relative rounded-2xl overflow-hidden glass-panel cursor-pointer ${colSpan} flex flex-col`}
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 z-0">
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-900 via-studio-900/60 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                  <p className="text-accent-cyan text-xs font-display tracking-widest uppercase mb-2">
                    {project.category[0]}
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-content-secondary text-sm line-clamp-2 mb-4 max-w-xl">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((t, i) => (
                         <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 backdrop-blur-md">
                           {t}
                         </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selected && (
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

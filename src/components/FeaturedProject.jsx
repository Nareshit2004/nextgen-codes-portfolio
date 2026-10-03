import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";
import ProjectImage from "./ProjectImage";
import ProjectVideoModal from "./ProjectVideoModal";

const featured = projects.find((p) => p.id === "smart-equipment");

export default function FeaturedProject() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!featured) return null;

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-sm tracking-[0.2em] text-accent-cyan mb-4 uppercase">Featured Showcase</h2>
          <p className="font-display text-4xl sm:text-5xl font-bold">Latest Innovation.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center glass-panel p-4 sm:p-8">
          
          <motion.div 
            className="lg:col-span-7 h-[400px] sm:h-[450px] w-full rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer"
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 0.99 }}
          >
            <ProjectImage 
              src={featured.image} 
              alt={featured.title} 
              category={featured.category}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-studio-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
              <span className="flex items-center gap-2 text-white font-medium bg-studio-800/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg">
                View Project Details <span className="text-accent-cyan">→</span>
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 p-4 lg:p-8 flex flex-col justify-center">
            <div className="flex gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 uppercase tracking-wider font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">{featured.title}</h3>
            <p className="text-content-secondary mb-8 leading-relaxed">
              {featured.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 items-center text-xs font-medium text-content-muted">
              {featured.technologies.map((t, i) => (
                <React.Fragment key={i}>
                  <span className="text-white/80">{t}</span>
                  {i < featured.technologies.length - 1 && <span className="text-accent-cyan/30">•</span>}
                </React.Fragment>
              ))}
            </div>

            <button 
              onClick={() => setIsVideoOpen(true)}
              className="self-start px-6 py-3 rounded-full bg-studio-800 border border-white/10 text-content-primary hover:bg-white hover:text-studio-900 transition-all font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Explore Project <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && <ProjectModal project={featured} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isVideoOpen && (
          <ProjectVideoModal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            title={featured.title}
            videoSrc="/videos/smart-ai-equipment-management.mp4"
            poster={featured.image}
            description={featured.description}
            technologies={featured.technologies.join(" • ")}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

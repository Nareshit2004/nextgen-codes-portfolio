import React from "react";
import { motion } from "framer-motion";

export default function WhoBuildFor() {
  return (
    <section id="clients" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold mb-16 text-center">Who We Partner With</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {[
            { title: "BUSINESSES", desc: "Websites & digital presence." },
            { title: "STARTUPS", desc: "MVPs & custom digital products." },
            { title: "STUDENTS", desc: "Academic & final-year projects." },
            { title: "INDIVIDUALS", desc: "Personal websites & solutions." },
          ].map((client, i) => (
            <motion.div 
              key={i}
              className="bg-studio-900 p-10 hover:bg-studio-800 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-sm tracking-widest text-accent-cyan uppercase mb-4">{client.title}</h3>
              <p className="text-content-secondary">{client.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

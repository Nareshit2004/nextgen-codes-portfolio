import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-300 ${
          scrolled ? 'max-w-4xl px-4' : 'max-w-7xl px-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="glass-pill px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-studio-700 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
              <span className="font-display font-bold text-accent-cyan text-sm tracking-tighter">NC</span>
            </div>
            <span className="font-display font-semibold text-content-primary tracking-wide text-sm hidden sm:block group-hover:text-white transition-colors">
              NextGen Codes
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.slice(1).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-content-secondary hover:text-accent-cyan transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-content-primary p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] bg-studio-900/90 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-content-secondary hover:text-white p-2"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-semibold text-content-secondary hover:text-accent-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

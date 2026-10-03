import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ProjectVideoModal.css';

export default function ProjectVideoModal({
  isOpen,
  onClose,
  title = "Smart AI Equipment Management System",
  videoSrc = "/videos/smart-ai-equipment-management.mp4",
  poster = "/images/smart-equipment.jpg",
  description = "An AI-powered industrial equipment monitoring platform that processes sensor and historical data to detect abnormal equipment behavior, analyze machine conditions, and provide intelligent maintenance insights.",
  technologies = "Python • Pandas • NumPy • Scikit-learn • Plotly • HTML • CSS • JavaScript"
}) {
  const videoRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Clean up and pause video when closing
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="project-video-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Backdrop with outside-click handler */}
      <motion.div
        className="project-video-modal__backdrop"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Modal Container */}
      <motion.div
        className="project-video-modal__content"
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="project-video-modal__header">
          <div>
            <span className="project-video-modal__label">PROJECT DEMO</span>
            <h2 id="video-modal-title" className="project-video-modal__title">
              {title}
            </h2>
          </div>
          <button
            type="button"
            className="project-video-modal__close"
            onClick={handleClose}
            aria-label="Close project video"
          >
            ×
          </button>
        </div>

        {/* Video Player */}
        <div className="project-video-modal__video-container">
          <video
            ref={videoRef}
            className="project-video-modal__video"
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>

        {/* Project Details Below Video */}
        <div className="project-video-modal__details">
          <h3 className="project-video-modal__project-heading">
            {title}
          </h3>
          <p className="project-video-modal__desc">
            {description}
          </p>
          {technologies && (
            <div className="project-video-modal__tech-section">
              <span className="project-video-modal__tech-label">Technology Stack</span>
              <span className="project-video-modal__tech-line">{technologies}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

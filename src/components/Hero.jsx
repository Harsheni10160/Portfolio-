// src/components/Hero.jsx - CSS Version
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profilePic from '../assets/second pic.jpg';
import './Hero.css'; // Assume you have some basic styles here

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div variants={itemVariants}>
            <span className="hero-badge">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="hero-title"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="hero-subtitle"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a 
              href={portfolioData.social.resume}
              className="btn btn-secondary"
              download
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="hero-social"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar/Animation Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hero-avatar"
        >
          <div className="avatar-container">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="avatar"
            >
              <img src={profilePic} alt={portfolioData.name} style={{ width: '92%', height: '92%', borderRadius: '9999px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.45)' }} />
            </motion.div>
            
            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="floating-element floating-element-1"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="floating-element floating-element-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="scroll-mouse"
        >
          <div className="scroll-dot"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
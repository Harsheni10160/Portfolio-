// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css'; // Assume you have some basic styles here

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`nav ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="nav-logo"
        >
          DH
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <motion.li key={item.name}>
              <motion.a
                href={item.href}
                whileHover={{ y: -2 }}
                className="nav-link"
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="nav-toggle"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0
            }}
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="nav-mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
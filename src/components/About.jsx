// src/components/About.jsx - CSS Version
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './About.css'; // Assume you have some basic styles here

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const skillCategories = [
    { title: 'Frontend', skills: portfolioData.about.skills.frontend, className: 'frontend' },
    { title: 'Backend', skills: portfolioData.about.skills.backend, className: 'backend' },
    { title: 'Programs', skills: portfolioData.about.skills.programs, className: 'programs' },
    { title: 'Tools', skills: portfolioData.about.skills.tools, className: 'tools' },
    { title: 'Learning', skills: portfolioData.about.skills.learning, className: 'learning' }
  ];

  const deviconClassMap = {
    React: 'devicon-react-original colored',
    JavaScript: 'devicon-javascript-plain colored',
    HTML5: 'devicon-html5-plain colored',
    CSS3: 'devicon-css3-plain colored',
    'Tailwind CSS': 'devicon-tailwindcss-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    Express: 'devicon-express-original',
    MongoDB: 'devicon-mongodb-plain colored',
    Git: 'devicon-git-plain colored',
    'VS Code': 'devicon-vscode-plain colored',
    Figma: 'devicon-figma-plain colored',
    Photoshop: 'devicon-photoshop-plain colored',
    TypeScript: 'devicon-typescript-plain colored',
    'Three.js': 'devicon-threejs-original',
    Java: 'devicon-java-plain colored',
    Python: 'devicon-python-plain colored',
    'C++': 'devicon-cplusplus-plain colored'
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </motion.div>

        <div className="about-content">
          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-text"
          >
            <motion.div variants={itemVariants}>
              <h3>Hello! I'm Deva Harsheni</h3>
              <p>{portfolioData.about.description}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="status-indicator">
              <div className="status-dot"></div>
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="skills-section"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants} className="skill-category">
                <h4>{category.title}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={`${category.title}-${skillIndex}`}   // ✅ FIXED KEY
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`skill-tag ${category.className}`}
                    >
                      <span className="skill-icon-wrapper">
                        <i className={deviconClassMap[skill] || 'devicon-plain'} aria-hidden="true"></i>
                      </span>
                      <span className="skill-label">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Fun Stats */}
            <motion.div variants={itemVariants} className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
